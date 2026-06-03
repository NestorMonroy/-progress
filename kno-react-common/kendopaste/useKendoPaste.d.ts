/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Options for the useKendoPaste hook.
 */
export interface UseKendoPasteOptions {
    /**
     * The field name to listen for in the smart paste event.
     * This is typically the component's `name` or `id` prop.
     * When the event contains a value for this field, the onValueChange callback is called.
     *
     * If undefined or empty, the hook will not subscribe to events.
     */
    fieldName?: string;
    /**
     * Callback fired when a value is received for this field from the smart paste event.
     *
     * @param value - The new value from the smart paste event
     */
    onValueChange: (value: any) => void;
    /**
     * Whether the smart paste  is enabled.
     * When false, the hook will not listen for smart paste events.
     *
     * @default true
     */
    enabled?: boolean;
}
/**
 * Options for subscribing to smart paste events in class components.
 */
export interface KendoPasteOptions {
    /**
     * The field name to listen for in the smart paste event.
     */
    fieldName?: string;
    /**
     * Callback fired when a value is received for this field from the smart paste event.
     */
    onValueChange: (value: any) => void;
}
/**
 * Result of subscribing to smart paste events, used to unsubscribe later.
 */
export interface KendoPaste {
    /**
     * Unsubscribe from smart paste events.
     * Call this in componentWillUnmount to clean up the event listener.
     */
    unsubscribe: () => void;
}
/**
 * Subscribe to smart paste events for class components.
 * Call this in componentDidMount and store the result.
 * Call unsubscribe() in componentWillUnmount.
 *
 * @param element - The DOM element to use for finding the event target
 * @param options - Configuration options for the smart paste 
 * @returns A  object with an unsubscribe method
 *
 * @example
 * ```tsx
 * class MyComponent extends React.Component {
 *   private KendoPaste?: KendoPaste;
 *
 *   componentDidMount() {
 *     this.KendoPaste = subscribeToKendoPaste(this.element, {
 *       fieldName: this.props.name,
 *       onValueChange: (value) => this.handleSmartPasteValue(value)
 *     });
 *   }
 *
 *   componentWillUnmount() {
 *     this.KendoPaste?.unsubscribe();
 *   }
 * }
 * ```
 */
export declare function subscribeToKendoPaste(element: Element | null | undefined, options: KendoPasteOptions): KendoPaste;
/**
 * A React hook that subscribes a component to smart paste events.
 * When a SmartPasteButton dispatches a populate event, this hook will
 * call the onValueChange callback if the event contains a value for the specified field.
 *
 * The field is identified by the `name` or `id` prop of the component.
 * Works with both knoReact Form components and native HTML form elements.
 *
 * @param elementRef - A ref to the DOM element that will be used to find the event target
 * @param options - Configuration options for the smart paste 
 *
 * @example
 * ```tsx
 * const inputRef = React.useRef<HTMLInputElement>(null);
 * const [value, setValue] = React.useState('');
 *
 * // Using name prop as field identifier
 * useKendoPaste(inputRef, {
 *   fieldName: 'firstName', // matches the name prop
 *   onValueChange: (newValue) => setValue(newValue)
 * });
 *
 * return <input ref={inputRef} name="firstName" value={value} onChange={(e) => setValue(e.target.value)} />;
 * ```
 */
export declare function useKendoPaste(elementRef: React.RefObject<Element | null>, options: UseKendoPasteOptions): void;
