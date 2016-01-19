# electrum-style-reload

[![NPM version](https://img.shields.io/npm/v/electrum-style-reload.svg)](https://www.npmjs.com/package/electrum-style-reload)

Utility functions to reload CSS given their URL.

```javascript
import {init, reload} from 'electrum-style-reload';

// Initialize the reloader; call this after the page was loaded.
init ();

// Force the browser to reload the specified CSS; this will only
// work if the URL matches an already loaded CSS.
reload ('http://my-site.com/foo.css');
```
