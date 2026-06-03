/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PopupCloseEvent } from '@progress/kno-react-popup';
/**
 * @hidden
 */
export interface BaseMenuItemInternalProps {
    focusedItemId: string;
    lastItemIdToBeOpened: string;
    tabbableItemId: string;
    itemRender?: any;
    linkRender?: any;
    isMenuVertical: boolean;
    isDirectionRightToLeft?: boolean;
    menuGuid: string;
    onMouseOver: any;
    onMouseLeave: any;
    onFocus: any;
    onClick: any;
    onBlur: any;
    onOriginalItemNeeded: any;
    onPopupClose: (itemId: string, popupCloseEvent: PopupCloseEvent) => void;
}
