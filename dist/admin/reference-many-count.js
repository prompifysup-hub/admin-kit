import { jsx as _jsx } from "react/jsx-runtime";
import { LinkBase, useCreatePath, useRecordContext, useReferenceManyFieldController, } from "ra-core";
/**
 * Displays the count of related records that reference the current record.
 *
 * Calls dataProvider.getList() to compute the the number of records in a related resource that have a foreign key pointing to the current record.
 * It can optionally link to a filtered list of those records.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencemanycount/ ReferenceManyCount documentation}
 *
 * @example
 * import { List, DataTable, ReferenceManyCount } from './index';
 *
 * const AuthorList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="name" />
 *       <DataTable.Col label="Number of Books">
 *         <ReferenceManyCount reference="books" target="author_id" link />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export const ReferenceManyCount = (props) => {
    const { reference, target, filter, sort, link, resource, source = "id", } = props;
    const record = useRecordContext(props);
    const createPath = useCreatePath();
    const { isLoading, error, total } = useReferenceManyFieldController({
        filter,
        sort,
        page: 1,
        perPage: 1,
        record,
        reference,
        resource,
        source,
        target,
    });
    const body = isLoading ? "" : error ? "error" : total;
    return link && record ? (_jsx(LinkBase, { to: {
            pathname: createPath({ resource: reference, type: "list" }),
            search: `filter=${JSON.stringify({
                ...(filter || {}),
                [target]: record[source],
            })}`,
        }, onClick: (e) => e.stopPropagation(), children: body })) : (_jsx("span", { children: body }));
};
