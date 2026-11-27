import * as React from "react";
import type { ReactElement } from "react";
import type { RaRecord, SimpleFormIteratorDisableRemoveFunction, SimpleFormIteratorItemBaseProps } from "ra-core";
import type { UseFieldArrayReturn } from "react-hook-form";
type GetItemLabelFunc = (index: number) => string | ReactElement;
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
export declare const SimpleFormIterator: (props: SimpleFormIteratorProps) => React.JSX.Element | null;
export interface SimpleFormIteratorProps extends Partial<UseFieldArrayReturn> {
    addButton?: ReactElement;
    children?: ReactElement | ReactElement[];
    className?: string;
    readOnly?: boolean;
    disabled?: boolean;
    disableAdd?: boolean;
    disableClear?: boolean;
    disableRemove?: boolean | SimpleFormIteratorDisableRemoveFunction;
    disableReordering?: boolean;
    fullWidth?: boolean;
    getItemLabel?: boolean | GetItemLabelFunc;
    inline?: boolean;
    meta?: {
        error?: any;
        submitFailed?: boolean;
    };
    record?: RaRecord;
    removeButton?: ReactElement;
    reOrderButtons?: ReactElement;
    resource?: string;
    source?: string;
}
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
export declare const SimpleFormIteratorItem: React.ForwardRefExoticComponent<SimpleFormIteratorItemProps & React.RefAttributes<HTMLLIElement>>;
export interface SimpleFormIteratorItemProps extends SimpleFormIteratorItemBaseProps {
    disabled?: boolean;
    disableRemove?: boolean | SimpleFormIteratorDisableRemoveFunction;
    disableReordering?: boolean;
    getItemLabel?: boolean | GetItemLabelFunc;
    inline?: boolean;
    removeButton?: ReactElement;
    reOrderButtons?: ReactElement;
}
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
export declare const AddItemButton: (props: React.ComponentProps<"button">) => React.JSX.Element;
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
export declare const ReOrderButtons: ({ className }: {
    className?: string;
}) => React.JSX.Element;
export declare const SimpleFormIteratorClearButton: ({ className, disableClear, disableRemove, }: SimpleFormIteratorClearButtonProp) => React.JSX.Element | null;
export interface SimpleFormIteratorClearButtonProp {
    className?: string;
    disableClear?: boolean;
    disableRemove?: boolean | SimpleFormIteratorDisableRemoveFunction;
}
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
export declare const ClearArrayButton: (props: React.ComponentProps<"button">) => React.JSX.Element;
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
export declare const RemoveItemButton: (props: React.ComponentProps<"button">) => React.JSX.Element;
export {};
