# My demo page

(klik niet al te snel op de like knop, dan gaat ie kapot)

Keep in mind this is a work in progress, the database is -not- safe which is for now not an issue as we do not save any user information. However anyone can read the source code and rerun the fetch request as many times as they like. This is a proof of concept as I had the db running for a different project. 

De star rating / likes komen rechtsboven in de hoek per pagina (locatie kan worden aangepast natuurlijk) na een paar seconde. Ik weet hoe het sneller kan maar dat kost weer wat tijd, dit is meer een proof of concept. Mochten we besluiten er mee verder te gaan dan kan ik het aanpassen. 

Jupyter next plugins voor nu zijn vooral gericht op content die niet veranderd, dus die kunnen met wat aanpassingen worden overgezet. De veranderende plugins (bijvoorbeeld een tool om automatisch tabellen etc te genereren) werken nog niet. Hiervoor kunnen we wel een script bijvoegen in het html bestand zoals ik voor de likes gedaan heb. 

Ook voor veranderende content op de pagina kun je een key afspreken, die vervangen wordt als de content geladen is. Hier heb ik 'Loading...' gebruikt en die wordt vervangen met de likes wanneer deze geladen zijn. 

De database is overigens niet veilig, iedereen kan in de source code op github de functie kopieren en in bijvoorbeeld een while loopje zetten. Dit maakt voor nu niet uit omdat er geen gegevens worden opgeslagen oid, misschien een goede manier om nieuwe TA's te vinden? mochten we hiermee verder gaan moeten we even kijken wat dan wel een oplossing is, en hoe ver we ermee willen gaan.

voorbeeld :

Loading...

