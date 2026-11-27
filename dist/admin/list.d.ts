import type { ListBaseProps, ListControllerResult, RaRecord } from "ra-core";
import type { ReactElement, ReactNode } from "react";
/**
 * A complete list page with breadcrumb, title, filters, and pagination.
 *
 * It fetches a list of records from the data provider (via ra-core hooks),
 * puts them in a ListContext, renders a default layout (breadcrumb, title,
 * action buttons, inline filters, pagination), then renders its children
 * (usually a <DataTable>).
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/ List documentation}
 *
 * @example
 * import { DataTable, List } from "./index";
 *
 * export const UserList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col source="name" />
 *       <DataTable.Col source="username" />
 *       <DataTable.Col source="email" />
 *       <DataTable.Col source="address.street" />
 *       <DataTable.Col source="phone" />
 *       <DataTable.Col source="website" />
 *       <DataTable.Col source="company.name" />
 *     </DataTable>
 *   </List>
 * );
 */
export declare const List: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ListProps<RecordType>) => import("react").JSX.Element;
export interface ListProps<RecordType extends RaRecord = RaRecord> extends ListBaseProps<RecordType>, ListViewProps<RecordType> {
}
/**
 * The view component for List pages with layout and UI.
 *
 * @internal
 */
export declare const ListView: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ListViewProps<RecordType>) => import("react").JSX.Element;
export declare const Empty: () => import("react").JSX.Element | null;
export interface ListViewProps<RecordType extends RaRecord = RaRecord> {
    children?: ReactNode;
    disableBreadcrumb?: boolean;
    render?: (props: ListControllerResult<RecordType, Error>) => ReactNode;
    actions?: ReactElement | false;
    filters?: ReactNode[];
    pagination?: ReactNode;
    title?: ReactNode | string | false;
    className?: string;
}
