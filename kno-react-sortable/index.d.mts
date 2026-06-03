/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Sortable as SortableClassComponent } from './Sortable.js';
import { SortableOnDragStartEvent } from './events/SortableOnDragStartEvent.js';
import { SortableOnDragOverEvent } from './events/SortableOnDragOverEvent.js';
import { SortableOnDragEndEvent } from './events/SortableOnDragEndEvent.js';
import { SortableProps } from './interfaces/SortableProps';
import { SortableItemUIProps } from './interfaces/SortableItemUIProps';
import { SortableEmptyItemUIProps } from './interfaces/SortableEmptyItemUIProps';
import { SortableOnNavigateEvent } from './events/SortableOnNavigateEvent.js';
declare const Sortable: import('react').ForwardRefExoticComponent<SortableProps & import('react').RefAttributes<any>>;
type Sortable = SortableClassComponent;
export { Sortable, SortableProps, SortableItemUIProps, SortableEmptyItemUIProps, SortableOnDragStartEvent, SortableOnDragOverEvent, SortableOnDragEndEvent, SortableOnNavigateEvent };
