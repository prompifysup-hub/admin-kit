import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import get from "lodash/get";
import * as React from "react";
import { useState } from "react";
import { RecordContextProvider, SimpleFormIteratorBase, SimpleFormIteratorItemBase, useArrayInput, useEvent, useGetArrayInputNewItemDefaults, useRecordContext, useResourceContext, useSimpleFormIterator, useSimpleFormIteratorItem, useTranslate, useWrappedSource, } from "ra-core";
import { ArrowDownCircle, ArrowUpCircle, PlusCircle, Trash, XCircle, } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../ui/tooltip";
import { Confirm } from "./confirm";
import { IconButtonWithTooltip } from "./icon-button-with-tooltip";
/**
 * An array input iterator for managing dynamic lists of items in forms.
 *
 * Renders a list of form items with add, remove, and reorder controls. Use inside ArrayInput
 * for arrays of objects or scalar values. Supports inline layouts and custom buttons.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/arrayinput/ ArrayInput documentation}
 *
 * @example
 * import { ArrayInput, SimpleFormIterator, TextInput } from './index';
 *
 * const PostEdit = () => (
 *   <ArrayInput source="authors">
 *     <SimpleFormIterator>
 *       <TextInput source="name" />
 *       <TextInput source="email" />
 *     </SimpleFormIterator>
 *   </ArrayInput>
 * );
 */
export const SimpleFormIterator = (props) => {
    const { addButton = defaultAddItemButton, removeButton, reOrderButtons, children, className, resource, disabled, disableAdd = false, disableClear, disableRemove = false, disableReordering, inline, getItemLabel = false, } = props;
    const finalSource = useWrappedSource("");
    if (!finalSource) {
        throw new Error("SimpleFormIterator can only be called within an iterator input like ArrayInput");
    }
    const { fields } = useArrayInput(props);
    const record = useRecordContext(props);
    const records = get(record, finalSource);
    const getArrayInputNewItemDefaults = useGetArrayInputNewItemDefaults(fields);
    const getItemDefaults = useEvent((item = undefined) => {
        if (item != null)
            return item;
        return getArrayInputNewItemDefaults(children);
    });
    return fields ? (_jsx(SimpleFormIteratorBase, { getItemDefaults: getItemDefaults, ...props, children: _jsxs("div", { className: cn("w-full", disabled && "disabled", className), children: [_jsx("ul", { className: "p-0 m-0 flex flex-col gap-2", children: fields.map((member, index) => (_jsx(RecordContextProvider, { value: (records && records[index]) || {}, children: _jsx(SimpleFormIteratorItem, { disabled: disabled, disableRemove: disableRemove, disableReordering: disableReordering, fields: fields, getItemLabel: getItemLabel, index: index, removeButton: removeButton, reOrderButtons: reOrderButtons, resource: resource, inline: inline, children: children }) }, member.id))) }), !disabled && !(disableAdd && (disableClear || disableRemove)) && (_jsxs("div", { className: "flex flex-row items-center gap-2", children: [!disableAdd && addButton, fields.length > 0 && !disableClear && !disableRemove && (_jsx(SimpleFormIteratorClearButton, {}))] }))] }) })) : null;
};
/**
 * A single item in a SimpleFormIterator list with controls.
 *
 * Renders one item from an array with its input fields and action buttons (remove, reorder).
 * Usually used internally by SimpleFormIterator but can be customized.
 *
 * @example
 * import { SimpleFormIteratorItem } from './index';
 *
 * // Typically used internally by SimpleFormIterator
 */
export const SimpleFormIteratorItem = React.forwardRef((props, ref) => {
    const { children, disabled, disableReordering, disableRemove, getItemLabel, index, inline, removeButton = defaultRemoveItemButton, reOrderButtons = defaultReOrderButtons, } = props;
    const resource = useResourceContext(props);
    if (!resource) {
        throw new Error("SimpleFormIteratorItem must be used in a ResourceContextProvider or be passed a resource prop.");
    }
    const record = useRecordContext(props);
    if (!record) {
        throw new Error("SimpleFormIteratorItem must be used in a RecordContextProvider.");
    }
    // Returns a boolean to indicate whether to disable the remove button for certain fields.
    // If disableRemove is a function, then call the function with the current record to
    // determining if the button should be disabled. Otherwise, use a boolean property that
    // enables or disables the button for all of the fields.
    const disableRemoveField = (record) => {
        if (typeof disableRemove === "boolean") {
            return disableRemove;
        }
        return disableRemove && disableRemove(record);
    };
    const label = typeof getItemLabel === "function" ? getItemLabel(index) : getItemLabel;
    return (_jsx(SimpleFormIteratorItemBase, { ...props, children: _jsxs("li", { ref: ref, className: cn("flex flex-row items-start justify-between gap-2 pb-2 border-b border-border last:border-b-0", 
            // Align the buttons with the input
            "[&:has(label)>.simple-form-iterator-item-actions]:pt-10"), children: [label != null && label !== false && (_jsx("p", { className: "text-sm text-muted-foreground mb-2", children: label })), _jsx("div", { className: cn("flex flex-1 gap-2", inline ? "flex-col sm:flex-row gap-2" : "flex-col"), children: children }), !disabled && (_jsxs("div", { className: "simple-form-iterator-item-actions flex flex-row h-9 items-center gap-1", children: [!disableReordering && reOrderButtons, !disableRemoveField(record) && removeButton] }))] }) }));
});
/**
 * A button to add new items to a SimpleFormIterator.
 *
 * Renders a plus icon button that appends a new item to the array. Works with the
 * SimpleFormIterator context to add items with default values.
 *
 * @example
 * import { ArrayInput, SimpleFormIterator, AddItemButton } from './index';
 *
 * const PostEdit = () => (
 *     <ArrayInput source="tags">
 *         <SimpleFormIterator addButton={<AddItemButton />}>
 *             ...
 *         </SimpleFormIterator>
 *     </ArrayInput>
 * );
 */
export const AddItemButton = (props) => {
    const { add, source } = useSimpleFormIterator();
    const { className, ...rest } = props;
    const translate = useTranslate();
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: _jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => add(), "aria-label": translate("ra.action.add"), className: cn("button-add", `button-add-${source}`, className), ...rest }), children: _jsx(PlusCircle, { className: "h-5 w-5" }) }), _jsx(TooltipContent, { children: translate("ra.action.add") })] }) }));
};
/**
 * Up and down buttons for reordering items in a SimpleFormIterator.
 *
 * Renders arrow buttons that move an item up or down in the list. Used internally
 * by SimpleFormIterator but can be customized.
 *
 * @example
 * import { SimpleFormIterator, ReOrderButtons } from './index';
 *
 * const PostEdit = () => (
 *     <SimpleFormIterator reOrderButtons={<ReOrderButtons />}>
 *         ...
 *     </SimpleFormIterator>
 * );
 */
export const ReOrderButtons = ({ className }) => {
    const { index, total, reOrder } = useSimpleFormIteratorItem();
    const { source } = useSimpleFormIterator();
    return (_jsxs("span", { className: cn("button-reorder", `button-reorder-${source}-${index}`, className), children: [_jsx(IconButtonWithTooltip, { label: "ra.action.move_up", onClick: () => reOrder(index - 1), disabled: index <= 0, children: _jsx(ArrowUpCircle, { className: "h-4 w-4" }) }), _jsx(IconButtonWithTooltip, { label: "ra.action.move_down", onClick: () => reOrder(index + 1), disabled: total == null || index >= total - 1, children: _jsx(ArrowDownCircle, { className: "h-4 w-4" }) })] }));
};
export const SimpleFormIteratorClearButton = ({ className, disableClear, disableRemove, }) => {
    const translate = useTranslate();
    const [confirmIsOpen, setConfirmIsOpen] = useState(false);
    const { clear, total } = useSimpleFormIterator();
    const handleArrayClear = useEvent(() => {
        clear();
        setConfirmIsOpen(false);
    });
    if (total === 0 || disableClear === true || disableRemove === true) {
        return null;
    }
    return (_jsxs(_Fragment, { children: [_jsx(Confirm, { isOpen: confirmIsOpen, title: translate("ra.action.clear_array_input"), content: translate("ra.message.clear_array_input"), onConfirm: handleArrayClear, onClose: () => setConfirmIsOpen(false) }), _jsx(ClearArrayButton, { className: className, onClick: () => setConfirmIsOpen(true) })] }));
};
/**
 * A button to clear all items from a SimpleFormIterator.
 *
 * Renders a trash icon button that removes all items from the array after confirmation.
 * Used internally by SimpleFormIterator when disableClear is false.
 *
 * @example
 * import { ClearArrayButton } from './index';
 *
 * // Typically used internally by SimpleFormIterator
 */
export const ClearArrayButton = (props) => {
    const translate = useTranslate();
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: _jsx(Button, { type: "button", variant: "ghost", size: "icon", ...props }), children: _jsx(Trash, { className: "h-5 w-5 text-red-500" }) }), _jsx(TooltipContent, { children: translate("ra.action.clear_array_input") })] }) }));
};
/**
 * A button to remove a single item from a SimpleFormIterator.
 *
 * Renders a close icon button that removes the current item from the array. Used internally
 * by SimpleFormIterator for each item when disableRemove is false.
 *
 * @example
 * import { SimpleFormIterator, RemoveItemButton } from './index';
 *
 * const PostEdit = () => (
 *     <SimpleFormIterator removeButton={<RemoveItemButton />}>
 *         ...
 *     </SimpleFormIterator>
 * );
 */
export const RemoveItemButton = (props) => {
    const { remove, index } = useSimpleFormIteratorItem();
    const { source } = useSimpleFormIterator();
    const { className, ...rest } = props;
    const translate = useTranslate();
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: _jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => remove(), className: cn("button-remove", `button-remove-${source}-${index}`, className), ...rest }), children: _jsx(XCircle, { className: "h-5 w-5 text-red-500" }) }), _jsx(TooltipContent, { children: translate("ra.action.remove") })] }) }));
};
const defaultAddItemButton = _jsx(AddItemButton, {});
const defaultRemoveItemButton = _jsx(RemoveItemButton, {});
const defaultReOrderButtons = _jsx(ReOrderButtons, {});
