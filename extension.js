// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const os = require('os');
const path = require('path');
const process = require('process');
const bat_path = './build.bat';

const run_cmd = './RunCmd.exe'
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "qnxbuilder" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.QnxBuild', function (uri) {
        // The code you place here will be executed every time your command is executed
        let act_term = null;
        let terms = vscode.window.terminals;

        for (let t in terms) {
            if (terms[t]['creationOptions']['cwd'] == uri.fsPath) {
                act_term = terms[t];
                break;
            };
        };
        if (act_term) {

            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }
        else {
            act_term = vscode.window.createTerminal({ name: 'QnxBuilder', cwd: uri.fsPath });
            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }

        act_term.sendText(`${context.asAbsolutePath(run_cmd)} ${context.asAbsolutePath(bat_path)} all`);
        // act_term.sendText(`cmd /c call build.bat`, true);
    });
    let disposable2 = vscode.commands.registerCommand('extension.QnxReBuild', function (uri) {
        // The code you place here will be executed every time your command is executed
        let act_term = null;
        let terms = vscode.window.terminals;

        for (let t in terms) {
            if (terms[t]['creationOptions']['cwd'] == uri.fsPath) {
                act_term = terms[t];
                break;
            };
        };
        // Display a message box to the user
        // vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.fsPath : '空'}`);
        if (act_term) {

            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }
        else {
            act_term = vscode.window.createTerminal({ name: 'QnxBuilder', cwd: uri.fsPath });
            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }
        
        act_term.sendText(`${context.asAbsolutePath(run_cmd)} ${context.asAbsolutePath(bat_path)} clean`);
        // act_term.sendText(`cmd /c call build.bat`, true);
    });
    let disposable3 = vscode.commands.registerCommand('extension.GenLdra', function (uri) {
        // The code you place here will be executed every time your command is executed
        let act_term = null;
        let terms = vscode.window.terminals;

        for (let t in terms) {
            if (terms[t]['creationOptions']['cwd'] == uri.fsPath) {
                act_term = terms[t];
                break;
            };
        };
        // Display a message box to the user
        // vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.fsPath : '空'}`);
        if (act_term) {

            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }
        else {
            act_term = vscode.window.createTerminal({ name: 'QnxBuilder', cwd: uri.fsPath });
            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }

        act_term.sendText(`${context.asAbsolutePath(run_cmd)} ${context.asAbsolutePath(bat_path)} Ldra`);
        // act_term.sendText(`cmd /c call build.bat`, true);
    });
    let disposable4 = vscode.commands.registerCommand('extension.GenUtEnv', function (uri) {
        // The code you place here will be executed every time your command is executed
        let act_term = null;
        let terms = vscode.window.terminals;

        for (let t in terms) {
            if (terms[t]['creationOptions']['cwd'] == uri.fsPath) {
                act_term = terms[t];
                break;
            };
        };
        // Display a message box to the user
        // vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.fsPath : '空'}`);
        if (act_term) {

            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }
        else {
            act_term = vscode.window.createTerminal({ name: 'QnxBuilder', cwd: uri.fsPath });
            act_term.sendText(`cd "${uri.fsPath}"`, true);
            act_term.show(false);
        }

        act_term.sendText(`${context.asAbsolutePath(run_cmd)} ${context.asAbsolutePath(bat_path)} UtEnv`);
        // act_term.sendText(`cmd /c call build.bat`, true);
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
    context.subscriptions.push(disposable4);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { 
    console.log("your extension was deactivated")
}

module.exports = {
    activate,
    deactivate
}
