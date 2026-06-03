import { drawing as draw, geometry as geom } from '@progress/kno-drawing';

import { START_SCALE, PIE } from '../constants';

import { setDefaultOptions } from '../../common';

class PieAnimation extends draw.Animation {
    setup() {
        const options = this.options;
        options.duration = options.duration === undefined ? options.motionConfig.steady : options.duration;
        options.easing = options.motionConfig.easeOutElastic || [];

        this.element.transform(geom.transform()
            .scale(START_SCALE, START_SCALE, this.options.center)
        );
    }

    step(pos) {
        this.element.transform(geom.transform()
            .scale(pos, pos, this.options.center)
        );
    }
}

setDefaultOptions(PieAnimation, {
    motionConfig: {}
});

draw.AnimationFactory.current.register(PIE, PieAnimation);

export default PieAnimation;