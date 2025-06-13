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

A comprehensive TextMate bundle that provides rich language support for BoxLang development, including syntax highlighting, code execution, documentation lookup, and intelligent code navigation.

## Features

### 🎨 Syntax Highlighting

- **BoxLang Script** (`.bx`, `.bxs`) - Full syntax highlighting for BoxLang script files
- **BoxLang Templates** (`.bxm`) - Template syntax with embedded script support and HTML integration

### 🚀 Code Execution

- **Run Current File** - Execute the current BoxLang file with a single command
- **Run with Arguments** - Execute files with custom command-line arguments
- **Run Selected Code** - Execute only the selected code snippet
- **BoxLang REPL** - Launch an interactive BoxLang Read-Eval-Print Loop

### 📚 Documentation & Help

- **API Documentation** - Quick access to BoxLang API documentation
- **Context-Sensitive Help** - Get documentation for the word under cursor
- **Built-in Examples** - Sample files demonstrating BoxLang features

### 🧭 Code Navigation

- **Symbol Lists** - Navigate through classes, methods, and variables
- **Smart Folding** - Intelligent code folding for better readability
- **Go to Symbol** - Quick navigation to class definitions and method declarations

## Installation

### Prerequisites

- TextMate 2.0 or later
- BoxLang runtime installed and available in your PATH

### Install via Git

```bash
cd ~/Library/Application\ Support/TextMate/Bundles/
git clone https://github.com/ortus-boxlang/boxlang.tmbundle.git
```

### Manual Installation

1. Download the latest release from the [releases page](https://github.com/ortus-boxlang/boxlang.tmbundle/releases)
2. Extract the bundle to `~/Library/Application Support/TextMate/Bundles/`
3. Restart TextMate or reload bundles with `Bundles → Bundle Editor → Reload Bundles`

## Usage

### File Types Supported

- `.bx` - BoxLang script files
- `.bxs` - BoxLang script files
- `.bxm` - BoxLang template files

### Key Commands

- `⌘R` - Run current file
- `⌘⇧R` - Run with arguments
- `⌃⌘R` - Run selected code
- `⌃H` - Show documentation for current word
- `⌃⌥⌘H` - Open BoxLang API documentation

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

## Language Features

### Syntax Elements Supported

- Classes and interfaces
- Methods and functions
- Variables and scoped variables
- Annotations and metadata
- Components and templates
- String interpolation
- Comments (single-line, multi-line, and documentation)
- Keywords and operators
- Numbers and literals

### Template Features

- HTML integration
- Embedded script blocks
- Component islands
- Tag-based syntax
- Expression interpolation

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
