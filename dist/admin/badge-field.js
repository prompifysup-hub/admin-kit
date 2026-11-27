import { jsx as _jsx } from "react/jsx-runtime";
import { useFieldValue, useTranslate } from "ra-core";
import { Badge } from "../ui/badge";
/**
 * Displays a text value inside a styled badge component.
 *
 * This field wraps values in a Badge UI component with customizable variants (default, outline, secondary, destructive).
 * Use it to highlight status values, tags, or categorical information.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/badgefield/ BadgeField documentation}
 * @see {@link https://ui.shadcn.com/docs/components/badge Badge documentation}
 *
 * @example
 * import {
 *   List,
 *   DataTable,
 *   BadgeField,
 * } from './index';
 *
 * const OrderList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col>
 *         <BadgeField source="status" variant="outline" />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export const BadgeField = ({ defaultValue, source, record, empty, variant = "outline", ...rest }) => {
    const value = useFieldValue({ defaultValue, source, record });
    const translate = useTranslate();
    if (value == null) {
        return empty && typeof empty === "string"
            ? translate(empty, { _: empty })
            : empty;
    }
    return (_jsx(Badge, { variant: variant, ...rest, children: typeof value !== "string" ? value.toString() : value }));
};
