// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "PalainteractiveIosWebauthSession",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "PalainteractiveIosWebauthSession",
            targets: ["ASWebAuthSessionPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "ASWebAuthSessionPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ASWebAuthSessionPlugin"),
        .testTarget(
            name: "ASWebAuthSessionPluginTests",
            dependencies: ["ASWebAuthSessionPlugin"],
            path: "ios/Tests/ASWebAuthSessionPluginTests")
    ]
)