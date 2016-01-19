'use strict';

//  Inspired by https://github.com/andrewdavey/vogue/blob/master/src/client/vogue-client.js
//  and by http://code.google.com/p/js-uri/source/browse/trunk/lib/URI.js

/******************************************************************************/

let stylesheets = {};

/******************************************************************************/

function parseUri (uri) {
  var parser = /^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/;
  var result = uri.match (parser);
  return {
    scheme: result[1] || null,
    authority: result[2] || null,
    path: result[3] || null,
    query: result[4] || null,
    fragment: result[5] || null
  };
}

function triggerChromeReload () {
  window.setTimeout (function () { /* jshint expr: true */
    document.getElementById ('root').offsetHeight;
  }, 500);
}

/******************************************************************************/

export function init () {
  stylesheets = {};
  const links = document.getElementsByTagName ('link');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.rel === 'stylesheet') {
      var href = parseUri (link.href).path;
      stylesheets[href] = {link: link, href: link.href};
    }
  }
}

export function reload (href) {
  var sheet = stylesheets[href];
  if (sheet) {
    sheet.link.href = sheet.href +
                      (sheet.href.indexOf ('?') >= 0 ? '&' : '?') +
                      '_electrum_style_reload_nocache=' + (new Date ()).getTime ();
  }
  triggerChromeReload ();
}

/******************************************************************************/
