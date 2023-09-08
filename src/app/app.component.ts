import { Component } from "@angular/core";
import { AddWordButtonComponent } from "src/word/add-word-button.component";
import { WordListComponent } from "src/word/word-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from "@angular/material/dialog";
import { WordFormComponent } from "./word-form/word-form.component";


@Component({
  standalone: true,
  imports: [AddWordButtonComponent, WordListComponent, MatButtonModule, MatDialogModule ],
  selector: "bs-app",
  template: `
    <div class="bs-app">
      <bs-add-word-button></bs-add-word-button>
      <bs-word-list></bs-word-list>
      <button mat-raised-button color="primary" (click)="openWordFormDialog()">Otwórz formularz</button>
    </div>
  `
})
export class AppComponent {

  
  constructor(private dialog: MatDialog) {}
  openWordFormDialog(): void {

    this.dialog.open(WordFormComponent, {
      width: '400px'
    });
  }
}
