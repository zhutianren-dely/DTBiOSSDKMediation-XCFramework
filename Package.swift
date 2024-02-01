// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "DTBiOSSDK",
    products: [
        .library(
            name: "DTBiOSSDK",
            targets: ["DTBiOSSDK"]
        ),
    ],
    targets: [
        .binaryTarget(
            name: "DTBiOSSDK",
            path: "./DTBiOSSDK.xcframework"
        ),
    ]
)