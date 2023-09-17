import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-word-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss'],
})
export class WordFormComponent {
  form = new FormGroup({
    word: new FormControl('', [Validators.minLength(3)]),
  });

  constructor(
    @inject(MAT_DIALOG_DATA) public data: { wordToEdit: string },   
    private matDialogRef: MatDialogRef<WordFormComponent>,
  ) {}

  onSubmit(): void {

    const wordControl = this.form.get('word');

    if (wordControl) {
      if (wordControl.valid) {
        const wordValue = wordControl.value;
        if (wordValue !== null) this.addWord(wordValue);
      }
      else {
        if (wordControl.hasError('minlength')) {
          this.form.get('word')?.errors
        }
      }
    }
  }

  addWord(word: string): void {
    this.matDialogRef.close(word);
  }
}
