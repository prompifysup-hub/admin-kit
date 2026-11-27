import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { FieldTitle, isRequired, useSourceContext, sanitizeInputRestProps, ArrayInputBase, } from "ra-core";
import { Label } from "../ui/label";
import { cn } from "../lib/utils";
import { Skeleton } from "../ui/skeleton";
import { InputHelperText } from "./input-helper-text";
import { FormError, FormField } from "./form";
/**
 * Creates a list of sub-forms for editing arrays of data embedded inside a record.
 *
 * Use `<ArrayInput>` when you need to edit array fields like order items, tags, or any
 * repeatable embedded data. Requires a form iterator child (typically `<SimpleFormIterator>`)
 * to render and manage individual array items.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/arrayinput/ ArrayInput documentation}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   TextInput,
 *   NumberInput,
 *   ArrayInput,
 *   SimpleFormIterator,
 * } from './index';
 *
 * const OrderEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="customer" />
 *       <TextInput source="date" type="date" />
 *       <ArrayInput source="items">
 *         <SimpleFormIterator inline>
 *           <TextInput source="name" />
 *           <NumberInput source="price" />
 *           <NumberInput source="quantity" />
 *         </SimpleFormIterator>
 *       </ArrayInput>
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const ArrayInput = (props) => {
    const { className, defaultValue = [], label, isPending, children, helperText, resource: resourceFromProps, source: arraySource, validate, ...rest } = props;
    const parentSourceContext = useSourceContext();
    const finalSource = parentSourceContext.getSource(arraySource);
    const labelId = React.useId();
    if (isPending) {
        return _jsx(Skeleton, { className: "w-full h-9" });
    }
    return (_jsxs(FormField, { className: cn("ra-input", `ra-input-${finalSource}`, className, "w-full flex flex-col gap-2"), "aria-labelledby": labelId, role: "group", name: finalSource, ...sanitizeInputRestProps(rest), children: [_jsx(Label, { className: "text-muted-foreground text-sm", id: labelId, children: _jsx(FieldTitle, { label: label, source: arraySource, resource: resourceFromProps, isRequired: isRequired(validate) }) }), _jsx(ArrayInputBase, { ...props, defaultValue: defaultValue, children: children }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
};
