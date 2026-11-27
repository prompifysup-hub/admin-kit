import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleX } from "lucide-react";
import { Translate, useNavigate } from "ra-core";
import { Button } from "../ui/button";
/**
 * A button that navigates back to the previous page.
 *
 * Commonly used in form toolbars alongside SaveButton.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/cancelbutton/ CancelButton documentation}
 *
 * @example
 * import { CancelButton, SaveButton, SimpleForm } from './index';
 *
 * const FormToolbar = () => (
 *   <div className="flex flex-row gap-2 justify-end">
 *     <CancelButton />
 *     <SaveButton />
 *   </div>
 * );
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm toolbar={<FormToolbar />}>
 *       ...
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export function CancelButton(props) {
    const navigate = useNavigate();
    return (_jsxs(Button, { type: "button", variant: "ghost", onClick: () => navigate(-1), className: "cursor-pointer", ...props, children: [_jsx(CircleX, {}), _jsx(Translate, { i18nKey: "ra.action.cancel", children: "Cancel" })] }));
}
