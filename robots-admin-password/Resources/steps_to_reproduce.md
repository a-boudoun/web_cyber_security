
by using ``Dirb`` tool to scan for directories and files in the web server, we found:

```bash

---- Scanning URL: http://10.12.100.119/ ----
==> DIRECTORY: http://10.12.100.119/admin/
==> DIRECTORY: http://10.12.100.119/audio/
==> DIRECTORY: http://10.12.100.119/css/
==> DIRECTORY: http://10.12.100.119/errors/
+ http://10.12.100.119/favicon.ico (CODE:200|SIZE:1406)
==> DIRECTORY: http://10.12.100.119/fonts/
==> DIRECTORY: http://10.12.100.119/images/
==> DIRECTORY: http://10.12.100.119/includes/
+ http://10.12.100.119/index.php (CODE:200|SIZE:6892)
==> DIRECTORY: http://10.12.100.119/js/
+ http://10.12.100.119/robots.txt (CODE:200|SIZE:53)
==> DIRECTORY: http://10.12.100.119/whatever/

---- Entering directory: http://10.12.100.119/admin/ ----
==> DIRECTORY: http://10.12.100.119/admin/css/
==> DIRECTORY: http://10.12.100.119/admin/fonts/
+ http://10.12.100.119/admin/index.php (CODE:200|SIZE:1432)

---- Entering directory: http://10.12.100.119/audio/ ----

---- Entering directory: http://10.12.100.119/css/ ----
==> DIRECTORY: http://10.12.100.119/css/images/

---- Entering directory: http://10.12.100.119/errors/ ----

---- Entering directory: http://10.12.100.119/fonts/ ----

---- Entering directory: http://10.12.100.119/images/ ----

---- Entering directory: http://10.12.100.119/includes/ ----

---- Entering directory: http://10.12.100.119/js/ ----

---- Entering directory: http://10.12.100.119/whatever/ ----
+ http://10.12.100.119/whatever/htpasswd (CODE:200|SIZE:38)

---- Entering directory: http://10.12.100.119/admin/css/ ----
==> DIRECTORY: http://10.12.100.119/admin/css/images/

---- Entering directory: http://10.12.100.119/admin/fonts/ ----
```

in this result we can see a file ``robots.txt`` and a directory ``admin``

## admin directory
when we visit the admin directory we found a login page, we can try to login with the default credentials ``admin:admin`` but no luck.

## robots.txt
when we visit the robots.txt file we found the following:

```
User-agent: *
Disallow: /whatever
Disallow: /.hidden
```

## whatever directory
when we visit the whatever directory we found a file ``htpasswd`` which contains the following:

```
root:437394baff5aa33daa618be47b75cb49
```

by googling the hash we found that it's a ``md5crypt`` hash, we can crack it using ``md5crypt`` and we found `` qwerty123@ ``

## login to admin page
now we found the password for the admin page, we can login with the default username ``root`` and the password ``qwerty123@``


