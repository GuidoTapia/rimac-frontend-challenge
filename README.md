# Rimac Frontend Challenge

A modern React application built with TypeScript, Vite, and Sass for the Rimac Frontend Challenge.

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Sass** with BEM methodology for styling
- **Vitest** + **React Testing Library** for testing
- **ESLint** + **Prettier** for code quality
- **MSW** for API mocking
- **Husky** for git hooks

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🛠️ Installation

1. Clone the repository:

```bash
gh repo clone GuidoTapia/rimac-frontend-challenge
cd rimac-frontend-challenge
```

2. Install dependencies:

```bash
pnpm install
```

## 🏃‍♂️ Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

Run tests in watch mode:

```bash
pnpm test
```

Run tests once:

```bash
pnpm test:run
```

Run tests with coverage:

```bash
pnpm test:coverage
```

## 🔧 Code Quality

Lint code:

```bash
pnpm lint
```

Fix linting issues:

```bash
pnpm lint:fix
```

Format code:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

Type checking:

```bash
pnpm type-check
```

## 🏗️ Build

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
src/
├── api/                # API configuration and DTOs
├── assets/             # Static assets (images, icons, SVGs)
├── components/         # Shared reusable UI components
│   ├── button/        # Button component with tests and styles
│   ├── checkbox/      # Checkbox component
│   ├── dropdown/      # Dropdown component
│   ├── hyperlink/     # Hyperlink component
│   ├── layout/        # Layout component
│   ├── paper/         # Paper/Card component
│   ├── stepper/       # Stepper component
│   ├── tag/           # Tag component
│   ├── text-button/   # Text button component
│   ├── text-input/    # Text input component
│   └── rimac-logo/    # Rimac logo component
├── pages/              # Page components (route-level)
│   ├── home/          # Home page with form
│   └── plans/         # Plans page with sub-components
│       └── components/ # Page-specific components
│           ├── cotization-options/
│           ├── plan-options/
│           └── summary-step/
├── shared/             # Shared utilities and contexts
│   ├── paths.ts       # Route path constants
│   └── user/          # User authentication logic
├── styles/             # Global Sass stylesheets
│   ├── abstracts/     # Variables, mixins, functions
│   ├── base/          # Reset and typography
│   ├── components/    # Global component styles
│   └── layout/        # Grid and layout utilities
├── test/               # Test configuration and utilities
└── config/             # Configuration files
```

## 🎨 Styling

The project uses Sass with BEM methodology:

- **Variables**: Colors, typography, spacing, breakpoints
- **Mixins**: Responsive design, flexbox utilities
- **Components**: Reusable UI components
- **Layout**: Grid system and layout utilities

## 🏗️ Architecture

### Component Structure

- **Shared Components**: Reusable UI components in `/components` with co-located tests and styles
- **Page Components**: Route-level components in `/pages` with page-specific sub-components
- **BEM Naming**: Consistent CSS class naming using Block\_\_Element--Modifier pattern
- **SCSS Modules**: Scoped styling to prevent conflicts between components

### Key Features

- **TypeScript First**: Strong typing throughout the application
- **React Hook Form**: Form management with validation
- **React Router**: Client-side routing with proper SPA configuration
- **MSW**: API mocking for development and testing
- **Responsive Design**: Mobile-first approach with breakpoint-based styling

## 🧪 Testing Strategy

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: API integration with MSW
- **Coverage**: 80% minimum coverage requirement
- **Mocking**: API mocking for consistent testing

## 🔄 Git Workflow

- **Conventional Commits**: Standardized commit messages
- **Pre-commit Hooks**: Automatic linting and formatting
- **Branch Protection**: Main branch protection rules
- **Linear Integration**: Task tracking and progress

## 📚 Available Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `dev`           | Start development server     |
| `build`         | Build for production         |
| `preview`       | Preview production build     |
| `test`          | Run tests in watch mode      |
| `test:run`      | Run tests once               |
| `test:coverage` | Run tests with coverage      |
| `lint`          | Lint code                    |
| `lint:fix`      | Fix linting issues           |
| `format`        | Format code with Prettier    |
| `format:check`  | Check code formatting        |
| `type-check`    | Run TypeScript type checking |

## 🌐 API Integration

The project is configured to integrate with a backend API. The base URL can be configured via environment variables:

- **Backend URL**: Configurable via `VITE_API_BASE_URL` environment variable
- **User API**: `/api/user.json`
- **Plans API**: `/api/plans.json`

### Environment Configuration

Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=https://your-backend-url.com
```

## 🔄 CI/CD & Workflow

This project uses GitHub Actions for continuous integration:

- **PR Checks**: Automated linting, testing, type checking, and building on every pull request
- **Security Audit**: Automated security vulnerability scanning
- **Branch Protection**: Main branch is protected with required status checks

### Workflow Files

- [PR Checks](.github/workflows/pr-checks.yml) - Quality checks for pull requests

## 📖 Documentation

- [Tech Stack Analysis](./docs/tech-stack-analysis.md)
- [Requirements](./docs/requirements.md)
- [Implementation Guidelines](./docs/implementation-guidelines.md)
- [Project Structure](./docs/project-structure.md)
