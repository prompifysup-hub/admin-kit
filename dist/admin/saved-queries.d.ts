import type { ReactElement } from "react";
/**
 * Dialog for saving the current list view query (filters, sort, pagination) as a named saved query.
 *
 * Used by FilterButton in the List view.
 *
 * @internal
 */
export declare const AddSavedQueryDialog: ({ open, onClose, }: AddSavedQueryDialogProps) => ReactElement;
export interface AddSavedQueryDialogProps {
    open: boolean;
    onClose: () => void;
}
/**
 * Dialog for removing a saved query from the user's list.
 *
 * @internal
 */
export declare const RemoveSavedQueryDialog: ({ open, onClose, }: RemoveSavedQueryDialogProps) => ReactElement;
export interface RemoveSavedQueryDialogProps {
    open: boolean;
    onClose: () => void;
}
