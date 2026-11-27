import type { AnchorHTMLAttributes } from "react";
import React from "react";
import type { FieldProps } from "../lib/field.type.ts";
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
export declare const EmailField: {
    <RecordType extends Record<string, any> = Record<string, any>>(inProps: EmailFieldProps<RecordType>): React.JSX.Element | null;
    displayName: string;
};
export interface EmailFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, AnchorHTMLAttributes<HTMLAnchorElement> {
}
