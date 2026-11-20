// define rules for unexposed parts of the shell
const shellSheet = new CSSStyleSheet();
shellSheet.replaceSync(`
  /* MICT has no header, so hide this element to even out spacing */
  h1.app-title {
    display: none;
  }

  #menu-button,
  [slot='alignEnd'] oscd-filled-icon-button {
    --md-filled-icon-button-container-color: transparent;

    margin-right: var(--app-bar-logo-gap);
  }

  #menu-button oscd-icon {
    font-size: 0;
  }

  /* Override plugin default icon with "menu" icon */
  #menu-button oscd-icon::before {
    content: "menu";
    font-size: var(--_icon-size);
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
