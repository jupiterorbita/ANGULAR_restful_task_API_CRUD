import { JimmyService } from './jimmy.service';
import { BobbyService } from './bobby.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN STACK';
  constructor(private _bobbyService: BobbyService, private _jimmyService: JimmyService) {

  }
}
