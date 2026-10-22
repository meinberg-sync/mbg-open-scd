import "@webcomponents/scoped-custom-element-registry";
import "@omicronenergy/oscd-shell/oscd-shell.js";

import OscdMenuOpen from "@omicronenergy/oscd-menu-commons/oscd-menu-open.js";
import OscdMenuSave from "@omicronenergy/oscd-menu-commons/oscd-menu-save.js";
import OscdMenuFileRename from "@omicronenergy/oscd-menu-commons/oscd-menu-file-rename.js";
import OscdMenuFileClose from "@omicronenergy/oscd-menu-commons/oscd-menu-file-close.js";

import OscdEditorDiff from "@omicronenergy/oscd-editor-diff";
import OscdEditorSource from "@omicronenergy/oscd-editor-source";
import OscdEditorCommunication from "@omicronenergy/oscd-editor-communication/oscd-editor-communication.js";

import OscdBackgroundEditV1 from "@omicronenergy/oscd-background-editv1";
import OscdBackgroundWizardEvents from "@omicronenergy/oscd-background-wizard-events/oscd-background-wizard-events.js";

import { MICTLandingPage } from "./landing-page.js";

export const plugins = {
  menu: [
    {
      name: "File Management",
      translation: {
        de: "Dateiverwaltung",
      },
      icon: "folder",
      plugins: [
        {
          name: "Open File",
          translation: {
            de: "Öffnen",
          },
          icon: "folder_open",
          active: true,
          tagName: "oscd-menu-open",
        },
        {
          name: "Save File",
          translation: {
            de: "Speichern",
          },
          icon: "save",
          active: true,
          requireDoc: true,
          tagName: "oscd-menu-save",
        },
        {
          name: "Rename File",
          translation: {
            de: "Umbenennen",
          },
          icon: "drive_file_rename_outline",
          active: true,
          requireDoc: true,
          tagName: "oscd-menu-file-rename",
        },
        {
          name: "Close File",
          translation: {
            de: "Schließen",
          },
          icon: "tab_close",
          active: true,
          requireDoc: true,
          tagName: "oscd-menu-file-close",
        },
      ]
    },
    {
      name: "Extract IED",
      translation: {
        de: "IED extrahieren",
      },
      icon: "file_export",
      active: true,
      requireDoc: true,
      src: "plugins/mbg-ied-extractor/mbg-ied-extractor.js",
    },
    {
      name: "Validate SCL",
      translation: {
        de: "SCL validieren",
      },
      icon: "rule_folder",
      active: true,
      requireDoc: true,
      src: "plugins/scl-validating/scl-validating.js",
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
      icon: "developer_board",
      active: true,
      requireDoc: true,
      src: "plugins/mbg-ied-editor/mbg-ied-editor.js",
    },
    {
      name: "Publisher",
      translations: {
        de: "Publisher",
      },
      icon: "dataset",
      active: true,
      requireDoc: true,
      src: "https://omicronenergyoss.github.io/oscd-editor-publisher/oscd-editor-publisher.js",
    },
    {
      name: "Communication",
      translations: {
        de: "Kommunikation",
      },
      icon: "lan",
      active: true,
      requireDoc: true,
      tagName: "oscd-editor-communication",
    },
    {
      name: "Cleanup",
      translations: { de: "Bereinigung" },
      icon: "cleaning_services",
      requireDoc: true,
      src: "https://openpowershift.github.io/oscd-editor-cleanup/oscd-editor-cleanup.js",
    },
    {
      name: "Compare Files",
      translations: {
        de: "Dateien vergleichen",
      },
      icon: "difference",
      requireDoc: true,
      tagName: "oscd-editor-diff",
    },
    {
      name: "Source Editor",
      translations: {
        de: "Source Editor",
      },
      icon: "code",
      requireDoc: true,
      tagName: "oscd-editor-source",
    },
  ],
  background: [
    {
      name: "Wizard Events Listener",
      icon: "none",
      requireDoc: true,
      tagName: "oscd-background-wizard-events",
    },
    {
      name: "EditV1 Events Listener",
      icon: "none",
      requireDoc: true,
      tagName: "oscd-background-editv1",
    },
  ],
};

export const loadPlugins = async (oscdShell) => {
  const registry = oscdShell.registry;

  registry.define("mict-landing-page", MICTLandingPage);

  registry.define("oscd-menu-open", OscdMenuOpen);
  registry.define("oscd-menu-save", OscdMenuSave);
  registry.define("oscd-menu-file-rename", OscdMenuFileRename);
  registry.define("oscd-menu-file-close", OscdMenuFileClose);

  registry.define("oscd-background-editv1", OscdBackgroundEditV1);
  registry.define("oscd-background-wizard-events", OscdBackgroundWizardEvents);

  registry.define("oscd-editor-diff", OscdEditorDiff);
  registry.define("oscd-editor-source", OscdEditorSource);
  registry.define("oscd-editor-communication", OscdEditorCommunication);

  oscdShell.plugins = plugins;
};
