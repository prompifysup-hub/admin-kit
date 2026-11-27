import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { Switch } from "../ui/switch";
import { FormError, FormField, FormLabel } from "./form";
import { useInput, FieldTitle } from "ra-core";
import { InputHelperText } from "./input-helper-text";
/**
 * Toggle switch for boolean (true/false) values.
 *
 * Use `<BooleanInput>` for binary settings like "is published", "is active", or feature flags.
 * Leverages shadcn's Switch component for a native-looking toggle. Note: this input doesn't
 * support `null` values—use `<SelectInput>` for nullable booleans.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/booleaninput/ BooleanInput documentation}
 * @see {@link https://ui.shadcn.com/docs/components/switch Switch documentation}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   BooleanInput,
 *   TextInput,
 * } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <BooleanInput source="is_published" />
 *       <BooleanInput source="allow_comments" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const BooleanInput = (props) => {
    const { className, defaultValue = false, format, label, helperText, onBlur, onChange, onFocus, readOnly, disabled, parse, resource, source, validate, ...rest } = props;
    const { id, field, isRequired } = useInput({
        defaultValue,
        format,
        parse,
        resource,
        source,
        onBlur,
        onChange,
        type: "checkbox",
        validate,
        disabled,
        readOnly,
        ...rest,
    });
    const handleChange = useCallback((checked) => {
        field.onChange(checked);
        // Ensure field is considered as touched
        field.onBlur();
    }, [field]);
    return (_jsxs(FormField, { className: className, id: id, name: field.name, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Switch, { id: id, checked: Boolean(field.value), onFocus: onFocus, onCheckedChange: handleChange, disabled: disabled || readOnly }), _jsx(FormLabel, { htmlFor: id, children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) })] }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
};
