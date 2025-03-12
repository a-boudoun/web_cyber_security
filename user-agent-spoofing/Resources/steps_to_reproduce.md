when inspecting the home page we can see, the copyright part is redirecting page `		page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f`

````html
<ul class="copyright">
  <a
    href="?page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f"
    ><li>&copy; BornToSec</li></a
  >
</ul>
``` by inpecting that page we can see a comment that says some lorem ipsum
nonsense. among this we can also find a commnet that says: 

```html 
You must come from : "https://www.nsa.gov/". 
``` 

and 

```html 
Let's use this browser : "ft_bornToSec". It will help you a lot.
````

this could mean to change the user agent to `ft_bornToSec` to make it look like the request is coming from the browser `ft_bornToSec`. and the referer to `https://www.nsa.gov/` to make it look like the request is coming from the website `https://www.nsa.gov/`.

tried it using curl and it worked.