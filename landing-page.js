import { LitElement, html, css } from 'lit';

export class MICTLandingPage extends LitElement {
  handleMenuPluginClick(plugin) {
    const oscdShell = this.closest("oscd-shell");
    if (oscdShell) {
      const menuPluginInstance = oscdShell.shadowRoot.querySelector(
        plugin.tagName,
      );
      if (menuPluginInstance) {
        menuPluginInstance.run();
      }
    }
  }

  getMenuPlugins() {
    const menuPlugins = this.closest("oscd-shell").plugins.menu;
    return menuPlugins.filter((plugin) => plugin.requireDoc !== true);
  }

  render() {
    return html`
      <div class="landing-page-container">
        <div class="landing-interface">
          <div class="landing-header">
            <img src="./assets/meinberg.png" alt="Meinberg Logo" width="150" />
            <h2>IED Configuration Tool</h2>
          </div>
          <div class="landing-options">
            <p>Get started by choosing an option below:</p>
            ${this.getMenuPlugins().map(
              (plugin) =>
                html`<button @click=${() => this.handleMenuPluginClick(plugin)}>
                  <md-icon>${plugin.icon}</md-icon>
                  ${plugin.name}
                </button>`,
            )}
            <a
              href="https://www.meinbergglobal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <md-icon>tour</md-icon>
              Visit Us!
            </a>
          </div>
        </div>
        <div class="landing-background">
          <div>
            Powered by
            <img src="./assets/oscd-logo.jpeg" alt="OpenSCD Logo" width="100" />
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host > .landing-page-container {
      font-family: "Roboto", sans-serif;
      color: var(--oscd-theme-primary);
      font-weight: 300;
      display: flex;
    }

    .landing-interface {
      height: 100vh;
      width: 66%;
      background-color: white;
      display: flex;
      flex-direction: column;
    }

    .landing-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 1rem;
    }

    .landing-options {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      margin: 0 2rem;
    }

    .landing-options > p {
      font-size: 24px;
      margin: 0;
    }

    .landing-options > button,
    .landing-options > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 2rem 1rem;
      font-size: 20px;
      text-align: start;
      cursor: pointer;
      width: inherit;
      border-radius: 8px;
      color: var(--oscd-theme-secondary);
      border: 1px solid var(--oscd-theme-base3);
      background-color: var(--oscd-theme-base3);
      transition:
        background-color 0.3s,
        box-shadow 0.3s;
    }

    .landing-options > a {
      text-decoration: none;
      font-weight: 400;
    }

    .landing-options > button:hover,
    .landing-options > a:hover {
      background-color: var(--oscd-theme-secondary);
      color: var(--oscd-theme-base3);
    }

    @media (prefers-color-scheme: dark) {
      .landing-interface {
        background-color: var(--mbg-primary-dark);
        color: var(--oscd-theme-primary);
      }

      .landing-options > button,
      .landing-options > a {
        color: var(--oscd-theme-base02);
        background-color: var(--mbg-bg-primary-700);
        border: 1px solid var(--mbg-bg-primary-700);
      }

      .landing-options > button:hover,
      .landing-options > a:hover {
        background-color: var(--oscd-theme-primary);
      }
    }

    .landing-background {
      height: 100vh;
      width: 100%;
      background: linear-gradient(
        325deg,
        var(--mbg-bg-primary-300),
        var(--mbg-open-scd-blue),
        var(--mbg-primary-light),
        var(--mbg-blue-300),
        var(--mbg-blue-700)
      );
      background-size: 300% 300%;
      animation: gradient-animation 20s ease infinite;
    }

    .landing-background > div {
      color: white;
      display: flex;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      flex-flow: column;
      gap: 0.25rem;
    }

    .landing-background img {
      border-radius: 5px;
    }

    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
}

customElements.define('mict-landing-page', MICTLandingPage);
export default MICTLandingPage;