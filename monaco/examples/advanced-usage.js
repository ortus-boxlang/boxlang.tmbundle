// Advanced usage example with custom completions and multiple languages
import * as monaco from 'monaco-editor';
import {
    initializeBoxLangSupport,
    getBoxLangLanguage,
    BOXLANG_LANGUAGE_ID,
    BOXLANG_TEMPLATE_LANGUAGE_ID
} from 'boxlang-monaco-editor';

// Initialize BoxLang support
initializeBoxLangSupport();

// Create editors for different file types
const files = [
    {
        name: 'UserService.bx',
        content: `component singleton {
    property inject="DataSource" datasource;

    function getUserById( required numeric id ) {
        return queryExecute(
            "SELECT * FROM users WHERE id = :id",
            { id: arguments.id },
            { datasource: variables.datasource }
        );
    }
}`,
        language: 'boxlang'
    },
    {
        name: 'UserTemplate.bxm',
        content: `<!DOCTYPE html>
<html>
<head>
    <title>User Profile</title>
</head>
<body>
    <bx:script>
        param name="user" type="struct";

        function formatName( required struct user ) {
            return "#user.firstName# #user.lastName#";
        }
    </bx:script>

    <h1>Welcome, #formatName(user)#!</h1>

    <bx:if condition="user.isActive">
        <p class="status active">Active User</p>
    <bx:else>
        <p class="status inactive">Inactive User</p>
    </bx:if>
</body>
</html>`,
        language: 'boxlang-template'
    }
];

// Create a file manager
class BoxLangFileManager {
    constructor(container) {
        this.container = container;
        this.editors = new Map();
        this.currentFile = null;
        this.createUI();
    }

    createUI() {
        // Create tab container
        this.tabContainer = document.createElement('div');
        this.tabContainer.className = 'file-tabs';
        this.container.appendChild(this.tabContainer);

        // Create editor container
        this.editorContainer = document.createElement('div');
        this.editorContainer.style.height = '600px';
        this.container.appendChild(this.editorContainer);

        // Create editors for each file
        files.forEach((file, index) => {
            this.createTab(file, index === 0);
            this.createEditor(file);
        });
    }

    createTab(file, isActive = false) {
        const tab = document.createElement('button');
        tab.textContent = file.name;
        tab.className = isActive ? 'tab active' : 'tab';
        tab.onclick = () => this.switchToFile(file.name);
        this.tabContainer.appendChild(tab);
    }

    createEditor(file) {
        const editorElement = document.createElement('div');
        editorElement.style.height = '100%';
        editorElement.style.display = this.currentFile === file.name ? 'block' : 'none';
        this.editorContainer.appendChild(editorElement);

        const editor = monaco.editor.create(editorElement, {
            value: file.content,
            language: file.language,
            theme: 'boxlang-theme',
            automaticLayout: true,
            minimap: { enabled: true },
            fontSize: 14
        });

        this.editors.set(file.name, {
            editor,
            element: editorElement,
            file
        });

        if (!this.currentFile) {
            this.currentFile = file.name;
        }
    }

    switchToFile(fileName) {
        // Hide all editors
        this.editors.forEach(({ element }) => {
            element.style.display = 'none';
        });

        // Update tabs
        this.tabContainer.querySelectorAll('.tab').forEach(tab => {
            tab.classList.toggle('active', tab.textContent === fileName);
        });

        // Show selected editor
        const selectedEditor = this.editors.get(fileName);
        if (selectedEditor) {
            selectedEditor.element.style.display = 'block';
            selectedEditor.editor.layout();
            this.currentFile = fileName;
        }
    }

    getCurrentEditor() {
        return this.editors.get(this.currentFile)?.editor;
    }
}

// Initialize file manager
const fileManager = new BoxLangFileManager(document.getElementById('editor-container'));

// Add custom completion provider for project-specific items
monaco.languages.registerCompletionItemProvider(BOXLANG_LANGUAGE_ID, {
    provideCompletionItems: (model, position) => {
        const suggestions = [
            {
                label: 'getUserById',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: 'getUserById( ${1:id} )',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Get user by ID from UserService',
                detail: 'UserService method'
            },
            {
                label: 'wirebox:injection',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'property inject="${1:service}" ${2:name};',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'WireBox dependency injection',
                detail: 'Dependency Injection'
            }
        ];

        return { suggestions };
    }
});

// Add hover provider for documentation
monaco.languages.registerHoverProvider(BOXLANG_LANGUAGE_ID, {
    provideHover: (model, position) => {
        const word = model.getWordAtPosition(position);
        if (!word) return;

        const documentation = {
            'queryExecute': {
                value: '**queryExecute** - Execute a SQL query\n\n```boxlang\nqueryExecute(sql, params, options)\n```',
                isTrusted: true
            },
            'component': {
                value: '**component** - Define a BoxLang component\n\nComponents are the building blocks of BoxLang applications.',
                isTrusted: true
            }
        };

        const info = documentation[word.word];
        if (info) {
            return {
                range: new monaco.Range(
                    position.lineNumber,
                    word.startColumn,
                    position.lineNumber,
                    word.endColumn
                ),
                contents: [{ value: info.value, isTrusted: info.isTrusted }]
            };
        }
    }
});

// Export for global access
window.fileManager = fileManager;
