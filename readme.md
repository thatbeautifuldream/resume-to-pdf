# Resume to PDF

A simple Node.js script that generates PDF versions of resumes using Puppeteer by converting web pages to PDF format.

## Overview

This project automatically generates two versions of a resume:

- **Normal Resume**: Standard single-page format
- **Full Resume**: Expanded multi-page format with additional details

## Quick Start

### Installation

```bash
pnpm install
```

### Usage

```bash
pnpm run print
```

This will generate PDF files in the `dist/` directory.

## Project Structure

```
resume-to-pdf/
├── src/
│   ├── index.js           # Entry point
│   └── resume-to-pdf.js   # Main PDF generation logic
├── dist/                  # Generated PDF files
├── package.json
└── readme.md
```

## Download Resume

### Direct Preview/Download via jsDelivr CDN

| Version      | Download Link                                                                                                                     | Description                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **Standard** | [Download Resume](https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-to-pdf@main/dist/Milind_Mishra_Resume_2025.pdf)           | Single-page standard format |
| **Full**     | [Download Full Resume](https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-to-pdf@main/dist/Milind_Mishra_Full_Resume_2025.pdf) | Multi-page detailed format  |

### Raw CDN URLs

```
https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-to-pdf@main/dist/Milind_Mishra_Resume_2025.pdf
https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-to-pdf@main/dist/Milind_Mishra_Full_Resume_2025.pdf
```

## 🔧 Configuration

The script fetches resume data from:

- **Normal**: `https://resume.milind.app`
- **Expanded**: `https://resume.milind.app/?expand=true`

### PDF Settings

- Format: A4
- Margins: 1cm on all sides
- Background: Enabled
- Output: `dist/` directory

## Technical Details

### Dependencies

- `puppeteer` - Headless Chrome automation for PDF generation

### Scripts

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `pnpm run print` | Generate PDF files from resume website |

## Output Files

Generated files follow the naming convention:

- `Milind_Mishra_Resume_{YEAR}.pdf`
- `Milind_Mishra_Full_Resume_{YEAR}.pdf`

> **Note**: Year is automatically set to current year during generation.
