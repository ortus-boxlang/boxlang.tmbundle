import * as monaco from 'monaco-editor';
import { boxlangLanguageConfig } from './boxlang-language-config';
import { boxlangMonarchTokens } from './boxlang-monarch-tokens';
import { boxlangTheme } from './boxlang-theme';

// Sample BoxLang code examples
const sampleFiles = {
  script: `/**
 * BoxLang Script Example
 * Demonstrates core language features
 */
@singleton
@metadata( "name" )
@cache( false )
class  {

    property name;
    property name="age" type="numeric" default=25;
	@inject
	property name="logger";

    /**
     * Constructor
     */
    function init( required string name, numeric age = 25 ) {
        variables.name = arguments.name;
        variables.age = arguments.age;
        return this;
    }

    /**
     * Get a greeting message
     */
    function getGreeting() {
        var message = "Hello, my name is #variables.name# and I am #variables.age# years old.";

        if ( variables.age >= 18 ) {
            message &= " I am an adult.";
        } else {
            message &= " I am a minor.";
        }

        return message;
    }

    /**
     * Process an array of numbers
     */
    function processNumbers( required array numbers ) {
        return numbers
            .filter( function( num ) {
                return num > 10;
            })
            .map( function( num ) {
                return num * 2;
            })
            .reduce( function( acc, num ) {
                return acc + num;
            }, 0 );
    }

}`,

  template: `<!DOCTYPE html>
<html>
<head>
    <title>BoxLang Template Example</title>
</head>
<body>
    <bx:script>
        // BoxLang template with embedded script
        param name="users" type="array" default=[];
        param name="title" type="string" default="User List";

        function formatUser( required struct user ) {
            return "#user.firstName# #user.lastName# (#user.email#)";
        }
    </bx:script>

    <h1>#title#</h1>

	 <bx:script>
        var name = "BoxLang";
        var numbers = ArrayNew(1);

        function greet(message) {
            WriteOutput("Hello " & message);
            return true;
        }

        // This is a comment
        if (name == "BoxLang") {
            greet(name);
        }
    </bx:script>

    <bx:if condition="arrayLen(users) > 0">
        <ul>
            <bx:loop array="#users#" item="user">
                <li>
                    #formatUser(user)#
                    <bx:if condition="user.isActive">
                        <span class="active">Active</span>
                    <bx:else>
                        <span class="inactive">Inactive</span>
                    </bx:if>
                </li>
            </bx:loop>
        </ul>
    <bx:else>
        <p>No users found.</p>
    </bx:if>

    <!--- BoxLang template comment --->
    <div class="user-stats">
        Total Users: #arrayLen(users)#<br>
        Active Users: #users.filter(function(u) { return u.isActive; }).len()#
    </div>
</body>
</html>`,

  class: `/**
 * Example BoxLang Interface and Class
 */
interface IUserService {

    /**
     * Get user by ID
     */
    public struct function getUserById( required numeric id );

    /**
     * Create a new user
     */
    public struct function createUser( required struct userData );

}

/**
 * User Service Implementation
 */
class UserService implements="IUserService" {

    property inject="@DataSource" datasource;
    property inject="Logger" logger;

    /**
     * Constructor
     */
    function init() {
        variables.cache = {};
        return this;
    }

    /**
     * Get user by ID
     */
    public struct function getUserById( required numeric id ) {

        // Check cache first
        if ( structKeyExists( variables.cache, arguments.id ) ) {
            variables.logger.debug( "Returning user from cache: #arguments.id#" );
            return variables.cache[ arguments.id ];
        }

        // Query database
        var qryUser = queryExecute(
            "SELECT * FROM users WHERE id = :id",
            { id: arguments.id },
            { datasource: variables.datasource }
        );

        if ( qryUser.recordCount ) {
            var user = {
                id: qryUser.id,
                firstName: qryUser.firstName,
                lastName: qryUser.lastName,
                email: qryUser.email,
                isActive: qryUser.isActive
            };

            // Cache the result
            variables.cache[ arguments.id ] = user;

            return user;
        }

        throw( type="UserNotFound", message="User with ID #arguments.id# not found" );
    }

    /**
     * Create a new user
     */
    public struct function createUser( required struct userData ) {

        // Validate required fields
        var requiredFields = [ "firstName", "lastName", "email" ];

        for ( var field in requiredFields ) {
            if ( !structKeyExists( arguments.userData, field ) || !len( arguments.userData[ field ] ) ) {
                throw( type="ValidationError", message="Field '#field#' is required" );
            }
        }

        // Insert user
        var result = queryExecute(
            "INSERT INTO users (firstName, lastName, email, isActive) VALUES (:firstName, :lastName, :email, :isActive)",
            {
                firstName: arguments.userData.firstName,
                lastName: arguments.userData.lastName,
                email: arguments.userData.email,
                isActive: arguments.userData.isActive ?: true
            },
            {
                datasource: variables.datasource,
                result: "insertResult"
            }
        );

        var newUserId = insertResult.generatedKey;

        variables.logger.info( "Created new user with ID: #newUserId#" );

        return getUserById( newUserId );
    }

}`
};

// Register BoxLang language
monaco.languages.register({ id: 'boxlang' });
monaco.languages.register({ id: 'boxlang-template' });

// Set language configuration
monaco.languages.setLanguageConfiguration('boxlang', boxlangLanguageConfig);
monaco.languages.setLanguageConfiguration('boxlang-template', boxlangLanguageConfig);

// Set syntax highlighting
monaco.languages.setMonarchTokensProvider('boxlang', boxlangMonarchTokens.script);
monaco.languages.setMonarchTokensProvider('boxlang-template', boxlangMonarchTokens.template);

// Define custom theme
monaco.editor.defineTheme('boxlang-theme', boxlangTheme);

// Create editor instance
let currentTheme = 'boxlang-theme';
let currentFile = 'script';

const editor = monaco.editor.create(document.getElementById('editor'), {
    value: sampleFiles[currentFile],
    language: 'boxlang',
    theme: currentTheme,
    automaticLayout: true,
    minimap: {
        enabled: true
    },
    fontSize: 14,
    lineNumbers: 'on',
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
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
    parameterHints: {
        enabled: true
    },
    quickSuggestions: {
        other: true,
        comments: false,
        strings: false
    }
});

// File tab switching
document.querySelectorAll('.file-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        document.querySelectorAll('.file-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Switch file content
        currentFile = tab.dataset.file;
        const language = currentFile === 'template' ? 'boxlang-template' : 'boxlang';

        editor.setValue(sampleFiles[currentFile]);
        monaco.editor.setModelLanguage(editor.getModel(), language);
    });
});

// Global functions for toolbar buttons
window.formatCode = function() {
    editor.getAction('editor.action.formatDocument').run();
};

window.toggleTheme = function() {
    currentTheme = currentTheme === 'boxlang-theme' ? 'vs-dark' : 'boxlang-theme';
    monaco.editor.setTheme(currentTheme);
};

// Add BoxLang-specific completion provider
monaco.languages.registerCompletionItemProvider('boxlang', {
    provideCompletionItems: function(model, position) {
        const suggestions = [
            {
                label: 'class',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'class {\\n\\t$1\\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Create a new BoxLang class'
            },
            {
                label: 'function',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'function ${1:name}( ${2:arguments} ) {\\n\\t$3\\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Create a new function'
            },
            {
                label: 'if',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'if ( ${1:condition} ) {\\n\\t$2\\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'If statement'
            },
            {
                label: 'for',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'for ( ${1:var i = 1}; ${2:i <= 10}; ${3:i++} ) {\\n\\t$4\\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'For loop'
            },
            {
                label: 'try',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'try {\\n\\t$1\\n} catch ( ${2:any e} ) {\\n\\t$3\\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Try-catch block'
            }
        ];

        return { suggestions: suggestions };
    }
});

console.log('BoxLang Monaco Editor initialized successfully!');
