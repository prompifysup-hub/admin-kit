import type { RaRecord, UseBulkExportOptions } from "ra-core";
import { Button } from "../ui/button";
/**
 * Export the selected rows
 *
 * To be used inside the <DataTable bulkActionsButtons> prop.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/bulkexportbutton/ BulkExportButton documentation}
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
export declare const BulkExportButton: <T extends RaRecord>({ icon, label: labelProp, onClick, ...props }: BulkExportButtonProps<T>) => import("react").JSX.Element;
export type BulkExportButtonProps<T extends RaRecord> = UseBulkExportOptions<T> & {
    icon?: React.ReactNode;
    label?: string;
} & React.ComponentProps<typeof Button>;
