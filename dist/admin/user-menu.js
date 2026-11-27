import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useCallback, useState } from "react";
import { Translate, useAuthProvider, useGetIdentity, useLogout, UserMenuContext, } from "ra-core";
import { LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
/**
 * A user menu component displayed in the top right corner of the admin layout.
 *
 * Provides access to user-related actions such as profile, settings, and logout.
 * Displays the user's avatar and name from the identity provider, and includes a logout option.
 * Only displays in applications using authentication.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/usermenu UserMenu documentation}
 */
export function UserMenu({ children }) {
    const authProvider = useAuthProvider();
    const { data: identity } = useGetIdentity();
    const logout = useLogout();
    const [open, setOpen] = useState(false);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);
    if (!authProvider)
        return null;
    return (_jsx(UserMenuContext.Provider, { value: { onClose: handleClose }, children: _jsxs(DropdownMenu, { open: open, onOpenChange: setOpen, children: [_jsx(DropdownMenuTrigger, { render: _jsx(Button, { variant: "ghost", className: "relative h-8 w-8 ml-2 rounded-full" }), children: _jsxs(Avatar, { className: "h-8 w-8", children: [_jsx(AvatarImage, { src: identity?.avatar, role: "presentation" }), _jsx(AvatarFallback, { children: identity?.fullName?.charAt(0) })] }) }), _jsxs(DropdownMenuContent, { className: "w-56", align: "end", children: [_jsx(DropdownMenuGroup, { children: _jsx(DropdownMenuLabel, { className: "font-normal", children: _jsx("div", { className: "flex flex-col space-y-1", children: _jsx("p", { className: "text-sm font-medium leading-none", children: identity?.fullName }) }) }) }), _jsx(DropdownMenuSeparator, {}), children, Children.count(children) > 0 && _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => logout(), className: "cursor-pointer", children: [_jsx(LogOut, {}), _jsx(Translate, { i18nKey: "ra.auth.logout", children: "Log out" })] })] })] }) }));
}
