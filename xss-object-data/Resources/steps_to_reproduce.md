in page : http://machineURL/?page=media&src=

when we fill the src with random value we notice that our random value gets placed inside a object data tag like this :

<object data="{here}">

the immidiate thought you get is to supply some input like this

```
 "><script>alert(hh)</script>
```

but the application is implementing some security checks or WAF so our input just get interpreted as a string

try other ways like placing javascript:alert() also didn't work the app just strips our "javascipt:"

after trying a lot i found that we can use data urls to supply the data inline

so i tried this input

```
data:text/html;base64,PHNjcmlwdD5hbGVydCgndGVzdDMnKTwvc2NyaXB0Pg
```

which represents

```
<script>alert('test3')</script>
```

and that did give me the flag
