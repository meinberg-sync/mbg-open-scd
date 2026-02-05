import '@webcomponents/scoped-custom-element-registry';
import '@omicronenergy/oscd-shell/oscd-shell.js';

import { MICTLandingPage } from './landing-page.js';
import { plugins } from "./plugins.js";

import OscdMenuFileRename from '@omicronenergy/oscd-menu-commons/oscd-menu-file-rename.js';
import OscdEditorSource from "@omicronenergy/oscd-editor-source";
import OscdBackgroundEditV1 from "@omicronenergy/oscd-background-editv1";
import OscdEditorDiff from "@omicronenergy/oscd-editor-diff";
import OscdBackgroundWizardEvents from "@omicronenergy/oscd-background-wizard-events/oscd-background-wizard-events.js";

const _customElementsDefine = window.customElements.define;
window.customElements.define = (name, cl, conf) => {
  if (!customElements.get(name)) {
    try {
      _customElementsDefine.call(window.customElements, name, cl, conf);
    } catch (e) {
      console.warn(e);
    }
	}
};

const oscdShell = document.querySelector('oscd-shell');
const registry = oscdShell.registry;
registry.define('mict-landing-page', MICTLandingPage);
registry.define('oscd-menu-file-rename', OscdMenuFileRename);
registry.define("oscd-editor-source", OscdEditorSource);
registry.define('oscd-background-editv1', OscdBackgroundEditV1);
registry.define("oscd-editor-diff", OscdEditorDiff);
registry.define('oscd-background-wizard-events', OscdBackgroundWizardEvents);

oscdShell.plugins = plugins;

oscdShell.dispatchEvent(
  new CustomEvent("mict-plugins-updated", {
    bubbles: true,
    composed: true,
  }),
);

const params = (new URL(document.location)).searchParams;
for (const [name, value] of params) {
	oscdShell.setAttribute(name, value);
}