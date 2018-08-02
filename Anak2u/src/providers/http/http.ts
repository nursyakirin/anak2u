import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getStudent(){
    return this.http.get('https://morning-gorge-50959.herokuapp.com/api/class/1/students')
    .map(res => res.json())
  }

  getReport(){
    return this.http.get('https://morning-gorge-50959.herokuapp.com/api/student/1/reports')
    .map(res => res.json())
  }

  postFeed(feed){
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type','application/json');

      this.http.post('https://morning-gorge-50959.herokuapp.com/api/student/1/report', JSON.stringify(feed), {headers: headers})
      .subscribe(res => {
        let data = res.json();
        console.log(data);
        resolve(data)
      }, (err) => {
        reject(err);
      });
    });
  }
}
