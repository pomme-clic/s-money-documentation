# API Rate Limits
## What is it ?

Rate limiting is a traffic policy employed to block an excessive number of calls. It restricts requests (Limit) on the ApiGateway side by blocking requests that surpass the defined rate (Rate).

<br/>

* * *

## Why ?

In order to stop attacks :

- Brute force
- DOS and DDOS (Denied of service)
- Web scrapping

It is also us to manage resources (prevent altering QOS) and to avoid api overuse.

 <br/>

* * *

## How does it work?

- Limits are set on a endpoint-by-endpoint basis.
- The total number of calls is calculated per **partner** and per **endpoint**.
- If the rate is reached, it blocks the next requests on the concerned endpoint for a duration called '**PeriodTimeSpan**'.
- In this case, downstream microservice is not called, and the system returns a http `429` status code.

Therefore, each endpoint is characterised by:

- a number of calls over a given period: ratelimit, composed by `Limit` & `Period`
- a ban duration if this limit is exceeded: `periodTimeSpan`

  
<br/>

* * *

## What should you do?

### Adapting your application

For batch or polling methods, it's necessary to set up a timer to ensure that the limits on the endpoints being called are respected.

### Handle HTTP `429` response

In addition, you are strongly advised to implement a process that takes into account `429` returns and delays calls until the end of the ban time (`periodTimesPan`).

As a consequence, you have to store Xpollens configurations for ratelimits and PeriodTimesPan in your database.

:::warning  Note
We strongly advise against replaying API requests until they are successful again. This would render our monitoring inoperative and add a stream of completely useless calls.
:::

<br/>

* * *

## FAQ

### FAQ1: How to retrieve the rate limit values for each of the API endpoints?

You need to ask your Customer Integration Manager to obtain the list of rate limit values.

### FAQ2: when does the count start?

Unity of times begins at the first call.  
Example: if the ratelimit of endpoint X is 10requests/second, and the 1st call is at DD/MM/AAAA HH:MM:SS:200, the end of the period is at DD/MM/AAAA HH:MM:SS+1:200

### FAQ3: During the ban period, does each new call renew the ban period?

No: the duration is fixed. Errors 429 are sent between

- The moment the limit is reached
- and this moment + the period

Example  
If :  
Ratelimit = 10req/s  
PeriodTimesPan = 1s  
Start HH:MM:SS:200  
Limit (10 req) reached at HH:MM:SS:600  
The next request authorised is after HH:MM:SS+1:600  
even if we have a request at HH:MM:SS:900

  
<br/>

* * *

## How to test

### Using Jmeter
With JMeter, you can make mass calls to an endpoint without waiting for the previous call to be responded to.

1- Choose the endpoint you want to test.  
2- Look at the limits of this endpoint  
3- Set up mass calls to exceed the number of calls on the time step.  
4- Observe the 429 errors

### Using another tool
The test remains the same with another tool of the same type.