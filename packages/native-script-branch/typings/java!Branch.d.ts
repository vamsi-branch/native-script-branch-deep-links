declare namespace java {
  declare namespace io {
    export namespace branch {
      export namespace nsbranch {
        export class NSBranchModule {
          constructor(context: globalAndroid.content.Context);
          static getAutoInstance(context: globalAndroid.content.Context): void;
          static reInitSession(activity: globalAndroid.app.Activity): void;
          //initSession(uri: android.net.Uri, activity: globalAndroid.app.Activity, anInitListener: io.branch.referral.Branch.BranchUniversalReferralInitListener): void;
          static initSession(uri: android.net.Uri, activity: globalAndroid.app.Activity): void;
          static onNewIntent(intent: globalAndroid.content.Intent): void;
          static enableLogging(): void;
          static setRequestMetadata(key: string, val: string): void;
          disableTracking(disable: boolean): void;
          isTrackingDisabled(): boolean;
          // getLatestReferringParams: (synchronous?: boolean) => Promise<BranchParams>;
          // getFirstReferringParams: () => Promise<BranchParams>;
          // lastAttributedTouchData: (
          //   attributionWindow?: number
          // ) => Promise<BranchParams>;
          setIdentity(identity: string): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module data {
      export class InstallReferrerResult {
        public static class: java.lang.Class<io.branch.data.InstallReferrerResult>;
        public getLatestClickTimestamp(): number;
        public component4(): number;
        public component1(): string;
        public component2(): number;
        public constructor(param0: string, param1: number, param2: string, param3: number, param4: boolean);
        public component5(): boolean;
        public getLatestInstallTimestamp(): number;
        public toString(): string;
        public getAppStore(): string;
        public setClickThrough(param0: boolean): void;
        public setLatestRawReferrer(param0: string): void;
        public component3(): string;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public setLatestInstallTimestamp(param0: number): void;
        public getLatestRawReferrer(): string;
        public isClickThrough(): boolean;
        public copy(param0: string, param1: number, param2: string, param3: number, param4: boolean): io.branch.data.InstallReferrerResult;
        public setAppStore(param0: string): void;
        public setLatestClickTimestamp(param0: number): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module indexing {
      export class BranchUniversalObject {
        public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
        public getImageUrl(): string;
        public generateShortUrl(param0: globalAndroid.content.Context, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.Branch.BranchLinkCreateListener, param3: boolean): void;
        public isPublicallyIndexable(): boolean;
        public isLocallyIndexable(): boolean;
        public convertToJson(): org.json.JSONObject;
        public addKeyWord(param0: string): io.branch.indexing.BranchUniversalObject;
        /** @deprecated */
        public getPrice(): number;
        /** @deprecated */
        public getCurrencyType(): string;
        public setLocalIndexMode(param0: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE): io.branch.indexing.BranchUniversalObject;
        public getDescription(): string;
        /** @deprecated */
        public getMetadata(): java.util.HashMap<string, string>;
        public static getReferredBranchUniversalObject(): io.branch.indexing.BranchUniversalObject;
        public constructor();
        public setCanonicalUrl(param0: string): io.branch.indexing.BranchUniversalObject;
        public getCanonicalIdentifier(): string;
        /** @deprecated */
        public setContentType(param0: string): io.branch.indexing.BranchUniversalObject;
        public getCanonicalUrl(): string;
        public setContentMetadata(param0: io.branch.referral.util.ContentMetadata): io.branch.indexing.BranchUniversalObject;
        public getShortUrl(param0: globalAndroid.content.Context, param1: io.branch.referral.util.LinkProperties): string;
        public setContentIndexingMode(param0: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE): io.branch.indexing.BranchUniversalObject;
        public getContentMetadata(): io.branch.referral.util.ContentMetadata;
        /** @deprecated */
        public setPrice(param0: number, param1: io.branch.referral.util.CurrencyType): io.branch.indexing.BranchUniversalObject;
        public setContentImageUrl(param0: string): io.branch.indexing.BranchUniversalObject;
        public setCanonicalIdentifier(param0: string): io.branch.indexing.BranchUniversalObject;
        public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        /** @deprecated */
        public addContentMetadata(param0: java.util.HashMap<string, string>): io.branch.indexing.BranchUniversalObject;
        public static createInstance(param0: org.json.JSONObject): io.branch.indexing.BranchUniversalObject;
        public generateShortUrl(param0: globalAndroid.content.Context, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.Branch.BranchLinkCreateListener): void;
        /** @deprecated */
        public showShareSheet(param0: globalAndroid.app.Activity, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.util.ShareSheetStyle, param3: io.branch.referral.Branch.BranchLinkShareListener, param4: io.branch.referral.Branch.IChannelProperties): void;
        public registerView(): void;
        /** @deprecated */
        public getType(): string;
        public setContentExpiration(param0: java.util.Date): io.branch.indexing.BranchUniversalObject;
        public getKeywords(): java.util.ArrayList<string>;
        public getExpirationTime(): number;
        public getTitle(): string;
        public addKeyWords(param0: java.util.ArrayList<string>): io.branch.indexing.BranchUniversalObject;
        public setContentDescription(param0: string): io.branch.indexing.BranchUniversalObject;
        /** @deprecated */
        public addContentMetadata(param0: string, param1: string): io.branch.indexing.BranchUniversalObject;
        public setTitle(param0: string): io.branch.indexing.BranchUniversalObject;
        public getKeywordsJsonArray(): org.json.JSONArray;
        public describeContents(): number;
        /** @deprecated */
        public showShareSheet(param0: globalAndroid.app.Activity, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.util.ShareSheetStyle, param3: io.branch.referral.Branch.BranchLinkShareListener): void;
        public registerView(param0: io.branch.indexing.BranchUniversalObject.RegisterViewStatusListener): void;
        public getShortUrl(param0: globalAndroid.content.Context, param1: io.branch.referral.util.LinkProperties, param2: boolean): string;
      }
      export module BranchUniversalObject {
        export class CONTENT_INDEX_MODE {
          public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE>;
          public static PUBLIC: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE;
          public static PRIVATE: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE;
          public static valueOf(param0: string): io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE;
          public static values(): androidNative.Array<io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE>;
        }
        export class LinkShareListenerWrapper extends io.branch.referral.Branch.BranchLinkShareListener {
          public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject.LinkShareListenerWrapper>;
          public onShareLinkDialogLaunched(): void;
          public onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void;
          public onShareLinkDialogDismissed(): void;
          public onChannelSelected(param0: string): void;
        }
        export class RegisterViewStatusListener {
          public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject.RegisterViewStatusListener>;
          /**
           * Constructs a new instance of the io.branch.indexing.BranchUniversalObject$RegisterViewStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRegisterViewFinished(param0: boolean, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onRegisterViewFinished(param0: boolean, param1: io.branch.referral.BranchError): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module interfaces {
      export class IBranchLoggingCallbacks {
        public static class: java.lang.Class<io.branch.interfaces.IBranchLoggingCallbacks>;
        /**
         * Constructs a new instance of the io.branch.interfaces.IBranchLoggingCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onBranchLog(param0: string, param1: string): void });
        public constructor();
        public onBranchLog(param0: string, param1: string): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module receivers {
      export class SharingBroadcastReceiver {
        public static class: java.lang.Class<io.branch.receivers.SharingBroadcastReceiver>;
        public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class AnimatedDialog {
        public static class: java.lang.Class<io.branch.referral.AnimatedDialog>;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public cancel(): void;
        public setContentView(param0: number): void;
        public constructor(param0: globalAndroid.content.Context, param1: boolean);
        public show(): void;
        public setDialogWindowAttributes(): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ApkParser {
        public static class: java.lang.Class<io.branch.referral.ApkParser>;
        public decompressXMLForValidator(param0: androidNative.Array<number>, param1: globalAndroid.content.Context): org.json.JSONObject;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class AppStoreReferrer {
        public static class: java.lang.Class<io.branch.referral.AppStoreReferrer>;
        public static getInstallationID(): string;
        public static processReferrerInfo(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: string, param5: java.lang.Boolean): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class Base64 {
        public static class: java.lang.Class<io.branch.referral.Base64>;
        public static DEFAULT: number;
        public static NO_PADDING: number;
        public static NO_WRAP: number;
        public static CRLF: number;
        public static URL_SAFE: number;
        public static NO_CLOSE: number;
        public static encode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
        public static decode(param0: string, param1: number): androidNative.Array<number>;
        public static decode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
        public static encode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
        public static encodeToString(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): string;
        public static decode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
        public static encodeToString(param0: androidNative.Array<number>, param1: number): string;
      }
      export module Base64 {
        export abstract class Coder {
          public static class: java.lang.Class<io.branch.referral.Base64.Coder>;
          public output: androidNative.Array<number>;
          public op: number;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
          public maxOutputSize(param0: number): number;
        }
        export class Decoder extends io.branch.referral.Base64.Coder {
          public static class: java.lang.Class<io.branch.referral.Base64.Decoder>;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
          public maxOutputSize(param0: number): number;
          public constructor(param0: number, param1: androidNative.Array<number>);
        }
        export class Encoder extends io.branch.referral.Base64.Coder {
          public static class: java.lang.Class<io.branch.referral.Base64.Encoder>;
          public static LINE_GROUPS: number;
          public do_padding: boolean;
          public do_newline: boolean;
          public do_cr: boolean;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
          public maxOutputSize(param0: number): number;
          public constructor(param0: number, param1: androidNative.Array<number>);
        }
      }
    }
  }
}

// declare module io {
// 	export module branch {
// 		export module referral {
// 			export class BillingGooglePlay {
// 				public static class: java.lang.Class<io.branch.referral.BillingGooglePlay>;
// 				public billingClient: com.android.billingclient.api.BillingClient;
// 				public setBillingClient(param0: com.android.billingclient.api.BillingClient): void;
// 				public getBillingClient(): com.android.billingclient.api.BillingClient;
// 				public startBillingClient(param0: any<any,any>): void;
// 				public createAndLogEventForPurchase(param0: globalAndroid.content.Context, param1: com.android.billingclient.api.Purchase, param2: java.util.List<any>, param3: io.branch.referral.util.CurrencyType, param4: number, param5: string): void;
// 				public logEventWithPurchase(param0: globalAndroid.content.Context, param1: com.android.billingclient.api.Purchase): void;
// 			}
// 			export module BillingGooglePlay {
// 				export class Companion {
// 					public static class: java.lang.Class<io.branch.referral.BillingGooglePlay.Companion>;
// 					public getInstance(): io.branch.referral.BillingGooglePlay;
// 				}
// 			}
// 		}
// 	}
// }

declare module io {
  export module branch {
    export module referral {
      export class Branch {
        public static class: java.lang.Class<io.branch.referral.Branch>;
        public static FEATURE_TAG_SHARE: string;
        public static REDIRECT_DESKTOP_URL: string;
        public static REDIRECT_ANDROID_URL: string;
        public static REDIRECT_IOS_URL: string;
        public static REDIRECT_IPAD_URL: string;
        public static REDIRECT_FIRE_URL: string;
        public static REDIRECT_BLACKBERRY_URL: string;
        public static REDIRECT_WINDOWS_PHONE_URL: string;
        public static OG_TITLE: string;
        public static OG_DESC: string;
        public static OG_IMAGE_URL: string;
        public static OG_VIDEO: string;
        public static OG_URL: string;
        public static OG_APP_ID: string;
        public static DEEPLINK_PATH: string;
        public static ALWAYS_DEEPLINK: string;
        public static LINK_TYPE_UNLIMITED_USE: number;
        public static LINK_TYPE_ONE_TIME_USE: number;
        public static _userAgentString: string;
        public requestQueue_: io.branch.referral.ServerRequestQueue;
        public closeRequestNeeded: boolean;
        public static installDeveloperId: string;
        public static isInstantApp(param0: globalAndroid.content.Context): boolean;
        public static isReferringLinkAttributionForPreinstalledAppsEnabled(): boolean;
        public getApplicationContext(): globalAndroid.content.Context;
        public static getPluginVersion(): string;
        public static enableLogging(): void;
        public share(param0: globalAndroid.app.Activity, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties, param3: io.branch.referral.Branch.BranchNativeLinkShareListener, param4: string, param5: string): void;
        public static registerPlugin(param0: string, param1: string): void;
        public static getAutoInstance(param0: globalAndroid.content.Context): io.branch.referral.Branch;
        public cancelShareLinkDialog(param0: boolean): void;
        /** @deprecated */
        public static enableForcedSession(): void;
        public static showInstallPrompt(param0: globalAndroid.app.Activity, param1: number, param2: string): boolean;
        public static enableLogging(param0: io.branch.interfaces.IBranchLoggingCallbacks): void;
        public getLastAttributedTouchData(param0: io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener, param1: number): void;
        public setInstantDeepLinkPossible(param0: boolean): void;
        public static setAPIUrl(param0: string): void;
        public isTrackingDisabled(): boolean;
        public static isWaitingForIntent(): boolean;
        public static getAutoInstance(param0: globalAndroid.content.Context, param1: string): io.branch.referral.Branch;
        public getDeeplinkDebugParams(): org.json.JSONObject;
        public addWhiteListedScheme(param0: string): io.branch.referral.Branch;
        public static getSdkVersionNumber(): string;
        public disableAdNetworkCallouts(param0: boolean): void;
        /** @deprecated */
        public static disableForcedSession(): void;
        public getLatestReferringParamsSync(): org.json.JSONObject;
        public setReferrerGclidValidForWindow(param0: number): void;
        public static isAutoDeepLinkLaunch(param0: globalAndroid.app.Activity): boolean;
        public getLastAttributedTouchData(param0: io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener): void;
        public getDeviceInfo(): io.branch.referral.DeviceInfo;
        /** @deprecated */
        public static isForceSessionEnabled(): boolean;
        public setNetworkTimeout(param0: number): void;
        public addInstallMetadata(param0: string, param1: string): io.branch.referral.Branch;
        public notifyNetworkAvailable(): void;
        public static setReferringLinkAttributionForPreinstalledAppsEnabled(): void;
        public addSnapPartnerParameterWithName(param0: string, param1: string): void;
        public removeSessionInitializationDelay(): void;
        public setDeepLinkDebugMode(param0: org.json.JSONObject): void;
        public setWhiteListedSchemes(param0: java.util.List<string>): io.branch.referral.Branch;
        public static disableInstantDeepLinking(param0: boolean): void;
        public setRetryInterval(param0: number): void;
        public setNoConnectionRetryMax(param0: number): void;
        public registerView(param0: io.branch.indexing.BranchUniversalObject, param1: io.branch.indexing.BranchUniversalObject.RegisterViewStatusListener): void;
        public getFirstReferringParamsSync(): org.json.JSONObject;
        public static enableTestMode(): void;
        public static showInstallPrompt(param0: globalAndroid.app.Activity, param1: number): boolean;
        public logEventWithPurchase(param0: globalAndroid.content.Context, param1: com.android.billingclient.api.Purchase): void;
        public static setFBAppID(param0: string): void;
        public setNetworkConnectTimeout(param0: number): void;
        public isInstantDeepLinkPossible(): boolean;
        public setBranchRemoteInterface(param0: io.branch.referral.network.BranchRemoteInterface): void;
        public disableTracking(param0: boolean): void;
        public static enableBypassCurrentActivityIntentState(): void;
        public getBranchQRCodeCache(): io.branch.referral.BranchQRCodeCache;
        public setLimitFacebookTracking(param0: boolean): void;
        public setPreinstallCampaign(param0: string): io.branch.referral.Branch;
        public static bypassWaitingForIntent(param0: boolean): void;
        public static disableTestMode(): void;
        public static notifyNativeToInit(): void;
        public setDMAParamsForEEA(param0: boolean, param1: boolean, param2: boolean): void;
        public disableTracking(param0: boolean, param1: io.branch.referral.Branch.TrackingStateCallback): void;
        public setIdentity(param0: string, param1: io.branch.referral.Branch.BranchReferralInitListener): void;
        public logout(param0: io.branch.referral.Branch.LogoutStatusListener): void;
        public static disableLogging(): void;
        public getLatestReferringParams(): org.json.JSONObject;
        public setIdentity(param0: string): void;
        public isUserIdentified(): boolean;
        public static disableDeviceIDFetch(param0: java.lang.Boolean): void;
        public clearPartnerParameters(): void;
        public setPreinstallPartner(param0: string): io.branch.referral.Branch;
        public setRequestMetadata(param0: string, param1: string): void;
        public getTrackingController(): io.branch.referral.TrackingController;
        public resetUserSession(): void;
        public static getIsUserAgentSync(): boolean;
        public static getInstance(): io.branch.referral.Branch;
        public static expectDelayedSessionInitialization(param0: boolean): void;
        public getFirstReferringParams(): org.json.JSONObject;
        public static setCDNBaseUrl(param0: string): void;
        /** @deprecated */
        public disableAppList(): void;
        public static sessionBuilder(param0: globalAndroid.app.Activity): io.branch.referral.Branch.InitSessionBuilder;
        public static useEUEndpoint(): void;
        public static isDeviceIDFetchDisabled(): boolean;
        public getBranchRemoteInterface(): io.branch.referral.network.BranchRemoteInterface;
        public setRetryCount(param0: number): void;
        public getBranchPluginSupport(): io.branch.referral.BranchPluginSupport;
        public static showInstallPrompt(param0: globalAndroid.app.Activity, param1: number, param2: io.branch.indexing.BranchUniversalObject): boolean;
        public static enableLogging(param0: io.branch.referral.BranchLogger.BranchLogLevel): void;
        public static bypassCurrentActivityIntentState(): boolean;
        public addFacebookPartnerParameterWithName(param0: string, param1: string): void;
        public logout(): void;
        public addUriHostsToSkip(param0: string): io.branch.referral.Branch;
        public static setIsUserAgentSync(param0: boolean): void;
      }
      export module Branch {
        export class BranchLinkCreateListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchLinkCreateListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchLinkCreateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onLinkCreate(param0: string, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onLinkCreate(param0: string, param1: io.branch.referral.BranchError): void;
        }
        export class BranchLinkShareListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchLinkShareListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchLinkShareListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onShareLinkDialogLaunched(): void; onShareLinkDialogDismissed(): void; onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void; onChannelSelected(param0: string): void });
          public constructor();
          public onShareLinkDialogLaunched(): void;
          public onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void;
          public onShareLinkDialogDismissed(): void;
          public onChannelSelected(param0: string): void;
        }
        export class BranchListResponseListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchListResponseListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchListResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceivingResponse(param0: org.json.JSONArray, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onReceivingResponse(param0: org.json.JSONArray, param1: io.branch.referral.BranchError): void;
        }
        export class BranchNativeLinkShareListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchNativeLinkShareListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchNativeLinkShareListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onLinkShareResponse(param0: string, param1: io.branch.referral.BranchError): void; onChannelSelected(param0: string): void });
          public constructor();
          public onLinkShareResponse(param0: string, param1: io.branch.referral.BranchError): void;
          public onChannelSelected(param0: string): void;
        }
        export class BranchReferralInitListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchReferralInitListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchReferralInitListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInitFinished(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onInitFinished(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void;
        }
        export class BranchReferralStateChangedListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchReferralStateChangedListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchReferralStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onStateChanged(param0: boolean, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onStateChanged(param0: boolean, param1: io.branch.referral.BranchError): void;
        }
        export class BranchUniversalReferralInitListener {
          public static class: java.lang.Class<io.branch.referral.Branch.BranchUniversalReferralInitListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$BranchUniversalReferralInitListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInitFinished(param0: io.branch.indexing.BranchUniversalObject, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.BranchError): void });
          public constructor();
          public onInitFinished(param0: io.branch.indexing.BranchUniversalObject, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.BranchError): void;
        }
        export class ExtendedBranchLinkShareListener extends io.branch.referral.Branch.BranchLinkShareListener {
          public static class: java.lang.Class<io.branch.referral.Branch.ExtendedBranchLinkShareListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$ExtendedBranchLinkShareListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onChannelSelected(param0: string, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties): boolean; onShareLinkDialogLaunched(): void; onShareLinkDialogDismissed(): void; onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void; onChannelSelected(param0: string): void });
          public constructor();
          public onShareLinkDialogLaunched(): void;
          public onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void;
          public onShareLinkDialogDismissed(): void;
          public onChannelSelected(param0: string, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties): boolean;
          public onChannelSelected(param0: string): void;
        }
        export class GetShortLinkTask extends globalAndroid.os.AsyncTask<io.branch.referral.ServerRequest, java.lang.Void, io.branch.referral.ServerResponse> {
          public static class: java.lang.Class<io.branch.referral.Branch.GetShortLinkTask>;
          public doInBackground(param0: androidNative.Array<io.branch.referral.ServerRequest>): io.branch.referral.ServerResponse;
        }
        export class IChannelProperties {
          public static class: java.lang.Class<io.branch.referral.Branch.IChannelProperties>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$IChannelProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getSharingTitleForChannel(param0: string): string; getSharingMessageForChannel(param0: string): string });
          public constructor();
          public getSharingTitleForChannel(param0: string): string;
          public getSharingMessageForChannel(param0: string): string;
        }
        export class INTENT_STATE {
          public static class: java.lang.Class<io.branch.referral.Branch.INTENT_STATE>;
          public static PENDING: io.branch.referral.Branch.INTENT_STATE;
          public static READY: io.branch.referral.Branch.INTENT_STATE;
          public static values(): androidNative.Array<io.branch.referral.Branch.INTENT_STATE>;
          public static valueOf(param0: string): io.branch.referral.Branch.INTENT_STATE;
        }
        export class InitSessionBuilder {
          public static class: java.lang.Class<io.branch.referral.Branch.InitSessionBuilder>;
          public withCallback(param0: io.branch.referral.Branch.BranchUniversalReferralInitListener): io.branch.referral.Branch.InitSessionBuilder;
          public withData(param0: globalAndroid.net.Uri): io.branch.referral.Branch.InitSessionBuilder;
          /** @deprecated */
          public isReferrable(param0: boolean): io.branch.referral.Branch.InitSessionBuilder;
          public withDelay(param0: number): io.branch.referral.Branch.InitSessionBuilder;
          public ignoreIntent(param0: boolean): io.branch.referral.Branch.InitSessionBuilder;
          public init(): void;
          public reInit(): void;
          public withCallback(param0: io.branch.referral.Branch.BranchReferralInitListener): io.branch.referral.Branch.InitSessionBuilder;
        }
        export class LogoutStatusListener {
          public static class: java.lang.Class<io.branch.referral.Branch.LogoutStatusListener>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$LogoutStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onLogoutFinished(param0: boolean, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onLogoutFinished(param0: boolean, param1: io.branch.referral.BranchError): void;
        }
        export class SESSION_STATE {
          public static class: java.lang.Class<io.branch.referral.Branch.SESSION_STATE>;
          public static INITIALISED: io.branch.referral.Branch.SESSION_STATE;
          public static INITIALISING: io.branch.referral.Branch.SESSION_STATE;
          public static UNINITIALISED: io.branch.referral.Branch.SESSION_STATE;
          public static valueOf(param0: string): io.branch.referral.Branch.SESSION_STATE;
          public static values(): androidNative.Array<io.branch.referral.Branch.SESSION_STATE>;
        }
        export class TrackingStateCallback {
          public static class: java.lang.Class<io.branch.referral.Branch.TrackingStateCallback>;
          /**
           * Constructs a new instance of the io.branch.referral.Branch$TrackingStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onTrackingStateChanged(param0: boolean, param1: org.json.JSONObject, param2: io.branch.referral.BranchError): void });
          public constructor();
          public onTrackingStateChanged(param0: boolean, param1: org.json.JSONObject, param2: io.branch.referral.BranchError): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchActivityLifecycleObserver {
        public static class: java.lang.Class<io.branch.referral.BranchActivityLifecycleObserver>;
        public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
        public onActivityResumed(param0: globalAndroid.app.Activity): void;
        public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        public onActivityStarted(param0: globalAndroid.app.Activity): void;
        public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
        public onActivityStopped(param0: globalAndroid.app.Activity): void;
        public onActivityPaused(param0: globalAndroid.app.Activity): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchApp {
        public static class: java.lang.Class<io.branch.referral.BranchApp>;
        public onCreate(): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export abstract class BranchAsyncTask<Params, Progress, Result> extends globalAndroid.os.AsyncTask<any, any, any> {
        public static class: java.lang.Class<io.branch.referral.BranchAsyncTask<any, any, any>>;
        public executeTask(param0: androidNative.Array<any>): globalAndroid.os.AsyncTask<any, any, any>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchError {
        public static class: java.lang.Class<io.branch.referral.BranchError>;
        public static ERR_NO_SESSION: number;
        public static ERR_NO_INTERNET_PERMISSION: number;
        public static ERR_BRANCH_INIT_FAILED: number;
        public static ERR_BRANCH_DUPLICATE_URL: number;
        public static ERR_API_LVL_14_NEEDED: number;
        public static ERR_BRANCH_NOT_INSTANTIATED: number;
        public static ERR_BRANCH_NO_SHARE_OPTION: number;
        public static ERR_BRANCH_REQ_TIMED_OUT: number;
        public static ERR_BRANCH_UNABLE_TO_REACH_SERVERS: number;
        public static ERR_BRANCH_NO_CONNECTIVITY: number;
        public static ERR_BRANCH_KEY_INVALID: number;
        public static ERR_BRANCH_RESOURCE_CONFLICT: number;
        public static ERR_BRANCH_INVALID_REQUEST: number;
        public static ERR_BRANCH_TRACKING_DISABLED: number;
        public static ERR_BRANCH_ALREADY_INITIALIZED: number;
        public static ERR_IMPROPER_REINITIALIZATION: number;
        public static ERR_BRANCH_TASK_TIMEOUT: number;
        public static ERR_NETWORK_ON_MAIN: number;
        public static ERR_OTHER: number;
        public constructor(param0: string, param1: number);
        public getMessage(): string;
        public getErrorCode(): number;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchJsonConfig {
        public static class: java.lang.Class<io.branch.referral.BranchJsonConfig>;
        public static TAG: string;
        public static getInstance(param0: globalAndroid.content.Context): io.branch.referral.BranchJsonConfig;
        public isValid(param0: io.branch.referral.BranchJsonConfig.BranchJsonKey): boolean;
        public get(param0: io.branch.referral.BranchJsonConfig.BranchJsonKey): any;
        public getUseTestInstance(): java.lang.Boolean;
        public getAPIUrl(): string;
        public getBranchKey(): string;
        public getEnableLogging(): java.lang.Boolean;
        public isValid(): boolean;
        public getDeferInitForPluginRuntime(): java.lang.Boolean;
        public getFbAppId(): string;
      }
      export module BranchJsonConfig {
        export class BranchJsonKey {
          public static class: java.lang.Class<io.branch.referral.BranchJsonConfig.BranchJsonKey>;
          public static branchKey: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static testKey: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static liveKey: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static useTestInstance: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static enableLogging: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static deferInitForPluginRuntime: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static apiUrl: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static fbAppId: io.branch.referral.BranchJsonConfig.BranchJsonKey;
          public static values(): androidNative.Array<io.branch.referral.BranchJsonConfig.BranchJsonKey>;
          public static valueOf(param0: string): io.branch.referral.BranchJsonConfig.BranchJsonKey;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchLinkData {
        public static class: java.lang.Class<io.branch.referral.BranchLinkData>;
        public getChannel(): string;
        public getAlias(): string;
        public putType(param0: number): void;
        public getType(): number;
        public getDuration(): number;
        public putTags(param0: java.util.Collection<string>): void;
        public getCampaign(): string;
        public putFeature(param0: string): void;
        public putDuration(param0: number): void;
        public putCampaign(param0: string): void;
        public putSource(): void;
        public putAlias(param0: string): void;
        public constructor();
        public putChannel(param0: string): void;
        public getTags(): java.util.Collection<string>;
        public getFeature(): string;
        public getLinkDataJsonObject(): org.json.JSONObject;
        public hashCode(): number;
        public putParams(param0: org.json.JSONObject): void;
        public equals(param0: any): boolean;
        public getSource(): string;
        public getParams(): org.json.JSONObject;
        public putStage(param0: string): void;
        public getStage(): string;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchLogger {
        public static class: java.lang.Class<io.branch.referral.BranchLogger>;
        public static INSTANCE: io.branch.referral.BranchLogger;
        public static setLoggingEnabled(param0: boolean): void;
        public static setLoggerCallback(param0: io.branch.interfaces.IBranchLoggingCallbacks): void;
        public static getLoggingEnabled(): boolean;
        public static logAlways(param0: string): void;
        public static getLoggerCallback(): io.branch.interfaces.IBranchLoggingCallbacks;
        public static getLoggingLevel(): io.branch.referral.BranchLogger.BranchLogLevel;
        public static w(param0: string): void;
        public static v(param0: string): void;
        public static i(param0: string): void;
        public static setLoggingLevel(param0: io.branch.referral.BranchLogger.BranchLogLevel): void;
        public static stackTraceToString(param0: java.lang.Exception): string;
        public static d(param0: string): void;
        public static e(param0: string): void;
      }
      export module BranchLogger {
        export class BranchLogLevel {
          public static class: java.lang.Class<io.branch.referral.BranchLogger.BranchLogLevel>;
          public static ERROR: io.branch.referral.BranchLogger.BranchLogLevel;
          public static WARN: io.branch.referral.BranchLogger.BranchLogLevel;
          public static INFO: io.branch.referral.BranchLogger.BranchLogLevel;
          public static DEBUG: io.branch.referral.BranchLogger.BranchLogLevel;
          public static VERBOSE: io.branch.referral.BranchLogger.BranchLogLevel;
          public getLevel(): number;
          public static valueOf(param0: string): io.branch.referral.BranchLogger.BranchLogLevel;
          public static values(): androidNative.Array<io.branch.referral.BranchLogger.BranchLogLevel>;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchPartnerParameters {
        public static class: java.lang.Class<io.branch.referral.BranchPartnerParameters>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchPluginSupport {
        public static class: java.lang.Class<io.branch.referral.BranchPluginSupport>;
        public getHardwareID(): io.branch.referral.SystemObserver.UniqueId;
        public static getInstance(): io.branch.referral.BranchPluginSupport;
        public deviceDescription(): java.util.Map<string, any>;
        public static isNullOrEmptyOrBlank(param0: string): boolean;
      }
      export module BranchPluginSupport {
        export class SystemObserverInstance extends io.branch.referral.SystemObserver {
          public static class: java.lang.Class<io.branch.referral.BranchPluginSupport.SystemObserverInstance>;
          public constructor(param0: io.branch.referral.BranchPluginSupport);
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchPreinstall {
        public static class: java.lang.Class<io.branch.referral.BranchPreinstall>;
        public static getBranchFileContent(param0: org.json.JSONObject, param1: io.branch.referral.Branch, param2: globalAndroid.content.Context): void;
        public static setBranchPreInstallGoogleReferrer(param0: globalAndroid.content.Context, param1: java.util.HashMap<string, string>): void;
        public static getPreinstallSystemData(param0: io.branch.referral.Branch, param1: globalAndroid.content.Context): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchQRCodeCache {
        public static class: java.lang.Class<io.branch.referral.BranchQRCodeCache>;
        public cache: java.util.concurrent.ConcurrentHashMap<org.json.JSONObject, androidNative.Array<number>>;
        public checkQRCodeCache(param0: org.json.JSONObject): androidNative.Array<number>;
        public static getInstance(): io.branch.referral.BranchQRCodeCache;
        public addQRCodeToCache(param0: org.json.JSONObject, param1: androidNative.Array<number>): void;
        public static areEqual(param0: any, param1: any): boolean;
      }
      export module BranchQRCodeCache {
        export class SystemObserverInstance extends io.branch.referral.SystemObserver {
          public static class: java.lang.Class<io.branch.referral.BranchQRCodeCache.SystemObserverInstance>;
          public constructor(param0: io.branch.referral.BranchQRCodeCache);
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchShareSheetBuilder {
        public static class: java.lang.Class<io.branch.referral.BranchShareSheetBuilder>;
        public addParam(param0: string, param1: string): io.branch.referral.BranchShareSheetBuilder;
        public setMessage(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public setDialogThemeResourceID(param0: number): io.branch.referral.BranchShareSheetBuilder;
        public getShareMsg(): string;
        public getDialogThemeResourceID(): number;
        public excludeFromShareSheet(param0: androidNative.Array<string>): io.branch.referral.BranchShareSheetBuilder;
        public getUrlCopiedMessage(): string;
        public setCopyUrlStyle(param0: number, param1: number, param2: number): io.branch.referral.BranchShareSheetBuilder;
        public getDefaultURL(): string;
        public getDividerHeight(): number;
        public includeInShareSheet(param0: java.util.List<string>): io.branch.referral.BranchShareSheetBuilder;
        public addPreferredSharingOptions(param0: java.util.ArrayList<io.branch.referral.SharingHelper.SHARE_WITH>): io.branch.referral.BranchShareSheetBuilder;
        public setAlias(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public getActivity(): globalAndroid.app.Activity;
        public getCopyUrlIcon(): globalAndroid.graphics.drawable.Drawable;
        public getShareSub(): string;
        public getChannelPropertiesCallback(): io.branch.referral.Branch.IChannelProperties;
        public setDividerHeight(param0: number): io.branch.referral.BranchShareSheetBuilder;
        public excludeFromShareSheet(param0: java.util.List<string>): io.branch.referral.BranchShareSheetBuilder;
        public getIconSize(): number;
        public setMatchDuration(param0: number): io.branch.referral.BranchShareSheetBuilder;
        public getCallback(): io.branch.referral.Branch.BranchLinkShareListener;
        public includeInShareSheet(param0: androidNative.Array<string>): io.branch.referral.BranchShareSheetBuilder;
        public getCopyURlText(): string;
        public setShortLinkBuilderInternal(param0: io.branch.referral.BranchShortLinkBuilder): void;
        public setSharingTitle(param0: globalAndroid.view.View): io.branch.referral.BranchShareSheetBuilder;
        public setSubject(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public addTags(param0: java.util.ArrayList<string>): io.branch.referral.BranchShareSheetBuilder;
        public setChannelProperties(param0: io.branch.referral.Branch.IChannelProperties): io.branch.referral.BranchShareSheetBuilder;
        public getIsFullWidthStyle(): boolean;
        public excludeFromShareSheet(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public getSharingTitleView(): globalAndroid.view.View;
        public addPreferredSharingOption(param0: io.branch.referral.SharingHelper.SHARE_WITH): io.branch.referral.BranchShareSheetBuilder;
        public getStyleResourceID(): number;
        public setCallback(param0: io.branch.referral.Branch.BranchLinkShareListener): io.branch.referral.BranchShareSheetBuilder;
        public setMoreOptionStyle(param0: number, param1: number): io.branch.referral.BranchShareSheetBuilder;
        public setIconSize(param0: number): io.branch.referral.BranchShareSheetBuilder;
        public constructor(param0: globalAndroid.app.Activity, param1: org.json.JSONObject);
        public includeInShareSheet(param0: string): io.branch.referral.BranchShareSheetBuilder;
        /** @deprecated */
        public getBranch(): io.branch.referral.Branch;
        public constructor(param0: globalAndroid.app.Activity, param1: io.branch.referral.BranchShortLinkBuilder);
        public setDefaultURL(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public getPreferredOptions(): java.util.ArrayList<io.branch.referral.SharingHelper.SHARE_WITH>;
        public setFeature(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public setMoreOptionStyle(param0: globalAndroid.graphics.drawable.Drawable, param1: string): io.branch.referral.BranchShareSheetBuilder;
        public setStyleResourceID(param0: number): void;
        public shareLink(): void;
        public getMoreOptionIcon(): globalAndroid.graphics.drawable.Drawable;
        public setSharingTitle(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public getShortLinkBuilder(): io.branch.referral.BranchShortLinkBuilder;
        public addTag(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public getMoreOptionText(): string;
        public getSharingTitle(): string;
        public setAsFullWidthStyle(param0: boolean): io.branch.referral.BranchShareSheetBuilder;
        public setStage(param0: string): io.branch.referral.BranchShareSheetBuilder;
        public setCopyUrlStyle(param0: globalAndroid.graphics.drawable.Drawable, param1: string, param2: string): io.branch.referral.BranchShareSheetBuilder;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchShortLinkBuilder extends io.branch.referral.BranchUrlBuilder<io.branch.referral.BranchShortLinkBuilder> {
        public static class: java.lang.Class<io.branch.referral.BranchShortLinkBuilder>;
        public setAlias(param0: string): io.branch.referral.BranchShortLinkBuilder;
        public setDuration(param0: number): io.branch.referral.BranchShortLinkBuilder;
        public setParameters(param0: org.json.JSONObject): io.branch.referral.BranchShortLinkBuilder;
        public setChannel(param0: string): io.branch.referral.BranchShortLinkBuilder;
        public setStage(param0: string): io.branch.referral.BranchShortLinkBuilder;
        public constructor(param0: globalAndroid.content.Context);
        public setType(param0: number): io.branch.referral.BranchShortLinkBuilder;
        public setFeature(param0: string): io.branch.referral.BranchShortLinkBuilder;
        public getShortUrl(): string;
        public setCampaign(param0: string): io.branch.referral.BranchShortLinkBuilder;
        public generateShortUrl(param0: io.branch.referral.Branch.BranchLinkCreateListener): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchUniversalReferralInitWrapper extends io.branch.referral.Branch.BranchReferralInitListener {
        public static class: java.lang.Class<io.branch.referral.BranchUniversalReferralInitWrapper>;
        public onInitFinished(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void;
        public constructor(param0: io.branch.referral.Branch.BranchUniversalReferralInitListener);
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export abstract class BranchUrlBuilder<T> extends java.lang.Object {
        public static class: java.lang.Class<io.branch.referral.BranchUrlBuilder<any>>;
        public params_: org.json.JSONObject;
        public channel_: string;
        public feature_: string;
        public stage_: string;
        public campaign_: string;
        public alias_: string;
        public type_: number;
        public duration_: number;
        public tags_: java.util.ArrayList<string>;
        public branchReferral_: io.branch.referral.Branch;
        public setDefaultToLongUrl(param0: boolean): T;
        public addParameters(param0: string, param1: any): T;
        public constructor(param0: globalAndroid.content.Context);
        public addTag(param0: string): T;
        public addTags(param0: java.util.List<string>): T;
        public getUrl(): string;
        public generateUrlInternal(param0: io.branch.referral.Branch.BranchLinkCreateListener): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchUrlQueryParameter {
        public static class: java.lang.Class<io.branch.referral.BranchUrlQueryParameter>;
        public isDeepLink(): boolean;
        public getValidityWindow(): number;
        public setName(param0: string): void;
        public getTimestamp(): java.util.Date;
        public setTimestamp(param0: java.util.Date): void;
        public component4(): boolean;
        public component1(): string;
        public component3(): java.util.Date;
        public getValue(): string;
        public setValidityWindow(param0: number): void;
        public getName(): string;
        public toString(): string;
        public constructor();
        public setValue(param0: string): void;
        public component5(): number;
        public hashCode(): number;
        public setDeepLink(param0: boolean): void;
        public component2(): string;
        public equals(param0: any): boolean;
        public constructor(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: number);
        public copy(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: number): io.branch.referral.BranchUrlQueryParameter;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BranchUtil {
        public static class: java.lang.Class<io.branch.referral.BranchUtil>;
        public static dpToPx(param0: globalAndroid.content.Context, param1: number): number;
        public static getDeepLinkSchemes(param0: globalAndroid.content.Context): org.json.JSONObject;
        public static getDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
        public static setAPIBaseUrlFromConfig(param0: globalAndroid.content.Context): void;
        public static isLowOnMemory(param0: globalAndroid.content.Context): boolean;
        public static isTestModeEnabled(): boolean;
        public static decodeResourceId(param0: globalAndroid.content.Context, param1: number): string;
        public static readBranchKey(param0: globalAndroid.content.Context): string;
        public static getDeferInitForPluginRuntimeConfig(param0: globalAndroid.content.Context): boolean;
        public static getEnableLoggingConfig(param0: globalAndroid.content.Context): boolean;
        public static setFbAppIdFromConfig(param0: globalAndroid.content.Context): void;
        public constructor();
      }
      export module BranchUtil {
        export class JsonReader {
          public static class: java.lang.Class<io.branch.referral.BranchUtil.JsonReader>;
          public readOutLong(param0: string): number;
          public constructor(param0: org.json.JSONObject);
          public readOut(param0: string): any;
          public readOutInt(param0: string, param1: java.lang.Integer): java.lang.Integer;
          public has(param0: string): boolean;
          public readOutBoolean(param0: string): boolean;
          public readOutString(param0: string, param1: string): string;
          public readOutDouble(param0: string): number;
          public readOutJsonArray(param0: string): org.json.JSONArray;
          public readOutInt(param0: string): number;
          public readOutDouble(param0: string, param1: java.lang.Double): java.lang.Double;
          public getJsonObject(): org.json.JSONObject;
          public readOutString(param0: string): string;
          public keys(): java.util.Iterator<string>;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class BuildConfig {
        public static class: java.lang.Class<io.branch.referral.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static VERSION_CODE: number;
        public static VERSION_NAME: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class Defines {
        public static class: java.lang.Class<io.branch.referral.Defines>;
        public constructor();
      }
      export module Defines {
        export class HeaderKey {
          public static class: java.lang.Class<io.branch.referral.Defines.HeaderKey>;
          public static RequestId: io.branch.referral.Defines.HeaderKey;
          public static SendCloseRequest: io.branch.referral.Defines.HeaderKey;
          public getKey(): string;
          public static valueOf(param0: string): io.branch.referral.Defines.HeaderKey;
          public toString(): string;
          public static values(): androidNative.Array<io.branch.referral.Defines.HeaderKey>;
        }
        export class IntentKeys {
          public static class: java.lang.Class<io.branch.referral.Defines.IntentKeys>;
          public static BranchData: io.branch.referral.Defines.IntentKeys;
          public static ForceNewBranchSession: io.branch.referral.Defines.IntentKeys;
          public static BranchLinkUsed: io.branch.referral.Defines.IntentKeys;
          public static BranchURI: io.branch.referral.Defines.IntentKeys;
          public static AutoDeepLinked: io.branch.referral.Defines.IntentKeys;
          public getKey(): string;
          public static values(): androidNative.Array<io.branch.referral.Defines.IntentKeys>;
          public toString(): string;
          public static valueOf(param0: string): io.branch.referral.Defines.IntentKeys;
        }
        export class Jsonkey {
          public static class: java.lang.Class<io.branch.referral.Defines.Jsonkey>;
          public static RandomizedBundleToken: io.branch.referral.Defines.Jsonkey;
          public static Identity: io.branch.referral.Defines.Jsonkey;
          public static RandomizedDeviceToken: io.branch.referral.Defines.Jsonkey;
          public static SessionID: io.branch.referral.Defines.Jsonkey;
          public static LinkClickID: io.branch.referral.Defines.Jsonkey;
          public static GoogleSearchInstallReferrer: io.branch.referral.Defines.Jsonkey;
          public static GooglePlayInstallReferrer: io.branch.referral.Defines.Jsonkey;
          public static ClickedReferrerTimeStamp: io.branch.referral.Defines.Jsonkey;
          public static Gclid: io.branch.referral.Defines.Jsonkey;
          public static IsDeeplinkGclid: io.branch.referral.Defines.Jsonkey;
          public static ReferrerGclid: io.branch.referral.Defines.Jsonkey;
          public static ReferringUrlQueryParameters: io.branch.referral.Defines.Jsonkey;
          public static InstallBeginTimeStamp: io.branch.referral.Defines.Jsonkey;
          public static BranchLinkUsed: io.branch.referral.Defines.Jsonkey;
          public static ReferringBranchIdentity: io.branch.referral.Defines.Jsonkey;
          public static BranchIdentity: io.branch.referral.Defines.Jsonkey;
          public static BranchKey: io.branch.referral.Defines.Jsonkey;
          public static BranchData: io.branch.referral.Defines.Jsonkey;
          public static PlayAutoInstalls: io.branch.referral.Defines.Jsonkey;
          public static UTMCampaign: io.branch.referral.Defines.Jsonkey;
          public static UTMMedium: io.branch.referral.Defines.Jsonkey;
          public static InitialReferrer: io.branch.referral.Defines.Jsonkey;
          public static Bucket: io.branch.referral.Defines.Jsonkey;
          public static DefaultBucket: io.branch.referral.Defines.Jsonkey;
          public static Amount: io.branch.referral.Defines.Jsonkey;
          public static CalculationType: io.branch.referral.Defines.Jsonkey;
          public static Location: io.branch.referral.Defines.Jsonkey;
          public static Type: io.branch.referral.Defines.Jsonkey;
          public static CreationSource: io.branch.referral.Defines.Jsonkey;
          public static Prefix: io.branch.referral.Defines.Jsonkey;
          public static Expiration: io.branch.referral.Defines.Jsonkey;
          public static Event: io.branch.referral.Defines.Jsonkey;
          public static Metadata: io.branch.referral.Defines.Jsonkey;
          public static CommerceData: io.branch.referral.Defines.Jsonkey;
          public static Total: io.branch.referral.Defines.Jsonkey;
          public static Unique: io.branch.referral.Defines.Jsonkey;
          public static Length: io.branch.referral.Defines.Jsonkey;
          public static Direction: io.branch.referral.Defines.Jsonkey;
          public static BeginAfterID: io.branch.referral.Defines.Jsonkey;
          public static Link: io.branch.referral.Defines.Jsonkey;
          public static ReferringData: io.branch.referral.Defines.Jsonkey;
          public static ReferringLink: io.branch.referral.Defines.Jsonkey;
          public static IsFullAppConv: io.branch.referral.Defines.Jsonkey;
          public static Data: io.branch.referral.Defines.Jsonkey;
          public static OS: io.branch.referral.Defines.Jsonkey;
          public static HardwareID: io.branch.referral.Defines.Jsonkey;
          public static AndroidID: io.branch.referral.Defines.Jsonkey;
          public static UnidentifiedDevice: io.branch.referral.Defines.Jsonkey;
          public static HardwareIDType: io.branch.referral.Defines.Jsonkey;
          public static HardwareIDTypeVendor: io.branch.referral.Defines.Jsonkey;
          public static HardwareIDTypeRandom: io.branch.referral.Defines.Jsonkey;
          public static IsHardwareIDReal: io.branch.referral.Defines.Jsonkey;
          public static AnonID: io.branch.referral.Defines.Jsonkey;
          public static AppVersion: io.branch.referral.Defines.Jsonkey;
          public static APILevel: io.branch.referral.Defines.Jsonkey;
          public static Country: io.branch.referral.Defines.Jsonkey;
          public static Language: io.branch.referral.Defines.Jsonkey;
          public static Update: io.branch.referral.Defines.Jsonkey;
          public static OriginalInstallTime: io.branch.referral.Defines.Jsonkey;
          public static FirstInstallTime: io.branch.referral.Defines.Jsonkey;
          public static LastUpdateTime: io.branch.referral.Defines.Jsonkey;
          public static PreviousUpdateTime: io.branch.referral.Defines.Jsonkey;
          public static URIScheme: io.branch.referral.Defines.Jsonkey;
          public static AppLinks: io.branch.referral.Defines.Jsonkey;
          public static AppIdentifier: io.branch.referral.Defines.Jsonkey;
          public static LinkIdentifier: io.branch.referral.Defines.Jsonkey;
          public static GoogleAdvertisingID: io.branch.referral.Defines.Jsonkey;
          public static AAID: io.branch.referral.Defines.Jsonkey;
          public static FireAdId: io.branch.referral.Defines.Jsonkey;
          public static OpenAdvertisingID: io.branch.referral.Defines.Jsonkey;
          public static LATVal: io.branch.referral.Defines.Jsonkey;
          public static LimitedAdTracking: io.branch.referral.Defines.Jsonkey;
          public static limitFacebookTracking: io.branch.referral.Defines.Jsonkey;
          public static Debug: io.branch.referral.Defines.Jsonkey;
          public static Brand: io.branch.referral.Defines.Jsonkey;
          public static Model: io.branch.referral.Defines.Jsonkey;
          public static ScreenDpi: io.branch.referral.Defines.Jsonkey;
          public static ScreenHeight: io.branch.referral.Defines.Jsonkey;
          public static ScreenWidth: io.branch.referral.Defines.Jsonkey;
          public static WiFi: io.branch.referral.Defines.Jsonkey;
          public static LocalIP: io.branch.referral.Defines.Jsonkey;
          public static UserData: io.branch.referral.Defines.Jsonkey;
          public static AdvertisingIDs: io.branch.referral.Defines.Jsonkey;
          public static DeveloperIdentity: io.branch.referral.Defines.Jsonkey;
          public static UserAgent: io.branch.referral.Defines.Jsonkey;
          public static SDK: io.branch.referral.Defines.Jsonkey;
          public static SdkVersion: io.branch.referral.Defines.Jsonkey;
          public static UIMode: io.branch.referral.Defines.Jsonkey;
          public static InstallMetadata: io.branch.referral.Defines.Jsonkey;
          public static LATDAttributionWindow: io.branch.referral.Defines.Jsonkey;
          public static Clicked_Branch_Link: io.branch.referral.Defines.Jsonkey;
          public static IsFirstSession: io.branch.referral.Defines.Jsonkey;
          public static AndroidDeepLinkPath: io.branch.referral.Defines.Jsonkey;
          public static DeepLinkPath: io.branch.referral.Defines.Jsonkey;
          public static AndroidAppLinkURL: io.branch.referral.Defines.Jsonkey;
          public static AndroidPushNotificationKey: io.branch.referral.Defines.Jsonkey;
          public static AndroidPushIdentifier: io.branch.referral.Defines.Jsonkey;
          public static CanonicalIdentifier: io.branch.referral.Defines.Jsonkey;
          public static ContentTitle: io.branch.referral.Defines.Jsonkey;
          public static ContentDesc: io.branch.referral.Defines.Jsonkey;
          public static ContentImgUrl: io.branch.referral.Defines.Jsonkey;
          public static CanonicalUrl: io.branch.referral.Defines.Jsonkey;
          public static ContentType: io.branch.referral.Defines.Jsonkey;
          public static PublicallyIndexable: io.branch.referral.Defines.Jsonkey;
          public static LocallyIndexable: io.branch.referral.Defines.Jsonkey;
          public static ContentKeyWords: io.branch.referral.Defines.Jsonkey;
          public static ContentExpiryTime: io.branch.referral.Defines.Jsonkey;
          public static Params: io.branch.referral.Defines.Jsonkey;
          public static SharedLink: io.branch.referral.Defines.Jsonkey;
          public static ShareError: io.branch.referral.Defines.Jsonkey;
          public static SharedChannel: io.branch.referral.Defines.Jsonkey;
          public static URLSource: io.branch.referral.Defines.Jsonkey;
          public static External_Intent_URI: io.branch.referral.Defines.Jsonkey;
          public static External_Intent_Extra: io.branch.referral.Defines.Jsonkey;
          public static Last_Round_Trip_Time: io.branch.referral.Defines.Jsonkey;
          public static Branch_Round_Trip_Time: io.branch.referral.Defines.Jsonkey;
          public static Branch_Instrumentation: io.branch.referral.Defines.Jsonkey;
          public static Queue_Wait_Time: io.branch.referral.Defines.Jsonkey;
          public static InstantDeepLinkSession: io.branch.referral.Defines.Jsonkey;
          public static Path: io.branch.referral.Defines.Jsonkey;
          public static ViewList: io.branch.referral.Defines.Jsonkey;
          public static ContentActionView: io.branch.referral.Defines.Jsonkey;
          public static ContentPath: io.branch.referral.Defines.Jsonkey;
          public static ContentNavPath: io.branch.referral.Defines.Jsonkey;
          public static ReferralLink: io.branch.referral.Defines.Jsonkey;
          public static ContentData: io.branch.referral.Defines.Jsonkey;
          public static ContentEvents: io.branch.referral.Defines.Jsonkey;
          public static ContentAnalyticsMode: io.branch.referral.Defines.Jsonkey;
          public static Environment: io.branch.referral.Defines.Jsonkey;
          public static InstantApp: io.branch.referral.Defines.Jsonkey;
          public static NativeApp: io.branch.referral.Defines.Jsonkey;
          public static CustomerEventAlias: io.branch.referral.Defines.Jsonkey;
          public static TransactionID: io.branch.referral.Defines.Jsonkey;
          public static Currency: io.branch.referral.Defines.Jsonkey;
          public static Revenue: io.branch.referral.Defines.Jsonkey;
          public static Shipping: io.branch.referral.Defines.Jsonkey;
          public static Tax: io.branch.referral.Defines.Jsonkey;
          public static Coupon: io.branch.referral.Defines.Jsonkey;
          public static Affiliation: io.branch.referral.Defines.Jsonkey;
          public static Description: io.branch.referral.Defines.Jsonkey;
          public static SearchQuery: io.branch.referral.Defines.Jsonkey;
          public static AdType: io.branch.referral.Defines.Jsonkey;
          public static CPUType: io.branch.referral.Defines.Jsonkey;
          public static DeviceBuildId: io.branch.referral.Defines.Jsonkey;
          public static Locale: io.branch.referral.Defines.Jsonkey;
          public static ConnectionType: io.branch.referral.Defines.Jsonkey;
          public static DeviceCarrier: io.branch.referral.Defines.Jsonkey;
          public static PluginName: io.branch.referral.Defines.Jsonkey;
          public static PluginVersion: io.branch.referral.Defines.Jsonkey;
          public static OSVersionAndroid: io.branch.referral.Defines.Jsonkey;
          public static Name: io.branch.referral.Defines.Jsonkey;
          public static CustomData: io.branch.referral.Defines.Jsonkey;
          public static EventData: io.branch.referral.Defines.Jsonkey;
          public static ContentItems: io.branch.referral.Defines.Jsonkey;
          public static ContentSchema: io.branch.referral.Defines.Jsonkey;
          public static Price: io.branch.referral.Defines.Jsonkey;
          public static PriceCurrency: io.branch.referral.Defines.Jsonkey;
          public static Quantity: io.branch.referral.Defines.Jsonkey;
          public static SKU: io.branch.referral.Defines.Jsonkey;
          public static ProductName: io.branch.referral.Defines.Jsonkey;
          public static ProductBrand: io.branch.referral.Defines.Jsonkey;
          public static ProductCategory: io.branch.referral.Defines.Jsonkey;
          public static ProductVariant: io.branch.referral.Defines.Jsonkey;
          public static Rating: io.branch.referral.Defines.Jsonkey;
          public static RatingAverage: io.branch.referral.Defines.Jsonkey;
          public static RatingCount: io.branch.referral.Defines.Jsonkey;
          public static RatingMax: io.branch.referral.Defines.Jsonkey;
          public static AddressStreet: io.branch.referral.Defines.Jsonkey;
          public static AddressCity: io.branch.referral.Defines.Jsonkey;
          public static AddressRegion: io.branch.referral.Defines.Jsonkey;
          public static AddressCountry: io.branch.referral.Defines.Jsonkey;
          public static AddressPostalCode: io.branch.referral.Defines.Jsonkey;
          public static Latitude: io.branch.referral.Defines.Jsonkey;
          public static Longitude: io.branch.referral.Defines.Jsonkey;
          public static ImageCaptions: io.branch.referral.Defines.Jsonkey;
          public static Condition: io.branch.referral.Defines.Jsonkey;
          public static CreationTimestamp: io.branch.referral.Defines.Jsonkey;
          public static TrackingDisabled: io.branch.referral.Defines.Jsonkey;
          public static DisableAdNetworkCallouts: io.branch.referral.Defines.Jsonkey;
          public static PartnerData: io.branch.referral.Defines.Jsonkey;
          public static Instant: io.branch.referral.Defines.Jsonkey;
          public static QRCodeTag: io.branch.referral.Defines.Jsonkey;
          public static CodeColor: io.branch.referral.Defines.Jsonkey;
          public static BackgroundColor: io.branch.referral.Defines.Jsonkey;
          public static Width: io.branch.referral.Defines.Jsonkey;
          public static Margin: io.branch.referral.Defines.Jsonkey;
          public static ImageFormat: io.branch.referral.Defines.Jsonkey;
          public static CenterLogo: io.branch.referral.Defines.Jsonkey;
          public static QRCodeSettings: io.branch.referral.Defines.Jsonkey;
          public static QRCodeData: io.branch.referral.Defines.Jsonkey;
          public static QRCodeBranchKey: io.branch.referral.Defines.Jsonkey;
          public static QRCodeResponseString: io.branch.referral.Defines.Jsonkey;
          public static App_Store: io.branch.referral.Defines.Jsonkey;
          public static Google_Play_Store: io.branch.referral.Defines.Jsonkey;
          public static Huawei_App_Gallery: io.branch.referral.Defines.Jsonkey;
          public static Samsung_Galaxy_Store: io.branch.referral.Defines.Jsonkey;
          public static Xiaomi_Get_Apps: io.branch.referral.Defines.Jsonkey;
          public static Meta_Install_Referrer: io.branch.referral.Defines.Jsonkey;
          public static DMA_EEA: io.branch.referral.Defines.Jsonkey;
          public static DMA_Ad_Personalization: io.branch.referral.Defines.Jsonkey;
          public static DMA_Ad_User_Data: io.branch.referral.Defines.Jsonkey;
          public static Is_Meta_Click_Through: io.branch.referral.Defines.Jsonkey;
          public getKey(): string;
          public static values(): androidNative.Array<io.branch.referral.Defines.Jsonkey>;
          public toString(): string;
          public static valueOf(param0: string): io.branch.referral.Defines.Jsonkey;
        }
        export class LinkParam {
          public static class: java.lang.Class<io.branch.referral.Defines.LinkParam>;
          public static Tags: io.branch.referral.Defines.LinkParam;
          public static Alias: io.branch.referral.Defines.LinkParam;
          public static Type: io.branch.referral.Defines.LinkParam;
          public static Duration: io.branch.referral.Defines.LinkParam;
          public static Channel: io.branch.referral.Defines.LinkParam;
          public static Feature: io.branch.referral.Defines.LinkParam;
          public static Stage: io.branch.referral.Defines.LinkParam;
          public static Campaign: io.branch.referral.Defines.LinkParam;
          public static Data: io.branch.referral.Defines.LinkParam;
          public static URL: io.branch.referral.Defines.LinkParam;
          public getKey(): string;
          public static values(): androidNative.Array<io.branch.referral.Defines.LinkParam>;
          public toString(): string;
          public static valueOf(param0: string): io.branch.referral.Defines.LinkParam;
        }
        export class PreinstallKey {
          public static class: java.lang.Class<io.branch.referral.Defines.PreinstallKey>;
          public static campaign: io.branch.referral.Defines.PreinstallKey;
          public static partner: io.branch.referral.Defines.PreinstallKey;
          public static values(): androidNative.Array<io.branch.referral.Defines.PreinstallKey>;
          public getKey(): string;
          public toString(): string;
          public static valueOf(param0: string): io.branch.referral.Defines.PreinstallKey;
        }
        export class RequestPath {
          public static class: java.lang.Class<io.branch.referral.Defines.RequestPath>;
          public static GetURL: io.branch.referral.Defines.RequestPath;
          public static GetApp: io.branch.referral.Defines.RequestPath;
          public static RegisterInstall: io.branch.referral.Defines.RequestPath;
          public static RegisterOpen: io.branch.referral.Defines.RequestPath;
          public static ContentEvent: io.branch.referral.Defines.RequestPath;
          public static TrackStandardEvent: io.branch.referral.Defines.RequestPath;
          public static TrackCustomEvent: io.branch.referral.Defines.RequestPath;
          public static GetLATD: io.branch.referral.Defines.RequestPath;
          public static QRCode: io.branch.referral.Defines.RequestPath;
          public getPath(): string;
          public static values(): androidNative.Array<io.branch.referral.Defines.RequestPath>;
          public toString(): string;
          public static valueOf(param0: string): io.branch.referral.Defines.RequestPath;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class DeviceInfo {
        public static class: java.lang.Class<io.branch.referral.DeviceInfo>;
        public getHardwareID(): io.branch.referral.SystemObserver.UniqueId;
        public getAppVersion(): string;
        public getLastUpdateTime(): number;
        public getPackageName(): string;
        public getFirstInstallTime(): number;
        public getOsName(): string;
        public isPackageInstalled(): boolean;
        public static isNullOrEmptyOrBlank(param0: string): boolean;
      }
      export module DeviceInfo {
        export class SystemObserverInstance extends io.branch.referral.SystemObserver {
          public static class: java.lang.Class<io.branch.referral.DeviceInfo.SystemObserverInstance>;
          public constructor(param0: io.branch.referral.DeviceInfo);
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class InstantAppUtil {
        public static class: java.lang.Class<io.branch.referral.InstantAppUtil>;
      }
      export module InstantAppUtil {
        export class PackageManagerWrapper {
          public static class: java.lang.Class<io.branch.referral.InstantAppUtil.PackageManagerWrapper>;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class NativeShareLinkManager {
        public static class: java.lang.Class<io.branch.referral.NativeShareLinkManager>;
        public getLinkShareListenerCallback(): io.branch.referral.Branch.BranchNativeLinkShareListener;
        public static getInstance(): io.branch.referral.NativeShareLinkManager;
      }
      export module NativeShareLinkManager {
        export class NativeLinkShareListenerWrapper extends io.branch.referral.Branch.BranchNativeLinkShareListener {
          public static class: java.lang.Class<io.branch.referral.NativeShareLinkManager.NativeLinkShareListenerWrapper>;
          public onLinkShareResponse(param0: string, param1: io.branch.referral.BranchError): void;
          public onChannelSelected(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class PrefHelper {
        public static class: java.lang.Class<io.branch.referral.PrefHelper>;
        public static NO_STRING_VALUE: string;
        public static fbAppId_: string;
        public setInteger(param0: string, param1: number): void;
        public setActionTotalCount(param0: string, param1: number): void;
        public setInstallReferrerParams(param0: string): void;
        public setAnonID(param0: string): void;
        public getExternalIntentUri(): string;
        public setSessionID(param0: string): void;
        public getSessionID(): string;
        public getReferrerGclid(): string;
        public getRandomlyGeneratedUuid(): string;
        public setInstallParams(param0: string): void;
        public getAdNetworkCalloutsDisabled(): boolean;
        public getInstallParams(): string;
        public clearUserValues(): void;
        public getReferrerGclidValidForWindow(): number;
        public getFloat(param0: string): number;
        public getLATDAttributionWindow(): number;
        public setReferrerGclidValidForWindow(param0: number): void;
        public setIsFullAppConversion(param0: boolean): void;
        public getActionTotalCount(param0: string): number;
        public getActionUniqueCount(param0: string): number;
        public getInstallMetadata(): org.json.JSONObject;
        public getBool(param0: string): boolean;
        public getAnonID(): string;
        public setAppVersion(param0: string): void;
        public getAppStoreSource(): string;
        public setReferrerGclid(param0: string): void;
        public getAPIBaseUrl(): string;
        public getRandomizedBundleToken(): string;
        public getSessionParams(): string;
        public getLong(param0: string): number;
        public getTimeout(): number;
        public getReferringURLQueryParameters(): org.json.JSONObject;
        public setFloat(param0: string, param1: number): void;
        public isFullAppConversion(): boolean;
        public setRetryInterval(param0: number): void;
        public setNoConnectionRetryMax(param0: number): void;
        public removePrefValue(param0: string): void;
        public getLong(param0: string, param1: number): number;
        public getIsMetaClickThrough(): boolean;
        public getConnectTimeout(): number;
        public setBranchKey(param0: string): boolean;
        public hasPrefValue(param0: string): boolean;
        public setRandomlyGeneratedUuid(param0: string): void;
        public setSessionParams(param0: string): void;
        public getLinkClickID(): string;
        public setLinkClickID(param0: string): void;
        public setRandomizedDeviceToken(param0: string): void;
        public getRandomizedDeviceToken(): string;
        public getInstallReferrerParams(): string;
        public setActionUniqueCount(param0: string, param1: number): void;
        public getInteger(param0: string): number;
        public clearGclid(): void;
        public setPushIdentifier(param0: string): void;
        public setReferringUrlQueryParameters(param0: org.json.JSONObject): void;
        public getInitialReferrer(): string;
        public clearSystemReadStatus(): void;
        public static getInstance(param0: globalAndroid.content.Context): io.branch.referral.PrefHelper;
        public getUserURL(): string;
        public getLinkClickIdentifier(): string;
        public setIdentity(param0: string): void;
        public setAppStoreSource(param0: string): void;
        public getAppStoreReferrer(): string;
        public getInteger(param0: string, param1: number): number;
        public getString(param0: string): string;
        public setRequestMetadata(param0: string, param1: string): void;
        public getRequestMetadata(): org.json.JSONObject;
        public loadPartnerParams(param0: org.json.JSONObject): void;
        public getRetryCount(): number;
        public setUserURL(param0: string): void;
        public setRandomizedBundleToken(param0: string): void;
        public setInitialReferrer(param0: string): void;
        public setAppLink(param0: string): void;
        public setString(param0: string, param1: string): void;
        public getAppLink(): string;
        public getPushIdentifier(): string;
        public getTaskTimeout(): number;
        public setExternalIntentExtra(param0: string): void;
        public setIsMetaClickThrough(param0: boolean): void;
        public getBranchKey(): string;
        public setConnectTimeout(param0: number): void;
        public setGoogleSearchInstallIdentifier(param0: string): void;
        public setTimeout(param0: number): void;
        public setAdNetworkCalloutsDisabled(param0: boolean): void;
        public setBool(param0: string, param1: java.lang.Boolean): void;
        public setAppStoreReferrer(param0: string): void;
        public getNoConnectionRetryMax(): number;
        public getAppVersion(): string;
        public getExternalIntentExtra(): string;
        public setRetryCount(param0: number): void;
        public getIdentity(): string;
        public setLATDAttributionWindow(param0: number): void;
        public setLinkClickIdentifier(param0: string): void;
        public getGoogleSearchInstallIdentifier(): string;
        public setLong(param0: string, param1: number): void;
        public getRetryInterval(): number;
        public setExternalIntentUri(param0: string): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module QRCode {
        export class BranchQRCode {
          public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode>;
          public setCodeColor(param0: number): io.branch.referral.QRCode.BranchQRCode;
          public getQRCodeAsData(param0: globalAndroid.content.Context, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties, param3: io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler<any>): void;
          public constructor();
          public setMargin(param0: java.lang.Integer): io.branch.referral.QRCode.BranchQRCode;
          public setCenterLogo(param0: string): io.branch.referral.QRCode.BranchQRCode;
          public setImageFormat(param0: io.branch.referral.QRCode.BranchQRCode.BranchImageFormat): io.branch.referral.QRCode.BranchQRCode;
          public setBackgroundColor(param0: number): io.branch.referral.QRCode.BranchQRCode;
          public getQRCodeAsImage(param0: globalAndroid.app.Activity, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties, param3: io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler<any>): void;
          public setBackgroundColor(param0: string): io.branch.referral.QRCode.BranchQRCode;
          public setWidth(param0: java.lang.Integer): io.branch.referral.QRCode.BranchQRCode;
          public setCodeColor(param0: string): io.branch.referral.QRCode.BranchQRCode;
        }
        export module BranchQRCode {
          export class BranchImageFormat {
            public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchImageFormat>;
            public static JPEG: io.branch.referral.QRCode.BranchQRCode.BranchImageFormat;
            public static PNG: io.branch.referral.QRCode.BranchQRCode.BranchImageFormat;
            public static values(): androidNative.Array<io.branch.referral.QRCode.BranchQRCode.BranchImageFormat>;
            public static valueOf(param0: string): io.branch.referral.QRCode.BranchQRCode.BranchImageFormat;
          }
          export class BranchQRCodeDataHandler<T> extends java.lang.Object {
            public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler<any>>;
            /**
             * Constructs a new instance of the io.branch.referral.QRCode.BranchQRCode$BranchQRCodeDataHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(param0: androidNative.Array<number>): void; onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onSuccess(param0: androidNative.Array<number>): void;
            public onFailure(param0: java.lang.Exception): void;
          }
          export class BranchQRCodeImageHandler<T> extends java.lang.Object {
            public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler<any>>;
            /**
             * Constructs a new instance of the io.branch.referral.QRCode.BranchQRCode$BranchQRCodeImageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(param0: globalAndroid.graphics.Bitmap): void; onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
            public onSuccess(param0: globalAndroid.graphics.Bitmap): void;
          }
          export class BranchQRCodeRequestHandler<T> extends java.lang.Object {
            public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchQRCodeRequestHandler<any>>;
            /**
             * Constructs a new instance of the io.branch.referral.QRCode.BranchQRCode$BranchQRCodeRequestHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onDataReceived(param0: io.branch.referral.ServerResponse): void; onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
            public onDataReceived(param0: io.branch.referral.ServerResponse): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module QRCode {
        export class ServerRequestCreateQRCode extends io.branch.referral.ServerRequest {
          public static class: java.lang.Class<io.branch.referral.QRCode.ServerRequestCreateQRCode>;
          public handleErrors(param0: globalAndroid.content.Context): boolean;
          public clearCallbacks(): void;
          public handleFailure(param0: number, param1: string): void;
          public constructor(param0: io.branch.referral.Defines.RequestPath, param1: org.json.JSONObject, param2: globalAndroid.content.Context, param3: io.branch.referral.QRCode.BranchQRCode.BranchQRCodeRequestHandler<any>);
          public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
          public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.Defines.RequestPath);
          public prepareExecuteWithoutTracking(): boolean;
          public constructor(param0: io.branch.referral.Defines.RequestPath, param1: org.json.JSONObject, param2: globalAndroid.content.Context);
          public onRequestQueued(): void;
          public isGetRequest(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ReferringUrlUtility {
        public static class: java.lang.Class<io.branch.referral.ReferringUrlUtility>;
        public parseReferringURL(param0: string): void;
        public getURLQueryParamsForRequest(param0: io.branch.referral.ServerRequest): org.json.JSONObject;
        public constructor(param0: io.branch.referral.PrefHelper);
        public serializeToJson$Branch_SDK_release(param0: java.util.Map<string, io.branch.referral.BranchUrlQueryParameter>): org.json.JSONObject;
        public deserializeFromJson$Branch_SDK_release(param0: org.json.JSONObject): java.util.Map<string, io.branch.referral.BranchUrlQueryParameter>;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export abstract class ServerRequest {
        public static class: java.lang.Class<io.branch.referral.ServerRequest>;
        public prefHelper_: io.branch.referral.PrefHelper;
        public constructError_: boolean;
        public currentRetryCount: number;
        public constructor(param0: io.branch.referral.Defines.RequestPath, param1: org.json.JSONObject, param2: globalAndroid.content.Context);
        public shouldAddDMAParams(): boolean;
        public getRequestUrl(): string;
        public updateEnvironment(param0: globalAndroid.content.Context, param1: org.json.JSONObject): void;
        public doesAppHasInternetPermission(param0: globalAndroid.content.Context): boolean;
        public onRequestQueued(): void;
        public shouldUpdateLimitFacebookTracking(): boolean;
        public isWaitingOnProcessToFinish(): boolean;
        public getQueueWaitTime(): number;
        public prepareExecuteWithoutTracking(): boolean;
        public handleFailure(param0: number, param1: string): void;
        public shouldRetryOnFail(): boolean;
        public getRequestPath(): string;
        public getGetParams(): org.json.JSONObject;
        public removeProcessWaitLock(param0: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK): void;
        public handleErrors(param0: globalAndroid.content.Context): boolean;
        public toJSON(): org.json.JSONObject;
        public static fromJSON(param0: org.json.JSONObject, param1: globalAndroid.content.Context): io.branch.referral.ServerRequest;
        public printWaitLocks(): string;
        public getBranchRemoteAPIVersion(): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
        public addGetParam(param0: string, param1: string): void;
        public addProcessWaitLock(param0: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK): void;
        public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.Defines.RequestPath);
        public onPreExecute(): void;
        public getPostWithInstrumentationValues(param0: java.util.concurrent.ConcurrentHashMap<string, string>): org.json.JSONObject;
        public isGetRequest(): boolean;
        public setPost(param0: org.json.JSONObject): void;
        public isGAdsParamsRequired(): boolean;
        public clearCallbacks(): void;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
        public getPost(): org.json.JSONObject;
      }
      export module ServerRequest {
        export class BRANCH_API_VERSION {
          public static class: java.lang.Class<io.branch.referral.ServerRequest.BRANCH_API_VERSION>;
          public static V1: io.branch.referral.ServerRequest.BRANCH_API_VERSION;
          public static V1_LATD: io.branch.referral.ServerRequest.BRANCH_API_VERSION;
          public static V2: io.branch.referral.ServerRequest.BRANCH_API_VERSION;
          public static valueOf(param0: string): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
          public static values(): androidNative.Array<io.branch.referral.ServerRequest.BRANCH_API_VERSION>;
        }
        export class PROCESS_WAIT_LOCK {
          public static class: java.lang.Class<io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK>;
          public static SDK_INIT_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
          public static GAID_FETCH_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
          public static INTENT_PENDING_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
          public static USER_SET_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
          public static INSTALL_REFERRER_FETCH_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
          public static USER_AGENT_STRING_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
          public static values(): androidNative.Array<io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK>;
          public static valueOf(param0: string): io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerRequestCreateUrl extends io.branch.referral.ServerRequest {
        public static class: java.lang.Class<io.branch.referral.ServerRequestCreateUrl>;
        public constructor(param0: io.branch.referral.Defines.RequestPath, param1: org.json.JSONObject, param2: globalAndroid.content.Context);
        public getLongUrl(): string;
        public handleDuplicateURLError(): void;
        public getLinkPost(): io.branch.referral.BranchLinkData;
        public handleErrors(param0: globalAndroid.content.Context): boolean;
        public onUrlAvailable(param0: string): void;
        public prepareExecuteWithoutTracking(): boolean;
        public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.Defines.RequestPath);
        public constructor(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: java.util.Collection<string>, param5: string, param6: string, param7: string, param8: string, param9: org.json.JSONObject, param10: io.branch.referral.Branch.BranchLinkCreateListener, param11: boolean, param12: boolean);
        public handleFailure(param0: number, param1: string): void;
        public isAsync(): boolean;
        public isGetRequest(): boolean;
        public clearCallbacks(): void;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerRequestGetLATD extends io.branch.referral.ServerRequest {
        public static class: java.lang.Class<io.branch.referral.ServerRequestGetLATD>;
        public static defaultAttributionWindow: number;
        public getAttributionWindow(): number;
        public handleFailure(param0: number, param1: string): void;
        public isGetRequest(): boolean;
        public clearCallbacks(): void;
        public handleErrors(param0: globalAndroid.content.Context): boolean;
        public shouldUpdateLimitFacebookTracking(): boolean;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
        public getBranchRemoteAPIVersion(): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
      }
      export module ServerRequestGetLATD {
        export class BranchLastAttributedTouchDataListener {
          public static class: java.lang.Class<io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener>;
          /**
           * Constructs a new instance of the io.branch.referral.ServerRequestGetLATD$BranchLastAttributedTouchDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onDataFetched(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void });
          public constructor();
          public onDataFetched(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export abstract class ServerRequestInitSession extends io.branch.referral.ServerRequest {
        public static class: java.lang.Class<io.branch.referral.ServerRequestInitSession>;
        public shouldAddDMAParams(): boolean;
        public prepareExecuteWithoutTracking(): boolean;
        public onPreExecute(): void;
        public getRequestActionName(): string;
        public setPost(param0: org.json.JSONObject): void;
        public shouldUpdateLimitFacebookTracking(): boolean;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
        public toJSON(): org.json.JSONObject;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerRequestLogEvent extends io.branch.referral.ServerRequest {
        public static class: java.lang.Class<io.branch.referral.ServerRequestLogEvent>;
        public constructor(param0: io.branch.referral.Defines.RequestPath, param1: org.json.JSONObject, param2: globalAndroid.content.Context);
        public shouldAddDMAParams(): boolean;
        public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.Defines.RequestPath, param2: string, param3: java.util.HashMap<string, any>, param4: org.json.JSONObject, param5: org.json.JSONObject, param6: java.util.List<io.branch.indexing.BranchUniversalObject>);
        public handleErrors(param0: globalAndroid.content.Context): boolean;
        public shouldUpdateLimitFacebookTracking(): boolean;
        public getBranchRemoteAPIVersion(): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
        public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.Defines.RequestPath);
        public handleFailure(param0: number, param1: string): void;
        public shouldRetryOnFail(): boolean;
        public setPost(param0: org.json.JSONObject): void;
        public isGetRequest(): boolean;
        public clearCallbacks(): void;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerRequestQueue {
        public static class: java.lang.Class<io.branch.referral.ServerRequestQueue>;
        public postInitClear(): void;
        public printQueue(): void;
        public getSize(): number;
        public remove(param0: io.branch.referral.ServerRequest): boolean;
        public handleNewRequest(param0: io.branch.referral.ServerRequest): void;
        public static getInstance(param0: globalAndroid.content.Context): io.branch.referral.ServerRequestQueue;
        public addExtraInstrumentationData(param0: string, param1: string): void;
        public removeAt(param0: number): io.branch.referral.ServerRequest;
        public canClearInitData(): boolean;
        public addExtraInstrumentationData(param0: java.util.HashMap<string, string>): void;
      }
      export module ServerRequestQueue {
        export class BranchPostTask extends io.branch.referral.BranchAsyncTask<java.lang.Void, java.lang.Void, io.branch.referral.ServerResponse> {
          public static class: java.lang.Class<io.branch.referral.ServerRequestQueue.BranchPostTask>;
          public constructor(param0: io.branch.referral.ServerRequestQueue, param1: io.branch.referral.ServerRequest, param2: java.util.concurrent.CountDownLatch);
          public constructor();
          public onPreExecute(): void;
          public doInBackground(param0: androidNative.Array<java.lang.Void>): io.branch.referral.ServerResponse;
          public onPostExecute(param0: io.branch.referral.ServerResponse): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerRequestRegisterInstall extends io.branch.referral.ServerRequestInitSession {
        public static class: java.lang.Class<io.branch.referral.ServerRequestRegisterInstall>;
        public onPreExecute(): void;
        public handleFailure(param0: number, param1: string): void;
        public getRequestActionName(): string;
        public shouldRetryOnFail(): boolean;
        public isGetRequest(): boolean;
        public clearCallbacks(): void;
        public handleErrors(param0: globalAndroid.content.Context): boolean;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerRequestRegisterOpen extends io.branch.referral.ServerRequestInitSession {
        public static class: java.lang.Class<io.branch.referral.ServerRequestRegisterOpen>;
        public onPreExecute(): void;
        public handleFailure(param0: number, param1: string): void;
        public getRequestActionName(): string;
        public shouldRetryOnFail(): boolean;
        public isGetRequest(): boolean;
        public clearCallbacks(): void;
        public handleErrors(param0: globalAndroid.content.Context): boolean;
        public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ServerResponse {
        public static class: java.lang.Class<io.branch.referral.ServerResponse>;
        public getObject(): org.json.JSONObject;
        public getStatusCode(): number;
        public getTag(): string;
        public setPost(param0: any): void;
        public getFailReason(): string;
        public constructor(param0: string, param1: number, param2: string, param3: string);
        public getMessage(): string;
        public getArray(): org.json.JSONArray;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class ShareLinkManager {
        public static class: java.lang.Class<io.branch.referral.ShareLinkManager>;
      }
      export module ShareLinkManager {
        export class ChooserArrayAdapter {
          public static class: java.lang.Class<io.branch.referral.ShareLinkManager.ChooserArrayAdapter>;
          public selectedPos: number;
          public getItem(param0: number): any;
          public getCount(): number;
          public isEnabled(param0: number): boolean;
          public getItemId(param0: number): number;
          public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
        }
        export class CopyLinkItem {
          public static class: java.lang.Class<io.branch.referral.ShareLinkManager.CopyLinkItem>;
          public loadIcon(param0: globalAndroid.content.pm.PackageManager): globalAndroid.graphics.drawable.Drawable;
          public loadLabel(param0: globalAndroid.content.pm.PackageManager): string;
        }
        export class MoreShareItem {
          public static class: java.lang.Class<io.branch.referral.ShareLinkManager.MoreShareItem>;
          public loadIcon(param0: globalAndroid.content.pm.PackageManager): globalAndroid.graphics.drawable.Drawable;
          public loadLabel(param0: globalAndroid.content.pm.PackageManager): string;
        }
        export class ShareItemView {
          public static class: java.lang.Class<io.branch.referral.ShareLinkManager.ShareItemView>;
          public setLabel(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
          public constructor(param0: io.branch.referral.ShareLinkManager, param1: globalAndroid.content.Context);
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class SharingHelper {
        public static class: java.lang.Class<io.branch.referral.SharingHelper>;
        public constructor();
      }
      export module SharingHelper {
        export class SHARE_WITH {
          public static class: java.lang.Class<io.branch.referral.SharingHelper.SHARE_WITH>;
          public static FACEBOOK: io.branch.referral.SharingHelper.SHARE_WITH;
          public static FACEBOOK_MESSENGER: io.branch.referral.SharingHelper.SHARE_WITH;
          public static TWITTER: io.branch.referral.SharingHelper.SHARE_WITH;
          public static MESSAGE: io.branch.referral.SharingHelper.SHARE_WITH;
          public static EMAIL: io.branch.referral.SharingHelper.SHARE_WITH;
          public static FLICKR: io.branch.referral.SharingHelper.SHARE_WITH;
          public static GOOGLE_DOC: io.branch.referral.SharingHelper.SHARE_WITH;
          public static WHATS_APP: io.branch.referral.SharingHelper.SHARE_WITH;
          public static PINTEREST: io.branch.referral.SharingHelper.SHARE_WITH;
          public static HANGOUT: io.branch.referral.SharingHelper.SHARE_WITH;
          public static INSTAGRAM: io.branch.referral.SharingHelper.SHARE_WITH;
          public static WECHAT: io.branch.referral.SharingHelper.SHARE_WITH;
          public static SNAPCHAT: io.branch.referral.SharingHelper.SHARE_WITH;
          public static GMAIL: io.branch.referral.SharingHelper.SHARE_WITH;
          public toString(): string;
          public getAppName(): string;
          public static values(): androidNative.Array<io.branch.referral.SharingHelper.SHARE_WITH>;
          public static valueOf(param0: string): io.branch.referral.SharingHelper.SHARE_WITH;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export abstract class SystemObserver {
        public static class: java.lang.Class<io.branch.referral.SystemObserver>;
        public fetchAdId(param0: globalAndroid.content.Context, param1: io.branch.referral.SystemObserver.AdsParamsFetchEvents): void;
        public fetchInstallReferrer(param0: globalAndroid.content.Context, param1: io.branch.referral.SystemObserver.InstallReferrerFetchEvents): void;
      }
      export module SystemObserver {
        export class AdsParamsFetchEvents {
          public static class: java.lang.Class<io.branch.referral.SystemObserver.AdsParamsFetchEvents>;
          /**
           * Constructs a new instance of the io.branch.referral.SystemObserver$AdsParamsFetchEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAdsParamsFetchFinished(): void });
          public constructor();
          public onAdsParamsFetchFinished(): void;
        }
        export class InstallReferrerFetchEvents {
          public static class: java.lang.Class<io.branch.referral.SystemObserver.InstallReferrerFetchEvents>;
          /**
           * Constructs a new instance of the io.branch.referral.SystemObserver$InstallReferrerFetchEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInstallReferrersFinished(): void });
          public constructor();
          public onInstallReferrersFinished(): void;
        }
        export class UniqueId {
          public static class: java.lang.Class<io.branch.referral.SystemObserver.UniqueId>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class TrackingController {
        public static class: java.lang.Class<io.branch.referral.TrackingController>;
        public static isTrackingDisabled(param0: globalAndroid.content.Context): boolean;
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export class UniversalResourceAnalyser {
        public static class: java.lang.Class<io.branch.referral.UniversalResourceAnalyser>;
        public static getInstance(param0: globalAndroid.content.Context): io.branch.referral.UniversalResourceAnalyser;
      }
      export module UniversalResourceAnalyser {
        export class UrlSkipListUpdateTask extends io.branch.referral.BranchAsyncTask<java.lang.Void, java.lang.Void, org.json.JSONObject> {
          public static class: java.lang.Class<io.branch.referral.UniversalResourceAnalyser.UrlSkipListUpdateTask>;
          public onPostExecute(param0: org.json.JSONObject): void;
          public doInBackground(param0: androidNative.Array<java.lang.Void>): org.json.JSONObject;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module network {
        export abstract class BranchRemoteInterface {
          public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterface>;
          public static RETRY_NUMBER: string;
          public make_restful_get(param0: string, param1: org.json.JSONObject, param2: string, param3: string): io.branch.referral.ServerResponse;
          public constructor();
          public make_restful_post(param0: org.json.JSONObject, param1: string, param2: string, param3: string): io.branch.referral.ServerResponse;
          public doRestfulPost(param0: string, param1: org.json.JSONObject): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
          public doRestfulGet(param0: string): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
        }
        export module BranchRemoteInterface {
          export class BranchRemoteException {
            public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterface.BranchRemoteException>;
            public constructor(param0: number, param1: string);
            public constructor(param0: number);
          }
          export class BranchResponse {
            public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterface.BranchResponse>;
            public constructor(param0: string, param1: number);
          }
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module network {
        export class BranchRemoteInterfaceUrlConnection extends io.branch.referral.network.BranchRemoteInterface {
          public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterfaceUrlConnection>;
          public constructor();
          public constructor(param0: io.branch.referral.Branch);
          public doRestfulPost(param0: string, param1: org.json.JSONObject): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
          public doRestfulGet(param0: string): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class AdType {
          public static class: java.lang.Class<io.branch.referral.util.AdType>;
          public static BANNER: io.branch.referral.util.AdType;
          public static INTERSTITIAL: io.branch.referral.util.AdType;
          public static REWARDED_VIDEO: io.branch.referral.util.AdType;
          public static NATIVE: io.branch.referral.util.AdType;
          public static valueOf(param0: string): io.branch.referral.util.AdType;
          public getName(): string;
          public static values(): androidNative.Array<io.branch.referral.util.AdType>;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class BRANCH_STANDARD_EVENT {
          public static class: java.lang.Class<io.branch.referral.util.BRANCH_STANDARD_EVENT>;
          public static ADD_TO_CART: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static ADD_TO_WISHLIST: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static VIEW_CART: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static INITIATE_PURCHASE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static ADD_PAYMENT_INFO: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static PURCHASE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static SPEND_CREDITS: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static SEARCH: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static VIEW_ITEM: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static VIEW_ITEMS: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static RATE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static SHARE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static INITIATE_STREAM: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static COMPLETE_STREAM: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static COMPLETE_REGISTRATION: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static COMPLETE_TUTORIAL: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static ACHIEVE_LEVEL: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static UNLOCK_ACHIEVEMENT: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static INVITE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static LOGIN: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static RESERVE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static SUBSCRIBE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static START_TRIAL: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static CLICK_AD: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public static VIEW_AD: io.branch.referral.util.BRANCH_STANDARD_EVENT;
          public getName(): string;
          public static values(): androidNative.Array<io.branch.referral.util.BRANCH_STANDARD_EVENT>;
          public static valueOf(param0: string): io.branch.referral.util.BRANCH_STANDARD_EVENT;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class BranchContentSchema {
          public static class: java.lang.Class<io.branch.referral.util.BranchContentSchema>;
          public static COMMERCE_AUCTION: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_BUSINESS: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_OTHER: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_PRODUCT: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_RESTAURANT: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_SERVICE: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_TRAVEL_FLIGHT: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_TRAVEL_HOTEL: io.branch.referral.util.BranchContentSchema;
          public static COMMERCE_TRAVEL_OTHER: io.branch.referral.util.BranchContentSchema;
          public static GAME_STATE: io.branch.referral.util.BranchContentSchema;
          public static MEDIA_IMAGE: io.branch.referral.util.BranchContentSchema;
          public static MEDIA_MIXED: io.branch.referral.util.BranchContentSchema;
          public static MEDIA_MUSIC: io.branch.referral.util.BranchContentSchema;
          public static MEDIA_OTHER: io.branch.referral.util.BranchContentSchema;
          public static MEDIA_VIDEO: io.branch.referral.util.BranchContentSchema;
          public static OTHER: io.branch.referral.util.BranchContentSchema;
          public static TEXT_ARTICLE: io.branch.referral.util.BranchContentSchema;
          public static TEXT_BLOG: io.branch.referral.util.BranchContentSchema;
          public static TEXT_OTHER: io.branch.referral.util.BranchContentSchema;
          public static TEXT_RECIPE: io.branch.referral.util.BranchContentSchema;
          public static TEXT_REVIEW: io.branch.referral.util.BranchContentSchema;
          public static TEXT_SEARCH_RESULTS: io.branch.referral.util.BranchContentSchema;
          public static TEXT_STORY: io.branch.referral.util.BranchContentSchema;
          public static TEXT_TECHNICAL_DOC: io.branch.referral.util.BranchContentSchema;
          public static getValue(param0: string): io.branch.referral.util.BranchContentSchema;
          public static values(): androidNative.Array<io.branch.referral.util.BranchContentSchema>;
          public static valueOf(param0: string): io.branch.referral.util.BranchContentSchema;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class BranchEvent {
          public static class: java.lang.Class<io.branch.referral.util.BranchEvent>;
          public addContentItems(param0: androidNative.Array<io.branch.indexing.BranchUniversalObject>): io.branch.referral.util.BranchEvent;
          public setShipping(param0: number): io.branch.referral.util.BranchEvent;
          public setSearchQuery(param0: string): io.branch.referral.util.BranchEvent;
          public constructor(param0: string);
          public setTax(param0: number): io.branch.referral.util.BranchEvent;
          public logEvent(param0: globalAndroid.content.Context): boolean;
          public setTransactionID(param0: string): io.branch.referral.util.BranchEvent;
          public setCurrency(param0: io.branch.referral.util.CurrencyType): io.branch.referral.util.BranchEvent;
          public getEventName(): string;
          public constructor(param0: io.branch.referral.util.BRANCH_STANDARD_EVENT);
          public setAffiliation(param0: string): io.branch.referral.util.BranchEvent;
          public setCustomerEventAlias(param0: string): io.branch.referral.util.BranchEvent;
          public setDescription(param0: string): io.branch.referral.util.BranchEvent;
          public setCoupon(param0: string): io.branch.referral.util.BranchEvent;
          public addContentItems(param0: java.util.List<io.branch.indexing.BranchUniversalObject>): io.branch.referral.util.BranchEvent;
          public logEvent(param0: globalAndroid.content.Context, param1: io.branch.referral.util.BranchEvent.BranchLogEventCallback): boolean;
          public addCustomDataProperty(param0: string, param1: string): io.branch.referral.util.BranchEvent;
          public setRevenue(param0: number): io.branch.referral.util.BranchEvent;
          public setAdType(param0: io.branch.referral.util.AdType): io.branch.referral.util.BranchEvent;
        }
        export module BranchEvent {
          export class BranchLogEventCallback {
            public static class: java.lang.Class<io.branch.referral.util.BranchEvent.BranchLogEventCallback>;
            /**
             * Constructs a new instance of the io.branch.referral.util.BranchEvent$BranchLogEventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(param0: number): void; onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onSuccess(param0: number): void;
            public onFailure(param0: java.lang.Exception): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class CommerceEvent {
          public static class: java.lang.Class<io.branch.referral.util.CommerceEvent>;
          public setRevenue(param0: java.lang.Double): void;
          public setAffiliation(param0: string): void;
          public getCommerceJSONObject(): org.json.JSONObject;
          public setCurrencyType(param0: io.branch.referral.util.CurrencyType): void;
          public getRevenue(): java.lang.Double;
          public setShipping(param0: java.lang.Double): void;
          public getProducts(): java.util.List<org.json.JSONObject>;
          public getTax(): java.lang.Double;
          public addProduct(param0: io.branch.referral.util.Product): void;
          public getShipping(): java.lang.Double;
          public setProducts(param0: java.util.List<io.branch.referral.util.Product>): void;
          public constructor(param0: java.lang.Double, param1: io.branch.referral.util.CurrencyType, param2: string, param3: java.lang.Double, param4: java.lang.Double, param5: string, param6: string, param7: io.branch.referral.util.Product);
          public constructor(param0: java.lang.Double, param1: io.branch.referral.util.CurrencyType, param2: string, param3: java.lang.Double, param4: java.lang.Double, param5: string, param6: string, param7: java.util.List<io.branch.referral.util.Product>);
          public getAffiliation(): string;
          public getTransactionID(): string;
          public getCurrencyType(): io.branch.referral.util.CurrencyType;
          public setCoupon(param0: string): void;
          public setTransactionID(param0: string): void;
          public constructor();
          public getCoupon(): string;
          public setTax(param0: java.lang.Double): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class ContentMetadata {
          public static class: java.lang.Class<io.branch.referral.util.ContentMetadata>;
          public quantity: java.lang.Double;
          public price: java.lang.Double;
          public currencyType: io.branch.referral.util.CurrencyType;
          public sku: string;
          public productName: string;
          public productBrand: string;
          public productCategory: io.branch.referral.util.ProductCategory;
          public condition: io.branch.referral.util.ContentMetadata.CONDITION;
          public productVariant: string;
          public rating: java.lang.Double;
          public ratingAverage: java.lang.Double;
          public ratingCount: java.lang.Integer;
          public ratingMax: java.lang.Double;
          public addressStreet: string;
          public addressCity: string;
          public addressRegion: string;
          public addressCountry: string;
          public addressPostalCode: string;
          public latitude: java.lang.Double;
          public longitude: java.lang.Double;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
          public setRating(param0: java.lang.Double, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Integer): io.branch.referral.util.ContentMetadata;
          /** @deprecated */
          public setRating(param0: java.lang.Double, param1: java.lang.Double, param2: java.lang.Integer): io.branch.referral.util.ContentMetadata;
          public setProductCategory(param0: io.branch.referral.util.ProductCategory): io.branch.referral.util.ContentMetadata;
          public setLocation(param0: java.lang.Double, param1: java.lang.Double): io.branch.referral.util.ContentMetadata;
          public setAddress(param0: string, param1: string, param2: string, param3: string, param4: string): io.branch.referral.util.ContentMetadata;
          public setProductVariant(param0: string): io.branch.referral.util.ContentMetadata;
          public getImageCaptions(): java.util.ArrayList<string>;
          public describeContents(): number;
          public setProductBrand(param0: string): io.branch.referral.util.ContentMetadata;
          public addImageCaptions(param0: androidNative.Array<string>): io.branch.referral.util.ContentMetadata;
          public addCustomMetadata(param0: string, param1: string): io.branch.referral.util.ContentMetadata;
          public setQuantity(param0: java.lang.Double): io.branch.referral.util.ContentMetadata;
          public setProductCondition(param0: io.branch.referral.util.ContentMetadata.CONDITION): io.branch.referral.util.ContentMetadata;
          public constructor();
          public setProductName(param0: string): io.branch.referral.util.ContentMetadata;
          public convertToJson(): org.json.JSONObject;
          public static createFromJson(param0: io.branch.referral.BranchUtil.JsonReader): io.branch.referral.util.ContentMetadata;
          public setContentSchema(param0: io.branch.referral.util.BranchContentSchema): io.branch.referral.util.ContentMetadata;
          public setSku(param0: string): io.branch.referral.util.ContentMetadata;
          public getCustomMetadata(): java.util.HashMap<string, string>;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public setPrice(param0: java.lang.Double, param1: io.branch.referral.util.CurrencyType): io.branch.referral.util.ContentMetadata;
        }
        export module ContentMetadata {
          export class CONDITION {
            public static class: java.lang.Class<io.branch.referral.util.ContentMetadata.CONDITION>;
            public static OTHER: io.branch.referral.util.ContentMetadata.CONDITION;
            public static NEW: io.branch.referral.util.ContentMetadata.CONDITION;
            public static GOOD: io.branch.referral.util.ContentMetadata.CONDITION;
            public static FAIR: io.branch.referral.util.ContentMetadata.CONDITION;
            public static POOR: io.branch.referral.util.ContentMetadata.CONDITION;
            public static USED: io.branch.referral.util.ContentMetadata.CONDITION;
            public static REFURBISHED: io.branch.referral.util.ContentMetadata.CONDITION;
            public static EXCELLENT: io.branch.referral.util.ContentMetadata.CONDITION;
            public static getValue(param0: string): io.branch.referral.util.ContentMetadata.CONDITION;
            public static valueOf(param0: string): io.branch.referral.util.ContentMetadata.CONDITION;
            public static values(): androidNative.Array<io.branch.referral.util.ContentMetadata.CONDITION>;
          }
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class CurrencyType {
          public static class: java.lang.Class<io.branch.referral.util.CurrencyType>;
          public static AED: io.branch.referral.util.CurrencyType;
          public static AFN: io.branch.referral.util.CurrencyType;
          public static ALL: io.branch.referral.util.CurrencyType;
          public static AMD: io.branch.referral.util.CurrencyType;
          public static ANG: io.branch.referral.util.CurrencyType;
          public static AOA: io.branch.referral.util.CurrencyType;
          public static ARS: io.branch.referral.util.CurrencyType;
          public static AUD: io.branch.referral.util.CurrencyType;
          public static AWG: io.branch.referral.util.CurrencyType;
          public static AZN: io.branch.referral.util.CurrencyType;
          public static BAM: io.branch.referral.util.CurrencyType;
          public static BBD: io.branch.referral.util.CurrencyType;
          public static BDT: io.branch.referral.util.CurrencyType;
          public static BGN: io.branch.referral.util.CurrencyType;
          public static BHD: io.branch.referral.util.CurrencyType;
          public static BIF: io.branch.referral.util.CurrencyType;
          public static BMD: io.branch.referral.util.CurrencyType;
          public static BND: io.branch.referral.util.CurrencyType;
          public static BOB: io.branch.referral.util.CurrencyType;
          public static BOV: io.branch.referral.util.CurrencyType;
          public static BRL: io.branch.referral.util.CurrencyType;
          public static BSD: io.branch.referral.util.CurrencyType;
          public static BTN: io.branch.referral.util.CurrencyType;
          public static BWP: io.branch.referral.util.CurrencyType;
          public static BYN: io.branch.referral.util.CurrencyType;
          public static BYR: io.branch.referral.util.CurrencyType;
          public static BZD: io.branch.referral.util.CurrencyType;
          public static CAD: io.branch.referral.util.CurrencyType;
          public static CDF: io.branch.referral.util.CurrencyType;
          public static CHE: io.branch.referral.util.CurrencyType;
          public static CHF: io.branch.referral.util.CurrencyType;
          public static CHW: io.branch.referral.util.CurrencyType;
          public static CLF: io.branch.referral.util.CurrencyType;
          public static CLP: io.branch.referral.util.CurrencyType;
          public static CNY: io.branch.referral.util.CurrencyType;
          public static COP: io.branch.referral.util.CurrencyType;
          public static COU: io.branch.referral.util.CurrencyType;
          public static CRC: io.branch.referral.util.CurrencyType;
          public static CUC: io.branch.referral.util.CurrencyType;
          public static CUP: io.branch.referral.util.CurrencyType;
          public static CVE: io.branch.referral.util.CurrencyType;
          public static CZK: io.branch.referral.util.CurrencyType;
          public static DJF: io.branch.referral.util.CurrencyType;
          public static DKK: io.branch.referral.util.CurrencyType;
          public static DOP: io.branch.referral.util.CurrencyType;
          public static DZD: io.branch.referral.util.CurrencyType;
          public static EGP: io.branch.referral.util.CurrencyType;
          public static ERN: io.branch.referral.util.CurrencyType;
          public static ETB: io.branch.referral.util.CurrencyType;
          public static EUR: io.branch.referral.util.CurrencyType;
          public static FJD: io.branch.referral.util.CurrencyType;
          public static FKP: io.branch.referral.util.CurrencyType;
          public static GBP: io.branch.referral.util.CurrencyType;
          public static GEL: io.branch.referral.util.CurrencyType;
          public static GHS: io.branch.referral.util.CurrencyType;
          public static GIP: io.branch.referral.util.CurrencyType;
          public static GMD: io.branch.referral.util.CurrencyType;
          public static GNF: io.branch.referral.util.CurrencyType;
          public static GTQ: io.branch.referral.util.CurrencyType;
          public static GYD: io.branch.referral.util.CurrencyType;
          public static HKD: io.branch.referral.util.CurrencyType;
          public static HNL: io.branch.referral.util.CurrencyType;
          public static HRK: io.branch.referral.util.CurrencyType;
          public static HTG: io.branch.referral.util.CurrencyType;
          public static HUF: io.branch.referral.util.CurrencyType;
          public static IDR: io.branch.referral.util.CurrencyType;
          public static ILS: io.branch.referral.util.CurrencyType;
          public static INR: io.branch.referral.util.CurrencyType;
          public static IQD: io.branch.referral.util.CurrencyType;
          public static IRR: io.branch.referral.util.CurrencyType;
          public static ISK: io.branch.referral.util.CurrencyType;
          public static JMD: io.branch.referral.util.CurrencyType;
          public static JOD: io.branch.referral.util.CurrencyType;
          public static JPY: io.branch.referral.util.CurrencyType;
          public static KES: io.branch.referral.util.CurrencyType;
          public static KGS: io.branch.referral.util.CurrencyType;
          public static KHR: io.branch.referral.util.CurrencyType;
          public static KMF: io.branch.referral.util.CurrencyType;
          public static KPW: io.branch.referral.util.CurrencyType;
          public static KRW: io.branch.referral.util.CurrencyType;
          public static KWD: io.branch.referral.util.CurrencyType;
          public static KYD: io.branch.referral.util.CurrencyType;
          public static KZT: io.branch.referral.util.CurrencyType;
          public static LAK: io.branch.referral.util.CurrencyType;
          public static LBP: io.branch.referral.util.CurrencyType;
          public static LKR: io.branch.referral.util.CurrencyType;
          public static LRD: io.branch.referral.util.CurrencyType;
          public static LSL: io.branch.referral.util.CurrencyType;
          public static LYD: io.branch.referral.util.CurrencyType;
          public static MAD: io.branch.referral.util.CurrencyType;
          public static MDL: io.branch.referral.util.CurrencyType;
          public static MGA: io.branch.referral.util.CurrencyType;
          public static MKD: io.branch.referral.util.CurrencyType;
          public static MMK: io.branch.referral.util.CurrencyType;
          public static MNT: io.branch.referral.util.CurrencyType;
          public static MOP: io.branch.referral.util.CurrencyType;
          public static MRO: io.branch.referral.util.CurrencyType;
          public static MUR: io.branch.referral.util.CurrencyType;
          public static MVR: io.branch.referral.util.CurrencyType;
          public static MWK: io.branch.referral.util.CurrencyType;
          public static MXN: io.branch.referral.util.CurrencyType;
          public static MXV: io.branch.referral.util.CurrencyType;
          public static MYR: io.branch.referral.util.CurrencyType;
          public static MZN: io.branch.referral.util.CurrencyType;
          public static NAD: io.branch.referral.util.CurrencyType;
          public static NGN: io.branch.referral.util.CurrencyType;
          public static NIO: io.branch.referral.util.CurrencyType;
          public static NOK: io.branch.referral.util.CurrencyType;
          public static NPR: io.branch.referral.util.CurrencyType;
          public static NZD: io.branch.referral.util.CurrencyType;
          public static OMR: io.branch.referral.util.CurrencyType;
          public static PAB: io.branch.referral.util.CurrencyType;
          public static PEN: io.branch.referral.util.CurrencyType;
          public static PGK: io.branch.referral.util.CurrencyType;
          public static PHP: io.branch.referral.util.CurrencyType;
          public static PKR: io.branch.referral.util.CurrencyType;
          public static PLN: io.branch.referral.util.CurrencyType;
          public static PYG: io.branch.referral.util.CurrencyType;
          public static QAR: io.branch.referral.util.CurrencyType;
          public static RON: io.branch.referral.util.CurrencyType;
          public static RSD: io.branch.referral.util.CurrencyType;
          public static RUB: io.branch.referral.util.CurrencyType;
          public static RWF: io.branch.referral.util.CurrencyType;
          public static SAR: io.branch.referral.util.CurrencyType;
          public static SBD: io.branch.referral.util.CurrencyType;
          public static SCR: io.branch.referral.util.CurrencyType;
          public static SDG: io.branch.referral.util.CurrencyType;
          public static SEK: io.branch.referral.util.CurrencyType;
          public static SGD: io.branch.referral.util.CurrencyType;
          public static SHP: io.branch.referral.util.CurrencyType;
          public static SLL: io.branch.referral.util.CurrencyType;
          public static SOS: io.branch.referral.util.CurrencyType;
          public static SRD: io.branch.referral.util.CurrencyType;
          public static SSP: io.branch.referral.util.CurrencyType;
          public static STD: io.branch.referral.util.CurrencyType;
          public static SYP: io.branch.referral.util.CurrencyType;
          public static SZL: io.branch.referral.util.CurrencyType;
          public static THB: io.branch.referral.util.CurrencyType;
          public static TJS: io.branch.referral.util.CurrencyType;
          public static TMT: io.branch.referral.util.CurrencyType;
          public static TND: io.branch.referral.util.CurrencyType;
          public static TOP: io.branch.referral.util.CurrencyType;
          public static TRY: io.branch.referral.util.CurrencyType;
          public static TTD: io.branch.referral.util.CurrencyType;
          public static TWD: io.branch.referral.util.CurrencyType;
          public static TZS: io.branch.referral.util.CurrencyType;
          public static UAH: io.branch.referral.util.CurrencyType;
          public static UGX: io.branch.referral.util.CurrencyType;
          public static USD: io.branch.referral.util.CurrencyType;
          public static USN: io.branch.referral.util.CurrencyType;
          public static UYI: io.branch.referral.util.CurrencyType;
          public static UYU: io.branch.referral.util.CurrencyType;
          public static UZS: io.branch.referral.util.CurrencyType;
          public static VEF: io.branch.referral.util.CurrencyType;
          public static VND: io.branch.referral.util.CurrencyType;
          public static VUV: io.branch.referral.util.CurrencyType;
          public static WST: io.branch.referral.util.CurrencyType;
          public static XAF: io.branch.referral.util.CurrencyType;
          public static XAG: io.branch.referral.util.CurrencyType;
          public static XAU: io.branch.referral.util.CurrencyType;
          public static XBA: io.branch.referral.util.CurrencyType;
          public static XBB: io.branch.referral.util.CurrencyType;
          public static XBC: io.branch.referral.util.CurrencyType;
          public static XBD: io.branch.referral.util.CurrencyType;
          public static XCD: io.branch.referral.util.CurrencyType;
          public static XDR: io.branch.referral.util.CurrencyType;
          public static XFU: io.branch.referral.util.CurrencyType;
          public static XOF: io.branch.referral.util.CurrencyType;
          public static XPD: io.branch.referral.util.CurrencyType;
          public static XPF: io.branch.referral.util.CurrencyType;
          public static XPT: io.branch.referral.util.CurrencyType;
          public static XSU: io.branch.referral.util.CurrencyType;
          public static XTS: io.branch.referral.util.CurrencyType;
          public static XUA: io.branch.referral.util.CurrencyType;
          public static XXX: io.branch.referral.util.CurrencyType;
          public static YER: io.branch.referral.util.CurrencyType;
          public static ZAR: io.branch.referral.util.CurrencyType;
          public static ZMW: io.branch.referral.util.CurrencyType;
          public static valueOf(param0: string): io.branch.referral.util.CurrencyType;
          public toString(): string;
          public static getValue(param0: string): io.branch.referral.util.CurrencyType;
          public static values(): androidNative.Array<io.branch.referral.util.CurrencyType>;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class LinkProperties {
          public static class: java.lang.Class<io.branch.referral.util.LinkProperties>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
          public getMatchDuration(): number;
          public addControlParameter(param0: string, param1: string): io.branch.referral.util.LinkProperties;
          public getStage(): string;
          public describeContents(): number;
          public getControlParams(): java.util.HashMap<string, string>;
          public setAlias(param0: string): io.branch.referral.util.LinkProperties;
          public setFeature(param0: string): io.branch.referral.util.LinkProperties;
          public setChannel(param0: string): io.branch.referral.util.LinkProperties;
          public getCampaign(): string;
          public setStage(param0: string): io.branch.referral.util.LinkProperties;
          public getTags(): java.util.ArrayList<string>;
          public constructor();
          public static getReferredLinkProperties(): io.branch.referral.util.LinkProperties;
          public addTag(param0: string): io.branch.referral.util.LinkProperties;
          public getAlias(): string;
          public getFeature(): string;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public setDuration(param0: number): io.branch.referral.util.LinkProperties;
          public setCampaign(param0: string): io.branch.referral.util.LinkProperties;
          public getChannel(): string;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class Product {
          public static class: java.lang.Class<io.branch.referral.util.Product>;
          public getProductJSONObject(): org.json.JSONObject;
          public setSku(param0: string): void;
          public getBrand(): string;
          public setVariant(param0: string): void;
          public setName(param0: string): void;
          public getCategory(): io.branch.referral.util.ProductCategory;
          public setBrand(param0: string): void;
          public getPrice(): java.lang.Double;
          public getName(): string;
          public constructor();
          public getVariant(): string;
          public getSku(): string;
          public constructor(param0: string, param1: string, param2: java.lang.Double, param3: java.lang.Integer, param4: string, param5: string, param6: io.branch.referral.util.ProductCategory);
          public setCategory(param0: io.branch.referral.util.ProductCategory): void;
          public setPrice(param0: java.lang.Double): void;
          public getQuantity(): java.lang.Integer;
          public setQuantity(param0: java.lang.Integer): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class ProductCategory {
          public static class: java.lang.Class<io.branch.referral.util.ProductCategory>;
          public static ANIMALS_AND_PET_SUPPLIES: io.branch.referral.util.ProductCategory;
          public static APPAREL_AND_ACCESSORIES: io.branch.referral.util.ProductCategory;
          public static ARTS_AND_ENTERTAINMENT: io.branch.referral.util.ProductCategory;
          public static BABY_AND_TODDLER: io.branch.referral.util.ProductCategory;
          public static BUSINESS_AND_INDUSTRIAL: io.branch.referral.util.ProductCategory;
          public static CAMERAS_AND_OPTICS: io.branch.referral.util.ProductCategory;
          public static ELECTRONICS: io.branch.referral.util.ProductCategory;
          public static FOOD_BEVERAGES_AND_TOBACCO: io.branch.referral.util.ProductCategory;
          public static FURNITURE: io.branch.referral.util.ProductCategory;
          public static HARDWARE: io.branch.referral.util.ProductCategory;
          public static HEALTH_AND_BEAUTY: io.branch.referral.util.ProductCategory;
          public static HOME_AND_GARDEN: io.branch.referral.util.ProductCategory;
          public static LUGGAGE_AND_BAGS: io.branch.referral.util.ProductCategory;
          public static MATURE: io.branch.referral.util.ProductCategory;
          public static MEDIA: io.branch.referral.util.ProductCategory;
          public static OFFICE_SUPPLIES: io.branch.referral.util.ProductCategory;
          public static RELIGIOUS_AND_CEREMONIAL: io.branch.referral.util.ProductCategory;
          public static SOFTWARE: io.branch.referral.util.ProductCategory;
          public static SPORTING_GOODS: io.branch.referral.util.ProductCategory;
          public static TOYS_AND_GAMES: io.branch.referral.util.ProductCategory;
          public static VEHICLES_AND_PARTS: io.branch.referral.util.ProductCategory;
          public static values(): androidNative.Array<io.branch.referral.util.ProductCategory>;
          public getName(): string;
          public static getValue(param0: string): io.branch.referral.util.ProductCategory;
          public static valueOf(param0: string): io.branch.referral.util.ProductCategory;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class ShareSheetStyle {
          public static class: java.lang.Class<io.branch.referral.util.ShareSheetStyle>;
          public getUrlCopiedMessage(): string;
          public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
          public excludeFromShareSheet(param0: string): io.branch.referral.util.ShareSheetStyle;
          public setMoreOptionStyle(param0: number, param1: number): io.branch.referral.util.ShareSheetStyle;
          public getMoreOptionIcon(): globalAndroid.graphics.drawable.Drawable;
          public getDialogThemeResourceID(): number;
          public setDefaultURL(param0: string): io.branch.referral.util.ShareSheetStyle;
          public getCopyUrlIcon(): globalAndroid.graphics.drawable.Drawable;
          public setStyleResourceID(param0: number): io.branch.referral.util.ShareSheetStyle;
          public setCopyUrlStyle(param0: globalAndroid.graphics.drawable.Drawable, param1: string, param2: string): io.branch.referral.util.ShareSheetStyle;
          public getIsFullWidthStyle(): boolean;
          public setDialogThemeResourceID(param0: number): io.branch.referral.util.ShareSheetStyle;
          public getDividerHeight(): number;
          public addPreferredSharingOption(param0: io.branch.referral.SharingHelper.SHARE_WITH): io.branch.referral.util.ShareSheetStyle;
          public getMoreOptionText(): string;
          public setDividerHeight(param0: number): io.branch.referral.util.ShareSheetStyle;
          public getMessageTitle(): string;
          public setSharingTitle(param0: globalAndroid.view.View): io.branch.referral.util.ShareSheetStyle;
          public getIncludedInShareSheet(): java.util.List<string>;
          public includeInShareSheet(param0: string): io.branch.referral.util.ShareSheetStyle;
          public setMoreOptionStyle(param0: globalAndroid.graphics.drawable.Drawable, param1: string): io.branch.referral.util.ShareSheetStyle;
          public getSharingTitleView(): globalAndroid.view.View;
          public getExcludedFromShareSheet(): java.util.List<string>;
          public getPreferredOptions(): java.util.ArrayList<io.branch.referral.SharingHelper.SHARE_WITH>;
          public includeInShareSheet(param0: androidNative.Array<string>): io.branch.referral.util.ShareSheetStyle;
          public getStyleResourceID(): number;
          public getCopyURlText(): string;
          public setSharingTitle(param0: string): io.branch.referral.util.ShareSheetStyle;
          public setIconSize(param0: number): io.branch.referral.util.ShareSheetStyle;
          public excludeFromShareSheet(param0: java.util.List<string>): io.branch.referral.util.ShareSheetStyle;
          public setAsFullWidthStyle(param0: boolean): io.branch.referral.util.ShareSheetStyle;
          public getDefaultURL(): string;
          public includeInShareSheet(param0: java.util.List<string>): io.branch.referral.util.ShareSheetStyle;
          public getSharingTitle(): string;
          public getIconSize(): number;
          public setCopyUrlStyle(param0: number, param1: number, param2: number): io.branch.referral.util.ShareSheetStyle;
          public excludeFromShareSheet(param0: androidNative.Array<string>): io.branch.referral.util.ShareSheetStyle;
          public getMessageBody(): string;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module util {
        export class SharingUtil {
          public static class: java.lang.Class<io.branch.referral.util.SharingUtil>;
          public static INSTANCE: io.branch.referral.util.SharingUtil;
          public setSharedURL(param0: string): void;
          public getSharedURL(): string;
          public static share(param0: string, param1: string, param2: string, param3: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module validators {
        export class BranchIntegrationModel {
          public static class: java.lang.Class<io.branch.referral.validators.BranchIntegrationModel>;
          public constructor(param0: globalAndroid.content.Context);
        }
        export module BranchIntegrationModel {
          export class getDeepLinkSchemeTasks extends io.branch.referral.BranchAsyncTask<globalAndroid.content.Context, java.lang.Void, org.json.JSONObject> {
            public static class: java.lang.Class<io.branch.referral.validators.BranchIntegrationModel.getDeepLinkSchemeTasks>;
            public doInBackground(param0: androidNative.Array<globalAndroid.content.Context>): org.json.JSONObject;
          }
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module validators {
        export class DeepLinkRoutingValidator {
          public static class: java.lang.Class<io.branch.referral.validators.DeepLinkRoutingValidator>;
          public static validate(param0: java.lang.ref.WeakReference<globalAndroid.app.Activity>): void;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module validators {
        export class IntegrationValidator extends io.branch.referral.validators.ServerRequestGetAppConfig.IGetAppConfigEvents {
          public static class: java.lang.Class<io.branch.referral.validators.IntegrationValidator>;
          public onAppConfigAvailable(param0: org.json.JSONObject): void;
          public static validate(param0: globalAndroid.content.Context): void;
        }
      }
    }
  }
}

declare module io {
  export module branch {
    export module referral {
      export module validators {
        export class ServerRequestGetAppConfig extends io.branch.referral.ServerRequest {
          public static class: java.lang.Class<io.branch.referral.validators.ServerRequestGetAppConfig>;
          public handleErrors(param0: globalAndroid.content.Context): boolean;
          public clearCallbacks(): void;
          public handleFailure(param0: number, param1: string): void;
          public getRequestUrl(): string;
          public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
          public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.Defines.RequestPath);
          public constructor(param0: io.branch.referral.Defines.RequestPath, param1: org.json.JSONObject, param2: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: io.branch.referral.validators.ServerRequestGetAppConfig.IGetAppConfigEvents);
          public isGetRequest(): boolean;
        }
        export module ServerRequestGetAppConfig {
          export class IGetAppConfigEvents {
            public static class: java.lang.Class<io.branch.referral.validators.ServerRequestGetAppConfig.IGetAppConfigEvents>;
            /**
             * Constructs a new instance of the io.branch.referral.validators.ServerRequestGetAppConfig$IGetAppConfigEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAppConfigAvailable(param0: org.json.JSONObject): void });
            public constructor();
            public onAppConfigAvailable(param0: org.json.JSONObject): void;
          }
        }
      }
    }
  }
}

//Generics information:
//io.branch.referral.BranchAsyncTask:3
//io.branch.referral.BranchUrlBuilder:1
//io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler:1
//io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler:1
//io.branch.referral.QRCode.BranchQRCode.BranchQRCodeRequestHandler:1
