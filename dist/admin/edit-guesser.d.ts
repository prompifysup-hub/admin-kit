/**
 * An edit page that automatically generates a form from your data.
 *
 * Inspects the record to infer field types and automatically creates appropriate inputs.
 * Useful for rapid prototyping. Logs generated code to console.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/edit/#scaffolding-an-edit-page EditGuesser documentation}
 *
 * @example
 * import { Admin, EditGuesser } from './index';
 * import { Resource } from 'ra-core';
 * import dataProvider from './dataProvider';
 *
 * const App = () => (
 *   <Admin dataProvider={dataProvider}>
 *     ...
 *     <Resource name="customers" edit={EditGuesser} />
 *   </Admin>
 * );
 */
export declare const EditGuesser: (props: EditGuesserProps) => import("react").JSX.Element;
interface EditGuesserProps {
    enableLog?: boolean;
}
export {};
