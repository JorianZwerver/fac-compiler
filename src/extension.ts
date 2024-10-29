import * as vscode from 'vscode';
import { ErrorListener } from './compiler/errors/ErrorListener';
import { Elaboration } from './compiler/Elaboration';
import { Generation } from './compiler/Generation';
import { Instructions } from './compiler/instruction/Instructions';
import { InstructionType } from './compiler/instruction/InstructionType';

// Constants
const version = "0.0.1";

//Create output channel
let output = vscode.window.createOutputChannel("FPGA Assembly Compiler", "outputs");

export function activate(context: vscode.ExtensionContext) {

	const versionMessage = vscode.commands.registerCommand('fac.version', () => {

		vscode.window.showInformationMessage(
			`fac: Current version is ${version}.`
		);

	});

	/*
		TODO:
			- Testing
	*/

	const compile = vscode.commands.registerCommand('fac.compile', () => {

		if(vscode.window.activeTextEditor === undefined) {
			vscode.window.showErrorMessage(
				"fac: No file opened, open file."
			);
		} 
		else if (!vscode.window.activeTextEditor.document.fileName.includes(".fac")) {
			vscode.window.showErrorMessage(
				"fac: Can only compile .fac."
			);
		}
		else if (vscode.workspace.workspaceFolders === undefined) {
			vscode.window.showErrorMessage(
				"fac: Working folder not found, open a folder and try again."
			);
		}
		else {
			const document = vscode.window.activeTextEditor.document;
			const errorHandler = new ErrorListener();

			const elaborator = new Elaboration(output, errorHandler);
			const generator = new Generation(output, errorHandler);

			if(document.uri.scheme !== "output") {

				if(document.isDirty) {
					document.save();
					consolePrint(output, "Saved \"" + document.fileName + "\"");
				}
	
				consolePrint(output, "Compiling \"" + document.fileName + "\"");
	
				elaborator.elaborate(document.getText());

				if(!errorHandler.hasErrors()) {

					let resultGenerate: Instructions[] = generator.generate(
						document.getText(), 
						elaborator.labels
					);

					if(
						errorHandler.hasErrors()
					) {
		
						vscode.window.showErrorMessage(
							"fac: Compilation failed due to syntax errors. See output channel for information."
						);

						output.show();

						for(var error of errorHandler.getErrors()) {
							output.appendLine(error.toString());
						}
						
					} else {

						let file: string = "";
						for(var instr of resultGenerate) {
							file += instr.toString() + "\n";
						}
						for(let i = 0; i < 1024 - resultGenerate.length; i++) {
							file += "00000000000000000000000000000000\n";
						}
		
						// Gets the actual filename
						let filename = document.fileName;
						while(filename.search("/") !== -1) {
							filename = filename.substring(
								filename.search("/") + 1
							);
						}
						let filepath = document.fileName.substring(
							0, document.fileName.length - filename.length
						);
						filename = filename.substring(
							0, filename.length - 4
						);
		

						if(vscode.workspace.getConfiguration('fac.generateBin')) {
							let folder = `${filepath}binaries_${filename}/code.bin`;
							vscode.workspace.fs.writeFile(
								vscode.Uri.file(folder), 
								Buffer.from(file)
							);
						}

						
						let hexFile = `${filepath}binaries_${filename}/code.hex`;
						vscode.workspace.fs.writeFile(
							vscode.Uri.file(hexFile), 
							Buffer.from(generateHex(resultGenerate))
						);

						if(vscode.workspace.getConfiguration('fac.generateMd')) {
							let mdFile = `${filepath}binaries_${filename}/code.md`;
							vscode.workspace.fs.writeFile(
								vscode.Uri.file(mdFile), 
								Buffer.from(generateMd(resultGenerate, filename))
							);
						}

						vscode.window.showInformationMessage(
							"fac: Succesfully compiled file."
						);

						consolePrint(output, "Compilation succesfull.");

					}

				} else {

					vscode.window.showErrorMessage(
						"fac: Compilation failed due to syntax errors. See output channel for information."
					);

					output.show();

					for(var error of errorHandler.getErrors()) {
						output.appendLine(error.toString());
					}

				}
				
			} else {

				consolePrint(output, "Change document before recompiling.");

			}
		} 
	});

	context.subscriptions.push(compile);
	context.subscriptions.push(versionMessage);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function generateHex(instr: Instructions[]): string {

	let nop: Instructions = new Instructions(
		InstructionType.R,
		"1110",
		0,
		"0000",
		"0000",
		"0000"
	);
	let addressCounter = 0;
	let line = "";

	let file = "04000000" + nop.toHex();
	file = ":" + file + calculateCrc(file) + "\n";
	addressCounter++;

	for(var i of instr) {

		line += "04";								// Data length (in bytes)
		line += convertAddressToHex(addressCounter);// Address
		line += "00"; 								// Record type
		line += i.toHex();							// Data
		line += calculateCrc(line);					// CRC

		addressCounter++;
		file += ":" + line + "\n";
		line = "";	
	}

	for(let i = 0; i < 1023 - instr.length; i++) {
		line += "04";								// Data length (in bytes)
		line += convertAddressToHex(addressCounter);// Address
		line += "00"; 								// Record type
		line += nop.toHex();							// Data
		line += calculateCrc(line);					// CRC

		addressCounter++;
		file += ":" + line + "\n";
		line = "";
	}

	file += ":00000001FF"; // End of file

	return file;
}

function calculateCrc(val: string): string {

	let sum = 0;

	for(let i = 0; i < val.length / 2; i++) {
		sum += Number(
			"0x" + val.charAt(2*i) + val.charAt(2*i + 1)
		);
	}

	sum = (1 + ~(sum % 256)) >>> 0;

	let returnValue = sum.toString(16);

	return returnValue.substring(
		returnValue.length - 2, returnValue.length
	).padStart(2, "0");
}

function convertAddressToHex(addr: number): string {
	return addr.toString(16).padStart(4, "0");
}

function generateMd(instr: Instructions[], filename: string): string {

	let mdFile = "";

	mdFile += `# Compilation result of ${filename}\n`;
	mdFile += `Found ${instr.length} instructions, which can viewed in this table!\n\n`;
	mdFile += "|Instruction (bin) | Opcode (bin) | Opcode (name) | Rs (bin)| Rs (name) | Rd (bin) | Rd (name) | Rt (bin) | Rt (name) | Imm (bin) | Imm (num) |\n";
	mdFile += "| ----- | ----- | ---- | --- | ------ | ------ | ------ | ----- | ----- | ----- | ------ |\n";

	for(var instruct of instr) {
		mdFile += instruct.toMd() + "\n";
	}

	return mdFile;
}

function consolePrint(channel: vscode.OutputChannel, message: String) {
	channel.appendLine(
		new Date().toLocaleString('en-GB') + " [INFO] " + message
	);
}
