import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giftsApp';
  sideBar: boolean = false;

  openSidebar() {
    console.log('open');
    this.sideBar = true;
  }
}
