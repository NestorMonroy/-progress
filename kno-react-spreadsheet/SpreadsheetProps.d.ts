/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Workbook as OoxmlWorkbook } from '@progress/kno-ooxml';
import { SpreadsheetOptions, SpreadsheetWidget, Range, DocumentDescriptor, View, Sheet, ExcelExportSettings, CellDefaultStyle, SheetColumn, SheetRow, Cell, CellBorder, SheetDescriptor, Workbook } from '@progress/kno-spreadsheet-common';
import { WebMcpProps } from '@progress/kno-react-common';
export { SpreadsheetWidget, SpreadsheetOptions, Range, DocumentDescriptor, View, Workbook, Sheet, SheetDescriptor, ExcelExportSettings, CellDefaultStyle, SheetColumn, SheetRow, Cell, CellBorder };
interface SpreadsheetEvent {
    /**
     * The widget instance which fired the event.
     */
    sender: SpreadsheetWidget;
}
/**
 * Represents the `SpreadsheetSelectEvent` object.
 */
export interface SpreadsheetSelectEvent extends SpreadsheetEvent {
    /**
     * The Range that is selected.
     */
    range: Range;
}
/**
 * Represents the `SpreadsheetChangeEvent` object.
 */
export interface SpreadsheetChangeEvent extends SpreadsheetEvent, SpreadsheetSelectEvent {
}
/**
 * Represents the `SpreadsheetExcelImportEvent` object.
 */
export interface SpreadsheetExcelImportEvent extends SpreadsheetEvent {
    /**
     * The file that is being imported.
     */
    file: Blob | File;
    /**
     * If invoked, the Spreadsheet will not import the file.
     */
    preventDefault: Function;
}
/**
 * Represents the `SpreadsheetExcelExportEvent` object.
 */
export interface SpreadsheetExcelExportEvent extends SpreadsheetEvent {
    /**
     * The array of data items that is used to create the Excel workbook.
     */
    data: Array<any>;
    /**
     * The Excel workbook configuration object.
     * Modifications of the workbook will reflect in the output Excel document.
     */
    workbook: OoxmlWorkbook;
    /**
     * If invoked, the Spreadsheet will not save the generated file.
     */
    preventDefault: Function;
}
/**
 * Represents the Spreadsheet tab configuration object.
 */
export interface SpreadsheetTab {
    /**
     * The text of the tab.
     */
    text?: string;
    /**
     * The localization key of the tab's text.
     */
    textKey?: string;
    /**
     * Indicates if the tab to be selected initially.
     */
    selected?: boolean;
    /**
     * The toolbar configuration in the tab content.
     */
    tools: (React.ComponentType<any> | React.ComponentType<any>[])[];
}
export interface SpreadsheetProps {
    /**
     * Sets additional classes to the Spreadsheet.
     *
     * @example
     * ```jsx
     * <Spreadsheet className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Represents the default props of the Spreadsheet.
     *
     * @example
     * ```jsx
     * <Spreadsheet defaultProps={{ toolbar: true }} />
     * ```
     */
    defaultProps?: SpreadsheetOptions;
    /**
     * A Boolean value which indicates if the toolbar will be displayed. It also allows customizing the tabs' content.
     *
     * @default true
     * @example
     * ```jsx
     * <Spreadsheet toolbar={false} />
     * <Spreadsheet toolbar={[{ text: "Custom Tab", tools: [CustomToolComponent] }]} />
     * ```
     */
    toolbar?: boolean | SpreadsheetTab[];
    /**
     * Specifies the styles that will be applied to the wrapping element.
     *
     * @example
     * ```jsx
     * <Spreadsheet style={{ height: '500px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Triggered when the Spreadsheet selection is changed.
     *
     * @example
     * ```jsx
     * <Spreadsheet onSelect={(event) => console.log(event.range)} />
     * ```
     */
    onSelect?: (event: SpreadsheetSelectEvent) => void;
    /**
     * Triggered when a value in the Spreadsheet has been changed.
     *
     * @example
     * ```jsx
     * <Spreadsheet onChange={(event) => console.log(event.range)} />
     * ```
     */
    onChange?: (event: SpreadsheetChangeEvent) => void;
    /**
     * Triggered when the range format is changed from the UI.
     *
     * @example
     * ```jsx
     * <Spreadsheet onChangeFormat={(event) => console.log(event.range)} />
     * ```
     */
    onChangeFormat?: (event: SpreadsheetChangeEvent) => void;
    /**
     * Fired when the user clicks the Open toolbar button.
     *
     * @example
     * ```jsx
     * <Spreadsheet onExcelImport={(event) => console.log(event.file)} />
     * ```
     */
    onExcelImport?: (event: SpreadsheetExcelImportEvent) => void;
    /**
     * Fires when the user clicks the Export to Excel toolbar button.
     *
     * @example
     * ```jsx
     * <Spreadsheet onExcelExport={(event) => console.log(event.workbook)} />
     * ```
     */
    onExcelExport?: (event: SpreadsheetExcelExportEvent) => void;
    /**
     * Enables browser-native AI agent tools via Web MCP (Chrome 146+).
     *
     * Pass `true` for defaults or an object for fine-grained control.
     * AI agents are multilingual — `dataName` accepts any language.
     *
     * @example
     * ```tsx
     * // Boolean: generic "spreadsheet" label
     * <Spreadsheet webMcp />
     *
     * // Config object: explicit name
     * <Spreadsheet webMcp={{ dataName: 'budget' }} />
     * ```
     */
    webMcp?: boolean | WebMcpProps;
}
/**
 * Represents the Spreadsheet handle object.
 */
export interface SpreadsheetHandle {
    /**
     * The current element or `null` if there is no one.
     */
    element: HTMLDivElement | null;
    /**
     * The props values of the Spreadsheet.
     */
    props: SpreadsheetProps;
    /**
     * Represents the SpreadsheetWidget object, holding the core functionality of the Spreadsheet.
     */
    instance: SpreadsheetWidget | null;
    /**
     * Returns the `View` object of the Spreadsheet.
     */
    get view(): View;
    /**
     * Returns the `Workbook` object of the Spreadsheet.
     */
    get workbook(): Workbook;
    /**
     * Executes the passed command against the selected cell/range.
     *
     * @param options An object containing the command name and the required by it options.
     */
    executeCommand(options: any): void;
    /**
     * Loads the workbook data from an object with the format that is defined in the configuration.
     *
     * Note: All existing sheets and their data will be lost.
     *
     * @param json The object from where data will be loaded. This has to be the deserialized object, not the JSON string.
     */
    fromJSON(json: DocumentDescriptor): void;
    /**
     * Serializes the workbook.
     */
    toJSON(): DocumentDescriptor;
    /**
     * Serializes the workbook. This method does not return the JSON, but a Promise object which will yield the JSON data when it is available.
     * The method is functionally similar to `toJSON`, but it is also able to save the embedded images (this is the reason why it must be asynchronous).
     */
    saveJSON(): Promise<DocumentDescriptor>;
    /**
     * Clears the Spreadsheet and populates it with data from the specified Excel (.xlsx) file.
     *
     * @param blob The file or blob that is usually obtained through a file input.
     */
    fromFile(file: File | Blob): void;
    /**
     * Initiates the Excel export. Also fires the excelExport event.
     *
     * Note: Calling this method may trigger the built-in popup blocker of the browser.
     * To avoid that, always call it as a response to an end-user action, for example, a button click.
     */
    saveAsExcel(options: any): void;
    /**
     * Gets or sets the active sheet.
     */
    activeSheet(sheet?: Sheet): Sheet | void;
    /**
     * Returns an array with the sheets in the workbook.
     */
    sheets(): Sheet[];
    /**
     * Re-renders all data in the Spreadsheet.
     */
    refresh(): void;
}
