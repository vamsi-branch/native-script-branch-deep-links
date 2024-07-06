package java.io.branch.nsbranch;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.BroadcastReceiver;
import android.graphics.Bitmap;
import android.net.Uri;
import android.util.Base64;

import androidx.annotation.Nullable;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import android.util.Log;
import android.os.Handler;

import io.branch.referral.*;
import io.branch.referral.Branch.BranchLinkCreateListener;
import io.branch.referral.QRCode.BranchQRCode;
import io.branch.referral.util.*;
import io.branch.referral.Branch;
import io.branch.indexing.*;

import org.json.*;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class NSBranchModule {

    public static final String NATIVE_SCRIPT_CLASS = "NSBranch";
    public static final String NAME = "NSBranch";
    public static final String NATIVE_INIT_SESSION_FINISHED_EVENT = "io.branch.nsbranch.NSBranchModule.onInitSessionFinished";
    public static final String NATIVE_INIT_SESSION_FINISHED_EVENT_BRANCH_UNIVERSAL_OBJECT = "branch_universal_object";
    public static final String NATIVE_INIT_SESSION_FINISHED_EVENT_LINK_PROPERTIES = "link_properties";
    public static final String NATIVE_INIT_SESSION_FINISHED_EVENT_PARAMS = "params";
    public static final String NATIVE_INIT_SESSION_FINISHED_EVENT_ERROR = "error";
    public static final String NATIVE_INIT_SESSION_FINISHED_EVENT_URI = "uri";
    public static final String NATIVE_INIT_SESSION_STARTED_EVENT = "io.branch.nsbranch.NSBranchModule.onInitSessionStarted";
    public static final String NATIVE_INIT_SESSION_STARTED_EVENT_URI = "uri";
    private static final String RN_INIT_SESSION_SUCCESS_EVENT = "NSBranch.initSessionSuccess";
    private static final String RN_INIT_SESSION_ERROR_EVENT = "NSBranch.initSessionError";
    private static final String RN_INIT_SESSION_START_EVENT = "NSBranch.initSessionStart";
    private static final String INIT_SESSION_SUCCESS = "INIT_SESSION_SUCCESS";
    private static final String INIT_SESSION_ERROR = "INIT_SESSION_ERROR";
    private static final String INIT_SESSION_START = "INIT_SESSION_START";

    private static final String STANDARD_EVENT_ADD_TO_CART = "STANDARD_EVENT_ADD_TO_CART";
    private static final String STANDARD_EVENT_ADD_TO_WISHLIST = "STANDARD_EVENT_ADD_TO_WISHLIST";
    private static final String STANDARD_EVENT_VIEW_CART = "STANDARD_EVENT_VIEW_CART";
    private static final String STANDARD_EVENT_INITIATE_PURCHASE = "STANDARD_EVENT_INITIATE_PURCHASE";
    private static final String STANDARD_EVENT_ADD_PAYMENT_INFO = "STANDARD_EVENT_ADD_PAYMENT_INFO";
    private static final String STANDARD_EVENT_PURCHASE = "STANDARD_EVENT_PURCHASE";
    private static final String STANDARD_EVENT_VIEW_AD = "STANDARD_EVENT_VIEW_AD";
    private static final String STANDARD_EVENT_CLICK_AD = "STANDARD_EVENT_CLICK_AD";

    private static final String STANDARD_EVENT_SEARCH = "STANDARD_EVENT_SEARCH";
    private static final String STANDARD_EVENT_VIEW_ITEM = "STANDARD_EVENT_VIEW_ITEM";
    private static final String STANDARD_EVENT_VIEW_ITEMS = "STANDARD_EVENT_VIEW_ITEMS";
    private static final String STANDARD_EVENT_RATE = "STANDARD_EVENT_RATE";
    private static final String STANDARD_EVENT_SHARE = "STANDARD_EVENT_SHARE";

    private static final String STANDARD_EVENT_COMPLETE_REGISTRATION = "STANDARD_EVENT_COMPLETE_REGISTRATION";
    private static final String STANDARD_EVENT_COMPLETE_TUTORIAL = "STANDARD_EVENT_COMPLETE_TUTORIAL";
    private static final String STANDARD_EVENT_ACHIEVE_LEVEL = "STANDARD_EVENT_ACHIEVE_LEVEL";
    private static final String STANDARD_EVENT_UNLOCK_ACHIEVEMENT = "STANDARD_EVENT_UNLOCK_ACHIEVEMENT";
    private static final String STANDARD_EVENT_INVITE = "STANDARD_EVENT_INVITE";
    private static final String STANDARD_EVENT_LOGIN = "STANDARD_EVENT_LOGIN";
    private static final String STANDARD_EVENT_RESERVE = "STANDARD_EVENT_RESERVE";
    private static final String STANDARD_EVENT_SUBSCRIBE = "STANDARD_EVENT_SUBSCRIBE";
    private static final String STANDARD_EVENT_START_TRIAL = "STANDARD_EVENT_START_TRIAL";

    private static final String IDENT_FIELD_NAME = "ident";
    public static final String UNIVERSAL_OBJECT_NOT_FOUND_ERROR_CODE = "NSBranch::Error::BUONotFound";
    public static final String GENERIC_ERROR = "NSBranch::Error";
    private static final long AGING_HASH_TTL = 3600000;
    private static final String PLUGIN_NAME = "NativeScript";

    private static JSONObject initSessionResult = null;
    private BroadcastReceiver mInitSessionFinishedEventReceiver = null;
    private BroadcastReceiver mInitSessionStartedEventReceiver = null;
    private static Branch.BranchUniversalReferralInitListener initListener = null;

    private static Activity mActivity = null;
    private static boolean mInitialized = false;
    private static volatile boolean mNewIntent = true;
    private static JSONObject mRequestMetadata = new JSONObject();

    // private AgingHash<String, BranchUniversalObject> mUniversalObjectMap = new AgingHash<>(AGING_HASH_TTL);

    private static Branch.BranchReferralInitListener referralInitListener = null;

    public static void getAutoInstance(Context context) {
      // Branch.registerPlugin(PLUGIN_NAME, io.branch.rnbranch.BuildConfig.RNBRANCH_VERSION);
      Branch.registerPlugin(PLUGIN_NAME, "1.0.0");
      Branch.getAutoInstance(context);
    }

  public static void reInitSession(Activity nsActivity) {
      Branch branch = Branch.getInstance();
      Intent intent = nsActivity.getIntent();
      Log.d(NATIVE_SCRIPT_CLASS,"reInitSession intent " + intent);
      if (intent != null) {
          intent.putExtra("branch_force_new_session", true);
          notifyJSOfInitSessionStart(nsActivity, intent.getData());
          Branch.sessionBuilder(nsActivity).withCallback(referralInitListener).reInit();
      } else {
          Log.w(NATIVE_SCRIPT_CLASS, "reInitSession was called but the Intent is null");
      }
    }

    public static void initSession(final Uri uri, Activity nsActivity, Branch.BranchUniversalReferralInitListener anInitListener) {
      Log.d(NATIVE_SCRIPT_CLASS,"initSession uri " + uri + " nsActivity " + nsActivity + " anInitListener" + anInitListener);
      initListener = anInitListener;
      initSession(uri, nsActivity);
    }

    public static void initSession(final Uri uri, Activity nsActivity) {
        Log.d(NATIVE_SCRIPT_CLASS,"initSession uri " + uri + " nsActivity " + nsActivity);

        Branch branch = setupBranch(nsActivity.getApplicationContext());

        mActivity = nsActivity;
        final boolean isNewIntent = mNewIntent;
        referralInitListener = new Branch.BranchReferralInitListener(){

            private Activity mmActivity = null;

            @Override
            public void onInitFinished(JSONObject referringParams, BranchError error) {
                Log.d(NATIVE_SCRIPT_CLASS,"onInitFinished referringParams " + referringParams);

                // native script currently expects this to never be null
                if (referringParams == null) {
                    referringParams = new JSONObject();
                }

                Log.d(NATIVE_SCRIPT_CLASS, "onInitFinished");
                JSONObject result = new JSONObject();

                try {
                    result.put(NATIVE_INIT_SESSION_FINISHED_EVENT_PARAMS, referringParams);
                    result.put(NATIVE_INIT_SESSION_FINISHED_EVENT_ERROR, error != null ? error.getMessage() : JSONObject.NULL);
                    result.put(NATIVE_INIT_SESSION_FINISHED_EVENT_URI, isNewIntent && uri != null ? uri.toString() : JSONObject.NULL);
                }
                catch (JSONException e) {
                    Log.e(NATIVE_SCRIPT_CLASS, e.getMessage());
                }
                initSessionResult = result;

                BranchUniversalObject branchUniversalObject =  BranchUniversalObject.getReferredBranchUniversalObject();
                LinkProperties linkProperties = LinkProperties.getReferredLinkProperties();

                if (initListener != null) {
                    Log.d(NATIVE_SCRIPT_CLASS,"onInitFinished " + branchUniversalObject + " " + linkProperties + " error " +error);
                    initListener.onInitFinished(branchUniversalObject, linkProperties, error);
                }
                generateLocalBroadcast(referringParams, uri, branchUniversalObject, linkProperties, error);
            }

            private Branch.BranchReferralInitListener init(Activity activity) {
                mmActivity = activity;
                return this;
            }

            private void generateLocalBroadcast(JSONObject referringParams,
                                                Uri uri,
                                                BranchUniversalObject branchUniversalObject,
                                                LinkProperties linkProperties,
                                                BranchError error) {
                
                Intent broadcastIntent = new Intent(NATIVE_INIT_SESSION_FINISHED_EVENT);

                if (referringParams != null) {
                    broadcastIntent.putExtra(NATIVE_INIT_SESSION_FINISHED_EVENT_PARAMS, referringParams.toString());
                }

                if (branchUniversalObject != null) {
                    broadcastIntent.putExtra(NATIVE_INIT_SESSION_FINISHED_EVENT_BRANCH_UNIVERSAL_OBJECT, branchUniversalObject);
                }

                if (linkProperties != null) {
                    broadcastIntent.putExtra(NATIVE_INIT_SESSION_FINISHED_EVENT_LINK_PROPERTIES, linkProperties);
                }

                /*
                * isNewIntent is a capture of the value of mNewIntent above, so does not change when
                * mNewIntent changes in onNewIntent.
                */
                if (isNewIntent && uri != null) {
                    broadcastIntent.putExtra(NATIVE_INIT_SESSION_FINISHED_EVENT_URI, uri.toString());
                }

                if (error != null) {
                    broadcastIntent.putExtra(NATIVE_INIT_SESSION_FINISHED_EVENT_ERROR, error.getMessage());
                }

                LocalBroadcastManager.getInstance(mmActivity).sendBroadcast(broadcastIntent);
            }
        }.init(nsActivity);

        notifyJSOfInitSessionStart(nsActivity, uri);
        
        Branch.InitSessionBuilder initSessionBuilder = Branch.sessionBuilder(nsActivity).withCallback(referralInitListener).withData(uri);
        Log.d(NATIVE_SCRIPT_CLASS, "sessionBuilder " + initSessionBuilder);
        initSessionBuilder.init();
    }

  public static void onNewIntent(Intent intent) {
    Log.d(NATIVE_SCRIPT_CLASS,"onNewIntent " + intent);
    mActivity.setIntent(intent);
    mNewIntent = true;
    reInitSession(mActivity);
  }

  private static void notifyJSOfInitSessionStart(Context context, Uri uri) {
    Log.d(NATIVE_SCRIPT_CLASS,"notifyJSOfInitSessionStart  " + uri);

    if (!mNewIntent) return;
    mNewIntent = false;

    Intent broadcastIntent = new Intent(NATIVE_INIT_SESSION_STARTED_EVENT);
    if (uri != null) {
        broadcastIntent.putExtra(NATIVE_INIT_SESSION_STARTED_EVENT_URI, uri);
    }

    Log.d(NATIVE_SCRIPT_CLASS, "Broadcasting NATIVE_INIT_SESSION_STARTED_EVENT");
    LocalBroadcastManager.getInstance(context).sendBroadcast(broadcastIntent);
  }

  public static void enableLogging() {
    Branch.enableLogging();
  }

  private static Branch setupBranch(Context context) {
    Branch branch = Branch.getAutoInstance(context);

    if (!mInitialized) {
        Log.i(NATIVE_SCRIPT_CLASS, "Initializing Branch SDK v. " + BuildConfig.VERSION_NAME);

        if (mRequestMetadata != null) {
            Iterator keys = mRequestMetadata.keys();
            while (keys.hasNext()) {
                String key = (String) keys.next();
                try {
                    branch.setRequestMetadata(key, mRequestMetadata.getString(key));
                } catch (JSONException e) {
                    // no-op
                }
            }
        }

        mInitialized = true;
    }

    return branch;
}

}

