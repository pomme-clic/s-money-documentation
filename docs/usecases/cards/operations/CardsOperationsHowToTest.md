import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# How to test

## Simple simulation using the simulator
### Authorisation

[POST /api/v2.0/card-operations/simulate-authorization](https://docs.xpollens.com/api/CardOperations#post-/api/v2.0/card-operations/simulate-authorization)

```json
{
  "cardId": "A",
  "amount": {
    "value": "5.99",
    "currency": "EUR"
  }
}
```

Callback CardOperationCreatedOrUpdated
{cardOperationId}

### Settlement

[POST /api/v2.0/card-operations/{cardOperationId}/simulate-settlement](https://docs.xpollens.com/api/CardOperations#post-/api/v2.0/card-operations/-cardOperationId-/simulate-settlement)
Use the {cardOperationId} created before.


### Offline operation

[POST /api/v2.0/card-operations/simulate-offline-settlement](https://docs.xpollens.com/api/CardOperations#post-/api/v2.0/card-operations/simulate-offline-settlement)

```json
{
  "cardId": "card_75122-1703148094663_1",
  "amount": {
    "value": "12.12",
    "currency": "EUR"
  },
  "operationDate": "2024-04-16T07:23:36.915Z",
  "direction": "Debit", // Debit Credit
  "merchantName": "Discraft Disc",
  "merchantCategoryCode": "5941"
}
```

<br/><br/>

* * *

## Complex simulation using PISO messages 
For these simulations, ask your Customer Integration manager to provide you with the JSONs.
They will enable you to generate the following cases:
- Authorisation with modification of `merchantCategoryCode`, `processingCode`, `context`
- Authorisation with another `currency`
- DAC authorisation
- Authorisation with partial or total adjustment
- ATM withdrawal
