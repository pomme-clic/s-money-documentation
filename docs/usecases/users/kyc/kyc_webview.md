# WebView integration
## Parent Page integration
The Netheos Web Page can be displayed using the `webviewUrl` or `url`?token=`token`  URL.
**But** as the partner will have to handle some specific **javascript** event, it is mandatory to implement the following code in the parent page to display the URL :

```html
<iframe id="signbook" scrolling="no" frameBorder="no" width="100%" allow="microphone; camera"></iframe>
<script src="https://integration-api.ekeynox.net/contract/signbook/v3/script/signbook.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var signbook = new NthSignbook({
            iframeSelectorId: 'signbook',
            url: 'https://api.ekeynox.net/contract/signbook/signbook.html',
            options: {
                renderMode: 'pretty'
            },
            token: '20140917_7HJOLUbtlKET2iQwBGtN7QkkzFgg2r'
        });
    }
</script>
```

> see the full Netheos Documentation here : https://integration-api.ekeynox.net/docs/integration/latest/integration_signbook_v3/

## Javascript Events handling 

### Identity check events 
When identity check is completed (10 min max),  an "identity" type event will be sent to the main page.

> Exemple :
```javascript
event = {
   type: "identity",
   state: "WAITING",
   ok: true
}
```

> This event should be handled as in the exemple below :

```javascript
window.addEventListener('message', function(evt){
    var msg = JSON.parse(evt.data);
    if (msg && msg.type === 'identity') {
        console.log('message: ',msg);
    }
}, false);
```

### Electronic Signature Event handling
The same way, once an electronic signature is performed, a `clientFileEvent` will be sent with `accepted` status.

* * *
### Full Javascript Exemple

```html
<html>
<head>
<script>
// Obtention de la query string de l'URL
var queryString = window.location.search;

// Vérification si la query string est présente
if (queryString) {
  // Suppression du point d'interrogation au début
  queryString = queryString.substring(1);

  // Découpage des paramètres en utilisant le séparateur "&"
  var params = queryString.split("&");

  // Boucle à travers tous les paramètres
  for (var i = 0; i < params.length; i++) {
    // Découpage du paramètre en utilisant le séparateur "="
    var param = params[i].split("=");

    // Accès au nom et à la valeur du paramètre
    var paramName = decodeURIComponent(param[0]);
    var tokenValue = decodeURIComponent(param[1]);

    // Utilisation des paramètres récupérés
    console.log("Nom du paramètre : " + paramName);
    console.log("Valeur du paramètre : " + tokenValue);
   
  }
}
</script>
<head>
    <title> Mon parcours client </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
    <style>
        #container {
            padding: 20px;
            margin: 0 auto;
        }
        #message-container {
            display: none;
            width: 100%;
            text-align: center;
            margin: 200px auto;
        }
        #iframe-wrapper {
            width: 100%;
            overflow: hidden;
        }
    </style>
</head>
<body>
<!--<iframe id="signbook" scrolling="no" frameBorder="no" width="100%" allow="microphone; camera"></iframe>-->

<div id="container">
    <header></header>
    <div id="iframe-wrapper">
        <iframe id="signbook" width="99%" scrolling="no" frameBorder="no" allow="microphone; camera"></iframe>
    </div>
    <div id="message-container">
        <h4 id="message-title"></h4>
        <p id="message-text"></p>
    </div>
    <footer></footer>
</div>

<script src="https://integration-api.ekeynox.net/contract/signbook/v3/script/signbook.js"></script>
<script type="text/javascript">
    var MESSAGE_TITLES = {
        'EXIT': "A bientôt !",
        'SUSPENDED': "Pièces justificatives en cours de contrôle",
        'FINALIZED': "Dossier complet",
        'WAITING': "Dossier en cours de validation",
        'ACCEPTED': "Félicitations !",
        'REJECTED': "Désolé"
    };

    var MESSAGE_TEXTS = {
        'EXIT': "Vous pouvez revenir quand vous le souhaitez compléter votre dossier.",
        'SUSPENDED': "Une ou plusieurs des pièces que vous avez soumises sont en cours d'examen par nos opérateurs. Merci de revenir plus tard.",
        'FINALIZED': "Votre dossier est désormais complet, nous vous recontacterons quand nous l'aurons examiné.",
        'WAITING': "Votre dossier est en cours d'examen.",
        'ACCEPTED': "Votre dossier a été accepté.",
        'REJECTED': "Votre dossier a été refusé."
    };

    var ERROR_TEXTS = {
        'BROWSER_NOT_SUPPORTED': "Désolé, ce navigateur n'est pas supporté, veuillez utiliser Chrome, Firefox, Safari, IE10+, Edge ou Opera."
    };

    var GENERIC_ERROR_TEXT = "Nos serveurs sont en cours de maintenance, merci de revenir plus tard.";

    /**
     * Show a message instead of the SignBook
     * @param title
     * @param text
     */
    function showMessage(title, text) {
        document.getElementById('iframe-wrapper').style.display = 'none';
        document.getElementById('message-container').style.display = 'block';
        document.getElementById('message-title').innerHTML = title;
        document.getElementById('message-text').innerHTML = text;
    }

    function onUserEventMessageFn(event) {
        // All user actions => used by web analytics libraries like Google Analytics
        console.log("user event : " + event.action);
    }

    function onClientFileEventMessageFn(event) {
        // Event coming from eKeynox SaaS with data concerning the state of the client file
        console.log("client file state : " + event.state);

        if ((event.changedState &&
                (event.changedState.from === 'PENDING' && (event.changedState.to === 'WAITING' || event.changedState.to === 'ACCEPTED'))) ||
                (event.participantState === 'WAITING')) {
            showMessage(MESSAGE_TITLES['FINALIZED'], MESSAGE_TEXTS['FINALIZED'])
        } else {
            if (event.state !== 'PENDING') {
                showMessage(MESSAGE_TITLES[event.state], MESSAGE_TEXTS[event.state]);
            }
        }
    }

    function onExitEventMessageFn(event) {
        showMessage(MESSAGE_TITLES['EXIT'], MESSAGE_TEXTS['EXIT']);
    }

    function onErrorEventMessageFn(event) {
        // Errors detected by the SignBook (server errors, invalid state, unsupported browser, etc.)
        if (event.cause === 'REJECTED_STATE' || event.cause === 'ACCEPTED_STATE'
                || event.cause === 'SUSPENDED_STATE' || event.cause === 'WAITING_STATE') {
            // Do not deal with these "errors", this is just for backwards compatibility purpose...
            return;
        }
        showMessage('Erreur', (ERROR_TEXTS[event.cause] ? ERROR_TEXTS[event.cause] : GENERIC_ERROR_TEXT) + "(" + event.cause + ")");
    }
    
    window.onload = function () {
        var signbook = new NthSignbook({
            iframeSelectorId: 'signbook',
            url: 'https://integration-api.ekeynox.net/contract/signbook/v3/#/identity-page',
            options: {
                renderMode: 'pretty',
                vidRequestMode: 'redirect',
                callbackURL: 'https://www.google.com'
            },
            onUserEventMessage: onUserEventMessageFn,
            onClientFileEventMessage: onClientFileEventMessageFn,
            onErrorEventMessage: onErrorEventMessageFn,
            //onDisplayEventMessage: onDisplayEventMessageFn,
            onExitEventMessage: onExitEventMessageFn,            
            token: tokenValue
        });
    }
</script>
</body>
</html>
```