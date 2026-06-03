# kno-csv
A lightweight, secure TypeScript library for generating CSV files from JavaScript data structures with built-in formula injection protection.

## Features

- 🎯 **Type-safe** - Full TypeScript support with comprehensive type definitions
- 🔒 **Secure** - Built-in formula injection protection to prevent spreadsheet attacks
- 🚀 **Flexible** - Works with arrays, objects, and Maps
- 🌍 **International** - UTF-8 BOM support for proper Excel encoding
- ⚡ **Lightweight** - Zero dependencies for core functionality
- 🎨 **Customizable** - Configure delimiters, line endings, headers, and more

## Installation

```bash
npm install @progress/kno-csv
```

## Quick Start

### Generate CSV String

```typescript
import { toCSV } from '@progress/kno-csv';

const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const csv = toCSV({
    data,
    keys: ['id', 'name', 'email'],
    names: ['ID', 'Name', 'Email']
});

console.log(csv);
// Output:
// ID,Name,Email
// 1,John Doe,john@example.com
// 2,Jane Smith,jane@example.com
```

### Create CSV Blob for Download

```typescript
import { toCSVBlob } from '@progress/kno-csv';
import { saveAs } from '@progress/kno-file-saver';

const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const blob = toCSVBlob({
    data,
    keys: ['id', 'name', 'email'],
    names: ['ID', 'Name', 'Email']
});

saveAs(blob, 'employees.csv');
```

## Documentation

- **[API Documentation]-** - Complete reference for all functions and options
- **[Examples]-** - Interactive examples demonstrating all features

## License

See [LICENSE.md](LICENSE.md) for details.
