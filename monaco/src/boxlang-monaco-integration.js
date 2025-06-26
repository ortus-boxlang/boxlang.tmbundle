/**
 * BoxLang Monaco Integration Example
 *
 * This file shows how to integrate BoxLang support into an existing Monaco Editor setup.
 * Use this as a reference for your own projects.
 */

// Import Monaco Editor and BoxLang support
import * as monaco from 'monaco-editor';

// Import BoxLang language support files
// Note: Adjust paths based on your project structure
import { boxlangLanguageConfig } from './boxlang-language-config';
import { boxlangMonarchTokens } from './boxlang-monarch-tokens';
import { boxlangTheme } from './boxlang-theme';

/**
 * Initialize BoxLang support for Monaco Editor
 */
export function initializeBoxLangSupport() {
    // Register BoxLang languages
    monaco.languages.register({
        id: 'boxlang',
        extensions: ['.bx', '.bxs'],
        aliases: ['BoxLang Script', 'boxlang'],
        mimetypes: ['text/x-boxlang']
    });

    monaco.languages.register({
        id: 'boxlang-template',
        extensions: ['.bxm'],
        aliases: ['BoxLang Template', 'boxlang-template'],
        mimetypes: ['text/x-boxlang-template']
    });

    // Set language configurations
    monaco.languages.setLanguageConfiguration('boxlang', boxlangLanguageConfig);
    monaco.languages.setLanguageConfiguration('boxlang-template', boxlangLanguageConfig);

    // Set syntax highlighting
    monaco.languages.setMonarchTokensProvider('boxlang', boxlangMonarchTokens.script);
    monaco.languages.setMonarchTokensProvider('boxlang-template', boxlangMonarchTokens.template);

    // Define BoxLang theme
    monaco.editor.defineTheme('boxlang-theme', boxlangTheme);

    // Register completion providers
    registerBoxLangCompletions();

    console.log('BoxLang support initialized for Monaco Editor');
}

/**
 * Register completion providers for BoxLang
 */
export function registerBoxLangCompletions() {
    // BoxLang Script completions
    monaco.languages.registerCompletionItemProvider('boxlang', {
        provideCompletionItems: (model, position) => {
            const suggestions = [
                // Keywords
                {
                    label: 'class',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'class ${1:name} {\\n\\t$2\\n}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Create a BoxLang class',
                    detail: 'BoxLang class'
                },
                {
                    label: 'function',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'function ${1:name}( ${2:arguments} ) {\\n\\t$3\\n\\treturn ${4:result};\\n}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Create a BoxLang function',
                    detail: 'BoxLang Function'
                },
                {
                    label: 'if',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'if ( ${1:condition} ) {\\n\\t$2\\n}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'If statement',
                    detail: 'Control Flow'
                },
                {
                    label: 'for',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'for ( ${1:var i = 1}; ${2:i <= 10}; ${3:i++} ) {\\n\\t$4\\n}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'For loop',
                    detail: 'Control Flow'
                },
                {
                    label: 'try',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'try {\\n\\t$1\\n} catch ( ${2:any e} ) {\\n\\t$3\\n}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Try-catch block',
                    detail: 'Error Handling'
                },

                // Common BoxLang functions
                {
                    label: 'arrayLen',
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'arrayLen( ${1:array} )',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Returns the length of an array',
                    detail: 'Built-in Function'
                },
                {
                    label: 'structKeyExists',
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'structKeyExists( ${1:struct}, "${2:key}" )',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Checks if a key exists in a struct',
                    detail: 'Built-in Function'
                },
                {
                    label: 'queryExecute',
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'queryExecute( "${1:sql}", ${2:params}, ${3:options} )',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Execute a SQL query',
                    detail: 'Built-in Function'
                }
            ];

            return { suggestions };
        }
    });

    // BoxLang Template completions
    monaco.languages.registerCompletionItemProvider('boxlang-template', {
        provideCompletionItems: (model, position) => {
            const suggestions = [
                {
                    label: 'bx:if',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<bx:if condition="${1:condition}">\\n\\t$2\\n</bx:if>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'BoxLang conditional tag',
                    detail: 'BoxLang Tag'
                },
                {
                    label: 'bx:loop',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<bx:loop ${1:array="#items#" item="item"}>\\n\\t$2\\n</bx:loop>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'BoxLang loop tag',
                    detail: 'BoxLang Tag'
                },
                {
                    label: 'bx:script',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<bx:script>\\n\\t$1\\n</bx:script>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'BoxLang script block',
                    detail: 'BoxLang Tag'
                }
            ];

            return { suggestions };
        }
    });
}

/**
 * Create a BoxLang-enabled Monaco Editor instance
 *
 * @param {HTMLElement} container - The DOM element to mount the editor in
 * @param {Object} options - Editor options
 * @returns {monaco.editor.IStandaloneCodeEditor} The editor instance
 */
export function createBoxLangEditor(container, options = {}) {
    // Ensure BoxLang support is initialized
    initializeBoxLangSupport();

    // Default options for BoxLang
    const defaultOptions = {
        language: 'boxlang',
        theme: 'boxlang-theme',
        automaticLayout: true,
        minimap: { enabled: true },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        wordWrap: 'on',
        folding: true,
        foldingStrategy: 'indentation',
        showFoldingControls: 'mouseover',
        matchBrackets: 'always',
        autoIndent: 'advanced',
        formatOnType: true,
        formatOnPaste: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: 'on',
        tabCompletion: 'on',
        wordBasedSuggestions: true,
        parameterHints: { enabled: true },
        quickSuggestions: {
            other: true,
            comments: false,
            strings: false
        }
    };

    // Merge options
    const editorOptions = { ...defaultOptions, ...options };

    // Create and return the editor
    return monaco.editor.create(container, editorOptions);
}

/**
 * Get the appropriate language ID for a file based on its extension
 *
 * @param {string} filename - The filename to check
 * @returns {string} The language ID ('boxlang', 'boxlang-template', or 'plaintext')
 */
export function getBoxLangLanguage(filename) {
    if (!filename) return 'plaintext';

    const ext = filename.split('.').pop()?.toLowerCase();

    switch (ext) {
        case 'bx':
        case 'bxs':
            return 'boxlang';
        case 'bxm':
            return 'boxlang-template';
        default:
            return 'plaintext';
    }
}

/**
 * Example usage:
 *
 * import { createBoxLangEditor, getBoxLangLanguage } from './boxlang-monaco-integration';
 *
 * // Create a BoxLang editor
 * const editor = createBoxLangEditor(document.getElementById('editor'), {
 *     value: 'class { function init() { return this; } }',
 *     language: 'boxlang'
 * });
 *
 * // Or set language based on filename
 * const language = getBoxLangLanguage('MyClass.bx');
 * editor.setValue(code);
 * monaco.editor.setModelLanguage(editor.getModel(), language);
 */
