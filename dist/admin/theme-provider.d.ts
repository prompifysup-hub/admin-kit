import type { Theme } from "./theme-context";
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};
/**
 * Theme provider that enables light, dark, and system theme modes.
 *
 * @internal
 */
export declare function ThemeProvider({ children, defaultTheme, storageKey, ...props }: ThemeProviderProps): import("react").JSX.Element;
export {};
