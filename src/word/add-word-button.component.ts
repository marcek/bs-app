import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "bs-add-word-button",
  template: `
    <div class="bs-add-word-btn">
      <button type="button">Add word</button>
    </div>
  `
})
export class AddWordButtonComponent {}