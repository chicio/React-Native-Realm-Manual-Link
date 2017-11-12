//
//  ViewController.m
//  ReactNativeRealmManualLink
//
//  Created by Fabrizio Duroni on 12.11.17.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"ReactNativeRealmScreen"
                         initialProperties: nil
                             launchOptions: nil];
    self.view = rootView;
}

@end
