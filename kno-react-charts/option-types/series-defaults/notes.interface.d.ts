/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { drawing } from '@progress/kno-drawing';
import { NoteLine, SeriesNoteVisualArgs } from '../../common/property-types';
import { SeriesDefaultsNotesIcon } from './notes.icon.interface';
import { SeriesDefaultsNotesLabel } from './notes.label.interface';
/**
 * @hidden
 */
export interface SeriesDefaultsNotes {
    /**
     * The line of the notes.
     */
    line?: NoteLine;
    /**
     * A function for creating a custom visual for the notes.
     *
     * The available argument fields are:
     * - `rect`&mdash;The geometry [`Rect`](components/drawing/api/geometry/rect) that defines the note target rect.
     * - `options`&mdash;The note options.
     * - `createVisual`&mdash;A function for getting the default visual.
     * - `category`&mdash;The category of the note point.
     * - `dataItem`&mdash;The `dataItem` of the note point.
     * - `value`&mdash;The value of the note point.
     * - `sender`&mdash;The Chart instance.
     * - `series`&mdash;The series of the note point.
     * - `text`&mdash;The note text.
     */
    visual?: (e: SeriesNoteVisualArgs) => drawing.Element;
    /**
     * The icon of the notes.
     */
    icon?: SeriesDefaultsNotesIcon;
    /**
     * The label of the notes.
     */
    label?: SeriesDefaultsNotesLabel;
}
