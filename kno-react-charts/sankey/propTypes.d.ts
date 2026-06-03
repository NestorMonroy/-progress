/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
/**
 * @hidden
 */
export declare const sankeyPropTypes: {
    data: PropTypes.Validator<Required<PropTypes.InferProps<{
        nodes: PropTypes.Validator<Required<PropTypes.InferProps<{
            color: PropTypes.Requireable<string>;
            opacity: PropTypes.Requireable<number>;
            offset: PropTypes.Requireable<Required<PropTypes.InferProps<{
                left: PropTypes.Requireable<number>;
                top: PropTypes.Requireable<number>;
            }>>>;
            padding: PropTypes.Requireable<number>;
            width: PropTypes.Requireable<number>;
            focusHighlight: PropTypes.Requireable<Required<PropTypes.InferProps<{
                border: PropTypes.Requireable<Required<PropTypes.InferProps<{
                    width: PropTypes.Requireable<number>;
                    color: PropTypes.Requireable<string>;
                    opacity: PropTypes.Requireable<number>;
                    dashType: PropTypes.Requireable<string>;
                }>>>;
            }>>>;
            id: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
            label: PropTypes.Validator<Required<PropTypes.InferProps<{
                visible: PropTypes.Requireable<boolean>;
                font: PropTypes.Requireable<string>;
                color: PropTypes.Requireable<string>;
                opacity: PropTypes.Requireable<number>;
                align: PropTypes.Requireable<string>;
                position: PropTypes.Requireable<string>;
                padding: PropTypes.Requireable<NonNullable<number | Required<PropTypes.InferProps<{
                    top: PropTypes.Requireable<number>;
                    bottom: PropTypes.Requireable<number>;
                    left: PropTypes.Requireable<number>;
                    right: PropTypes.Requireable<number>;
                }>> | null | undefined>>;
                margin: PropTypes.Requireable<Required<PropTypes.InferProps<{
                    left: PropTypes.Requireable<number>;
                    right: PropTypes.Requireable<number>;
                }>>>;
                border: PropTypes.Requireable<Required<PropTypes.InferProps<{
                    width: PropTypes.Requireable<number>;
                    color: PropTypes.Requireable<string>;
                    opacity: PropTypes.Requireable<number>;
                    dashType: PropTypes.Requireable<string>;
                }>>>;
                offset: PropTypes.Requireable<Required<PropTypes.InferProps<{
                    left: PropTypes.Requireable<number>;
                    top: PropTypes.Requireable<number>;
                }>>>;
                text: PropTypes.Requireable<string>;
            }>>>;
        }>>[]>;
        links: PropTypes.Validator<Required<PropTypes.InferProps<{
            colorType: PropTypes.Requireable<string>;
            color: PropTypes.Requireable<string>;
            opacity: PropTypes.Requireable<number>;
            highlight: PropTypes.Requireable<Required<PropTypes.InferProps<{
                opacity: PropTypes.Requireable<number>;
                inactiveOpacity: PropTypes.Requireable<number>;
            }>>>;
            focusHighlight: PropTypes.Requireable<Required<PropTypes.InferProps<{
                border: PropTypes.Requireable<Required<PropTypes.InferProps<{
                    width: PropTypes.Requireable<number>;
                    color: PropTypes.Requireable<string>;
                    opacity: PropTypes.Requireable<number>;
                    dashType: PropTypes.Requireable<string>;
                }>>>;
            }>>>;
            sourceId: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
            targetId: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
            value: PropTypes.Validator<number>;
        }>>[]>;
    }>>>;
    links: PropTypes.Requireable<Required<PropTypes.InferProps<{
        colorType: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        opacity: PropTypes.Requireable<number>;
        highlight: PropTypes.Requireable<Required<PropTypes.InferProps<{
            opacity: PropTypes.Requireable<number>;
            inactiveOpacity: PropTypes.Requireable<number>;
        }>>>;
        focusHighlight: PropTypes.Requireable<Required<PropTypes.InferProps<{
            border: PropTypes.Requireable<Required<PropTypes.InferProps<{
                width: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                opacity: PropTypes.Requireable<number>;
                dashType: PropTypes.Requireable<string>;
            }>>>;
        }>>>;
    }>>>;
    nodes: PropTypes.Requireable<Required<PropTypes.InferProps<{
        color: PropTypes.Requireable<string>;
        opacity: PropTypes.Requireable<number>;
        offset: PropTypes.Requireable<Required<PropTypes.InferProps<{
            left: PropTypes.Requireable<number>;
            top: PropTypes.Requireable<number>;
        }>>>;
        padding: PropTypes.Requireable<number>;
        width: PropTypes.Requireable<number>;
        focusHighlight: PropTypes.Requireable<Required<PropTypes.InferProps<{
            border: PropTypes.Requireable<Required<PropTypes.InferProps<{
                width: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                opacity: PropTypes.Requireable<number>;
                dashType: PropTypes.Requireable<string>;
            }>>>;
        }>>>;
    }>>>;
    labels: PropTypes.Requireable<Required<PropTypes.InferProps<{
        visible: PropTypes.Requireable<boolean>;
        font: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        opacity: PropTypes.Requireable<number>;
        align: PropTypes.Requireable<string>;
        position: PropTypes.Requireable<string>;
        padding: PropTypes.Requireable<NonNullable<number | Required<PropTypes.InferProps<{
            top: PropTypes.Requireable<number>;
            bottom: PropTypes.Requireable<number>;
            left: PropTypes.Requireable<number>;
            right: PropTypes.Requireable<number>;
        }>> | null | undefined>>;
        margin: PropTypes.Requireable<Required<PropTypes.InferProps<{
            left: PropTypes.Requireable<number>;
            right: PropTypes.Requireable<number>;
        }>>>;
        border: PropTypes.Requireable<Required<PropTypes.InferProps<{
            width: PropTypes.Requireable<number>;
            color: PropTypes.Requireable<string>;
            opacity: PropTypes.Requireable<number>;
            dashType: PropTypes.Requireable<string>;
        }>>>;
        offset: PropTypes.Requireable<Required<PropTypes.InferProps<{
            left: PropTypes.Requireable<number>;
            top: PropTypes.Requireable<number>;
        }>>>;
    }>>>;
    legend: PropTypes.Requireable<Required<PropTypes.InferProps<{
        align: PropTypes.Requireable<string>;
        background: PropTypes.Requireable<string>;
        border: PropTypes.Requireable<Required<PropTypes.InferProps<{
            width: PropTypes.Requireable<number>;
            color: PropTypes.Requireable<string>;
            opacity: PropTypes.Requireable<number>;
            dashType: PropTypes.Requireable<string>;
        }>>>;
        height: PropTypes.Requireable<number>;
        labels: PropTypes.Requireable<object>;
        margin: PropTypes.Requireable<NonNullable<number | Required<PropTypes.InferProps<{
            top: PropTypes.Requireable<number>;
            bottom: PropTypes.Requireable<number>;
            left: PropTypes.Requireable<number>;
            right: PropTypes.Requireable<number>;
        }>> | null | undefined>>;
        offsetX: PropTypes.Requireable<number>;
        offsetY: PropTypes.Requireable<number>;
        orientation: PropTypes.Requireable<string>;
        padding: PropTypes.Requireable<NonNullable<number | Required<PropTypes.InferProps<{
            top: PropTypes.Requireable<number>;
            bottom: PropTypes.Requireable<number>;
            left: PropTypes.Requireable<number>;
            right: PropTypes.Requireable<number>;
        }>> | null | undefined>>;
        position: PropTypes.Requireable<string>;
        reverse: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        width: PropTypes.Requireable<number>;
        item: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<object>;
    }>>>;
    title: PropTypes.Requireable<Required<PropTypes.InferProps<{
        align: PropTypes.Requireable<string>;
        background: PropTypes.Requireable<string>;
        border: PropTypes.Requireable<Required<PropTypes.InferProps<{
            width: PropTypes.Requireable<number>;
            color: PropTypes.Requireable<string>;
            opacity: PropTypes.Requireable<number>;
            dashType: PropTypes.Requireable<string>;
        }>>>;
        color: PropTypes.Requireable<string>;
        font: PropTypes.Requireable<string>;
        margin: PropTypes.Requireable<NonNullable<number | Required<PropTypes.InferProps<{
            top: PropTypes.Requireable<number>;
            bottom: PropTypes.Requireable<number>;
            left: PropTypes.Requireable<number>;
            right: PropTypes.Requireable<number>;
        }>> | null | undefined>>;
        padding: PropTypes.Requireable<NonNullable<number | Required<PropTypes.InferProps<{
            top: PropTypes.Requireable<number>;
            bottom: PropTypes.Requireable<number>;
            left: PropTypes.Requireable<number>;
            right: PropTypes.Requireable<number>;
        }>> | null | undefined>>;
        position: PropTypes.Requireable<string>;
        text: PropTypes.Requireable<string>;
        visible: PropTypes.Requireable<boolean>;
    }>>>;
    tooltip: PropTypes.Requireable<Required<PropTypes.InferProps<{
        visible: PropTypes.Requireable<boolean>;
        appendTo: PropTypes.Requireable<any>;
        offset: PropTypes.Requireable<number>;
        followPointer: PropTypes.Requireable<boolean>;
        delay: PropTypes.Requireable<number>;
        linkComponent: PropTypes.Requireable<any>;
        nodeComponent: PropTypes.Requireable<any>;
    }>>>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    dir: PropTypes.Requireable<string>;
    disableAutoLayout: PropTypes.Requireable<boolean>;
    disableKeyboardNavigation: PropTypes.Requireable<boolean>;
    onNodeEnter: PropTypes.Requireable<(...args: any[]) => any>;
    onNodeLeave: PropTypes.Requireable<(...args: any[]) => any>;
    onLinkEnter: PropTypes.Requireable<(...args: any[]) => any>;
    onLinkLeave: PropTypes.Requireable<(...args: any[]) => any>;
    onNodeClick: PropTypes.Requireable<(...args: any[]) => any>;
    onLinkClick: PropTypes.Requireable<(...args: any[]) => any>;
};
