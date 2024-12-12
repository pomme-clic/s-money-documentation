import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Transaction

This part describes the card operation flow from payment initiation / authorization to operation clearing and settlement.

## Feature Flow - Sequence diagram

```mermaid
stateDiagram-v2
 state fork_state <<fork>>
  state fork_state2 <<fork>>
    state fork_state3 <<fork>>
      [*] --> fork_state: Authorization request
	  [*] --> Suspended
      fork_state --> Approved: Authorization created
      fork_state --> Rejected: Authorization failed
    Approved --> fork_state3
	fork_state3 --> Completed
	fork_state3 --> Reversed
	Reversed --> fork_state2
	fork_state2 --> Completed
	fork_state2 --> Expired
    fork_state3 --> Canceled 
    fork_state3--> Expired
	Completed --> [*]
	Canceled --> [*]
	Expired --> [*]
	Suspended --> [*]
```
<br/>

### Card Authorization status

| **Value** | **Description** |
| --- | --- |
| **Approved** | After an authorization creation |
| **Reversed** | After an amount adjustment (partial recovery) |
| **Completed** | 1\. Authorization Online  <br/>2\. Authorization Offline |
| **Rejected** | Refused during authorisation |
| **Canceled** | Total recovery |
| **Expired** | After 10 days without clearing (30 days for booking & deposit), 21 days for a withdrawal |
| **Suspended** | Card operation on a closed account |

### Balance diagram

| **Step** | **Authorisation balance** | **Accounting balance** |
| --- | --- | --- |
| 1- Authorisation | x   |     |
| 2-a. Settlement of an existing authorisation |     | x   |
| 2-b. Settlement without authorisation | x   | x   |

<br/><br/>

* * *

## Feature Flow - Sequence diagram for an authorisation and its settlment

```mermaid
sequenceDiagram
title: online transaction
autonumber
Actor User
participant TPE
participant BPCE
participant Xpollens SAE
participant Partner
#participant ua as Partner application
rect rgb(240,240, 240)
        Note over User: Transaction
        User ->> TPE: online card op
        TPE ->> BPCE: issuer auth requ.
                BPCE ->> Xpollens SAE: issuer auth requ.
                Xpollens SAE ->> BPCE: Author. validated
                Par User notification in the mobile app
                    Xpollens SAE ->> Partner:  Callback <br/>  CardOperationCreatedOrUpdated
                    Partner ->> User: notification
                and Author validation
                    BPCE ->> TPE: Author. validated
                    TPE ->> User: Transaction succeeded
                end
end

break
    TPE ->> BPCE: telecollecting & Clearing
end
BPCE ->> Xpollens SAE: clearing file
Xpollens SAE ->> Partner:  Callback <br/>  CardOperationCreatedOrUpdated
```

<br/><br/>

* * *

## Feature Flow - Sequence diagram for a settlment without authorisation

```mermaid
sequenceDiagram
title: online transaction
autonumber
Actor User
participant TPE
participant BPCE
participant Xpollens SAE
participant Partner
#participant ua as Partner application
rect rgb(240,240, 240)
        Note over User: Transaction
        User ->> TPE: offline card op

end

break
    TPE ->> BPCE: telecollecting & Clearing
end
BPCE ->> Xpollens SAE: clearing file
Xpollens SAE ->> Partner:  Callback <br/>  CardOperationCreatedOrUpdated
```

<br/><br/>
