// Custom BoxLang theme for Monaco Editor
// Inspired by the BoxLang logo gradient colors
export const boxlangTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        // Keywords - using BoxLang signature cyan-blue
        { token: 'keyword', foreground: '00B4D8', fontStyle: 'bold' },
        { token: 'keyword.operator', foreground: 'E0E0E0' },

        // Types - using BoxLang cyan-green
        { token: 'type', foreground: '00E5CC' },
        { token: 'type.identifier', foreground: '00E5CC' },

        // Strings - warm complementary color
        { token: 'string', foreground: 'F4A261' },
        { token: 'string.quote', foreground: 'F4A261' },
        { token: 'string.escape', foreground: 'E76F51' },
        { token: 'string.interpolated', foreground: '00E5CC', fontStyle: 'bold' },

        // Numbers - bright cyan for visibility
        { token: 'number', foreground: '4DD0E1' },
        { token: 'number.float', foreground: '4DD0E1' },
        { token: 'number.hex', foreground: '4DD0E1' },

        // Comments - muted blue-gray
        { token: 'comment', foreground: '7B8FA3', fontStyle: 'italic' },

        // Operators
        { token: 'operator', foreground: 'E0E0E0' },

        // Identifiers
        { token: 'identifier', foreground: 'E0E0E0' },

        // Tags (for templates) - BoxLang blue
        { token: 'tag', foreground: '00B4D8' },
        { token: 'tag.bx', foreground: '00E5CC', fontStyle: 'bold' },

        // Attributes - lighter blue
        { token: 'attribute.name', foreground: '81C7D4' },
        { token: 'attribute.value', foreground: 'F4A261' },

        // Annotations - BoxLang green
        { token: 'annotation', foreground: '26C6AA' },

        // Brackets - BoxLang signature gradient
        { token: 'delimiter.bracket', foreground: '00E5CC' },
        { token: 'delimiter.parenthesis', foreground: '00B4D8' },
        { token: 'delimiter.square', foreground: '4DD0E1' },

        // Text (for templates)
        { token: 'text', foreground: 'E0E0E0' }
    ],
    colors: {
        // Main editor - dark navy inspired by logo background
        'editor.background': '#1B2433',
        'editor.foreground': '#E0E0E0',

        // Line numbers - muted blue-gray
        'editorLineNumber.foreground': '#7B8FA3',
        'editorLineNumber.activeForeground': '#00B4D8',

        // Cursor - BoxLang cyan
        'editorCursor.foreground': '#00E5CC',

        // Selection - BoxLang blue with transparency
        'editor.selectionBackground': '#00B4D833',
        'editor.inactiveSelectionBackground': '#00B4D81A',
        'editor.selectionHighlightBackground': '#00E5CC26',

        // Indent guides
        'editorIndentGuide.background': '#3B434F',
        'editorIndentGuide.activeBackground': '#00B4D8',

        // Minimap
        'minimap.background': '#1B2433',

        // Scrollbars
        'scrollbarSlider.background': '#3B434F66',
        'scrollbarSlider.hoverBackground': '#00B4D866',
        'scrollbarSlider.activeBackground': '#00E5CC66',

        // Find/replace
        'editor.findMatchBackground': '#00E5CC33',
        'editor.findMatchHighlightBackground': '#00B4D826',
        'editor.findRangeHighlightBackground': '#00B4D81A',

        // Word highlight
        'editor.wordHighlightBackground': '#00B4D826',
        'editor.wordHighlightStrongBackground': '#00E5CC26'
    }
};
