/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LocalizationService } from '@progress/kno-react-intl';
/**
 * @hidden
 */
export type L10NMessages = {
    messageKey: string;
    defaultMessage: string;
};
/**
 * @hidden
 */
export type L10NMessageMap = (messageKey: string) => {
    messageKey: string;
    defaultMessage: string;
};
/**
 * @hidden
 */
export declare const getL10NMessage: (key: string, messagesMap?: L10NMessageMap) => L10NMessages;
/**
 * @hidden
 */
export declare const translateMessage: (localization: LocalizationService, messageMap: L10NMessages) => string;
/**
 * @hidden
 */
export declare const getFirstButtonProps: (isRtl: boolean, currentPage: number, disabled: boolean) => {
    rtlClass: string;
    rtlIcon: import('@progress/kno-svg-icons').SVGIcon;
    isDisabledClass: string;
    isDisabled: boolean | undefined;
};
/**
 * @hidden
 */
export declare const getPrevButtonProps: (isRtl: boolean, currentPage: number, disabled: boolean) => {
    rtlClass: string;
    rtlIcon: import('@progress/kno-svg-icons').SVGIcon;
    isDisabledClass: string;
    isDisabled: boolean | undefined;
};
/**
 * @hidden
 */
export declare const getNextButtonProps: (isRtl: boolean, currentPage: number, totalPages: number, disabled: boolean) => {
    rtlClass: string;
    rtlIcon: import('@progress/kno-svg-icons').SVGIcon;
    isDisabledClass: string;
    isDisabled: boolean | undefined;
};
/**
 * @hidden
 */
export declare const getLastButtonProps: (isRtl: boolean, currentPage: number, totalPages: number, disabled: boolean) => {
    rtlClass: string;
    rtlIcon: import('@progress/kno-svg-icons').SVGIcon;
    isDisabledClass: string;
    isDisabled: boolean | undefined;
};
