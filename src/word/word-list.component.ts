import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WordService } from "./word.service";
import { Observable } from "rxjs";
import { BSWord } from "./word.type";

@Component({
  standalone: true,
  selector: "bs-word-list",
  template: `
    <div class="bs-word-list">
      <ul>
        <li *ngFor="let word of words$ | async">{{ word.name }}</li>
      </ul>
    </div>
  `
})
export class WordListComponent implements OnInit {
  words$: Observable<BSWord[]> | undefined;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.words$ = this.wordService.data$;
    this.wordService.query(); // Call the query method to populate data
  }
}
