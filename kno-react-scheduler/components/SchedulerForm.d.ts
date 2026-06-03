/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FormProps, FormRenderProps } from '@progress/kno-react-form';
import { DialogProps } from '@progress/kno-react-dialogs';
import { DataItem } from '../models/index.js';
import { SchedulerFormEditorProps } from '../editors/SchedulerFormEditor.js';
import { Omit } from '../models/Omit.js';
import * as React from 'react';
export interface SchedulerFormStateChangeEvent<T> {
    /**
     * The SchedulerForm instance that triggered the event.
     */
    target: SchedulerFormHandle;
    /**
     * The value associated with the event.
     */
    value: T;
    /**
     * The React synthetic event object.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the props of the knoReact [SchedulerForm](components/scheduler/api/schedulerform) component.
 */
export interface SchedulerFormProps extends Omit<FormProps, 'render' | 'onSubmit'> {
    /**
     * Specifies the `dataItem` to be visualized inside the form.
     */
    dataItem: DataItem;
    /**
     * The Form content that will be rendered. The default rendering includes a `dialog` and `editor`.
     *
     * For more information about customizing some parts of the default rendering please refer to the [SchedulerForm Customization](components/scheduler/customization/form/overview) article.
     */
    render?: (props: FormRenderProps) => any;
    /**
     * Fires when you click the `cancel` button.
     */
    onCancel?: (event: SchedulerFormStateChangeEvent<null>) => void;
    /**
     * Fires when you click the `close` button.
     */
    onClose?: (event: SchedulerFormStateChangeEvent<null>) => void;
    /**
     * Fires when you click the `submit` button.
     */
    onSubmit: (event: SchedulerFormStateChangeEvent<any>) => void;
    /**
     * Overrides the component used for visualizing the `editor`.
     * The [SchedulerFormEditor](components/scheduler/api/schedulerformeditor) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Customization`](components/scheduler/customization/form/overview) article.
     */
    editor?: React.ComponentType<SchedulerFormEditorProps>;
    /**
     * Overrides the component used for visualizing the `dialog`.
     * The [knoReact Dialog](components/dialogs/api/dialog) component is used, by default.
     *
     * For more information, please refer to the [`Scheduler Form Customization`](components/scheduler/customization/form/overview) article.
     */
    dialog?: React.ComponentType<DialogProps>;
}
/**
 * Represent the `ref` of the SchedulerForm component.
 */
export interface SchedulerFormHandle {
    /**
     * Represents the properties passed to the current instance of the `SchedulerForm`.
     */
    props: SchedulerFormProps;
}
/**
 * Represents the default `form` component rendered by the [SchedulerEditItem](components/scheduler/api/scheduleredititem) and [SchedulerEditSlot](components/scheduler/api/schedulereditslot) components.
 *
 * Accepts [SchedulerFormProps](components/scheduler/api/schedulerformprops) properties and provide [SchedulerFormHandle](components/scheduler/api/schedulerformhandle) `ref` callback.
 */
export declare const SchedulerForm: React.ForwardRefExoticComponent<SchedulerFormProps & React.RefAttributes<SchedulerFormHandle | null>>;
export declare const schedulerFormDefaultProps: {
    dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<import('@progress/kno-react-dialogs').DialogHandle | null>>;
    validator: () => {};
};
