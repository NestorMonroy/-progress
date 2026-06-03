/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { WebMcpProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the handle of the Notification component.
 */
export interface NotificationHandle {
    /**
     * The props of the Notification component.
     */
    props: NotificationProps;
}
/**
 * The `close` event object of the Notification.
 */
export interface NotificationEvent {
    /**
     * A native DOM event.
     */
    nativeEvent: Event;
    /**
     * A React [`SyntheticEvent`](https://react.dev/learn/responding-to-events).
     */
    syntheticEvent: React.SyntheticEvent<HTMLElement>;
    /**
     * An event target.
     */
    target: NotificationHandle;
}
/**
 * Represents the props of the [knoReact Notification component](components/notification).
 */
export interface NotificationProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Sets additional classes to the Notification.
     *
     * @example
     * ```jsx
     * <Notification className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Sets if the Notification requires a user action to hide.
     * If the property is set to `true`, the Notification renders a **Close** button.
     * If the property is set to an object, the Notification renders a **Close** button
     * by extending the default props with the provided object.
     *
     * @default false
     *
     * @example
     * ```jsx
     * <Notification closable={true} />
     * <Notification closable={{ title: 'Dismiss' }} />
     * ```
     *
     * The possible values are:
     * * `false`
     * * `true`
     * * `{ title: 'Hide', ... }`
     */
    closable?: boolean | React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    /**
     * Sets the `dir` HTML attribute, which determines the text direction.
     *
     * @example
     * ```jsx
     * <Notification dir="rtl" />
     * ```
     */
    dir?: string;
    /**
     * The styles that are applied to the Notification.
     *
     * @example
     * ```jsx
     * <Notification style={{ backgroundColor: 'lightblue' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Sets the Notification type, which determines its style and icon.
     *
     * @example
     * ```jsx
     * <Notification type={{ style: 'success', icon: true }} />
     * ```
     *
     * The possible values are:
     * * `style: 'none'|'success'|'error'|'warning'|'info'`. The default is `'none'`.
     * * `icon?: 'true'|'false'`. The default is `true`.
     */
    type?: {
        style?: 'base' | 'secondary' | 'success' | 'error' | 'inverse' | 'primary' | 'tertiary' | 'warning' | 'info' | 'none';
        icon?: boolean;
    };
    /**
     * Fires when you click the **Close** button.
     *
     * @example
     * ```jsx
     * <Notification onClose={(event) => console.log('Notification closed', event)} />
     * ```
     */
    onClose?: (event: NotificationEvent) => void;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
/**
 * The default props of the Notification component.
 *
 * @hidden
 */
export declare const notificationDefaultProps: {
    closable: boolean;
    type: {
        style: "none";
        icon: boolean;
    };
};
/**
 * Represents the [knoReact Notification component](components/notification).
 */
export declare const Notification: {
    (props: NotificationProps): React.JSX.Element;
    displayName: string;
    /**
     * @hidden
     */
    propTypes: {
        className: PropTypes.Requireable<string>;
        closable: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        dir: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        type: PropTypes.Requireable<PropTypes.InferProps<{
            style: PropTypes.Requireable<string>;
            icon: PropTypes.Requireable<boolean>;
        }>>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
