import { HeaderProps } from './Header.types';
/**
 * Section used to provide basic information about the page
 * and display main actions
 *
 * Supports extensive customization through slots and slotProps.
 * Each internal element (breadcrumbs, title, actions, tabs) can be
 * customized or replaced.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Header
 *   title="Dashboard"
 *   subtitle="Welcome back"
 *   breadcrumbs={[{id: '1', text: 'Home', link: '/'}]}
 *   actions={[{id: 'add', text: 'Add', onClick: handleAdd}]}
 * />
 *
 * // Custom breadcrumb separator
 * <Header
 *   title="Settings"
 *   breadcrumbs={breadcrumbs}
 *   slotProps={{
 *     breadcrumbs: { separator: '/' }
 *   }}
 * />
 *
 * // Custom action button styling
 * <Header
 *   title="Users"
 *   actions={actions}
 *   slotProps={{
 *     actionButton: { size: 'large', variant: 'contained' }
 *   }}
 * />
 * ```
 */
export declare function Header({ title, loadingTitle, subtitle, loadingSubtitle, preset, actionsVariant, breadcrumbs, actions, tabs, tabsMode, navigationButton, border, slots, slotProps, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export default Header;
