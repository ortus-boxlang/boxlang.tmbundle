# BoxLang TextMate Bundle Support Files

This directory contains support files and tools for maintaining and enhancing the BoxLang TextMate bundle.

## Files

### Documentation Files

- **`global-bifs-enhancement.md`** - Comprehensive documentation of the global BIFs and components enhancement
- **`global-bifs.txt`** - Complete list of BoxLang global Built-in Functions (BIFs) organized by category
- **`global-components.txt`** - Complete list of BoxLang global components

### Maintenance Tools

- **`extract-bifs.bxs`** - BoxLang script to extract BIF names from BoxLang API documentation
  - Automatically discovers new BIFs from API docs
  - Formats output for easy integration into syntax files
  - Written in native BoxLang for consistency
  - Usage: `boxlang extract-bifs.bxs`

- **`sync-syntax-files.bxs`** - BoxLang script to validate and check syntax file synchronization
  - Validates JSON syntax files for correctness
  - Checks that all required syntax files exist
  - Provides maintenance instructions and status
  - Usage: `boxlang sync-syntax-files.bxs`

## Updating BIFs and Components

When BoxLang releases new versions with additional BIFs or components:

1. **Automated Extraction** (Recommended):

   ```bash
   cd Support
   boxlang extract-bifs.bxs
   ```

   This will generate an `extracted-bifs.txt` file with newly discovered BIFs.

2. **Manual Updates**:
   - Add new BIFs to the appropriate category in `global-bifs.txt`
   - Add new components to `global-components.txt`
   - Update the corresponding regex patterns in `../Syntaxes/boxlang.tmLanguage`

3. **Update Syntax File**:
   - Open `../Syntaxes/boxlang.tmLanguage`
   - Find the appropriate pattern block for the BIF category
   - Add new function names to the regex pattern
   - Ensure case-insensitive matching with `(?i)` flag

## Syntax File Structure

The syntax file uses hierarchical patterns with specific scopes:

### Global BIF Scopes

- `support.function.global.string.boxlang` - String manipulation functions
- `support.function.global.math.boxlang` - Mathematical functions
- `support.function.global.datetime.boxlang` - Date/time functions
- `support.function.global.decision.boxlang` - Decision/validation functions
- `support.function.global.conversion.boxlang` - Conversion functions
- `support.function.global.struct.boxlang` - Structure functions
- `support.function.global.query.boxlang` - Database query functions
- `support.function.global.file.boxlang` - File system functions
- `support.function.global.system.boxlang` - System functions
- `support.function.global.cache.boxlang` - Caching functions
- `support.function.global.encryption.boxlang` - Encryption functions
- `support.function.global.xml-zip.boxlang` - XML/ZIP functions

### Component Scopes

- `support.class.component.global.boxlang` - Global BoxLang components
- `entity.name.tag.boxlang` - Custom/user-defined components

## Testing Changes

After updating the syntax file:

1. **Test with sample file**: Use `../Samples/global-bifs-demo.bx` to verify highlighting
2. **Check for errors**: Ensure the XML syntax is valid
3. **Test in editor**: Open a BoxLang file in TextMate or compatible editor to verify highlighting

## Contributing

When contributing new BIFs or components:

1. Update the appropriate `.txt` file in this directory
2. Update the syntax patterns in `boxlang.tmLanguage`
3. Test thoroughly with sample code
4. Update documentation if needed

## Version Compatibility

These files are designed to be compatible with BoxLang 1.0.0+ and can be extended for future versions. The patterns use case-insensitive matching to accommodate BoxLang's flexible syntax.
