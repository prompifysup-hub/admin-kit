import type { LucideIcon } from "lucide-react";
import type { RaRecord } from "ra-core";
import type { FieldProps } from "../lib/field.type.ts";
/**
 * Displays a boolean value as a colored check or close icon.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/booleanfield/ BooleanField documentation}
 *
 * @example
 * import { Show, SimpleShowLayout, BooleanField } from './index';
 *
 * const PostShow = () => (
 *   <Show>
 *     <SimpleShowLayout>
 *       <BooleanField source="is_published" />
 *       <BooleanField source="allow_comments" />
 *     </SimpleShowLayout>
 *   </Show>
 * );
 */
export declare const BooleanField: <RecordType extends RaRecord = any>({ source, record, defaultValue, className, TrueIcon, FalseIcon, valueLabelFalse, valueLabelTrue, looseValue, empty, }: BooleanFieldProps<RecordType>) => import("react").JSX.Element;
export interface BooleanFieldProps<RecordType extends RaRecord = any> extends FieldProps<RecordType> {
    className?: string;
    defaultValue?: unknown;
    TrueIcon?: LucideIcon | null;
    FalseIcon?: LucideIcon | null;
    valueLabelTrue?: string;
    valueLabelFalse?: string;
    looseValue?: boolean;
}
