import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ScanFace, BookOpenText, ChevronsLeftRight, GitBranch, } from "lucide-react";
/**
 * Splash screen displayed when no resources are configured yet.
 *
 * Provides helpful links to documentation, demo, and GitHub repository.
 * Automatically shown when the admin app has no Resource children defined.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/ready/ Ready documentation}
 */
export const Ready = () => (_jsxs("div", { className: "flex flex-col h-screen", children: [_jsxs("div", { className: "flex-1 flex flex-col text-white text-center justify-center items-center", style: {
                background: "linear-gradient(135deg, #00023b 0%, #00023b 50%, #313264 100%)",
            }, children: [_jsx(ScanFace, { className: "w-32 h-32 mb-4" }), _jsx("h1", { className: "text-3xl mb-4", children: "Welcome to shadcn-admin-kit" }), _jsxs("div", { className: "text-lg opacity-75", children: ["Your application is properly configured.", _jsx("br", {}), "Now you can add a <Resource> as child of <Admin></Admin>"] })] }), _jsxs("div", { className: "flex h-[20vh] bg-zinc-100 text-black items-center justify-evenly", children: [_jsx("div", { className: "text-xl", children: _jsxs("a", { href: "https://marmelab.com/shadcn-admin-kit/docs", children: [_jsx(BookOpenText, { className: "inline mr-4 w-10 h-10" }), "Documentation"] }) }), _jsx("div", { className: "text-xl", children: _jsxs("a", { href: "http://marmelab.com/shadcn-admin-kit/demo", children: [_jsx(ChevronsLeftRight, { className: "inline mr-4 w-10 h-10" }), "Demo"] }) }), _jsx("div", { className: "text-xl", children: _jsxs("a", { href: "https://github.com/marmelab/shadcn-admin-kit", children: [_jsx(GitBranch, { className: "inline mr-4 w-10 h-10" }), "GitHub"] }) })] })] }));
