import roundToPrecision from './round-to-precision';

export default function ceilToStep(value, step) {
    return roundToPrecision(Math.ceil(value / step) * step);
}
