(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/customer/components/login/login.html":
/*!******************************************************!*\
  !*** ./src/app/customer/components/login/login.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-header class=\"col-12\"></app-header>\n    <div class=\"col-12 login\">\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"text-center\">Login</h2>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" formControlName=\"email\">\n          <div class=\"alert alert-danger\" *ngIf=\"userForm.get('email').invalid && (userForm.get('email').dirty || userForm.get('email').touched)\">\n            <div  *ngIf=\"userForm.get('email').errors.required\">\n              Email address is required\n            </div>\n            <div  *ngIf=\"userForm.get('email').errors.email\">\n              Email address is not a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n          <div class=\"alert alert-danger\" *ngIf=\"userForm.get('password').invalid && (userForm.get('password').dirty || userForm.get('password').touched)\">\n            <div  *ngIf=\"userForm.get('password').errors.required\">\n              Password is required\n            </div>\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input type=\"checkbox\" formControlName=\"remember\" class=\"form-check-input\" id=\"remember\">\n          <label class=\"form-check-label\" for=\"remember\">Remember me</label>\n        </div>\n        <div class=\"submit\">\n          <button type=\"submit\" class=\"btn btn-primary mt-3\" [disabled]=\"userForm.invalid\">Login</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/components/login/login.ts":
/*!****************************************************!*\
  !*** ./src/app/customer/components/login/login.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer */ "./src/app/customer/services/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(appSettings, builder, customerService, router, route, store) {
        this.appSettings = appSettings;
        this.builder = builder;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.store = store;
        this.userForm = this.builder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [false],
        });
        this.STATIC_URL = this.appSettings.STATIC_URL;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.appSettings.isLoggedIn) {
            this.navigate();
        }
    };
    LoginComponent.prototype.navigate = function () {
        if (this.appSettings.navigateToCheckOut) {
            this.router.navigate(['/checkout/'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/'], { relativeTo: this.route });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.customerService.login(this.userForm.value).subscribe(function (data) {
            _this.store.dispatch(new _core_actions_user__WEBPACK_IMPORTED_MODULE_6__["UpdateUser"](data));
            _this.appSettings.isLoggedIn = true;
            _this.navigate();
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/customer/components/login/login.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_customer__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/customer/components/profile/profile.html":
/*!**********************************************************!*\
  !*** ./src/app/customer/components/profile/profile.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-header class=\"col-12\"></app-header>\n    <div class=\"col-12 profile\">\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"text-center\">My Profile</h2>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"credit_card\">Credit Card</label>\n          <input id=\"credit_card\" type=\"text\" class=\"form-control\" placeholder=\"Credit Card\" formControlName=\"credit_card\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address_1\">Address 1</label>\n          <input id=\"address_1\" type=\"text\" class=\"form-control\" placeholder=\"Address 1\" formControlName=\"address_1\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address_2\">Address 2</label>\n          <input id=\"address_2\" type=\"text\" class=\"form-control\" placeholder=\"Address 2\" formControlName=\"address_2\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"city\">City</label>\n          <input id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"region\">Region</label>\n          <input id=\"region\" type=\"text\" class=\"form-control\" placeholder=\"Region\" formControlName=\"region\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"postal_code\">Postal Code</label>\n          <input id=\"postal_code\" type=\"text\" class=\"form-control\" placeholder=\"Postal Code\" formControlName=\"postal_code\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"country\">Country</label>\n          <input id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"day_phone\">Day Phone</label>\n          <input id=\"day_phone\" type=\"text\" class=\"form-control\" placeholder=\"Day Phone\" formControlName=\"day_phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eve_phone\">Evening Phone</label>\n          <input id=\"eve_phone\" type=\"text\" class=\"form-control\" placeholder=\"Evening Phone\" formControlName=\"eve_phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"mob_phone\">Mobile Phone</label>\n          <input id=\"mob_phone\" type=\"text\" class=\"form-control\" placeholder=\"Mobile Phone\" formControlName=\"mob_phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"shipping_region\">Shipping Region</label>\n          <select class=\"form-control\" formControlName=\"shipping_region\">\n            <option [value]=\"shipping_region.id\" *ngFor=\"let shipping_region of shipping_regions\">\n              {{shipping_region.shipping_region}}</option>\n          </select>\n        </div>\n        <div class=\"submit\">\n          <button type=\"submit\" class=\"btn btn-primary mt-3\" [disabled]=\"profileForm.invalid\">Save Profile</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/components/profile/profile.ts":
/*!********************************************************!*\
  !*** ./src/app/customer/components/profile/profile.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer */ "./src/app/customer/services/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(appSettings, builder, customerService, router, route, toastr, store) {
        this.appSettings = appSettings;
        this.builder = builder;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.store = store;
        this.profileForm = this.builder.group({
            email: [{
                    value: '',
                    disabled: true
                }],
            credit_card: [''],
            address_1: [''],
            address_2: [''],
            city: [''],
            region: [''],
            postal_code: [''],
            country: [''],
            day_phone: [''],
            eve_phone: [''],
            mob_phone: [''],
            shipping_region: [null]
        });
        this.STATIC_URL = this.appSettings.STATIC_URL;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.appSettings.isLoggedIn)
            this.router.navigate(['/customer/login'], { relativeTo: this.route });
        this.store.select(_core_reducers__WEBPACK_IMPORTED_MODULE_8__["selectorUser"]).subscribe(function (cust) {
            if (cust) {
                _this.customer = cust;
                var values = {
                    email: cust.user.email,
                    credit_card: cust.credit_card,
                    address_1: cust.address_1,
                    address_2: cust.address_2,
                    city: cust.city,
                    region: cust.region,
                    postal_code: cust.postal_code,
                    country: cust.country,
                    day_phone: cust.day_phone,
                    eve_phone: cust.eve_phone,
                    mob_phone: cust.mob_phone,
                    shipping_region: cust.shipping_region ? cust.shipping_region : 1
                };
                _this.profileForm.setValue(values);
            }
        });
        this.customerService.getShippingRegions().subscribe(function (regions) {
            _this.shipping_regions = regions;
            _this.profileForm.get('shipping_region').setValue(regions[0].id);
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.customerService.saveProfile(this.profileForm.value).subscribe(function (cust) {
            _this.store.dispatch(new _core_actions_user__WEBPACK_IMPORTED_MODULE_7__["UpdateUser"](cust));
            _this.toastr.success('User profile saved successfully', 'Saved');
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.html */ "./src/app/customer/components/profile/profile.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_customer__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/customer/components/register/register.html":
/*!************************************************************!*\
  !*** ./src/app/customer/components/register/register.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-header class=\"col-12\"></app-header>\n    <div class=\"col-12 login\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"text-center\">Register</h2>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" formControlName=\"email\">\n          <div class=\"alert alert-danger\" *ngIf=\"registerForm.get('email').invalid && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n            <div  *ngIf=\"registerForm.get('email').errors.required\">\n              Email address is required\n            </div>\n            <div  *ngIf=\"registerForm.get('email').errors.email\">\n              Email address is not a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n          <div class=\"alert alert-danger\" *ngIf=\"registerForm.get('password').invalid && (registerForm.get('password').dirty || registerForm.get('password').touched)\">\n            <div  *ngIf=\"registerForm.get('password').errors.required\">\n              Password is required\n            </div>\n            <div  *ngIf=\"registerForm.get('password').errors.minlength\">\n              Password must be atleast 8 characters in length\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"confirm_password\">Confirm Password</label>\n          <input id=\"confirm_password\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\">\n          <div  *ngIf=\"(registerForm.get('confirm_password').dirty || registerForm.get('confirm_password').touched) && registerForm.errors?.mismatch\" class=\"alert alert-danger\">\n            Password and Confirm Password does not match\n          </div>\n        </div>\n        <div class=\"submit\">\n          <button type=\"submit\" class=\"btn btn-primary mt-3\" [disabled]=\"registerForm.invalid\">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/components/register/register.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer/components/register/register.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer */ "./src/app/customer/services/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var samePasswordValidator = function (control) {
    var password = control.get('password');
    var confirm_password = control.get('confirm_password');
    return password && confirm_password && password.value !== confirm_password.value ? { 'mismatch': true } : null;
};
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appSettings, builder, customerService, router, route, toastr) {
        this.appSettings = appSettings;
        this.builder = builder;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.registerForm = this.builder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            confirm_password: ['']
        }, { validators: samePasswordValidator });
        this.STATIC_URL = this.appSettings.STATIC_URL;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.appSettings.isLoggedIn)
            this.router.navigate(['/'], { relativeTo: this.route });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.customerService.register(this.registerForm.value).subscribe(function (res) {
            _this.toastr.success('You are registered successfully with email address ' + _this.registerForm.get('email').value, 'Registeration is successful');
            _this.router.navigate(['../login/'], { relativeTo: _this.route });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.html */ "./src/app/customer/components/register/register.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_customer__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _customer_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.router */ "./src/app/customer/customer.router.ts");
/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login */ "./src/app/customer/components/login/login.ts");
/* harmony import */ var _components_register_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register */ "./src/app/customer/components/register/register.ts");
/* harmony import */ var _services_customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/customer */ "./src/app/customer/services/customer.ts");
/* harmony import */ var _components_profile_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile */ "./src/app/customer/components/profile/profile.ts");












var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login_login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_register_register__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_profile_profile__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ],
            exports: [],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _customer_router__WEBPACK_IMPORTED_MODULE_6__["CustomerRoutingModule"]
            ],
            providers: [
                _services_customer__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]
            ],
            entryComponents: []
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.router.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.router.ts ***!
  \*********************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login */ "./src/app/customer/components/login/login.ts");
/* harmony import */ var _components_register_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register */ "./src/app/customer/components/register/register.ts");
/* harmony import */ var _components_profile_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile */ "./src/app/customer/components/profile/profile.ts");






var routes = [
    {
        path: 'login',
        component: _components_login_login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'profile',
        component: _components_profile_profile__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/services/customer.ts":
/*!***********************************************!*\
  !*** ./src/app/customer/services/customer.ts ***!
  \***********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");




var CustomerService = /** @class */ (function () {
    function CustomerService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
    }
    CustomerService.prototype.login = function (data) {
        var url = this.appSettings.API_PREFIX + "customer/login";
        return this.http.post(url, data);
    };
    CustomerService.prototype.register = function (data) {
        var url = this.appSettings.API_PREFIX + "customer/register";
        return this.http.post(url, data);
    };
    CustomerService.prototype.saveProfile = function (data) {
        var url = this.appSettings.API_PREFIX + "customer/register";
        return this.http.put(url, data);
    };
    CustomerService.prototype.getShippingRegions = function () {
        var url = this.appSettings.API_PREFIX + "shipping_regions";
        return this.http.get(url);
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ })

}]);