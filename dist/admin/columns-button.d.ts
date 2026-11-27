import type { ComponentProps, ReactNode } from "react";
import type { RaRecord, Identifier, SortPayload, HintedString, ExtractRecordPaths } from "ra-core";
import { Button } from "../ui/button";
/**
 * Renders a button that lets users show / hide columns in a DataTable
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/columnsbutton/ ColumnsButton documentation}
 *
 * @example
 * import { List, DataTable, EditButton, CreateButton, ExportButton, ColumnsButton } from './index';
 *
 * const PostsList = () => (
 *   <List
 *     actions={<>
 *       <ColumnsButton />
 *       <CreateButton />
 *       <ExportButton />
 *     </>}
 *   >
 *     <DataTable>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col source="body" />
 *       <DataTable.Col source="updated_at" />
 *       <EditButton />
 *     </DataTable>
 *   </List>
 * );
 */
export declare const ColumnsButton: (props: ColumnsButtonProps) => import("react").JSX.Element;
export interface ColumnsButtonProps extends ComponentProps<typeof Button> {
    resource?: string;
    storeKey?: string;
}
/**
 * Render DataTable.Col elements in the ColumnsButton selector using a React Portal.
 *
 * @see ColumnsButton
 */
export declare const ColumnsSelector: ({ children }: ColumnsSelectorProps) => import("react").ReactPortal | null;
interface ColumnsSelectorProps {
    children?: React.ReactNode;
}
export declare const ColumnsSelectorItem: <RecordType extends RaRecord<Identifier> = RaRecord<Identifier>>({ source, label, }: ColumnsSelectorItemProps<RecordType>) => import("react").JSX.Element | null;
export interface ColumnsSelectorItemProps<RecordType extends RaRecord<Identifier> = RaRecord<Identifier>> {
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
export {};
