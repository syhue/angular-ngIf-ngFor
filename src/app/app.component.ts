import { Component } from '@angular/core';

@Component({
  selector: 'app-root, button-overview-example', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-project';

  isTableShow: boolean = false;

  onShowTable() {
    this.isTableShow = true;
  }
  
}
