import type { ReactNode } from "react";
import type { DataTableBaseProps, ExtractRecordPaths, HintedString, Identifier, RaRecord, SortPayload } from "ra-core";
/**
 * A powerful data table with sorting, selection, and column customization.
 *
 * Displays records in a table with built-in support for column sorting, bulk selection, row clicks,
 * and column visibility controls. Use DataTable.Col to define columns.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/datatable/ DataTable documentation}
 *
 * @example
 * import { List, DataTable, ReferenceField, EditButton } from './index';
 *
 * export const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col label="User">
 *         <ReferenceField source="user_id" reference="users" />
 *       </DataTable.Col>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col>
 *         <EditButton />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export declare function DataTable<RecordType extends RaRecord = RaRecord>(props: DataTableProps<RecordType>): import("react").JSX.Element;
export declare namespace DataTable {
    var Col: typeof DataTableColumn;
    var NumberCol: typeof DataTableNumberColumn;
}
export interface DataTableProps<RecordType extends RaRecord = RaRecord> extends Partial<DataTableBaseProps<RecordType>> {
    children: ReactNode;
    className?: string;
    rowClassName?: (record: RecordType) => string | undefined;
    bulkActionButtons?: ReactNode;
    bulkActionsToolbar?: ReactNode;
}
export declare function DataTableColumn<RecordType extends RaRecord<Identifier> = RaRecord<Identifier>>(props: DataTableColumnProps<RecordType>): import("react").JSX.Element | undefined;
export interface DataTableColumnProps<RecordType extends RaRecord<Identifier> = RaRecord<Identifier>> {
    className?: string;
    cellClassName?: string;
    headerClassName?: string;
    conditionalClassName?: (record: RecordType) => string | false | undefined;
    children?: ReactNode;
    render?: (record: RecordType) => React.ReactNode;
    field?: React.ElementType;
    source?: NoInfer<HintedString<ExtractRecordPaths<RecordType>>>;
    label?: React.ReactNode;
    disableSort?: boolean;
    sortByOrder?: SortPayload["order"];
}
export declare function DataTableNumberColumn<RecordType extends RaRecord<Identifier> = RaRecord<Identifier>>(props: DataTableNumberColumnProps<RecordType>): import("react").JSX.Element;
export interface DataTableNumberColumnProps<RecordType extends RaRecord<Identifier> = RaRecord<Identifier>> extends DataTableColumnProps<RecordType> {
    source: NoInfer<HintedString<ExtractRecordPaths<RecordType>>>;
    locales?: string | string[];
    options?: Intl.NumberFormatOptions;
}
