webpackJsonp([1],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJsonPageModule", function() { return PostJsonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_json__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostJsonPageModule = /** @class */ (function () {
    function PostJsonPageModule() {
    }
    PostJsonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_json__["a" /* PostJsonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_json__["a" /* PostJsonPage */]),
            ],
        })
    ], PostJsonPageModule);
    return PostJsonPageModule;
}());

//# sourceMappingURL=post-json.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJsonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PostJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostJsonPage = /** @class */ (function () {
    function PostJsonPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.returnMsg = "";
    }
    PostJsonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostJsonPage');
    };
    PostJsonPage.prototype.postJsonData = function (_name, _surname, _email) {
        var _this = this;
        var jsonData;
        jsonData = { name: _name,
            surname: _surname,
            email: _email
        };
        console.log(jsonData);
        var url = 'http://localhost/shop/ion-post-json-object.php';
        this.http.post(url, jsonData).subscribe(function (data) {
            _this.returnMsg = data.message;
        });
    };
    PostJsonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-json',template:/*ion-inline-start:"D:\SA594234020\MyApp\src\pages\post-json\post-json.html"*/'<!--\n  Generated template for the PostJsonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PostJson</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>ชื่อ</ion-label>\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>นามสกุล</ion-label>\n        <ion-input type="text" [(ngModel)]="surname"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="text" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <button ion-button block (click)="postJsonData(name,surname,email)" ><ion-icon name="body"></ion-icon>&nbsp; &nbsp; ลงทะเบียน\n      </button>\n      <h3>{{returnMsg}}</h3>\n      \n</ion-content>'/*ion-inline-end:"D:\SA594234020\MyApp\src\pages\post-json\post-json.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostJsonPage);
    return PostJsonPage;
}()); //end class

//# sourceMappingURL=post-json.js.map

/***/ })

});
//# sourceMappingURL=1.js.map