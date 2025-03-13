import { WebPlugin } from '@capacitor/core';

import type { ASWebAuthSessionPlugin } from './definitions';

export class ASWebAuthSessionWeb extends WebPlugin implements ASWebAuthSessionPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async startSession(options: { urlString: string, returnUrlScheme: string }): Promise<{ result: string }> {
    console.log('Starting Auth Session with URL:', options.urlString);
    return { result: 'Result: Authentication completed' };
  }

  async cancelSession(): Promise<{ message: string }>{
    console.log('Cancelling Auth session');
    return { message: 'Authentication session cancelled' };
  }
}
