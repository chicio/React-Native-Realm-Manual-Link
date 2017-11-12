source 'https://github.com/CocoaPods/Specs.git'

platform :ios, '10.0'

react_native_path = 'React/node_modules/react-native'

target 'ReactNativeRealmManualLink' do
  pod 'yoga', :path => react_native_path + '/ReactCommon/yoga'
  pod 'DoubleConversion', :podspec => react_native_path + '/third-party-podspecs/DoubleConversion.podspec'
  pod 'GLog', :podspec => react_native_path + '/third-party-podspecs/GLog.podspec'
  pod 'Folly', :podspec => react_native_path + '/third-party-podspecs/Folly.podspec'
  pod 'React', :path => react_native_path, :subspecs => [
    'Core',
    'CxxBridge', 
    'DevSupport', 
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket'
  ]

end
