import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CustomMap } from './custom-map';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

export enum IconEnum {
  play,
  pause,
  arrowLeft,
  arrowRight,
}

export namespace IconEnum {
  export const value = new CustomMap<IconEnum, IconDefinition>([
    [IconEnum.play, faPlay],
    [IconEnum.pause, faPause],
    [IconEnum.arrowLeft, faCircleArrowLeft],
    [IconEnum.arrowRight, faCircleArrowRight],
  ]);
}
