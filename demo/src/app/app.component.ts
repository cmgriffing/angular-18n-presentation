import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  minutes = 1;

  animalType = 'cat';

  itemCount = 1;

  title = 'App Title';

  addMinute() {
    this.minutes += 1;
  }

  setAnimalType(userInput) {
    this.animalType = userInput;
  }

  addItem() {
    this.itemCount += 1;
  }

  removeHtmlComments(html) {
    return html.replace(/<!--[\s\S]*?-->/g, '');
  }

}
