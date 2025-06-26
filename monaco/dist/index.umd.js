(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('monaco-editor')) :
    typeof define === 'function' && define.amd ? define(['exports', 'monaco-editor'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BoxLangMonaco = {}, global.monaco));
})(this, (function (exports, monaco) { 'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var monaco__namespace = /*#__PURE__*/_interopNamespaceDefault(monaco);

    // Monaco language configuration for BoxLang
    const boxlangLanguageConfig$1 = {
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/']
        },
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
            ['<', '>']
        ],
        autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"', notIn: ['string'] },
            { open: "'", close: "'", notIn: ['string', 'comment'] },
            { open: '`', close: '`', notIn: ['string', 'comment'] },
            { open: '/**', close: ' */', notIn: ['string'] }
        ],
        surroundingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
            { open: '`', close: '`' }
        ],
        folding: {
            markers: {
                start: new RegExp('^\\s*//\\s*#?region\\b'),
                end: new RegExp('^\\s*//\\s*#?endregion\\b')
            }
        },
        wordPattern: /[a-zA-Z_$][a-zA-Z0-9_$]*/g,
        indentationRules: {
            increaseIndentPattern: /^.*\{[^}]*$/,
            decreaseIndentPattern: /^.*\}.*$/
        }
    };

    // Monaco Monarch tokenizer for BoxLang
    const boxlangMonarchTokens$1 = {
        script: {
            defaultToken: 'invalid',
            tokenPostfix: '.bx',
            
            keywords: [
                'abstract', 'any', 'array', 'as', 'boolean', 'break', 'by', 'case', 'catch', 'class',
                'component', 'continue', 'default', 'do', 'else', 'elseif', 'false', 'finally',
                'for', 'function', 'if', 'import', 'in', 'include', 'interface', 'java', 'lock',
                'new', 'null', 'numeric', 'package', 'param', 'private', 'property', 'public',
                'query', 'remote', 'required', 'return', 'static', 'string', 'struct', 'switch',
                'this', 'throw', 'true', 'try', 'type', 'var', 'variables', 'void', 'while',
                'implements', 'extends', 'super', 'final', 'native', 'synchronized', 'transient',
                'volatile', 'accessors', 'persistent', 'singleton', 'synchronized', 'serializable'
            ],
            
            typeKeywords: [
                'any', 'array', 'boolean', 'date', 'numeric', 'string', 'struct', 'query', 'void'
            ],
            
            operators: [
                '=', '>', '<', '!', '?', ':', '==', '<=', '>=', '!=', '&&', '||', '++', '--',
                '+', '-', '*', '/', '&', '|', '^', '%', '<<', '>>', '>>>', '+=', '-=', '*=',
                '/=', '&=', '|=', '^=', '%=', '<<=', '>>=', '>>>='
            ],
            
            symbols: /[=><!~?:&|+\-*\/\^%]+/,
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            
            tokenizer: {
                root: [
                    // Identifiers and keywords
                    [/[a-z_$][\w$]*/, {
                        cases: {
                            '@typeKeywords': 'keyword',
                            '@keywords': 'keyword',
                            '@default': 'identifier'
                        }
                    }],
                    [/[A-Z][\w$]*/, 'type.identifier'],
                    
                    // Whitespace
                    { include: '@whitespace' },
                    
                    // Numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],
                    
                    // Strings
                    [/"([^"\\]|\\.)*$/, 'string.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                    [/'([^'\\]|\\.)*$/, 'string.invalid'],
                    [/'/, { token: 'string.quote', bracket: '@open', next: '@stringSingle' }],
                    
                    // Characters
                    [/'[^\\']'/, 'string'],
                    [/(')(@escapes)(')/, ['string','string.escape','string']],
                    [/'/, 'string.invalid'],
                    
                    // Delimiters and operators
                    [/[{}()\[\]]/, '@brackets'],
                    [/[<>](?!@symbols)/, '@brackets'],
                    [/@symbols/, {
                        cases: {
                            '@operators': 'operator',
                            '@default': ''
                        }
                    }],
                    
                    // Comments
                    [/\/\*/, 'comment', '@comment'],
                    [/\/\/.*$/, 'comment'],
                    
                    // Annotations
                    [/@\w+/, 'annotation'],
                    
                    // Tags (for template files)
                    [/<[a-zA-Z][\w]*/, 'tag'],
                    [/<\/[a-zA-Z][\w]*>/, 'tag'],
                    
                    // Interpolation
                    [/#([^#]|##)*#/, 'string.interpolated']
                ],
                
                comment: [
                    [/[^\/*]+/, 'comment'],
                    [/\/\*/, 'comment', '@push'],
                    ["\\*/", 'comment', '@pop'],
                    [/[\/*]/, 'comment']
                ],
                
                string: [
                    [/[^\\"]+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],
                
                stringSingle: [
                    [/[^\\']+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],
                
                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                    [/\/\*/, 'comment', '@comment'],
                    [/\/\/.*$/, 'comment']
                ]
            }
        },
        
        template: {
            defaultToken: 'invalid',
            tokenPostfix: '.bxm',
            
            keywords: [
                'abstract', 'any', 'array', 'as', 'boolean', 'break', 'by', 'case', 'catch', 'class',
                'component', 'continue', 'default', 'do', 'else', 'elseif', 'false', 'finally',
                'for', 'function', 'if', 'import', 'in', 'include', 'interface', 'java', 'lock',
                'new', 'null', 'numeric', 'package', 'param', 'private', 'property', 'public',
                'query', 'remote', 'required', 'return', 'static', 'string', 'struct', 'switch',
                'this', 'throw', 'true', 'try', 'type', 'var', 'variables', 'void', 'while'
            ],
            
            typeKeywords: [
                'any', 'array', 'boolean', 'date', 'numeric', 'string', 'struct', 'query', 'void'
            ],
            
            operators: [
                '=', '>', '<', '!', '?', ':', '==', '<=', '>=', '!=', '&&', '||', '++', '--',
                '+', '-', '*', '/', '&', '|', '^', '%', '<<', '>>', '>>>', '+=', '-=', '*=',
                '/=', '&=', '|=', '^=', '%=', '<<=', '>>=', '>>>='
            ],
            
            symbols: /[=><!~?:&|+\-*\/\^%]+/,
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            
            tokenizer: {
                root: [
                    // HTML tags
                    [/<!DOCTYPE/, 'tag', '@doctype'],
                    [/<!--/, 'comment', '@htmlComment'],
                    [/<\/?[a-zA-Z][\w]*/, 'tag', '@htmlTag'],
                    
                    // BoxLang script blocks
                    [/<(bx:script)(\s[^>]*)?>/i, [{ token: 'tag' }, { token: 'attribute.name' }, { token: 'tag', next: '@bxScript' }]],
                    
                    // BoxLang components
                    [/<(bx:[a-zA-Z]+)/, { token: 'tag.bx', next: '@bxTag' }],
                    [/<\/(bx:[a-zA-Z]+)>/, 'tag.bx'],
                    
                    // BoxLang interpolation
                    [/#[^#]*#/, 'string.interpolated'],
                    
                    // BoxLang comments
                    [/<!---/, 'comment', '@bxComment'],
                    
                    // Regular text
                    [/[^<#]+/, 'text']
                ],
                
                doctype: [
                    [/[^>]+/, 'tag'],
                    [/>/, 'tag', '@pop']
                ],
                
                htmlComment: [
                    [/[^\\-]+/, 'comment'],
                    [/-->/, 'comment', '@pop'],
                    [/[\\-]/, 'comment']
                ],
                
                bxComment: [
                    [/[^\\-]+/, 'comment'],
                    [/--->/, 'comment', '@pop'],
                    [/[\\-]/, 'comment']
                ],
                
                htmlTag: [
                    [/[ \t\r\n]+/, 'white'],
                    [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name', 'delimiter', 'attribute.value']],
                    [/\w+/, 'attribute.name'],
                    [/>/, 'tag', '@pop']
                ],
                
                bxTag: [
                    [/[ \t\r\n]+/, 'white'],
                    [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name', 'delimiter', 'attribute.value']],
                    [/\w+/, 'attribute.name'],
                    [/>/, 'tag.bx', '@pop'],
                    [/\/>/, 'tag.bx', '@pop']
                ],
                
                bxScript: [
                    // Include all BoxLang script tokenization
                    [/[a-z_$][\w$]*/, {
                        cases: {
                            '@typeKeywords': 'keyword',
                            '@keywords': 'keyword',
                            '@default': 'identifier'
                        }
                    }],
                    [/[A-Z][\w$]*/, 'type.identifier'],
                    
                    // Whitespace
                    { include: '@whitespace' },
                    
                    // Numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],
                    
                    // Strings
                    [/"([^"\\]|\\.)*$/, 'string.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                    [/'([^'\\]|\\.)*$/, 'string.invalid'],
                    [/'/, { token: 'string.quote', bracket: '@open', next: '@stringSingle' }],
                    
                    // Delimiters and operators
                    [/[{}()\[\]]/, '@brackets'],
                    [/[<>](?!@symbols)/, '@brackets'],
                    [/@symbols/, {
                        cases: {
                            '@operators': 'operator',
                            '@default': ''
                        }
                    }],
                    
                    // Comments
                    [/\/\*/, 'comment', '@comment'],
                    [/\/\/.*$/, 'comment'],
                    
                    // End script tag
                    [/<\/(bx:script)>/i, { token: 'tag', next: '@pop' }]
                ],
                
                comment: [
                    [/[^\/*]+/, 'comment'],
                    [/\/\*/, 'comment', '@push'],
                    ["\\*/", 'comment', '@pop'],
                    [/[\/*]/, 'comment']
                ],
                
                string: [
                    [/[^\\"]+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],
                
                stringSingle: [
                    [/[^\\']+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],
                
                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                    [/\/\*/, 'comment', '@comment'],
                    [/\/\/.*$/, 'comment']
                ]
            }
        }
    };

    // Custom BoxLang theme for Monaco Editor
    const boxlangTheme$1 = {
        base: 'vs-dark',
        inherit: true,
        rules: [
            // Keywords
            { token: 'keyword', foreground: '569cd6', fontStyle: 'bold' },
            { token: 'keyword.operator', foreground: 'd4d4d4' },
            
            // Types
            { token: 'type', foreground: '4ec9b0' },
            { token: 'type.identifier', foreground: '4ec9b0' },
            
            // Strings
            { token: 'string', foreground: 'ce9178' },
            { token: 'string.quote', foreground: 'ce9178' },
            { token: 'string.escape', foreground: 'd7ba7d' },
            { token: 'string.interpolated', foreground: 'ffd700', fontStyle: 'bold' },
            
            // Numbers
            { token: 'number', foreground: 'b5cea8' },
            { token: 'number.float', foreground: 'b5cea8' },
            { token: 'number.hex', foreground: 'b5cea8' },
            
            // Comments
            { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
            
            // Operators
            { token: 'operator', foreground: 'd4d4d4' },
            
            // Identifiers
            { token: 'identifier', foreground: 'd4d4d4' },
            
            // Tags (for templates)
            { token: 'tag', foreground: '569cd6' },
            { token: 'tag.bx', foreground: 'ff6b6b', fontStyle: 'bold' },
            
            // Attributes
            { token: 'attribute.name', foreground: '92c5f8' },
            { token: 'attribute.value', foreground: 'ce9178' },
            
            // Annotations
            { token: 'annotation', foreground: 'dcdcaa' },
            
            // Brackets
            { token: 'delimiter.bracket', foreground: 'ffd700' },
            { token: 'delimiter.parenthesis', foreground: 'ffd700' },
            { token: 'delimiter.square', foreground: 'ffd700' },
            
            // Text (for templates)
            { token: 'text', foreground: 'd4d4d4' }
        ],
        colors: {
            'editor.background': '#1e1e1e',
            'editor.foreground': '#d4d4d4',
            'editorLineNumber.foreground': '#858585',
            'editorCursor.foreground': '#aeafad',
            'editor.selectionBackground': '#264f78',
            'editor.inactiveSelectionBackground': '#3a3d41',
            'editorIndentGuide.background': '#404040',
            'editorIndentGuide.activeBackground': '#707070',
            'editor.selectionHighlightBackground': '#add6ff26'
        }
    };

    /**
     * BoxLang Monaco Integration Example
     * 
     * This file shows how to integrate BoxLang support into an existing Monaco Editor setup.
     * Use this as a reference for your own projects.
     */


    /**
     * Initialize BoxLang support for Monaco Editor
     */
    function initializeBoxLangSupport$1() {
        // Register BoxLang languages
        monaco__namespace.languages.register({ 
            id: 'boxlang',
            extensions: ['.bx', '.bxs'],
            aliases: ['BoxLang Script', 'boxlang'],
            mimetypes: ['text/x-boxlang']
        });
        
        monaco__namespace.languages.register({ 
            id: 'boxlang-template',
            extensions: ['.bxm'],
            aliases: ['BoxLang Template', 'boxlang-template'],
            mimetypes: ['text/x-boxlang-template']
        });

        // Set language configurations
        monaco__namespace.languages.setLanguageConfiguration('boxlang', boxlangLanguageConfig$1);
        monaco__namespace.languages.setLanguageConfiguration('boxlang-template', boxlangLanguageConfig$1);

        // Set syntax highlighting
        monaco__namespace.languages.setMonarchTokensProvider('boxlang', boxlangMonarchTokens$1.script);
        monaco__namespace.languages.setMonarchTokensProvider('boxlang-template', boxlangMonarchTokens$1.template);

        // Define BoxLang theme
        monaco__namespace.editor.defineTheme('boxlang-theme', boxlangTheme$1);

        // Register completion providers
        registerBoxLangCompletions();
        
        console.log('BoxLang support initialized for Monaco Editor');
    }

    /**
     * Register completion providers for BoxLang
     */
    function registerBoxLangCompletions() {
        // BoxLang Script completions
        monaco__namespace.languages.registerCompletionItemProvider('boxlang', {
            provideCompletionItems: (model, position) => {
                const suggestions = [
                    // Keywords
                    {
                        label: 'component',
                        kind: monaco__namespace.languages.CompletionItemKind.Keyword,
                        insertText: 'component ${1:name} {\\n\\t$2\\n}',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Create a BoxLang component',
                        detail: 'BoxLang Component'
                    },
                    {
                        label: 'function',
                        kind: monaco__namespace.languages.CompletionItemKind.Keyword,
                        insertText: 'function ${1:name}( ${2:arguments} ) {\\n\\t$3\\n\\treturn ${4:result};\\n}',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Create a BoxLang function',
                        detail: 'BoxLang Function'
                    },
                    {
                        label: 'if',
                        kind: monaco__namespace.languages.CompletionItemKind.Keyword,
                        insertText: 'if ( ${1:condition} ) {\\n\\t$2\\n}',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'If statement',
                        detail: 'Control Flow'
                    },
                    {
                        label: 'for',
                        kind: monaco__namespace.languages.CompletionItemKind.Keyword,
                        insertText: 'for ( ${1:var i = 1}; ${2:i <= 10}; ${3:i++} ) {\\n\\t$4\\n}',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'For loop',
                        detail: 'Control Flow'
                    },
                    {
                        label: 'try',
                        kind: monaco__namespace.languages.CompletionItemKind.Keyword,
                        insertText: 'try {\\n\\t$1\\n} catch ( ${2:any e} ) {\\n\\t$3\\n}',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Try-catch block',
                        detail: 'Error Handling'
                    },
                    
                    // Common BoxLang functions
                    {
                        label: 'arrayLen',
                        kind: monaco__namespace.languages.CompletionItemKind.Function,
                        insertText: 'arrayLen( ${1:array} )',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Returns the length of an array',
                        detail: 'Built-in Function'
                    },
                    {
                        label: 'structKeyExists',
                        kind: monaco__namespace.languages.CompletionItemKind.Function,
                        insertText: 'structKeyExists( ${1:struct}, "${2:key}" )',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Checks if a key exists in a struct',
                        detail: 'Built-in Function'
                    },
                    {
                        label: 'queryExecute',
                        kind: monaco__namespace.languages.CompletionItemKind.Function,
                        insertText: 'queryExecute( "${1:sql}", ${2:params}, ${3:options} )',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Execute a SQL query',
                        detail: 'Built-in Function'
                    }
                ];

                return { suggestions };
            }
        });

        // BoxLang Template completions
        monaco__namespace.languages.registerCompletionItemProvider('boxlang-template', {
            provideCompletionItems: (model, position) => {
                const suggestions = [
                    {
                        label: 'bx:if',
                        kind: monaco__namespace.languages.CompletionItemKind.Snippet,
                        insertText: '<bx:if condition="${1:condition}">\\n\\t$2\\n</bx:if>',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'BoxLang conditional tag',
                        detail: 'BoxLang Tag'
                    },
                    {
                        label: 'bx:loop',
                        kind: monaco__namespace.languages.CompletionItemKind.Snippet,
                        insertText: '<bx:loop ${1:array="#items#" item="item"}>\\n\\t$2\\n</bx:loop>',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'BoxLang loop tag',
                        detail: 'BoxLang Tag'
                    },
                    {
                        label: 'bx:script',
                        kind: monaco__namespace.languages.CompletionItemKind.Snippet,
                        insertText: '<bx:script>\\n\\t$1\\n</bx:script>',
                        insertTextRules: monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
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
    function createBoxLangEditor$1(container, options = {}) {
        // Ensure BoxLang support is initialized
        initializeBoxLangSupport$1();
        
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
        return monaco__namespace.editor.create(container, editorOptions);
    }

    /**
     * Get the appropriate language ID for a file based on its extension
     * 
     * @param {string} filename - The filename to check
     * @returns {string} The language ID ('boxlang', 'boxlang-template', or 'plaintext')
     */
    function getBoxLangLanguage$1(filename) {
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
     *     value: 'component { function init() { return this; } }',
     *     language: 'boxlang'
     * });
     * 
     * // Or set language based on filename
     * const language = getBoxLangLanguage('MyClass.bx');
     * editor.setValue(code);
     * monaco.editor.setModelLanguage(editor.getModel(), language);
     */

    /**
     * @boxlang/monaco-editor
     * 
     * Monaco Editor language support for BoxLang
     * Provides syntax highlighting, IntelliSense, and themes for BoxLang development
     */


    // Export language IDs as constants
    const BOXLANG_LANGUAGE_ID = 'boxlang';
    const BOXLANG_TEMPLATE_LANGUAGE_ID = 'boxlang-template';

    // Export file extensions
    const BOXLANG_EXTENSIONS = ['.bx', '.bxs'];
    const BOXLANG_TEMPLATE_EXTENSIONS = ['.bxm'];

    // Export MIME types
    const BOXLANG_MIME_TYPES = ['text/x-boxlang'];
    const BOXLANG_TEMPLATE_MIME_TYPES = ['text/x-boxlang-template'];

    // Default export for convenience
    var lib = {
        initializeBoxLangSupport,
        createBoxLangEditor,
        getBoxLangLanguage,
        languageConfig: boxlangLanguageConfig,
        monarchTokens: boxlangMonarchTokens,
        theme: boxlangTheme,
        LANGUAGE_IDS: {
            SCRIPT: BOXLANG_LANGUAGE_ID,
            TEMPLATE: BOXLANG_TEMPLATE_LANGUAGE_ID
        },
        EXTENSIONS: {
            SCRIPT: BOXLANG_EXTENSIONS,
            TEMPLATE: BOXLANG_TEMPLATE_EXTENSIONS
        }
    };

    exports.BOXLANG_EXTENSIONS = BOXLANG_EXTENSIONS;
    exports.BOXLANG_LANGUAGE_ID = BOXLANG_LANGUAGE_ID;
    exports.BOXLANG_MIME_TYPES = BOXLANG_MIME_TYPES;
    exports.BOXLANG_TEMPLATE_EXTENSIONS = BOXLANG_TEMPLATE_EXTENSIONS;
    exports.BOXLANG_TEMPLATE_LANGUAGE_ID = BOXLANG_TEMPLATE_LANGUAGE_ID;
    exports.BOXLANG_TEMPLATE_MIME_TYPES = BOXLANG_TEMPLATE_MIME_TYPES;
    exports.boxlangLanguageConfig = boxlangLanguageConfig$1;
    exports.boxlangMonarchTokens = boxlangMonarchTokens$1;
    exports.boxlangTheme = boxlangTheme$1;
    exports.createBoxLangEditor = createBoxLangEditor$1;
    exports.default = lib;
    exports.getBoxLangLanguage = getBoxLangLanguage$1;
    exports.initializeBoxLangSupport = initializeBoxLangSupport$1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
