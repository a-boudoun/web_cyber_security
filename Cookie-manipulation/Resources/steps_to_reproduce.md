
when inpecting the page source from any page, we can see a cookie :
```
admin: false
I_am_admin=68934a3e9455fa72420237eb05902327; expires=Sat, 08-Mar-2025 23:38:35 GMT; Max-Age=3600

```

by googling the value of the cookie, we can see that it is the md5 hash of the string "false" which is "68934a3e9455fa72420237eb05902327"

so we encode the string "true" to md5 hash and replace the value of the cookie with it using brwoser dev tools

```
I_am_admin=b326b5062b2f0e69046810717534cb09
```

and boom we get the flag.
