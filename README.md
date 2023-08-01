# Setup

`git clone git@github.com:marcek/bs-app.git`

`npm install`

`ng serve`

## Zadanie 1

* uzupełnij serwis `WordService` o methodę `query()`, która zwraca tablicę 10 obiektów słów jako stream (Zwracany typ przez funkcję to `Observable<BSWord[]>`). Przykładowa tablica:

```
[
  { name: "Home" },  
  { name: "Car" },  
  { name: "Tree" },  
  ...
]
```

* skorzystaj z serwisu `WordService` w komponencie `WordListComponent` tak aby wyświetlić listę słow uzywając w templacie `async` pipe.

## Zadanie 2
* dodaj do projektu paczkę `@angular/material`
* rozbuduj komponent `AddWordButtonComponent`: 
  * zamień button na button z angular material.
  * dodaj pusty komponent `WordFormComponent` 
  * Po kliknięciu na button otwórz dialog zawierjący `WordFormComponent`