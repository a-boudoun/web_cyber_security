
from the page ``http://10.12.100.119/?page=recover`` we can see a form tag:
```html
<form action="#" method="POST">
	<input type="hidden" name="mail" value="webmaster@borntosec.com" maxlength="15">
	<input type="submit" name="Submit" value= "Submit">
</form>
```
we can see that the form is submitting a post request to the same page, and the adming mail  is visible, so we can try to change the value of the mail input and the server will send the password-recovery to the new mail.

after changing the value of the mail input the server responded with the flag.