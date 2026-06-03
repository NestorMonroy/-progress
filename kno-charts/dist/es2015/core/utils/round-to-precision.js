import { DEFAULT_PRECISION } from '../../common/constants';

/**
 * Rounds the given value to the specified number of significant digits and returns it as a number.
 *
 * This maintains the order of magnitude of the original value while rounding it to a specified number of significant digits,
 * which is particularly useful for handling very small or very large numbers without losing their scale.
 *
 * For example, `roundToPrecision(0.000123456, 3)` will return `0.000123`, and `roundToPrecision(123456, 2)` will return `120000`.
 *
 * @param {*} value The value to round.
 * @param {*} precision The number of significant digits to round to. Defaults to DEFAULT_PRECISION.
 * @returns The rounded value as a number.
 */
export default function roundToPrecision(value, precision = DEFAULT_PRECISION) {
    if (!Number.isFinite(value) || value === 0) {
        return value;
    }

    return parseFloat((value).toPrecision(precision));
}
