/**
 * @license
 * Copyright (c) 2018 DevAndFest
 * This code was licensed under the MIT license
 */

let locale = "";
let raw_messages = {};
try {
  //locale = navigator.language;
  locale = "es"
  raw_messages = require("./locales/" + locale + ".json");
} catch (e) {
  /* If the brownser language is not supported, we will show the website in
   * English.
   */
  locale = "en-US";
  raw_messages = require("./locales/" + locale + ".json");
}

const messages = {};
messages[locale] = raw_messages;

export default messages;
