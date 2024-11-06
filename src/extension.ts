// Imports
import * as vscode from 'vscode';
import { ErrorListener } from './compiler/errors/ErrorListener';
import { Elaboration } from './compiler/Elaboration';
import { Generation } from './compiler/Generation';
import { Instructions } from './compiler/instruction/Instructions';
import { InstructionType } from './compiler/instruction/InstructionType';
import * as os from 'os';

// Version
const version = "1.0.0";

//Create output channel for INFO and ERROR messages
let output = vscode.window.createOutputChannel("FPGA Assembly Compiler", "outputs");

// This function runs on activation of the extenstion. The function loads all user commands.
export function activate(context: vscode.ExtensionContext) {

	// When executing this command, an information box with the version number will appear.
	const versionMessage = vscode.commands.registerCommand('fac.version', () => {

		vscode.window.showInformationMessage(
			`fac: Current version is ${version}.`
		);

	});

	// When executing this command, the code in the currently opened file is executed. 
	// It is required that the file extension is '.fac' and that a folder is opened.
	const compile = vscode.commands.registerCommand('fac.compile', () => {

		// Check if there is an active text editor, else return error message.
		if(vscode.window.activeTextEditor === undefined) {
			vscode.window.showErrorMessage(
				"fac: No file opened, open file."
			);
		} 
		// Check if file extension is .fac, otherwise show error message.
		else if (!vscode.window.activeTextEditor.document.fileName.includes(".fac")) {
			vscode.window.showErrorMessage(
				"fac: Can only compile .fac."
			);
		}
		// Check if a folder is opened, if not, display error. Code needs a folder
		// to be able to generate binaries.
		else if (vscode.workspace.workspaceFolders === undefined) {
			vscode.window.showErrorMessage(
				"fac: Working folder not found, open a folder and try again."
			);
		}
		else {
			// Get currently opened document
			const document = vscode.window.activeTextEditor.document;
			// Define ErrorListener
			const errorHandler = new ErrorListener();

			// Instantiate Elaboration and Generation stage
			const elaborator = new Elaboration(output, errorHandler);
			const generator = new Generation(output, errorHandler);

			// Check if the current document is actually a document and not 
			// an output file. (Weird VS code bug.)
			if(document.uri.scheme !== "output") {

				// If file is not saved, save file.
				if(document.isDirty) {
					document.save();
					consolePrint(output, "Saved \"" + document.fileName + "\"");
				}
	
				// Notify user that compiling has started.
				consolePrint(output, "Compiling \"" + document.fileName + "\"");
	
				// Elaboration state of compiler
				elaborator.elaborate(document.getText());

				// If errors are found during elaboration, they are printed and the process is halted.
				if(!errorHandler.hasErrors()) {

					// Generation stage of compiler
					let resultGenerate: Instructions[] = generator.generate(
						document.getText(), 
						elaborator.labels
					);

					// If errors are found during generation, they are printed and the process is halted.
					if(
						errorHandler.hasErrors()
					) {
		
						// Notify user of errors.
						vscode.window.showErrorMessage(
							"fac: Compilation failed due to syntax errors. See output channel for information."
						);

						// Force output channel to screen
						output.show();

						// Print all errors
						for(var error of errorHandler.getErrors()) {
							output.appendLine(error.toString());
						}
						
					} else {

						// Generate formatted binary string of the generated instructions
						let file: string = "";
						for(var instr of resultGenerate) {
							file += instr.toString() + "\n";
						}
						for(let i = 0; i < 1024 - resultGenerate.length; i++) {
							file += "00000000000000000000000000000000\n";
						}
		
						// Get the filename of the current file
						let filename = document.fileName;
						let filesystem = "/";
						if(filename.indexOf('\\') !== -1) {
							filesystem = "\\";
						}
						while(filename.indexOf(filesystem) !== -1) {
							filename = filename.substring(
								filename.indexOf(filesystem) + 1
							);
						}

						// Also gets the filepath
						let filepath = document.fileName.substring(
							0, document.fileName.length - filename.length
						);
						// Stores filename
						filename = filename.substring(
							0, filename.length - 4
						);
		
						// If in settings generate binaries is enabled, generate file containing binary strings of
						// the generated instructions.
						if(vscode.workspace.getConfiguration('fac').get('generateBin')) {
							let folder = `${filepath}binaries_${filename}${filesystem}code.bin`;
							vscode.workspace.fs.writeFile(
								vscode.Uri.file(folder), 
								Buffer.from(file)
							);
						}

						// Generate Intel HEX file in binary folder. The user cannot disable this, since this is uploaded
						// to the FPGA.
						let hexFile = `${filepath}binaries_${filename}${filesystem}code.hex`;
						vscode.workspace.fs.writeFile(
							vscode.Uri.file(hexFile), 
							Buffer.from(generateHex(resultGenerate))
						);

						// If in setting generate markdown file is enabled, generate markdown file containing compilation
						// information.
						if(vscode.workspace.getConfiguration('fac').get('generateMd')) {
							let mdFile = `${filepath}binaries_${filename}${filesystem}code.md`;
							vscode.workspace.fs.writeFile(
								vscode.Uri.file(mdFile), 
								Buffer.from(generateMd(resultGenerate, filename))
							);
						}

						// Notify user of succesfull compilation
						vscode.window.showInformationMessage(
							"fac: Succesfully compiled file."
						);

						// Also print this notification to output channel
						consolePrint(output, "Compilation succesfull.");

					}

				} else {

					// Notify user of errors.
					vscode.window.showErrorMessage(
						"fac: Compilation failed due to syntax errors. See output channel for information."
					);

					// Force output channel to screen
					output.show();

					// Print all errors
					for(var error of errorHandler.getErrors()) {
						output.appendLine(error.toString());
					}

				}
				
			} else {

				// (In case document is an output file, just change the document and recompile.)
				// Notifies user that the file needs to be changed for compilation.
				consolePrint(output, "Change document before recompiling.");

			}
		} 
	});

	// The original plan was to include debug functionality in the extension. This was not added
	// due to time constraints. This command currently only checks your plink version.
	const debugMode = vscode.commands.registerCommand('fac.debug', () => {

		let platform = "";

		if(os.platform() === 'darwin') {
			platform = "macOS";
		} else {
			platform = "Windows";
		}

		const terminal = vscode.window.createTerminal({
			name: 'fac Terminal',
			hideFromUser: false
		});

		terminal.sendText("plink -V");

	});

	// Adds commands to VS Code.
	context.subscriptions.push(compile);
	context.subscriptions.push(versionMessage);
	context.subscriptions.push(debugMode);
}

// This method is called when the extension is deactivated. Currently unused.
export function deactivate() {}

/** 
 * Function for generating Intel HEX string for the FPGA.
 * @param instr The list of instructions.
 * @returns A formatted string, containing all instructions in Intel HEX format.
 */
function generateHex(instr: Instructions[]): string {

	// Load nop instruction
	let nop: Instructions = new Instructions(
		InstructionType.R,
		"1110",
		0,
		"0000",
		"0000",
		"0000"
	);
	// Constants
	let addressCounter = 0;
	let line = "";

	// First instruction is a nop, so load nop
	let file = "04000000" + nop.toHex();
	file = ":" + file + calculateCrc(file) + "\n";
	addressCounter++;

	// For each instruction, convert to HEX format and add to string
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

	// Memory needs 1024 instructions, so add nops for all left-over instructions.
	for(let i = 0; i < 1023 - instr.length; i++) {
		line += "04";								// Data length (in bytes)
		line += convertAddressToHex(addressCounter);// Address
		line += "00"; 								// Record type
		line += nop.toHex();						// Data
		line += calculateCrc(line);					// CRC

		addressCounter++;
		file += ":" + line + "\n";
		line = "";
	}

	file += ":00000001FF"; // End of file

	return file; // Return formatted string
}

/**
* Calculates the CRC for the Intel HEX format based on an inputted string.
* @param val The string that needs a CRC value.
* @return CRC as string.
*/
function calculateCrc(val: string): string {
	// Sum constant
	let sum = 0;

	// Loops over each hexadecimal pair (one Byte) and sums them
	for(let i = 0; i < val.length / 2; i++) {
		sum += Number(
			"0x" + val.charAt(2*i) + val.charAt(2*i + 1)
		);
	}

	// Calculates two's complement of the sum
	sum = (1 + ~(sum % 256)) >>> 0;

	// Converts result to hexadecimal string
	let returnValue = sum.toString(16);

	// Makes sure the string is only two hexadecimal values
	return returnValue.substring(
		returnValue.length - 2, returnValue.length
	).padStart(2, "0");
}

/** 
* Converts address number to hexadecimal string.
* @param addr Integer value of memory address.
* @return Address as hexadecimal string.
*/
function convertAddressToHex(addr: number): string {
	return addr.toString(16).padStart(4, "0");
}

function generateMd(instr: Instructions[], filename: string): string {

	let mdFile = "";

	mdFile += `# Compilation result of ${filename}\n`;
	mdFile += `Found ${instr.length} instructions, which can be viewed in this table!\n\n`;
	mdFile += "|Instruction (bin) | Opcode (bin) | Opcode (name) | Rs (bin)| Rs (name) | Rd (bin) | Rd (name) | Rt (bin) | Rt (name) | Imm (bin) | Imm (num) |\n";
	mdFile += "| ----- | ----- | ---- | --- | ------ | ------ | ------ | ----- | ----- | ----- | ------ |\n";

	for(var instruct of instr) {
		mdFile += instruct.toMd() + "\n";
	}

	return mdFile;
}

/**
 * Function to simplify printing to output channel. It adds the current time
 * and the INFO keyword to the message.
 * @param channel Output channel to print to.
 * @param message Message to print to output channel.
 */
function consolePrint(channel: vscode.OutputChannel, message: String) {
	channel.appendLine(
		new Date().toLocaleString('en-GB') + " [INFO] " + message
	);
}
