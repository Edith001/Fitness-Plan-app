webpackJsonp([6],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_plan_plan__ = __webpack_require__(119);
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pop__ = __webpack_require__(526);
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
    function PlanPage(navCtrl, http, auth, navm, popc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.auth = auth;
        this.navm = navm;
        this.popc = popc;
        this.gname = this.navm.data;
        console.log(this.navm.data);
        if (typeof (this.gname) === "string") {
            this.editable = true;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + this.gname).once("value").then(function (snapshot) {
                var a = snapshot.val();
                var len = a.length;
                for (var i = 0; i < len; i++) {
                    var b = a[i].children;
                    var len0 = b.length;
                    for (var j = 0; j < len0; j++) {
                        if (b[j].children === "em") {
                            b[j].children = [];
                        }
                        console.log(b[j]);
                    }
                }
                console.log(a);
                _this.information = a;
            });
            console.log(this.information);
        }
        else {
            this.editable = false;
            if (this.auth.getAuthenticatedUser()) {
                this.UserId = this.auth.getAuthenticatedUser().uid;
            }
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/' + this.UserId).once('value').then(function (snapshot) {
                _this.name = snapshot.val().userbasic.fname;
                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.name).once("value").then(function (snapshot) {
                    var a = snapshot.val();
                    var len = a.length;
                    for (var i = 0; i < len; i++) {
                        var b = a[i].children;
                        var len0 = b.length;
                        for (var j = 0; j < len0; j++) {
                            if (b[j].children === "em") {
                                b[j].children = [];
                            }
                            else {
                            }
                            console.log(b[j]);
                        }
                    }
                    console.log(a);
                    _this.information = a;
                });
                console.log(_this.information);
            });
        }
    }
    PlanPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.gname = this.navm.data;
        console.log(this.navm.data);
        if (typeof (this.gname) === "string") {
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + this.gname).on("value", function (snapshot) {
                var a = snapshot.val();
                var len = a.length;
                for (var i = 0; i < len; i++) {
                    var b = a[i].children;
                    var len0 = b.length;
                    for (var j = 0; j < len0; j++) {
                        if (b[j].children === "em") {
                            b[j].children = [];
                        }
                        console.log(b[j]);
                    }
                }
                console.log(a);
                _this.information = a;
            });
            console.log(this.information);
        }
        else {
            if (this.auth.getAuthenticatedUser()) {
                this.UserId = this.auth.getAuthenticatedUser().uid;
            }
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/' + this.UserId).once('value').then(function (snapshot) {
                _this.name = snapshot.val().userbasic.fname;
                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.name).on("value", function (snapshot) {
                    var a = snapshot.val();
                    console.log(a);
                    var len = a.length;
                    console.log(len);
                    for (var i = 0; i < len; i++) {
                        var b = a[i].children;
                        var len0 = b.length;
                        for (var j = 0; j < len0; j++) {
                            if (b[j].children === "em") {
                                b[j].children = [];
                            }
                            else {
                            }
                            console.log(b[j]);
                        }
                    }
                    console.log(a);
                    _this.information = a;
                });
                console.log(_this.information);
            });
        }
    };
    PlanPage.prototype.add = function (item, child) {
        var _this = this;
        var exer;
        var pop = this.popc.create(__WEBPACK_IMPORTED_MODULE_7__pop__["a" /* PopPage */]);
        pop.present({ ev: event });
        pop.onDidDismiss(function (data) {
            exer = data;
            console.log(exer);
            var a = _this.information;
            var len = a.length;
            for (var i = 0; i < len; i++) {
                if (a[i].name == item.name) {
                    var b = a[i].children;
                    var len0 = b.length;
                    console.log(len0);
                    for (var j = 0; j < len0; j++) {
                        if (b[j].name == child.name) {
                            if (b[j].children) {
                                b[j].children.push(exer);
                            }
                            else {
                                b[j] = {
                                    name: child.name,
                                    children: [exer]
                                };
                            }
                        }
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.gname).set(_this.information);
        });
    };
    PlanPage.prototype.delete = function (item0, child, item) {
        var a = this.information;
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].name == item.name) {
                var b = a[i].children;
                var len0 = b.length;
                for (var j = 0; j < len0; j++) {
                    if (b[j].name == child.name) {
                        var f = b[j].children;
                        var g = f.length;
                        for (var i = 0; i < g; i++) {
                            if (f[i].name === item0.name) {
                                f.splice(i, 1);
                                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + this.gname).set(this.information);
                                return;
                            }
                        }
                    }
                }
            }
        }
    };
    PlanPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    PlanPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    PlanPage.prototype.gotoDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], item);
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/plan/plan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Training Plan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }}\n      </button>\n\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <ion-item class="child">\n          <button ion-item (click)="toggleItem(i, j)" class="child" detail-none>  \n          <!--<button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>-->\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n          <button ion-button outline item-end (click)="add(item,child)" *ngIf="!child.open && editable">add</button>\n        </ion-item>\n          <!-- Direct Add Button as Fallback -->\n          <!-- <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase>{{ child.information }}</p>\n            <button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>\n          </ion-item> -->\n\n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item-sliding *ngFor="let item0 of child.children; let k = index">\n            <ion-item detail-none class="child-item" text-wrap>\n              <h2>{{ item0.name }}</h2>\n              <p text-lowercase>{{ item0.information }}</p>\n              <!-- Direct Add Button -->\n              <button ion-button outline item-end (click)="gotoDetail(item0)">{{ item0.price }}</button>\n            </ion-item>\n            <ion-item-options>\n              <button ion-button color ="secondary" (click)="delete(item0,child,item)" *ngIf = "editable">\n              <ion-icon name="trash">\n              </ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n          </ion-list>\n\n        </ion-list-header>\n      </ion-list>\n\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/plan/plan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(728);
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
            console.log("created an empty one");
            this.userBasicInfo = {
                fname: "",
                lname: "",
                gender: "",
                Birthday: new Date(),
                profession: "",
                heightfeet: "0",
                heightinch: "0",
                weight: "0",
                traininghistory: "false",
                professional: "false",
                isCoach: "false",
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(37);
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
 * Generated class for the CoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachPage = /** @class */ (function () {
    function CoachPage(alertc, navCtrl, navParams, auth) {
        var _this = this;
        this.alertc = alertc;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.coaches = [];
        this.name = "";
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/coaches').once('value').then(function (snapshot) {
            var a = snapshot.val();
            Object.keys(a).map(function (key) { _this.coaches.push(key); });
            //console.log(this.coaches);
        });
        var userId = this.auth.getAuthenticatedUser().uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + userId).once('value').then(function (snapshot) {
            _this.name = snapshot.val().userbasic.fname;
        });
    }
    CoachPage.prototype.coachdetail = function (item) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).once('value').then(function (snapshot) {
            console.log("snapshotget");
            var c = snapshot.val();
            var allStuts = [];
            Object.keys(c).map(function (key) {
                allStuts.push(c[key]);
            });
            var len = allStuts.length;
            for (var i = 0; i < len; i++) {
                console.log("in loop");
                if (allStuts[i] === _this.name) {
                    var alert_1 = _this.alertc.create({
                        title: "Warning!",
                        message: "You can only subscribe to a coach once",
                        buttons: ["Ok"]
                    });
                    alert_1.present();
                    return;
                }
            }
            var a = snapshot.val();
            if (a.first === "stu1") {
                console.log("updated1");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).update({ first: _this.name });
                return;
            }
            if (a.second === "stu2") {
                console.log("updated2");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).update({ second: _this.name });
                return;
            }
            if (a.third === "stu3") {
                console.log("updated3");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).update({ third: _this.name });
                return;
            }
            var alert0 = _this.alertc.create({
                title: "Sorry",
                message: "The capacity of this coach is full!",
                buttons: ["Ok"]
            });
            alert0.present();
            return;
        }, function (err) {
        });
        // firebase.database().ref("/coaches/"+item).
    };
    CoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/coach/coach.html"*/'<!--\n  Generated template for the CoachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coach</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor=\'let item of coaches\'>\n      <ion-item>\n        {{item}}\n      </ion-item>\n    <ion-item-options>\n      <button ion-button color ="secondary" (click)="coachdetail(item)"> Details</button>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/coach/coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */]])
    ], CoachPage);
    return CoachPage;
}());

//# sourceMappingURL=coach.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dataManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(37);
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
            heightfeet: "0",
            heightinch: "0",
            weight: "0",
            traininghistory: "false",
            professional: "false",
            isCoach: "false"
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.data;
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.update = function () {
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{item.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item>\n        <ion-col>\n        Your Accomplishment\n        </ion-col>\n        <ion-col>\n        {{Accomplishment}}\n        </ion-col>\n      </ion-item>\n      <ion-item (click)="update()">\n          <ion-range min="20" max="80" step="2" [(ngModel)]="Accomplishment">\n            <ion-icon small range-left name="bicycle"></ion-icon>\n            <ion-icon range-right name="bicycle"></ion-icon>\n          </ion-range>\n        </ion-item>       \n  </ion-list>\n  <ion-card>\n    <ion-card-header>\n      Discription\n    </ion-card-header>\n    <ion-card-content>\n      {{item.information}}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plan_plan__ = __webpack_require__(119);
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
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentPage = /** @class */ (function () {
    function StudentPage(navCtrl, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.students = [];
        this.name = "";
        var userId = this.auth.getAuthenticatedUser().uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + userId).once('value').then(function (snapshot) {
            _this.name = snapshot.val().userbasic.fname;
        });
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/coaches/' + this.name).once('value').then(function (snapshot) {
            var a = snapshot.val();
            console.log(a);
            var b;
            Object.keys(a).map(function (key) {
                console.log(key);
                b = a[key];
                console.log(b);
            });
            console.log(b);
            if (b.first !== "stu1") {
                _this.students.push(b.first);
            }
            if (b.second !== "stu2") {
                _this.students.push(b.second);
            }
            if (b.third !== "stu3") {
                _this.students.push(b.third);
            }
            console.log(_this.students);
        });
    }
    StudentPage.prototype.viewPlan = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plan_plan__["a" /* PlanPage */], item);
    };
    StudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/student/student.html"*/'<!--\n  Generated template for the StudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coach</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let student of students">\n      <ion-item>\n        {{student}}\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="secondary" (click)="viewProfile(student)">profile</button>\n        <button ion-button color="secondary" (click)="viewPlan(student)">plan</button>\n      </ion-item-options>\n  </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/student/student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */]])
    ], StudentPage);
    return StudentPage;
}());

//# sourceMappingURL=student.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
        this.initPlan = [
            {
                name: "Monday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Tuesday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Wednesday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Thursday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Friday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Saturday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Sunday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            }
        ];
    }
    UserInfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var l = this.loadc.create({
            content: "loading..."
        });
        l.present();
        this.auth.getAuthenticatedUser().getIdToken().then(function (token) {
            if (token) {
                _this.datam.DLUserBasicInfo(token).subscribe(function () {
                    l.dismiss();
                    if (_this.datam.getUserBasicInof()) {
                        _this.fname = _this.datam.getUserBasicInof().fname;
                        _this.lname = _this.datam.getUserBasicInof().fname;
                        _this.gender = _this.datam.getUserBasicInof().gender;
                        _this.Birthday = _this.datam.getUserBasicInof().Birthday;
                        _this.profession = _this.datam.getUserBasicInof().profession;
                        _this.heightfeet = _this.datam.getUserBasicInof().heightfeet;
                        _this.heightinch = _this.datam.getUserBasicInof().heightinch;
                        _this.weight = _this.datam.getUserBasicInof().weight;
                        _this.traininghistory = _this.datam.getUserBasicInof().traininghistory;
                        _this.professional = _this.datam.getUserBasicInof().professional;
                        _this.isCoach = _this.datam.getUserBasicInof().isCoach;
                    }
                }, function (err) {
                    var alert = _this.alertc.create({
                        title: "Failed to retrieve your information",
                        message: err.message,
                        buttons: ["Ok"],
                    });
                    alert.present();
                });
                console.log(_this.datam.getUserBasicInof());
            }
        }, function (err) {
            var alert = _this.alertc.create({
                title: "Failed to retrieve your information",
                message: err.message,
                buttons: ["Ok"]
            });
            alert.present();
        });
        console.log('ionViewDidLoad UserInfoPage');
    };
    UserInfoPage.prototype.upGradeToPremium = function () {
    };
    UserInfoPage.prototype.submitBasicInfo = function () {
        var _this = this;
        if (this.fname == null || this.lname == null ||
            this.gender == null || this.Birthday == null ||
            this.profession == null || this.heightfeet == null ||
            this.heightinch == null || this.weight == null ||
            this.traininghistory == null || this.professional == null ||
            this.isCoach == null) {
            var al = this.alertc.create({
                title: "Warnning!",
                message: "please fill out the form",
                buttons: ["Ok"]
            });
            al.present();
            return;
        }
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
            isCoach: this.isCoach,
        });
        var l = this.loadc.create({
            content: "Submitting!"
        });
        l.present();
        this.auth.getAuthenticatedUser().getIdToken().then(function (token) {
            l.dismiss();
            console.log(_this.isCoach);
            if (_this.isCoach === "true") {
                console.log("added coach");
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().child("coaches/" + _this.lname).set({
                    first: "stu1",
                    second: "stu2",
                    third: "stu3"
                });
            }
            else {
                console.log("added a student");
                console.log(_this.initPlan);
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().child("plan/" + _this.lname).set(_this.initPlan);
            }
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
            selector: 'page-user-info',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/user-info/user-info.html"*/'<!--\n  Generated template for the UserInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>UserInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">First Name</ion-label>\n      <ion-input [(ngModel)]="fname" type="text" placeholder="FirstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">last Name</ion-label>\n      <ion-input [(ngModel)]="lname" type="text" placeholder="LastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender" placeholder="Male">\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female" Female>Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date of Birth</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="Birthday"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Profession</ion-label>\n      <ion-select [(ngModel)]=profession placeholder="student">\n        <ion-option value="student">Student</ion-option>\n        <ion-option value="athlete">Athlete</ion-option>\n        <ion-option value="officer">Officer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Height</ion-label>\n      <ion-select [(ngModel)]="heightfeet" placeholder="feet">\n        <ion-option value="3">3\'</ion-option>\n        <ion-option value="4">4\'</ion-option>\n        <ion-option value="5">5\'</ion-option>\n        <ion-option value="6">6\'</ion-option>\n        <ion-option value="7">7\'</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="heightinch" placeholder="inch">\n        <ion-option value="0">0\'\'</ion-option>\n        <ion-option value="1">1\'\'</ion-option>\n        <ion-option value="2">2\'\'</ion-option>\n        <ion-option value="3">3\'\'</ion-option>\n        <ion-option value="4">4\'\'</ion-option>\n        <ion-option value="5">5\'\'</ion-option>\n        <ion-option value="6">6\'\'</ion-option>\n        <ion-option value="7">7\'\'</ion-option>\n        <ion-option value="8">8\'\'</ion-option>\n        <ion-option value="9">9\'\'</ion-option>\n        <ion-option value="10">10\'\'</ion-option>\n        <ion-option value="11">11\'\'</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n       <ion-label color="primary">\n         Weight\n       </ion-label>\n       <ion-input [(ngModel)]="weight" placeholder="lbs" type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Ever trained?</ion-label>\n      <ion-select [(ngModel)]="traininghistory" placeholder="No">\n        <ion-option value="true">Yes</ion-option>\n        <ion-option value="false">No</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="professional" placeholder="Professional?">\n          <ion-option value="true">Yes</ion-option>\n          <ion-option value="false">No</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="Primary">Are you a coach?</ion-label>\n      <ion-select [(ngModel)]="isCoach">\n        <ion-option value="true">\n         Yes\n        </ion-option>\n        <ion-option value="false">\n          No\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button round full (click)="submitBasicInfo()">\n      Submit\n    </button>\n    <button ion-button round full (click)="upGradeToPremium()">\n      Upgrade to premium\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/user-info/user-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataManager__["a" /* DataManager */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 217:
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
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coach-dt/coach-dt.module": [
		1032,
		0
	],
	"../pages/coach/coach.module": [
		1031,
		5
	],
	"../pages/dashboard/dashboard.module": [
		1033,
		4
	],
	"../pages/detail/detail.module": [
		1034,
		3
	],
	"../pages/student/student.module": [
		1035,
		2
	],
	"../pages/user-info/user-info.module": [
		1036,
		1
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
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(52);
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

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopPage = /** @class */ (function () {
    function PopPage(viewCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.exer = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/exercise").once('value').then(function (snapshot) {
            _this.exer = snapshot.val();
            console.log(_this.exer);
        });
    }
    PopPage.prototype.close = function (item) {
        console.log(item);
        this.viewCtrl.dismiss(item);
    };
    PopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n      <ion-list>\n        <ion-item *ngFor=\"let item of exer\">\n        <button ion-button color = \"secondary\" (click)=close(item)>\n        {{item.name}}\n        </button>\n        </ion-item>\n      </ion-list>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], PopPage);
    return PopPage;
}());

//# sourceMappingURL=pop.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(37);
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

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(37);
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

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info_user_info__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plan_plan__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coach_coach__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_student__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
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
    function HomePage(navCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.isCoach = false;
        this.isStudent = false;
        if (this.auth.getAuthenticatedUser()) {
            this.UserId = this.auth.getAuthenticatedUser().uid;
        }
        ;
        // firebase.database().ref('/exercise').child('bob').set({
        //   hg:"name",
        //   tg:"namm"
        // });
        // firebase.database().ref('/coaches').once('value').then((snapshot)=>{
        //   const a = snapshot.val();
        //   Object.keys(a).map(key=>{this.coaches.push(key)});
        //   console.log(this.coaches);
        // });
        // firebase.database().ref('/exercise').once('value').then((snapshot)=>{
        //   const a = snapshot.val();
        //   Object.keys(a).map(key=>{this.exercise.push(a[key])});
        //console.log(this.exercise);
        //});
        __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/' + this.UserId).once('value').then(function (snapshot) {
            if (snapshot.val()) {
                if (snapshot.val().userbasic.isCoach == "true") {
                    //console.log("one");
                    _this.isCoach = true;
                    _this.isStudent = false;
                }
                else {
                    //console.log("two");
                    _this.isStudent = true;
                    _this.isCoach = false;
                }
            }
            else {
                _this.isCoach = false;
                _this.isStudent = false;
            }
            //console.log("isCoach"+":"+this.isCoach);
        });
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var userRef = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/' + this.UserId);
        userRef.on('value', function (snapshot) {
            if (snapshot.val()) {
                //console.log(snapshot.val().userbasic.isCoach);
                if (snapshot.val().userbasic.isCoach == "true") {
                    console.log(snapshot.val().userbasic.isCoach);
                    console.log("three");
                    _this.isCoach = true;
                    _this.isStudent = false;
                }
                else {
                    //console.log(snapshot.val().userbasic.isCoach);
                    //console.log("four")
                    _this.isStudent = true;
                    _this.isCoach = false;
                }
            }
            else {
                _this.isCoach = false;
                _this.isStudent = false;
            }
            //console.log(this.UserId+":"+this.isCoach);
        });
    };
    HomePage.prototype.addInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_info_user_info__["a" /* UserInfoPage */]);
    };
    HomePage.prototype.gotoGraph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.trainPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plan_plan__["a" /* PlanPage */]);
    };
    HomePage.prototype.Coach = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__coach_coach__["a" /* CoachPage */]);
    };
    HomePage.prototype.Student = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__student_student__["a" /* StudentPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Your Fitness Home\n    </ion-title>\n    <ion-buttons start>\n        <button ion-button icon-only menuToggle>\n      <ion-icon name="menu" style="zoom:1.2"></ion-icon>\n       </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click) = "addInfo()">\n      add info\n    </button>\n    <button ion-button (click)= "gotoGraph()">\n     goto graph\n    </button>\n    <button ion-button *ngIf="isStudent" (click) = "trainPlan()">\n      training plan\n    </button>\n    <button ion-button *ngIf="isCoach" (click) = \'Student()\'>\n     Your Student\n    </button>\n    <button ion-button *ngIf="isStudent" (click) = "Coach()">\n     select a coach\n    </button>\n    <!-- <ion-list>\n    <ion-item *ngFor=\'let item of exercise\'>\n      {{item}}\n    </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item *ngFor=\'let item of coaches\'>\n       {{item}}\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/Users/xiaoyisun/Desktop/app development/gittest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_auth__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(578);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_dataManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detail_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_coach_coach__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_student_student__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pop__ = __webpack_require__(526);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pop__["a" /* PopPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/coach/coach.module#CoachPageModule', name: 'CoachPage', segment: 'coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-dt/coach-dt.module#CoachDtPageModule', name: 'CoachDtPage', segment: 'coach-dt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student.module#StudentPageModule', name: 'StudentPage', segment: 'student', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pop__["a" /* PopPage */]
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

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 310,
	"./af.js": 310,
	"./ar": 311,
	"./ar-dz": 312,
	"./ar-dz.js": 312,
	"./ar-kw": 313,
	"./ar-kw.js": 313,
	"./ar-ly": 314,
	"./ar-ly.js": 314,
	"./ar-ma": 315,
	"./ar-ma.js": 315,
	"./ar-sa": 316,
	"./ar-sa.js": 316,
	"./ar-tn": 317,
	"./ar-tn.js": 317,
	"./ar.js": 311,
	"./az": 318,
	"./az.js": 318,
	"./be": 319,
	"./be.js": 319,
	"./bg": 320,
	"./bg.js": 320,
	"./bm": 321,
	"./bm.js": 321,
	"./bn": 322,
	"./bn.js": 322,
	"./bo": 323,
	"./bo.js": 323,
	"./br": 324,
	"./br.js": 324,
	"./bs": 325,
	"./bs.js": 325,
	"./ca": 326,
	"./ca.js": 326,
	"./cs": 327,
	"./cs.js": 327,
	"./cv": 328,
	"./cv.js": 328,
	"./cy": 329,
	"./cy.js": 329,
	"./da": 330,
	"./da.js": 330,
	"./de": 331,
	"./de-at": 332,
	"./de-at.js": 332,
	"./de-ch": 333,
	"./de-ch.js": 333,
	"./de.js": 331,
	"./dv": 334,
	"./dv.js": 334,
	"./el": 335,
	"./el.js": 335,
	"./en-au": 336,
	"./en-au.js": 336,
	"./en-ca": 337,
	"./en-ca.js": 337,
	"./en-gb": 338,
	"./en-gb.js": 338,
	"./en-ie": 339,
	"./en-ie.js": 339,
	"./en-il": 340,
	"./en-il.js": 340,
	"./en-nz": 341,
	"./en-nz.js": 341,
	"./eo": 342,
	"./eo.js": 342,
	"./es": 343,
	"./es-do": 344,
	"./es-do.js": 344,
	"./es-us": 345,
	"./es-us.js": 345,
	"./es.js": 343,
	"./et": 346,
	"./et.js": 346,
	"./eu": 347,
	"./eu.js": 347,
	"./fa": 348,
	"./fa.js": 348,
	"./fi": 349,
	"./fi.js": 349,
	"./fo": 350,
	"./fo.js": 350,
	"./fr": 351,
	"./fr-ca": 352,
	"./fr-ca.js": 352,
	"./fr-ch": 353,
	"./fr-ch.js": 353,
	"./fr.js": 351,
	"./fy": 354,
	"./fy.js": 354,
	"./gd": 355,
	"./gd.js": 355,
	"./gl": 356,
	"./gl.js": 356,
	"./gom-latn": 357,
	"./gom-latn.js": 357,
	"./gu": 358,
	"./gu.js": 358,
	"./he": 359,
	"./he.js": 359,
	"./hi": 360,
	"./hi.js": 360,
	"./hr": 361,
	"./hr.js": 361,
	"./hu": 362,
	"./hu.js": 362,
	"./hy-am": 363,
	"./hy-am.js": 363,
	"./id": 364,
	"./id.js": 364,
	"./is": 365,
	"./is.js": 365,
	"./it": 366,
	"./it.js": 366,
	"./ja": 367,
	"./ja.js": 367,
	"./jv": 368,
	"./jv.js": 368,
	"./ka": 369,
	"./ka.js": 369,
	"./kk": 370,
	"./kk.js": 370,
	"./km": 371,
	"./km.js": 371,
	"./kn": 372,
	"./kn.js": 372,
	"./ko": 373,
	"./ko.js": 373,
	"./ky": 374,
	"./ky.js": 374,
	"./lb": 375,
	"./lb.js": 375,
	"./lo": 376,
	"./lo.js": 376,
	"./lt": 377,
	"./lt.js": 377,
	"./lv": 378,
	"./lv.js": 378,
	"./me": 379,
	"./me.js": 379,
	"./mi": 380,
	"./mi.js": 380,
	"./mk": 381,
	"./mk.js": 381,
	"./ml": 382,
	"./ml.js": 382,
	"./mn": 383,
	"./mn.js": 383,
	"./mr": 384,
	"./mr.js": 384,
	"./ms": 385,
	"./ms-my": 386,
	"./ms-my.js": 386,
	"./ms.js": 385,
	"./mt": 387,
	"./mt.js": 387,
	"./my": 388,
	"./my.js": 388,
	"./nb": 389,
	"./nb.js": 389,
	"./ne": 390,
	"./ne.js": 390,
	"./nl": 391,
	"./nl-be": 392,
	"./nl-be.js": 392,
	"./nl.js": 391,
	"./nn": 393,
	"./nn.js": 393,
	"./pa-in": 394,
	"./pa-in.js": 394,
	"./pl": 395,
	"./pl.js": 395,
	"./pt": 396,
	"./pt-br": 397,
	"./pt-br.js": 397,
	"./pt.js": 396,
	"./ro": 398,
	"./ro.js": 398,
	"./ru": 399,
	"./ru.js": 399,
	"./sd": 400,
	"./sd.js": 400,
	"./se": 401,
	"./se.js": 401,
	"./si": 402,
	"./si.js": 402,
	"./sk": 403,
	"./sk.js": 403,
	"./sl": 404,
	"./sl.js": 404,
	"./sq": 405,
	"./sq.js": 405,
	"./sr": 406,
	"./sr-cyrl": 407,
	"./sr-cyrl.js": 407,
	"./sr.js": 406,
	"./ss": 408,
	"./ss.js": 408,
	"./sv": 409,
	"./sv.js": 409,
	"./sw": 410,
	"./sw.js": 410,
	"./ta": 411,
	"./ta.js": 411,
	"./te": 412,
	"./te.js": 412,
	"./tet": 413,
	"./tet.js": 413,
	"./tg": 414,
	"./tg.js": 414,
	"./th": 415,
	"./th.js": 415,
	"./tl-ph": 416,
	"./tl-ph.js": 416,
	"./tlh": 417,
	"./tlh.js": 417,
	"./tr": 418,
	"./tr.js": 418,
	"./tzl": 419,
	"./tzl.js": 419,
	"./tzm": 420,
	"./tzm-latn": 421,
	"./tzm-latn.js": 421,
	"./tzm.js": 420,
	"./ug-cn": 422,
	"./ug-cn.js": 422,
	"./uk": 423,
	"./uk.js": 423,
	"./ur": 424,
	"./ur.js": 424,
	"./uz": 425,
	"./uz-latn": 426,
	"./uz-latn.js": 426,
	"./uz.js": 425,
	"./vi": 427,
	"./vi.js": 427,
	"./x-pseudo": 428,
	"./x-pseudo.js": 428,
	"./yo": 429,
	"./yo.js": 429,
	"./zh-cn": 430,
	"./zh-cn.js": 430,
	"./zh-hk": 431,
	"./zh-hk.js": 431,
	"./zh-tw": 432,
	"./zh-tw.js": 432
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
webpackContext.id = 709;

/***/ })

},[573]);
//# sourceMappingURL=main.js.map