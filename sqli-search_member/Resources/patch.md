You can prevent most instances of SQL injection using parameterized queries instead of string concatenation within the query. These parameterized queries are also know as "prepared statements".
parameterized queries can't be used to handle untrusted input in other parts of the query, such as table or column names for that you better :
- Whitelisting permitted input values
- Using different logic to deliver the required behavior.
