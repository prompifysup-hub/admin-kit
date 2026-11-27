import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { cn } from "../lib/utils";
import { useLocales, useLocaleState } from "ra-core";
/**
 * Language switcher button that displays a menu allowing users to select the interface language.
 *
 * Automatically renders in the header when multiple locales are configured in the i18nProvider.
 * User's language selection is persisted using the store.
 * Returns null if only one language is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/localesmenubutton LocalesMenuButton documentation}
 * @see {@link https://marmelab.com/ra-core/translationsetup/ i18nProvider setup}
 */
export function LocalesMenuButton() {
    const languages = useLocales();
    const [locale, setLocale] = useLocaleState();
    const getNameForLocale = (locale) => {
        const language = languages.find((language) => language.locale === locale);
        return language ? language.name : "";
    };
    const changeLocale = (locale) => () => {
        setLocale(locale);
    };
    if (languages.length <= 1) {
        return null; // No need to render the dropdown if there's only one language
    }
    return (_jsxs(DropdownMenu, { modal: false, children: [_jsx(DropdownMenuTrigger, { render: _jsx(Button, { variant: "ghost", size: "icon", className: "hidden sm:inline-flex" }), children: locale.toUpperCase() }), _jsx(DropdownMenuContent, { align: "end", children: languages.map((language) => (_jsxs(DropdownMenuItem, { onClick: changeLocale(language.locale), children: [getNameForLocale(language.locale), _jsx(Check, { className: cn("ml-auto", locale !== language.locale && "hidden") })] }, language.locale))) })] }));
}
