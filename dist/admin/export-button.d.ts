import * as React from "react";
import type { Exporter } from "ra-core";
/**
 * A button that exports list data to a file.
 *
 * Respects current filters and sort order, with configurable maximum results.
 * Use a custom exporter to customize the result and fetch related records.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/exportbutton/ ExportButton documentation}
 *
 * @example
 * import { CreateButton, ExportButton, TopToolbar } from './index';
 *
 * const PostListActions = () => (
 *   <>
 *     <FilterButton />
 *     <CreateButton />
 *     <ExportButton />
 *   </>
 * );
 *
 * export const PostList = () => (
 *   <List actions={<PostListActions />}>
 *     ...
 *   </List>
 * );
 */
export declare const ExportButton: (props: ExportButtonProps) => React.JSX.Element;
export interface ExportButtonProps {
    className?: string;
    exporter?: Exporter;
    icon?: React.ReactNode;
    label?: string;
    maxResults?: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    resource?: string;
    meta?: any;
}
