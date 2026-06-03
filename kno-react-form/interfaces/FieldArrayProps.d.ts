/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FieldValidatorType } from './FieldValidator';
/**
 * Contains the props for the FieldArray component that you use inside forms.
 */
export interface FieldArrayProps {
    /**
     * Sets the field name in the form state.
     */
    name: string;
    /**
     * Can be set to a React component.
     * [`FieldArrayRenderProps`](components/form/api/fieldarrayrenderprops).
     */
    component: React.ComponentType<any>;
    /**
     * Validates the field array and returns error messages.
     * Only synchronous functions are supported.
     */
    validator?: FieldValidatorType | FieldValidatorType[];
    /**
     * Provides child elements that are passed to the rendered component.
     */
    children?: any;
    /**
     * @hidden
     */
    [customProp: string]: any;
}
