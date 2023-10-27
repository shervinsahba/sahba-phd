/* define variables */
var me = "shervin";
var at = "@";
var domain = "sahba";
var dot = ".";
var tld = "phd";

var email = `${me}${at}${domain}${dot}${tld}`
var mailtolink = `mailto:${email}`

/* create email link */
document.write(`<a href="${mailtolink}">${email}</a>`)