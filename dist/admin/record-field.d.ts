import type { ReactNode, ElementType, HTMLAttributes } from "react";
import type { ExtractRecordPaths, HintedString } from "ra-core";
/**
 * Displays a labeled field-value pair with flexible rendering options.
 *
 * Supports either vertical or inline layout.
 * It can render children, use a custom field component, or display a TextField by default.
 * To be used with RecordContext, e.g. inside Show, or inside ArrayField to display array items.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/recordfield/ RecordField documentation}
 *
 * @example
 * import { NumberField, RecordField, Show } from './index';
 *
 * const PostShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="reference" label="Ref." />
 *       <RecordField
 *         label="dimensions"
 *         render={record => `${record.width}x${record.height}`}
 *       />
 *       <RecordField source="price">
 *         <NumberField source="price" options={
 *           style: 'currency',
 *           currency: 'USD',
 *         }/>
 *       <RecordField source="status" variant="inline" />
 *     </div>
 *   </Show>
 * );
 */
export declare const RecordField: <RecordType extends Record<string, any> = Record<string, any>>(props: RecordFieldProps<RecordType>) => import("react").JSX.Element | null;
type NoInfer<T> = T extends infer U ? U : never;
export interface RecordFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    empty?: ReactNode;
    field?: ElementType;
    label?: ReactNode;
    render?: (record: RecordType) => React.ReactNode;
    resource?: string;
    source?: NoInfer<HintedString<ExtractRecordPaths<RecordType>>>;
    record?: RecordType;
    variant?: "default" | "inline";
}
export {};
