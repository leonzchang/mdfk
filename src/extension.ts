// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mdfk" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mdfk.check', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Surprise ');
		// get file content
		const text = vscode.window.activeTextEditor!.document.getText();
		// Give each keyword a group in the pattern
		const pattern = new RegExp('todo', 'gi');

		let match: RegExpExecArray | null, mathes = {};

		let i = 1
		console.log('text:', text);

		while (match = pattern.exec(text)) {
			console.log(i);
			let startPos = vscode.window.activeTextEditor!.document.positionAt(match!.index);
			let endPos = vscode.window.activeTextEditor!.document.positionAt(match!.index + match![0].length);
			console.log('position start:', startPos, 'end:', endPos);
			i++
		}


	});

	context.subscriptions.push(disposable);
}


// this method is called when your extension is deactivated
export function deactivate() { }
