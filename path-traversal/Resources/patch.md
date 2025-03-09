# Patch

Preventing path traversal requires a combination of secure coding practices, input validation, and server configuration. Here are the key strategies:
## Input Validation and Sanitization

Whitelisting: Only allow a predefined set of acceptable inputs. For example, if the page parameter should only load specific files (e.g., profile, home), reject anything else.

```php
$allowedPages = ['profile', 'home', 'about'];
$page = $_GET['page'];
if (!in_array($page, $allowedPages)) {
    die("Invalid page");
}
include("/var/www/html/pages/$page.php");
```

Strip Dangerous Characters ###: Remove or reject ../, ./, and other path-altering sequences.

```php
$page = str_replace(['../', './', '..\'], '', $_GET['page']);
```
## Use Absolute Paths with Safe Base Directory

Restrict to a Base Directory: Resolve all file paths relative to a secure root directory and ensure the final path stays within it.

```php
$baseDir = '/var/www/html/pages/';
$page = basename($_GET['page']); // Strips directory info, keeps only filename
$fullPath = realpath($baseDir . $page);
if (strpos($fullPath, $baseDir) !== 0) {
    die("Access denied");
}
include($fullPath);
```
basename() removes any path info (e.g., ../), leaving just the filename.
realpath() resolves the absolute path, and the check ensures it doesn’t escape the base directory.

## Avoid Dynamic File Inclusion

Hardcode File References: Instead of using user input directly in file operations, map inputs to specific files.

```php

$pageMap = [
    'profile' => 'profile.php',
    'home' => 'home.php'
];
$page = $_GET['page'];
if (isset($pageMap[$page])) {
    include($pageMap[$page]);
} else {
    die("Page not found");
}
```
## Server-Side Configuration
File Permissions: Restrict access to sensitive directories (e.g., /etc/) so the web server user (e.g., www-data) can’t read them.
```bash

chmod 750 /etc/passwd
chown root:root /etc/passwdWeb 
```
Server Rules: Use URL rewriting or filters to block suspicious patterns.

```
RewriteEngine On
RewriteCond %{QUERY_STRING} ../ [NC]
RewriteRule .* - [F]
```
This blocks requests containing ../ with a 403 Forbidden response.

## Use Security Libraries and Frameworks

Frameworks: Modern frameworks like Django, Laravel, or Express often include built-in protections against path traversal by default.

Libraries: Use safe file-handling functions (e.g., PHP’s realpath(), Python’s os.path.normpath()).

