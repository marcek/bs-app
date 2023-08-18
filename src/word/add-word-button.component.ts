import { Component } from "@angular/core";
import { WordService } from "./word.service";

@Component({
  standalone: true,
  selector: "bs-add-word-button",
  template: `
    <div class="bs-add-word-btn">
      <button (click)="onButtonClick()">{{ buttonLabel }}</button>
    </div>
  `,
  styleUrls: ["./add-word-button.component.css"]
  
})
export class AddWordButtonComponent {
  clickCounter: number = 0;
  buttonLabel: string = "Add Words"
  constructor(private wordService: WordService) {}

  onButtonClick(): void {
    this.clickCounter++;
    this.buttonLabel = "Add More Words"
    console.log(this.clickCounter)
    this.wordService.query(this.chooseCategory());
  }

  chooseCategory(): string {
    switch (this.clickCounter % 5) {
      case 0:
        return "Animals";
      case 1:
        return "Plants";
      case 2:
        return "Countries";
      case 3:
        return "Colors";
      case 4:
        return "Cities";
      default:
        return "Unknown";
    }
  }
}
