import { Application } from '@nativescript/core';
import { NSBranchCommon } from './common';

declare const io: any;

const Branch = io.branch.referral.Branch;

export class NSBranch extends NSBranchCommon {
  private readonly EVENT_INIT: string = 'init';
  private readonly EVENT_INIT_ERROR: string = 'initError';
  private _callback: any = new Branch.BranchReferralInitListener({
    onInitFinished: (referringParams: any, error: any) => {
      if (error === null) {
        this.notify({
          eventName: this.EVENT_INIT,
          object: this,
          data: { referringParams },
        });
      } else {
        this.sendError(error.getMessage());
      }
    },
  });

  constructor() {
    super();
  }

  public getBranchInstance(context: globalAndroid.content.Context): any {
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

  public handleOnStart(context: android.content.Context) {
    const intent = Application.android.startActivity.getIntent();
    const data = intent ? intent.getData() : null;
    const branch = this.getBranchInstance(context);
    if (branch != null) {
      Branch.sessionBuilder(Application.android.foregroundActivity).withCallback(this._callback).withData(data).init();
    }
  }

  // Example: Handle new intent
  public handleOnNewIntent(intent: any) {
    Application.android.on('activityNewIntent', (args: any) => {
      const newIntent = args.activity.getIntent();
      if (newIntent) {
        args.activity.setIntent(newIntent);
        Branch.sessionBuilder(Application.android.foregroundActivity).withCallback(this._callback).reInit();
      }
    });
  }
  private sendError(error: string) {
    this.notify({
      eventName: this.EVENT_INIT_ERROR,
      object: this,
      data: { error },
    });
  }
}
