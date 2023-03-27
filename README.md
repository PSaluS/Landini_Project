# Zadanie dla Landingi

### W zadaniu wykorzystałem React wraz z TypeScript-em oraz dwie biblioteki, Styled Components do napisania stylów oraz chart.js słórzącą do stworzenia wykresu z instrukcji.

## Uruchamianie

### aby uruchomić projekt należy sklonować repozytorium a następnie wykonać dwa polecenia:

### npm install

### npm run start

### po chwili uruchomi się lokalnie serwer developerski z projektem

## O zadaniu

### Z uwagi na podpunkt mówiący o ograniczaniu wykorzystania dodatkowych bibliotek postanowiłem rezygnować z biblioteki react-router, zamiast niej przełączanie widoków odbywa się na postawie stanów komponentu App.

### Z uwagi na to, że wskazane api nie wprowadza zmian takich jak dodanie lub usunięcie koszyka funkcje te są jedynie wizualizowane lokalnie w stanie aplikacji. Z powodu, że została zaimplementowana prosta obsłucha błędów komunikacji z api nie da się usunąć koszyka o id > 20 ponieważ serwer zwraca błąd, gdyż takowego na serwerze nie ma. Z tego samego powodu każdy dodany koszyk będzie miał id = 21, ponieważ taki id otrzymuje z api.

### Zmieniając parametr 'apiRequestLimit' w pliku 'config.ts' w katalogi 'API' można manipulować limitem ilości obiektów zwracanych przez api a co za tym idzie limitem koszyków na jednej stronie.
