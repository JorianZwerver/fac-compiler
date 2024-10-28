import * as vscode from 'vscode';
import { ErrorListener } from './compiler/errors/ErrorListener';
import { Elaboration } from './compiler/Elaboration';
import { Generation } from './compiler/Generation';
import { Instructions } from './compiler/instruction/Instructions';

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
		
						let folder = `${filepath}binaries_${filename}/output_${filename}.txt`;
						vscode.workspace.fs.writeFile(
							vscode.Uri.file(folder), 
							Buffer.from(file)
						);

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

export function consolePrint(channel: vscode.OutputChannel, message: String) {
	channel.appendLine(
		new Date().toLocaleString('en-GB') + " [INFO] " + message
	);
}
