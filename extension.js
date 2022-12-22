// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "e2h" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('e2h.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			const data = {
				"פ": "p",
				"ם": "o",
				"ן": "i",
				"ו": "u",
				"ט": "y",
				"א": "t",
				"ר": "r",
				"ק": "e",
				"ש": "a",
				"ד": "s",
				"ג": "d",
				"כ": "f",
				"ע": "g",
				"י": "h",
				"ח": "j",
				"ל": "k",
				"ך": "l",
				"ז": "z",
				"ס": "x",
				"ב": "c",
				"ה": "v",
				"נ": "b",
				"מ": "n",
				"צ": "m",
				"ת": ",",
				"ף": ";",
				"ץ": ".",
				"'": "w"
			}


			const translate = (text) => {
				const keys = Object.keys(data);
				const values = Object.values(data);
				const textArray = text.split('');
				const translatedArray = textArray.map((letter) => {
					if (keys.includes(letter)) {
						return values[keys.indexOf(letter)];
					}
					return letter;
				});
				return translatedArray.join('');
			}





			// Get the word within the selection
			const word = document.getText(selection);
			const changedToEnglish = translate(word)
			editor.edit(editBuilder => {
				editBuilder.replace(selection, changedToEnglish);
			});
			vscode.window.showInformationMessage(`test ${word}`);
		}

		// Display a message box to the user
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
