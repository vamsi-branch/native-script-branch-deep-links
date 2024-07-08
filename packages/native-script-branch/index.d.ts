import { NSBranchCommon } from './common';
import { NSBranch } from './index.android';

export class NSBranch extends NSBranchCommon {
  static getAutoInstance(context: globalAndroid.content.Context): void;
  static reInitSession(activity: globalAndroid.app.Activity): void;
  // initSession(uri: android.net.Uri, activity: globalAndroid.app.Activity, anInitListener: io.branch.referral.Branch.BranchUniversalReferralInitListener): void;
  static initSession(uri: android.net.Uri, activity: globalAndroid.app.Activity): void;
  static enableLogging(): void;
}
