# BoxLang Global BIFs and Components Enhancement

This enhancement adds comprehensive support for BoxLang's global Built-in Functions (BIFs) and Components in the TextMate bundle, providing better syntax highlighting and developer insight.

## Features Added

### 1. Global BIF Recognition

The syntax file now recognizes and highlights BoxLang's global BIFs with specific scopes based on their category:

#### String Functions

- **Scope**: `support.function.global.string.boxlang`
- **Functions**: ArrayAppend, ArrayAvg, ArrayClear, Find, FindNoCase, LCase, UCase, Trim, etc.

#### Math Functions

- **Scope**: `support.function.global.math.boxlang`
- **Functions**: Abs, Cos, Sin, Tan, Round, Max, Min, Rand, etc.

#### Date/Time Functions

- **Scope**: `support.function.global.datetime.boxlang`
- **Functions**: CreateDate, DateAdd, DateFormat, Now, Year, Month, Day, etc.

#### Decision Functions

- **Scope**: `support.function.global.decision.boxlang`
- **Functions**: IIf, IsArray, IsDate, IsDefined, IsEmpty, etc.

#### Conversion Functions

- **Scope**: `support.function.global.conversion.boxlang`
- **Functions**: HTMLCodeFormat, URLDecode, ToBase64, ToString, etc.

#### Structure Functions

- **Scope**: `support.function.global.struct.boxlang`
- **Functions**: StructNew, StructKeyExists, StructGet, StructSet, etc.

#### Query Functions

- **Scope**: `support.function.global.query.boxlang`
- **Functions**: QueryNew, QueryAddRow, QuerySetCell, etc.

#### File Functions

- **Scope**: `support.function.global.file.boxlang`
- **Functions**: FileExists, DirectoryExists, ExpandPath, etc.

#### System Functions

- **Scope**: `support.function.global.system.boxlang`
- **Functions**: CreateObject, WriteOutput, WriteDump, Evaluate, etc.

#### Cache Functions

- **Scope**: `support.function.global.cache.boxlang`
- **Functions**: CacheGet, CachePut, CacheDelete, etc.

#### Encryption Functions

- **Scope**: `support.function.global.encryption.boxlang`
- **Functions**: Encrypt, Decrypt, Hash, etc.

#### XML/ZIP Functions

- **Scope**: `support.function.global.xml-zip.boxlang`
- **Functions**: XMLParse, XMLFormat, Zip, Unzip, etc.

### 2. Global Component Recognition

The syntax file now recognizes BoxLang's global components with enhanced highlighting:

#### Global Components

- **Scope**: `support.class.component.global.boxlang`
- **Components**: async, cache, debug, io, jdbc, net, system, xml, zip, query, http, file, directory, etc.

## Benefits for Developers

1. **Enhanced Visual Distinction**: Global BIFs and components are highlighted differently from user-defined functions
2. **Category-based Highlighting**: Different categories of BIFs can be styled differently in themes
3. **Better Code Understanding**: Developers can quickly identify which functions are built-in vs custom
4. **Improved IntelliSense Support**: TextMate-compatible editors can provide better autocompletion
5. **Future-proof**: Easy to extend as new BIFs and components are added to BoxLang

## Files Modified

- `Syntaxes/boxlang.tmLanguage`: Enhanced with global BIF and component patterns
- `Support/global-bifs.txt`: Comprehensive list of all global BIFs for reference
- `Support/global-components.txt`: Comprehensive list of all global components for reference

## Theme Integration

Theme developers can now target specific scopes for custom styling:

```json
{
    "scope": "support.function.global.string.boxlang",
    "settings": {
        "foreground": "#66D9EF"
    }
},
{
    "scope": "support.function.global.math.boxlang",
    "settings": {
        "foreground": "#A6E22E"
    }
},
{
    "scope": "support.class.component.global.boxlang",
    "settings": {
        "foreground": "#F92672",
        "fontStyle": "bold"
    }
}
```

## Case Insensitivity

All patterns are case-insensitive (`(?i)` flag) to match BoxLang's case-insensitive nature while maintaining the exact casing from the documentation.

## Maintenance

To add new BIFs or components:

1. Update the appropriate pattern in `boxlang.tmLanguage`
2. Add the new function/component to the corresponding `.txt` file in the Support directory
3. Update this documentation

## Compatibility

This enhancement maintains backward compatibility with existing BoxLang code while providing enhanced highlighting for global BIFs and components.
