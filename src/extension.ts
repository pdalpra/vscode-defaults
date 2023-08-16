// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(_context: vscode.ExtensionContext) {
	/* eslint-disable @typescript-eslint/naming-convention */
	const defaults = {
		"editor.fontFamily": "'Jetbrains Mono Nerd Font', 'monospace', monospace",
		"editor.fontLigatures": true,
		"editor.renderWhitespace": "boundary",
		"editor.formatOnPaste": true,
		"editor.formatOnSave": true,
		"files.autoSave": "onFocusChange",
		"explorer.confirmDragAndDrop": false,
		"workbench.startupEditor": "none",
		"workbench.colorTheme": "Tomorrow Night Eighties",
		"telemetry.telemetryLevel": "off",
		"update.showReleaseNotes": false,
		"security.workspace.trust.enabled": false,
		"git.allowForcePush": true,
		"gitlens.showWhatsNewAfterUpgrades": false,
		"gitlens.showWelcomeOnInstall": false,
		"update.mode": "none",
		"terminal.integrated.enableMultiLinePasteWarning": false,
	};

	const expectedExtensions = {
		"GitLens": "eamodio.gitlens",
		"Nix Environment Selector": "arrterian.nix-env-selector"
	};

	const configuration = vscode.workspace.getConfiguration();

	// Warn if some expected extensions are missing
	for (const [name, identifier] of Object.entries(expectedExtensions)) {
		if (vscode.extensions.getExtension(identifier) === undefined) {
			vscode.window.showWarningMessage(`Expected extension ${name}(${identifier}) is disabled or missing`);
		}
	}

	// Reset settings to defaults
	for (const [key, value] of Object.entries(defaults)) {
		const key_settings = configuration.inspect(key);
		if (key_settings?.globalValue !== value) {
			configuration.update(key, value, vscode.ConfigurationTarget.Global);
		}
	};


}

export function deactivate() { }
