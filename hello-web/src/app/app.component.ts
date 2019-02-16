import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNames = false;
  listOfNames = [];
    sendName(newName: string) {
      this.listOfNames.push(newName);
    }
}
