import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AppAnimationCurves,
  AppAnimationDurations,
} from '@app/animations/defaults';

const fadeIn = trigger('fadeIn', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),

  state(
    '*',
    style({
      opacity: 1,
    })
  ),

  transition('void => false', []),

  transition('void => *', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.entering} ${AppAnimationCurves.deceleration}`,
    },
  }),
]);

const fadeInTop = trigger('fadeInTop', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
    })
  ),

  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  transition('void => false', []),

  transition('void => *', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.entering} ${AppAnimationCurves.deceleration}`,
    },
  }),
]);

const fadeInBottom = trigger('fadeInBottom', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
    })
  ),

  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  transition('void => false', []),

  transition('void => *', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.entering} ${AppAnimationCurves.deceleration}`,
    },
  }),
]);

const fadeInLeft = trigger('fadeInLeft', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)',
    })
  ),

  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  transition('void => false', []),

  transition('void => *', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.entering} ${AppAnimationCurves.deceleration}`,
    },
  }),
]);

const fadeInRight = trigger('fadeInRight', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    })
  ),

  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  transition('void => false', []),

  transition('void => *', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.entering} ${AppAnimationCurves.deceleration}`,
    },
  }),
]);

const fadeOut = trigger('fadeOut', [
  state(
    '*',
    style({
      opacity: 1,
    })
  ),

  state(
    'void',
    style({
      opacity: 0,
    })
  ),

  transition('false => void', []),

  transition('* => void', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.exiting} ${AppAnimationCurves.acceleration}`,
    },
  }),
]);

const fadeOutTop = trigger('fadeOutTop', [
  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
    })
  ),

  transition('false => void', []),

  transition('* => void', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.exiting} ${AppAnimationCurves.acceleration}`,
    },
  }),
]);

const fadeOutBottom = trigger('fadeOutBottom', [
  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
    })
  ),

  transition('false => void', []),

  transition('* => void', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.exiting} ${AppAnimationCurves.acceleration}`,
    },
  }),
]);

const fadeOutLeft = trigger('fadeOutLeft', [
  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)',
    })
  ),

  transition('false => void', []),

  transition('* => void', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.exiting} ${AppAnimationCurves.acceleration}`,
    },
  }),
]);

const fadeOutRight = trigger('fadeOutRight', [
  state(
    '*',
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    })
  ),

  state(
    'void',
    style({
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    })
  ),

  transition('false => void', []),

  transition('* => void', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.exiting} ${AppAnimationCurves.acceleration}`,
    },
  }),
]);

export {
  fadeIn,
  fadeInTop,
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutTop,
  fadeOutBottom,
  fadeOutLeft,
  fadeOutRight,
};
