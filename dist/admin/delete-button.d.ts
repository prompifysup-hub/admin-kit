import * as React from "react";
import type { UseDeleteOptions, RedirectionSideEffect } from "ra-core";
export type DeleteButtonProps = {
    label?: string;
    size?: "default" | "sm" | "lg" | "icon";
    onClick?: React.ReactEventHandler<HTMLButtonElement>;
    mutationOptions?: UseDeleteOptions;
    redirect?: RedirectionSideEffect;
    resource?: string;
    successMessage?: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};
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
export declare const DeleteButton: (props: DeleteButtonProps) => React.JSX.Element;
