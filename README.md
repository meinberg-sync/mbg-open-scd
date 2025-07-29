# Meinberg ICT

**Meinberg's IED Configuration Tool: https://meinberg-sync.github.io/mbg-open-scd/**

## Table of Contents:

* [About](#about)
* [What is OpenSCD?](#what-is-openscd)
* [Meinberg's Contributions to OpenSCD](#meinbergs-contributions-to-openscd)
* [Scope](#scope)
* [Security](#security)
* [Support](#support)

## About

Meinberg ICT is a lightweight editor that supports the substation engineering process in allowing users to configure their clock's IED model based on the IEC 61850 standard.

This editor has been designed as a simple-to-maintain distribution (for long-term stability) aimed at a general user who wants to stay close to the process outlined in the standard.

It can be used on its own or, for optimal use, in conjunction with Meinberg's suite of IEC 61850 tools, all integrated within Meinberg's IMS, Lantime, and microSync clocks.

To help users better understand how to use Meinberg ICT, the tool comes with its own help guide, which they can scroll through. This guide opens at startup or can be found in the list of menu options.

## What is OpenSCD?

Meinberg ICT follows the architecture and development process of the Open System Configuration Designer, or OpenSCD.

OpenSCD is an open-source platform for users to create and manipulate IEC 61850 SCL files. As such, many such distributions include plugins created by community developers as GitHub submodules.

To learn more about OpenSCD, click [here](https://openscd.org/).

## Meinberg's Contributions to OpenSCD

Meinberg has also contributed to the OpenSCD community by creating content that other distributions can use, such as:

* [Meinberg's IED Editor](https://github.com/meinberg-sync/mbg-ied-editor) - an editor plugin that allows users to view and configure their clock's IED model in an expandable tree view
* [IED Extractor](https://github.com/meinberg-sync/mbg-ied-extractor) - a menu plugin that extracts an IED into its own ICD/CID/IID file
* [mbg-val-input](https://github.com/meinberg-sync/mbg-val-input) - a web component to display an input field for a data attribute based on its basic type

## Scope

It is a lightweight editor for the Substation Configuration Language (SCL), as defined in IEC 61850-6.

It is not the goal to reach every user of SCL, nor is it the goal to support all history of the standard. Out of scope is, for example:

- Edition 1 of the IEC 61850-6
- Support of multi-edition projects

## Security

**We do NOT upload any type of information.**

Your browser only downloads data and never uploads anything. That’s why, when you connect to [Meinberg ICT](https://meinberg-sync.github.io/mbg-open-scd/), you only download and update all the JavaScript files needed to run the editor in your browser. This is also why you can work offline once you've connected to the page!

## Support

**!!This distribution is in development and must be used with care!!**

If you found a bug or would like a feature added, please share with us by creating a new issue [here](https://github.com/meinberg-sync/mbg-open-scd/issues).

For more information on our product line, visit us [here](https://www.meinbergglobal.com/english/products/).