export declare class Component {
    readonly __isComponent = true;
    element: HTMLElement | null;
    options: any;
    constructor(element: any, options: any);
    destroy(): void;
    extendOptions(options: any): void;
    setOptions(options: any): void;
    trigger(eventName: any, args?: {}): boolean;
}
