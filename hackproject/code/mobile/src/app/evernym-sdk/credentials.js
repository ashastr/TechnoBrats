// @flow
import DiscoverId from "../discover/screens/DiscoverId";
import MyCreds from "../discover/screens/MyCreds";
/*
 * Here is you can customize My Credentials view.
 * */

// text which will be used for the header.
export const HEADLINE = null;

// component to be displayed in cases of no credentials.
export const MyCredentialsViewEmptyState = DiscoverId;

// flag indicating whether you want to show camera button.
export const SHOW_CAMERA_BUTTON = false;

// custom component to use for My Credentials screen rendering (instead of predefined one)
// This will display above cred screen
// export const CustomMyCredentialsScreen = null;
export const CustomMyCredentialsScreen = MyCreds;

// custom component to use for Credential Details screen rendering (instead of predefined one)
export const CustomCredentialDetailsScreen = null;

/*
 * Here is you can customize Show Credential dialog here.
 * */

// whether you want to use the feature of presenting a credential
export const SHOW_CREDENTIAL = null;

// NOTE: acceptably if `presenting a credential` feature is enable
// whether you want to automatically accept following `presentation request` and generate proof or show it to user for manually accepting
export const AUTO_ACCEPT_CREDENTIAL_PRESENTATION_REQUEST = null;

// text which will be used as the header
export const SHOW_CREDENTIAL_HEADLINE = null;

// custom component to use for Show Credential dialog rendering (instead of predefined one)
export const CustomShowCredentialModal = null;
