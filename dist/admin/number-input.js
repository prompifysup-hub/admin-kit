import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useEffect, useState } from "react";
import { FieldTitle, useInput, useResourceContext } from "ra-core";
import { FormControl, FormField, FormLabel } from "./form";
import { Input } from "../ui/input";
import { FormError } from "./form";
import { InputHelperText } from "./input-helper-text";
/**
 * Input component for numeric values (integers and floats) with parsing and formatting support.
 *
 * Use `<NumberInput>` for prices, quantities, counts, or any numeric field. Manages a local string
 * state internally so users can type incomplete numbers (e.g. '-' or '0.') before the value is parsed.
 * Supports min/max constraints and step increments.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/numberinput/ NumberInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, NumberInput, TextInput } from './index';
 *
 * const ProductEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="name" />
 *       <NumberInput source="price" step={0.01} min={0} />
 *       <NumberInput source="quantity" min={0} />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const NumberInput = (props) => {
    const { label, source, className, resource: resourceProp, validate: _validateProp, format: _formatProp, parse = convertStringToNumber, onFocus, helperText, ...rest } = props;
    const resource = useResourceContext({ resource: resourceProp });
    const { id, field, isRequired } = useInput(props);
    const handleChange = (event) => {
        const value = event.target.value;
        const numberValue = parse(value);
        setValue(value);
        field.onChange(numberValue ?? 0);
    };
    const [value, setValue] = useState(field.value?.toString() ?? "");
    const hasFocus = React.useRef(false);
    const handleFocus = (event) => {
        onFocus?.(event);
        hasFocus.current = true;
    };
    const handleBlur = (event) => {
        field.onBlur?.(event);
        hasFocus.current = false;
        setValue(field.value?.toString() ?? "");
    };
    useEffect(() => {
        if (!hasFocus.current) {
            setValue(field.value?.toString() ?? "");
        }
    }, [field.value]);
    return (_jsxs(FormField, { id: id, className: className, name: field.name, children: [label !== false && (_jsx(FormLabel, { children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) })), _jsx(FormControl, { children: _jsx(Input, { ...rest, ...field, type: "number", value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur }) }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
};
const convertStringToNumber = (value) => {
    if (value == null || value === "") {
        return null;
    }
    const float = parseFloat(value);
    return isNaN(float) ? 0 : float;
};
