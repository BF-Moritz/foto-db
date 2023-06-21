# STEPS (TODO)

-   foto hinzufügen
-   alle fotos anzeigen
-   einzelnen schüler anzeigen

# API

get "/schueler/" -> alle schüler
get "/schueler/:id" -> ein schüler
get "/schueler/:id/photos" -> alle photos
put "/schueler/" -> schüler
update "/schueler/:id" -> neuen infos
delete "/schueler/:id" -> status

get "/photos/" -> alle photos
get "/photos/:id" -> ein photo
put "/photos/" -> id
update "/photos/:id" -> neuen infos
delete "/photos/:id" -> status

get "/search/schueler?q=" schüler suche

# DB

Schüler:

Nachname
Vorname
(Geburtsname)
Klasse (ID)
1 Fotos (intern)
2 Website
3 Tagespresse (extern)
4 Video/Tonaufnahmen

Photos:
Data (Bild)
Fotograph
Schüler[] (ID)
Erstellungsdatum
Löschungsdatum?

# Frontend

/ -> homepage
/schüler -> zeigt alle schüler an und schülersuche
/schüler/:id -> zeigt infos für den schüler an + alle photos von ihm
/photos -> zeigt alle photos an
/add/schüler -> kann schüler hinzufügen
/add/photo -> kann photo hochladen

# Zusatzfunktionen

-   Klassen++
