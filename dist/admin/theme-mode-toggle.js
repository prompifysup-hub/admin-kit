import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { cn } from "../lib/utils";
import { useTheme } from "./use-theme";
/**
 * Toggle button that lets users switch between light, dark, and system UI themes.
 *
 * User's selection is persisted using the store.
 * Automatically included in the default Layout component header.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/thememodetoggle ThemeModeToggle documentation}
 */
export function ThemeModeToggle() {
    const { theme, setTheme } = useTheme();
    return (_jsxs(DropdownMenu, { modal: false, children: [_jsxs(DropdownMenuTrigger, { render: _jsx(Button, { variant: "ghost", size: "icon", className: "hidden sm:inline-flex" }), children: [_jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), _jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), _jsx("span", { className: "sr-only", children: "Toggle theme" })] }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsxs(DropdownMenuItem, { onClick: () => setTheme("light"), children: ["Light", _jsx(Check, { className: cn("ml-auto", theme !== "light" && "hidden") })] }), _jsxs(DropdownMenuItem, { onClick: () => setTheme("dark"), children: ["Dark", _jsx(Check, { className: cn("ml-auto", theme !== "dark" && "hidden") })] }), _jsxs(DropdownMenuItem, { onClick: () => setTheme("system"), children: ["System", _jsx(Check, { className: cn("ml-auto", theme !== "system" && "hidden") })] })] })] }));
}
