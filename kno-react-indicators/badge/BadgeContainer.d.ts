/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BadgeContainerProps } from './BadgeContainerProps';
import * as React from 'react';
/**
 * The BadgeContainer ref.
 */
export interface BadgeContainerHandle {
    /**
     * The BadgeContainer element.
     */
    element: HTMLSpanElement | null;
    /**
     * Focus the BadgeContainer.
     */
    focus: () => void;
}
/**
 * Represents the [knoReact BadgeContainer component](components/indicators/badge).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <BadgeContainer>
 *           <Avatar shape="circle" type="image">
 *               <img src={'https://demos.tlk.com/kno-ui/content/web/Customers/RICSU.jpg'} />
 *           </Avatar>
 *           <Badge cornerPlacement="edge" position="topEnd">
 *       </BadgeContainer>
 *   );
 * };
 * ```
 */
export declare const BadgeContainer: React.ForwardRefExoticComponent<BadgeContainerProps & React.RefAttributes<BadgeContainerHandle | null>>;
