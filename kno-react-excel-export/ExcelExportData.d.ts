/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The type that is expected for the ExcelExportComponent `data`.
 */
export interface ExcelExportData {
    /**
     * The exported data. If grouped, structure the data as described in the [`GroupResult`](components/datatools/api/groupresult) of the knoReact Data Query component.
     */
    data?: any[];
    /**
     * The exported data groups. The groups must be compatible with the [`GroupDescriptor`](components/datatools/api/groupdescriptor) of the knoReact Data Query component.
     */
    group?: any[];
}
