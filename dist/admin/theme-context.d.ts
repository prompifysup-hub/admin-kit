export type Theme = "dark" | "light" | "system";
export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeProviderContext: import("react").Context<ThemeProviderState>;
