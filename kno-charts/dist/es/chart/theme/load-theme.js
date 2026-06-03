import { resolveElementColor } from "@progress/kno-drawing";

const SERIES_COLORS = 30;
const seriesVar = '--kno-chart-series-';

const elementStyles = element => element.ownerDocument.defaultView.getComputedStyle(element);
const getProp = (element, prop) => elementStyles(element).getPropertyValue(prop);
const getNumberProp = (element, prop) => parseFloat(elementStyles(element).getPropertyValue(prop));

let colorCache;
const getColorProp = (element, prop) => {
    let value = elementStyles(element).getPropertyValue(prop);
    if (!value) {
        return undefined;
    }

    if (!colorCache) {
        colorCache = new Map();
    }

    let color;
    if (colorCache.has(value)) {
        color = colorCache.get(value);
    } else {
        color = resolveElementColor(element, prop);
        colorCache.set(value, color);
    }

    return color;
};

const getFont = (element, weightProp, sizeProp, familyProp) => {
    const styles = elementStyles(element);
    return [styles.getPropertyValue(weightProp), styles.getPropertyValue(sizeProp), styles.getPropertyValue(familyProp) || styles.fontFamily].join(" ");
};

const seriesColorsVars = {};
for (let i = 1; i <= SERIES_COLORS; i++) {
    seriesColorsVars[`series-color-${i}`] = `${seriesVar}${i}`;
}

const seriesColorByIndex = (element, index) => {
    const propName = `${seriesVar}${index}`;
    return getColorProp(element, propName);
};

const getSeriesColors = (element) => {
    const result = [];
    let count = 0;

    while (count++ <= SERIES_COLORS) {
        const seriesColor = seriesColorByIndex(element, count);
        if (seriesColor === undefined) {
            break;
        }

        result.push(seriesColor);
    }

    return result;
};

const parseToMS = (value) => {
    // Handle CSS time values (e.g., "200ms", "0.5s", ".3s")
    if (typeof value === 'string' && value.endsWith('ms')) {
        return parseFloat(value);
    } else if (typeof value === 'string' && value.endsWith('s')) {
        return parseFloat(value) * 1000;
    }
    return parseFloat(value);
};

function parseCubicBezier(input) {
    const s = (input || "").trim();
    const m = s.match(
        /cubic-bezier\s*\(\s*([+-]?\d*\.?\d+)\s*,\s*([+-]?\d*\.?\d+)\s*,\s*([+-]?\d*\.?\d+)\s*,\s*([+-]?\d*\.?\d+)\s*\)\s*/i
    );

    return m ? [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])] : null;
}

// -----------------------------------------------------------------------------
// CSS Variable Groups (shared + component specific)
// -----------------------------------------------------------------------------
export const sharedVariables = {
    text: "--kno-chart-text",
    chartBg: "--kno-chart-bg",
    fontWeight: "--kno-font-weight",
    fontFamily: "--kno-font-family",
};

// Chart-specific variables (in addition to shared)
const chartVariables = {
    majorLines: "--kno-chart-major-lines",
    minorLines: "--kno-chart-minor-lines",
    areaOpacity: "--kno-chart-area-opacity",
    surface: "--kno-color-surface",
    primaryBg: "--kno-chart-primary-bg",
    crosshairBg: "--kno-chart-crosshair-bg",
    axisLabelFontSize: "--kno-chart-label-font-size",
    axisLabelFontWeight: "--kno-font-weight",
    axisLabelFontFamily: "--kno-font-family",
    chartFontSize: "--kno-chart-font-size", // used by defaultFont / legend labels
    paneTitleFontSize: "--kno-chart-pane-title-font-size",
    paneTitleFontWeight: "--kno-chart-pane-title-font-weight",
    titleFontSize: "--kno-chart-title-font-size",
    titleFontWeight: "--kno-font-weight",
    errorBarsBg: "--kno-chart-error-bars-bg",
    areaInactiveOpacity: "--kno-chart-area-inactive-opacity",
    lineInactiveOpacity: "--kno-chart-line-inactive-opacity",
    bulletTarget: "--kno-chart-bullet-target",
    notesBg: "--kno-chart-notes-bg",
    notesBorder: "--kno-chart-notes-border",
    notesLines: "--kno-chart-notes-lines",
    inactive: "--kno-chart-inactive",
    initialAnimationDuration: '--kno-duration-steady',
    fadeInAnimationDuration: '--kno-duration-rapid',
    elasticEasing: '--kno-easing-stretchy',
    linearEasing: '--kno-easing-linear',
    swingEasing: '--kno-easing-standard',
};

// Sankey-specific variables (in addition to shared)
const sankeyVariables = {
    linksColor: "--kno-color-subtle",
};

// Gauge-specific variables (in addition to shared)
const gaugeVariables = {
    gaugePointer: "--kno-chart-gauge-pointer",
    gaugeTrack: "--kno-chart-gauge-track",
};

// Font & color helpers using variable objects (avoid raw CSS strings)
const defaultFont = element => getFont(element, sharedVariables.fontWeight, chartVariables.chartFontSize, sharedVariables.fontFamily);
const paneTitleFont = (element) => getFont(element, chartVariables.paneTitleFontWeight, chartVariables.paneTitleFontSize, sharedVariables.fontFamily);
const normalTextColor = (element) => getColorProp(element, sharedVariables.text);

const title = (element) => ({
    color: normalTextColor(element),
    font: getFont(element, sharedVariables.fontWeight, chartVariables.titleFontSize, sharedVariables.fontFamily),
});

const sankeyLegend = (element) => {
    const textColorNormal = normalTextColor(element);
    return {
        labels: {
            color: textColorNormal,
            font: defaultFont(element),
        },
        title: {
            color: textColorNormal,
        }
    };
};

const chartLegend = (element) => {
    const inactiveColor = getColorProp(element, chartVariables.inactive);
    return Object.assign({}, {inactiveItems: {
            labels: {
                color: inactiveColor,
            },
            markers: {
                color: inactiveColor,
            },
        }},
        sankeyLegend(element));
};
// Export composed variable objects
export const chartCSSVariables = Object.assign({}, sharedVariables, chartVariables, seriesColorsVars);
export const sankeyCSSVariables = Object.assign({}, sharedVariables, sankeyVariables, seriesColorsVars);
export const gaugeCSSVariables = Object.assign({}, sharedVariables, gaugeVariables);

export const gaugeTheme = (element) => {
    const vars = gaugeCSSVariables;
    const textColorNormal = normalTextColor(element);
    return {
        pointer: {
            color: getColorProp(element, vars.gaugePointer)
        },
        scale: {
            labels: {
                color: textColorNormal
            },

            rangePlaceholderColor: getColorProp(element, vars.gaugeTrack),

            minorTicks: {
                color: textColorNormal
            },

            majorTicks: {
                color: textColorNormal
            },

            line: {
                color: textColorNormal
            }
        }
    };
};

export const sankeyTheme = (element) => {
    const vars = sankeyCSSVariables;
    return {
        labels: {
            color: normalTextColor(element),
            font: defaultFont(element),
            stroke: {
                color: getColorProp(element, vars.chartBg),
            },
        },
        links: {
            color: getColorProp(element, vars.linksColor),
        },
        nodeColors: getSeriesColors(element),
        title: title(element),
        legend: sankeyLegend(element),
    };
};

const notes = (element) => ({
    icon: {
        background: getColorProp(element, chartVariables.notesBg),
        border: {
            color: getColorProp(element, chartVariables.notesBorder),
        },
    },
    line: {
        color: getColorProp(element, chartVariables.notesLines),
    },
    label: {
        font: defaultFont(element),
    },
});

// (chartCSSVariables already exported above via composition)

export const chartTheme = (element) => {
    const vars = chartCSSVariables;
    const majorLines = getColorProp(element, vars.majorLines);
    const normalTextColor = getColorProp(element, vars.text);
    const axisLabelFont = getFont(element, vars.axisLabelFontWeight, vars.axisLabelFontSize, vars.axisLabelFontFamily);
    const chartBg = getColorProp(element, vars.chartBg);
    const notesProps = notes(element);
    const areaOpacity = getNumberProp(element, vars.areaOpacity);
    const surfaceColor = getColorProp(element, vars.surface);
    const primaryBg = getColorProp(element, vars.primaryBg);

    const boxPlot = () => ({
        downColor: majorLines,
        mean: {
            color: surfaceColor,
        },
        median: {
            color: surfaceColor,
        },
        whiskers: {
            color: primaryBg,
        },
    });

    const waterfall = () => ({
        line: {
            color: majorLines,
        },
    });

    const area = () => ({
        opacity: areaOpacity,
        highlight: {
            inactiveOpacity: getNumberProp(element, vars.areaInactiveOpacity),
        },
    });

    const line = () => ({
        highlight: {
            inactiveOpacity: getNumberProp(element, vars.lineInactiveOpacity),
        },
    });

    const bullet = () => ({
        target: {
            color: normalTextColor,
        },
    });

    const motion = {
        steady: parseToMS(getProp(element, vars.initialAnimationDuration)) || 600,
        rapid: parseToMS(getProp(element, vars.fadeInAnimationDuration)) || 200,
        easeOutElastic: parseCubicBezier(getProp(element, vars.elasticEasing)) || [0.07, 1.81, 0.3, 0.81],
        linear: parseCubicBezier(getProp(element, vars.linearEasing)) || [0, 0, 1, 1],
        swing: parseCubicBezier(getProp(element, vars.swingEasing)) || [0.42, 0, 0.58, 1]
    };

    return {
        axisDefaults: {
            crosshair: {
                color: getColorProp(element, vars.crosshairBg),
            },
            labels: {
                color: normalTextColor,
                font: axisLabelFont,
            },
            line: {
                color: majorLines,
            },
            majorGridLines: {
                color: majorLines,
            },
            minorGridLines: {
                color: getColorProp(element, vars.minorLines),
            },
            notes: structuredClone(notesProps),
            title: {
                color: normalTextColor,
                font: defaultFont(element),
            }
        },
        categoryAxis: {
            highlight: {
                color: "#8C9FD9",
                opacity: 0.15
            }
        },
        chartArea: {
            background: chartBg,
        },
        legend: chartLegend(element),
        seriesColors: getSeriesColors(element),
        seriesDefaults: {
            area: area(),
            verticalArea: area(),
            radarArea: area(),

            boxPlot: boxPlot(),
            verticalBoxPlot: boxPlot(),

            bullet: bullet(),
            verticalBullet: bullet(),

            horizontalWaterfall: waterfall(),
            waterfall: waterfall(),

            line: line(),
            verticalLine: line(),

            candlestick: {
                downColor: normalTextColor,
                line: {
                    color: normalTextColor,
                },
            },
            errorBars: {
                color: getColorProp(element, vars.errorBarsBg),
            },
            icon: {
                border: {
                    color: majorLines,
                },
            },
            labels: {
                background: chartBg,
                color: normalTextColor,
                font: axisLabelFont,
                opacity: areaOpacity,
            },
            notes: structuredClone(notesProps),
        },
        subtitle: {
            color: normalTextColor,
            font: paneTitleFont(element),
        },
        title: title(element),
        paneDefaults: {
            title: {
                font: paneTitleFont(element),
            }
        },
        motion
    };
};
