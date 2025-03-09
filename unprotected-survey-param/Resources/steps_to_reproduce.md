
on the page survey we found a table with some statistics on it, and a field to vote on  someone of those people, ``will, alex, thor, ben, ol`` with a grade from 1 to 10.

when inpecting the page code we found that the grade value is being passed like this:
    
```html
<form action="#" method="post">
    <input type="hidden" name="sujet" value="5">
    <SELECT name="valeur" onChange='javascript:this.form.submit();'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </SELECT>
</form>
    ```
we tried to do an sql injection on the grade value but no luck.

what if we could pass another grade value that is not in the options, and boost the grade of the person we want to vote on?

so we tried 11 and we got the flag.