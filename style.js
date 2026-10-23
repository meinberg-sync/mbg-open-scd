// define rules for unexposed parts of the shell
const shellSheet = new CSSStyleSheet();
shellSheet.replaceSync(`
  #menu-button,
  [slot='alignEnd'] oscd-filled-icon-button {
    --md-filled-icon-button-container-color: transparent;
  }
`);

const adoptSheet = (root, sheet) => {
  if (root && !root.adoptedStyleSheets.includes(sheet)) {
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
  }
};

// style the shell, and the plugins menu whenever it is added to the shell
export async function styleShell(oscdShell) {
  const stylePluginsMenu = () =>
    adoptSheet(
      oscdShell.shadowRoot?.querySelector("plugins-menu")?.shadowRoot,
      shellSheet,
    );

  await oscdShell.updateComplete;

  adoptSheet(oscdShell.shadowRoot, shellSheet);

  stylePluginsMenu();
  new MutationObserver(stylePluginsMenu).observe(oscdShell.shadowRoot, {
    childList: true,
    subtree: true,
  });
}
