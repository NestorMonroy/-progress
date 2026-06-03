import { drawing as draw } from '@progress/kno-drawing';
import { interpolateValue, setDefaultOptions } from '../../common';

class ClipAnimation extends draw.Animation {
    setup() {
        const options = this.options;

        options.duration = options.duration === undefined ? options.motionConfig.steady : options.duration;
        options.easing = options.motionConfig[options.easing] || [];

        this._setEnd(options.box.x1);
    }

    step(pos) {
        const box = this.options.box;
        this._setEnd(interpolateValue(box.x1, box.x2, pos));
    }

    _setEnd(x) {
        const element = this.element;
        const segments = element.segments;
        const topRight = segments[1].anchor();
        const bottomRight = segments[2].anchor();

        element.suspend();
        topRight.setX(x);
        element.resume();
        bottomRight.setX(x);
    }
}

setDefaultOptions(ClipAnimation, {
    motionConfig: {}
});

draw.AnimationFactory.current.register("clip", ClipAnimation);

export default ClipAnimation;