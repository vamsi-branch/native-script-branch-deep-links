import { NSBranchCommon } from './common';

declare const java: any;

const nsbranch = java.io.branch.nsbranch;

export class NSBranch extends NSBranchCommon {
  public static getAutoInstance(context: globalAndroid.content.Context): void {
    nsbranch.NSBranchModule.getAutoInstance(context);
  }

  public static reInitSession(activity: globalAndroid.app.Activity): void {
    nsbranch.NSBranchModule.reInitSession(activity);
  }

  // // public initSession(uri: android.net.Uri, activity: globalAndroid.app.Activity, anInitListener: io.branch.referral.Branch.BranchUniversalReferralInitListener): void{
  // //   this.nsBranch.initSession(uri,activity,anInitListener);
  // // }

  public static initSession(uri: android.net.Uri, activity: globalAndroid.app.Activity): void {
    nsbranch.NSBranchModule.initSession(uri, activity);
  }

  public static enableLogging() {
    nsbranch.NSBranchModule.enableLogging();
  }
}
