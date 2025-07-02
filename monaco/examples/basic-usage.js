// Basic usage example for boxlang-monaco-editor
import * as monaco from 'monaco-editor';
import { initializeBoxLangSupport, createBoxLangEditor } from 'boxlang-monaco-editor';

// Initialize BoxLang language support
initializeBoxLangSupport();

// Create a simple BoxLang editor
const editor = createBoxLangEditor(document.getElementById('editor'), {
    value: `component {

    property string name;
    property numeric age default=25;

    function init( required string name, numeric age = 25 ) {
        variables.name = arguments.name;
        variables.age = arguments.age;
        return this;
    }

    function getGreeting() {
        return "Hello, my name is #variables.name# and I am #variables.age# years old.";
    }

}`,
    language: 'boxlang',
    theme: 'boxlang-theme'
});

// Listen for content changes
editor.onDidChangeModelContent(() => {
    console.log('BoxLang code changed:', editor.getValue());
});
