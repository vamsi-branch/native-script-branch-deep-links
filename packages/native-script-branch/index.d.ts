import { NSBranchCommon } from './common';
import { NSBranch } from './index.android';

export class NSBranch extends NSBranchCommon {
  getBranchInstance(context: globalAndroid.content.Context): Promise<io.branch.referral.Branch | null>;
  enableLogging(): void;
  // setIdentity(userId: string): void;
  // getLatestReferringParams(): any;
  // shareLink(activity: any, branchUniversalObject: any, linkProperties: any, message: string, shareText: string): void;
  // registerView(branchUniversalObject: any): void;
  // logout(): void;
}
