import type { ShowBaseProps } from "ra-core";
import type { ReactNode } from "react";
export interface ShowProps extends ShowViewProps, Omit<ShowBaseProps, "children"> {
}
/**
 * A complete show page with breadcrumb, title, and default actions.
 *
 * Combines data fetching and UI layout for displaying record details. Inside, use
 * RecordField to display individual fields with labels.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/show/ Show documentation}
 *
 * @example
 * import { RecordField, NumberField, ReferenceField, Show } from "./index";
 *
 * export const ProductShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="reference" />
 *       <RecordField source="category_id">
 *         <ReferenceField source="category_id" reference="categories" />
 *       </RecordField>
 *       <RecordField
 *         source="price"
 *         render={(record) => Intl.NumberFormat().format(record.price)}
 *       />
 *       <RecordField source="size" field={NumberField} />
 *     </div>
 *   </Show>
 * );
 */
export declare const Show: ({ actions, children, className, disableAuthentication, disableBreadcrumb, id, loading, queryOptions, render, resource, title, }: ShowProps) => import("react").JSX.Element;
export interface ShowViewProps {
    actions?: ReactNode;
    disableBreadcrumb?: boolean;
    children: ReactNode;
    className?: string;
    emptyWhileLoading?: boolean;
    title?: ReactNode | string | false;
}
/**
 * The view component for Show pages with layout and UI.
 *
 * Renders breadcrumb, title, and default actions for show pages. Use Show instead unless you need
 * custom data fetching logic with ShowBase.
 *
 * @example
 * import { ShowBase, ShowView, SimpleShowLayout } from './index';
 *
 * export const PostShow = () => (
 *     <ShowBase>
 *         <ShowView>
 *             <SimpleShowLayout>...</SimpleShowLayout>
 *         </ShowView>
 *     </ShowBase>
 * );
 */
export declare const ShowView: ({ actions, children, className, disableBreadcrumb, emptyWhileLoading, title, }: ShowViewProps) => import("react").JSX.Element | null;
