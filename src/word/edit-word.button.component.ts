import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WordFormComponent } from 'src/app/word-form/word-form.component';
import { MatButtonModule } from '@angular/material/button';
import { BSWord } from './word.type';

@Component({
  standalone: true,
  selector: 'bs-edit-word-button',
  template: `
    <button mat-raised-button color="primary" (click)="openWordFormDialog()">
      Edit Word
    </button>
  `,
  imports: [MatButtonModule],
})
export class EditWordButtonComponent {
  @Input() wordToEdit: BSWord | null = null;
  @Output() wordEdited = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  openWordFormDialog(): void {
    console.log("dsds")
     
      const dialogRef = this.dialog.open(WordFormComponent, {
        width: '400px',
        data: { wordToEdit: this.wordToEdit?.name },
      });

      dialogRef.afterClosed().subscribe((result: string) => {
        if (result) {
            console.log("sdsdssss")
          this.wordEdited.emit(result);
        }
      });
    }
}

