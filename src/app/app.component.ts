import { Component } from "@angular/core";
import { AddWordButtonComponent } from "src/word/add-word-button.component";
import { WordListComponent } from "src/word/word-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WordService } from "src/word/word.service";
import { MatDialog } from "@angular/material/dialog";
import { WordFormComponent } from "./word-form/word-form.component";
import { BSWord } from "src/word/word.type";


@Component({
  standalone: true,
  imports: [AddWordButtonComponent, WordListComponent, MatButtonModule, MatDialogModule ],
  selector: "bs-app",
  template: `
    <div class="bs-app">
      <bs-word-list></bs-word-list>
      <bs-add-word-button (wordAdded)="handleWordAdded($event)" ></bs-add-word-button>
      
    </div>
  `
})
export class AppComponent { 

  constructor(private wordService: WordService) {}
  
  handleWordAdded(word: string): void {
    console.log(word)
    
    this.wordService.addWord(word)

  }

 
}
