import type { SortPayload } from "ra-core";
/**
 * Fetches and displays the item count for a resource.
 *
 * Uses dataProvider.getList() with minimal pagination to fetch the total count.
 * Displays a loading spinner while fetching and an error icon on failure.
 * By default, uses the current resource from ResourceContext.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/count/ Count documentation}
 *
 * @example
 * import { Count } from './index';
 * // Display the number of records in the current resource
 * <Count />
 *
 * @example
 * // Display the number of posts
 * <Count resource="posts" />
 *
 * @example
 * // Display the number of published posts with a link
 * <Count resource="posts" filter={{ is_published: true }} link />
 */
export declare const Count: (props: CountProps) => import("react").JSX.Element;
export interface CountProps {
    filter?: any;
    sort?: SortPayload;
    link?: boolean;
    resource?: string;
    timeout?: number;
}
