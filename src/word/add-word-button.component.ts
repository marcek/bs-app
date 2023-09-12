import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { WordFormComponent } from "src/app/word-form/word-form.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: "bs-add-word-button",
  template: `
    <button mat-raised-button color="primary" (click)="openWordFormDialog()">Otwórz formularz</button>
  `,
  styleUrls: ["./add-word-button.component.css"]
  
})
export class AddWordButtonComponent {
 
  constructor(private dialog: MatDialog) {}

 

  openWordFormDialog(): void {

    this.dialog.open(WordFormComponent, {
      width: '400px'
    });
  }

  
}
