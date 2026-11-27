import type { ReactNode } from "react";
import type { RaRecord, UseReferenceManyFieldControllerParams, ListControllerResult } from "ra-core";
/**
 * Displays multiple related records that reference the current record via a foreign key.
 *
 * This field fetches records from a related resource where the foreign key points to the current record.
 * It provides a ListContext to its children, enabling list rendering with DataTable or custom components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencemanyfield/ ReferenceManyField documentation}
 *
 * @example
 * import { Show, ReferenceManyField, DataTable, DateField, RecordField } from './index';
 *
 * const AuthorShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="first_name" />
 *       <RecordField source="last_name" />
 *       <RecordField label="Books">
 *         <ReferenceManyField reference="books" target="author_id" label="Books">
 *           <DataTable>
 *             <DataTable.Col source="title" />
 *             <DataTable.Col source="published_at" field={DateField} />
 *           </DataTable>
 *         </ReferenceManyField>
 *       </RecordField>
 *     </div>
 *   </Show>
 * );
 */
export declare const ReferenceManyField: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>, ReferenceRecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ReferenceManyFieldProps<RecordType, ReferenceRecordType>) => import("react").JSX.Element;
export interface ReferenceManyFieldProps<RecordType extends RaRecord = RaRecord, ReferenceRecordType extends RaRecord = RaRecord> extends UseReferenceManyFieldControllerParams<RecordType, ReferenceRecordType>, ReferenceManyFieldViewProps<ReferenceRecordType> {
}
export interface ReferenceManyFieldViewProps<ReferenceRecordType extends RaRecord = RaRecord> {
    children?: ReactNode;
    empty?: ReactNode;
    error?: ReactNode;
    loading?: ReactNode;
    pagination?: ReactNode;
    render?: (props: ListControllerResult<ReferenceRecordType>) => ReactNode;
}
