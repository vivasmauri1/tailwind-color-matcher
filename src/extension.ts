import * as vscode from 'vscode';
import { TailwindNearestColorProvider } from './NearestColorViewProvider';
import { commands } from './commands';

const subscribeCommands = (context: vscode.ExtensionContext) => {
  const provider = new TailwindNearestColorProvider(context);

  context.subscriptions.push(
    vscode.commands.registerCommand(commands.matchColor.command, () =>
      commands.matchColor.callback(provider),
    ),
    vscode.commands.registerCommand(
      commands.setTailwindVersion.command,
      commands.setTailwindVersion.callback,
    ),
    vscode.window.registerWebviewViewProvider(
      TailwindNearestColorProvider.viewType,
      provider,
      {
        webviewOptions: {
          retainContextWhenHidden: true,
        },
      },
    ),
  );
};

export const activate = (context: vscode.ExtensionContext) => {
  subscribeCommands(context);
};
export function deactivate() {}
