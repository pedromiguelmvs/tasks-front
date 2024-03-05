import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AppAnimationCurves, AppAnimationDurations } from './defaults';

const expandCollapse = trigger('expandCollapse', [
  state(
    'void, collapsed',
    style({
      height: '0',
    })
  ),

  state('*, expanded', style('*')),

  transition('void <=> false, collapsed <=> false, expanded <=> false', []),

  transition('void <=> *, collapsed <=> expanded', animate('{{timings}}'), {
    params: {
      timings: `${AppAnimationDurations.entering} ${AppAnimationCurves.deceleration}`,
    },
  }),
]);

export { expandCollapse };
