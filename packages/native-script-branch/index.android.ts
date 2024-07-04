import { NSBranchCommon } from './common';

declare var io: any;
const Branch = io.branch.referral.Branch;

export class NSBranch extends NSBranchCommon {
  private static readonly EVENT_INIT: string = 'init';
  private static readonly EVENT_INIT_ERROR: string = 'initError';

  public getBranchInstance(context: globalAndroid.content.Context): io.branch.referral.Branch | null {
    Branch.registerPlugin('NativeScript', '1.0.0');

    const isUnlocked = this.isUserUnlocked(context);

    if (isUnlocked) {
      return Branch.getAutoInstance(context);
    }

    return null;
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
