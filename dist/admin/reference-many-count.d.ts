import type { RaRecord, SortPayload } from "ra-core";
/**
 * Displays the count of related records that reference the current record.
 *
 * Calls dataProvider.getList() to compute the the number of records in a related resource that have a foreign key pointing to the current record.
 * It can optionally link to a filtered list of those records.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencemanycount/ ReferenceManyCount documentation}
 *
 * @example
 * import { List, DataTable, ReferenceManyCount } from './index';
 *
 * const AuthorList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="name" />
 *       <DataTable.Col label="Number of Books">
 *         <ReferenceManyCount reference="books" target="author_id" link />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export declare const ReferenceManyCount: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ReferenceManyCountProps<RecordType>) => import("react").JSX.Element;
export interface ReferenceManyCountProps<RecordType extends RaRecord = RaRecord> {
    record?: RecordType;
    reference: string;
    resource?: string;
    target: string;
    source?: string;
    sort?: SortPayload;
    filter?: any;
    link?: boolean;
    timeout?: number;
}
