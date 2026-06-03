/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { AnimationChildHandle } from './AnimationChild.js';
/**
 * The arguments that are passed to the life-cycle hooks.
 */
export interface AnimationEventArguments {
    /**
     * The element that is currently being animated.
     */
    animatedElement: HTMLElement;
    /**
     * The AnimationChild component which controls the animation.
     */
    target: AnimationChildHandle;
}
/**
 * Inherited by all animations. Represents the properties you can set to an Animation.
 */
export interface AnimationInterface {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Specifies the CSS class names that are set to each of the animated children elements.
     */
    componentChildClassName?: string;
    /**
     * Specifies the styles that are set to each of the animated children elements.
     */
    componentChildStyle?: any;
    /**
     * Called when you add a component to an existing Animation component and the Animation has not started yet ([more information and example]().
     */
    onEnter?: (event: AnimationEventArguments) => void;
    /**
     * Called when you add a component to an existing Animation component and the Animation is now happening ([more information and example]().
     */
    onEntering?: (event: AnimationEventArguments) => void;
    /**
     * Called when you add a component to an existing Animation component and the Animation is now finished ([more information and example]().
     */
    onEntered?: (event: AnimationEventArguments) => void;
    /**
     * An event called after the Animation has reached its exit state ([more information and example]()).
     */
    onExit?: (event: AnimationEventArguments) => void;
    /**
     * An event called after the Animation has reached its exiting state ([more information and example]()).
     */
    onExiting?: (event: AnimationEventArguments) => void;
    /**
     * An event called after the Animation has reached its exited state ([more information and example]()).
     */
    onExited?: (event: AnimationEventArguments) => void;
    /**
     * @hidden
     * This event is always triggered in contrast to `onExited` which TransitionGroup prevents when target element is not removed from DOM.
     */
    onAfterExited?: (event: AnimationEventArguments) => void;
    /**
     * Defines whether a transition should happen on the first mount.
     *
     * @default false
     */
    appear?: boolean;
    /**
     * Specifies whether to animate the entering (showing) element ([see example]()).
     *
     * @default true
     */
    enter?: boolean;
    /**
     * Specifies whether to animate a leaving (disappearing) element ([see example]()).
     *
     * @default true
     */
    exit?: boolean;
    /**
     * Specifies the duration of the transition for the entering (`animation in`) Animation ([see example]()). After the time runs out, the Animation is terminated.
     *
     * @default 300
     */
    transitionEnterDuration?: number;
    /**
     * Specifies the duration of the transition for the exiting (`animation out`) Animation ([see example]()). After the time runs out, the Animation is terminated.
     *
     * @default 300
     */
    transitionExitDuration?: number;
    /**
     * Specifies if the Animation uses lazy-mounting on the first `in={true}`.
     *
     * @default false
     */
    mountOnEnter?: boolean;
    /**
     * Specifies if the Animation unmounts after it reaches its exited state.
     *
     * @default false
     */
    unmountOnExit?: boolean;
}
