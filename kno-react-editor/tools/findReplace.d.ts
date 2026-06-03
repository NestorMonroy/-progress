/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonProps } from '@progress/kno-react-buttons';
import { BasicToolProps } from './ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface FindAndReplaceProps extends BasicToolProps, ButtonProps {
}
interface FindAndReplaceState {
    showDialog: boolean;
}
/**
 * @hidden
 */
export declare class FindAndReplace extends React.Component<FindAndReplaceProps, FindAndReplaceState> {
    /**
     * @hidden
     */
    state: {
        showDialog: boolean;
    };
    /**
     * @hidden
     */
    render(): (false | React.JSX.Element | undefined)[];
    private onClose;
    private onOpen;
}
export {};
