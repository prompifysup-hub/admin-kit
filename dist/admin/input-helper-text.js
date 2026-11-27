import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslate } from "ra-core";
import { isValidElement } from "react";
import { FormDescription } from "./form";
/**
 * Renders helper text below form inputs with automatic translation support.
 *
 * @internal
 */
export function InputHelperText({ helperText }) {
    const translate = useTranslate();
    if (!helperText) {
        return null;
    }
    if (isValidElement(helperText)) {
        return helperText;
    }
    return (_jsx(FormDescription, { children: typeof helperText === "string"
            ? translate(helperText, { _: helperText })
            : helperText }));
}
