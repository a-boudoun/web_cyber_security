
looking at the website url ``http://10.12.100.119/index.php?page=member`` we can see the we are being redirected to the member page. so we can try to pass an absolute path to the page parameter to see if we can access the flag page.

we wrote a script to bruteforce the flag page path, setting a limeted depth so that we don't run into an infinit attempts, bug we found that the flag page does not exist,

so we tried to look for  a commonly hacked sensitive files like ``/etc/passwd``, after several attempts we found that the file exists at ``../../../../../../../etc/passwd `` and we got the flag.





