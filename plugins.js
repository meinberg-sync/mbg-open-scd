export const plugins = {
  menu: [
    {
      name: "Open File",
      translation: {
        de: "Öffnen",
      },
      icon: "folder_open",
      active: true,
      src: "plugins/oscd-open/oscd-open.js",
    },
    {
      name: "Save File",
      translation: {
        de: "Speichern",
      },
      icon: "save",
      active: true,
      requireDoc: true,
      src: "plugins/oscd-save/oscd-save.js",
    },
    {
      name: "Extract IED",
      translation: {
        de: "IED extrahieren",
      },
      icon: "content_cut",
      active: true,
      requireDoc: true,
      src: "plugins/mbg-ied-extractor/mbg-icd-extractor.js",
    },
    {
      name: "Validating",
      translation: {
        de: "Validieren",
      },
      icon: "rule_folder",
      active: true,
      requireDoc: true,
      src: "plugins/scl-validating/scl-validating.js",
      TODO: "Implement as feature with better quality assurance; current version is in experimental phase",
    },
    {
      name: "Help",
      translation: {
        de: "Hilfe",
      },
      icon: "help",
      active: true,
      requireDoc: false,
      src: "plugins/mbg-ict-help/mbg-ict-help.js",
    },
  ],
  editor: [
    {
      name: "IED Editor",
      translations: {
        de: "IED Editor",
      },
      icon: "edit",
      active: true,
      requireDoc: true,
      src: "plugins/mbg-ied-editor/mbg-ied-editor.js",
    },
    {
      name: "Publisher",
      translations: {
        de: "Publisher",
      },
      icon: "publish",
      active: true,
      requireDoc: true,
      src: "plugins/oscd-publisher/oscd-publisher.js",
    },
    {
      name: "Communication",
      translations: {
        de: "Kommunikation",
      },
      icon: "settings_ethernet",
      active: true,
      requireDoc: true,
      src: "plugins/oscd-communication/scl-communication.js",
    },
  ],
  background: [
    {
      name: "Wizard Events Listener",
      icon: "none",
      requireDoc: true,
      src: "plugins/oscd-background-wizard-events/oscd-background-wizard-events.js",
    },
    {
      name: "EditV1 Events Listener",
      icon: "none",
      requireDoc: true,
      tagName: "oscd-background-editv1",
    },
  ],
};
