/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ErrorProps, LabelProps } from '@progress/kno-react-labels';
import { FormRenderProps, FieldProps, FormElementProps, FormElementHandle } from '@progress/kno-react-form';
import { InputProps, CheckboxProps, TextAreaProps } from '@progress/kno-react-inputs';
import { ComboBoxProps, DropDownListProps, MultiSelectProps } from '@progress/kno-react-dropdowns';
import { Omit } from '../models/Omit.js';
import { ZonedDateTimeProps } from './ZonedDateTime.js';
import * as React from 'react';
/** @hidden */
type TargetlessChangeEvent<E extends {
    onChange?: any;
}, T> = Omit<E, 'onChange'> & {
    onChange?: (args: {
        value: T;
    }) => void;
};
/**
 * Represents the props of the knoReact `SchedulerFormEditor` component.
 */
export interface SchedulerFormEditorProps extends Omit<FormElementProps, 'children'>, FormRenderProps {
    /** @hidden */
    as?: React.ComponentType<SchedulerFormEditorProps>;
    /**
     * Specifies the `id` attribute of the root element.
     */
    id?: string;
    /**
     * Specifies the `tabIndex` attribute of the root element.
     */
    tabIndex?: number;
    /**
     * Overrides the component used for visualizing the `title` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    titleLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `title` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    titleError?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `title` field editor.
     * The [knoReact Input](components/inputs/input) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    titleEditor?: React.ComponentType<TargetlessChangeEvent<InputProps & FieldProps, string>>;
    /**
     * Overrides the component used for visualizing the `start` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `start` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startError?: React.ComponentType<ErrorProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `start` field editor.
     * The [knoReact DatePicker](components/dateinputs/datepicker) or [knoReact DateTimePicker](components/dateinputs/datetimepicker) component is used by default depending on the `allDay` field value.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startEditor?: React.ComponentType<TargetlessChangeEvent<ZonedDateTimeProps & FieldProps, Date>>;
    /**
     * Overrides the component used for visualizing the `start timezone` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startTimezoneLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `start timezone` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startTimezoneError?: React.ComponentType<ErrorProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `start timezone` field editor.
     * An extended [knoReact ComboBox](components/dropdowns/combobox) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startTimezoneEditor?: React.ComponentType<TargetlessChangeEvent<ComboBoxProps & FieldProps, string>>;
    /**
     * Overrides the component used for visualizing the `start timezone checked` label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startTimezoneCheckedLabel?: React.ComponentType<LabelProps>;
    /**
     * Overrides the component used for visualizing the `start timezone checked` editor.
     * The [knoReact Checkbox](components/inputs/checkbox) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    startTimezoneCheckedEditor?: React.ComponentType<TargetlessChangeEvent<CheckboxProps, boolean>>;
    /**
     * Overrides the component used for visualizing the `end` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `end` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endError?: React.ComponentType<ErrorProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `end` field editor.
     * The [knoReact DatePicker](components/dateinputs/datepicker) or [knoReact DateTimePicker](components/dateinputs/datetimepicker) component is used by default depending on the `allDay` field value.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endEditor?: React.ComponentType<TargetlessChangeEvent<ZonedDateTimeProps & FieldProps, Date>>;
    /**
     * Overrides the component used for visualizing the `end timezone` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endTimezoneLabel?: React.ComponentType<LabelProps>;
    /**
     * Overrides the component used for visualizing the `end timezone` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endTimezoneError?: React.ComponentType<ErrorProps>;
    /**
     * Overrides the component used for visualizing the `end timezone` field editor.
     * An extended [knoReact ComboBox](components/dropdowns/combobox) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endTimezoneEditor?: React.ComponentType<TargetlessChangeEvent<ComboBoxProps, string>>;
    /**
     * Overrides the component used for visualizing the `start timezone checked` label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endTimezoneCheckedLabel?: React.ComponentType<LabelProps>;
    /**
     * Overrides the component used for visualizing the `end timezone checked` editor.
     * The [knoReact Checkbox](components/inputs/checkbox) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    endTimezoneCheckedEditor?: React.ComponentType<TargetlessChangeEvent<CheckboxProps, boolean>>;
    /**
     * Overrides the component used for visualizing the `allDay` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    allDayLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `allDay` field editor.
     * The [knoReact Checkbox](components/inputs/checkbox) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    allDayEditor?: React.ComponentType<TargetlessChangeEvent<CheckboxProps & FieldProps, boolean>>;
    /**
     * Overrides the component used for visualizing the `recurrenceRule` field editor.
     * A custom made RecurrenceEditor component is used, by default.
     *
     * > We're planing on releasing the `RecurrenceEditor` as a standalone component in the future.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    recurrenceEditor?: React.ComponentType<TargetlessChangeEvent<FieldProps, string>>;
    /**
     * Overrides the component used for visualizing the `description` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    descriptionLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `description` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    descriptionError?: React.ComponentType<ErrorProps & FieldProps>;
    /**
     * Overrides the component used for visualizing the `description` field editor.
     * The [knoReact TextArea](components/inputs/textarea) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    descriptionEditor?: React.ComponentType<TargetlessChangeEvent<TextAreaProps & FieldProps, string>>;
    /**
     * Overrides the component used for visualizing the `start timezone checked` field label.
     * The [knoReact Label](components/labels/label) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    resourceLabel?: React.ComponentType<LabelProps & FieldProps>;
    /**
     * Overrides the component used for visualizing each `resources` field error.
     * The [knoReact Error](components/labels/error) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    resourcesError?: React.ComponentType<ErrorProps & FieldProps>;
    /**
     * Overrides the component used for visualizing each `resource` field editor.
     * An extended knoReact [MultiSelect](components/dropdowns/multiselect) or [DropDownList](components/dropdowns/dropdownlist) component is used by default, depending on the `multiple` field of each individual `resource`.
     *
     * For more information, please refer to the [`Scheduler Form Editor Customization`](components/scheduler/customization/form/editor) article.
     */
    resourceEditor?: React.ComponentType<TargetlessChangeEvent<(MultiSelectProps | DropDownListProps) & FieldProps, any>>;
}
/**
 * Represents the `ref` of the SchedulerFormEditor component.
 */
export interface SchedulerFormEditorHandle {
    /**
     * The HTML element of the SchedulerFormEditor component.
     */
    element: any;
    /**
     * The props of the SchedulerFormEditor component.
     */
    props: SchedulerFormEditorProps;
}
/**
 * The default `editor` used inside the [`SchedulerForm`](components/scheduler/api/schedulerform) component.
 *
 * For the full list of the props available for this component, please refer to the [SchedulerFormEditorProps](components/scheduler/api/schedulerformeditorprops).
 */
export declare const SchedulerFormEditor: React.ForwardRefExoticComponent<globalThis.Omit<SchedulerFormEditorProps, "ref"> & React.RefAttributes<SchedulerFormEditorHandle | null>>;
export declare const schedulerFormEditorDefaultProps: {
    as: React.ForwardRefExoticComponent<globalThis.Omit<FormElementProps, "ref"> & React.RefAttributes<FormElementHandle>>;
    titleLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    titleError: {
        (props: ErrorProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            direction: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<NonNullable<import('prop-types').ReactNodeLike>>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
        };
        displayName: string;
    };
    titleEditor: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<import('@progress/kno-react-inputs').InputHandle | null>>;
    startLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    startError: {
        (props: ErrorProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            direction: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<NonNullable<import('prop-types').ReactNodeLike>>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
        };
        displayName: string;
    };
    startEditor: (props: ZonedDateTimeProps) => React.JSX.Element;
    startTimezoneLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    startTimezoneError: {
        (props: ErrorProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            direction: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<NonNullable<import('prop-types').ReactNodeLike>>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
        };
        displayName: string;
    };
    startTimezoneEditor: (props: import('@progress/kno-react-form').FieldRenderProps & ComboBoxProps) => React.JSX.Element;
    startTimezoneCheckedLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    startTimezoneCheckedEditor: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<import('@progress/kno-react-inputs').CheckboxHandle | null>>;
    endLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    endError: {
        (props: ErrorProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            direction: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<NonNullable<import('prop-types').ReactNodeLike>>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
        };
        displayName: string;
    };
    endEditor: (props: ZonedDateTimeProps) => React.JSX.Element;
    endTimezoneLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    endTimezoneError: {
        (props: ErrorProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            direction: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<NonNullable<import('prop-types').ReactNodeLike>>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
        };
        displayName: string;
    };
    endTimezoneEditor: (props: import('@progress/kno-react-form').FieldRenderProps & ComboBoxProps) => React.JSX.Element;
    endTimezoneCheckedLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    endTimezoneCheckedEditor: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<import('@progress/kno-react-inputs').CheckboxHandle | null>>;
    allDayLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    allDayEditor: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<import('@progress/kno-react-inputs').CheckboxHandle | null>>;
    recurrenceEditor: React.FunctionComponent<import('../recurrence/RecurrenceEditor.js').RecurrenceEditorProps>;
    descriptionLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    descriptionEditor: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<import('@progress/kno-react-inputs').TextAreaHandle | null>>;
    descriptionError: {
        (props: ErrorProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            direction: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<NonNullable<import('prop-types').ReactNodeLike>>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
        };
        displayName: string;
    };
    resourceLabel: {
        (props: LabelProps): React.JSX.Element;
        propTypes: {
            id: import('prop-types').Requireable<string>;
            editorId: import('prop-types').Requireable<string>;
            editorRef: import('prop-types').Requireable<NonNullable<((...args: any[]) => any) | import('prop-types').InferProps<{
                current: import('prop-types').Requireable<any>;
            }> | null | undefined>>;
            editorValid: import('prop-types').Requireable<boolean>;
            editorDisabled: import('prop-types').Requireable<boolean>;
            style: import('prop-types').Requireable<object>;
            className: import('prop-types').Requireable<string>;
            optional: import('prop-types').Requireable<boolean>;
        };
        displayName: string;
    };
    resourceEditor: (props: import('./ResourceEditor.js').ResourceEditorProps) => React.JSX.Element;
};
export {};
