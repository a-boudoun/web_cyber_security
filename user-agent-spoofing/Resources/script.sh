curl \
  -A "ft_bornToSec" \
  -e "https://www.nsa.gov/" \
  http://10.12.100.93/index.php?page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f \
  | grep flag
# The -A flag sets the User-Agent header in the HTTP request. The value "ft_bornToSec" is a custom string pretending to identify the client software or user
# he -e flag (short for --referer) sets the Referer header, which tells the server the URL of the page that “referred” the user to this request. Here, it’s set to https://www.nsa.gov/.

