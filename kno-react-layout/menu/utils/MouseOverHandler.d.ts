/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 */
export declare class MouseOverHandler {
    private openOnClick;
    private resetMenu;
    private isMouseOverEnabled;
    constructor(openOnClick: boolean | undefined, resetMenu: any);
    set OpenOnClick(value: boolean | undefined);
    handleItemSelectedViaKeyboard(): void;
    get IsMouseOverEnabled(): boolean;
}
