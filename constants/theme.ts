/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

export const Colors = {
  darkGrey: "#2D2D2D",
  lightGray: "#989898",
  orange: "#FF9427",

  textPrimary: "white",
  textSecondary: "#666666",
  Background: "#000000",
} as const;

export const Fonts = Platform.select({
  ios: {
    /** Space Mono Regular - fuente monoespaciada para calculadora */
    regular: "SpaceMono_400Regular",
    /** Space Mono Bold - para números y operadores destacados */
    bold: "SpaceMono_700Bold",
  },
  android: {
    /** Space Mono Regular - fuente monoespaciada para calculadora */
    regular: "SpaceMono_400Regular",
    /** Space Mono Bold - para números y operadores destacados */
    bold: "SpaceMono_700Bold",
  },
  default: {
    /** Space Mono Regular - fuente monoespaciada para calculadora */
    regular: "SpaceMono_400Regular",
    /** Space Mono Bold - para números y operadores destacados */
    bold: "SpaceMono_700Bold",
  },
  web: {
    /** Space Mono con fallback a fuentes monoespaciadas del sistema */
    regular: "'Space Mono', 'Courier New', Courier, monospace",
    /** Space Mono Bold con fallback */
    bold: "'Space Mono', 'Courier New', Courier, monospace",
  },
});
