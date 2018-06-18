import { JimmyService } from './jimmy.service';
import { BobbyService } from './bobby.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { // 0
  tasks = []; // 1
    // title = 'MEAN STACK';
  constructor(
    private _bobbyService: BobbyService, // 2
    private _jimmyService: JimmyService // 3
  ) { }

  ngOnInit() { // 4
    this.getTasksFromService(); // 5
  }

  getTasksFromService() { // 6
    const observable = this._bobbyService.getTasks(); // 7, 10
    observable.subscribe( server_response => { // 11
      console.log('got our tasks (bobby) app.component.ts =>!', server_response); // 12
      this.tasks = server_response['data']; // 13
    });
  }

}
