import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BSWord } from "./word.type";

@Injectable({
  providedIn: "root"
})
export class WordService {
  private _data = new BehaviorSubject<BSWord[]>([]);
  public readonly data$ = this._data.asObservable();

  query(): void {
    const sampleWords: BSWord[] = [
      { name: "Home" },
      { name: "Car" },
      { name: "Tree" },
      { name: "Computer" },
      { name: "Book" },
      { name: "Dog" },
      { name: "Cat" },
      { name: "Music" },
      { name: "Sun" },
      { name: "Beach" },
      { name: "Friend" },
      { name: "Family" },
      { name: "Travel" },
      { name: "Food" },
      { name: "Movie" },
      // ... add more words here
    ];

    this._data.next(sampleWords.slice(0, 10)); // Emit the first 10 words
  }
}
