// Monaco Monarch tokenizer for BoxLang
export const boxlangMonarchTokens = {
    script: {
        defaultToken: 'invalid',
        tokenPostfix: '.bx',

        keywords: [
            'abort', 'abstract', 'any', 'array', 'as', 'assert', 'break', 'by', 'case', 'castas',
            'catch', 'class', 'component', 'contain', 'continue', 'default', 'do', 'does', 'else',
            'elseif', 'exit', 'extends', 'final', 'finally', 'for', 'function', 'greater', 'if',
            'implements', 'imp', 'import', 'in', 'include', 'instanceof', 'interface', 'is', 'java',
            'less', 'lock', 'new', 'package', 'param', 'private', 'property', 'public', 'query',
            'remote', 'required', 'rethrow', 'return', 'static', 'switch', 'than', 'thread', 'throw',
            'to', 'transaction', 'try', 'type', 'var', 'when', 'while', 'xor'
        ],

        typeKeywords: [
            'any', 'array', 'binary', 'boolean', 'class', 'date', 'double', 'function', 'guid',
            'int', 'integer', 'numeric', 'string', 'struct', 'query', 'uuid', 'void', 'xml'
        ],

        booleans: [
            'true', 'false', 'yes', 'no'
        ],

        nullValue: [
            'null'
        ],

        modifiers: [
            'public', 'private', 'remote', 'package', 'abstract', 'final', 'static', 'required'
        ],

        variableScopes: [
            'application', 'arguments', 'attributes', 'caller', 'client', 'cgi', 'form', 'local',
            'request', 'server', 'session', 'static', 'super', 'url', 'thread', 'this', 'variables'
        ],

        humanOperators: [
            'and', 'or', 'not', 'xor', 'mod', 'eq', 'neq', 'lt', 'le', 'gt', 'ge', 'equal',
            'contains', 'instanceof', 'does', 'eqv', 'imp'
        ],

        operators: [
            '=', '>', '<', '!', '?', ':', '==', '<=', '>=', '!=', '<>', '&&', '||', '++', '--',
            '+', '-', '*', '/', '&', '|', '^', '%', '<<', '>>', '>>>', '+=', '-=', '*=',
            '/=', '&=', '|=', '^=', '%=', '<<=', '>>=', '>>>=', '===', '!==', '?:', '->', '=>',
            'b|', 'b&', 'b^', 'b~', 'b<<', 'b>>', 'b>>>'
        ],

        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        tokenizer: {
            root: [
                // Identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'type.keyword',
                        '@keywords': 'keyword',
                        '@booleans': 'boolean',
                        '@nullValue': 'null',
                        '@modifiers': 'modifier',
                        '@variableScopes': 'variable.scope',
                        '@humanOperators': 'operator.human',
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
                [/[^\\"#]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/#([^#]|##)*#/, 'string.interpolated'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],

            stringSingle: [
                [/[^\\'#]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/#([^#]|##)*#/, 'string.interpolated'],
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
            'abort', 'abstract', 'any', 'array', 'as', 'assert', 'break', 'by', 'case', 'castas',
            'catch', 'class', 'component', 'contain', 'continue', 'default', 'do', 'does', 'else',
            'elseif', 'exit', 'extends', 'final', 'finally', 'for', 'function', 'greater', 'if',
            'implements', 'imp', 'import', 'in', 'include', 'instanceof', 'interface', 'is', 'java',
            'less', 'lock', 'new', 'package', 'param', 'private', 'property', 'public', 'query',
            'remote', 'required', 'rethrow', 'return', 'static', 'switch', 'than', 'thread', 'throw',
            'to', 'transaction', 'try', 'type', 'var', 'when', 'while', 'xor'
        ],

        typeKeywords: [
            'any', 'array', 'binary', 'boolean', 'class', 'date', 'double', 'function', 'guid',
            'int', 'integer', 'numeric', 'string', 'struct', 'query', 'uuid', 'void', 'xml'
        ],

        booleans: [
            'true', 'false', 'yes', 'no'
        ],

        nullValue: [
            'null'
        ],

        modifiers: [
            'public', 'private', 'remote', 'package', 'abstract', 'final', 'static', 'required'
        ],

        variableScopes: [
            'application', 'arguments', 'attributes', 'caller', 'client', 'cgi', 'form', 'local',
            'request', 'server', 'session', 'super', 'url', 'thread', 'this', 'variables'
        ],

        humanOperators: [
            'and', 'or', 'not', 'xor', 'mod', 'eq', 'neq', 'lt', 'le', 'gt', 'ge', 'equal',
            'contains', 'instanceof', 'does', 'eqv', 'imp'
        ],

        operators: [
            '=', '>', '<', '!', '?', ':', '==', '<=', '>=', '!=', '<>', '&&', '||', '++', '--',
            '+', '-', '*', '/', '&', '|', '^', '%', '<<', '>>', '>>>', '+=', '-=', '*=',
            '/=', '&=', '|=', '^=', '%=', '<<=', '>>=', '>>>=', '===', '!==', '?:', '->', '=>',
            'b|', 'b&', 'b^', 'b~', 'b<<', 'b>>', 'b>>>'
        ],

        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        tokenizer: {
            root: [
                // BoxLang script blocks - must come before HTML tags
                [/<bx:script[^>]*>/i, { token: 'tag.bx', next: '@bxScript' }],

                // BoxLang components
                [/<(bx:[a-zA-Z]+)/, { token: 'tag.bx', next: '@bxTag' }],
                [/<\/(bx:[a-zA-Z]+)>/, 'tag.bx'],

                // HTML tags
                [/<!DOCTYPE/, 'tag', '@doctype'],
                [/<!--/, 'comment', '@htmlComment'],
                [/<\/?[a-zA-Z][\w]*/, 'tag', '@htmlTag'],

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
                // End script tag - must be first to properly exit
                [/<\/(bx:script)>/i, { token: 'tag', next: '@pop' }],

                // Identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'type.keyword',
                        '@keywords': 'keyword',
                        '@booleans': 'boolean',
                        '@nullValue': 'null',
                        '@modifiers': 'modifier',
                        '@variableScopes': 'variable.scope',
                        '@humanOperators': 'operator.human',
                        '@default': 'identifier'
                    }
                }],
                [/[A-Z][\w$]*/, 'type.identifier'],

                // Whitespace
                { include: '@scriptWhitespace' },

                // Numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],

                // Strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@scriptString' }],
                [/'([^'\\]|\\.)*$/, 'string.invalid'],
                [/'/, { token: 'string.quote', bracket: '@open', next: '@scriptStringSingle' }],

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
                [/\/\*/, 'comment', '@scriptComment'],
                [/\/\/.*$/, 'comment'],

                // Annotations
                [/@\w+/, 'annotation'],

                // Interpolation (still works inside script blocks)
                [/#([^#]|##)*#/, 'string.interpolated']
            ],

            scriptComment: [
                [/[^\/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'],
                ["\\*/", 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],

            scriptString: [
                [/[^\\"#]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/#([^#]|##)*#/, 'string.interpolated'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],

            scriptStringSingle: [
                [/[^\\'#]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/#([^#]|##)*#/, 'string.interpolated'],
                [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],

            scriptWhitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@scriptComment'],
                [/\/\/.*$/, 'comment']
            ],

            comment: [
                [/[^\/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'],
                ["\\*/", 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],

            string: [
                [/[^\\"#]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/#([^#]|##)*#/, 'string.interpolated'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],

            stringSingle: [
                [/[^\\'#]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/#([^#]|##)*#/, 'string.interpolated'],
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
