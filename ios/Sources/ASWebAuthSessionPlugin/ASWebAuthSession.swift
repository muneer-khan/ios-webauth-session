import Foundation

@objc public class ASWebAuthSession: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
