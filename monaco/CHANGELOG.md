# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-06-25

### Added
- Initial release of @boxlang/monaco-editor
- Complete syntax highlighting for BoxLang script files (.bx, .bxs)
- Full template support for BoxLang template files (.bxm)
- Custom BoxLang theme optimized for readability
- IntelliSense and auto-completion for BoxLang keywords
- Code folding and bracket matching
- TypeScript definitions for better developer experience
- Multiple build formats (ES modules, CommonJS, UMD)
- Comprehensive documentation and examples

### Features
- **Language Support**: Complete lexical analysis for BoxLang syntax
- **Template Highlighting**: Mixed HTML/BoxLang template support with proper context switching
- **IntelliSense**: Auto-completion for keywords, functions, and code snippets
- **Custom Theme**: Dark theme with BoxLang-specific color scheme
- **Integration Helpers**: Easy-to-use functions for common setup scenarios
- **File Type Detection**: Automatic language detection based on file extensions
- **Modern Build**: ES2020+ target with tree-shaking support

### Supported BoxLang Features
- Component and class declarations
- Function definitions with parameters and return types
- Property declarations and annotations
- Control flow statements (if/else, loops, switch)
- Exception handling (try/catch/finally)
- String interpolation (`#variable#`)
- BoxLang template tags (`<bx:if>`, `<bx:loop>`, etc.)
- Comments (line and block)
- All BoxLang operators and expressions

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Node.js Support
- Node.js 16.0.0+
