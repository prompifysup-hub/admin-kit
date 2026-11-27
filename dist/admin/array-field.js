import { jsx as _jsx } from "react/jsx-runtime";
import { ListContextProvider, useList, useFieldValue } from "ra-core";
/**
 * Reads an array field value, puts it in a ListContext and renders its children.
 *
 * This field enables the use of list rendering components like SingleFieldList or
 * DataTable to display array data.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/arrayfield/ ArrayField documentation}
 *
 * @example
 * import {
 *   Show,
 *   ArrayField,
 *   RecordField,
 *   SingleFieldList,
 *   BadgeField,
 * } from './index';
 *
 * const PostShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *      <RecordField source="title" />
 *      <RecordField source="content" />
 *      <RecordField source="tags">
 *         <ArrayField source="tags">
 *           <SingleFieldList>
 *             <BadgeField source="name" />
 *           </SingleFieldList>
 *         </ArrayField>
 *      </RecordField>
 *     </div>
 *   </Show>
 * );
 */
export const ArrayField = (props) => {
    const { children, resource, perPage, sort, filter } = props;
    const data = useFieldValue(props) || emptyArray;
    const listContext = useList({ data, resource, perPage, sort, filter });
    return (_jsx(ListContextProvider, { value: listContext, children: children }));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const emptyArray = [];
