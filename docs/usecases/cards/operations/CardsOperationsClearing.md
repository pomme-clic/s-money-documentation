import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'


# Card operation clearing & settlement

## Introduction

The clearing process consists in sending once a day one callback **CardOperationCreatedOrUpdated** per cleared authorisation.

<br/><br/>

* * *

## Operation clearing - Sequence diagram

```mermaid
sequenceDiagram
title: clearing and settlement
autonumber
#participant u as User
#participant t as TPE
participant xb as Xpollens backend+SAE
participant pb as Partner backend
#participant ua as Partner application
rect rgb(240,240, 240)

        Note over xb,pb: clearing and settlement
                loop For each cleared operation
        xb -->> pb: callback CardOperationCreatedOrUpdated<br/>{cardClearingDetail}
        pb ->> pb: check and process<br/>card operations callback
        end
end
```

The content of the callback is the same as that of the API. Therefore, you should directly use the callback to populate your databases.

> /!\ One callback is received for **each** authorisation cleared. This means that you can receive dozens or hundreds of callbacks over a short period, depending on the number of transactions carried out by your cardholders.

<br/><br/>

* * *

## Operation clearing - State diagram

### State diagram

```mermaid
stateDiagram-v2

      Approved --> Completed : Authorization cleared
```

The `Expired` status is part of the authorisation state worfklow.


<br/><br/>

* * *

## FAQ for settlement

### FAQ1 - Can the amount of the cleared transaction be different from the authorisation?

Yes, in the majority of cases the trend is downwards, but there are a few rare cases where the trend is upwards.

### FAQ2 - Can other information change?

The information conveyed by the `cardAuthorizationDetail` section will not be modified, but the data conveyed by `cardClearingDetail` may differ from the values of the authorization.

### FAQ3 - Should I show my user the authorisation information or the compensation information?

We recommend displaying the compensation information, even though this may lead to changes in the details of the operation.

<br/><br/>
