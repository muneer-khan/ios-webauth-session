import Foundation
import AuthenticationServices

@objc public class ASWebAuthSession: NSObject, ASWebAuthenticationPresentationContextProviding {
    
    var resultCallback: ((URL?, Error?) -> Void)?
    var authSession: ASWebAuthenticationSession?

    
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    @objc public func startAuthSession(_ urlString: String, returnUrlScheme: String, resultCallback: @escaping (String) -> Void) {
        guard let url = URL(string: urlString) else {
            resultCallback("Invalid URL")
            return
        }
        
        self.resultCallback = { url, error in
            if let error = error {
                resultCallback("Error: \(error.localizedDescription)")
            } else if let url = url {
                resultCallback("Success: \(url.absoluteString)")
            }
        }
        
        // Create the ASWebAuthenticationSession
        DispatchQueue.main.async {
            self.authSession = ASWebAuthenticationSession(url: url, callbackURLScheme: returnUrlScheme) { (callbackURL, error) in
                self.resultCallback?(callbackURL, error)
            }
            
            self.authSession?.prefersEphemeralWebBrowserSession = true
            self.authSession?.presentationContextProvider = self
            self.authSession?.start()
            
        }
    }
    
    @objc public func cancelAuthSession() {
        DispatchQueue.main.async {
            self.authSession?.cancel()
            self.authSession = nil
        }
    }

    public func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return ASPresentationAnchor()
    }
}