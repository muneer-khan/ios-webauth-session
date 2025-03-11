import { registerPlugin } from '@capacitor/core';
const ASWebAuthSession = registerPlugin('ASWebAuthSession', {
    web: () => import('./web').then((m) => new m.ASWebAuthSessionWeb()),
});
export * from './definitions';
export { ASWebAuthSession };
//# sourceMappingURL=index.js.map