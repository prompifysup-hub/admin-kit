import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "../ui/badge";
import { FormControl, FormError, FormField, FormLabel, } from "./form";
import { useInput, useResourceContext, FieldTitle, useTranslate, } from "ra-core";
import { InputHelperText } from "./input-helper-text";
const emptyArray = [];
/**
 * Form input for editing an array of strings, like tags or email addresses.
 *
 * Renders a text input where values are displayed as removable badges.
 * Users type text and press Enter to add items, or press Backspace
 * when the input is empty to remove the last item.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/textarrayinput/ TextArrayInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextArrayInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextArrayInput source="tags" />
 *       <TextArrayInput source="emails" placeholder="Add an email..." />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const TextArrayInput = (props) => {
    const { className, defaultValue, disabled, format, helperText, label, name, onBlur, onChange, parse, placeholder, readOnly, source, validate, ...rest } = props;
    const resource = useResourceContext(props);
    const { id, field, isRequired } = useInput({
        defaultValue,
        format: format ?? ((v) => v ?? emptyArray),
        name,
        onBlur,
        onChange,
        parse,
        source,
        validate,
    });
    const translate = useTranslate();
    const inputRef = React.useRef(null);
    const [inputValue, setInputValue] = React.useState("");
    const values = field.value ?? emptyArray;
    const handleAddValue = (text) => {
        const trimmed = text.trim();
        if (trimmed) {
            field.onChange([...values, trimmed]);
        }
        setInputValue("");
    };
    const handleRemoveValue = (index) => {
        field.onChange(values.filter((_, i) => i !== index));
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (inputValue.trim()) {
                handleAddValue(inputValue);
            }
        }
        else if (e.key === "Backspace" &&
            inputValue === "" &&
            values.length > 0 &&
            !readOnly) {
            field.onChange(values.slice(0, -1));
        }
        else if (e.key === "Escape") {
            inputRef.current?.blur();
        }
    };
    return (_jsxs(FormField, { id: id, className: className, name: field.name, children: [label !== false && (_jsx(FormLabel, { children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) })), _jsx(FormControl, { children: _jsx("div", { className: "group rounded-md bg-background shadow-xs dark:bg-input/30 border border-input px-3 py-1.75 text-sm transition-all ring-offset-background focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", ...rest, children: _jsxs("div", { className: "flex flex-wrap gap-1", children: [values.map((value, index) => (_jsxs(Badge, { variant: "outline", children: [value, _jsxs("button", { className: "ml-1 cursor-pointer rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2", onKeyDown: (e) => {
                                            if (e.key === "Enter") {
                                                handleRemoveValue(index);
                                            }
                                        }, onMouseDown: (e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }, onClick: (e) => {
                                            e.preventDefault();
                                            handleRemoveValue(index);
                                        }, disabled: disabled || readOnly, children: [_jsx("span", { className: "sr-only", children: translate("ra.action.remove", { _: "Remove" }) }), _jsx(X, { className: "h-3 w-3" })] })] }, `${value}-${index}`))), _jsx("input", { ref: inputRef, value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown, onBlur: () => {
                                    if (inputValue.trim()) {
                                        handleAddValue(inputValue);
                                    }
                                    field.onBlur?.();
                                }, placeholder: values.length === 0 ? placeholder : undefined, disabled: disabled, readOnly: readOnly, className: "ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground" })] }) }) }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
};
