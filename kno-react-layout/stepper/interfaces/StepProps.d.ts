/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SVGIcon } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the props of the [knoReact Step component](components/layout/stepper).
 */
export interface StepProps {
    /**
     * Represents the child elements that are passed to the Step.
     */
    children?: any;
    /**
     * Specifies a list of CSS classes that will be added to the Step element.
     */
    className?: string;
    /**
     * Represents the content that will be rendered inside each Step.
     *
     * @hidden
     */
    content?: any;
    /**
     * Specifies the Step as current.
     *
     * @default false
     */
    current?: boolean;
    /**
     * Sets a custom prop.
     */
    [customProp: string]: any;
    /**
     * Specifies if the Step is disabled
     * ([see example](components/layout/stepper/display_modes)).
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Defines the name for an existing icon in a knoReact theme.
     * The icon is rendered inside the Step indicator by a `span.k-icon` element
     * ([see example](components/layout/stepper/display_modes)).
     */
    icon?: string;
    /**
     * Defines the SVG icon.
     * The icon is rendered inside the Step indicator
     * ([see example](components/layout/stepper/display_modes)).
     */
    svgIcon?: SVGIcon;
    /**
     * Sets the index of the Step that is used to identify it.
     */
    index?: number;
    /**
     * Specifies the Step validity
     * ([see example](components/layout/stepper/display_modes)).
     *
     * @default true
     */
    isValid?: boolean;
    /**
     * Specifies the label of the Step
     * ([see example](components/layout/stepper/display_modes)).
     */
    label?: string;
    /**
     * Specifies if the Step is optional. The validation is not applied to these steps
     * ([see example](components/layout/stepper/display_modes)).
     *
     * @default false
     */
    optional?: boolean;
    /**
     * Sets additional CSS styles to the Step.
     */
    style?: React.CSSProperties;
    /**
     * Sets the `tabIndex` property of the Step.
     *
     * @default 0
     */
    tabIndex?: number;
    /**
     * Specifies the text content of the Step indicator
     * ([see example](components/layout/stepper/display_modes)).
     */
    text?: string;
}
