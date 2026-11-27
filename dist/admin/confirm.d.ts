import * as React from "react";
import type { ComponentType, MouseEventHandler } from "react";
/**
 * Generic confirmation dialog component for destructive actions.
 *
 * Displays a dialog with customizable title, content, and action buttons.
 * Used internally for delete operations and other confirmations.
 * Supports custom icons, button labels, and loading states.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/confirm Confirm documentation}
 *
 * @example
 * import { useState } from "react";
 * import { useDelete, useRecordContext, useResourceContext, useRedirect } from "ra-core";
 * import { Button } from "../ui/button";
 * import { Confirm } from "./confirm";
 *
 * const DeleteButton = () => {
 *   const resource = useResourceContext();
 *   const record = useRecordContext();
 *   const [isOpen, setIsOpen] = useState(false);
 *   const [deleteOne, { isPending }] = useDelete();
 *   const redirect = useRedirect();
 *
 *   const handleDelete = () => {
 *     deleteOne(
 *       resource,
 *       { id: record?.id, previousData: record },
 *       {
 *         onSuccess: () => {
 *           setIsOpen(false);
 *           redirect("list", resource);
 *         },
 *       },
 *     );
 *   };
 *
 *   return (
 *     <>
 *       <Button variant="destructive" onClick={() => setIsOpen(true)}>
 *         Delete
 *       </Button>
 *       <Confirm
 *         isOpen={isOpen}
 *         title="Are you sure you want to delete this element?"
 *         content="This action cannot be undone."
 *         onConfirm={handleDelete}
 *         onClose={() => setIsOpen(false)}
 *         loading={isPending}
 *       />
 *     </>
 *   );
 * };
 */
export declare const Confirm: (props: ConfirmProps) => React.JSX.Element;
export interface ConfirmProps {
    cancel?: string;
    className?: string;
    confirm?: string;
    confirmColor?: "primary" | "warning";
    ConfirmIcon?: ComponentType;
    CancelIcon?: ComponentType;
    content?: React.ReactNode;
    isOpen?: boolean;
    loading?: boolean;
    onClose: () => void;
    onConfirm: MouseEventHandler;
    title: React.ReactNode;
    /**
     * @deprecated use `titleTranslateOptions` and `contentTranslateOptions` instead
     */
    translateOptions?: object;
    titleTranslateOptions?: object;
    contentTranslateOptions?: object;
}
