/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PopupAnimation, Align, PopupCloseEvent } from '@progress/kno-react-popup';
/**
 * The settings of the popup container.
 */
export interface ButtonsPopupSettings {
    /**
     * Controls the popup animation. By default, the open and close animations are enabled.
     */
    animate?: boolean | PopupAnimation;
    /**
     * Specifies a list of CSS classes that are used for styling the popup.
     */
    popupClass?: string;
    /**
     * Specifies the pivot point of the anchor
     * ([see example](components/popup/aligning-positioning)).
     */
    anchorAlign?: Align;
    /**
     * Specifies the pivot point of the Popup
     * ([see example](components/popup/aligning-positioning)).
     */
    popupAlign?: Align;
    /**
     * Fires after the Popup is closed.
     */
    onClose?: (event: PopupCloseEvent) => void;
}
