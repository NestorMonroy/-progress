/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the basic props of the knoReact form components.
 *
 * For runnable examples on forms support, refer to the documentation of the respective form component:
 * * [DateInput](components/dateinputs/dateinput/forms)
 * * [DatePicker](components/dateinputs/datepicker/forms)
 * * [TimePicker](components/dateinputs/timepicker/forms)
 * * [DateTimePicker](components/dateinputs/datetimepicker/forms)
 * * [AutoComplete](components/dropdowns/autocomplete/forms)
 * * [ComboBox](components/dropdowns/combobox/forms)
 * * [DropDownList](components/dropdowns/dropdownlist/forms)
 * * [MultiSelect](components/dropdowns/multiselect/forms)
 * * [Input](components/inputs/input/forms)
 * * [MaskedTextBox](components/inputs/maskedtextbox/forms)
 * * [NumericTextBox](components/inputs/numerictextbox/forms)
 * * [Checkbox](components/inputs/checkbox/forms-support)
 * * [Switch](components/inputs/switch/forms-support)
 */
export interface FormComponentProps {
    /**
     * Controls the form error message of the component. If set to an empty string, no error will be thrown.
     *
     * This property is part of the [FormComponentProps](components/common/api/formcomponentprops) interface.
     */
    validationMessage?: string;
    /**
     * Specifies if `null` is a valid value for the component.
     *
     * This property is part of the [FormComponentProps](components/common/api/formcomponentprops) interface.
     */
    required?: boolean;
    /**
     * Specifies the `name` property of the `input` DOM element.
     *
     * This property is part of the [FormComponentProps](components/common/api/formcomponentprops) interface.
     */
    name?: string;
    /**
     * Overrides the validity state of the component.
     * If `valid` is set, the `required` property will be ignored.
     *
     * This property is part of the [FormComponentProps](components/common/api/formcomponentprops) interface.
     */
    valid?: boolean;
    /**
     * If set to `false`, no visual representation of the invalid state of the component will be applied.
     *
     * This property is part of the [FormComponentProps](components/common/api/formcomponentprops) interface.
     */
    validityStyles?: boolean;
    /**
     * @hidden
     */
    value?: any;
    /**
     * @hidden
     */
    defaultValue?: any;
}
/**
 * Represents the `validity` state of the knoReact form components.
 *
 * For runnable examples on forms support, refer to the documentation of the respective form component:
 * * [DateInput](components/dateinputs/dateinput/forms)
 * * [DatePicker](components/dateinputs/datepicker/forms)
 * * [TimePicker](components/dateinputs/timepicker/forms)
 * * [DateTimePicker](components/dateinputs/timepicker/forms)
 * * [AutoComplete](components/dropdowns/autocomplete/forms)
 * * [ComboBox](components/dropdowns/combobox/forms)
 * * [DropDownList](components/dropdowns/dropdownlist/forms)
 * * [MultiSelect](components/dropdowns/multiselect/forms)
 * * [Input](components/inputs/input/forms)
 * * [MaskedTextBox](components/inputs/maskedtextbox/forms)
 * * [NumericTextBox](components/inputs/numerictextbox/forms)
 * * [Checkbox](components/inputs/checkbox/forms-support)
 * * [Switch](components/inputs/switch/forms-support)
 */
export interface FormComponentValidity {
    /**
     * Indicates whether the user has provided input in the user interface element that the user agent is unable to convert.
     */
    readonly badInput?: boolean;
    /**
     * Indicates whether the element has a custom error.
     */
    readonly customError: boolean;
    /**
     * Indicates whether the value does not match the specified pattern.
     */
    readonly patternMismatch?: boolean;
    /**
     * Indicates whether the value is greater than the maximum specified by the max attribute.
     */
    readonly rangeOverflow?: boolean;
    /**
     * Indicates whether the value is less than the minimum specified by the min attribute.
     */
    readonly rangeUnderflow?: boolean;
    /**
     * Indicates whether the value does not fit the rules determined by the step attribute.
     */
    readonly stepMismatch?: boolean;
    /**
     * Indicates whether the value exceeds the specified maxlength.
     */
    readonly tooLong?: boolean;
    /**
     * Indicates whether the value fails to meet the specified minlength.
     */
    readonly tooShort?: boolean;
    /**
     * Indicates whether the value is not in the correct syntax when type is email or url.
     */
    readonly typeMismatch?: boolean;
    /**
     * Indicates whether the element meets all constraint validations and is therefore considered valid.
     */
    readonly valid: boolean;
    /**
     * Indicates whether the element has no value but is a required field.
     */
    readonly valueMissing: boolean;
}
/**
 * @hidden
 */
export declare abstract class FormComponent {
    abstract get value(): any;
    abstract get validity(): FormComponentValidity;
    abstract get name(): string | undefined;
}
/**
 * Represents the base properties of the render props for the knoReact form components.
 *
 * For runnable examples on forms support, refer to the documentation of the respective form component:
 * * [DateInput](components/dateinputs/dateinput/forms)
 * * [DatePicker](components/dateinputs/datepicker/forms)
 * * [TimePicker](components/dateinputs/timepicker/forms)
 * * [DateTimePicker](components/dateinputs/datetimepicker/forms)
 * * [AutoComplete](components/dropdowns/autocomplete/forms)
 * * [ComboBox](components/dropdowns/combobox/forms)
 * * [DropDownList](components/dropdowns/dropdownlist/forms)
 * * [MultiSelect](components/dropdowns/multiselect/forms)
 * * [Input](components/inputs/input/forms)
 * * [MaskedTextBox](components/inputs/maskedtextbox/forms)
 * * [NumericTextBox](components/inputs/numerictextbox/forms)
 * * [Checkbox](components/inputs/checkbox/forms-support)
 * * [Switch](components/inputs/switch/forms-support)
 */
export interface FieldRenderPropsBase {
    /**
     * A callback you have to call when the value of the rendered component is changed
     * ([see example](components/form/advanced-scenarios#toc-changing-the-field-value)).
     * The `value` property of the event takes precedence over `target.value`.
     */
    onChange: (event: {
        target?: any;
        value?: any;
    }) => void;
    /**
     * A callback you have to call when the rendered component is focused.
     * Responsible for setting the visited state of the Field.
     */
    onFocus: () => void;
    /**
     * A callback you have to call when the rendered component is blurred.
     * Responsible for setting the touched state of the Field.
     */
    onBlur: () => void;
    /**
     * Represents the current value of the Field
     * ([see example](components/form/custom-components#toc-using-basic-properties)).
     */
    value: any;
    /**
     * Represents the error message that is returned by the validator.
     * The Field is considered valid if the `validationMessage` field is empty.
     */
    validationMessage: string | null;
    /**
     * Indicates if the field is touched.
     * The touched state is set to `true` when the `onBlur` callback is called.
     */
    touched: boolean;
    /**
     * Indicates if the field is modified.
     * The modified state is set to `true` when the `onChange` callback for the current field is called for first time.
     */
    modified: boolean;
    /**
     * Indicates if the field is visited.
     * The visited state is set to `true` when the `onFocus` callback is called.
     */
    visited: boolean;
    /**
     * A calculated property based on whether `validationMessage` is present and the `touched` state is set to `true`.
     */
    valid: boolean;
    /**
     * Represents the children that are passed to the Field.
     */
    children: any;
    /**
     * The name of the field in the Form state.
     */
    name: string;
    /**
     * @hidden
     */
    [customProp: string]: any;
}
