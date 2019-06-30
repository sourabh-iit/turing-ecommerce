(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/product/actions/index.ts":
/*!******************************************!*\
  !*** ./src/app/product/actions/index.ts ***!
  \******************************************/
/*! exports provided: ProductActionTypes, LoadDepartments, AddDepartments, LoadCartItems, AddCartItems, AddCartItem, UpdateCartItem, RemoveCartItem, EmptyCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductActionTypes", function() { return ProductActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDepartments", function() { return LoadDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepartments", function() { return AddDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCartItems", function() { return LoadCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartItems", function() { return AddCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartItem", function() { return AddCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCartItem", function() { return UpdateCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCartItem", function() { return RemoveCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCart", function() { return EmptyCart; });
var ProductActionTypes;
(function (ProductActionTypes) {
    ProductActionTypes["loadDepartments"] = "[Department] Load Departments";
    ProductActionTypes["addDepartments"] = "[Department] Add Departments";
    ProductActionTypes["loadCartItems"] = "[Cart] Load Cart Items";
    ProductActionTypes["addCartItem"] = "[Cart] Add Item To Cart";
    ProductActionTypes["updateCartItem"] = "[Cart] Update Item To Cart";
    ProductActionTypes["addCartItems"] = "[Cart] Add Items To Cart";
    ProductActionTypes["removeCartItem"] = "[Cart] Remove Cart Item";
    ProductActionTypes["emptyCart"] = "[Cart] Empty Cart";
})(ProductActionTypes || (ProductActionTypes = {}));
var LoadDepartments = /** @class */ (function () {
    function LoadDepartments(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.loadDepartments;
    }
    return LoadDepartments;
}());

var AddDepartments = /** @class */ (function () {
    function AddDepartments(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.addDepartments;
    }
    return AddDepartments;
}());

var LoadCartItems = /** @class */ (function () {
    function LoadCartItems(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.loadCartItems;
    }
    return LoadCartItems;
}());

var AddCartItems = /** @class */ (function () {
    function AddCartItems(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.addCartItems;
    }
    return AddCartItems;
}());

var AddCartItem = /** @class */ (function () {
    function AddCartItem(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.addCartItem;
    }
    return AddCartItem;
}());

var UpdateCartItem = /** @class */ (function () {
    function UpdateCartItem(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.updateCartItem;
    }
    return UpdateCartItem;
}());

var RemoveCartItem = /** @class */ (function () {
    function RemoveCartItem(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.removeCartItem;
    }
    return RemoveCartItem;
}());

var EmptyCart = /** @class */ (function () {
    function EmptyCart(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.emptyCart;
    }
    return EmptyCart;
}());



/***/ }),

/***/ "./src/app/product/components/cart/cart.html":
/*!***************************************************!*\
  !*** ./src/app/product/components/cart/cart.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container cart\">\n  <div class=\"row\">\n    <app-header class=\"col-12\"></app-header>\n    <div *ngIf=\"user\" class=\"col-12\">\n      {{user.email}} <hr>\n    </div>\n    <h4 class=\"col-12 mb-2 mt-5\">Your Shopping Cart</h4>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Item</th>\n          <th scope=\"col\">Options</th>\n          <th scope=\"col\">Quantity</th>\n          <th scope=\"col\">Amount</th>\n          <th scope=\"col\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngIf=\"!getItems(true).length; else checkoutItems\">\n          <th>No item to display</th>\n        </tr>\n        <ng-template #checkoutItems>\n          <tr *ngFor=\"let item of getItems(true)\">\n            <th scope=\"row\">{{item.product.name}}</th>\n            <td>{{joinAttributes(item)}}</td>\n            <td>\n              <input type=\"number\" [(ngModel)]=\"item.quantity\" \n                style=\"width: 80px\" name=\"quantity\">\n            </td>\n            <td>${{getPrice(item)}}</td>\n            <td>\n              <div (click)=\"saveForLater(item)\" class=\"cursor-pointer\"><u>Save for later</u></div>\n              <div (click)=\"removeItem(item)\" class=\"mt-2 cursor-pointer\"><u>Remove</u></div>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td>\n              <button class=\"btn btn-light btn-sm\" (click)=\"updateCart()\">Update</button>\n            </td>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\" style=\"text-align: right\">\n              <div class=\"mt-2\">Subtotal:</div>\n            </td>\n            <td style=\"text-align: right\">\n              <div class=\"mt-2\"><b>${{totalPrice()}} USD</b></div>\n            </td>\n            <td></td>\n          </tr>\n          <tr>\n            <td colspan=\"5\" style=\"text-align: right\">\n              <a class=\"btn btn-primary mt-3 mr-5\" [routerLink]=\"['/checkout/']\">Proceed to checkout</a>\n            </td>\n          </tr>\n        </ng-template>\n      </tbody>\n    </table>\n    <hr>\n    <h4 class=\"mt-5 mb-2\">Saved products to buy later</h4>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Item</th>\n          <th scope=\"col\">Options</th>\n          <th scope=\"col\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngIf=\"!getItems(false).length\">\n          <th>No item to display</th>\n        </tr>\n        <tr *ngFor=\"let item of getItems(false)\">\n          <th scope=\"row\">{{item.product.name}}</th>\n          <td>{{joinAttributes(item)}}</td>\n          <td>\n            <div (click)=\"moveToCart(item)\" class=\"cursor-pointer\"><u>Move to cart</u></div>\n            <div (click)=\"removeItem(item)\" class=\"mt-2 cursor-pointer\"><u>Remove</u></div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"btn btn-secondary\" [routerLink]=\"'/'\">Continue Shopping</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/cart/cart.ts":
/*!*************************************************!*\
  !*** ./src/app/product/components/cart/cart.ts ***!
  \*************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers */ "./src/app/product/reducers/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./src/app/product/actions/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");









var CartComponent = /** @class */ (function () {
    function CartComponent(productService, appSettings, store, toastr) {
        var _this = this;
        this.productService = productService;
        this.appSettings = appSettings;
        this.store = store;
        this.toastr = toastr;
        this.STATIC_URL = this.appSettings.STATIC_URL;
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_5__["selectAllCartItems"]).subscribe(function (items) {
            _this.cartItems = items;
        });
        this.getPrice = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getPrice"];
        this.joinAttributes = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_8__["joinAttributes"];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["LoadCartItems"]({}));
    };
    CartComponent.prototype.saveForLater = function (item) {
        var _this = this;
        this.productService.updateCartItem(item, {
            buy_now: false
        }).subscribe(function (it) {
            _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["UpdateCartItem"]({
                id: it.id,
                changes: it
            }));
        });
    };
    CartComponent.prototype.removeItem = function (item) {
        var _this = this;
        this.productService.removeItem(item).subscribe(function () {
            _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["RemoveCartItem"]({ id: item.id }));
            _this.toastr.success('Item successfully removed from cart', 'Removed');
        });
    };
    CartComponent.prototype.updateCart = function () {
        var _this = this;
        this.productService.updateCart(this.cartItems).subscribe(function (items) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["UpdateCartItem"]({
                    id: item.id,
                    changes: item
                }));
            }
            _this.toastr.success('Shopping cart updated successfully', 'Saved');
        });
    };
    CartComponent.prototype.moveToCart = function (item) {
        var _this = this;
        this.productService.updateCartItem(item, {
            buy_now: true
        }).subscribe(function (it) {
            _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["UpdateCartItem"]({
                id: it.id,
                changes: it
            }));
        });
    };
    CartComponent.prototype.proceedToCheckout = function () {
    };
    CartComponent.prototype.totalPrice = function () {
        return Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_8__["totalPrice"])(this.cartItems);
    };
    CartComponent.prototype.getItems = function (value) {
        return this.cartItems.filter(function (item) { return item.buy_now == value; });
    };
    CartComponent.prototype.createOrder = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.html */ "./src/app/product/components/cart/cart.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/product/components/checkout/checkout.html":
/*!***********************************************************!*\
  !*** ./src/app/product/components/checkout/checkout.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loadingbar>\n  <div>\n    <ul class=\"checkout-progress-bar\">\n      <li [ngClass]=\"{'is-active': order.status>=0, 'is-last': order.status==0}\">Delivery</li>\n      <li [ngClass]=\"{'is-active': order.status>=1, 'is-last': order.status==1}\">Confirmation</li>\n      <li [ngClass]=\"{'is-active': order.status>=2, 'is-last': order.status==2}\">Payment</li>\n      <li [ngClass]=\"{'is-active': order.status>=3, 'is-last': order.status==3}\">Finish</li>\n    </ul>\n  </div>\n</ng-template>\n\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"order\">\n    <app-header class=\"col-12\"></app-header>\n    <div class=\"col-12 mb-3\">\n      <h2 class=\"col-12 mb-3\">Checkout</h2>\n      <ng-container *ngTemplateOutlet=\"loadingbar\"></ng-container>\n    </div>\n    <ng-container *ngIf=\"order.status===0\">\n      <form class=\"col-12\" [formGroup]=\"deliveryForm\">\n        <div class=\"row\">\n          <div class=\"form-group col-6\">\n            <label for=\"first_name\">First Name*</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"first_name\" id=\"first_name\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"last_name\">Last Name*</label>\n            <input type=\"text\" formControlName=\"last_name\" class=\"form-control\" id=\"last_name\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"address_1\">Address 1*</label>\n            <input type=\"text\" formControlName=\"address_1\" class=\"form-control\" id=\"address_1\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"address_2\">Address 2*</label>\n            <input type=\"text\" formControlName=\"address_2\" class=\"form-control\" id=\"address_2\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"region\">Region*</label>\n            <input type=\"text\" formControlName=\"region\" class=\"form-control\" id=\"region\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"city\">City*</label>\n            <input type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"city\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"zip_code\">Zip Code*</label>\n            <input type=\"text\" formControlName=\"postal_code\" class=\"form-control\" id=\"zip_code\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"country\">Country*</label>\n            <input type=\"text\" formControlName=\"country\" class=\"form-control\" id=\"country\">\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"shipping_region\">Shipping Region*</label>\n            <select class=\"form-control\" formControlName=\"shipping_region\" id=\"country\">\n              <option [value]=\"shipping_region.id\" *ngFor=\"let shipping_region of shipping_regions\">\n                {{shipping_region.shipping_region}}</option>\n            </select>\n          </div>\n          <hr class=\"col-12\">\n          <h5 class=\"col-12\">Delivery options</h5>\n          <div class=\"custom-control custom-radio col-6 mt-2\" *ngFor=\"let shipping of _shippings\">\n            <input formControlName=\"shipping\" [value]=\"shipping.id\" type=\"radio\"\n              class=\"custom-control-input\" id=\"{{shipping.shipping_type}}\" name=\"shipping\">\n            <label class=\"custom-control-label\" for=\"{{shipping.shipping_type}}\">{{shipping.shipping_type}}</label>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n    <ng-container *ngIf=\"order.status===1\">\n      <h4 class=\"col-9\">Order summary</h4>\n      <h4 class=\"col-3\">Delivery</h4>\n      <div class=\"col-9\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Item</th>\n              <th>Qty</th>\n              <th>Price</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of cartItems\">\n              <td>{{item.product.name}}</td>\n              <td>{{item.quantity}}</td>\n              <th>${{getPrice(item)}}</th>\n            </tr>\n          <tbody>\n        </table>\n      </div>\n      <div class=\"col-3\" *ngIf=\"customer\">\n        <h5 class=\"mb-3\">Address</h5>\n        {{deliveryForm.get('address_1').value + ' ' + deliveryForm.get('address_2').value}}\n        <h5 class=\"mt-3 mb-3\">Delivery options</h5>\n        {{getShipping().shipping_type}}\n      </div>\n      <hr class=\"col-12\">\n      <table class=\"table col-9\">\n        <thead class=\"thead-light\">\n          <tr>\n            <td>Subtotal</td>\n            <td>Shipping</td>\n            <td>Grandtotal</td>\n          </tr>\n        </thead>\n        <tbody>\n          <th>${{totalPrice()}}</th>\n          <th>${{getShipping().shipping_cost}}</th>\n          <th>${{grandTotal()}}</th>\n        </tbody>\n      </table>\n    </ng-container>\n    <ng-container *ngIf=\"order.status===3\">\n      <div class=\"col-12 text-center mb-3\">\n        <i class=\"fa fa-check-circle text-success mb-3\" style=\"font-size: 4rem;\"></i>\n        <h2>Success!</h2>\n        Your items will be shipped shortly,<br>\n        you will get email with details.\n      </div>\n    </ng-container>\n    <div class=\"col-12 mt-3 bg-light p-3 d-flex\" \n      [ngClass]=\"{'justify-content-between': order.status!==3, 'justify-content-center': order.status===3}\">\n      <button class=\"btn btn-danger\" *ngIf=\"order.status!==3\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-success\" *ngIf=\"order.status===0\" \n        [disabled]=\"!formValid()\" (click)=\"next()\">Next Step</button>\n      <button class=\"btn btn-success\" *ngIf=\"order.status===1\" \n        [disabled]=\"!formValid()\" (click)=\"pay()\">Pay</button>\n      <a class=\"btn btn-danger\" *ngIf=\"order.status===3\" \n        [routerLink]=\"['/']\">Back to shop</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/checkout/checkout.ts":
/*!*********************************************************!*\
  !*** ./src/app/product/components/checkout/checkout.ts ***!
  \*********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers */ "./src/app/product/reducers/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./src/app/product/actions/index.ts");
/* harmony import */ var _core_actions_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/actions/user */ "./src/app/core/actions/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_customer_services_customer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/customer/services/customer */ "./src/app/customer/services/customer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");















var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(productService, customerService, appSettings, store, router, route, builder, stripeCheckoutLoader) {
        var _this = this;
        this.productService = productService;
        this.customerService = customerService;
        this.appSettings = appSettings;
        this.store = store;
        this.router = router;
        this.route = route;
        this.builder = builder;
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.deliveryForm = this.builder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            postal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            address_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            address_2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            shipping_region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            shipping: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]]
        });
        this.order = {
            status: 0,
            shipping: 1
        };
        this.paymentForm = this.builder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            credit_card: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('^[0-9]{16}$')]],
            cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('^[0-9]{3}$')]],
            expiry_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, function (control) {
                        var today = new Date(Date.now());
                        var date = control.value;
                        if ((today.getFullYear() < date.year) || (today.getFullYear() === date.year && today.getMonth() + 1 < date.month) ||
                            (today.getFullYear() === date.year && today.getMonth() + 1 === date.month && today.getDate() <= date.day))
                            return null;
                        return { invalid: true };
                    }]
            ]
        });
        this.observers = this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_6__["selectAllCartItems"]).subscribe(function (items) {
            _this.cartItems = items;
            if (!_this.cartItems || !_this.cartItems.length && _this.order.status != 3) {
                _this.router.navigate(['/cart/'], { relativeTo: _this.route });
            }
        });
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_7__["LoadCartItems"]({}));
        if (!this.appSettings.isLoggedIn) {
            this.appSettings.navigateToCheckOut = true;
            this.router.navigate(['/customer/login/'], { relativeTo: this.route });
        }
        this.getPrice = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_13__["getPrice"];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(this.productService.loadShippings(), this.customerService.getShippingRegions()).subscribe(function (data) {
            if (data) {
                _this.shippings = data[0];
                _this.shipping_regions = data[1];
                _this.observers.add(_this.store.select(_core_reducers__WEBPACK_IMPORTED_MODULE_5__["selectorUser"]).subscribe(function (cust) {
                    if (cust) {
                        _this.customer = cust;
                        var values = {
                            first_name: _this.customer.user.first_name,
                            last_name: _this.customer.user.last_name,
                            city: _this.customer.city,
                            postal_code: _this.customer.postal_code,
                            country: _this.customer.country,
                            address_1: _this.customer.address_1,
                            address_2: _this.customer.address_2,
                            region: _this.customer.region,
                            shipping: _this.order.shipping ? _this.order.shipping : _this.shippings[0].id,
                            shipping_region: _this.customer.shipping_region ? _this.customer.shipping_region : _this.shipping_regions[0].id
                        };
                        _this.deliveryForm.setValue(values);
                        _this.paymentForm.get('credit_card').setValue(_this.customer.credit_card);
                    }
                }));
            }
        }));
        this.deliveryForm.get('shipping').valueChanges.subscribe(function (value) {
            _this.order.shipping = value;
        });
        this.deliveryForm.get('first_name').valueChanges.subscribe(function (value) {
            _this.customer.user.first_name = value;
        });
        this.deliveryForm.get('last_name').valueChanges.subscribe(function (value) {
            _this.customer.user.last_name = value;
        });
        this.deliveryForm.get('city').valueChanges.subscribe(function (value) {
            _this.customer.city = value;
        });
        this.deliveryForm.get('postal_code').valueChanges.subscribe(function (value) {
            _this.customer.postal_code = value;
        });
        this.deliveryForm.get('country').valueChanges.subscribe(function (value) {
            _this.customer.country = value;
        });
        this.deliveryForm.get('region').valueChanges.subscribe(function (value) {
            _this.customer.region = value;
        });
        this.deliveryForm.get('address_1').valueChanges.subscribe(function (value) {
            _this.customer.address_1 = value;
        });
        this.deliveryForm.get('address_2').valueChanges.subscribe(function (value) {
            _this.customer.address_2 = value;
        });
        this.deliveryForm.get('shipping_region').valueChanges.subscribe(function (value) {
            _this.customer.shipping_region = value;
            if (value) {
                _this._shippings = _this.shippings.filter(function (s) { return s.shipping_region.id == value; });
                _this.deliveryForm.get('shipping').setValue(_this._shippings[0].id);
            }
        });
        this.paymentForm.get('credit_card').valueChanges.subscribe(function (value) {
            _this.customer.credit_card = value;
        });
    };
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stripeCheckoutLoader.createHandler({
            key: this.appSettings.STRIPE_API_KEY
        }).then(function (handler) {
            _this.stripeCheckoutHandler = handler;
        });
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        this.observers.unsubscribe();
    };
    CheckoutComponent.prototype.pay = function () {
        var _this = this;
        this.order.status = 2;
        this.stripeCheckoutHandler.open({
            amount: parseFloat(this.grandTotal()) * 100,
            email: this.customer.user.email,
            currency: 'USD',
            name: this.customer.user.first_name + ' ' + this.customer.user.last_name
        }).then(function (token) {
            _this.observers.add(_this.productService.createOrder({ token: token.id, order: _this.order }).subscribe(function (data) {
                _this.order = data;
                _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_7__["EmptyCart"]({}));
            }, function (error) {
                _this.order.status = 1;
                throw (error);
            }));
        }, function (error) {
            if (error != 'stripe_closed') {
                console.log(error);
            }
            _this.order.status = 1;
        });
    };
    CheckoutComponent.prototype.next = function () {
        var _this = this;
        this.observers.add(this.customerService.saveProfile(this.customer).subscribe(function (data) {
            _this.store.dispatch(new _core_actions_user__WEBPACK_IMPORTED_MODULE_8__["UpdateUser"](data));
            _this.order.status = 1;
        }));
    };
    CheckoutComponent.prototype.back = function () {
        if (this.order.status === 0)
            this.router.navigate(['/cart/'], { relativeTo: this.route });
        else
            this.order.status -= 1;
    };
    CheckoutComponent.prototype.getItems = function (value) {
        return this.cartItems.filter(function (item) { return item.buy_now == value; });
    };
    CheckoutComponent.prototype.totalPrice = function () {
        return Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_13__["totalPrice"])(this.cartItems);
    };
    CheckoutComponent.prototype.grandTotal = function () {
        var grandTotal = parseFloat(this.totalPrice()) + parseFloat(this.getShipping().shipping_cost);
        return grandTotal.toFixed(2);
    };
    CheckoutComponent.prototype.getShipping = function () {
        var _this = this;
        return this.shippings.find(function (shipping) { return _this.order.shipping == shipping.id; });
    };
    CheckoutComponent.prototype.formValid = function () {
        if (this.order.status === 0)
            return this.deliveryForm.valid;
        else if (this.order.status === 1)
            return true;
        else if (this.order.status === 2)
            return this.paymentForm.valid;
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.html */ "./src/app/product/components/checkout/checkout.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_customer_services_customer__WEBPACK_IMPORTED_MODULE_10__["CustomerService"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_14__["StripeCheckoutLoader"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/product/components/orderdetail/order.html":
/*!***********************************************************!*\
  !*** ./src/app/product/components/orderdetail/order.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"order\">\n    <app-header class=\"col-12\"></app-header>\n    <h4 class=\"col-12 mb-3 mt-3\">Order Details</h4>\n    <table class=\"col-12 table\">\n      <thead>\n        <tr>\n          <th>Product name</th>\n          <th>Options</th>\n          <th>Quantity</th>\n          <th>Amount</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let order_detail of order.order_details\">\n          <td>{{order_detail.product.name}}</td>\n          <td>{{joinAttributes(order_detail)}}</td>\n          <td>{{order_detail.quantity}}</td>\n          <td>${{(order_detail.unit_cost*order_detail.quantity).toFixed(2)}}</td>\n          <td>\n            <a [routerLink]=\"['/',order_detail.product.name.split(' ').join('-'),'write-review',order_detail.id]\">\n              Rate and Review</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <hr class=\"col-12\">\n    <div class=\"col-4\">Status: <b>{{order.status | statusText}}</b></div>\n    <div class=\"col-4\">Shipped on: <b>{{shippedOn(order.shipped_on)}}</b></div>\n    <div class=\"col-4\">Total amount: <b>${{order.total_amount}}</b></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/orderdetail/order.ts":
/*!*********************************************************!*\
  !*** ./src/app/product/components/orderdetail/order.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(productService, appSettings, router, route, date) {
        var _this = this;
        this.productService = productService;
        this.appSettings = appSettings;
        this.router = router;
        this.route = route;
        this.date = date;
        if (!this.appSettings.isLoggedIn)
            this.router.navigate(['/customer/login/'], { relativeTo: this.route });
        this.orderId = this.route.snapshot.params.orderId;
        this.productService.loadOrder(this.orderId).subscribe(function (order) {
            _this.order = order;
        });
        this.joinAttributes = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_5__["joinAttributes"];
    }
    OrderDetailsComponent.prototype.encodeURI = function (str) {
        return encodeURI(str);
    };
    OrderDetailsComponent.prototype.shippedOn = function (shipped_on) {
        if (!shipped_on)
            return 'Not shipped yet';
        return this.date.transform(shipped_on, 'medium');
    };
    OrderDetailsComponent.prototype.rateAndReview = function (product) {
        return '';
    };
    OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order.html */ "./src/app/product/components/orderdetail/order.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/components/orders/orders.html":
/*!*******************************************************!*\
  !*** ./src/app/product/components/orders/orders.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-header class=\"col-12\"></app-header>\n    <div class=\"col-12\">\n      <h3 class=\"text-center mb-3\">My Orders</h3>\n      <table class=\"table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>Order id</th>\n            <th>Total amount</th>\n            <th>Created on</th>\n            <th>Shipped on</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of orders\">\n            <td>\n              <a [routerLink]=\"[order.id]\">{{order.id}}</a>\n            </td>\n            <th>${{order.total_amount}}</th>\n            <td>{{order.created_on | date:'medium'}}</td>\n            <td>{{shippedOn(order.shipped_on)}}</td>\n            <td>{{order.status | statusText}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/orders/orders.ts":
/*!*****************************************************!*\
  !*** ./src/app/product/components/orders/orders.ts ***!
  \*****************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(productService, appSettings, router, route, date) {
        var _this = this;
        this.productService = productService;
        this.appSettings = appSettings;
        this.router = router;
        this.route = route;
        this.date = date;
        if (!this.appSettings.isLoggedIn)
            this.router.navigate(['/customer/login/'], { relativeTo: this.route });
        this.productService.loadOrders().subscribe(function (orders) {
            _this.orders = orders;
        });
    }
    OrdersComponent.prototype.shippedOn = function (shipped_on) {
        if (!shipped_on)
            return 'Not shipped yet';
        return this.date.transform(shipped_on, 'medium');
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.html */ "./src/app/product/components/orders/orders.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product/components/product/product.html":
/*!*********************************************************!*\
  !*** ./src/app/product/components/product/product.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-short\">\n  <div class=\"heading\">\n    <span class=\"brick\"></span>\n    <a [routerLink]=\"['/products',product.name.split(' ').join('-'),product.id]\" class=\"text\">{{product.name}}</a>\n  </div>\n  <div class=\"content mt-2\">\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <div>\n          {{product.description | slice:0:150}}<ng-container *ngIf=\"product.description.length>150\">...</ng-container>\n        </div>\n      </div>\n      <div class=\"col-5\">\n        <img [src]=\"STATIC_URL+'images/product_images/'+product.thumbnail\">\n      </div>\n      <div class=\"col-5 price\">Price: \n        <ng-container *ngIf=\"toFloat(product.discounted_price)>0; else originalPrice\">\n          <del>${{product.price}}</del>&nbsp; <b>${{product.discounted_price}}</b>\n        </ng-container>\n        <ng-template #originalPrice><b>${{product.price}}</b></ng-template>\n      </div>\n      <div class=\"col-7 d-flex attributes\">\n        <ng-container *ngFor=\"let attribute_name of getKeys(product.attributes); let i = index\">\n          <div class=\"d-flex align-items-center\" [class.ml-2]=\"i!=0\">\n            {{attribute_name}}:\n            <select class=\"ml-1\" [(ngModel)]=\"attributes[attribute_name]\">\n              <option [ngValue]=\"attribute\" *ngFor=\"let attribute of product.attributes[attribute_name]\">\n                {{attribute.value}}</option>\n            </select>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"mt-2 add-to-cart\">\n        <button class=\"btn btn-primary\" [disabled]=\"!product.attributes['Color'] || !product.attributes['Size']\" \n          (click)=\"addToCart(true)\">Add to Cart</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/product/product.scss":
/*!*********************************************************!*\
  !*** ./src/app/product/components/product/product.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-short {\n  height: 300px;\n  position: relative; }\n  .product-short .heading {\n    height: 20px; }\n  .product-short .attributes {\n    position: absolute;\n    bottom: 70px; }\n  .product-short .add-to-cart {\n    position: absolute;\n    bottom: 5px;\n    left: 0px; }\n  .product-short .price {\n    position: absolute;\n    bottom: 70px;\n    right: 0px; }\n"

/***/ }),

/***/ "./src/app/product/components/product/product.ts":
/*!*******************************************************!*\
  !*** ./src/app/product/components/product/product.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/app/product/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers */ "./src/app/product/reducers/index.ts");







var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, appSettings, store) {
        this.productService = productService;
        this.appSettings = appSettings;
        this.store = store;
        this.attributes = {};
        this.STATIC_URL = this.appSettings.STATIC_URL;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var attribute in this.product.attributes) {
            this.attributes[attribute] = this.product.attributes[attribute][0];
        }
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_6__["isCartLoaded"]).subscribe(function (value) {
            _this.isCartLoaded = value;
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
    };
    ProductComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    ProductComponent.prototype.toFloat = function (value) {
        return parseFloat(value);
    };
    ProductComponent.prototype.addToCart = function (buy_now) {
        var _this = this;
        var item = {
            attributes: JSON.stringify(this.attributes),
            product: this.product,
            buy_now: buy_now
        };
        this.productService.addToCart(item).subscribe(function (item) {
            if (_this.isCartLoaded) {
                if (item.quantity > 1) {
                    _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_5__["UpdateCartItem"]({
                        id: item.id,
                        changes: {
                            quantity: item.quantity
                        }
                    }));
                }
                else {
                    _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_5__["AddCartItem"](item));
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProductComponent.prototype, "isCartLoaded", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.html */ "./src/app/product/components/product/product.html"),
            styles: [__webpack_require__(/*! ./product.scss */ "./src/app/product/components/product/product.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/components/productdetails/productdetails.html":
/*!***********************************************************************!*\
  !*** ./src/app/product/components/productdetails/productdetails.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <div class=\"product\" *ngIf=\"product\">\n    <div class=\"heading\">\n      <div class=\"brick\"></div>\n      <span class=\"text\">{{product.name}}</span>\n    </div>\n    <div class=\"content mt-2\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <img [src]=\"STATIC_URL+'images/product_images/'+product.image\">\n          <img [src]=\"STATIC_URL+'images/product_images/'+product.image_2\" class=\"ml-2\">\n        </div>\n        <div class=\"col-12 description\">\n          <div><i>{{product.description}}</i></div>\n        </div>\n        <div class=\"col-12\">\n          <div class=\"mt-2\">Price: <b>\n            <ng-container *ngIf=\"product.discounted_price>0; else originalPrice\">\n              <del>${{product.price}}</del> ${{product.discounted_price}}\n            </ng-container>\n            <ng-template #originalPrice>${{product.price}}</ng-template></b>\n          </div>\n        </div>\n        <div class=\"col-12\">\n          <ng-container *ngFor=\"let attribute_name of getKeys(product.attributes)\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n              </div>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"col-12\">\n          <button class=\"mt-2\" (click)=\"addToCart()\">Add to cart</button>\n        </div>\n        <div class=\"col-12 mt-3\">\n          <button class=\"btn btn-sm btn-info\" *ngIf=\"!reviews\" (click)=\"loadReviews()\">Load reviews</button>\n          <app-reviews *ngIf=\"reviews\" [reviews]=\"reviews\"></app-reviews>\n        </div>\n        <div class=\"col-12 mt-3\">\n          <a [routerLink]=\"'/'\"><u>Continue Shopping</u></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/productdetails/productdetails.ts":
/*!*********************************************************************!*\
  !*** ./src/app/product/components/productdetails/productdetails.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");





var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, router, route, appSettings) {
        var _this = this;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.appSettings = appSettings;
        this.attributes = {};
        this.STATIC_URL = this.appSettings.STATIC_URL;
        var productId = this.router.snapshot.params.productId;
        this.productService.loadProduct(productId).subscribe(function (product) {
            _this.product = product;
        });
    }
    ProductDetailsComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    ProductDetailsComponent.prototype.addToCart = function () {
        var _this = this;
        var item = {
            attributes: JSON.stringify(this.attributes),
            product: this.product,
            buy_now: true
        };
        this.productService.addToCart(item).subscribe(function (item) {
            _this.route.navigate(['/cart/'], { relativeTo: _this.router });
        });
    };
    ProductDetailsComponent.prototype.loadReviews = function () {
        var _this = this;
        this.productService.loadReviews(this.product.id).subscribe(function (reviews) {
            _this.reviews = reviews;
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./productdetails.html */ "./src/app/product/components/productdetails/productdetails.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/components/products/products.html":
/*!***********************************************************!*\
  !*** ./src/app/product/components/products/products.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row\">\n    <div class=\"col-md-5 col-lg-4 col-xl-3 left-side-container\">\n      <div class=\"box\">\n        <div class=\"heading\">\n          Search the Catalog\n          <i *ngIf=\"search.value || search.all_words\" style=\"cursor: pointer\"\n            class=\"fa fa-times-circle\" (click)=\"removeSearch()\"></i>\n        </div>\n        <div class=\"content\">\n          <div class=\"pt-4 text-center\">\n            <input style=\"width: 70%\" [(ngModel)]=\"search.value\" type=\"text\">\n            <button class=\"ml-2\" (click)=\"loadProducts(1)\">Go</button>\n          </div>\n          <div class=\"mb-3 text-center mt-2\">\n            <input id=\"all_words\" type=\"checkbox\" [(ngModel)]=\"search.all_words\"> \n            <label class=\"ml-1\" for=\"all_words\">Search for all words</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"box\">\n        <div class=\"heading\">\n          Choose a Department\n          <i *ngIf=\"department\" [routerLink]=\"'/products'\"\n              class=\"fa fa-times-circle ml-1\" style=\"cursor: pointer\"></i>\n        </div>\n        <div class=\"content\">\n          <ul class=\"list-group-flush list-group\">\n            <ng-container *ngFor=\"let dept of departments\">\n              <li [ngClass]=\"{'active': dept.name==department?.name, 'list-group-item': true, 'cursor-pointer': true}\" (click)=\"goToDepartment(dept)\">\n                {{dept.name}}\n              </li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n      <div class=\"box\" *ngIf=\"categories\">\n        <div class=\"heading\">\n          Choose a Category\n          <i *ngIf=\"category\" [routerLink]=\"['../../../products']\" \n              class=\"fa fa-times-circle ml-1\" style=\"cursor: pointer\"></i>\n        </div>\n        <div class=\"content\">\n          <ul class=\"list-group-flush list-group\">\n            <ng-container *ngFor=\"let cat of categories\">\n              <li [ngClass]=\"{'active': category && cat.name===category?.name, 'list-group-item': true, 'cursor-pointer': true}\" (click)=\"goToCategory(cat)\">\n                {{cat.name}}\n              </li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n      <div class=\"box\" *ngIf=\"isCartLoaded; else viewCartButton\">\n        <div class=\"heading\">Cart Summary</div>\n        <div class=\"content\">\n          <ng-template #emptyCart>Your cart is empty!</ng-template>\n          <ng-container *ngIf=\"cartItems && cartItems.length>0; else emptyCart\">\n            <ng-container *ngFor=\"let cartItem of cartItems\">\n              <div class=\"row item\" >\n                <div class=\"col-2\"><b>{{cartItem.quantity}}</b></div>\n                <div class=\"col-2\">x</div>\n                <div class=\"col-8\">\n                  <b>{{cartItem.product.name}}</b>\n                  <span *ngIf=\"getKeys(cartItem.attributes).length>0\" class=\"attributes\">\n                    ({{joinAttributes(cartItem)}})</span>\n                </div>\n              </div>\n              <hr/>\n            </ng-container>\n            <div class=\"item text-center\">Subtotal({{totalItems()}} items): <strong>${{totalPrice()}}</strong></div>\n            <div class=\"text-center\">[ <a [routerLink]=\"['/cart/']\">View Details</a> ]</div>\n          </ng-container>\n        </div>\n      </div>\n      <ng-template #viewCartButton>\n        <div class=\"box border-none text-center\">\n          <button (click)=\"viewCart()\">View Cart</button>\n        </div>\n      </ng-template>\n    </div>\n    <div class=\"col-md-7 col-lg-8 col-xl-9\">\n      <app-header></app-header>\n      <div *ngIf=\"department\" class=\"breadcrumb-tshirtshop\">\n        <div class=\"brick\"></div>\n        <span>{{department.name}}</span>\n        <span class=\"ml-2\" *ngIf=\"category\"> >> {{category.name}}</span>\n      </div>\n      <ng-container *ngIf=\"searchUsed\">\n        <h4><b>Search results</b></h4>\n        <div class=\"mt-1\" *ngIf=\"!all_words\"><i>Products containing <strong>any</strong> of these words: \n          <strong>{{wordsAccepted.join(', ')}}</strong> </i></div>\n        <div class=\"mt-2\" *ngIf=\"!all_words && wordsIgnored.length\"><i>Ignored words: \n          <strong>{{wordsIgnored.join(', ')}}</strong> </i></div>\n      </ng-container>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"mt-2 col-12\" *ngIf=\"pages && pages.length>1\">\n            <span class=\"mr-4 icon-o-button fa fa-angle-left\" (click)=\"loadProducts(currentPage-1)\" *ngIf=\"currentPage!=1\"></span>\n            <ng-container *ngFor=\"let page of pages\">\n              <span class=\"page\" (click)=\"loadProducts(page)\" \n                *ngIf=\"currentPage!=page\">{{page}}</span>\n              <span class=\"selected page\" *ngIf=\"currentPage==page\">{{page}}</span>\n            </ng-container>\n            <span (click)=\"loadProducts(currentPage+1)\" *ngIf=\"currentPage!=pages.length\" class=\"ml-4 icon-o-button fa fa-angle-right\"></span>\n          </div>\n          <div class=\"mt-4 col-12 col-lg-6 product-container\" *ngFor=\"let product of products\">\n            <app-product [product]=\"product\" [isCartLoaded]=\"isCartLoaded\"></app-product>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/components/products/products.ts":
/*!*********************************************************!*\
  !*** ./src/app/product/components/products/products.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers */ "./src/app/product/reducers/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/app/product/actions/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(store, productService, router, route) {
        var _this = this;
        this.store = store;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.currentPage = 1;
        this.wordsAccepted = [];
        this.wordsIgnored = [];
        this.searchUsed = false;
        this.all_words = false;
        this.isCartLoaded = false;
        this.search = {
            value: '',
            all_words: false
        };
        this.onProductsLoaded = function (productsData) {
            _this.products = productsData.products;
            _this.pages = [];
            for (var i = 1; i <= productsData.totalPages; i++) {
                _this.pages.push(i);
            }
            _this.wordsAccepted = productsData.wordsAccepted.filter(function (w) { return w != ''; });
            _this.wordsIgnored = productsData.wordsIgnored.filter(function (w) { return w != ''; });
            _this.currentPage = productsData.currentPage;
            _this.searchUsed = productsData.searchUsed;
            _this.all_words = productsData.all_words;
        };
        this.STATIC_URL = window['STATIC_URL'];
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_1__["selectAllDepartments"]).subscribe(function (depts) {
            _this.departments = depts;
        });
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["LoadDepartments"]({}));
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_1__["isCartLoaded"]).subscribe(function (value) {
            _this.isCartLoaded = value;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                _this.setDeartment();
            }
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_1__["selectAllCartItems"]).subscribe(function (items) {
            if (items && items.length) {
                _this.cartItems = items;
            }
        });
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_1__["selectAllDepartments"]).subscribe(function (depts) {
            if (depts && depts.length) {
                _this.departments = depts;
                _this.setDeartment();
            }
        });
        this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_1__["isCartLoaded"]).subscribe(function (value) {
            _this.isCartLoaded = value;
        });
    };
    ProductsComponent.prototype.setDeartment = function () {
        var deptName = this.route.snapshot.params.department;
        if (deptName) {
            this.department = this.departments.find(function (dept) { return dept.name === deptName; });
            if (this.department) {
                this.categories = this.department.categories;
                var catName_1 = this.route.snapshot.params.category;
                if (catName_1) {
                    this.category = this.categories.find(function (cat) { return cat.name === catName_1; });
                }
            }
        }
        this.loadProducts();
    };
    ProductsComponent.prototype.loadProducts = function (page, department, category) {
        var _this = this;
        if (page === void 0) { page = null; }
        if (department === void 0) { department = null; }
        if (category === void 0) { category = null; }
        if (page) {
            this.currentPage = page;
        }
        if (!this.currentPage)
            return;
        var deptName = !this.department ? '' : this.department.name;
        var catName = this.category ? this.category.name : '';
        this.productService.loadProducts(this.currentPage, this.search, deptName, catName).subscribe(function (data) {
            var searchUsed = false;
            var all_words = false;
            if (_this.search.value != '')
                searchUsed = true;
            if (_this.search.all_words)
                all_words = true;
            _this.onProductsLoaded({
                products: data.results,
                totalPages: data.total_pages,
                wordsAccepted: data.wordsAccepted,
                wordsIgnored: data.wordsIgnored,
                currentPage: _this.currentPage,
                searchUsed: searchUsed,
                all_words: all_words
            });
        });
    };
    ProductsComponent.prototype.totalPrice = function () {
        var price = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (parseFloat(item.product.discounted_price) > 0)
                price += parseFloat(item.product.discounted_price) * item.quantity;
            else
                price += parseFloat(item.product.price) * item.quantity;
        }
        return price.toFixed(2);
    };
    ProductsComponent.prototype.viewCart = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["LoadCartItems"]({}));
    };
    ProductsComponent.prototype.removeSearch = function () {
        var reload = this.wordsAccepted.length > 0 || this.wordsAccepted.length > 0;
        this.search = {
            value: '',
            all_words: false
        };
        if (reload) {
            this.loadProducts();
        }
    };
    ProductsComponent.prototype.joinAttributes = function (cartItem) {
        var attributes = [];
        var attribute_values = [];
        for (var attribute in cartItem.attributes) {
            attributes.push(attribute);
            attribute_values.push(cartItem.attributes[attribute].value);
        }
        return attributes.join('/') + ': ' + attribute_values.join('/');
    };
    ProductsComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    ProductsComponent.prototype.goToDepartment = function (dept) {
        this.router.navigate(['/department', dept.name, 'products'], { relativeTo: this.route });
    };
    ProductsComponent.prototype.goToCategory = function (cat) {
        this.router.navigate(['/department', this.department.name, 'category', cat.name, 'products'], { relativeTo: this.route });
    };
    ProductsComponent.prototype.totalItems = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.quantity;
        }
        return total;
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.html */ "./src/app/product/components/products/products.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _services_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/product/components/reviews/create.html":
/*!********************************************************!*\
  !*** ./src/app/product/components/reviews/create.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"review\">\n    <app-header class=\"col-12\"></app-header>\n    <h3 class=\"col-12 text-center\">{{review.id?'Edit':'Write'}} Review for <u>{{productName}}</u></h3>\n    <form (ngSubmit)=\"onSumbit\" class=\"col-12 mt-5\">\n      <div class=\"form-group\">\n        <label>Rating:</label>\n        <ngb-rating class=\"ml-3\" required [(rate)]=\"review.rating\" [max]=\"5\">\n          <ng-template let-fill=\"fill\">\n            <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\n          </ng-template>\n        </ngb-rating>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"review\">Write review:</label>\n        <textarea rows=\"4\" class=\"form-control\" name=\"review\" [(ngModel)]=\"review.review\" id=\"review\"></textarea>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" (click)=\"onSumbit()\" class=\"mt-3 btn btn-success\" [disabled]=\"review.rating===0\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/components/reviews/create.ts":
/*!******************************************************!*\
  !*** ./src/app/product/components/reviews/create.ts ***!
  \******************************************************/
/*! exports provided: ReviewCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCreateComponent", function() { return ReviewCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service */ "./src/app/product/services/service.ts");





var ReviewCreateComponent = /** @class */ (function () {
    function ReviewCreateComponent(appSettings, router, route, productService) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.route = route;
        this.productService = productService;
        if (!this.appSettings.isLoggedIn) {
            this.router.navigate(['/customer/login/'], { relativeTo: this.route });
        }
        this.orderDetailId = this.route.snapshot.params.orderDetailId;
        this.productName = this.route.snapshot.params.productName.split('-').join(' ');
        this.productService.loadReview(this.orderDetailId).subscribe(function (review) {
            _this.review = review;
        });
    }
    ReviewCreateComponent.prototype.onSumbit = function () {
        var _this = this;
        this.productService.saveReview(this.orderDetailId, this.review).subscribe(function (review) {
            _this.review = review;
        });
    };
    ReviewCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-create',
            template: __webpack_require__(/*! ./create.html */ "./src/app/product/components/reviews/create.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ReviewCreateComponent);
    return ReviewCreateComponent;
}());



/***/ }),

/***/ "./src/app/product/components/reviews/reviews.html":
/*!*********************************************************!*\
  !*** ./src/app/product/components/reviews/reviews.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviews-box\" *ngIf=\"reviews\">\n  <h4 class=\"mb-3\">Reviews</h4>\n  <div *ngIf=\"!reviews.length\">\n    No reviews to show\n  </div>\n  <ng-container *ngIf=\"reviews.length\">\n    <div class=\"mb-2\" *ngFor=\"let review of reviews\">\n      <u>@{{review.customer.email}}</u>\n      <ngb-rating class=\"ml-3\" [rate]=\"review.rating\" [max]=\"5\" [readonly]=\"true\">\n        <ng-template let-fill=\"fill\">\n          <span class=\"star\" [class.filled]=\"fill===100\">&#9733;</span>\n        </ng-template>\n      </ngb-rating>\n      <textarea class=\"form-control\" disabled>{{review.review}}</textarea>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/product/components/reviews/reviews.ts":
/*!*******************************************************!*\
  !*** ./src/app/product/components/reviews/reviews.ts ***!
  \*******************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ReviewsComponent.prototype, "reviews", void 0);
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.html */ "./src/app/product/components/reviews/reviews.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/product/effects/index.ts":
/*!******************************************!*\
  !*** ./src/app/product/effects/index.ts ***!
  \******************************************/
/*! exports provided: ProductionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionEffects", function() { return ProductionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions */ "./src/app/product/actions/index.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/service */ "./src/app/product/services/service.ts");







var ProductionEffects = /** @class */ (function () {
    function ProductionEffects(actions$, productService) {
        var _this = this;
        this.actions$ = actions$;
        this.productService = productService;
        this.loadDepartments$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ProductActionTypes"].loadDepartments), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            return _this.productService.loadDepartments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                return ({ type: _actions__WEBPACK_IMPORTED_MODULE_5__["ProductActionTypes"].addDepartments, payload: res });
            }));
        }));
        this.loadCartItems$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ProductActionTypes"].loadCartItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            return _this.productService.loadCart().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                return ({ type: _actions__WEBPACK_IMPORTED_MODULE_5__["ProductActionTypes"].addCartItems, payload: res });
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ProductionEffects.prototype, "loadDepartments$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ProductionEffects.prototype, "loadCartItems$", void 0);
    ProductionEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], ProductionEffects);
    return ProductionEffects;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _product_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.router */ "./src/app/product/product.router.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/service */ "./src/app/product/services/service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "./src/app/product/reducers/index.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects */ "./src/app/product/effects/index.ts");
/* harmony import */ var _components_product_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product/product */ "./src/app/product/components/product/product.ts");
/* harmony import */ var _components_products_products__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/products/products */ "./src/app/product/components/products/products.ts");
/* harmony import */ var _components_cart_cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cart/cart */ "./src/app/product/components/cart/cart.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_productdetails_productdetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/productdetails/productdetails */ "./src/app/product/components/productdetails/productdetails.ts");
/* harmony import */ var _components_checkout_checkout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/checkout/checkout */ "./src/app/product/components/checkout/checkout.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _components_orderdetail_order__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/orderdetail/order */ "./src/app/product/components/orderdetail/order.ts");
/* harmony import */ var _components_orders_orders__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/orders/orders */ "./src/app/product/components/orders/orders.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_reviews_create__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/reviews/create */ "./src/app/product/components/reviews/create.ts");
/* harmony import */ var _components_reviews_reviews__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/reviews/reviews */ "./src/app/product/components/reviews/reviews.ts");























var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_products_products__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
                _components_product_product__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _components_cart_cart__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                _components_productdetails_productdetails__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsComponent"],
                _components_checkout_checkout__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                _components_orderdetail_order__WEBPACK_IMPORTED_MODULE_18__["OrderDetailsComponent"],
                _components_orders_orders__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"],
                _components_reviews_create__WEBPACK_IMPORTED_MODULE_21__["ReviewCreateComponent"],
                _components_reviews_reviews__WEBPACK_IMPORTED_MODULE_22__["ReviewsComponent"]
            ],
            exports: [
                _components_products_products__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_17__["CustomerModule"],
                _product_router__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('productStore', _reducers__WEBPACK_IMPORTED_MODULE_9__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_10__["ProductionEffects"]])
            ],
            providers: [
                _services_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            entryComponents: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product.router.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.router.ts ***!
  \*******************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_products_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products */ "./src/app/product/components/products/products.ts");
/* harmony import */ var _components_cart_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/cart */ "./src/app/product/components/cart/cart.ts");
/* harmony import */ var _components_productdetails_productdetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/productdetails/productdetails */ "./src/app/product/components/productdetails/productdetails.ts");
/* harmony import */ var _components_checkout_checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkout/checkout */ "./src/app/product/components/checkout/checkout.ts");
/* harmony import */ var _components_orders_orders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/orders/orders */ "./src/app/product/components/orders/orders.ts");
/* harmony import */ var _components_orderdetail_order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/orderdetail/order */ "./src/app/product/components/orderdetail/order.ts");
/* harmony import */ var _components_reviews_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reviews/create */ "./src/app/product/components/reviews/create.ts");










var routes = [
    {
        path: 'cart',
        component: _components_cart_cart__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: _components_products_products__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'products/:productName/:productId',
        component: _components_productdetails_productdetails__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
    },
    {
        path: 'department/:department/products',
        component: _components_products_products__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'department/:department/category/:category/products',
        component: _components_products_products__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'checkout',
        component: _components_checkout_checkout__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]
    },
    {
        path: 'orders',
        component: _components_orders_orders__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]
    },
    {
        path: 'orders/:orderId',
        component: _components_orderdetail_order__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"]
    },
    {
        path: ':productName/write-review/:orderDetailId',
        component: _components_reviews_create__WEBPACK_IMPORTED_MODULE_9__["ReviewCreateComponent"]
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/product/reducers/cart.ts":
/*!******************************************!*\
  !*** ./src/app/product/reducers/cart.ts ***!
  \******************************************/
/*! exports provided: getProductState, getCartEntities, selectAllCartItems, isCartLoaded, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductState", function() { return getProductState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartEntities", function() { return getCartEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCartItems", function() { return selectAllCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCartLoaded", function() { return isCartLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions */ "./src/app/product/actions/index.ts");




var CartAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = CartAdapter.getInitialState({
    isCartLoaded: false
});
var _a = CartAdapter.getSelectors(), SelectCartIds = _a.selectIds, SelectCartEntities = _a.selectEntities, SelectAllCartItems = _a.selectAll, CartItemsCount = _a.selectTotal;
var getProductState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('productStore');
var getCartEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductState, function (state) { return state.cart; });
var selectAllCartItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCartEntities, SelectAllCartItems);
var isCartLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCartEntities, function (state) { return state.isCartLoaded; });
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].loadCartItems: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isCartLoaded: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].addCartItems: {
            return CartAdapter.addAll(action.payload, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].addCartItem: {
            return CartAdapter.addOne(action.payload, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].removeCartItem: {
            return CartAdapter.removeOne(action.payload.id, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].updateCartItem: {
            return CartAdapter.updateOne(action.payload, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].emptyCart: {
            return CartAdapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/product/reducers/department.ts":
/*!************************************************!*\
  !*** ./src/app/product/reducers/department.ts ***!
  \************************************************/
/*! exports provided: getProductState, getDepartmentEntities, selectAllDepartments, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductState", function() { return getProductState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentEntities", function() { return getDepartmentEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllDepartments", function() { return selectAllDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions */ "./src/app/product/actions/index.ts");




var DepartmentsAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = DepartmentsAdapter.getInitialState({
    loading: true
});
var _a = DepartmentsAdapter.getSelectors(), SelectDepartmentIds = _a.selectIds, SelectDepartmentEntities = _a.selectEntities, SelectAllDepartments = _a.selectAll, DepartmentsCount = _a.selectTotal;
var getProductState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('productStore');
var getDepartmentEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductState, function (state) { return state.departments; });
var selectAllDepartments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getDepartmentEntities, SelectAllDepartments);
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].addDepartments: {
            state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false });
            return DepartmentsAdapter.addAll(action.payload, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_3__["ProductActionTypes"].loadDepartments: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/product/reducers/index.ts":
/*!*******************************************!*\
  !*** ./src/app/product/reducers/index.ts ***!
  \*******************************************/
/*! exports provided: reducer, selectAllDepartments, getDepartmentEntities, selectAllCartItems, getCartEntities, isCartLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department */ "./src/app/product/reducers/department.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ "./src/app/product/reducers/cart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllDepartments", function() { return _department__WEBPACK_IMPORTED_MODULE_0__["selectAllDepartments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDepartmentEntities", function() { return _department__WEBPACK_IMPORTED_MODULE_0__["getDepartmentEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCartItems", function() { return _cart__WEBPACK_IMPORTED_MODULE_1__["selectAllCartItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCartEntities", function() { return _cart__WEBPACK_IMPORTED_MODULE_1__["getCartEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCartLoaded", function() { return _cart__WEBPACK_IMPORTED_MODULE_1__["isCartLoaded"]; });



var reducer = {
    departments: _department__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    cart: _cart__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};




/***/ }),

/***/ "./src/app/product/services/service.ts":
/*!*********************************************!*\
  !*** ./src/app/product/services/service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");




var ProductService = /** @class */ (function () {
    function ProductService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
    }
    ProductService.prototype.apiUrl = function (department, category, product_id) {
        var url = this.appSettings.API_PREFIX;
        if (department != '')
            url += 'department/' + department + '/';
        if (category != '')
            url += 'category/' + category + '/';
        url += 'products/';
        if (product_id)
            url += product_id;
        return url;
    };
    ProductService.prototype.loadProducts = function (page, search, department, category) {
        if (department === void 0) { department = ''; }
        if (category === void 0) { category = ''; }
        var url = this.apiUrl(department, category, null);
        url += "?search=" + JSON.stringify(search);
        if (page && page != 1)
            url += "&page=" + page;
        return this.http.get(url);
    };
    ProductService.prototype.loadProduct = function (product_id) {
        var url = this.appSettings.API_PREFIX + "products/" + product_id;
        return this.http.get(url);
    };
    ProductService.prototype.loadDepartments = function () {
        var url = this.appSettings.API_PREFIX + "departments/";
        return this.http.get(url);
    };
    ProductService.prototype.loadCategories = function (department) {
        var url = this.appSettings.API_PREFIX + "department/" + department + "/categories";
        return this.http.get(url);
    };
    ProductService.prototype.loadCart = function () {
        var url = this.appSettings.API_PREFIX + "cart";
        return this.http.get(url);
    };
    ProductService.prototype.addToCart = function (item) {
        var url = this.appSettings.API_PREFIX + "cart";
        return this.http.post(url, item);
    };
    ProductService.prototype.updateCartItem = function (item, data) {
        var url = this.appSettings.API_PREFIX + "cart/" + item.id;
        return this.http.put(url, data);
    };
    ProductService.prototype.updateCart = function (items) {
        var url = this.appSettings.API_PREFIX + "cart";
        return this.http.put(url, {
            items: items
        });
    };
    ProductService.prototype.removeItem = function (item) {
        var url = this.appSettings.API_PREFIX + "cart/" + item.id;
        return this.http.delete(url);
    };
    ProductService.prototype.loadShippings = function () {
        var url = this.appSettings.API_PREFIX + "shippings";
        return this.http.get(url);
    };
    ProductService.prototype.loadOrder = function (orderId) {
        var url = this.appSettings.API_PREFIX + "orders/" + orderId;
        return this.http.get(url);
    };
    ProductService.prototype.loadOrders = function () {
        var url = this.appSettings.API_PREFIX + "orders";
        return this.http.get(url);
    };
    ProductService.prototype.updateOrder = function (order) {
        var url = this.appSettings.API_PREFIX + "order";
        return this.http.put(url, order);
    };
    ProductService.prototype.createOrder = function (data) {
        var url = this.appSettings.API_PREFIX + "orders";
        return this.http.post(url, data);
    };
    ProductService.prototype.loadReview = function (orderDetailId) {
        var url = "" + this.appSettings.API_PREFIX + orderDetailId + "/review/";
        return this.http.get(url);
    };
    ProductService.prototype.saveReview = function (orderDetailId, review) {
        var url = "" + this.appSettings.API_PREFIX + orderDetailId + "/review/";
        return this.http.post(url, review);
    };
    ProductService.prototype.loadReviews = function (productId) {
        var url = "" + this.appSettings.API_PREFIX + productId + "/reviews/";
        return this.http.get(url);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);