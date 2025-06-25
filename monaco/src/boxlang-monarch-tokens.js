// Monaco Monarch tokenizer for BoxLang
export const boxlangMonarchTokens = {
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
