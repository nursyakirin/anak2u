var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.getStudent = function () {
        return this.http.get('https://morning-gorge-50959.herokuapp.com/api/class/1/students')
            .map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.getReport = function () {
        return this.http.get('https://morning-gorge-50959.herokuapp.com/api/student/1/reports')
            .map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.postFeed = function (feed) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://morning-gorge-50959.herokuapp.com/api/student/1/reports', JSON.stringify(feed), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                console.log(data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HttpProvider);
    return HttpProvider;
}());
export { HttpProvider };
//# sourceMappingURL=http.js.map