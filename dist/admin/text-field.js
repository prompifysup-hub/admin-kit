import { jsx as _jsx } from "react/jsx-runtime";
import { useFieldValue, useTranslate } from "ra-core";
/**
 * Displays a text value from a record field inside a span element.
 *
 * This is the default field component used in DataTable columns and RecordField components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/textfield/ TextField documentation}
 *
 * @example
 * import { List, DataTable, TextField } from './index';
 *
 * export const UserList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col>
 *         <TextField source="name" empty="resources.users.fields.name.empty" />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export const TextField = ({ defaultValue, source, record, empty, ...rest }) => {
    const value = useFieldValue({ defaultValue, source, record });
    const translate = useTranslate();
    if (value == null) {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { ...rest, children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    return (_jsx("span", { ...rest, children: typeof value !== "string" ? value.toString() : value }));
};
