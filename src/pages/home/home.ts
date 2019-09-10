import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    this.httpClient.get('http://localhost:8080/db/get-items')
      .toPromise()
      .then(DataJSON => console.log(DataJSON))
      .catch(err => {
        console.log('err: ' + err);
      });
  }

}
