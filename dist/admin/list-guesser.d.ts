import * as React from "react";
import type { RaRecord } from "ra-core";
import type { ListProps } from "./list";
/**
 * A list page that automatically generates a DataTable from your data.
 *
 * Inspects the first record to infer field types and automatically creates appropriate columns.
 * Useful for rapid prototyping. Logs generated code to console.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/#scaffolding-a-list-page ListGuesser documentation}
 *
 * @example
 * import { Admin, ListGuesser } from './index';
 * import { Resource } from 'ra-core';
 * import { dataProvider } from './dataProvider';
 *
 * const App = () => (
 *   <Admin dataProvider={dataProvider}>
 *     // ...
 *     <Resource name="posts" list={ListGuesser} />
 *   </Admin>
 * );
 */
export declare const ListGuesser: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: Omit<ListProps, "children"> & {
    enableLog?: boolean;
}) => React.JSX.Element;
