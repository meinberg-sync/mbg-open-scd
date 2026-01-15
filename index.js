import '@webcomponents/scoped-custom-element-registry';
import '@omicronenergy/oscd-shell/oscd-shell.js';

import { MICTLandingPage } from './landing-page.js';
import { plugins } from "./plugins.js";

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
oscdShell.registry.define('mict-landing-page', MICTLandingPage);
oscdShell.plugins = plugins;

const params = (new URL(document.location)).searchParams;
for (const [name, value] of params) {
	oscdShell.setAttribute(name, value);
}