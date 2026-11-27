import type { ReactNode } from "react";
import type { RaRecord, UseListOptions, UseFieldValueOptions } from "ra-core";
/**
 * Reads an array field value, puts it in a ListContext and renders its children.
 *
 * This field enables the use of list rendering components like SingleFieldList or
 * DataTable to display array data.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/arrayfield/ ArrayField documentation}
 *
 * @example
 * import {
 *   Show,
 *   ArrayField,
 *   RecordField,
 *   SingleFieldList,
 *   BadgeField,
 * } from './index';
 *
 * const PostShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *      <RecordField source="title" />
 *      <RecordField source="content" />
 *      <RecordField source="tags">
 *         <ArrayField source="tags">
 *           <SingleFieldList>
 *             <BadgeField source="name" />
 *           </SingleFieldList>
 *         </ArrayField>
 *      </RecordField>
 *     </div>
 *   </Show>
 * );
 */
export declare const ArrayField: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ArrayFieldProps<RecordType>) => import("react").JSX.Element;
export type ArrayFieldProps<RecordType extends RaRecord = RaRecord, ErrorType = Error> = UseListOptions<RecordType, ErrorType> & UseFieldValueOptions<RecordType> & {
    children?: ReactNode;
};
