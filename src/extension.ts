// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { v1, v3, v4, v5 } from "uuid";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerComman
	let disposable = vscode.commands.registerCommand('extension.uuid-generate', () => {
		const editor = vscode.window.activeTextEditor;		
		if (!editor) return;
		
		const uuid = v1();
		editor.edit(editBuilder => {
			editBuilder.insert(editor.selection.active, uuid);
		});

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
