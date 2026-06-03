/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonProps } from '@progress/kno-react-buttons';
/**
 * Represents the props of the knoReact [Toggle Button](components/dateinputs/api/togglebutton) component.
 */
export interface ToggleButtonProps extends ButtonProps {
}
/**
 * Represents the default `toggleButton` component rendered by the [knoReact Scheduler DatePicker](components/dateinputs/datepicker).
 */
export declare const ToggleButton: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<import('@progress/kno-react-buttons').ButtonHandle | null>>;
