# Implementation Guidelines - Rimac Frontend Challenge

## Overview
This document provides detailed implementation guidelines, best practices, and coding standards for the Rimac Frontend Challenge.

Tambien se puede acceder a un gestor de tareas en: https://linear.app/guido-ore/team/SOF/all

## Development Workflow

### 1. Git Workflow
- **Branch Strategy:** Feature branch workflow
- **Naming Convention:** `feature/description` or `fix/description`
- **Commits:** Use conventional commits format
- **Pull Requests:** Required for all changes

#### Conventional Commits Format:
```
type(scope): description
```

### 2. Code Quality Standards

#### TypeScript Guidelines
- Use strict mode enabled
- Define interfaces for all props and API responses
- Avoid `any` type - use proper typing
- Use type guards for runtime type checking

#### React Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Use React.memo for performance optimization
- Follow the rules of hooks

### 3. Styling Guidelines

#### BEM Methodology Implementation
- Use Block__Element--Modifier naming convention
- Create separate SCSS files for each component
- Use Sass nesting to organize BEM structure
- Keep modifiers and elements clearly separated

#### Sass Organization
- Create abstracts folder for variables, mixins, and functions
- Use base folder for reset, typography, and global styles
- Organize component styles in separate files
- Use variables for colors, breakpoints, and common values
- Create mixins for responsive design and common patterns

### 4. Component Architecture

#### Component Structure
- Create one folder per component with TSX and SCSS files
- Define clear TypeScript interfaces for all props
- Use default props and proper prop validation
- Export components as named exports
- Include corresponding SCSS file with BEM naming

#### Custom Hooks
- Create reusable hooks for common functionality (API calls, form handling)
- Return objects with clear property names (data, loading, error)
- Use proper TypeScript generics for type safety
- Handle loading and error states consistently
- Place hooks in dedicated hooks folder

### 5. API Integration

#### Service Layer
- Create dedicated service files for API calls
- Define TypeScript interfaces for all API responses
- Use consistent error handling across all API calls
- Implement proper loading states and error boundaries
- Centralize API base URL and endpoints
- Use async/await for cleaner promise handling

### 6. Testing Guidelines

#### Component Testing
- Test component rendering with different props
- Test user interactions and event handlers
- Use mock functions for callbacks and API calls
- Test error states and loading states
- Aim for 80%+ test coverage
- Use descriptive test names and organize tests by functionality


## Conclusion

These implementation guidelines ensure code quality, maintainability, and performance while following React and TypeScript best practices. The guidelines should be followed consistently throughout the development process to deliver a high-quality application that meets all challenge requirements. 
