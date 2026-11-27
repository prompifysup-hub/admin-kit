import type { CoreAdminProps } from "ra-core";
/**
 * Root component of a shadcn-admin-kit application.
 *
 * Creates context providers to allow its children to access the app configuration.
 * Renders the main routes and layout, and delegates content area rendering to Resource children.
 * Combines AdminContext and AdminUI to provide a complete admin interface.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/admin/ Admin documentation}
 *
 * @example
 * // Basic usage with dataProvider and Resources
 * import { Admin } from "./index";
 * import { Resource } from 'ra-core';
 * import simpleRestProvider from 'ra-data-simple-rest';
 *
 * const App = () => (
 *   <Admin dataProvider={simpleRestProvider('http://path.to.my.api')}>
 *     <Resource name="posts" list={PostList} />
 *   </Admin>
 * );
 *
 * @example
 * // With authentication and i18n
 * <Admin
 *   dataProvider={dataProvider}
 *   authProvider={authProvider}
 *   i18nProvider={i18nProvider}
 * >
 *   <Resource name="posts" list={PostList} edit={PostEdit} />
 * </Admin>
 */
export declare const Admin: (props: CoreAdminProps) => import("react").JSX.Element;
