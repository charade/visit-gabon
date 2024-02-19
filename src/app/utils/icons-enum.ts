import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CustomMap } from './custom-map';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export enum IconEnum {
  arrowUp = 1,
  arrowDown,
}

export namespace IconEnum {
  export const value = new CustomMap<IconEnum, IconDefinition>([
    [IconEnum.arrowDown, faArrowDown],
    [IconEnum.arrowUp, faArrowUp],
  ]);
}
