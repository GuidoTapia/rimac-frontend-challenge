# Project Structure - Rimac Frontend Challenge

## Overview
This document outlines the recommended file structure for the Rimac Frontend Challenge, focusing on feature-based organization with shared resources at the root level.

## Recommended Structure

```
src/
├── components/                 # Shared reusable components
│   ├── ui/                    # Basic UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.scss
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.scss
│   │   └── Card/
│   │       ├── Card.tsx
│   │       └── Card.scss
│   └── layout/                # Layout components
│       ├── Header/
│       │   ├── Header.tsx
│       │   └── Header.scss
│       ├── Footer/
│       │   ├── Footer.tsx
│       │   └── Footer.scss
│       └── Sidebar/
│           ├── Sidebar.tsx
│           └── Sidebar.scss
├── features/                  # Feature-based modules
│   ├── auth/                  # Authentication feature
│   │   ├── components/
│   │   │   ├── LoginForm/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── LoginForm.scss
│   │   │   └── UserProfile/
│   │   │       ├── UserProfile.tsx
│   │   │       └── UserProfile.scss
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── authService.ts
│   │   └── types/
│   │       └── auth.types.ts
│   ├── insurance/             # Insurance plans feature
│   │   ├── components/
│   │   │   ├── PlanCard/
│   │   │   │   ├── PlanCard.tsx
│   │   │   │   └── PlanCard.scss
│   │   │   ├── PlanList/
│   │   │   │   ├── PlanList.tsx
│   │   │   │   └── PlanList.scss
│   │   │   └── PlanComparison/
│   │   │       ├── PlanComparison.tsx
│   │   │       └── PlanComparison.scss
│   │   ├── hooks/
│   │   │   └── usePlans.ts
│   │   ├── services/
│   │   │   └── planService.ts
│   │   └── types/
│   │       └── plan.types.ts
│   └── user/                  # User management feature
│       ├── components/
│       │   ├── UserCard/
│       │   │   ├── UserCard.tsx
│       │   │   └── UserCard.scss
│       │   └── UserForm/
│       │       ├── UserForm.tsx
│       │       └── UserForm.scss
│       ├── hooks/
│       │   └── useUser.ts
│       ├── services/
│       │   └── userService.ts
│       └── types/
│           └── user.types.ts
├── pages/                     # Page components (route-level)
│   ├── HomePage/
│   │   ├── HomePage.tsx
│   │   └── HomePage.scss
│   ├── PlansPage/
│   │   ├── PlansPage.tsx
│   │   └── PlansPage.scss
│   └── ProfilePage/
│       ├── ProfilePage.tsx
│       └── ProfilePage.scss
├── hooks/                     # Global custom hooks
│   ├── useApi.ts
│   └── useLocalStorage.ts
├── services/                  # Global services
│   ├── api/
│   │   ├── client.ts
│   │   └── endpoints.ts
│   └── storage/
│       └── localStorage.ts
├── store/                     # Global state management
│   ├── context/
│   │   └── AppContext.tsx
│   └── reducers/
│       └── appReducer.ts
├── styles/                    # Global styles
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _functions.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   └── _base.scss
│   ├── components/
│   │   └── _globals.scss
│   ├── layout/
│   │   ├── _grid.scss
│   │   └── _layout.scss
│   └── main.scss
├── types/                     # Global TypeScript types
│   ├── api.types.ts
│   └── common.types.ts
├── utils/                     # Utility functions
│   ├── formatters.ts
│   ├── validators.ts
│   └── constants.ts
├── __tests__/                 # Test files
│   ├── components/
│   ├── features/
│   ├── pages/
│   └── utils/
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Structure Principles

### 1. Feature-Based Organization
- **Each feature is self-contained** with its own components, hooks, services, and types
- **Features are independent** and can be developed/modified without affecting others
- **Clear boundaries** between different business domains

### 2. Shared Resources at Root Level
- **Components/** - Reusable UI components used across features
- **Hooks/** - Global custom hooks for common functionality
- **Services/** - API clients and global services
- **Utils/** - Pure utility functions
- **Types/** - Global TypeScript interfaces

### 3. Minimal Index Files
- **Avoid index files at every level** - Only use them when they provide clear value
- **Direct imports preferred** - Import components directly from their files
