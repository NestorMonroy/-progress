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
 * Represents the knoReact Ripple component.
 *
 * The ripple effect will show on the following elements:
 * - Buttons
 * - Checkboxes
 * - Radio buttons
 *
 * @example
 * ```jsx-no-run
 * <Ripple disabled="true">
 *      <Button> Default Button</Button>
 * </Ripple>
 * ```
 */
export interface RippleProps {
    /**
     * Provides an option to disable the ripple effect on the children of the component. Defaults to `false`.
     *
     * @default false
     *
     * @example
     * ```jsx
     * <Ripple disabled={true}>
     *     <Button>Default Button</Button>
     * </Ripple>
     * ```
     */
    disabled?: boolean;
    /**
     * @hidden
     * Specifies additional CSS classes to apply to the ripple container.
     */
    className?: string;
    /**
     * @hidden
     * Specifies the child elements of the Ripple component.
     */
    children?: any;
}
export declare class Ripple extends React.PureComponent<RippleProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
    };
    private _element;
    private removeListeners;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    constructor(props: RippleProps);
    /**
     * @hidden
     */
    componentDidMount(): void;
    /**
     * @hidden
     */
    componentDidUpdate(): void;
    /**
     * @hidden
     */
    componentWillUnmount(): void;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    private registerListeners;
}
