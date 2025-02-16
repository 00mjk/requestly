import { trackEvent } from "modules/analytics";
import { ONBOARDING } from "../constants";

export const trackExtensionInstallationButtonClicked = (eventPage) => {
  const params = { eventPage };
  trackEvent(ONBOARDING.INSTALL_EXTENSION_LINK_CLICKED, params);
};

export const trackDesktopAppPromoClicked = (source, action) => {
  const params = { source, action };
  trackEvent(ONBOARDING.DESKTOP_APP_PROMO_CLICKED, params);
};
