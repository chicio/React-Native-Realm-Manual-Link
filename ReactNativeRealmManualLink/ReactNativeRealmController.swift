//
//  Test.swift
//  ReactNativeRealmManualLink
//
//  Created by Fabrizio Duroni on 13.11.17.
//

import Foundation
import UIKit
import React

class ReactNativeRealmController: UIViewController {
    override func viewDidLoad() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        view = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "ReactNativeRealmScreen",
            initialProperties: nil,
            launchOptions: nil
        )
    }
}
