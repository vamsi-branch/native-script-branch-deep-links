import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativeScriptBranchComponent } from './native-script-branch.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativeScriptBranchComponent }])],
  declarations: [NativeScriptBranchComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptBranchModule {}
