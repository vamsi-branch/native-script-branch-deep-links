import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativeScriptBranch } from '@demo/shared';
import {} from 'native-script-branch';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativeScriptBranch {}
