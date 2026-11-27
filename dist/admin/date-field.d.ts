import type { HTMLAttributes } from "react";
import type { FieldProps } from "../lib/field.type.ts";
/**
 * Displays a date value with locale-specific formatting.
 *
 * This field automatically formats dates according to the user's locale using Intl.DateTimeFormat.
 * It supports showing date only, time only, or both, with custom locales and formatting options.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/datefield/ DateField documentation}
 *
 * @example
 * import {
 *   List,
 *   DataTable,
 *   DateField,
 * } from './index';
 *
 * const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col>
 *         <DateField source="published_at" />
 *       </DataTable.Col>
 *       <DataTable.Col>
 *         <DateField source="updated_at" showTime />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export declare const DateField: {
    <RecordType extends Record<string, any> = Record<string, any>>(inProps: DateFieldProps<RecordType>): import("react").JSX.Element | null;
    displayName: string;
};
export interface DateFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, HTMLAttributes<HTMLSpanElement> {
    locales?: Intl.LocalesArgument;
    options?: Intl.DateTimeFormatOptions;
    showTime?: boolean;
    showDate?: boolean;
    transform?: (value: unknown) => Date;
}
