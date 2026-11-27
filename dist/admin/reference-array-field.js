import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { ReferenceArrayFieldBase, useListContext } from "ra-core";
import { SingleFieldList } from "./single-field-list";
/**
 * Displays multiple related records by following an array of foreign keys.
 *
 * This field fetches related records using an array of IDs and renders them using a child component (SingleFieldList by default).
 * It supports custom sorting, filtering, and rendering with DataTable or other list components.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencearrayfield/ ReferenceArrayField documentation}
 *
 * @example
 * import { List, DataTable, ReferenceArrayField } from './index';
 *
 * export const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col source="title" />
 *       <DataTable.Col source="tag_ids" label="Tags">
 *         <ReferenceArrayField reference="tags" source="tag_ids" />
 *       </DataTable.Col>
 *       <DataTable.Col>
 *         <EditButton />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export const ReferenceArrayField = (props) => {
    const { filter, page = 1, perPage, reference, resource, sort, source, queryOptions, render, ...rest } = props;
    return (_jsx(ReferenceArrayFieldBase, { filter: filter, page: page, perPage: perPage, reference: reference, resource: resource, sort: sort, source: source, queryOptions: queryOptions, render: render, children: _jsx(PureReferenceArrayFieldView, { ...rest }) }));
};
export const ReferenceArrayFieldView = (props) => {
    const { children = defaultChildren, className, empty, error: errorElement, loading, pagination, } = props;
    const { isPending, error, total, hasPreviousPage, hasNextPage, data, filterValues, } = useListContext();
    return (_jsx("div", { className: className, children: isPending && loading !== false ? (loading) : error && errorElement !== false ? (errorElement) : (total === 0 ||
            (total == null &&
                hasPreviousPage === false &&
                hasNextPage === false &&
                // @ts-expect-error FIXME total may be undefined when using partial pagination but the ListControllerResult type is wrong about it
                data.length === 0 &&
                // the user didn't set any filters
                !Object.keys(filterValues).length)) &&
            empty !== false ? (empty) : (_jsxs("span", { children: [children, pagination && total !== undefined ? pagination : null] })) }));
};
const defaultChildren = _jsx(SingleFieldList, {});
const PureReferenceArrayFieldView = memo(ReferenceArrayFieldView);
