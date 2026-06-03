/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ScrollViewProps } from './ScrollViewProps';
import * as React from 'react';
/**
 * The ScrollView ref.
 */
export interface ScrollViewHandle {
    /**
     * The ScrollView element.
     */
    element: HTMLDivElement | null;
    /**
     * Focus the ScrollView.
     */
    focus: () => void;
}
/**
 * Represents the [knoReact ScrollView component](components/scrollview).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   const items: any[] = [
 *     { position: 1, url: 'https://demos.tlk.com/kno-ui/content/web/scrollview/image1.jpg' },
 *     { position: 2, url: 'https://demos.tlk.com/kno-ui/content/web/scrollview/image2.jpg' },
 *     { position: 3, url: 'https://demos.tlk.com/kno-ui/content/web/scrollview/image3.jpg' }
 *   ];
 *   return (
 *     <ScrollView style={{width: 512, height: 384}}>
 *       {items.map((item, index) => {
 *         return (
 *           <div className="image-with-text" key={index}>
 *             <p>Showing image {item.position} of {items.length}.</p>
 *             <img
 *               src={item.url}
 *               alt={'Photo'}
 *               style={{width: 512, height: 384}}
 *               draggable={false}
 *             />
 *           </div>
 *         );
 *       })}
 *     </ScrollView>
 *   );
 * };
 * ```
 */
export declare const ScrollView: React.ForwardRefExoticComponent<ScrollViewProps & React.RefAttributes<ScrollViewHandle | null>>;
