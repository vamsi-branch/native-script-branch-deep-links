import { NativeScriptBranchCommon } from './common';
import { NSBranchModule } from './index.android';

export declare namespace nsbranch {
  interface BranchSessionConfig {
    ignoreIntent?: boolean;
    delay?: number;
  }

  class NSBranchModule {
    static sessionBuilder(activity: any, config?: BranchSessionConfig): Promise<void>;
  }
}

export { NSBranchModule };
