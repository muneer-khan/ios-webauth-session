import { WebPlugin } from '@capacitor/core';

import type { ASWebAuthSessionPlugin } from './definitions';

export class ASWebAuthSessionWeb extends WebPlugin implements ASWebAuthSessionPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
