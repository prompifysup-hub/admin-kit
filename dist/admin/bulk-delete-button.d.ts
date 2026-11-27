import type { RaRecord, UseBulkDeleteControllerParams } from "ra-core";
import type { ReactNode } from "react";
/**
 * A button that deletes multiple selected records at once.
 *
 * Allows to delete selected records in a DataTable. Use within
 * the bulkActionsButtons prop of DataTable or inside BulkActionsToolbar.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/bulkdeletebutton/ BulkDeleteButton documentation}
 *
 * @example
 * import { BulkDeleteButton, BulkExportButton, DataTable, List } from './index';
 *
 * export const PostList = () => (
 *   <List>
 *     <DataTable
 *       bulkActionsButtons={
 *         <>
 *           <BulkExportButton />
 *           <BulkDeleteButton />
 *         </>
 *       }
 *     >
 *       ...
 *     </DataTable>
 *   </List>
 * );
 */
export declare const BulkDeleteButton: <RecordType extends RaRecord = any, MutationOptionsError = unknown>({ icon, label: labelProp, className, ...props }: BulkDeleteButtonProps<RecordType, MutationOptionsError>) => import("react").JSX.Element;
export type BulkDeleteButtonProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> = {
    label?: string;
    icon?: ReactNode;
} & React.ComponentPropsWithoutRef<"button"> & UseBulkDeleteControllerParams<RecordType, MutationOptionsError>;
