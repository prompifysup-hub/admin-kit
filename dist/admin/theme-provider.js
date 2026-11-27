import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useStore } from "ra-core";
import { ThemeProviderContext } from "./theme-context";
/**
 * Theme provider that enables light, dark, and system theme modes.
 *
 * @internal
 */
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme", ...props }) {
    const [theme, setTheme] = useStore(storageKey, defaultTheme);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
            return;
        }
        root.classList.add(theme);
    }, [theme]);
    const value = {
        theme,
        setTheme,
    };
    return (_jsx(ThemeProviderContext.Provider, { ...props, value: value, children: children }));
}
