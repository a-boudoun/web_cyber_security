
looking at the feedback page we can see a from where you submit your name and a feedback and then the are displayed in the page, the perfect target for XSS attack

we tried injecting xss payload ``<script>alert(1)</script>`` into the feedback field, but the server seems to be filtering out the script tag.

then we tried injecting some basic XSS payloads ``<img src="x" onerror="alert('1')" />`` into the name field but it limited the number of characters we can input, so we tried to bypass this by using the browser dev tools to remove the maxlength attribute from the input field, and it was successful, BUT NO FLAG WAS DISPLAYED.

by trying basic xss keywords ``script`` ``alert`` in the name field we can see that the server is responding with the flag. why ?? no idea, maybe the server is checking the name field for xss keywords.