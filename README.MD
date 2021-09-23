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
