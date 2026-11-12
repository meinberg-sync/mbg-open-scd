import { LitElement, html, css, nothing } from 'lit';

export class MICTLandingPage extends LitElement {
  shell = this.closest("oscd-shell");

  static properties = {
    menuPlugins: { state: true },
  };

  constructor() {
    super();
    this.menuPlugins = [];
  }

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

  connectedCallback() {
    super.connectedCallback();

    this.shell.addEventListener("mict-plugins-updated", () => {
      const menu = this.shell._resolvedPlugins?.menu ?? this.shell.plugins.menu;
      this.menuPlugins = menu
        .flatMap((p) => (Array.isArray(p.plugins) ? p.plugins : [p]))
        .filter((plugin) => plugin.requireDoc !== true);
    });
  }

  render() {
    return html`
      <div class="landing-page-container">
        <div class="landing-interface">
          <div class="landing-header">
            <div class="logo-wrapper">
              <img
                class="light-logo"
                src="./assets/meinberg_claim_dark.png"
                alt="Meinberg Logo"
              />
              <img
                class="dark-logo"
                src="./assets/meinberg_claim_light.png"
                alt="Meinberg Logo"
              />
            </div>
            <h2>IED Configuration Tool</h2>
          </div>
          <div class="landing-options">
            <p>Get started by choosing an option below:</p>
            ${this.menuPlugins.map(
              (plugin) =>
                html`<button @click=${() => this.handleMenuPluginClick(plugin)}>
                  <md-icon>${plugin.icon}</md-icon>
                  <span class="option-text">
                    <span class="option-label">${plugin.name}</span>
                    ${plugin.description
                      ? html`<span class="option-description"
                          >${plugin.description}</span
                        >`
                      : nothing}
                  </span>
                </button>`,
            )}
            <a
              href="https://www.meinbergglobal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <md-icon>tour</md-icon>
              <span class="option-text">
                <span class="option-label">Explore Meinberg!</span>
                <span class="option-description"
                  >Opens a new tab to meinbergglobal.com</span
                >
              </span>
            </a>
          </div>
          <div class="survey-container">
            <a
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=zQSZ1Z92aEOL0PX0NYk6ODB4ab91fo9LmoVMLFiqIpFUMkM2UFlJMjVZRk1MVEI0RURBWE1TU0FCTi4u"
              target="_blank"
              rel="noopener noreferrer"
            >
              <md-icon>feedback</md-icon>
              Share Your Feedback!
            </a>
          </div>
        </div>
        <div class="landing-background">
          <div class="landing-oscd-logo">
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
      position: relative;
    }

    .landing-interface {
      height: 100vh;
      width: 66%;
      min-width: 380px;
      background-color: var(--mbg-landing-bg);
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 515px) {
      .landing-interface {
        min-width: 100%;
      }
    }

    @media (max-width: 360px) {
      :host > .landing-page-container {
        min-width: 360px;
      }
    }

    .logo-wrapper {
      position: relative;
      width: 150px;
      aspect-ratio: 3508 / 1115;
    }

    .logo-wrapper > img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      transition: opacity 0.3s;
    }

    .light-logo {
      opacity: var(--mbg-landing-logo-light);
    }

    .dark-logo {
      opacity: var(--mbg-landing-logo-dark);
    }

    .landing-header,
    .survey-container {
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
      --label-offset: 0.65rem;

      font: inherit;
      font-size: 20px;
      font-weight: 400;
      text-align: start;

      display: flex;
      align-items: center;
      width: inherit;
      cursor: pointer;
      gap: 0.5rem;
      padding: 2rem 1rem;
      border-radius: 8px;

      color: var(--mbg-landing-option-text);
      border: 1px solid var(--mbg-landing-option-bg);
      background-color: var(--mbg-landing-option-bg);
      transition:
        background-color 0.3s,
        color 0.3s,
        box-shadow 0.3s;
    }

    .landing-options > a {
      text-decoration: none;
    }

    .landing-options > button:hover,
    .landing-options > a:hover {
      background-color: var(--mbg-landing-option-bg-hover);
      color: var(--mbg-landing-option-text-hover);
    }

    .option-text {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .option-label {
      transform: translateY(var(--label-offset));
      transition: transform 0.3s ease;
    }

    .option-description {
      font-size: 14px;
      font-weight: 300;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .landing-options > :is(button, a):is(:hover, :focus-visible) .option-label {
      transform: translateY(0);
    }

    .landing-options
      > :is(button, a):is(:hover, :focus-visible)
      .option-description {
      opacity: 0.85;
    }

    @media (max-width: 376px) {
      .option-description {
        display: none;
      }

      .option-label {
        transform: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .option-label {
        transition: none;
      }
    }

    .survey-container > a {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .survey-container > a:link,
    .survey-container > a:visited {
      color: var(--oscd-theme-primary);
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

    .landing-oscd-logo {
      color: white;
      display: flex;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      flex-flow: column;
      gap: 0.25rem;
    }

    .landing-oscd-logo img {
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