import type { RaRecord, UseGetListOptions } from "ra-core";
/**
 * A button that selects all records (up to a limit) for the current list.
 *
 * Uses ListContext.getData when available to select across all pages,
 * falling back to onSelectAll otherwise.
 *
 * To be used inside the <DataTable bulkActionsButtons> prop or in BulkActionsToolbar.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/selectallbutton/ SelectAllButton documentation}
 *
 * @example
 * import { BulkActionsToolbar, BulkDeleteButton, SelectAllButton } from './index';
 *
 * const PostBulkActionsToolbar = () => (
 *   <BulkActionsToolbar>
 *     <SelectAllButton />
 *     <BulkDeleteButton />
 *   </BulkActionsToolbar>
 * );
 */
export declare const SelectAllButton: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>({ label, limit, queryOptions, className, onClick, ...props }: SelectAllButtonProps<RecordType>) => import("react").JSX.Element | null;
export type SelectAllButtonProps<RecordType extends RaRecord = RaRecord> = {
    label?: string;
    limit?: number;
    queryOptions?: UseGetListOptions<RecordType>;
} & React.ComponentPropsWithoutRef<"button">;
