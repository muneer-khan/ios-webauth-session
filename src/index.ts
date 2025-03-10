import { registerPlugin } from '@capacitor/core';

import type { ASWebAuthSessionPlugin } from './definitions';

const ASWebAuthSession = registerPlugin<ASWebAuthSessionPlugin>('ASWebAuthSession', {
  web: () => import('./web').then((m) => new m.ASWebAuthSessionWeb()),
});

export * from './definitions';
export { ASWebAuthSession };
