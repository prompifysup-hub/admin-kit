import type { ExtractRecordPaths, LinkToType, RaRecord, UseReferenceFieldControllerResult } from "ra-core";
import type { ReactNode } from "react";
import type { UseQueryOptions } from "@tanstack/react-query";
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
export declare const ReferenceField: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>, ReferenceRecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ReferenceFieldProps<RecordType, ReferenceRecordType>) => number | bigint | boolean | import("react").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export interface ReferenceFieldProps<RecordType extends RaRecord = RaRecord, ReferenceRecordType extends RaRecord = RaRecord> extends Partial<ReferenceFieldViewProps<ReferenceRecordType>> {
    children?: ReactNode;
    queryOptions?: UseQueryOptions<RaRecord[], Error> & {
        meta?: any;
    };
    record?: RecordType;
    reference: string;
    translateChoice?: ((record: ReferenceRecordType) => string) | boolean;
    link?: LinkToType;
    source: ExtractRecordPaths<RecordType>;
}
export declare const ReferenceFieldView: <ReferenceRecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: ReferenceFieldViewProps<ReferenceRecordType>) => string | number | bigint | true | import("react").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export interface ReferenceFieldViewProps<ReferenceRecordType extends RaRecord = RaRecord> {
    children?: ReactNode;
    className?: string;
    empty?: ReactNode;
    loading?: ReactNode;
    render?: (props: UseReferenceFieldControllerResult) => ReactNode;
    reference: string;
    source: string;
    resource?: string;
    translateChoice?: ((record: ReferenceRecordType) => string) | boolean;
    resourceLinkPath?: LinkToType;
    error?: ReactNode;
}
