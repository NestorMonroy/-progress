/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import * as React from 'react';
/**
 * Represents the props of the [knoReact NotificationGroup component](components/notification/api/notificationgroup).
 */
export interface NotificationGroupProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Sets additional classes to the NotificationGroup.
     *
     * @example
     * ```jsx
     * <NotificationGroup className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * The styles that are applied to the NotificationGroup.
     *
     * @example
     * ```jsx
     * <NotificationGroup style={{ backgroundColor: 'lightgray' }} />
     * ```
     */
    style?: React.CSSProperties;
}
/**
 * The default props of the NotificationGroup component.
 *
 * @hidden
 */
export declare const notificationGroupDefaultProps: {
    style: {};
};
/**
 * Represents the [knoReact NotificationGroup component](components/notification/api/notificationgroup).
 */
export declare const NotificationGroup: {
    (props: NotificationGroupProps): React.JSX.Element;
    displayName: string;
    propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
};
