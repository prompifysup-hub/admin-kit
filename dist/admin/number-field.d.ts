import type { HTMLAttributes } from "react";
import type { FieldProps } from "../lib/field.type.ts";
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
export declare const NumberField: <RecordType extends Record<string, any> = Record<string, any>>({ defaultValue, source, record, empty, transform, locales, options, ...rest }: NumberFieldProps<RecordType>) => import("react").JSX.Element | null;
export interface NumberFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, HTMLAttributes<HTMLSpanElement> {
    locales?: string | string[];
    options?: object;
    transform?: (value: any) => number;
}
