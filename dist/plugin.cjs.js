'use strict';

var core = require('@capacitor/core');

const ASWebAuthSession = core.registerPlugin('ASWebAuthSession', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.ASWebAuthSessionWeb()),
});

class ASWebAuthSessionWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ASWebAuthSessionWeb: ASWebAuthSessionWeb
});

exports.ASWebAuthSession = ASWebAuthSession;
//# sourceMappingURL=plugin.cjs.js.map
