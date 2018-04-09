webpackJsonp([2],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_plan_plan__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, authService, menuCtrl, statusBar, splashScreen) {
        var _this = this;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */];
        this.planPage = __WEBPACK_IMPORTED_MODULE_9__pages_plan_plan__["a" /* PlanPage */];
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: "AIzaSyCvF4uhrtr4fK0q8fKfldDth9dr0257x18",
            authDomain: "gymapp-7ab3c.firebaseapp.com",
            databaseURL: "https://gymapp-7ab3c.firebaseio.com",
            projectId: "gymapp-7ab3c",
            storageBucket: "gymapp-7ab3c.appspot.com",
            messagingSenderId: "857607056717"
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.isAuthenticated = false;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(rootPage)"\n        *ngIf="isAuthenticated">\n        <ion-icon name="book"></ion-icon>\n        Fitness Home\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(signinPage)"\n        *ngIf="!isAuthenticated">\n        <ion-icon name="log-in"></ion-icon>\n        Signin\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(signupPage)"\n        *ngIf="!isAuthenticated">\n        <ion-icon name="person"></ion-icon>\n        Signup\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLogout()"\n        *ngIf="isAuthenticated">\n        <ion-icon name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataManager = /** @class */ (function () {
    function DataManager(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    DataManager.prototype.DLUserBasicInfo = function (token) {
        var _this = this;
        var userId = this.auth.getAuthenticatedUser().uid;
        return this.http.get("https://gymapp-7ab3c.firebaseio.com/" + userId + "/userbasic.json?auth=" + token).map(function (response) {
            return response.json();
        }).do(function (data) {
            _this.userBasicInfo = data;
        });
    };
    DataManager.prototype.getUserBasicInof = function () {
        if (!this.userBasicInfo) {
            this.userBasicInfo = {
                fname: "",
                lname: "",
                gender: "",
                Birthday: new Date(),
                profession: "",
                heightfeet: 0,
                heightinch: 0,
                weight: 0,
                traininghistory: false,
                professional: false,
            };
        }
        return this.userBasicInfo;
    };
    DataManager.prototype.UPUserBasicInfo = function (token) {
        var t = this.userBasicInfo;
        var userId = this.auth.getAuthenticatedUser().uid;
        return this.http.put("https://gymapp-7ab3c.firebaseio.com/" + userId + "/userbasic.json?auth=" + token, t).map(function (response) {
            return response.json();
        });
    };
    DataManager.prototype.putUserBasicInfo = function (data) {
        this.userBasicInfo = data;
    };
    DataManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]])
    ], DataManager);
    return DataManager;
}());

//# sourceMappingURL=dataManager.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dataManager__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(57);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, datam, auth, loadc, alertc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datam = datam;
        this.auth = auth;
        this.loadc = loadc;
        this.alertc = alertc;
        this.userBasicInfo = {
            fname: "",
            lname: "",
            gender: "",
            Birthday: new Date(),
            profession: "",
            heightfeet: 0,
            heightinch: 0,
            weight: 0,
            traininghistory: false,
            professional: false,
        };
        this.data1 = {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{ label: "Weekly @galance", fill: false, lineTension: 0.1, backgroundColor: "#C0C0C0",
                    borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0.0, borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)", pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 32],
                    spanGaps: false, }]
        };
        this.data0 = {
            labels: ["Accomplished", "Remaining"],
            datasets: [
                {
                    data: [90, 10],
                    backgroundColor: ["#A9A9A9", "#C0C0C0"],
                    hoverBackgroundColor: ["#FF6384", "#36A2EB"]
                }
            ]
        };
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var l = this.loadc.create({
            content: "Loading"
        });
        l.present();
        console.log('ionViewDidLoad DashboardPage');
        this.Canvas1 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.Canvas1.nativeElement, { data: this.data1, type: 'line' });
        this.Canvas0 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.Canvas0.nativeElement, { data: this.data0, type: 'pie' });
        this.auth.getAuthenticatedUser().getIdToken().then(function (Token) {
            _this.datam.DLUserBasicInfo(Token).subscribe(function (data) {
                l.dismiss();
                _this.userBasicInfo = _this.datam.getUserBasicInof();
            }, function (err) {
                console.log(err);
                l.dismiss();
                var a = _this.alertc.create({
                    title: "Server ERROR0",
                    message: err.message,
                    buttons: ["Ok"]
                });
                a.present();
            });
        }, function (err) {
            l.dismiss();
            var a = _this.alertc.create({
                title: "Server ERROR1",
                message: err.message,
                buttons: ["Ok"]
            });
            a.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Canvas1"),
        __metadata("design:type", Object)
    ], DashboardPage.prototype, "Canvas1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Canvas0"),
        __metadata("design:type", Object)
    ], DashboardPage.prototype, "Canvas0", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      You\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          {{userBasicInfo.fname}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n       Daily Accomplish\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Canvas0>\n      </canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n       Your Points\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Canvas1>\n      </canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_dataManager__["a" /* DataManager */], __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataManager__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(57);
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
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserInfoPage = /** @class */ (function () {
    function UserInfoPage(navCtrl, navParams, datam, auth, alertc, loadc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datam = datam;
        this.auth = auth;
        this.alertc = alertc;
        this.loadc = loadc;
    }
    UserInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserInfoPage');
    };
    UserInfoPage.prototype.upGradeToPremium = function () {
    };
    UserInfoPage.prototype.submitBasicInfo = function () {
        var _this = this;
        this.datam.putUserBasicInfo({
            fname: this.fname,
            lname: this.lname,
            gender: this.gender,
            Birthday: this.Birthday,
            profession: this.profession,
            heightfeet: this.heightfeet,
            heightinch: this.heightinch,
            weight: this.weight,
            traininghistory: this.traininghistory,
            professional: this.professional,
        });
        var l = this.loadc.create({
            content: "Submitting!"
        });
        l.present();
        this.auth.getAuthenticatedUser().getIdToken().then(function (token) {
            l.dismiss();
            _this.datam.UPUserBasicInfo(token).subscribe(function () {
                var alert = _this.alertc.create({
                    title: "Submit Successful!",
                    buttons: ["Ok"]
                });
                alert.present();
            }, function (err) {
                console.log(err);
                var alert = _this.alertc.create({
                    title: "Submission Failure!",
                    message: err.message,
                    buttons: ["Ok"]
                });
                alert.present();
            });
        }, function (err) {
            l.dismiss();
            var alert = _this.alertc.create({
                title: "Server ERROR",
                message: err.message,
                buttons: ["Ok"]
            });
            alert.present();
        });
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-info',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/user-info/user-info.html"*/'<!--\n  Generated template for the UserInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>UserInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">First Name</ion-label>\n      <ion-input [(ngModel)]="fname" type="text" placeholder="FirstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">last Name</ion-label>\n      <ion-input [(ngModel)]="lname" type="text" placeholder="LastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender" placeholder="Male">\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female" Female>Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date of Birth</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="Birthday"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Profession</ion-label>\n      <ion-select [(ngModel)]=profession placeholder="student">\n        <ion-option value="student">Student</ion-option>\n        <ion-option value="athlete">Athlete</ion-option>\n        <ion-option value="officer">Officer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Height</ion-label>\n      <ion-select [(ngModel)]="heightfeet" placeholder="feet">\n        <ion-option value=3>3\'</ion-option>\n        <ion-option value=4>4\'</ion-option>\n        <ion-option value=5>5\'</ion-option>\n        <ion-option value=6>6\'</ion-option>\n        <ion-option value=7>7\'</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="heightinch" placeholder="inch">\n        <ion-option value=0>0\'\'</ion-option>\n        <ion-option value=1>1\'\'</ion-option>\n        <ion-option value=2>2\'\'</ion-option>\n        <ion-option value=3>3\'\'</ion-option>\n        <ion-option value=4>4\'\'</ion-option>\n        <ion-option value=5>5\'\'</ion-option>\n        <ion-option value=6>6\'\'</ion-option>\n        <ion-option value=7>7\'\'</ion-option>\n        <ion-option value=8>8\'\'</ion-option>\n        <ion-option value=9>9\'\'</ion-option>\n        <ion-option value=10>10\'\'</ion-option>\n        <ion-option value=11>11\'\'</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n       <ion-label color="primary">\n         Weight\n       </ion-label>\n       <ion-input [(ngModel)]="weight" placeholder="lbs" type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Ever trained?</ion-label>\n      <ion-select [(ngModel)]="traininghistory" placeholder="No">\n        <ion-option value=true>Yes</ion-option>\n        <ion-option value=false>No</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="professional" placeholder="Professional?">\n          <ion-option value=true>Yes</ion-option>\n          <ion-option value=false>No</ion-option>\n        </ion-select>\n    </ion-item>\n    <button ion-button round full (click)="submitBasicInfo()">\n      Submit\n    </button>\n    <button ion-button round full (click)="upGradeToPremium()">\n      Upgrade to premium\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/user-info/user-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataManager__["a" /* DataManager */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		1027,
		1
	],
	"../pages/user-info/user-info.module": [
		1028,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = /** @class */ (function () {
    function SigninPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.authService.signin(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signin failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/signin/signin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignin(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Mail</ion-label>\n        <ion-input\n          type="email"\n          ngModel\n          name="email"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n          type="password"\n          ngModel\n          name="password"\n          required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.authService.signup(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/signup/signup.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignup(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Mail</ion-label>\n        <ion-input\n          type="email"\n          ngModel\n          name="email"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n          type="password"\n          ngModel\n          name="password"\n          required\n          [minlength]="6"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signup</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info_user_info__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plan_plan__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.addInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_info_user_info__["a" /* UserInfoPage */]);
    };
    HomePage.prototype.gotoGraph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.trainPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plan_plan__["a" /* PlanPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Your Fitness Home\n    </ion-title>\n    <ion-buttons start>\n        <button ion-button icon-only menuToggle>\n      <ion-icon name="menu" style="zoom:1.2"></ion-icon>\n       </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click) = "addInfo()">\n      add info\n    </button>\n    <button ion-button (click)= "gotoGraph()">\n     goto graph\n    </button>\n    <button ion-button (click) = "trainPlan()">\n      training plan\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanPage = /** @class */ (function () {
    function PlanPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    PlanPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    PlanPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/plan/plan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Training Plan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }}\n      </button>\n\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n\n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase>{{ child.information }}</p>\n            <button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>\n          </ion-item>\n\n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n              <h2>{{ item.name }}</h2>\n              <p text-lowercase>{{ item.information }}</p>\n              <!-- Direct Add Button -->\n              <button ion-button outline item-end (click)="buyItem(item)">{{ item.price }}</button>\n            </ion-item>\n          </ion-list>\n\n        </ion-list-header>\n      </ion-list>\n\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/plan/plan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(574);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_dataManager__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__["a" /* PlanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-info/user-info.module#UserInfoPageModule', name: 'UserInfoPage', segment: 'user-info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__["a" /* PlanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_dataManager__["a" /* DataManager */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 264,
	"./af.js": 264,
	"./ar": 265,
	"./ar-dz": 266,
	"./ar-dz.js": 266,
	"./ar-kw": 267,
	"./ar-kw.js": 267,
	"./ar-ly": 268,
	"./ar-ly.js": 268,
	"./ar-ma": 269,
	"./ar-ma.js": 269,
	"./ar-sa": 270,
	"./ar-sa.js": 270,
	"./ar-tn": 271,
	"./ar-tn.js": 271,
	"./ar.js": 265,
	"./az": 272,
	"./az.js": 272,
	"./be": 273,
	"./be.js": 273,
	"./bg": 274,
	"./bg.js": 274,
	"./bm": 275,
	"./bm.js": 275,
	"./bn": 276,
	"./bn.js": 276,
	"./bo": 277,
	"./bo.js": 277,
	"./br": 278,
	"./br.js": 278,
	"./bs": 279,
	"./bs.js": 279,
	"./ca": 280,
	"./ca.js": 280,
	"./cs": 281,
	"./cs.js": 281,
	"./cv": 282,
	"./cv.js": 282,
	"./cy": 283,
	"./cy.js": 283,
	"./da": 284,
	"./da.js": 284,
	"./de": 285,
	"./de-at": 286,
	"./de-at.js": 286,
	"./de-ch": 287,
	"./de-ch.js": 287,
	"./de.js": 285,
	"./dv": 288,
	"./dv.js": 288,
	"./el": 289,
	"./el.js": 289,
	"./en-au": 290,
	"./en-au.js": 290,
	"./en-ca": 291,
	"./en-ca.js": 291,
	"./en-gb": 292,
	"./en-gb.js": 292,
	"./en-ie": 293,
	"./en-ie.js": 293,
	"./en-il": 294,
	"./en-il.js": 294,
	"./en-nz": 295,
	"./en-nz.js": 295,
	"./eo": 296,
	"./eo.js": 296,
	"./es": 297,
	"./es-do": 298,
	"./es-do.js": 298,
	"./es-us": 299,
	"./es-us.js": 299,
	"./es.js": 297,
	"./et": 300,
	"./et.js": 300,
	"./eu": 301,
	"./eu.js": 301,
	"./fa": 302,
	"./fa.js": 302,
	"./fi": 303,
	"./fi.js": 303,
	"./fo": 304,
	"./fo.js": 304,
	"./fr": 305,
	"./fr-ca": 306,
	"./fr-ca.js": 306,
	"./fr-ch": 307,
	"./fr-ch.js": 307,
	"./fr.js": 305,
	"./fy": 308,
	"./fy.js": 308,
	"./gd": 309,
	"./gd.js": 309,
	"./gl": 310,
	"./gl.js": 310,
	"./gom-latn": 311,
	"./gom-latn.js": 311,
	"./gu": 312,
	"./gu.js": 312,
	"./he": 313,
	"./he.js": 313,
	"./hi": 314,
	"./hi.js": 314,
	"./hr": 315,
	"./hr.js": 315,
	"./hu": 316,
	"./hu.js": 316,
	"./hy-am": 317,
	"./hy-am.js": 317,
	"./id": 318,
	"./id.js": 318,
	"./is": 319,
	"./is.js": 319,
	"./it": 320,
	"./it.js": 320,
	"./ja": 321,
	"./ja.js": 321,
	"./jv": 322,
	"./jv.js": 322,
	"./ka": 323,
	"./ka.js": 323,
	"./kk": 324,
	"./kk.js": 324,
	"./km": 325,
	"./km.js": 325,
	"./kn": 326,
	"./kn.js": 326,
	"./ko": 327,
	"./ko.js": 327,
	"./ky": 328,
	"./ky.js": 328,
	"./lb": 329,
	"./lb.js": 329,
	"./lo": 330,
	"./lo.js": 330,
	"./lt": 331,
	"./lt.js": 331,
	"./lv": 332,
	"./lv.js": 332,
	"./me": 333,
	"./me.js": 333,
	"./mi": 334,
	"./mi.js": 334,
	"./mk": 335,
	"./mk.js": 335,
	"./ml": 336,
	"./ml.js": 336,
	"./mn": 337,
	"./mn.js": 337,
	"./mr": 338,
	"./mr.js": 338,
	"./ms": 339,
	"./ms-my": 340,
	"./ms-my.js": 340,
	"./ms.js": 339,
	"./mt": 341,
	"./mt.js": 341,
	"./my": 342,
	"./my.js": 342,
	"./nb": 343,
	"./nb.js": 343,
	"./ne": 344,
	"./ne.js": 344,
	"./nl": 345,
	"./nl-be": 346,
	"./nl-be.js": 346,
	"./nl.js": 345,
	"./nn": 347,
	"./nn.js": 347,
	"./pa-in": 348,
	"./pa-in.js": 348,
	"./pl": 349,
	"./pl.js": 349,
	"./pt": 350,
	"./pt-br": 351,
	"./pt-br.js": 351,
	"./pt.js": 350,
	"./ro": 352,
	"./ro.js": 352,
	"./ru": 353,
	"./ru.js": 353,
	"./sd": 354,
	"./sd.js": 354,
	"./se": 355,
	"./se.js": 355,
	"./si": 356,
	"./si.js": 356,
	"./sk": 357,
	"./sk.js": 357,
	"./sl": 358,
	"./sl.js": 358,
	"./sq": 359,
	"./sq.js": 359,
	"./sr": 360,
	"./sr-cyrl": 361,
	"./sr-cyrl.js": 361,
	"./sr.js": 360,
	"./ss": 362,
	"./ss.js": 362,
	"./sv": 363,
	"./sv.js": 363,
	"./sw": 364,
	"./sw.js": 364,
	"./ta": 365,
	"./ta.js": 365,
	"./te": 366,
	"./te.js": 366,
	"./tet": 367,
	"./tet.js": 367,
	"./tg": 368,
	"./tg.js": 368,
	"./th": 369,
	"./th.js": 369,
	"./tl-ph": 370,
	"./tl-ph.js": 370,
	"./tlh": 371,
	"./tlh.js": 371,
	"./tr": 372,
	"./tr.js": 372,
	"./tzl": 373,
	"./tzl.js": 373,
	"./tzm": 374,
	"./tzm-latn": 375,
	"./tzm-latn.js": 375,
	"./tzm.js": 374,
	"./ug-cn": 376,
	"./ug-cn.js": 376,
	"./uk": 377,
	"./uk.js": 377,
	"./ur": 378,
	"./ur.js": 378,
	"./uz": 379,
	"./uz-latn": 380,
	"./uz-latn.js": 380,
	"./uz.js": 379,
	"./vi": 381,
	"./vi.js": 381,
	"./x-pseudo": 382,
	"./x-pseudo.js": 382,
	"./yo": 383,
	"./yo.js": 383,
	"./zh-cn": 384,
	"./zh-cn.js": 384,
	"./zh-hk": 385,
	"./zh-hk.js": 385,
	"./zh-tw": 386,
	"./zh-tw.js": 386
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 622;

/***/ })

},[569]);
//# sourceMappingURL=main.js.map