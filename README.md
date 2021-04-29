https://ehb.instructure.com/courses/19912/pages/werkstuk-opdracht?module_item_id=249144

Werkstuk opdracht
Je zal voor deze opdracht uit een externe API items moeten ophalen. Welke API dit is, kies je zelf (mits goedkeuring). Je zal deze items moeten laten zien aan de eindgebruiker, en deze zal hierop moeten kunnen reageren. Het soort van reacties kan je ook zelf kiezen. Je kan werken rond likes, comments, statistieken, emoji reactions, etc. Je zal hiervoor een UML diagram moeten uittekenen. Dit zal je ook helpen de opdracht op een object geörienteerde manier aan te pakken.

Wij voorzien een eindpoint in de server die jullie ook gebruiken voor de chat applicatie, waarnaar je volgende gegevens zal moeten/kunnen sturen:

Het ID van de gebruiker die de actie heeft uitgevoerd
Het ID van het item waar de actie op is uitgevoerd
De reactie van de gebruiker, in tekstuele vorm (JSON.stringify to the rescue)
Een application ID
Die laatste, het application ID, krijg je van ons na goedkeuring van je API. Belangrijk als je dit instuurt, is dat de resultaten van de API relatief statisch zijn. Bijvoorbeeld: de weer API die we een paar lessen geleden gebruikten, is geen goede optie, daar deze dagelijks veranderd, en geen ID's bevat. Je zal hier dus onmogelijk reactions aan kunnen koppelen.

 

Stuur je API idee zo snel mogelijk in, zodat je een Application ID hebt om mee te kunnen werken.

Jullie hebben in de afgelopen werkcolleges gewerkt aan een chat applicatie waar jullie konden inloggen en berichten mee konden sturen, voor deze opdracht maak je gebruik van dezelfde login-methodes.

API thecrew.cc
Inloggen
[POST] thecrew.cc/api/user/login.php

body: { "email": email adress van de gebruiker, "password": wachtwoord van de gebruiker }

returns: { "token": een token in de vorm van een string, dit token kan met alle beveiligde requests meegestuurd worden om te authenticeren, "email": email van de user, "classGroup": classgroup van de user, "handle": handle van de user }

gegevens aanpassen
[POST] thecrew.cc/api/user/update.php

body: { "handle": gewenste handle van de gebruiker, "password": gewenst wachtwoord van de gebruiker }

returns: { "status van de aanpassing" }

Reaction aanmaken
[POST] thecrew.cc/api/challenge/create.php?key=__KEY__

body: { "token": user token van de gebruiker, "message": reactie van de gebruiker, "APPID": ID dat in de API die je gebruikt een item identificeerd }

params:
KEY: de key die je kreeg van ons van je app

returns: { "status": 201, "message": created, }

Reacties ophalen (alle reacties)
[POST] thecrew.cc/api/challenge/readAll.php?key=__KEY__

body: { }

params:
KEY: de key die je kreeg van ons van je app

returns: Een lijst van alle reacties die op je app zijn gedaan [ { "handle": handle van de gebruiker, "email": email adres van de gebruiker, "message": reactie van de gebruiker, "APIID": ID van het item waarop de reactie is gedaan }, ... ]

Reacties ophalen (op een specifieke API ID)
[POST] thecrew.cc/api/challenge/readList.php?key=__KEY__&ID=__ID__

body: { }

Params:
KEY: de key die je van ons kreeg
ID: de ID van het item waarop je de reacties wilt

returns: Een lijst van alle reacties die op je app zijn gedaan, op een specifieke ID [ { "handle": handle van de gebruiker, "email": email adres van de gebruiker, "message": reactie van de gebruiker }, ... ]