/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { PDFExportProps } from './PDFExportProps';
import * as React from 'react';
/**
 * Represents the knoReact PDFExport component.
 */
export declare class PDFExport extends React.Component<PDFExportProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        author: PropTypes.Requireable<string>;
        avoidLinks: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        forcePageBreak: PropTypes.Requireable<string>;
        keepTogether: PropTypes.Requireable<string>;
        creator: PropTypes.Requireable<string>;
        date: PropTypes.Requireable<Date>;
        imageResolution: PropTypes.Requireable<number>;
        fileName: PropTypes.Requireable<string>;
        forceProxy: PropTypes.Requireable<boolean>;
        keywords: PropTypes.Requireable<string>;
        landscape: PropTypes.Requireable<boolean>;
        margin: PropTypes.Requireable<NonNullable<string | number | PropTypes.InferProps<{
            left: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
            top: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
            right: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
            bottom: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        }> | null | undefined>>;
        pageTemplate: PropTypes.Requireable<any>;
        paperSize: PropTypes.Requireable<any>;
        repeatHeaders: PropTypes.Requireable<boolean>;
        scale: PropTypes.Requireable<number>;
        proxyData: PropTypes.Requireable<any>;
        proxyURL: PropTypes.Requireable<string>;
        proxyTarget: PropTypes.Requireable<string>;
        producer: PropTypes.Requireable<string>;
        subject: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
    };
    private rootElForPDF;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    constructor(props: PDFExportProps);
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    /**
     * Saves the content as a PDF file.
     *
     * @param callback - The callback to be executed after the PDF is saved.
     */
    save(callback?: () => void): void;
    private getOptions;
}
