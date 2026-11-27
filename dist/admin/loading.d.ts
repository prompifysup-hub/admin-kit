/**
 * Loading indicator used for slow element or page loads.
 *
 * Displays a spinner and customizable loading messages.
 * Automatically shown by the default Layout when page loading takes more than 1 second.
 * Works as a fallback for React Suspense boundaries.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/loading/ Loading documentation}
 */
export declare const Loading: (props: LoadingProps) => import("react").JSX.Element | null;
export interface LoadingProps {
    loadingPrimary?: string;
    loadingSecondary?: string;
    delay?: number;
}
