import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BobbyService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTask();
    // this.destroy();
  }

  getTasks() {
    const tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('got our tasks (bobby)!', data));
  }

  getTask() {
    const tempObservable = this._http.get('/task/5b235519a36b0456600d8dd0');
    tempObservable.subscribe(data => console.log('got our tasks!', data));
  }

  destroy() {
    const tempObservable = this._http.delete('/tasks/5b235519a36b0456600d8dd0');
    tempObservable.subscribe(data => console.log('got our tasks!', data));
  }
}
