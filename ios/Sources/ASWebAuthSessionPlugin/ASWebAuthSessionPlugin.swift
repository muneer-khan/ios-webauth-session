import Foundation
import Capacitor

@objc(ASWebAuthSessionPlugin)
public class ASWebAuthSessionPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ASWebAuthSessionPlugin"
    public let jsName = "ASWebAuthSession"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "startSession", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "cancelSession", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = ASWebAuthSession()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    // New method to handle VIP Connect Authentication
    @objc func startSession(_ call: CAPPluginCall) {
        let urlString = call.getString("urlString") ?? ""
        let returnUrlScheme = call.getString("returnUrlScheme") ?? ""

        // Call the native method to start the authentication
        implementation.startAuthSession(urlString, returnUrlScheme: returnUrlScheme) { (result) in
            call.resolve([
                "result": result
            ])
        }
    }
    
    @objc func cancelSession(_ call: CAPPluginCall) {
        implementation.cancelAuthSession()
        call.resolve(["message": "Session cancelled"])
    }
}