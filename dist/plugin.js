var capacitorASWebAuthSession = (function (exports, core) {
    'use strict';

    const ASWebAuthSession = core.registerPlugin('ASWebAuthSession', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.ASWebAuthSessionWeb()),
    });

    class ASWebAuthSessionWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ASWebAuthSessionWeb: ASWebAuthSessionWeb
    });

    exports.ASWebAuthSession = ASWebAuthSession;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
