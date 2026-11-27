import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { buttonVariants } from "../ui/button";
import { Plus } from "lucide-react";
import { LinkBase, useCreatePath, useGetResourceLabel, useResourceContext, useResourceTranslation, } from "ra-core";
import { cn } from "../lib/utils";
/**
 * A button that navigates to the create page for a resource.
 *
 * Automatically uses the current resource unless overridden.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/createbutton/ CreateButton documentation}
 *
 * @example
 * import { CreateButton, List, ExportButton } from './index';
 *
 * const PostList = () => (
 *   <List
 *     actions={<>
 *       <CreateButton />
 *       <ExportButton />
 *     </>}
 *   >
 *     ...
 *   </List>
 * );
 */
export const CreateButton = (props) => {
    const { label: labelProp } = props;
    const resource = useResourceContext(props);
    const createPath = useCreatePath();
    const getResourceLabel = useGetResourceLabel();
    const link = createPath({
        resource,
        type: "create",
    });
    const label = useResourceTranslation({
        resourceI18nKey: resource
            ? `resources.${resource}.action.create`
            : undefined,
        baseI18nKey: "ra.action.create",
        options: {
            name: resource ? getResourceLabel(resource, 1) : undefined,
        },
        userText: labelProp,
    });
    return (_jsxs(LinkBase, { className: cn(buttonVariants({ variant: "outline" })), to: link, onClick: stopPropagation, "aria-label": typeof label === "string" ? label : undefined, children: [_jsx(Plus, {}), label] }));
};
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = (e) => e.stopPropagation();
