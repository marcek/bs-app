import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BSWord } from "./word.type";

@Injectable({
  providedIn: "root"
})
export class WordService {
  private _data = new BehaviorSubject<BSWord[]>([]);
  public readonly data$ = this._data.asObservable();

  query(whatType: string): void {
    let words: BSWord[] = [];

    switch (whatType) {
      case "Animals":
        words = [
          { name: "Lion" },
          { name: "Elephant" },
          { name: "Giraffe" },
          { name: "Tiger" },
          { name: "Monkey" },
          { name: "Kangaroo" },
          { name: "Penguin" },
          { name: "Dolphin" },
          { name: "Koala" },
          { name: "Zebra" },
          { name: "Gorilla" },
          { name: "Hippopotamus" },
          { name: "Panda" },
          { name: "Crocodile" },
          { name: "Polar Bear" },
        ];
        break;
      case "Plants":
        words = [
          { name: "Rose" },
          { name: "Sunflower" },
          { name: "Oak" },
          { name: "Maple" },
          { name: "Palm" },
          { name: "Fern" },
          { name: "Tulip" },
          { name: "Cactus" },
          { name: "Lily" },
          { name: "Bamboo" },
          { name: "Pine" },
          { name: "Ivy" },
        ];
        break;
      case "Countries":
        words = [
          { name: "USA" },
          { name: "Canada" },
          { name: "Australia" },
          { name: "India" },
          { name: "Brazil" },
          { name: "Japan" },
          { name: "France" },
          { name: "China" },
          { name: "Russia" },
          { name: "Mexico" },
          { name: "Germany" },
          { name: "Italy" },
        ];
        break;
      case "Colors":
        words = [
          { name: "Red" },
          { name: "Blue" },
          { name: "Green" },
          { name: "Yellow" },
          { name: "Orange" },
          { name: "Purple" },
          { name: "Pink" },
          { name: "Brown" },
          { name: "Black" },
          { name: "White" },
          { name: "Gray" },
        ];
        break;
      case "Cities":
        words = [
          { name: "New York" },
          { name: "Paris" },
          { name: "Tokyo" },
          { name: "London" },
          { name: "Beijing" },
          { name: "Sydney" },
          { name: "Rio de Janeiro" },
          { name: "Cairo" },
          { name: "Moscow" },
          { name: "Mexico City" },
          { name: "Berlin" },
          { name: "Rome" },
        ];
        break;
      default:
        words = [];
        break;
    }

    this._data.next(words);
  }
}

