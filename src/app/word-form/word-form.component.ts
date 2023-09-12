import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-word-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent {
  form = new FormGroup({
    word: new FormControl('')
  });

  // @Output() wordAdded = new EventEmitter<string | null>(); // żeby użyć word w parencie używam EventEmitter, ale nie wiem czy to najlepsza opcja. Druga opcja jaką widzę to utworzyć
  // service to tego, ale może jest jeszcze jakaś inna opcja. UPDATE: Aha czyli wystarczy w parent component dodać subskrypcję do metody AfterClosed aha :D

  constructor(
    private matDialogRef: MatDialogRef<WordFormComponent>
  ) {}

  onSubmit(): void {
   //  this.addWord(this.form.get('word').value); Object possibly null więc robie obejście ale może da się łatwiej

   const wordControl = this.form.get('word');
   
   if (wordControl) {
     const wordValue = wordControl.value;
     if (wordValue !== null) this.addWord(wordValue);
   }
  }

  addWord(word: string): void {
    this.matDialogRef.close(word);
  }
}
