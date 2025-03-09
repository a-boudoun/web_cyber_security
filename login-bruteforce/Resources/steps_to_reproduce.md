
after expoiting the member page with sql injection, we found four users with the names `one - me`, `two - me`, `three - me`, and `Flag - GetThe`. bug no password table was found.

also after attempting many logins, we found that the website is not limiting the number of login attempts, so we can bruteforce the login page.

we used ten million list of passwords from [[here](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-1000000.txt)] and the usernames found in the users table, in addition to ``"user", "root", "admin", "administrator", "superuser", "guest", "test", "info", "support", "manager", "moderator", "webmaster", "backup", "anonymous", "administartor", "administartion"`` most common usernames.

and wrote a javascript code to bruteforce the login page.

after running the code, we found that the username is not mandatory, and the password is ``sadow``.

after logging in, we found the flag.