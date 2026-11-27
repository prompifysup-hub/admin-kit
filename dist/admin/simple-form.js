import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import { Form } from "ra-core";
import { cn } from "../lib/utils";
import { CancelButton } from "./cancel-button";
import { SaveButton } from "./form";
/**
 * A simple form layout with vertical stacking, validation, and default toolbar.
 *
 * Automatically includes a toolbar with Cancel and Save buttons unless you provide a custom toolbar.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/simpleform/ SimpleForm documentation}
 *
 * @example
 * import { Create, SimpleForm, TextInput } from './index';
 *
 * const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <TextInput source="body" />
 *     </SimpleForm>
 *   </Create>
 * );
 */
export const SimpleForm = ({ children, className, toolbar = defaultFormToolbar, ...rest }) => (_jsxs(Form, { className: cn(`flex flex-col gap-4 w-full max-w-lg`, className), ...rest, children: [children, toolbar] }));
/**
 * A sticky form toolbar with default Cancel and Save buttons.
 *
 * Provides a consistent action bar for forms that sticks to the bottom of the viewport. By default,
 * renders Cancel and Save buttons, but you can provide custom buttons as children.
 *
 * @example
 * import { FormToolbar, CancelButton, SaveButton } from './index';
 *
 * const CustomToolbar = () => (
 *     <FormToolbar>
 *         <CancelButton />
 *         <SaveButton label="Publish" />
 *     </FormToolbar>
 * );
 */
export const FormToolbar = ({ children, className, ...rest }) => (_jsx("div", { ...rest, className: cn("sticky pt-4 pb-4 md:block md:pt-2 md:pb-0 bottom-0 bg-linear-to-b from-transparent to-background to-10%", className), role: "toolbar", children: Children.count(children) === 0 ? (_jsxs("div", { className: "flex flex-row gap-2 justify-end", children: [_jsx(CancelButton, {}), _jsx(SaveButton, {})] })) : (children) }));
const defaultFormToolbar = _jsx(FormToolbar, {});
