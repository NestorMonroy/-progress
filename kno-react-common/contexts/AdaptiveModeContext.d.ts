/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the `AdaptiveModeContextType` interface.
 */
export interface AdaptiveModeContextType {
    /**
     * Sets the small breakpoint for the adaptive rendering.
     *
     * @default 500
     */
    small: number;
    /**
     * Sets the medium breakpoint for the adaptive rendering.
     *
     * @default 786
     */
    medium: number;
}
/** @hidden */
export declare const defaultValue: {
    small: number;
    medium: number;
};
/**
 * Represents a React Context that enables further configuration of the adaptive mode breakpoints.
 * Used for global configuration across components that implement adaptive rendering.
 * For more information and demos, refer to:
 * * [DatePicker Adaptive Rendering article](components/dateinputs/datepicker/adaptive-rendering)
 * * [DateRangePicker Adaptive Rendering article](components/dateinputs/datetimepicker/adaptive-rendering)
 * * [DateTimePicker Adaptive Rendering article](components/dateinputs/daterangepicker/adaptive-rendering)
 * * [TimePicker Adaptive Rendering article](components/dateinputs/timepicker/adaptive-rendering)
 * * [AutoComplete Adaptive Rendering article](components/dropdowns/autocomplete/adaptive-rendering)
 * * [ComboBox Adaptive Rendering article](components/dropdowns/combobox/adaptive-rendering)
 * * [DropDownList Adaptive Rendering article](components/dropdowns/dropdownlist/adaptive-rendering)
 * * [DropDownTree Adaptive Rendering article](components/dropdowns/dropdowntree/adaptive-rendering)
 * * [MultiColumnComboBox Adaptive Rendering article](components/dropdowns/multicolumncombobox/adaptive-rendering)
 * * [MultiSelect Adaptive Rendering article](components/dropdowns/multiselect/adaptive-rendering)
 * * [MultiSelectTree Adaptive Rendering article](components/dropdowns/multiselecttree/adaptive-rendering)
 *
 */
export declare const AdaptiveModeContext: React.Context<AdaptiveModeContextType>;
/** @hidden */
export declare const useAdaptiveModeContext: () => AdaptiveModeContextType;
