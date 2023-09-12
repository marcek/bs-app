import { Component, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { WordFormComponent } from "src/app/word-form/word-form.component";
import { MatButtonModule } from "@angular/material/button";
import { BSWord } from "./word.type";

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
  @Output() wordAdded = new EventEmitter<string>();
  wordFromDialog: string | null = null
 
  constructor(private dialog: MatDialog) {}

 

  openWordFormDialog(): void {

    const dialRef = this.dialog.open(WordFormComponent, {
      width: '400px'
    })

    dialRef.afterClosed().subscribe((result: string) => {
      this.wordAdded.emit(result)
    })
  }

  
}
