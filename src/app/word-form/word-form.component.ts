import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-word-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent {
  form = new FormGroup({
    name: new FormControl("")
  });

  constructor(
    private matDialogRef: MatDialogRef<WordFormComponent>
  ) {}

  add(): void {}
}
