import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BSWord } from "./word.type";

@Injectable({
  providedIn: "root"
})
export class WordService {
  _data = new BehaviorSubject<BSWord[]>([]);
  public readonly data$ = this._data.asObservable();
}