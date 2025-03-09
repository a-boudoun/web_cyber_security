
when inpecting the page code we found the footer code is being included like this:
```html
<footer id="footer">
				<div class="container">
					<ul class="icons">
						<li><a href="index.php?page=redirect&site=facebook" class="icon fa-facebook"></a></li>
						<li><a href="index.php?page=redirect&site=twitter" class="icon fa-twitter"></a></li>
						<li><a href="index.php?page=redirect&site=instagram" class="icon fa-instagram"></a></li>
					</ul>
					<ul class="copyright">
						<a href="?page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f"><li>&copy; BornToSec</li></a>
					</ul>
				</div>
			</footer>
```
we can see the footer is being included with a parameter ``page=redirect&site=facebook`` and the same for twitter and instagram.

what if we could pass another site value that is not in the options, and get the flag?

so we tried ``?page=redirect&site=flag`` and we got the flag.