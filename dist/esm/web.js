import { WebPlugin } from '@capacitor/core';
export class ASWebAuthSessionWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async startSession(options) {
        console.log('Starting Auth Session with URL:', options.urlString);
        return { result: 'Result: Authentication completed' };
    }
    async cancelSession() {
        console.log('Cancelling Auth session');
        return { message: 'Authentication session cancelled' };
    }
}
//# sourceMappingURL=web.js.map