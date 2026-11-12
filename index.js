import '@webcomponents/scoped-custom-element-registry';
import '@omicronenergy/oscd-shell/oscd-shell.js';

import { loadPlugins } from './plugins.js';
import { styleShell } from './style.js';
import { initSettings } from './settings.js';

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
initSettings(oscdShell);

const params = (new URL(document.location)).searchParams;
for (const [name, value] of params) {
  oscdShell.setAttribute(name, value);
}

try {
  await loadPlugins(oscdShell);
} catch (e) {
  console.error("Error loading plugins:", e);
}

await styleShell(oscdShell);

oscdShell.dispatchEvent(
  new CustomEvent("mict-plugins-updated", {
    bubbles: true,
    composed: true,
  }),
);
