import { Component } from "@angular/core";
import { AddWordButtonComponent } from "src/word/add-word-button.component";
import { WordListComponent } from "src/word/word-list.component";

@Component({
  standalone: true,
  imports: [AddWordButtonComponent, WordListComponent],
  selector: "bs-app",
  template: `
    <div class="bs-app">
      <bs-add-word-button></bs-add-word-button>
      <bs-word-list></bs-word-list>
    </div>
  `
})
export class AppComponent {}
