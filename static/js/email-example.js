/* define variables */
var me = "aragorn";
var at = "@";
var domain = "gondor";
var dot = ".";
var tld = "gov";

var email = `${me}${at}${domain}${dot}${tld}`
var mailtolink = `mailto:${email}`

/* create email link */
document.write(`<a href="${mailtolink}">${email}</a>`)