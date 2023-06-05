Control Meta CSP Elements (CMCE)
================================

Firefox web-extension, that controls Content-Security-Policy introduced to clients with `<meta>` tags.

    <meta http-equiv="Content-Security-Policy" content="... policy ...">

NB! This add-on does NOT control CSP headers. Find another one for that.

Why?
----

Firefox removed `security.csp.enable` in Firefox 99.
 - https://bugzilla.mozilla.org/show_bug.cgi?id=1754301

All know to me add-ons only remove http headers for CSP, thus this add-on.


How?
----

If you found this, you need it and for one I believe that _you_ know what _you_ are doing.

BUT, I still won't provide a ready .xpi (signed or unsigned) or an easy way to install it.

It is meant to be used as a **Temporary Extension**. Download it and load it from `about:debugging`.
