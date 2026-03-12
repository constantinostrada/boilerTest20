# BoilerTest20

A production-ready HTML, CSS, and JavaScript boilerplate project with modern tooling and best practices.

## Features

- 📁 Clean and organized project structure
- 🎨 Modern CSS with PostCSS support
- 🚀 Vanilla JavaScript (ES6+)
- 🔍 ESLint for JavaScript linting
- 💅 Stylelint for CSS linting
- ✨ Prettier for code formatting
- 🔧 Build scripts for production optimization
- 🔥 Live development server

## Project Structure

```
BoilerTest20/
├── src/                    # Source files
│   ├── css/               # CSS stylesheets
│   │   ├── styles.css     # Main stylesheet
│   │   ├── base/          # Base styles (reset, variables, typography)
│   │   ├── components/    # Component styles
│   │   └── layout/        # Layout styles
│   ├── js/                # JavaScript files
│   │   ├── main.js        # Main JavaScript entry point
│   │   ├── utils/         # Utility functions
│   │   └── modules/       # Feature modules
│   └── assets/            # Static assets (images, fonts, etc.)
├── dist/                  # Production build output
├── index.html             # Main HTML file
├── package.json           # Project dependencies and scripts
├── .eslintrc.json         # ESLint configuration
├── .stylelintrc.json      # Stylelint configuration
├── .prettierrc            # Prettier configuration
├── postcss.config.js      # PostCSS configuration
└── .gitignore             # Git ignore rules

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with live reload:

```bash
npm start
```

This will start a local server at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Minify and optimize CSS files
- Minify and compress JavaScript files
- Output files to the `dist/` directory

### Code Quality

#### Linting

Run linters to check code quality:

```bash
npm run lint
```

Lint JavaScript only:
```bash
npm run lint:js
```

Lint CSS only:
```bash
npm run lint:css
```

#### Formatting

Format code with Prettier:

```bash
npm run format
```

Check formatting without making changes:

```bash
npm run format:check
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
