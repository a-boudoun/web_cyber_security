# patch

1. Input Validation and Sanitization
To prevent stored XSS, we validate and sanitize all user inputs before storing them. This means checking fields like txtName and mtxtMessage to only allow safe characters (e.g., letters, numbers, and spaces) and removing anything dangerous, like HTML tags. For example, in PHP, we can use strip_tags($_POST['txtName']) to strip out tags or preg_replace() to enforce a whitelist. This stops malicious scripts, such as <img src="x" onerror="alert('1')" />, from being accepted, ensuring only clean data enters our system.

2. Output Encoding
We protect against stored XSS by encoding user data when displaying it on the page. By converting special characters like <, >, and " into HTML entities (e.g., <, >, ") using a function like htmlspecialchars($_POST['txtName'], ENT_QUOTES, 'UTF-8') in PHP, we ensure the browser treats the input as plain text, not code. So, even if <img src="x" onerror="alert('1')" /> is stored, it renders harmlessly as text instead of executing, keeping users safe from malicious scripts.

3. Use a Content Security Policy (CSP)
Adding a Content Security Policy (CSP) strengthens our defenses against stored XSS by controlling where scripts can run from. We set a header like Content-Security-Policy: default-src 'self'; script-src 'self' to allow only scripts from our own server and block inline scripts like onerror="alert('1')". In PHP, we can add this with header(). This way, even if a payload like <img src="x" onerror="alert('1')" /> slips through, the browser won’t execute it, stopping the attack in its tracks.

## CSP 
Content Security Policy (CSP) is a feature that helps to prevent or minimize the risk of certain types of security threats. It consists of a series of instructions from a website to a browser, which instruct the browser to place restrictions on the things that the code comprising the site is allowed to do.


