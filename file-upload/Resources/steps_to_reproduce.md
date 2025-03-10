
when looking at the page ``http://10.12.100.107/?page=upload`` we see that we can upload a jpeg image.

we can try to upload a php file to see if the server is vulnerable and if we can execute the file on the server

but it didn't work since the browser sets the Content-Type header in the HTTP request to ``application/octet-stream`` and the server checks if the file is an image by checking the Content-Type header.

we can use curl to upload the file with the Content-Type header set to ``image/jpeg`` to see if the server is vulnerable, it worked, the application firewall only checks the Content-Type header and not the file extension or the file content.

