import { drawing as draw } from '@progress/kno-drawing';
import { FADEIN } from '../constants';

import { setDefaultOptions } from '../../common';

class FadeInAnimation extends draw.Animation {
    setup() {
        const options = this.options;
        options.duration = options.duration === undefined ? options.motionConfig.rapid : options.duration;
        options.easing = options.motionConfig.linear || [];

        this.fadeTo = this.element.opacity();
        this.element.opacity(0);
    }

    step(pos) {
        this.element.opacity(pos * this.fadeTo);
    }
}

setDefaultOptions(FadeInAnimation, {
    motionConfig: {}
});

draw.AnimationFactory.current.register(FADEIN, FadeInAnimation);

export default FadeInAnimation;