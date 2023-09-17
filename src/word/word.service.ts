import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BSWord } from './word.type';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private _data = new BehaviorSubject<BSWord[]>([
    { name: 'Lion' },
    { name: 'Elephant' },
    { name: 'Giraffe' },
    { name: 'Tiger' },
    { name: 'Monkey' },
    { name: 'Kangaroo' },
    { name: 'Penguin' },
    { name: 'Dolphin' },
    { name: 'Koala' },
    { name: 'Zebra' },
    { name: 'Gorilla' },
    { name: 'Hippopotamus' },
    { name: 'Panda' },
    { name: 'Crocodile' },
    { name: 'Polar Bear' },
  ]); 

  query(): BehaviorSubject<BSWord[]> {
    return this._data
  }   
  
  addWord(word: string): void {
    console.log(word);
    const currentData = this._data.value;
    const newWord: BSWord = { name: word }; // Convert the string to a BSWord object
    currentData.push(newWord);
    this._data.next(currentData);
    console.log(this._data);
  }

  removeWord(index: number): void {
    const currentData = this._data.value;

    if (index >= 0 && index < currentData.length) {
      currentData.splice(index, 1);
      this._data.next(currentData);
    }
  }

  editWord(index: number, newWord: string): void {
    const currentData = this._data.value;

    if (index >= 0 && index < currentData.length) {
      currentData[index].name = newWord;
      this._data.next(currentData);
    }
  }
 
}
