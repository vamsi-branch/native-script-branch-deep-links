import { Application, Utils, android as androidApp } from '@nativescript/core';
import { NSBranchCommon } from './common';

export class NSBranchModule extends NSBranchCommon {
  private static branchInstance: any = null; // Using 'any' to bypass type errors
  private static branchInstancePromise: Promise<any> | null = null; // Using 'any' to bypass type errors

  static getAutoInstance(context: any): Promise<any> {
    // 'any' type for context; adjust as per actual context type
    if (NSBranchModule.branchInstance) {
      return Promise.resolve(NSBranchModule.branchInstance);
    }

    if (NSBranchModule.branchInstancePromise) {
      return NSBranchModule.branchInstancePromise;
    }

    const promise = new Promise<any>((resolve, reject) => {
      // 'any' type for instance; adjust as per actual type
      try {
        const instance = io.branch.referral.Branch.getAutoInstance(context);
        NSBranchModule.branchInstance = instance;
        resolve(instance);
      } catch (error) {
        reject(error);
      }
    });

    NSBranchModule.branchInstancePromise = promise;
    return promise;
  }

  static sessionBuilder(activity: any, config: any = {}): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if activity is provided
      if (!activity) {
        reject(new Error('Activity is required for Branch initialization'));
        return;
      }

      // Create the session builder
      const initSessionBuilder = io.branch.referral.Branch.sessionBuilder(activity)
        .withCallback(
          new io.branch.referral.Branch.BranchUniversalReferralInitListener({
            onInitFinished: (universalObject: any, linkProperties: any, error: any) => {
              if (error) {
                console.error('Error initializing Branch:', error.getMessage());
                reject(error);
              } else {
                // Branch session initialized successfully
                console.log('Branch session initialized!');
                resolve();
              }
            },
          })
        )
        .withData(activity.getIntent().getData()); // Assuming you want to handle deep links

      // Optionally set ignoreIntent
      if (config.ignoreIntent !== undefined) {
        initSessionBuilder.ignoreIntent(config.ignoreIntent);
      }

      // Optionally set delay
      if (config.delay !== undefined) {
        initSessionBuilder.withDelay(config.delay);
      }

      // Initialize the session
      initSessionBuilder.init();
    });
  }
}

interface BranchSessionConfig {
  ignoreIntent?: boolean;
  delay?: number;
}
