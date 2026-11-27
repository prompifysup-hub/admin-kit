/**
 * Language switcher button that displays a menu allowing users to select the interface language.
 *
 * Automatically renders in the header when multiple locales are configured in the i18nProvider.
 * User's language selection is persisted using the store.
 * Returns null if only one language is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/localesmenubutton LocalesMenuButton documentation}
 * @see {@link https://marmelab.com/ra-core/translationsetup/ i18nProvider setup}
 */
export declare function LocalesMenuButton(): import("react").JSX.Element | null;
