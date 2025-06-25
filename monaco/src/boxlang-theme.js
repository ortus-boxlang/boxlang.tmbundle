// Custom BoxLang theme for Monaco Editor
export const boxlangTheme = {
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
