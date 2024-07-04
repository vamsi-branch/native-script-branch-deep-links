import { NSBranchCommon } from './common';

const Branch = io.branch.referral.Branch;

export class NSBranch extends NSBranchCommon {
  private static readonly EVENT_INIT: string = 'init';
  private static readonly EVENT_INIT_ERROR: string = 'initError';
  
  public getBranchInstance(context: globalAndroid.content.Context): Promise<io.branch.referral.Branch | null> {
    return new Promise((resolve, reject) => {
      try {
        Branch.registerPlugin('NativeScript', '1.0.0');
        const isUnlocked = this.isUserUnlocked(context);

        if (isUnlocked) {
          resolve(Branch.getAutoInstance(context));
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  private isUserUnlocked(context: android.content.Context): boolean {
    // Implementation of user unlock check
    const keyguardManager = context.getSystemService(android.content.Context.KEYGUARD_SERVICE) as android.app.KeyguardManager;
    return !keyguardManager.isDeviceLocked();
  }

  public enableLogging(): void {
    Branch.enableLogging();
  }
}
