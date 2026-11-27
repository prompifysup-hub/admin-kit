import * as React from "react";
import { BreadcrumbItem, BreadcrumbPage } from "../ui/breadcrumb";
/**
 * A breadcrumb navigation component with mobile drawer support.
 *
 * Renders breadcrumb navigation in the app header via portal. On mobile, shows a drawer with
 * ellipsis for long breadcrumb trails. Use Breadcrumb.Item and Breadcrumb.PageItem as children.
 *
 * CRUD pages already include a Breadcrumb by default; set `disableBreadcrumb` to hide the
 * breadcrumb and/or provide your own.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/breadcrumb/ Breadcrumb documentation}
 * @see {@link https://ui.shadcn.com/docs/components/breadcrumb Breadcrumb UI documentation}
 *
 * @example
 * import { Edit, Breadcrumb, SimpleForm } from "./index";
 * import { LinkBase, RecordRepresentation } from 'ra-core';
 *
 * const PostEdit = () => (
 *   <Edit disableBreadcrumb>
 *     <Breadcrumb>
 *       <Breadcrumb.Item><LinkBase to="/">Home</LinkBase></Breadcrumb.Item>
 *       <Breadcrumb.Item><LinkBase to="/posts">Articles</LinkBase></Breadcrumb.Item>
 *       <Breadcrumb.PageItem>
 *         Edit Article "<RecordRepresentation />"
 *       </Breadcrumb.PageItem>
 *     </Breadcrumb>
 *     <SimpleForm>
 *       ...
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const Breadcrumb: {
    ({ children, ref }: BreadcrumbProps): React.ReactPortal | null;
    Item: typeof BreadcrumbItem;
    PageItem: typeof BreadcrumbPage;
};
export { BreadcrumbItem, BreadcrumbPage };
export type BreadcrumbProps = React.ComponentProps<"nav">;
