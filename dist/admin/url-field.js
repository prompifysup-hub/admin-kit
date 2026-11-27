import { jsx as _jsx } from "react/jsx-runtime";
import { genericMemo, useFieldValue, useTranslate } from "ra-core";
import { cn } from "../lib/utils";
/**
 * Displays a URL as a clickable hyperlink.
 *
 * Click events are prevented from bubbling up, making it safe to use in DataTable rows with rowClick.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/urlfield/ UrlField documentation}
 *
 * @example
 * import { List, DataTable, UrlField } from './index';
 *
 * const WebsiteList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col source="website">
 *         <UrlField source="website" empty="No website available" />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
const UrlFieldImpl = (inProps) => {
    const { empty, className, defaultValue, source, record, resource: _, ...rest } = inProps;
    const value = useFieldValue({ defaultValue, source, record });
    const translate = useTranslate();
    if (value == null) {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { className: className, ...rest, children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    return (_jsx("a", { className: cn("underline hover:no-underline", className), href: value, onClick: stopPropagation, ...rest, children: value }));
};
UrlFieldImpl.displayName = "UrlFieldImpl";
export const UrlField = genericMemo(UrlFieldImpl);
// useful to prevent click bubbling in a DataTable with rowClick
const stopPropagation = (e) => e.stopPropagation();
