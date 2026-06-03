/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Align, PopupAnimation } from '@progress/kno-react-popup';
/**
 * Represents the settings that can be passed to the Popup inside the FloatingActionButtonPopupSettings.
 */
export interface FloatingActionButtonPopupSettings {
    /**
     * Controls the popup animation. By default, the open and close animations are enabled
     * [see example](components/buttons/floatingactionbutton/items/customization#toc-popup-behavior).
     */
    animate?: boolean | PopupAnimation;
    /**
     * Specifies a list of CSS classes that are used for styling the popup
     * [see example](components/buttons/floatingactionbutton/items/customization#toc-popup-behavior).
     */
    popupClass?: string;
    /**
     * @hidden
     */
    anchorAlign?: Align;
    /**
     * @hidden
     */
    popupAlign?: Align;
}
