import * as vscode from 'vscode';

export class DartFillClassActionProvider implements vscode.CodeActionProvider {
    
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<(vscode.CodeAction | vscode.Command)[]> {
        throw new Error('Method not implemented.');
    }
    resolveCodeAction?(codeAction: vscode.CodeAction, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeAction> {
        throw new Error('Method not implemented.');
    }

    private fillClass(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction{
        const fillClassFix = new vscode.CodeAction(
            "Fill Class",
            vscode.CodeActionKind.QuickFix
        );

        fillClassFix.edit = new vscode.WorkspaceEdit();
        

        return fillClassFix
    }
    
}