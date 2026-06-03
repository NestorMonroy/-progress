import { drawing as draw, geometry as geom } from '@progress/kno-drawing';
import { BAR, START_SCALE } from '../constants';
import { X, Y } from '../../common/constants';
import { interpolateValue, setDefaultOptions } from '../../common';

class BarChartAnimation extends draw.Animation {
    setup() {
        const { element, options } = this;

        options.duration = options.duration === undefined ? options.motionConfig.steady : options.duration;
        options.easing = options.motionConfig[options.easing] || [];

        const bbox = element.bbox();

        if (bbox) {
            this.origin = options.origin;
            const axis = options.vertical ? Y : X;

            const fromScale = this.fromScale = new geom.Point(1, 1);
            fromScale[axis] = START_SCALE;

            element.transform(geom.transform()
                .scale(fromScale.x, fromScale.y)
            );
        } else {
            this.abort();
        }
    }

    step(pos) {
        const scaleX = interpolateValue(this.fromScale.x, 1, pos);
        const scaleY = interpolateValue(this.fromScale.y, 1, pos);

        this.element.transform(geom.transform()
            .scale(scaleX, scaleY, this.origin)
        );
    }

    abort() {
        super.abort();
        this.element.transform(null);
    }
}

setDefaultOptions(BarChartAnimation, {
    motionConfig: {}
});

draw.AnimationFactory.current.register(BAR, BarChartAnimation);

export default BarChartAnimation;