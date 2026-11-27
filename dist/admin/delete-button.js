import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { humanize, singularize } from "inflection";
import { useDeleteController, useGetRecordRepresentation, useResourceTranslation, useRecordContext, useResourceContext, useTranslate, } from "ra-core";
/**
 * A button that deletes a record with undo capability.
 *
 * Renders a destructive button that deletes the current record and shows an undo notification.
 * Automatically redirects after deletion and works with the RecordContext.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/deletebutton/ DeleteButton documentation}
 *
 * @example
 * import { DeleteButton, Edit } from './index';
 *
 * const PostEdit = () => (
 *     <Edit actions={<DeleteButton />}>
 *         ...
 *     </Edit>
 * );
 */
export const DeleteButton = (props) => {
    const { label: labelProp, onClick, size, mutationOptions, redirect = "list", successMessage, variant = "outline", className = "cursor-pointer hover:bg-destructive/10! text-destructive! border-destructive! focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40", } = props;
    const record = useRecordContext(props);
    const resource = useResourceContext(props);
    // Prompify: ask first, then delete immediately (no undo window that a reload would lose).
    const { isPending, handleDelete: deleteNow } = useDeleteController({
        record,
        resource,
        redirect,
        mutationMode: "pessimistic",
        mutationOptions,
        successMessage,
    });
    const handleDelete = (event) => {
        event.stopPropagation();
        if (!window.confirm("Delete this item? This cannot be undone."))
            return;
        deleteNow();
        if (typeof onClick === "function")
            onClick(event);
    };
    const translate = useTranslate();
    const getRecordRepresentation = useGetRecordRepresentation(resource);
    let recordRepresentation = getRecordRepresentation(record);
    const resourceName = translate(`resources.${resource}.forcedCaseName`, {
        smart_count: 1,
        _: humanize(translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: resource ? singularize(resource) : undefined,
        }), true),
    });
    // We don't support React elements for this
    if (React.isValidElement(recordRepresentation)) {
        recordRepresentation = `#${record?.id}`;
    }
    const label = useResourceTranslation({
        resourceI18nKey: `resources.${resource}.action.delete`,
        baseI18nKey: "ra.action.delete",
        options: {
            name: resourceName,
            recordRepresentation,
        },
        userText: labelProp,
    });
    return (_jsxs(Button, { variant: variant, type: "button", onClick: handleDelete, disabled: isPending, "aria-label": typeof label === "string" ? label : undefined, size: size, className: className, children: [_jsx(Trash, {}), label] }));
};
