'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as mkdirp from 'mkdirp';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "fdsangular2" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    let addcomponent = vscode.commands.registerCommand('extension.AddComponent', () => {
        let name = '';

        //vscode.window.showInputBox({prompt: 'Define a name for the new Component'})
        //    .then(val => { name = val });
        
        
        //vscode.window.showInformationMessage('Name: ' + name);

        var mkdirp = require('mkdirp');
        mkdirp('src/client/app/klaas', function(err) { 
           vscode.window.showInformationMessage(err); 
        });
        //vscode.workspace.openTextDocument('/src/client/app/' + name + '/'+ name + 'controller.ts');

        //let editor = vscode.window.activeTextEditor;
        //editor.document.save();

    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(addcomponent);
}

// this method is called when your extension is deactivated
export function deactivate() {
}