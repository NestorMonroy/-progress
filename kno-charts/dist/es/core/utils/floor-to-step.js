import roundToPrecision from './round-to-precision';

export default function floorToStep(value, step) {
    return roundToPrecision(Math.floor(value / step) * step);
}
