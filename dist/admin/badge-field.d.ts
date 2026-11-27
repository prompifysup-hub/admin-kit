import * as React from "react";
import type { RaRecord } from "ra-core";
import { Badge } from "../ui/badge";
import type { FieldProps } from "../lib/field.type.ts";
type BadgeProps = React.ComponentProps<typeof Badge>;
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
export declare const BadgeField: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>({ defaultValue, source, record, empty, variant, ...rest }: BadgeFieldProps<RecordType>) => string | number | bigint | boolean | React.JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
export interface BadgeFieldProps<RecordType extends RaRecord = RaRecord> extends FieldProps<RecordType>, BadgeProps {
    variant?: "default" | "outline" | "secondary" | "destructive";
}
export {};
