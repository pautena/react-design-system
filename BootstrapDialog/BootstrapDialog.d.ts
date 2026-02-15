import { BootstrapDialogDialogProps } from '../Dialog/Dialog.types';
/**
 * A customizable dialog component. Use it as a base to create more dialogs
 *
 * Supports extensive customization through slots and slotProps.
 * Each internal element can be customized or replaced.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <BootstrapDialog
 *   open={true}
 *   title="Confirm Action"
 *   onClose={handleClose}
 *   acceptable
 *   cancelable
 * >
 *   Are you sure?
 * </BootstrapDialog>
 *
 * // Custom close button
 * <BootstrapDialog
 *   title="Settings"
 *   slotProps={{
 *     closeButton: { color: 'error' }
 *   }}
 * />
 * ```
 */
export declare function BootstrapDialog({ open, title, component, componentProps, disabled, disableAccept, disableCancel, actions, children, loading, cancelable, callCloseWhenCancel, acceptable, acceptText, cancelText, onAccept, onCancel, onClose, acceptType, slots, slotProps, }: BootstrapDialogDialogProps): import("react/jsx-runtime").JSX.Element;
export default BootstrapDialog;
