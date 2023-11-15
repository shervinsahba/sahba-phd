+++
author = "Shervin Sahba"
title = "How to safely write your email on your website? Try javascript injection."
date = "2023-10-27"
description = "Obfuscating your email is old hat. Inject your email via javascript to circumvent bots."
tags = [
    "hugo",
    "website",
    "javascript",
    "security"
]
+++

# Old school email obfuscation

I have listed my email address in plaintext for as long as I remember. It generally has been obfuscated in some way, like

    name [at] domain [dot] tld

to prevent web scrapers from harvesting my details to spam me. This method is alright at blocking some (but not all) bots from harvesting your email. Sure, you can further distort your email to get around typical regex substitutions for the @ and . glyphs, like the `[at]` and `[dot]` we see above. But then your email looks like trash.

# A better method via Javascript injection

A better way to obfuscate your email is via Javascript injection. Consider this script:

{{< codepen id="MWLKjJm" >}}

This writes out a nice, clickable mailto link with the email address well displayed. The HTML source code, however, only shows the script. Let's see it in practice right here. First, I'll put the script in its own file, `email-example.js`. Then I'll call it in the HTML. What do we get?

{{< email-js-example >}}

Huzzah! Source code?

    <p><script src="/js/email-example.js"></script><p>

Nice.


# For a Hugo site, use a shortcode

As a note for Hugo users, to access the script within this article, I created a shortcode `email-example-js.html` that contains the single line seen above, `<script src="/js/email-example.js"></script>`. It is then called with the normal shortcode syntax, `{{</* email-example-js */>}}`, within this article.

---
{{< breadcrumbs >}}