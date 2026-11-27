import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { FieldTitle, useRecordContext, useResourceContext, useTranslate, } from "ra-core";
import { cn } from "../lib/utils";
import { TextField } from "./text-field";
/**
 * Displays a labeled field-value pair with flexible rendering options.
 *
 * Supports either vertical or inline layout.
 * It can render children, use a custom field component, or display a TextField by default.
 * To be used with RecordContext, e.g. inside Show, or inside ArrayField to display array items.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/recordfield/ RecordField documentation}
 *
 * @example
 * import { NumberField, RecordField, Show } from './index';
 *
 * const PostShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="reference" label="Ref." />
 *       <RecordField
 *         label="dimensions"
 *         render={record => `${record.width}x${record.height}`}
 *       />
 *       <RecordField source="price">
 *         <NumberField source="price" options={
 *           style: 'currency',
 *           currency: 'USD',
 *         }/>
 *       <RecordField source="status" variant="inline" />
 *     </div>
 *   </Show>
 * );
 */
export const RecordField = (props) => {
    const { children, className, empty, field, label, render, resource: _, source, record: recordProp, variant, ...rest } = props;
    const resource = useResourceContext(props);
    const record = useRecordContext({ recordProp });
    const translate = useTranslate();
    if (!source && !label && !render)
        return null;
    return (_jsxs("div", { className: cn(className, "flex", variant === "inline" ? "flex-row" : "flex-col"), ...rest, children: [label !== "" && label !== false ? (_jsx("div", { className: cn(variant === "inline" ? "block min-w-50" : "text-xs", "text-muted-foreground"), children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: false }) })) : null, children ? (_jsx("span", { className: "flex-1", children: children })) : render ? (record && (_jsx("span", { className: "flex-1", children: render(record) ||
                    (typeof empty === "string"
                        ? translate(empty, { _: empty })
                        : empty) }))) : field ? (createElement(field, {
                source,
                empty,
                className: "flex-1",
            })) : source ? (_jsx(TextField, { source: source, empty: empty, className: "flex-1" })) : null] }));
};
