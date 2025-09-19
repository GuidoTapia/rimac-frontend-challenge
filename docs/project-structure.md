# Project Structure - Rimac Frontend Challenge

## Overview

This document outlines the actual file structure for the Rimac Frontend Challenge, showing how the project is organized with a component-based architecture and page-level organization.

## Actual Structure

```
src/
├── api/                       # API configuration and services
│   ├── api-client.ts         # Main API client configuration
│   └── services/             # API service definitions
│       ├── plans/
│       │   └── plans.dto.ts  # Plan data transfer objects
│       └── users/
│           └── users.dto.ts  # User data transfer objects
├── assets/                   # Static assets
│   ├── arrow-back.svg
│   ├── family.png
│   ├── family.svg
│   ├── IcAddUserLight.svg
│   ├── IcHomeLight.svg
│   ├── IcHospitalLight.svg
│   ├── IcProtectionLight.svg
│   ├── phone.svg
│   └── react.svg
├── components/               # Shared reusable UI components
│   ├── button/              # Button component
│   │   ├── button.module.scss
│   │   ├── button.test.tsx
│   │   └── button.tsx
│   ├── checkbox/            # Checkbox component
│   │   ├── checkbox.module.scss
│   │   ├── checkbox.test.tsx
│   │   └── checkbox.tsx
│   ├── dropdown/            # Dropdown component
│   │   ├── dropdown.module.scss
│   │   ├── dropdown.test.tsx
│   │   └── dropdown.tsx
│   ├── hyperlink/           # Hyperlink component
│   │   ├── hyperlink.module.scss
│   │   ├── hyperlink.test.tsx
│   │   └── hyperlink.tsx
│   ├── layout/              # Layout component
│   │   ├── layout.module.scss
│   │   └── layout.tsx
│   ├── pagination/          # Pagination component
│   │   └── pagination.module.scss
│   │   └── pagination.tsx
│   ├── paper/               # Paper/Card component
│   │   ├── paper.module.scss
│   │   └── paper.tsx
│   ├── rimac-logo/          # Rimac logo component
│   │   ├── Logo.svg
│   │   ├── rimac-logo.module.scss
│   │   └── rimac-logo.tsx
│   ├── stepper/             # Stepper component
│   │   ├── stepper.module.scss
│   │   ├── stepper.test.tsx
│   │   └── stepper.tsx
│   ├── tag/                 # Tag component
│   │   ├── tag.module.scss
│   │   └── tag.tsx
│   ├── text-button/         # Text button component
│   │   ├── text-button.module.scss
│   │   ├── text-button.test.tsx
│   │   └── text-button.tsx
│   ├── text-input/          # Text input component
│   │   ├── text-input.module.scss
│   │   ├── text-input.test.tsx
│   │   └── text-input.tsx
│   └── index.ts             # Component exports
├── config/                  # Configuration files
│   └── api.ts              # API configuration
├── pages/                   # Page components (route-level)
│   ├── home/               # Home page
│   │   ├── home.module.scss
│   │   └── home.tsx
│   ├── plans/              # Plans page with sub-components
│   │   ├── components/     # Page-specific components
│   │   │   ├── cotization-option/
│   │   │   │   ├── cotization-option.module.scss
│   │   │   │   └── cotization-option.tsx
│   │   │   ├── cotization-options/
│   │   │   │   ├── cotization-options.module.scss
│   │   │   │   └── cotization-options.tsx
│   │   │   ├── plan-option/
│   │   │   │   ├── plan-option.module.scss
│   │   │   │   └── plan-option.tsx
│   │   │   ├── plan-options/
│   │   │   │   ├── plan-options.module.scss
│   │   │   │   └── plan-options.tsx
│   │   │   └── summary-step/
│   │   │       ├── summary-step.module.scss
│   │   │       └── summary-step.tsx
│   │   ├── plans.module.scss
│   │   └── plans.tsx
│   └── index.ts            # Page exports
├── shared/                 # Shared utilities and contexts
│   ├── paths.ts           # Route path constants
│   └── user/              # User-related shared logic
│       ├── use-auth.tsx   # Authentication hook
│       ├── user-context.tsx
│       ├── user-provider.tsx
│       └── user-storage.ts
├── styles/                # Global Sass stylesheets
│   ├── abstracts/         # Sass abstractions
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── base/              # Base styles
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/        # Global component styles
│   │   └── _globals.scss
│   ├── layout/            # Layout styles
│   │   └── _grid.scss
│   └── main.scss          # Main stylesheet entry point
├── test/                  # Test configuration and utilities
│   ├── mocks/             # Mock data and handlers
│   │   ├── handlers.ts
│   │   └── server.ts
│   ├── setup.ts           # Test setup configuration
│   └── test-utils.tsx     # Testing utilities
├── index.css              # Global CSS imports
├── main.tsx               # Application entry point
├── router.tsx             # React Router configuration
└── vite-env.d.ts          # Vite environment type definitions
```

## Structure Principles

### 1. Component-Based Architecture

- **Shared Components** - Reusable UI components in `/components` with their own styles and tests
- **Page Components** - Route-level components in `/pages` with page-specific sub-components
- **BEM Methodology** - Consistent CSS class naming using Block\_\_Element--Modifier pattern
- **Module Styles** - Each component has its own `.module.scss` file for scoped styling

### 2. Page-Level Organization

- **Home Page** - Simple page with form components
- **Plans Page** - Complex page with multiple sub-components for different steps
- **Sub-components** - Page-specific components organized within the page directory
- **Clear Separation** - Each page manages its own state and sub-components

### 3. Shared Resources

- **API Layer** - Centralized API configuration and DTOs in `/api`
- **Shared Logic** - Common utilities and contexts in `/shared`
- **Global Styles** - Sass architecture with abstracts, base, components, and layout
- **Test Configuration** - Centralized test setup and utilities

### 4. Development Patterns

- **TypeScript First** - Strong typing throughout the application
- **Testing** - Component tests co-located with components
- **SCSS Modules** - Scoped styling to prevent conflicts
- **Clean Imports** - Centralized exports through index files where beneficial
