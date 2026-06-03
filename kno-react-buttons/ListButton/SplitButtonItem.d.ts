/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { ButtonItem } from './models/ButtonItem';
import * as React from 'react';
/**
 * The properties of the knoReact SplitButtonItem component.
 */
export interface SplitButtonItemProps extends ButtonItem {
}
export declare class SplitButtonItem extends React.Component<SplitButtonItemProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        text: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<string>;
        iconClass: PropTypes.Requireable<string>;
        imageUrl: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        render: PropTypes.Requireable<any>;
    };
    /**
     * @hidden
     */
    render(): null;
}
