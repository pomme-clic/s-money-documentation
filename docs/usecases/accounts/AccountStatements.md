# Bank statement
Account statements contain all transactions carried out over a calendar month.
They are generated during the first 3 days of the month. 

:::note
Account statements are kept for 10 years by Xpollens.
:::

* * *
## How to use
We advise not to download all the account statements as soon as they are generated, but to collect them and make them available when the enduser requests them from your application.

* * *
## Statement of account for a request to delete personal data
In this case, it is important that you keep account statements on your side, in case the cardholder requests a statement after the data has been deleted.

* * *
## Callback
To date, no information is sent when generation is carried out.

* * *
## API
### Retrieve the list of available bank statements
[GET /api/v3.0/bank-statements](https://docs.xpollens.com/api/AccountStatements#get-/api/v3.0/bank-statements)

To download a specific bank statement, use the  `url` retrieved.

### Retrieve a bank statement
[GET /api/v3.0/bank-statements/{bankStatementId}](https://docs.xpollens.com/api/AccountStatements#get-/api/v3.0/bank-statements/-bankStatementId-)

To download the bank statement, use the  `url` retrieved.
