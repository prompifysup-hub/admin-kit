import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { FieldTitle, useResourceContext } from "ra-core";
import { GripVertical } from "lucide-react";
import { Switch } from "../ui/switch";
import { cn } from "../lib/utils";
/**
 * A toggleable field item with drag-and-drop reordering, used by ColumnsSelector
 *
 * @internal
 */
export const FieldToggle = (props) => {
    const { selected, label, onToggle, onMove, source, index } = props;
    const resource = useResourceContext();
    const dropIndex = React.useRef(null);
    const x = React.useRef(null);
    const y = React.useRef(null);
    const handleDocumentDragOver = React.useCallback((event) => {
        x.current = event.clientX;
        y.current = event.clientY;
    }, []);
    const handleDragStart = () => {
        document.addEventListener("dragover", handleDocumentDragOver);
    };
    const handleDrag = (event) => {
        // imperative DOM manipulations using the native Drag API
        const selectedItem = event.target;
        selectedItem.dataset.dragActive = "true";
        const list = selectedItem.closest("ul");
        if (x.current == null || y.current == null) {
            return;
        }
        const elementAtDragCoordinates = document.elementFromPoint(x.current, y.current);
        let dropItem = elementAtDragCoordinates === null
            ? selectedItem
            : elementAtDragCoordinates.closest("li");
        if (!dropItem) {
            return;
        }
        if (dropItem.classList.contains("dragIcon")) {
            const parent = dropItem.parentNode;
            if (parent instanceof HTMLElement) {
                dropItem = parent;
            }
        }
        if (dropItem === selectedItem) {
            return;
        }
        const dropItemParent = dropItem.parentNode;
        if (list &&
            dropItemParent instanceof HTMLElement &&
            list === dropItemParent.closest("ul")) {
            const dataIndex = dropItem.dataset.index;
            if (dataIndex) {
                dropIndex.current = parseInt(dataIndex, 10);
            }
            if (dropItem === selectedItem.nextSibling) {
                dropItem = dropItem.nextSibling;
            }
            list.insertBefore(selectedItem, dropItem);
        }
    };
    const handleDragEnd = (event) => {
        const selectedItem = event.target;
        const list = selectedItem.closest("ul");
        const elementFromPoint = x.current != null && y.current != null
            ? document.elementFromPoint(x.current, y.current)
            : null;
        let dropItem = x.current == null || y.current == null || elementFromPoint === null
            ? selectedItem
            : elementFromPoint.closest("li");
        if (y.current !== null && list && !dropItem) {
            const closestUL = selectedItem.closest("ul");
            if (closestUL && y.current > closestUL.getBoundingClientRect().bottom) {
                dropItem = list.lastChild;
            }
            else {
                dropItem = list.firstChild;
            }
        }
        if (dropItem && list && dropItem.closest("ul") === list) {
            if (onMove)
                onMove(selectedItem.dataset.index, dropIndex.current);
        }
        else {
            event.preventDefault();
            event.stopPropagation();
        }
        selectedItem.dataset.dragActive = "false";
        document.removeEventListener("dragover", handleDocumentDragOver);
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };
    return (_jsxs("li", { role: "option", draggable: onMove ? "true" : undefined, onDrag: onMove ? handleDrag : undefined, onDragStart: onMove ? handleDragStart : undefined, onDragEnd: onMove ? handleDragEnd : undefined, onDragOver: onMove ? handleDragOver : undefined, "data-index": index, className: cn("flex justify-between items-center py-1", "data-[drag-active=true]:bg-transparent data-[drag-active=true]:text-transparent data-[drag-active=true]:outline data-[drag-active=true]:outline-1 data-[drag-active=true]:outline-border"), children: [_jsxs("label", { htmlFor: `switch_${index}`, className: "flex items-center gap-2 cursor-pointer", children: [_jsx(Switch, { id: `switch_${index}`, checked: selected, onCheckedChange: onToggle, name: `${index}` }), _jsx("span", { className: "text-sm", children: _jsx(FieldTitle, { label: label, source: source, resource: resource }) })] }), onMove && (_jsx(GripVertical, { className: "cursor-move dragIcon w-4 h-4 text-muted-foreground" }))] }, source));
};
