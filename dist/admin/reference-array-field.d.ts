import type { ReactElement, ReactNode } from "react";
import type { FilterPayload, ListControllerResult, RaRecord, SortPayload, ExtractRecordPaths, HintedString } from "ra-core";
import type { UseQueryOptions } from "@tanstack/react-query";
/**
 * Displays multiple related records by following an array of foreign keys.
 *
 * This field fetches related records using an array of IDs and renders them using a child component (SingleFieldList by default).
 * It supports custom sorting, filtering, and rendering with DataTable or other list components.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencearrayfield/ ReferenceArrayField documentation}
 *
 * @example
 * import { List, DataTable, ReferenceArrayField } from './index';
 *
 * export const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col source="title" />
 *       <DataTable.Col source="tag_ids" label="Tags">
 *         <ReferenceArrayField reference="tags" source="tag_ids" />
 *       </DataTable.Col>
 *       <DataTable.Col>
 *         <EditButton />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export declare const ReferenceArrayField: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>, ReferenceRecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ReferenceArrayFieldProps<RecordType, ReferenceRecordType>) => import("react").JSX.Element;
export interface ReferenceArrayFieldProps<RecordType extends RaRecord = RaRecord, ReferenceRecordType extends RaRecord = RaRecord> extends ReferenceArrayFieldViewProps {
    filter?: FilterPayload;
    page?: number;
    pagination?: ReactElement;
    perPage?: number;
    reference: string;
    resource?: string;
    source: NoInfer<HintedString<ExtractRecordPaths<RecordType>>>;
    sort?: SortPayload;
    queryOptions?: Omit<UseQueryOptions<ReferenceRecordType[], Error>, "queryFn" | "queryKey">;
    render?: (props: ListControllerResult<ReferenceRecordType>) => ReactElement;
}
export interface ReferenceArrayFieldViewProps {
    children?: ReactNode;
    className?: string;
    empty?: ReactNode;
    error?: ReactNode;
    loading?: ReactNode;
    pagination?: ReactNode;
}
export declare const ReferenceArrayFieldView: (props: ReferenceArrayFieldViewProps) => import("react").JSX.Element;
