import { CustomMap } from './custom-map';

export enum UserAgent {
  Firefox = 'firefox',
}
export namespace UserAgent {
  export const navigator = new CustomMap<UserAgent, string>([
    [UserAgent.Firefox, 'firefox'],
  ]);
}
