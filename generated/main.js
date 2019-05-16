(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./customer/customer.module": [
		"./src/app/customer/customer.module.ts",
		0
	],
	"./product/product.module": [
		"./src/app/product/product.module.ts",
		0,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: './product/product.module#ProductModule'
    },
    {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.STATIC_URL = window['STATIC_URL'];
        this.API_PREFIX = window['API_PREFIX'] || '/api/';
        this.BASE_URL = window['BASE_URL'];
        this.username = window['user'] || null;
        this.isLoggedIn = true;
        this.isLoggedIn = this.username && this.username !== '';
    }
    AppSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_components_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/app */ "./src/app/core/components/app.ts");
/* harmony import */ var _core_services_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/user */ "./src/app/core/services/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
















var AppModule = /** @class */ (function () {
    function AppModule(document) {
        this.document = document;
        this.browser_document = document;
    }
    AppModule.prototype.ngDoBootstrap = function (appRef) {
        if (this.browser_document.getElementsByTagName('app-root').length > 0) {
            appRef.bootstrap(_core_components_app__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]);
        }
    };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFTOKEN'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                    closeButton: true,
                    enableHtml: true,
                    progressBar: true
                }),
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"].forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_core_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], { metaReducers: _core_reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot({
                    stateKey: 'router' // name of reducer key
                })
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' },
                _app_constant__WEBPACK_IMPORTED_MODULE_10__["AppSettings"],
                _core_services_user__WEBPACK_IMPORTED_MODULE_14__["UserService"]
            ],
            entryComponents: [
                _core_components_app__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/actions/header.ts":
/*!****************************************!*\
  !*** ./src/app/core/actions/header.ts ***!
  \****************************************/
/*! exports provided: HeaderActionTypes, UpdateTitle, UpdateMenu, AddBreadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderActionTypes", function() { return HeaderActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTitle", function() { return UpdateTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMenu", function() { return UpdateMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBreadcrumb", function() { return AddBreadcrumb; });
var HeaderActionTypes;
(function (HeaderActionTypes) {
    HeaderActionTypes["UpdateTitle"] = "[Header] Update Title";
    HeaderActionTypes["UpdateClass"] = "[Header] Update Class";
    HeaderActionTypes["UpdateMenu"] = "[Header] Update Menu";
    HeaderActionTypes["Breadcrumb"] = "[Header] Breadcrumb";
})(HeaderActionTypes || (HeaderActionTypes = {}));
var UpdateTitle = /** @class */ (function () {
    function UpdateTitle(payload) {
        this.payload = payload;
        this.type = HeaderActionTypes.UpdateTitle;
    }
    return UpdateTitle;
}());

var UpdateMenu = /** @class */ (function () {
    function UpdateMenu(payload) {
        this.payload = payload;
        this.type = HeaderActionTypes.UpdateMenu;
    }
    return UpdateMenu;
}());

var AddBreadcrumb = /** @class */ (function () {
    function AddBreadcrumb(payload) {
        this.payload = payload;
        this.type = HeaderActionTypes.Breadcrumb;
    }
    return AddBreadcrumb;
}());



/***/ }),

/***/ "./src/app/core/actions/user.ts":
/*!**************************************!*\
  !*** ./src/app/core/actions/user.ts ***!
  \**************************************/
/*! exports provided: UserActionTypes, UpdateUser, LoadUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return LoadUser; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["updateUser"] = "[User] Update";
    UserActionTypes["loadUser"] = "[User] Load";
})(UserActionTypes || (UserActionTypes = {}));
var UpdateUser = /** @class */ (function () {
    function UpdateUser(payload) {
        this.payload = payload;
        this.type = UserActionTypes.updateUser;
    }
    return UpdateUser;
}());

var LoadUser = /** @class */ (function () {
    function LoadUser(payload) {
        this.payload = payload;
        this.type = UserActionTypes.loadUser;
    }
    return LoadUser;
}());



/***/ }),

/***/ "./src/app/core/components/app.ts":
/*!****************************************!*\
  !*** ./src/app/core/components/app.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/header */ "./src/app/core/actions/header.ts");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/events */ "./src/app/core/services/events.ts");
/* harmony import */ var src_app_shared_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/confirmation */ "./src/app/shared/services/confirmation.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(store, titleService, msEvents, toastr, confirm) {
        var _this = this;
        this.store = store;
        this.titleService = titleService;
        this.msEvents = msEvents;
        this.toastr = toastr;
        this.confirm = confirm;
        this.onError401 = function () {
            if (_this.error401) {
                return;
            }
            _this.error401 = true;
            _this.confirm.confirm('Error loading resource', 'We received a 401-Unauthenticated response while loading some data.  Usually, ' +
                'this means you\'re not logged in or your session has expired.  We recommend ' +
                'reloading the page so you can reauthenticate.', 'Cancel', 'Reload').then(function () { return window.location.reload(); }, function () { return window.location.reload(); });
        };
        this.onSdError = function (error) {
            _this.toastr.error(error.message, error.header);
        };
        this.router$ = this.store.select(function (state) { return state.router; });
        this.msEvents.error401.subscribe(this.onError401);
        this.msEvents.sdError.subscribe(this.onSdError);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router$.subscribe(function (data) {
            if (data && data.state) {
                _this.updateTitle(data.state.data);
                _this.dispatchHeader(data.state.data);
            }
        });
    };
    AppComponent.prototype.dispatchHeader = function (data) {
        var headerTitle = null;
        var headerMenu = null;
        if (data) {
            if ('headerMenu' in data && data['headerMenu']) {
                headerMenu = data['headerMenu'];
            }
            if ('headerTitle' in data && data['headerTitle']) {
                headerTitle = data['headerTitle'];
                this.store.dispatch(new _actions_header__WEBPACK_IMPORTED_MODULE_5__["UpdateTitle"](headerTitle));
            }
            this.store.dispatch(new _actions_header__WEBPACK_IMPORTED_MODULE_5__["UpdateMenu"](headerMenu));
            this.store.dispatch(new _actions_header__WEBPACK_IMPORTED_MODULE_5__["AddBreadcrumb"](null));
        }
    };
    AppComponent.prototype.updateTitle = function (data) {
        if (data && 'title' in data && data['title']) {
            this.titleService.setTitle("TShirtShop - " + data['title']);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <ngx-loading-bar color=\"red\" height=\"3px\"></ngx-loading-bar>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _services_events__WEBPACK_IMPORTED_MODULE_6__["EventService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_confirmation__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header.html":
/*!*********************************************!*\
  !*** ./src/app/core/components/header.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header mb-4 mt-2\">\n  <a [routerLink]=\"'/'\">\n    <img src=\"{{STATIC_URL}}images/images/tshirtshop.png\">\n  </a>\n  <div class=\"nav-items\">\n    <a class=\"text-dark\" [routerLink]=\"['/cart/']\">\n      <i class=\"fa fa-shopping-cart mr-3 fa-2x\"></i>\n    </a>\n    <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\" *ngIf=\"username\">\n      <i class=\"fa fa-user-circle-o user-dropdown\" ngbDropdownToggle></i>\n      <div ngbDropdownMenu>\n        <a [routerLink]=\"'/customer/profile/'\" class=\"dropdown-item cursor-pointer\" ngbDropdownItem>\n          My Profile</a>\n        <a [routerLink]=\"'/orders/'\" class=\"dropdown-item cursor-pointer\" ngbDropdownItem>\n          My Orders</a>\n        <a href=\"/customer/logout/\" class=\"dropdown-item bg-red cursor-pointer\" ngbDropdownItem>\n        <b>Logout</b></a>\n      </div>\n    </div>\n    <ng-container *ngIf=\"!username\">\n      <button class=\"btn btn-light\" [routerLink]=\"'/customer/login/'\">Login</button>\n      <button class=\"ml-2 btn btn-primary\" [routerLink]=\"'/customer/register/'\">Register</button>\n    </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/components/header.ts":
/*!*******************************************!*\
  !*** ./src/app/core/components/header.ts ***!
  \*******************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, appSettings) {
        var _this = this;
        this.store = store;
        this.appSettings = appSettings;
        this.onUserLoaded = function (user) {
            _this.User = user;
            if (user.user)
                _this.username = user.user.username;
        };
        this.STATIC_URL = this.appSettings.STATIC_URL;
        Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["skipNil"])(this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["selectorUser"])).subscribe(this.onUserLoaded);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _actions_user__WEBPACK_IMPORTED_MODULE_4__["LoadUser"]({}));
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.html */ "./src/app/core/components/header.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/fesm5/ngx-loading-bar-http-client.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app */ "./src/app/core/components/app.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header */ "./src/app/core/components/header.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects */ "./src/app/core/effects/index.ts");
/* harmony import */ var _services_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/error */ "./src/app/core/services/error.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/events */ "./src/app/core/services/events.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

















var COMPONENTS = [
    _components_app__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
    _components_header__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                _app_constant__WEBPACK_IMPORTED_MODULE_12__["AppSettings"],
                _services_events__WEBPACK_IMPORTED_MODULE_13__["EventService"],
                _services_error__WEBPACK_IMPORTED_MODULE_11__["AppError"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"], useClass: _services_error__WEBPACK_IMPORTED_MODULE_11__["AppError"] }
            ],
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: COMPONENTS,
            exports: COMPONENTS,
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFTOKEN'
                }),
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_7__["LoadingBarRouterModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_10__["CoreEffects"]]),
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/effects/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/effects/index.ts ***!
  \***************************************/
/*! exports provided: CoreEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreEffects", function() { return CoreEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/user */ "./src/app/core/services/user.ts");







var CoreEffects = /** @class */ (function () {
    function CoreEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.loadUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].loadUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            return _this.userService.loadUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                return ({ type: _actions_user__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].updateUser, payload: res });
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoreEffects.prototype, "loadUser$", void 0);
    CoreEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_user__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], CoreEffects);
    return CoreEffects;
}());



/***/ }),

/***/ "./src/app/core/reducers/header.ts":
/*!*****************************************!*\
  !*** ./src/app/core/reducers/header.ts ***!
  \*****************************************/
/*! exports provided: selectorHeader, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorHeader", function() { return selectorHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/header */ "./src/app/core/actions/header.ts");


var initialState = {
    menu: null,
    title: '',
    breadcrumb: null
};
var selectorHeader = function (state) { return (state.header); };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_header__WEBPACK_IMPORTED_MODULE_1__["HeaderActionTypes"].UpdateTitle: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { title: action.payload });
        }
        case _actions_header__WEBPACK_IMPORTED_MODULE_1__["HeaderActionTypes"].UpdateMenu: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { menu: action.payload });
        }
        case _actions_header__WEBPACK_IMPORTED_MODULE_1__["HeaderActionTypes"].Breadcrumb: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { breadcrumb: action.payload });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/reducers/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/reducers/index.ts ***!
  \****************************************/
/*! exports provided: reducers, logger, metaReducers, selectorUser, selectorHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/app/core/reducers/header.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/core/reducers/user.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorUser", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["selectorUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorHeader", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["selectorHeader"]; });





var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    header: _header__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    user: _user__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
var metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production
    ? [logger]
    : [];




/***/ }),

/***/ "./src/app/core/reducers/user.ts":
/*!***************************************!*\
  !*** ./src/app/core/reducers/user.ts ***!
  \***************************************/
/*! exports provided: selectorUser, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorUser", function() { return selectorUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");




var userAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_3__["createEntityAdapter"])();
var initialState = null;
var selectorUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('user');
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_user__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].updateUser: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/services/error.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/error.ts ***!
  \****************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/app/core/services/events.ts");




var AppError = /** @class */ (function () {
    function AppError(msEvents) {
        this.msEvents = msEvents;
    }
    AppError.prototype.handleError = function (err) {
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            if (err.status === 401) {
                this.msEvents.error401.next(true);
                return void 0;
            }
            if (err.status === -1) {
                // We can ignore errors for when the user doesn't have internet connectivity.
                // Usually caused by a computer waking up from sleep and making a request before
                // network connected.
                return void 0;
            }
            var ref = void 0;
            var data = {
                url: err.url,
                status: err.status,
                statusText: err.statusText,
                data: (ref = err.message) != null ? ref.toString().substr(0, 2000) : void 0
            };
            console.log(err);
            if (err.status === 403) {
                this.msEvents.sdError.next({
                    message: 'You don\'t have permission to perform this action.',
                    header: 'Access Denied.'
                });
            }
            else if (err.status === 404 || err.status === 500) {
                this.msEvents.sdError.next({
                    message: err.message,
                    header: err.statusText
                });
            }
            else {
                var msg = void 0, header = void 0;
                if (err.status === 0) {
                    msg = 'Looks like you are experiencing low or no internet connectivity - please check your connection';
                    header = 'Connectivity issue';
                }
                else {
                    msg = err.error;
                    header = "An error has occurred";
                }
                this.msEvents.sdError.next({
                    message: msg,
                    header: header
                });
            }
            if ('error' in console) {
                console.error(err.url + ' has failed with error ' + err.status + ' ' + err.statusText);
            }
        }
        else {
            if ('error' in console) {
                console.error(err);
            }
        }
    };
    AppError = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], AppError);
    return AppError;
}());



/***/ }),

/***/ "./src/app/core/services/events.ts":
/*!*****************************************!*\
  !*** ./src/app/core/services/events.ts ***!
  \*****************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var EventService = /** @class */ (function () {
    function EventService() {
        this.error401 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sdError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.appLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breadcrumb = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EventService.prototype.setBreadcrumb = function (view, loaded, data) {
        if (loaded === void 0) { loaded = true; }
        if (data === void 0) { data = null; }
        this.breadcrumb.next({
            loaded: loaded,
            data: data
        });
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/core/services/user.ts":
/*!***************************************!*\
  !*** ./src/app/core/services/user.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");







var UserService = /** @class */ (function () {
    function UserService(http, store, appSettings) {
        this.http = http;
        this.store = store;
        this.appSettings = appSettings;
        this.User$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.username = this.appSettings.username;
        this.apiUrl = this.appSettings.API_PREFIX + "customer/login";
    }
    UserService.prototype.loadUser = function () {
        var _this = this;
        var sub = this.http.get(this.apiUrl);
        sub.subscribe(function (user) {
            _this.User = user;
            _this.User$.next(_this.User);
            _this.store.dispatch(new _actions_user__WEBPACK_IMPORTED_MODULE_5__["UpdateUser"](user));
        }, function (error) { });
        return sub;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/components/alert.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/alert.ts ***!
  \********************************************/
/*! exports provided: AppAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAlertComponent", function() { return AppAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var AppAlertComponent = /** @class */ (function () {
    function AppAlertComponent(activeModal) {
        this.activeModal = activeModal;
    }
    AppAlertComponent.prototype.ngOnInit = function () {
    };
    AppAlertComponent.prototype.ok = function () {
        this.activeModal.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppAlertComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppAlertComponent.prototype, "body", void 0);
    AppAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-window',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{ title }}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('closed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body confirm-modal-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div [innerHTML]=\"body\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"ms-btn sm secondary flat\"\n        (click)=\"ok()\">Ok</button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], AppAlertComponent);
    return AppAlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/components/confirm.ts ***!
  \**********************************************/
/*! exports provided: AppConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmComponent", function() { return AppConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var AppConfirmComponent = /** @class */ (function () {
    function AppConfirmComponent(activeModal) {
        this.activeModal = activeModal;
    }
    AppConfirmComponent.prototype.ngOnInit = function () {
    };
    AppConfirmComponent.prototype.ok = function () {
        this.activeModal.close();
    };
    AppConfirmComponent.prototype.cancel = function () {
        this.activeModal.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppConfirmComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppConfirmComponent.prototype, "prompt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppConfirmComponent.prototype, "cancelText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppConfirmComponent.prototype, "okText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppConfirmComponent.prototype, "okClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppConfirmComponent.prototype, "cancelClass", void 0);
    AppConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-window',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{ title }}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('closed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body confirm-modal-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div [innerHTML]=\"prompt\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"ms-btn margin-r15 sm flat\"\n        (click)=\"activeModal.dismiss()\"\n        [ngClass]=\"cancelClass\"\n        [innerHTML]=\"cancelText\"></button>\n\n      <button class=\"ms-btn sm flat\"\n        [ngClass]=\"okClass\"\n        (click)=\"ok()\"\n        [innerHTML]=\"okText\"></button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], AppConfirmComponent);
    return AppConfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: StatusTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusTextPipe", function() { return StatusTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusTextPipe = /** @class */ (function () {
    function StatusTextPipe() {
    }
    StatusTextPipe.prototype.transform = function (value) {
        var statusMap = {
            0: 'Delivery Details',
            1: 'Order Summary',
            2: 'Payment Details',
            3: 'Order Placed',
            4: 'Item(s) packed',
            5: 'Ready to be shipped',
            6: '',
            7: 'Shipped',
            8: 'Delivered'
        };
        return statusMap[value];
    };
    StatusTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'statusText' })
    ], StatusTextPipe);
    return StatusTextPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/confirmation.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/confirmation.ts ***!
  \*************************************************/
/*! exports provided: ConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_confirm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/confirm */ "./src/app/shared/components/confirm.ts");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alert */ "./src/app/shared/components/alert.ts");





var ConfirmationService = /** @class */ (function () {
    function ConfirmationService(modalService) {
        this.modalService = modalService;
    }
    ConfirmationService.prototype.confirm = function (title, prompt, cancelText, okText, okClass, cancelClass) {
        if (title === void 0) { title = 'Are you sure?'; }
        if (prompt === void 0) { prompt = 'This will do somethin bad'; }
        if (cancelText === void 0) { cancelText = 'Cancel'; }
        if (okText === void 0) { okText = 'Ok'; }
        if (okClass === void 0) { okClass = 'secondary'; }
        if (cancelClass === void 0) { cancelClass = 'default'; }
        var _okClass = 'secondary';
        var _cancelClass = 'default';
        this.confirmModal = this.modalService.open(_components_confirm__WEBPACK_IMPORTED_MODULE_3__["AppConfirmComponent"], {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'ms-modal-window'
        });
        this.confirmModal.componentInstance.title = title;
        this.confirmModal.componentInstance.prompt = prompt;
        this.confirmModal.componentInstance.cancelText = cancelText;
        this.confirmModal.componentInstance.okText = okText;
        this.confirmModal.componentInstance.okClass = okClass || _okClass;
        this.confirmModal.componentInstance.cancelClass = cancelClass || _cancelClass;
        return this.confirmModal.result;
    };
    ConfirmationService.prototype.dismissConfirm = function () {
        this.confirmModal.dismiss();
    };
    ConfirmationService.prototype.alert = function (title, body) {
        if (title === void 0) { title = 'Alert Alert!'; }
        if (body === void 0) { body = 'Be careful about this'; }
        var modalRef = this.modalService.open(_components_alert__WEBPACK_IMPORTED_MODULE_4__["AppAlertComponent"], {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'ms-modal-window'
        });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.body = body;
        return modalRef.result;
    };
    ConfirmationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ConfirmationService);
    return ConfirmationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/confirmation */ "./src/app/shared/services/confirmation.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/alert */ "./src/app/shared/components/alert.ts");
/* harmony import */ var _components_confirm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/confirm */ "./src/app/shared/components/confirm.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ],
            entryComponents: [],
            declarations: [
                _pipes__WEBPACK_IMPORTED_MODULE_6__["StatusTextPipe"],
                _components_alert__WEBPACK_IMPORTED_MODULE_7__["AppAlertComponent"],
                _components_confirm__WEBPACK_IMPORTED_MODULE_8__["AppConfirmComponent"]
            ],
            exports: [
                _pipes__WEBPACK_IMPORTED_MODULE_6__["StatusTextPipe"]
            ],
            providers: [
                _services_confirmation__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: CustomRouterStateSerializer, skipNil, getPrice, totalPrice, joinAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipNil", function() { return skipNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrice", function() { return getPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPrice", function() { return totalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinAttributes", function() { return joinAttributes; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var data = route.data;
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams, data: data };
    };
    return CustomRouterStateSerializer;
}());

var skipNil = function (obs$) {
    return obs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (v) { return v !== null && v !== undefined; }));
};
function getPrice(item) {
    var price;
    if (parseFloat(item.product.discounted_price) > 0)
        price = parseFloat(item.product.discounted_price);
    else
        price = parseFloat(item.product.price);
    return (item.quantity * price).toFixed(2);
}
function totalPrice(cartItems) {
    var price = 0;
    for (var _i = 0, _a = cartItems.filter(function (item) { return item.buy_now; }); _i < _a.length; _i++) {
        var item = _a[_i];
        if (parseFloat(item.product.discounted_price) > 0)
            price += parseFloat(item.product.discounted_price) * item.quantity;
        else
            price += parseFloat(item.product.price) * item.quantity;
    }
    return price.toFixed(2);
}
function joinAttributes(cartItem) {
    var attributes = [];
    var attribute_values = [];
    for (var attribute_name in cartItem.attributes) {
        attributes.push(attribute_name);
        attribute_values.push(cartItem.attributes[attribute_name].value);
    }
    return attributes.join('/') + ': ' + attribute_values.join('/');
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sourabh/projects/turing/e-commerce/ecommerce/static/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);