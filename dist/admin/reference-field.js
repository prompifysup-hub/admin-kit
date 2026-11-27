import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { LinkBase, ReferenceFieldBase, useFieldValue, useGetRecordRepresentation, useReferenceFieldContext, useTranslate, } from "ra-core";
/**
 * Displays a field from a related record by following a foreign key relationship.
 *
 * This field fetches the related record using the foreign key value and displays it using the record representation.
 * It supports linking to the related record's show or edit page.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencefield/ ReferenceField documentation}
 *
 * @example
 * import { List, DataTable, ReferenceField } from './index';
 *
 * const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col label="Author">
 *         <ReferenceField source="author_id" reference="authors" link="show" />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export const ReferenceField = (props) => {
    const { loading, error, empty, render, ...rest } = props;
    const id = useFieldValue(props);
    const translate = useTranslate();
    return id == null ? (typeof empty === "string" ? (_jsx(_Fragment, { children: empty && translate(empty, { _: empty }) })) : (empty)) : (_jsx(ReferenceFieldBase, { ...rest, children: _jsx(ReferenceFieldView, { render: render, loading: loading, error: error, ...rest }) }));
};
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = (e) => e.stopPropagation();
export const ReferenceFieldView = (props) => {
    const { children, className, empty, error: errorElement, render, reference, loading, } = props;
    const referenceFieldContext = useReferenceFieldContext();
    const { error, link, isPending, referenceRecord } = referenceFieldContext;
    const getRecordRepresentation = useGetRecordRepresentation(reference);
    const translate = useTranslate();
    if (!referenceRecord && error && errorElement !== false) {
        return errorElement;
    }
    if (isPending && loading !== false) {
        return loading;
    }
    if (!referenceRecord && empty !== false) {
        return typeof empty === "string" ? (_jsx(_Fragment, { children: empty && translate(empty, { _: empty }) })) : (empty);
    }
    const child = render
        ? render(referenceFieldContext)
        : children || _jsx("span", { children: getRecordRepresentation(referenceRecord) });
    if (link) {
        return (_jsx("span", { className: className, children: _jsx(LinkBase, { to: link, onClick: stopPropagation, children: child }) }));
    }
    return _jsx(_Fragment, { children: child });
};
