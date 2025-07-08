# ⚡︎ BoxLang TextMate Bundle ⚡︎

```
|:------------------------------------------------------:|
| ⚡︎ B o x L a n g ⚡︎
| Dynamic : Modular : Productive
|:------------------------------------------------------:|
```

<blockquote>
	Copyright Since 2023 by Ortus Solutions, Corp
	<br>
	<a href="https://www.boxlang.io">www.boxlang.io</a> |
	<a href="https://www.ortussolutions.com">www.ortussolutions.com</a>
</blockquote>

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Bundle Development & Maintenance](#bundle-development--maintenance)
- [Language Features](#language-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Open-Source & Professional Support](#open-source--professional-support)
- [Ortus Sponsors](#ortus-sponsors)

---

## Overview

A comprehensive TextMate bundle that provides rich language support for BoxLang development, including syntax highlighting, code execution, documentation lookup, intelligent code navigation, and extensive code snippets.

🌟 **Key Highlights:**

- **315+ Built-In Functions** automatically updated from BoxLang API
- **52+ Code Snippets** for rapid development
- **3 Beautiful Themes** with BoxLang's signature green-cyan palette
- **Full HTML Integration** in template files (`.bxm`)
- **Automated CI/CD Pipeline** for always up-to-date releases

---

## Features

### 🎨 Syntax Highlighting

- **BoxLang Script** (`.bx`, `.bxs`) - Full syntax highlighting for BoxLang script files
- **BoxLang Templates** (`.bxm`) - Template syntax with embedded script support and HTML integration
- **HTML Markup Support** - Complete HTML syntax highlighting within template files with proper comment handling
- **Dynamic BIF Recognition** - Automatically updated Built-In Functions from BoxLang API documentation
- **Modern Language Features** - Support for lambda functions, arrow functions, and advanced syntax

### 🎭 Custom Themes

Beautiful themes designed with BoxLang's signature green-cyan gradient colors:

**Theme Dark**
<img src ="https://github.com/ortus-boxlang/boxlang.tmbundle/blob/development/theme-dark.png?raw=true" alt="theme"/>

**Theme High Contrast**
<img src ="https://github.com/ortus-boxlang/boxlang.tmbundle/blob/development/theme-high-contrast.png?raw=true" alt="theme"/>

**Theme Light**
<img src ="https://github.com/ortus-boxlang/boxlang.tmbundle/blob/development/theme-light.png?raw=true" alt="theme"/>

- **BoxLang Light** - Clean, professional light theme with vibrant accents
- **BoxLang Dark** - Modern dark theme perfect for extended coding sessions
- **BoxLang High Contrast** - Accessibility-focused theme with enhanced readability

All themes feature:

- **Brand Consistency** - Uses BoxLang's signature green-cyan color palette
- **Semantic Highlighting** - Different colors for keywords, functions, strings, and components
- **BoxLang-Specific** - Special highlighting for `bx:` components and built-in functions
- **Eye Comfort** - Carefully chosen contrast ratios for reduced eye strain

### 🚀 Code Execution

- **Run Current File** - Execute the current BoxLang file with a single command
- **Run with Arguments** - Execute files with custom command-line arguments
- **Run Selected Code** - Execute only the selected code snippet
- **BoxLang REPL** - Launch an interactive BoxLang Read-Eval-Print Loop

### ⚡ Code Snippets (52 Available)

Comprehensive snippet collection for rapid development:

#### **Core Language Constructs**

- `class` - Class definition with inheritance and interfaces
- `interface` - Interface definition
- `function` - Function declaration with modifiers
- `property` - Property declaration with attributes
- `import` - Import statement with module support
- `var` - Variable declaration
- `new` - Object instantiation

#### **Control Flow**

- `if` / `ife` - If and if-else statements
- `for` / `forin` - Traditional and for-in loops
- `while` / `do` - While and do-while loops
- `switch` / `case` / `default` - Switch statements
- `try` / `tryf` - Try-catch and try-catch-finally blocks
- `break` / `continue` - Loop control statements

#### **Function Types**

- `anon` - Anonymous function: `function(params) {}`
- `closure` - Closure with `=>`: `(params) => {}`
- `lambda` - Lambda with `->`: `(params) -> {}`

#### **Access Modifiers**

- `public` / `private` / `static` / `final` / `abstract` / `remote` - Method and property modifiers

#### **Data Structures & Collections**

- `array` / `struct` - Literal declarations
- `each` / `seach` - Array and struct iteration
- `map` / `filter` / `reduce` - Functional programming methods

#### **BoxLang Components**

- `bxhttp` - HTTP request component
- `bxfile` - File operation component
- `bxquery` - Database query component
- `lock` / `thread` / `transaction` - Concurrency components

#### **Development & Testing**

- `test` - Test case template with Given-When-Then structure
- `doc` - JavaDoc comment template
- `todo` - TODO comment
- `main` - Main method template
- `println` / `dump` - Debugging utilities

### 📚 Documentation & Help

- **API Documentation** - Quick access to BoxLang API documentation
- **Context-Sensitive Help** - Get documentation for the word under cursor
- **Built-in Examples** - Sample files demonstrating BoxLang features
- **Auto-Updated BIFs** - Built-In Functions automatically extracted from latest API docs

### 🧭 Code Navigation

- **Symbol Lists** - Navigate through classes, methods, and variables
- **Smart Folding** - Intelligent code folding for better readability
- **Go to Symbol** - Quick navigation to class definitions and method declarations

### 🤖 Automated Release Process

- **CI/CD Pipeline** - Automated builds and releases via GitHub Actions
- **Version Management** - Automatic version bumping and changelog generation
- **Multi-format Releases** - Both `.zip` and `.tar.gz` formats available
- **S3 Distribution** - Fast global distribution via AWS S3
- **Snapshot Builds** - Development builds from `development` branch

## Installation

### Prerequisites

- TextMate 2.0 or later (also compatible with VS Code, Sublime Text, and other TextMate-compatible editors)
- BoxLang runtime installed and available in your PATH

### Install via Git

```bash
cd ~/Library/Application\ Support/TextMate/Bundles/
git clone https://github.com/ortus-boxlang/boxlang.tmbundle.git
```

### Install Latest Release

**Recommended:** Download the latest stable release for the most up-to-date features and BIF definitions.

1. Visit the [releases page](https://github.com/ortus-boxlang/boxlang.tmbundle/releases)
2. Download the latest release (available in `.zip` and `.tar.gz` formats)
3. Extract the bundle to `~/Library/Application Support/TextMate/Bundles/`
4. Restart TextMate or reload bundles with `Bundles → Bundle Editor → Reload Bundles`

### Install Development Snapshots

For the latest features and fixes (may be unstable):

1. Check the [S3 bucket](https://s3.amazonaws.com/downloads.ortussolutions.com/ortussolutions/textmate-bundles/boxlang.tmbundle/) for snapshot builds
2. Download the latest snapshot build
3. Follow the same extraction steps as above

### Verify Installation

After installation, verify the bundle is working:

1. Create a new file with `.bx` extension
2. Type `class` and press Tab - you should see a class template
3. The syntax should be highlighted in BoxLang colors
4. `⌘R` should be available to run BoxLang files

## Usage

### File Types Supported

- `.bx` - BoxLang script files
- `.bxs` - BoxLang script files
- `.bxm` - BoxLang template files

### Key Commands

#### Execution Commands

- `⌘R` - Run current file
- `⌘⇧R` - Run with arguments
- `⌃⌘R` - Run selected code
- `⌃H` - Show documentation for current word
- `⌃⌥⌘H` - Open BoxLang API documentation

#### Code Snippets (Tab Triggers)

- `class` + Tab - Class definition
- `function` + Tab - Function declaration
- `anon` + Tab - Anonymous function
- `closure` + Tab - Closure with `=>`
- `lambda` + Tab - Lambda with `->`
- `if` + Tab - If statement
- `for` + Tab - For loop
- `try` + Tab - Try-catch block
- `each` + Tab - Array iteration
- `bxhttp` + Tab - HTTP component
- `test` + Tab - Test case template
- And 44 more snippets for rapid development!

### Themes

The bundle includes three custom themes optimized for BoxLang development:

#### Applying Themes

1. Open TextMate Preferences (`⌘,`)
2. Go to the **Themes** tab
3. Select from the available BoxLang themes:
   - **BoxLang Light** - For bright, comfortable daytime coding
   - **BoxLang Dark** - For reduced eye strain and night coding
   - **BoxLang High Contrast** - For maximum accessibility and readability

#### Theme Features

- **Consistent Branding** - All themes use BoxLang's signature color palette
- **Syntax-Aware** - Distinct colors for keywords, functions, strings, and comments
- **Component Highlighting** - Special treatment for `bx:` components and attributes
- **BIF Recognition** - Built-in functions styled for easy identification
- **Template Support** - Optimized for both script and template file types

### File Templates

The bundle includes several file templates to help you quickly create new BoxLang files. Access them via `File → New From Template → BoxLang`:

- **BoxLang Class** (`.bx`) - Basic class template with constructor
- **BoxLang Component** (`.bx`) - Component template with initialization
- **BoxLang Service** (`.bx`) - Service layer template with singleton annotation
- **BoxLang Interface** (`.bx`) - Interface template with sample method signature
- **BoxLang Test** (`.bx`) - TestBox-compatible test template
- **BoxLang Script** (`.bxs`) - Executable script template with shebang
- **BoxLang Template** (`.bxm`) - HTML template with embedded BoxLang script

All templates include:

- Proper file headers with author and date placeholders
- Basic structure and common patterns
- Cursor positioning for immediate coding (`$0` placeholder)

### Code Examples

The bundle includes sample files in the `Samples/` directory:

- `Class.bxm` - Class definition example
- `UserService.bx` - Service layer example
- `Scheduler.bx` - Task scheduling example
- `generatePrimes.bxs` - Algorithm example
- `Input.bx` - User input handling

## Configuration

### BoxLang Runtime

Ensure BoxLang is installed and the `boxlang` command is available in your PATH. You can verify installation by running:

```bash
boxlang --version
```

### Custom Commands

You can customize the execution commands by editing the `.tmCommand` files in the `Commands/` directory.

## Bundle Development & Maintenance

### Automated Release Pipeline

The BoxLang TextMate bundle features a sophisticated CI/CD pipeline that ensures always up-to-date releases:

- **Automated BIF Extraction** - Built-In Functions are automatically extracted from the latest BoxLang API documentation
- **Version Management** - Versions are read from `box.json` and automatically applied to bundle metadata
- **Multi-Branch Releases** - Snapshot builds from `development` branch, stable releases from `main`
- **Multiple Distribution Channels** - Released to both GitHub Releases and AWS S3 for global availability
- **Quality Assurance** - All releases include automated testing and validation

### Bundle Structure

```
boxlang.tmbundle/
├── Commands/           # Execution and utility commands
├── Preferences/        # Editor behavior and folding rules
├── Samples/           # Example BoxLang files
├── Snippets/          # 52+ code snippets for rapid development
├── Support/           # Utilities and extracted BIF lists
├── Syntaxes/          # Language grammar definitions
├── Templates/         # File templates for new documents
└── info.plist        # Bundle metadata and configuration
```

### Staying Current

The bundle automatically stays current with BoxLang development:

- **BIF Synchronization** - Built-In Functions are extracted fresh from API docs with each release
- **Grammar Updates** - Language grammar updated to match BoxLang language evolution
- **Feature Additions** - New language features and capabilities added as BoxLang grows
- **Community Feedback** - Regular updates based on developer community needs

## Language Features

### Syntax Elements Supported

- **Classes and Interfaces** - Full OOP support with inheritance and implementations
- **Methods and Functions** - Named functions, anonymous functions, lambda expressions, arrow functions
- **Variables and Scoped Variables** - var, final, static declarations with proper scoping
- **Annotations and Metadata** - @annotation support with parameter passing
- **Components and Templates** - bx: prefixed components with attribute support
- **String Interpolation** - `#variable#` expressions within strings
- **Comments** - Single-line (`//`), multi-line (`/* */`), and documentation (`/** */`) comments
- **Keywords and Operators** - Complete BoxLang keyword set and operator precedence
- **Numbers and Literals** - Integer, float, string, boolean, and null literals
- **Collection Literals** - Array `[]` and struct `{}` literal syntax
- **Control Structures** - if/else, for/while/do-while, switch/case, try/catch/finally

### Advanced Language Features

- **Functional Programming** - map, filter, reduce, each operations on collections
- **Concurrency** - lock, thread, transaction components
- **Type System** - Dynamic typing with optional type hints
- **Module System** - import statements with aliasing and module references
- **Component Architecture** - Reusable components with attribute binding

### Template Features

- **HTML Integration** - Seamless mixing of HTML and BoxLang code
- **Embedded Script Blocks** - `<bx:script>` tags for server-side logic
- **Component Islands** - ``` delimited component blocks
- **Tag-based Syntax** - XML-style component syntax with attributes
- **Expression Interpolation** - `#expression#` evaluation within templates

### Built-In Functions (BIFs)

- **315+ Built-In Functions** - Automatically extracted from BoxLang API documentation
- **Auto-Updated** - BIF list refreshed with each release from official API docs
- **Categorized Functions** - Array, String, Math, Date, Decision, Conversion, Struct, Query, System, Cache, Encryption, XML, and Zip functions
- **Intelligent Completion** - All BIFs available for syntax highlighting and completion

## Troubleshooting

### BoxLang Command Not Found

If you receive a "BoxLang command not found" error:

1. Verify BoxLang is installed: `which boxlang`
2. Add BoxLang to your PATH in your shell profile
3. Restart TextMate after updating your PATH

### Syntax Highlighting Issues

1. Ensure the file extension is recognized (`.bx`, `.bxs`, `.bxm`)
2. Manually set the language: `View → Language → BoxLang`
3. Reload bundles: `Bundles → Bundle Editor → Reload Bundles`

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Reporting bugs
- Suggesting features
- Submitting pull requests
- Code style guidelines

## Changelog

See [CHANGELOG.md](changelog.md) for a detailed history of changes and updates.

## License

Apache License, Version 2.0.

## Open-Source & Professional Support

This project is a professional open source project and is available as FREE and open source to use.  Ortus Solutions, Corp provides commercial support, training and commercial subscriptions which include the following:

- Professional Support and Priority Queuing
- Remote Assistance and Troubleshooting
- New Feature Requests and Custom Development
- Custom SLAs
- Application Modernization and Migration Services
- Performance Audits
- Enterprise Modules and Integrations
- Much More

Visit us at [BoxLang.io Plans](https://boxlang.io/plans) for more information.

## Ortus Sponsors

BoxLang is a professional open-source project and it is completely funded by the [community](https://patreon.com/ortussolutions) and [Ortus Solutions, Corp](https://www.ortussolutions.com). Ortus Patreons get many benefits like a cfcasts account, a FORGEBOX Pro account and so much more. If you are interested in becoming a sponsor, please visit our patronage page: [https://patreon.com/ortussolutions](https://patreon.com/ortussolutions)

### THE DAILY BREAD

> "I am the way, and the truth, and the life; no one comes to the Father, but by me (JESUS)" Jn 14:1-12
