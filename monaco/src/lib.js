/**
 * @boxlang/monaco-editor
 * 
 * Monaco Editor language support for BoxLang
 * Provides syntax highlighting, IntelliSense, and themes for BoxLang development
 */

// Export all language support components
export { boxlangLanguageConfig } from './boxlang-language-config';
export { boxlangMonarchTokens } from './boxlang-monarch-tokens';
export { boxlangTheme } from './boxlang-theme';

// Export integration helpers
export { 
    initializeBoxLangSupport,
    createBoxLangEditor,
    getBoxLangLanguage
} from './boxlang-monaco-integration';

// Export language IDs as constants
export const BOXLANG_LANGUAGE_ID = 'boxlang';
export const BOXLANG_TEMPLATE_LANGUAGE_ID = 'boxlang-template';

// Export file extensions
export const BOXLANG_EXTENSIONS = ['.bx', '.bxs'];
export const BOXLANG_TEMPLATE_EXTENSIONS = ['.bxm'];

// Export MIME types
export const BOXLANG_MIME_TYPES = ['text/x-boxlang'];
export const BOXLANG_TEMPLATE_MIME_TYPES = ['text/x-boxlang-template'];

// Default export for convenience
export default {
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
