+++
author = "Shervin Sahba"
title = "e-mail obfuscation: javascript injection"
date = "2023-10-27"
description = "How to inject your email via javascript to circumvent scrapers"
tags = [
    "hugo",
    "website",
    "javascript",
    "security"
]
+++

I've listed my email address in plaintext for as long as I remember. It's always been obfuscated in some way, like

    name [at] domain [dot] tld

This method is alright at blocking some (but not all) bots from harvesting your email. Sure, you can further distort your email to get around typical regex substitutions for the @ and . glyphs, like the `[at]` and `[dot]` we see above. But then your email looks like trash.

A better way to obfuscate your email is via Javascript injection. Consider this script:

{{< codepen id="MWLKjJm" >}}

This writes out a nice, clickable mailto link with the email address well displayed. The HTML source code, however, only shows the script. Let's see it in practice right here. First, I'll put the script in its own file, `email-example.js`. Then I'll call it in the HTML. What do we get?

{{< email-js-example >}}

Huzzah! Source code?

    <p><script src="/js/email-example.js"></script><p>

Nice.

As a note for Hugo users, to access the script within this article, I created a shortcode `email-example-js.html` that contains the single line seen above, `<script src="/js/email-example.js"></script>`. It is then called with the normal shortcode syntax, `{{</* email-example-js */>}}`, within this article.

