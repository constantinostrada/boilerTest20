# BoilerTest20

A production-ready HTML, CSS, and JavaScript boilerplate project with modern tooling and best practices.

## Features

- 📦 Modern JavaScript (ES6+)
- 🎨 Clean CSS architecture
- 🔧 ESLint for JavaScript linting
- 💅 Stylelint for CSS linting
- ✨ Prettier for code formatting
- 🚀 Live development server
- 📦 Build tools for production (esbuild, PostCSS)
- 🗂️ Organized project structure

## Project Structure

```
BoilerTest20/
├── src/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   ├── styles.css      # Main stylesheet
│   │   ├── variables.css   # CSS custom properties
│   │   └── components/     # Component-specific styles
│   ├── js/
│   │   ├── main.js         # Main JavaScript entry point
│   │   ├── utils/          # Utility functions
│   │   └── components/     # JavaScript components
│   └── assets/
│       └── images/         # Image assets
├── dist/                   # Production build output
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── stylelint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with live reload:

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

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

Check formatting without modifying files:

```bash
npm run format:check
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint JavaScript and CSS
- `npm run format` - Format all files with Prettier
- `npm run clean` - Remove dist directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
