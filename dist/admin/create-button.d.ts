import React from "react";
export type CreateButtonProps = {
    label?: string;
    resource?: string;
};
/**
 * A button that navigates to the create page for a resource.
 *
 * Automatically uses the current resource unless overridden.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/createbutton/ CreateButton documentation}
 *
 * @example
 * import { CreateButton, List, ExportButton } from './index';
 *
 * const PostList = () => (
 *   <List
 *     actions={<>
 *       <CreateButton />
 *       <ExportButton />
 *     </>}
 *   >
 *     ...
 *   </List>
 * );
 */
export declare const CreateButton: (props: CreateButtonProps) => React.JSX.Element;
