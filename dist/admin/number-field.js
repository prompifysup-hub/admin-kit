import { jsx as _jsx } from "react/jsx-runtime";
import { useFieldValue, useTranslate } from "ra-core";
/**
 * Displays a numeric value with locale-specific formatting.
 *
 * This field automatically formats numbers according to the user's locale using Intl.NumberFormat.
 * It supports custom locales and formatting options for currencies, percentages, and more.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/numberfield/ NumberField documentation}
 *
 * @example
 * import { Show, RecordField, NumberField } from './index';
 *
 * const ProductShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="reference" />
 *       <RecordField source="price">
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *       </RecordField>
 *     </div>
 *   </Show>
 * );
 */
export const NumberField = ({ defaultValue, source, record, empty, transform = defaultTransform, locales, options, ...rest }) => {
    let value = useFieldValue({ defaultValue, source, record });
    const translate = useTranslate();
    if (value == null) {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { ...rest, children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    if (transform) {
        value = transform(value);
    }
    return (_jsx("span", { ...rest, children: hasNumberFormat && typeof value === "number"
            ? value.toLocaleString(locales, options)
            : value }));
};
const defaultTransform = (value) => value && typeof value === "string" && !isNaN(value) ? +value : value;
const hasNumberFormat = !!(typeof Intl === "object" &&
    Intl &&
    typeof Intl.NumberFormat === "function");
