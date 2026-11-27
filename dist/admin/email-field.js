import { jsx as _jsx } from "react/jsx-runtime";
import { genericMemo, useFieldValue, useTranslate } from "ra-core";
import { cn } from "../lib/utils";
const EmailFieldImpl = (inProps) => {
    const { className, empty, defaultValue, source, record, ...rest } = inProps;
    const value = useFieldValue({ defaultValue, source, record });
    const translate = useTranslate();
    if (value == null) {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { className: className, ...rest, children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    return (_jsx("a", { className: cn("underline hover:no-underline", className), href: `mailto:${value}`, onClick: stopPropagation, ...rest, children: value }));
};
EmailFieldImpl.displayName = "EmailFieldImpl";
/**
 * Displays an email address as a clickable mailto link.
 *
 * Click events are prevented from bubbling up, making it safe to use in DataTable rows with rowClick.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/emailfield/ EmailField documentation}
 *
 * @example
 * import { List, DataTable, EmailField } from './index';
 *
 * const UserList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="name" />
 *       <DataTable.Col source="email" field={EmailField} />
 *     </DataTable>
 *   </List>
 * );
 */
export const EmailField = genericMemo(EmailFieldImpl);
// useful to prevent click bubbling in a DataTable with rowClick
const stopPropagation = (e) => e.stopPropagation();
