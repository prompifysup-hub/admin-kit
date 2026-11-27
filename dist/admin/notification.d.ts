import * as React from "react";
import type { ToasterProps } from "sonner";
/**
 * Displays notifications triggered with the useNotify hook.
 *
 * Supports different notification types (info, success, warning, error) and undoable mutations.
 * Automatically adapts to the current theme (light/dark).
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/notification Notification documentation}
 * @see {@link https://marmelab.com/ra-core/usenotify/ useNotify hook}
 *
 * @example
 * // Trigger a notification
 * import { useNotify } from 'ra-core';
 *
 * const NotifyButton = () => {
 *   const notify = useNotify();
 *   const handleClick = () => {
 *     notify('Comment approved', { type: 'success' });
 *   };
 *   return <button onClick={handleClick}>Notify</button>;
 * };
 */
export declare const Notification: (props: ToasterProps) => React.JSX.Element;
