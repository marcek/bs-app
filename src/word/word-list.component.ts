import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WordService } from "./word.service";
import { Observable } from "rxjs";
import { BSWord } from "./word.type";
import { FormControl  } from "@angular/forms";
import { EditWordButtonComponent } from "./edit-word.button.component";

@Component({
  standalone: true,
  selector: "bs-word-list",
  template: `
    <div class="bs-word-list">
  <ul>
    <li *ngFor="let word of words$ | async; let i = index">
      {{ word.name }}
      
      <button (click)="onButtonEditClick(i)" > EDIT </button>
      <button (click)="onButtonDeleteClick(i)"> DELETE </button>
    </li>
  </ul>
</div>

  `,
  imports: [ CommonModule, EditWordButtonComponent],
})
export class WordListComponent implements OnInit {
  words$: Observable<BSWord[]> | undefined;
  phrase = new FormControl("");

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.words$ = this.wordService.query();
    
  }

  onButtonDeleteClick(index: number) {
    this.wordService.removeWord(index)
  }
  onButtonEditClick(index: number) {
    this.wordService.editWord(index, "kokobono")
  }
}
