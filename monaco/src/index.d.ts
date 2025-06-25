// Type definitions for @boxlang/monaco-editor
import type * as monaco from 'monaco-editor';

export interface BoxLangLanguageConfig {
    comments: {
        lineComment: string;
        blockComment: [string, string];
    };
    brackets: [string, string][];
    autoClosingPairs: Array<{
        open: string;
        close: string;
        notIn?: string[];
    }>;
    surroundingPairs: Array<{
        open: string;
        close: string;
    }>;
    folding: {
        markers: {
            start: RegExp;
            end: RegExp;
        };
    };
    wordPattern: RegExp;
    indentationRules: {
        increaseIndentPattern: RegExp;
        decreaseIndentPattern: RegExp;
    };
}

export interface BoxLangMonarchTokens {
    script: monaco.languages.IMonarchLanguage;
    template: monaco.languages.IMonarchLanguage;
}

export interface BoxLangTheme extends monaco.editor.IStandaloneThemeData {}

export interface BoxLangEditorOptions extends monaco.editor.IStandaloneEditorConstructionOptions {
    language?: 'boxlang' | 'boxlang-template';
    theme?: string;
}

// Language configuration
export declare const boxlangLanguageConfig: BoxLangLanguageConfig;

// Monarch tokenizers
export declare const boxlangMonarchTokens: BoxLangMonarchTokens;

// Theme
export declare const boxlangTheme: BoxLangTheme;

// Constants
export declare const BOXLANG_LANGUAGE_ID: 'boxlang';
export declare const BOXLANG_TEMPLATE_LANGUAGE_ID: 'boxlang-template';
export declare const BOXLANG_EXTENSIONS: ['.bx', '.bxs'];
export declare const BOXLANG_TEMPLATE_EXTENSIONS: ['.bxm'];
export declare const BOXLANG_MIME_TYPES: ['text/x-boxlang'];
export declare const BOXLANG_TEMPLATE_MIME_TYPES: ['text/x-boxlang-template'];

// Functions
export declare function initializeBoxLangSupport(): void;

export declare function createBoxLangEditor(
    container: HTMLElement,
    options?: BoxLangEditorOptions
): monaco.editor.IStandaloneCodeEditor;

export declare function getBoxLangLanguage(filename: string): 'boxlang' | 'boxlang-template' | 'plaintext';

// Default export
declare const _default: {
    initializeBoxLangSupport: typeof initializeBoxLangSupport;
    createBoxLangEditor: typeof createBoxLangEditor;
    getBoxLangLanguage: typeof getBoxLangLanguage;
    languageConfig: BoxLangLanguageConfig;
    monarchTokens: BoxLangMonarchTokens;
    theme: BoxLangTheme;
    LANGUAGE_IDS: {
        SCRIPT: typeof BOXLANG_LANGUAGE_ID;
        TEMPLATE: typeof BOXLANG_TEMPLATE_LANGUAGE_ID;
    };
    EXTENSIONS: {
        SCRIPT: typeof BOXLANG_EXTENSIONS;
        TEMPLATE: typeof BOXLANG_TEMPLATE_EXTENSIONS;
    };
};

export default _default;
