import type { HTMLAttributes } from "react";
import type { FieldProps } from "../lib/field.type.ts";
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
export declare const TextField: <RecordType extends Record<string, any> = Record<string, any>>({ defaultValue, source, record, empty, ...rest }: TextFieldProps<RecordType>) => import("react").JSX.Element | null;
export interface TextFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, HTMLAttributes<HTMLSpanElement> {
}
