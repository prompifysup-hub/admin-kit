import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useTranslate } from "ra-core";
import { useCallback } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../ui/dialog";
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
export const Confirm = (props) => {
    const { className, isOpen = false, loading, title, content, cancel = "ra.action.cancel", confirm = "ra.action.confirm", confirmColor = "primary", ConfirmIcon = CheckCircle, CancelIcon = AlertCircle, onClose, onConfirm, translateOptions = {}, titleTranslateOptions = translateOptions, contentTranslateOptions = translateOptions, ...rest } = props;
    const translate = useTranslate();
    const handleConfirm = useCallback((e) => {
        e.stopPropagation();
        onConfirm(e);
    }, [onConfirm]);
    const handleClick = useCallback((e) => {
        e.stopPropagation();
    }, []);
    return (_jsx(Dialog, { open: isOpen, onOpenChange: () => onClose(), children: _jsxs(DialogContent, { className: className, onClick: handleClick, ...rest, children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: typeof title === "string"
                                ? translate(title, { _: title, ...titleTranslateOptions })
                                : title }), typeof content === "string" ? (_jsx(DialogDescription, { children: translate(content, {
                                _: content,
                                ...contentTranslateOptions,
                            }) })) : (content)] }), _jsxs(DialogFooter, { children: [_jsxs(Button, { variant: "ghost", disabled: loading, onClick: onClose, className: "gap-1", children: [_jsx(CancelIcon, { className: "h-5 w-5" }), translate(cancel, { _: cancel })] }), _jsxs(Button, { disabled: loading, onClick: handleConfirm, className: "gap-1", variant: confirmColor === "warning" ? "destructive" : "default", children: [_jsx(ConfirmIcon, { className: "h-5 w-5" }), translate(confirm, { _: confirm })] })] })] }) }));
};
