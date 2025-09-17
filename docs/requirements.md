# Challenge Requirements - Rimac Frontend Challenge

## Overview

This document outlines the specific requirements and deliverables for the Rimac Frontend Challenge.

## Deliverables

- Link del repositorio del proyecto (GitHub, GitLab, Bitbucket, etc)
- Link del proyecto desplegado
- Sustentación del proyecto

## Development Resources

- **Figma Design:** https://www.figma.com/file/KGftIKxhcVm41kTKMsfTh2/Frontend-Challenge-2023
- **Backend API:** Configurable via environment variables
  - **User API:** `/api/user.json`
  - **Plans API:** `/api/plans.json`

## Technical Requirements

### Core Technologies

- **React.js** (Required)
- **TypeScript** (Optional but recommended)
- **Sass** or equivalent CSS preprocessor
- **Grid System Layout** compliance
- **BEM methodology** (Desirable)

### Component Requirements

- Creation of at least 2 components
- Clean and scalable code
- Respect Grid System Layout
- Desirable BEM methodology
- Proper API consumption and handling

## Evaluation Criteria

### High Priority (marked in red)

- **State Management** - Effective handling of application state
- **Style Management** - Proper CSS organization and methodology
- **Form Validation** - Robust form validation implementation
- **Clean Code** - Well-structured, readable, and maintainable code
- **Performance** - Optimized application performance
- **React Best Practices** - Following React conventions and patterns
- **Responsive Design** - Mobile-first responsive implementation

### Standard Priority

- **Unit Testing** - Comprehensive test coverage
- **API Consumption** - Proper API integration and error handling
- **Folder Structure** - Clean and scalable project organization
- **Semantic HTML** - Proper HTML structure and accessibility
- **Git/GitHub Management** - Proper version control practices

## Implementation Guidelines

### 1. Component Development

- Create at least 2 reusable components
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Follow React best practices (hooks, functional components)

### 2. API Integration

- Create dedicated service functions for API calls
- Implement proper error handling
- Use TypeScript interfaces for API responses
- Add loading states and error states

### 3. Styling Guidelines

- Use BEM methodology for class naming
- Implement responsive design (mobile-first)
- Follow the provided Figma design system
- Use CSS custom properties for theming

### 4. Testing Strategy

- Unit tests for all components
- Integration tests for API calls
- Test coverage minimum 80%
- Use MSW (Mock Service Worker) for API mocking

### 5. Git Workflow

- Feature branch strategy
- Conventional commits
- Pull request reviews
- Automated testing on CI/CD

## Performance Considerations

### 1. Code Splitting

- Lazy load page components
- Dynamic imports for heavy components

### 2. Bundle Optimization

- Tree shaking for unused code
- Image optimization
- CSS purging

### 3. React Optimizations

- Memoization with React.memo
- useMemo and useCallback for expensive operations
- Proper dependency arrays in useEffect
