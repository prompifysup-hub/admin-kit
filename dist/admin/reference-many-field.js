import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ReferenceManyFieldBase, useListContext } from "ra-core";
/**
 * Displays multiple related records that reference the current record via a foreign key.
 *
 * This field fetches records from a related resource where the foreign key points to the current record.
 * It provides a ListContext to its children, enabling list rendering with DataTable or custom components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencemanyfield/ ReferenceManyField documentation}
 *
 * @example
 * import { Show, ReferenceManyField, DataTable, DateField, RecordField } from './index';
 *
 * const AuthorShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="first_name" />
 *       <RecordField source="last_name" />
 *       <RecordField label="Books">
 *         <ReferenceManyField reference="books" target="author_id" label="Books">
 *           <DataTable>
 *             <DataTable.Col source="title" />
 *             <DataTable.Col source="published_at" field={DateField} />
 *           </DataTable>
 *         </ReferenceManyField>
 *       </RecordField>
 *     </div>
 *   </Show>
 * );
 */
export const ReferenceManyField = (props) => {
    const { children, empty, error, loading, pagination, render, ...rest } = props;
    return (_jsx(ReferenceManyFieldBase, { ...rest, children: _jsx(ReferenceManyFieldView, { empty: empty, error: error, loading: loading, pagination: pagination, render: render, children: children }) }));
};
const ReferenceManyFieldView = (props) => {
    const { children, empty, error: errorElement, loading, pagination, render, } = props;
    const listContext = useListContext();
    const { isPending, error, total, hasPreviousPage, hasNextPage, data, filterValues, } = listContext;
    if (isPending && loading !== false) {
        return loading;
    }
    if (error && errorElement !== false) {
        return errorElement;
    }
    if ((total === 0 ||
        (total == null &&
            hasPreviousPage === false &&
            hasNextPage === false &&
            // @ts-expect-error FIXME total may be undefined when using partial pagination but the ListControllerResult type is wrong about it
            data.length === 0 &&
            // the user didn't set any filters
            !Object.keys(filterValues).length)) &&
        empty !== false) {
        return empty;
    }
    return (_jsxs(_Fragment, { children: [render && render(listContext), children, pagination] }));
};
