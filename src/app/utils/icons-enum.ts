import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CustomMap } from './custom-map';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export enum IconEnum {
  play,
  pause,
}

export namespace IconEnum {
  export const value = new CustomMap<IconEnum, IconDefinition>([
    [IconEnum.play, faPlay],
    [IconEnum.pause, faPause],
  ]);
}
