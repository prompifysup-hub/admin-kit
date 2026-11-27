import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, } from "../ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../ui/select";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useListPaginationContext, Translate, useTranslate } from "ra-core";
/**
 * A pagination component with page numbers and rows per page selector.
 *
 * Displays pagination controls with previous/next buttons, page numbers with ellipsis for long lists,
 * and a dropdown to change items per page. Works with List context.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/listpagination/ ListPagination documentation}
 *
 * @example
 * import { List, ListPagination } from './index';
 *
 * const PostListPagination = () => (
 *   <ListPagination rowsPerPageOptions={[5, 10, 25]} />
 * );
 *
 * export const PostList = () => (
 *   <List pagination={<PostListPagination />}>
 *     // ...
 *   </List>
 * );
 */
export const ListPagination = ({ rowsPerPageOptions = [5, 10, 25, 50], className, }) => {
    const translate = useTranslate();
    const { hasPreviousPage, hasNextPage, page, perPage, setPerPage, total, setPage, } = useListPaginationContext();
    const pageStart = (page - 1) * perPage + 1;
    const pageEnd = hasNextPage ? page * perPage : total;
    const boundaryCount = 1;
    const siblingCount = 1;
    const count = total ? Math.ceil(total / perPage) : 1;
    const range = (start, end) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };
    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    const siblingsStart = Math.max(Math.min(
    // Natural start
    page - siblingCount, 
    // Lower boundary when page is high
    count - boundaryCount - siblingCount * 2 - 1), 
    // Greater than startPages
    boundaryCount + 2);
    const siblingsEnd = Math.min(Math.max(
    // Natural end
    page + siblingCount, 
    // Upper boundary when page is low
    boundaryCount + siblingCount * 2 + 2), 
    // Less than endPages
    count - boundaryCount - 1);
    const siblingPages = range(siblingsStart, siblingsEnd);
    const pageChangeHandler = (newPage) => {
        return (event) => {
            event.preventDefault();
            setPage(newPage);
        };
    };
    return (_jsxs("div", { className: `flex items-center justify-end space-x-2 gap-4 ${className}`, children: [_jsxs("div", { className: "hidden md:flex items-center space-x-2", children: [_jsx("p", { className: "text-sm font-medium", children: _jsx(Translate, { i18nKey: "ra.navigation.page_rows_per_page", children: "Rows per page" }) }), _jsxs(Select, { value: perPage.toString(), onValueChange: (value) => {
                            setPerPage(Number(value));
                        }, children: [_jsx(SelectTrigger, { className: "h-8 w-fit", children: _jsx(SelectValue, { placeholder: perPage }) }), _jsx(SelectContent, { side: "top", children: rowsPerPageOptions.map((pageSize) => (_jsx(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize))) })] })] }), _jsx("div", { className: "text-sm text-muted-foreground", children: _jsx(Translate, { i18nKey: "ra.navigation.page_range_info", options: {
                        offsetBegin: pageStart,
                        offsetEnd: pageEnd,
                        total: total === -1 ? pageEnd : total,
                    }, children: total != null
                        ? `${pageStart}-${pageEnd} of ${total === -1 ? pageEnd : total}`
                        : null }) }), _jsx(Pagination, { className: "-w-full -mx-auto", children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: hasPreviousPage ? (_jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(page - 1), "aria-label": translate("ra.navigation.previous", {
                                    _: "Previous",
                                }), children: _jsx(ChevronLeftIcon, {}) })) : (_jsx("span", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium size-9", children: _jsx(ChevronLeftIcon, { "aria-label": translate("ra.navigation.previous", {
                                        _: "Previous",
                                    }), size: "16", className: "text-muted-foreground" }) })) }), startPages.map((pageNumber) => (_jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(pageNumber), isActive: pageNumber === page, children: pageNumber }) }, pageNumber))), siblingsStart > boundaryCount + 2 ? (_jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) })) : boundaryCount + 1 < count - boundaryCount ? (_jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(boundaryCount + 1), isActive: boundaryCount + 1 === page, children: boundaryCount + 1 }) })) : null, siblingPages.map((pageNumber) => (_jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(pageNumber), isActive: pageNumber === page, children: pageNumber }) }, pageNumber))), siblingsEnd < count - boundaryCount - 1 ? (_jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) })) : count - boundaryCount > boundaryCount ? (_jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(count - boundaryCount), isActive: count - boundaryCount === page, children: count - boundaryCount }) })) : null, endPages.map((pageNumber) => (_jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(pageNumber), isActive: pageNumber === page, children: pageNumber }) }, pageNumber))), _jsx(PaginationItem, { children: hasNextPage ? (_jsx(PaginationLink, { href: "#", onClick: pageChangeHandler(page + 1), size: "default", className: cn("gap-1 px-2.5 sm:pr-2.5", !hasNextPage ? "opacity-50 cursor-not-allowed" : ""), "aria-label": translate("ra.navigation.next", { _: "Next" }), children: _jsx(ChevronRightIcon, {}) })) : (_jsx("span", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium size-9", children: _jsx(ChevronRightIcon, { "aria-label": translate("ra.navigation.next", { _: "Next" }), size: "16", className: "text-muted-foreground" }) })) })] }) })] }));
};
