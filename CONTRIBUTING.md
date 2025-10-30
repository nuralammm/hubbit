# Contributing Guide

Thank you for considering contributing to this project! This guide will help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your credentials
4. Generate Prisma Client: `npm run db:generate`
5. Push database schema: `npm run db:push`
6. Start development server: `npm run dev`

## Code Style

This project uses:

- **Prettier** for code formatting
- **ESLint** for linting
- **TypeScript** for type safety

### Before Committing

Run these commands to ensure your code is properly formatted and typed:

```bash
# Format code
npm run format

# Check types
npm run type-check

# Run linter
npm run lint

# Build to ensure no errors
npm run build
```

## Code Conventions

### File Naming

- Use kebab-case for file names: `my-component.tsx`
- Components should be in PascalCase: `MyComponent`
- Use `.tsx` for files containing JSX
- Use `.ts` for utility files

### Component Structure

```typescript
"use client"; // Only if needed

import { } from "..."; // External imports first
import { } from "@/..."; // Internal imports second

interface MyComponentProps {
  // Props definition
}

export function MyComponent({ prop }: MyComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### API Routes

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Logic here
    return NextResponse.json({ data: "value" });
  } catch (error) {
    return NextResponse.json({ error: "Error message" }, { status: 500 });
  }
}
```

### Database Queries

- Always use Prisma for database operations
- Use transactions for multiple related operations
- Handle errors appropriately

```typescript
import { prisma } from "@/lib/db/prisma";

// Good
const user = await prisma.user.findUnique({
  where: { id: userId },
});

// Use transactions for related operations
await prisma.$transaction([
  prisma.user.update({ ... }),
  prisma.account.create({ ... }),
]);
```

### Form Validation

- Use Zod for schema validation
- Define schemas in `lib/validations/`
- Export type inference

```typescript
import { z } from "zod";

export const mySchema = z.object({
  field: z.string().min(1),
});

export type MySchemaInput = z.infer<typeof mySchema>;
```

## Git Workflow

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Commit with descriptive messages:
   ```
   feat: add new feature
   fix: resolve bug
   docs: update documentation
   style: format code
   refactor: improve code structure
   test: add tests
   chore: update dependencies
   ```
4. Push to your fork: `git push origin feature/my-feature`
5. Create a Pull Request

## Pull Request Guidelines

- Write a clear description of the changes
- Reference any related issues
- Ensure all checks pass (build, lint, type-check)
- Keep PRs focused on a single feature or fix
- Update documentation if needed

## Testing

Currently, this project does not have automated tests. When adding tests:

- Use Jest for unit tests
- Use Playwright or Cypress for E2E tests
- Place tests next to the files they test

## Questions?

Feel free to open an issue for any questions or concerns.
