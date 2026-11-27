import { jsx as _jsx } from "react/jsx-runtime";
import { RecordContextProvider, RecordRepresentation, useListContext, } from "ra-core";
import { Badge } from "../ui/badge";
import { cn } from "../lib/utils";
/**
 * Renders a horizontal list of records from a ListContext, displaying each as a badge.
 *
 * This component is used inside ArrayField, ReferenceArrayField, or ReferenceManyField to display
 * records in a compact inline format. By default, it renders each record with its record representation.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/singlefieldlist/ SingleFieldList documentation}
 *
 * @example
 * import {
 *     Show,
 *     RecordField,
 *     TextField,
 *     ReferenceArrayField,
 *     SingleFieldList,
 * } from './index';
 *
 * const PostShow = () => (
 *     <Show>
 *       <div className="flex flex-col gap-4">
 *         <RecordField source="title" />
 *         <RecordField label="Tags">
 *           <ReferenceArrayField reference="tags" source="tag_ids">
 *             <SingleFieldList>
 *               <TextField source="name" />
 *             </SingleFieldList>
 *           </ReferenceArrayField>
 *         </RecordField>
 *       </div>
 *     </Show>
 * );
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SingleFieldList = ({ children, render, className, }) => {
    const { data } = useListContext();
    return (_jsx("div", { className: cn("flex gap-2", className), children: data?.map((record, index) => (_jsx(RecordContextProvider, { value: record, children: render ? render(record, index) : children || _jsx(DefaultChildren, {}) }, index))) }));
};
const DefaultChildren = () => (_jsx(Badge, { variant: "outline", children: _jsx(RecordRepresentation, {}) }));
