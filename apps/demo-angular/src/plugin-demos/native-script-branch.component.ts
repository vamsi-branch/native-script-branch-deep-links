import { Component, NgZone } from '@angular/core';
import { DemoSharedNativeScriptBranch } from '@demo/shared';
import {} from 'native-script-branch';

@Component({
  selector: 'demo-native-script-branch',
  templateUrl: 'native-script-branch.component.html',
})
export class NativeScriptBranchComponent {
  demoShared: DemoSharedNativeScriptBranch;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativeScriptBranch();
  }
}
