# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native calculator app built with Expo. The project uses Expo Router for file-based navigation and supports iOS, Android, and Web platforms.

## Development Commands

### Running the App
```bash
npm start              # Start Expo development server (choose platform)
npm run android        # Run on Android emulator/device
npm run ios            # Run on iOS simulator/device
npm run web            # Run in web browser
```

### Code Quality
```bash
npm run lint           # Run ESLint
```

### Project Management
```bash
npm run reset-project  # Move current app to app-example/ and create blank app/
```

## Architecture

### Routing (Expo Router)
- **File-based routing**: Files in `app/` directory automatically become routes
- `app/_layout.tsx`: Root layout wrapping entire app with theme provider and navigation stack
- `app/(tabs)/_layout.tsx`: Tab navigation layout (home and explore tabs)
- `app/(tabs)/index.tsx`: Home screen (main entry point)
- `app/(tabs)/explore.tsx`: Explore screen
- `app/modal.tsx`: Modal screen example
- **Route groups**: Folders with `(parentheses)` group routes without affecting URL structure

### Theme System
The app uses a custom theming system supporting light and dark modes:

- `constants/theme.ts`: Defines `Colors` (light/dark color palettes) and `Fonts` (platform-specific font families)
- `hooks/use-color-scheme.ts`: Re-exports React Native's `useColorScheme` hook
- `hooks/use-color-scheme.web.ts`: Web-specific implementation
- `hooks/use-theme-color.ts`: Custom hook to get theme-aware colors with fallback to theme defaults

**Theme Usage Pattern**:
1. Root layout (`app/_layout.tsx`) wraps app in `ThemeProvider` with React Navigation's `DarkTheme`/`DefaultTheme`
2. Components use `useThemeColor` hook to access theme-aware colors
3. Themed components (`ThemedView`, `ThemedText`) accept `lightColor` and `darkColor` props for overrides

### Component Organization
- `components/`: Reusable components
  - `themed-*.tsx`: Theme-aware wrapper components (ThemedView, ThemedText)
  - `ui/`: UI-specific components (icon-symbol, collapsible)
  - Platform-specific files use `.ios.tsx` or `.web.tsx` extensions
- `hooks/`: Custom React hooks for theming and color scheme detection

### Import Aliases
TypeScript is configured with path alias `@/*` mapping to project root:
```typescript
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
```

### Platform-Specific Code
Use `.ios.tsx`, `.web.tsx`, or `.android.tsx` extensions for platform-specific implementations. React Native will automatically resolve the correct file.

Alternatively, use `Platform.select()` for inline platform-specific values:
```typescript
Platform.select({ ios: 'value1', android: 'value2', web: 'value3' })
```

## Key Technologies

- **Expo SDK 54**: Cross-platform React Native framework
- **Expo Router 6**: File-based routing and navigation
- **React Navigation 7**: Bottom tabs navigation with haptic feedback
- **TypeScript**: Strict mode enabled
- **React Native Reanimated**: For animations
- **Expo Symbols**: iOS SF Symbols support
