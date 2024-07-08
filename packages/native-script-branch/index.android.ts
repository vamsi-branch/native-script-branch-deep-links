import { NSBranchCommon } from './common';

declare const java: any;

const nsbranch = java.io.branch.nsbranch;

export class NSBranch extends NSBranchCommon {
  constructor(context: globalAndroid.content.Context) {
    super();
    console.log('calling constructor 1');
    new nsbranch.NSBranchModule(context);
  }

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

  public static setRequestMetadata(key: string, val: string): void {
    nsbranch.NSBranchModule.setRequestMetadata(key, val);
  }

  public disableTracking(disable: boolean): void {
    nsbranch.NSBranchModule.disableTracking(disable);
  }

  public isTrackingDisabled(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const result = nsbranch.NSBranchModule.isTrackingDisabled();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public setIdentity(identity: string): void {
    nsbranch.NSBranchModule.setIdentity(identity);
  }
}
