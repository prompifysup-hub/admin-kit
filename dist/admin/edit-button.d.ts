import React from "react";
import type { RaRecord } from "ra-core";
export type EditButtonProps = {
    record?: RaRecord;
    resource?: string;
    label?: string;
};
/**
 * A button that navigates to the edit page for a record.
 *
 * Works within RecordContext to automatically get the record ID.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/editbutton/ EditButton documentation}
 *
 * @example
 * import { DataTable, EditButton } from './index';
 *
 * const PostList = () => (
 *   <DataTable>
 *     <DataTable.Col source="title" />
 *     <DataTable.Col source="author" />
 *     <DataTable.Col source="published_at" />
 *     <DataTable.Col>
 *       <EditButton />
 *     </DataTable.Col>
 *   </DataTable>
 * );
 */
export declare const EditButton: (props: EditButtonProps) => React.JSX.Element;
