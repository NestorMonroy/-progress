/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LocalizationService } from '@progress/kno-react-intl';
import { TreeListFilterOperator } from '../../interfaces/TreeListFilterOperator';
/**
 * @hidden
 */
export declare const textFilterOperators: TreeListFilterOperator[];
/**
 * @hidden
 */
export declare const numericFilterOperators: TreeListFilterOperator[];
/**
 * @hidden
 */
export declare const dateFilterOperators: TreeListFilterOperator[];
/**
 * @hidden
 */
export declare const booleanOperator: string;
/**
 * @hidden
 */
export declare const booleanFilterValues: ({
    text: string;
    operator: string;
} | {
    text: string;
    operator: boolean;
})[];
/**
 * @hidden
 */
export declare function localizeFilter(localization: LocalizationService, operators: TreeListFilterOperator[]): {
    clearButtonTitle: string;
    operators: {
        text: string;
        operator: any;
    }[];
};
