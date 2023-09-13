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

## Zadanie 3
* przenieś kod buttonu odpowiedzialny na otwierania dialogu do komponentu `AddWordButtonComponent`.

## Zadanie 4
* dostosuj serwis `WordService` tak jak zostało to opisane w zadaniu 1. Ma zwracać tylko tablicę 10 obiektów słów.

## Zadanie 5
* komponent `WordList` ma wyświetlać listę słów pobraną z serwisu `WordService`.

## Zadanie 6
* rozbuduj `WordFormComponent`:
  * zaimportuj moduł `ReactiveFormsModule`.
  * dodaj formularz z jednym polem tekstowym i buttonem. Pole tekstowe oraz button z Angular Material. Połącz formularz `<form>` w templacie'e z obiektem formularza zdefiniowanym w komponencie za pomocą dyrektywy `[formGroup]="form"`
  * kliknięcie buttona ma wyowłać event `onSubmit` formularza, który z kolei wywoła metodę `add()` zdefiniowana w komponencie.
  * metoda addWord ma za zadanie zamknąć dialog (skorzystaj z `matDialogRef.close()`) i jako parametr przesłać do komponentu `AddWordButtonComponent` wartość pola tekstowego (skorzystaj z `form.value`).

## Zadanie 7
* Po zamknięciu dialogu `AddWordButtonComponent` dostaje dane z formularza, które ma przesłać do komponentu rodzica `AppComponent` za pomocą `@Output wordAdded` (EventEmitter). 

## Zadanie 8
  * wyemitowanie eventu `wordAdded` z komponentu `AddWordButtonComponent` ma wywołać metodę `onWordAdded` zdefiniowaną w `AppComponent`.
  * metoda `wordAdded` dodaje nowe słowo, które ma pojawić się na liście generowanej przez komponent `WordList`.

## Zadanie 9
  * Aktualnie mozliwe jest zapisanie pustego słowa. Dodałem do kontrolki formularza `word` walidator, ktory wymaga by słowo miało przynamniej 3 znaki oraz prosty paragraf w templacie z treścią błędu. Zakutalizuj metodę `onSubmit` w `WordFormComponent` tak aby metoda `addWord` została wywołana tylko w przypadku gdy formularz jest poprawnie wypełniony/zwalidowany oraz pokaz treść błędu w przeciwnym wypadku. Skorzystaj z `form.valid` oraz `form.get("word").errors` .

## Zadanie 10
  * Dodaj przy kazdym slowie w `WordListComponent` button "Edit". Po kliknięciu otwórz ponownie dialog, ale tym razem z formularzem edycji.
  Pole tekstowe powinno pokazywać edytowane słowo a kliknięcie buttonu "Save" zaktualizować słowo w serwisie `wordService`. Walidacja powinna działać tak samo jak w przypadku formularza dodawania nowego słowa.

## Zadanie 11
  * Dodaj przy kazdym słowie w `WordListComponent` button "Remove", który usunie słowo z serwisu `wordService`.

## Zadanie 12
  * Dodaj pole tekstowe do komponentu `WordListComponent` oraz połącz je (dyrektywa `formControl`) z dodaną przeze mnie kontrolką `phrase`.
  Pole ma za zadanie filtrować listę słów. Gdy jest puste to wszystkie słowa powinny być widoczne. Wpisywanie znaków do pola ogranicza listę słów.
  Skorzystaj z właściwości `valueChanges` dla `phrase` i zaimplementuj fitrowanie słów za pomocą jednego streama:

  ```
    ngOnInit() {
      this.words$ = this.phrase.valueChanges
        .pipe(
          ...
        )
    }
  ```