import React from "react";
import type { RaRecord } from "ra-core";
export type ShowButtonProps = {
    label?: string;
    icon?: React.ReactNode;
    record?: RaRecord;
    resource?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * A button that navigates to the show page for a record.
 *
 * Works within RecordContext to automatically get the record ID.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/showbutton/ ShowButton documentation}
 *
 * @example
 * import { ShowButton } from './index';
 *
 * const PostActions = () => (
 *   <ShowButton label="View Details" />
 * );
 */
export declare const ShowButton: (props: ShowButtonProps) => React.JSX.Element;
