(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputDisableSelectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDisableSelectionDirective", function() { return InputDisableSelectionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDisableSelectionDirective = /** @class */ (function () {
    function InputDisableSelectionDirective() {
    }
    InputDisableSelectionDirective.prototype.handleInput = function (event) {
        if (event.target.readOnly) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputDisableSelectionDirective.prototype, "handleInput", null);
    InputDisableSelectionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input'
        }),
        __metadata("design:paramtypes", [])
    ], InputDisableSelectionDirective);
    return InputDisableSelectionDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-validate/input-validate.directive.ts ***!
  \********************************************************************************/
/*! exports provided: InputValidateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidateDirective", function() { return InputValidateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputValidateDirective = /** @class */ (function () {
    function InputValidateDirective(el, variablesService) {
        this.el = el;
        this.variablesService = variablesService;
    }
    Object.defineProperty(InputValidateDirective.prototype, "defineInputType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    InputValidateDirective.prototype.handleInput = function (event) {
        if (this.type === 'money') {
            this.moneyValidation(event);
        }
        else if (this.type === 'integer') {
            this.integerValidation(event);
        }
    };
    InputValidateDirective.prototype.moneyValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d\.]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(',', '.').replace(OnlyD, '');
        }
        var _double_separator = currentValue.match(/\./g);
        if (_double_separator && _double_separator.length > 1) {
            currentValue = currentValue.substr(0, currentValue.lastIndexOf('.'));
        }
        if (currentValue.indexOf('.') === 0) {
            currentValue = '0' + currentValue;
        }
        var _zero_fill = currentValue.split('.');
        if (_zero_fill[0].length > 7) {
            _zero_fill[0] = _zero_fill[0].substr(0, 7);
        }
        if (1 in _zero_fill && _zero_fill[1].length) {
            _zero_fill[1] = _zero_fill[1].substr(0, this.variablesService.digits);
        }
        currentValue = _zero_fill.join('.');
        if (currentValue !== originalValue) {
            event.target.value = currentValue;
            var cursorPosition = event.target.selectionEnd;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
            event.target.dispatchEvent(new Event('input'));
        }
    };
    InputValidateDirective.prototype.integerValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(OnlyD, '');
        }
        if (currentValue !== originalValue) {
            var cursorPosition = event.target.selectionEnd;
            event.target.value = currentValue;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appInputValidate'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputValidateDirective.prototype, "defineInputType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputValidateDirective.prototype, "handleInput", null);
    InputValidateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInputValidate]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], InputValidateDirective);
    return InputValidateDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar-container\">\n  <div class=\"progress-bar\">\n    <div class=\"progress-bar-full\" [style.width]=\"width\"></div>\n  </div>\n  <div class=\"progress-labels\">\n    <span *ngFor=\"let label of labels\">\n      {{ label | translate }}\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n  .progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n  .progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n  .progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2rem;\n    height: 100%; }\n  .progress-bar-container .progress-labels span {\n      flex: 1 0 0;\n      text-align: center; }\n  .progress-bar-container .progress-labels span:first-child {\n        text-align: left; }\n  .progress-bar-container .progress-labels span:last-child {\n        text-align: right; }\n  .progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9wcm9ncmVzcy1jb250YWluZXIvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxkaXJlY3RpdmVzXFxwcm9ncmVzcy1jb250YWluZXJcXHByb2dyZXNzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBTmQ7SUFTSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGNBQWMsRUFBQTtFQWRsQjtNQWlCTSxjQUFjLEVBQUE7RUFqQnBCO0lBc0JJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUExQmhCO01BNkJNLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTtFQTlCeEI7UUFpQ1EsZ0JBQWdCLEVBQUE7RUFqQ3hCO1FBcUNRLGlCQUFpQixFQUFBO0VBckN6QjtJQTJDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9kaXJlY3RpdmVzL3Byb2dyZXNzLWNvbnRhaW5lci9wcm9ncmVzcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwIDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG5cbiAgLnByb2dyZXNzLWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTAuN3JlbTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAzcmVtO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cmVtKTtcbiAgICBoZWlnaHQ6IDAuN3JlbTtcblxuICAgIC5wcm9ncmVzcy1iYXItZnVsbCB7XG4gICAgICBoZWlnaHQ6IDAuN3JlbTtcbiAgICB9XG4gIH1cblxuICAucHJvZ3Jlc3MtbGFiZWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHNwYW4ge1xuICAgICAgZmxleDogMSAwIDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvZ3Jlc3MtdGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTNyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProgressContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressContainerComponent", function() { return ProgressContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressContainerComponent = /** @class */ (function () {
    function ProgressContainerComponent() {
    }
    ProgressContainerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressContainerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProgressContainerComponent.prototype, "labels", void 0);
    ProgressContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-container',
            template: __webpack_require__(/*! ./progress-container.component.html */ "./src/app/_helpers/directives/progress-container/progress-container.component.html"),
            styles: [__webpack_require__(/*! ./progress-container.component.scss */ "./src/app/_helpers/directives/progress-container/progress-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressContainerComponent);
    return ProgressContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"switch\" (click)=\"toggleStaking(); $event.stopPropagation()\" [class.on]=\"staking\" [class.off]=\"!staking\">\n  <span class=\"circle\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  display: flex;\n  align-items: center;\n  border-radius: 1.1rem;\n  cursor: pointer;\n  padding: 0.2rem;\n  width: 3.6rem;\n  height: 2.2rem; }\n  .switch.on {\n    justify-content: flex-end; }\n  .switch.off {\n    justify-content: flex-start; }\n  .switch .circle {\n    border-radius: 50%;\n    width: 1.8rem;\n    height: 1.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9zdGFraW5nLXN3aXRjaC9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXGRpcmVjdGl2ZXNcXHN0YWtpbmctc3dpdGNoXFxzdGFraW5nLXN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWMsRUFBQTtFQVBoQjtJQVVJLHlCQUF5QixFQUFBO0VBVjdCO0lBYUksMkJBQTJCLEVBQUE7RUFiL0I7SUFnQkksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9kaXJlY3RpdmVzL3N0YWtpbmctc3dpdGNoL3N0YWtpbmctc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHdpZHRoOiAzLjZyZW07XG4gIGhlaWdodDogMi4ycmVtO1xuXG4gICYub24ge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgJi5vZmYge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAuY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.ts ***!
  \********************************************************************************/
/*! exports provided: StakingSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingSwitchComponent", function() { return StakingSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StakingSwitchComponent = /** @class */ (function () {
    function StakingSwitchComponent(backend, variablesService, intToMoney) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.intToMoney = intToMoney;
        this.stakingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StakingSwitchComponent.prototype.ngOnInit = function () {
    };
    StakingSwitchComponent.prototype.toggleStaking = function () {
        if (this.variablesService.height_app > this.variablesService.pos_height1 && this.variablesService.height_app < this.variablesService.pos_height2) {
            if (this.intToMoney.transform(this.variablesService.currentWallet.balance, false) < this.variablesService.pos_on1)
                return;
            else {
                var wallet = this.variablesService.getWallet(this.wallet_id);
                if (wallet && wallet.loaded) {
                    this.stakingChange.emit(!this.staking);
                    if (!this.staking) {
                        this.backend.startPosMining(this.wallet_id);
                    }
                    else {
                        this.backend.stopPosMining(this.wallet_id);
                    }
                }
            }
        }
        else {
            if (this.intToMoney.transform(this.variablesService.currentWallet.balance, false) < this.variablesService.pos_on2)
                return;
            else {
                var wallet = this.variablesService.getWallet(this.wallet_id);
                if (wallet && wallet.loaded) {
                    this.stakingChange.emit(!this.staking);
                    if (!this.staking) {
                        this.backend.startPosMining(this.wallet_id);
                    }
                    else {
                        this.backend.stopPosMining(this.wallet_id);
                    }
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "wallet_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "staking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StakingSwitchComponent.prototype, "stakingChange", void 0);
    StakingSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking-switch',
            template: __webpack_require__(/*! ./staking-switch.component.html */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html"),
            styles: [__webpack_require__(/*! ./staking-switch.component.scss */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"], _services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"], _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_3__["IntToMoneyPipe"]])
    ], StakingSwitchComponent);
    return StakingSwitchComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/tooltip.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/_helpers/directives/tooltip.directive.ts ***!
  \**********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer, route) {
        this.el = el;
        this.renderer = renderer;
        this.route = route;
        this.timeout = 0;
        this.timeDelay = 0;
        this.delay = 0;
        this.showWhenNoOverflow = true;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        var _this = this;
        if (this.showWhenNoOverflow || (!this.showWhenNoOverflow && this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth)) {
            this.cursor = 'pointer';
            if (!this.tooltip) {
                if (this.timeDelay !== 0) {
                    this.removeTooltipTimeDelay = setTimeout(function () {
                        _this.show();
                    }, this.timeDelay);
                }
                else {
                    this.show();
                }
            }
            else {
                this.cancelHide();
            }
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        clearTimeout(this.removeTooltipTimeDelay);
        if (this.tooltip) {
            this.hide();
        }
    };
    TooltipDirective.prototype.show = function () {
        this.create();
        this.placement = this.placement === null ? 'top' : this.placement;
        this.setPosition(this.placement);
    };
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        this.removeTooltipTimeout = setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '0');
            _this.removeTooltipTimeoutInner = setTimeout(function () {
                _this.renderer.removeChild(document.body, _this.tooltip);
                _this.tooltip.removeEventListener('mouseenter', _this.enter);
                _this.tooltip.removeEventListener('mouseleave', _this.leave);
                _this.tooltip = null;
                _this.onHide.emit(true);
            }, _this.delay);
        }, this.timeout);
    };
    TooltipDirective.prototype.cancelHide = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        this.renderer.setStyle(this.tooltip, 'opacity', '1');
    };
    TooltipDirective.prototype.create = function () {
        var _this = this;
        this.tooltip = this.renderer.createElement('div');
        var innerBlock = this.renderer.createElement('div');
        if (typeof this.tooltipInner === 'string') {
            innerBlock.innerHTML = this.tooltipInner;
        }
        else {
            innerBlock = this.tooltipInner;
        }
        this.renderer.addClass(innerBlock, 'tooltip-inner');
        this.renderer.addClass(innerBlock, 'scrolled-content');
        this.renderer.appendChild(this.tooltip, innerBlock);
        this.renderer.appendChild(document.body, this.tooltip);
        this.enter = function () {
            _this.cancelHide();
        };
        this.tooltip.addEventListener('mouseenter', this.enter);
        this.leave = function () {
            if (_this.tooltip) {
                _this.hide();
            }
        };
        this.tooltip.addEventListener('mouseleave', this.leave);
        this.renderer.setStyle(document.body, 'position', 'relative');
        this.renderer.setStyle(this.tooltip, 'position', 'absolute');
        if (this.tooltipClass !== null) {
            var classes = this.tooltipClass.split(' ');
            for (var i = 0; i < classes.length; i++) {
                this.renderer.addClass(this.tooltip, classes[i]);
            }
        }
        this.renderer.setStyle(this.tooltip, 'opacity', '0');
        this.renderer.setStyle(this.tooltip, '-webkit-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-moz-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-o-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, 'transition', "opacity " + this.delay + "ms");
        window.setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '1');
        }, 0);
    };
    TooltipDirective.prototype.setPosition = function (placement) {
        var hostPos = this.el.nativeElement.getBoundingClientRect();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-' + placement);
        var topExit = hostPos.top - this.tooltip.getBoundingClientRect().height - parseInt(getComputedStyle(this.tooltip).marginTop, 10) < 0;
        var bottomExit = window.innerHeight < hostPos.bottom + this.tooltip.getBoundingClientRect().height + parseInt(getComputedStyle(this.tooltip).marginTop, 10);
        switch (placement) {
            case 'top':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-left':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-right':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-left':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-right':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.checkSides();
                }
                break;
            case 'left':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'left-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                break;
            case 'left-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
            case 'right':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'right-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                break;
            case 'right-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
        }
    };
    TooltipDirective.prototype.checkSides = function () {
        if (this.tooltip.getBoundingClientRect().left < 0) {
            this.renderer.setStyle(this.tooltip, 'left', 0);
        }
        if (this.tooltip.getBoundingClientRect().right > window.innerWidth) {
            this.renderer.setStyle(this.tooltip, 'left', window.innerWidth - this.tooltip.getBoundingClientRect().width + 'px');
        }
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        clearTimeout(this.removeTooltipTimeDelay);
        if (this.tooltip) {
            this.renderer.removeChild(document.body, this.tooltip);
            this.tooltip = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.cursor'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "cursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltip'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipInner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "showWhenNoOverflow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tooltip]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\n  <div class=\"row\">\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.ID' | translate }}</span>\n    <span class=\"cell key-value\" [style.flex-basis]=\"sizes[1] + 'px'\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.tx_hash)\" (click)=\"openInBrowser(transaction.tx_hash)\">{{transaction.tx_hash}}</span>\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.SIZE' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{ 'HISTORY.DETAILS.SIZE_VALUE' | translate : {value: transaction.tx_blob_size} }}</span>\n  </div>\n  <div class=\"row\">\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.HEIGHT' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\">{{transaction.height}}</span>\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.CONFIRMATION' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{transaction.height === 0 ? 0 : variablesService.height_app - transaction.height}}</span>\n  </div>\n  <div class=\"row\">\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.INPUTS' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\" tooltip=\"{{inputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{inputs.join(', ')}}</span>\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.OUTPUTS' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\" tooltip=\"{{outputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{outputs.join(', ')}}</span>\n  </div>\n  <div class=\"row\">\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.PAYMENT_ID' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\n          tooltip=\"{{transaction.payment_id}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\n      {{transaction.payment_id}}\n    </span>\n  </div>\n  <div class=\"row\">\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.COMMENT' | translate }}</span>\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\n          tooltip=\"{{transaction.comment}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\"\n          (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.comment)\">\n      {{transaction.comment}}\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n\n.table {\n  margin: 0 3rem;\n  padding: 0.5rem 0; }\n\n.table .row {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-top: none;\n    line-height: 3rem;\n    margin: 0 -3rem;\n    width: 100%;\n    height: 3rem; }\n\n.table .row .cell {\n      flex-shrink: 0;\n      flex-grow: 0;\n      padding: 0 1rem;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.table .row .cell:first-child {\n        padding-left: 3rem; }\n\n.table .row .cell:last-child {\n        padding-right: 3rem; }\n\n.table .row .cell.key-value {\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy90cmFuc2FjdGlvbi1kZXRhaWxzL0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcZGlyZWN0aXZlc1xcdHJhbnNhY3Rpb24tZGV0YWlsc1xcdHJhbnNhY3Rpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFGbkI7SUFLSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVpoQjtNQWVNLGNBQWM7TUFDZCxZQUFZO01BQ1osZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBQTs7QUFuQjdCO1FBc0JRLGtCQUFrQixFQUFBOztBQXRCMUI7UUEwQlEsbUJBQW1CLEVBQUE7O0FBMUIzQjtRQThCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9kaXJlY3RpdmVzL3RyYW5zYWN0aW9uLWRldGFpbHMvdHJhbnNhY3Rpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUge1xuICBtYXJnaW46IDAgM3JlbTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG5cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIG1hcmdpbjogMCAtM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG5cbiAgICAuY2VsbCB7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgJi5rZXktdmFsdWUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/transaction.model */ "./src/app/_helpers/models/transaction.model.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(variablesService, backendService, intToMoneyPipe) {
        this.variablesService = variablesService;
        this.backendService = backendService;
        this.intToMoneyPipe = intToMoneyPipe;
        this.inputs = [];
        this.outputs = [];
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        for (var input in this.transaction.td['spn']) {
            if (this.transaction.td['spn'].hasOwnProperty(input)) {
                this.inputs.push(this.intToMoneyPipe.transform(this.transaction.td['spn'][input]));
            }
        }
        for (var output in this.transaction.td['rcv']) {
            if (this.transaction.td['rcv'].hasOwnProperty(output)) {
                this.outputs.push(this.intToMoneyPipe.transform(this.transaction.td['rcv'][output]));
            }
        }
    };
    TransactionDetailsComponent.prototype.openInBrowser = function (tr) {
        this.backendService.openUrlInBrowser((this.variablesService.testnet ? _shared_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_EXPLORER_TN_TX_URL_PREFIX"] : _shared_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_EXPLORER_TX_URL_PREFIX"]) + tr);
    };
    TransactionDetailsComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__["Transaction"])
    ], TransactionDetailsComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransactionDetailsComponent.prototype, "sizes", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"], _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__["IntToMoneyPipe"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_helpers/modals/confirm-modal/confirm-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"content\">\n    <i class=\"icon info\"></i>\n    <div class=\"message-container\">\n      <span class=\"title\">{{title}}</span>\n      <span class=\"message\">{{message}}</span>\n\n      <div class=\"wrap-btn\">\n        <button type=\"button\" class=\"action-button\" (click)=\"onClose()\">{{ 'MODALS.CANCEL' | translate }}</button>\n        <button type=\"button\" class=\"action-button\" (click)=\"onSubmit()\" #btn>{{ 'MODALS.OK' | translate }}</button>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/_helpers/modals/confirm-modal/confirm-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 3rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 2rem;\n      height: 2rem; }\n\n.modal .content .icon.info {\n        background: center/contain no-repeat url('modal-info.svg'); }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 1rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .wrap-btn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 3.5rem; }\n\n.modal .action-button {\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      background: center/contain no-repeat url('close.svg');\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL2NvbmZpcm0tbW9kYWwvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxtb2RhbHNcXGNvbmZpcm0tbW9kYWxcXGNvbmZpcm0tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFSbEI7SUFXSSxhQUFhLEVBQUE7O0FBWGpCO01BY00sY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBaEJsQjtRQW1CUSwwREFBNEUsRUFBQTs7QUFuQnBGO01Bd0JNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHVCQUF1QjtNQUN2QixpQkFBaUIsRUFBQTs7QUE1QnZCO1FBK0JRLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CLEVBQUE7O0FBakMzQjtRQXFDUSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBOztBQXZDMUI7SUE2Q0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBaER0QjtJQW9ESSxZQUFZO0lBQ1osY0FBYyxFQUFBOztBQXJEbEI7SUF5REksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWMsRUFBQTs7QUFuRWxCO01Bc0VNLHFEQUF1RTtNQUN2RSxhQUFhO01BQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA1O1xufVxuLm1vZGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcbiAgcGFkZGluZzogM3JlbTtcbiAgbWluLXdpZHRoOiAzNHJlbTtcbiAgbWF4LXdpZHRoOiA2MHJlbTtcblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5pY29uIHtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG5cbiAgICAgICYuaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1pbmZvLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53cmFwLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgfVxuXG4gIC5jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAyLjRyZW07XG4gICAgaGVpZ2h0OiAyLjRyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwofnNyYy9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnKTtcbiAgICAgIHdpZHRoOiAyLjRyZW07XG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_helpers/modals/confirm-modal/confirm-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
    };
    ConfirmModalComponent.prototype.onSubmit = function () {
        this.confirmed.emit(true);
    };
    ConfirmModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmModalComponent.prototype, "confirmed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfirmModalComponent.prototype, "button", void 0);
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/modals/export-history-modal/export-history-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"title\">\n    <span>{{ 'EXPORT_HISTORY.TITLE' | translate }}</span>\n  </div>\n  <div class=\"content\">\n    <div class=\"inputs-container\">\n      <div class=\"lock-selection\">\n        <label class=\"lock-selection-title\">Format:</label>\n        <ng-select class=\"custom-select\" [items]=\"exportFormats\" bindValue=\"format\" bindLabel=\"formatName\"\n          [(ngModel)]=\"curentFormat\" [clearable]=\"false\" [searchable]=\"false\">\n          <ng-template ng-label-tmp let-item=\"item\">\n            {{item.formatName}}\n          </ng-template>\n          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n            {{item.formatName}}\n          </ng-template>\n        </ng-select>\n      </div>\n      <div class=\"lock-selection filter-switch\">\n        <label class=\"lock-selection-title\">{{ 'EXPORT_HISTORY.FILTER' | translate }}</label>\n        <div class=\"switch\" (click)=\"posFilterIsOn = !posFilterIsOn\" [ngClass]=\"posFilterIsOn ? 'off' : 'on'\">\n          <span class=\"circle\"></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"wrapper-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"closeModal()\">{{ 'EXPORT_HISTORY.CANCEL' | translate\n        }}</button>\n      <button type=\"submit\" class=\"blue-button\" (click)=\"confirmExport()\">{{ 'EXPORT_HISTORY.EXPORT' | translate\n        }}</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/modals/export-history-modal/export-history-modal.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 3.2rem;\n  width: 72rem;\n  height: 47rem; }\n\n.modal .title {\n    padding-bottom: 3.6rem;\n    font-size: 2rem;\n    line-height: 2.4rem; }\n\n.modal .content {\n    display: flex;\n    flex-direction: column; }\n\n.modal .content .inputs-container {\n      margin-bottom: 13rem; }\n\n.modal .content .inputs-container .lock-selection {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start; }\n\n.modal .content .inputs-container .lock-selection.filter-switch {\n          margin-top: 4rem;\n          display: flex;\n          flex-direction: row; }\n\n.modal .content .inputs-container .lock-selection.filter-switch label {\n            font-size: 2rem;\n            line-height: 2.4rem;\n            color: #fdfeff;\n            margin-right: 3.5rem; }\n\n.modal .content .inputs-container .lock-selection .lock-selection-title {\n          display: flex;\n          font-size: 1.6rem;\n          line-height: 1.9rem;\n          margin-bottom: 1.2rem;\n          color: #FFF9AD; }\n\n.modal .content .inputs-container .lock-selection .switch {\n          border-radius: 1.1rem;\n          cursor: pointer;\n          padding: 0.2rem;\n          width: 3.6rem;\n          height: 2.2rem;\n          transition: all 0.3s ease;\n          position: relative; }\n\n.modal .content .inputs-container .lock-selection .switch.on {\n            background-color: #169c04; }\n\n.modal .content .inputs-container .lock-selection .switch.on .circle {\n              margin-left: 1.4rem; }\n\n.modal .content .inputs-container .lock-selection .switch.off {\n            background-color: rgba(255, 255, 255, 0.2); }\n\n.modal .content .inputs-container .lock-selection .switch .circle {\n            display: block;\n            transition: all 0.3s ease;\n            position: relative;\n            border-radius: 50%;\n            width: 1.8rem;\n            height: 1.8rem; }\n\n.modal .content .wrapper-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n\n.modal .content .wrapper-buttons button {\n        width: 100%; }\n\n.modal .content .wrapper-buttons button:first-child {\n          margin-right: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL2V4cG9ydC1oaXN0b3J5LW1vZGFsL0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcbW9kYWxzXFxleHBvcnQtaGlzdG9yeS1tb2RhbFxcZXhwb3J0LWhpc3RvcnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBUmY7SUFXSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQixFQUFBOztBQWJ2QjtJQWlCSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7O0FBbEIxQjtNQW9CTSxvQkFBb0IsRUFBQTs7QUFwQjFCO1FBc0JRLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCLEVBQUE7O0FBeEIvQjtVQTBCVSxnQkFBZ0I7VUFDaEIsYUFBYTtVQUNiLG1CQUFtQixFQUFBOztBQTVCN0I7WUE4QlksZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2Qsb0JBQW9CLEVBQUE7O0FBakNoQztVQXNDVSxhQUFhO1VBQ2IsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixxQkFBcUI7VUFDckIsY0FBYyxFQUFBOztBQTFDeEI7VUE2Q1UscUJBQXFCO1VBQ3JCLGVBQWU7VUFDZixlQUFlO1VBQ2YsYUFBYTtVQUNiLGNBQWM7VUFDZCx5QkFBeUI7VUFDekIsa0JBQWtCLEVBQUE7O0FBbkQ1QjtZQXFEWSx5QkFBeUIsRUFBQTs7QUFyRHJDO2NBdURjLG1CQUFtQixFQUFBOztBQXZEakM7WUEyRFksMENBQTBDLEVBQUE7O0FBM0R0RDtZQThEWSxjQUFjO1lBQ2QseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGNBQWMsRUFBQTs7QUFuRTFCO01BeUVNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7O0FBM0VwQztRQWlGUSxXQUFXLEVBQUE7O0FBakZuQjtVQStFVSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19oZWxwZXJzL21vZGFscy9leHBvcnQtaGlzdG9yeS1tb2RhbC9leHBvcnQtaGlzdG9yeS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuLm1vZGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcbiAgcGFkZGluZzogMy4ycmVtO1xuICB3aWR0aDogNzJyZW07XG4gIGhlaWdodDogNDdyZW07XG5cbiAgLnRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuaW5wdXRzLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxM3JlbTtcbiAgICAgIC5sb2NrLXNlbGVjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAmLmZpbHRlci1zd2l0Y2gge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZkZmVmZjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NrLXNlbGVjdGlvbi10aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS45cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbiAgICAgICAgICBjb2xvcjogI0ZGRjlBRDtcbiAgICAgICAgfVxuICAgICAgICAuc3dpdGNoIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICAgICAgICB3aWR0aDogMy42cmVtO1xuICAgICAgICAgIGhlaWdodDogMi4ycmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICYub24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2OWMwNDtcbiAgICAgICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmLm9mZiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAud3JhcHBlci1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_helpers/modals/export-history-modal/export-history-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExportHistoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportHistoryModalComponent", function() { return ExportHistoryModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportHistoryModalComponent = /** @class */ (function () {
    function ExportHistoryModalComponent(backend, variablesService, translate) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.translate = translate;
        this.posFilterIsOn = true;
        this.exportData = {
            wallet_id: 0,
            include_pos_transactions: false,
            path: "C:\\some_file.txt",
            format: 'json'
        };
        this.exportFormats = [
            {
                format: 'json',
                formatName: 'JSON'
            },
            {
                format: 'text',
                formatName: 'Text'
            },
            {
                format: 'csv',
                formatName: 'CSV'
            }
        ];
        this.closeExportModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.curentFormat = this.exportFormats[0].format;
    }
    ExportHistoryModalComponent.prototype.closeModal = function () {
        this.closeExportModal.emit(true);
    };
    ExportHistoryModalComponent.prototype.confirmExport = function () {
        var _this = this;
        this.exportData.format = "" + this.curentFormat;
        this.exportData.wallet_id = this.currentWalletId;
        this.exportData.include_pos_transactions = this.posFilterIsOn;
        this.backend.saveFileDialog(this.translate.instant('EXPORT_HISTORY.SAVED_FILE'), "" + this.exportData.format, this.variablesService.settings.default_path, function (file_status, file_data) {
            if (_this.exportData.format === 'text') {
                _this.exportData.path = file_data.path + '.txt';
            }
            else {
                _this.exportData.path = file_data.path + ("." + _this.exportData.format);
            }
            if (file_status) {
                _this.backend.exportWalletHistory(JSON.stringify(_this.exportData));
                _this.closeExportModal.emit(true);
            }
            ;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExportHistoryModalComponent.prototype, "currentWalletId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ExportHistoryModalComponent.prototype, "closeExportModal", void 0);
    ExportHistoryModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-history-modal',
            template: __webpack_require__(/*! ./export-history-modal.component.html */ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.html"),
            styles: [__webpack_require__(/*! ./export-history-modal.component.scss */ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ExportHistoryModalComponent);
    return ExportHistoryModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/modal-container/modal-container.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/modals/modal-container/modal-container.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"content\">\n    <i class=\"icon\" [class.error]=\"type === 'error'\" [class.success]=\"type === 'success'\"\n      [class.info]=\"type === 'info'\"></i>\n    <div class=\"message-container\">\n      <span class=\"title\">{{title}}</span>\n      <span class=\"message\" [innerHTML]=\"message\"></span>\n    </div>\n  </div>\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\n  <button type=\"button\" class=\"action-button\" (click)=\"onClose()\" #btn>{{ 'MODALS.OK' | translate }}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/modals/modal-container/modal-container.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/modals/modal-container/modal-container.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.modal {\n  background-color: #206F5A;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex;\n    margin: 1.2rem 0; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 4.4rem;\n      height: 4.4rem; }\n\n.modal .content .icon.error {\n        background: center/contain no-repeat url('modal-alert.svg'); }\n\n.modal .content .icon.success {\n        background: center/contain no-repeat url('modal-success.svg'); }\n\n.modal .content .icon.info {\n        background: center/contain no-repeat url('modal-info.svg'); }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 2rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .action-button {\n    margin: 1.2rem auto 0.6rem;\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      background: center/contain no-repeat url('close.svg');\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL21vZGFsLWNvbnRhaW5lci9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXG1vZGFsc1xcbW9kYWwtY29udGFpbmVyXFxtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBVGxCO0lBWUksYUFBYTtJQUNiLGdCQUFnQixFQUFBOztBQWJwQjtNQWdCTSxjQUFjO01BQ2QsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUFsQnBCO1FBcUJRLDJEQUE2RSxFQUFBOztBQXJCckY7UUF5QlEsNkRBQStFLEVBQUE7O0FBekJ2RjtRQTZCUSwwREFBNEUsRUFBQTs7QUE3QnBGO01Ba0NNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHVCQUF1QjtNQUN2QixpQkFBaUIsRUFBQTs7QUF0Q3ZCO1FBeUNRLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CLEVBQUE7O0FBM0MzQjtRQStDUSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBOztBQWpEMUI7SUF1REksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixjQUFjLEVBQUE7O0FBekRsQjtJQTZESSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQXZFbEI7TUEwRU0scURBQXVFO01BQ3ZFLGFBQWE7TUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9tb2RhbHMvbW9kYWwtY29udGFpbmVyL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDExO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDZGNUE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1pbi13aWR0aDogMzRyZW07XG4gIG1heC13aWR0aDogNjByZW07XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxLjJyZW0gMDtcblxuICAgIC5pY29uIHtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgd2lkdGg6IDQuNHJlbTtcbiAgICAgIGhlaWdodDogNC40cmVtO1xuXG4gICAgICAmLmVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL21vZGFsLWFsZXJ0LnN2Zyk7XG4gICAgICB9XG5cbiAgICAgICYuc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1zdWNjZXNzLnN2Zyk7XG4gICAgICB9XG5cbiAgICAgICYuaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1pbmZvLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDEuMnJlbSBhdXRvIDAuNnJlbTtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAyLjRyZW07XG4gIH1cblxuICAuY2xvc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMi40cmVtO1xuICAgIGhlaWdodDogMi40cmVtO1xuXG4gICAgLmljb24ge1xuICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zyk7XG4gICAgICB3aWR0aDogMi40cmVtO1xuICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/modals/modal-container/modal-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_helpers/modals/modal-container/modal-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(translate) {
        this.translate = translate;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
        switch (this.type) {
            case 'error':
                this.title = this.translate.instant('MODALS.ERROR');
                break;
            case 'success':
                this.title = this.translate.instant('MODALS.SUCCESS');
                break;
            case 'info':
                this.title = this.translate.instant('MODALS.INFO');
                break;
        }
    };
    ModalContainerComponent.prototype.onClose = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalContainerComponent.prototype, "button", void 0);
    ModalContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-container',
            template: __webpack_require__(/*! ./modal-container.component.html */ "./src/app/_helpers/modals/modal-container/modal-container.component.html"),
            styles: [__webpack_require__(/*! ./modal-container.component.scss */ "./src/app/_helpers/modals/modal-container/modal-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/sync-modal/sync-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_helpers/modals/sync-modal/sync-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"host-container\">\n  <div class=\"container\">\n    <div class=\"modal sync-modal\">\n      <div class=\"title\">\n        <span>This action is not available\n          during synchronization...</span>\n      </div>\n      <button type=\"button\" class=\"blue-button\">OK</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/modals/sync-modal/sync-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/_helpers/modals/sync-modal/sync-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host-container {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.deep-overflow {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 0; }\n\n.container {\n  position: relative;\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 3.5rem; }\n\n.modal .title {\n    padding: 0 0 7.5rem;\n    font-size: 3.6rem;\n    font-weight: 500;\n    text-align: center;\n    line-height: 4.296rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 30rem; }\n\n.modal .wrapper-buttons button:first-child {\n        margin-right: 5rem; }\n\n.modal.sync-modal {\n    width: 72rem;\n    height: 48rem;\n    padding: 11.2rem 11.2rem 4.1rem; }\n\n.modal.sync-modal .title {\n      padding: 0 0 13.2rem; }\n\n.modal.sync-modal button {\n      margin: 0 auto;\n      width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL3N5bmMtbW9kYWwvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxtb2RhbHNcXHN5bmMtbW9kYWxcXHN5bmMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBSmpCO0lBT0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQixFQUFBOztBQVh6QjtJQWVJLGFBQWEsRUFBQTs7QUFmakI7SUFtQkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUFyQmxDO01BMkJNLFlBQVksRUFBQTs7QUEzQmxCO1FBeUJRLGtCQUFrQixFQUFBOztBQXpCMUI7SUErQkksWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0IsRUFBQTs7QUFqQ25DO01BbUNNLG9CQUFvQixFQUFBOztBQW5DMUI7TUFzQ00sY0FBYztNQUNkLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL19oZWxwZXJzL21vZGFscy9zeW5jLW1vZGFsL3N5bmMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9zdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuLmRlZXAtb3ZlcmZsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG59XG4ubW9kYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMuNXJlbTtcblxuICAudGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMCA3LjVyZW07XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQuMjk2cmVtO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAud3JhcHBlci1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gICAgICB9XG4gICAgICB3aWR0aDogMzByZW07XG4gICAgfVxuICB9XG4gICYuc3luYy1tb2RhbCB7XG4gICAgd2lkdGg6IDcycmVtO1xuICAgIGhlaWdodDogNDhyZW07XG4gICAgcGFkZGluZzogMTEuMnJlbSAxMS4ycmVtIDQuMXJlbTtcbiAgICAudGl0bGUge1xuICAgICAgcGFkZGluZzogMCAwIDEzLjJyZW07XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiAzMHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/modals/sync-modal/sync-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_helpers/modals/sync-modal/sync-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: SyncModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncModalComponent", function() { return SyncModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SyncModalComponent = /** @class */ (function () {
    function SyncModalComponent() {
    }
    SyncModalComponent.prototype.ngOnInit = function () {
    };
    SyncModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sync-modal',
            template: __webpack_require__(/*! ./sync-modal.component.html */ "./src/app/_helpers/modals/sync-modal/sync-modal.component.html"),
            styles: [__webpack_require__(/*! ./sync-modal.component.scss */ "./src/app/_helpers/modals/sync-modal/sync-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SyncModalComponent);
    return SyncModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/models/transaction.model.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/models/transaction.model.ts ***!
  \******************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());



/***/ }),

/***/ "./src/app/_helpers/models/wallet.model.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/models/wallet.model.ts ***!
  \*************************************************/
/*! exports provided: Wallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

var Wallet = /** @class */ (function () {
    function Wallet(id, name, pass, path, address, balance, unlocked_balance, mined, tracking) {
        if (mined === void 0) { mined = 0; }
        if (tracking === void 0) { tracking = ''; }
        this.updated = false;
        this.history = [];
        this.history_massage = [];
        this.pages = [];
        this.excluded_history = [];
        this.contracts = [];
        this.send_data = {
            address: null,
            amount: null,
            comment: null,
            mixin: null,
            fee: null,
            hide: null
        };
        this.wallet_id = id;
        this.name = name;
        this.pass = pass;
        this.path = path;
        this.address = address;
        this.balance = balance;
        this.unlocked_balance = unlocked_balance;
        this.mined_total = mined;
        this.tracking_hey = tracking;
        this.alias = {};
        this.staking = false;
        this.new_messages = 0;
        this.new_contracts = 0;
        this.history = [];
        this.history_massage = [];
        this.excluded_history = [];
        this.progress = 0;
        this.loaded = false;
    }
    Wallet.prototype.getMoneyEquivalent = function (equivalent) {
        return this.balance.multipliedBy(equivalent).toFixed(0);
    };
    Wallet.prototype.havePass = function () {
        return (this.pass !== '' && this.pass !== null);
    };
    Wallet.prototype.isActive = function (id) {
        return this.wallet_id === id;
    };
    Wallet.prototype.prepareHistoryItem = function (item) {
        if (item.tx_type === 4) {
            item.sortFee = item.amount.plus(item.fee).negated();
            item.sortAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if (item.tx_type === 3) {
            item.sortFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if ((item.hasOwnProperty('contract') && (item.contract[0].state === 3 || item.contract[0].state === 6 || item.contract[0].state === 601) && !item.contract[0].is_a)) {
            item.sortFee = item.fee.negated();
            item.sortAmount = item.amount;
        }
        else {
            if (!item.is_income) {
                item.sortFee = item.fee.negated();
                item.sortAmount = item.amount.negated();
            }
            else {
                item.sortAmount = item.amount;
            }
        }
        return item;
    };
    Wallet.prototype.prepareHistory = function (items) {
        for (var i = 0; i < items.length; i++) {
            var ACS = false;
            if (items[i].comment.startsWith('ACS:'))
                ACS = true;
            if ((items[i].tx_type === 7 && items[i].is_income) || (items[i].tx_type === 11 && items[i].is_income) || (items[i].amount.eq(0) && items[i].fee.eq(0) && !items[i].is_mining)) {
                var exists = false;
                for (var j = 0; j < this.excluded_history.length; j++) {
                    if (this.excluded_history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.excluded_history[j].height !== items[i].height) {
                            this.excluded_history[j] = items[i];
                        }
                        break;
                    }
                }
                if (!exists) {
                    this.excluded_history.push(items[i]);
                }
            }
            else {
                var exists = false;
                for (var j = 0; j < this.history.length; j++) {
                    if (this.history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.history[j].height !== items[i].height) {
                            this.history[j] = this.prepareHistoryItem(items[i]);
                        }
                        break;
                    }
                }
                if (!exists) {
                    if (this.history.length && items[i].timestamp >= this.history[0].timestamp) {
                        this.history.unshift(this.prepareHistoryItem(items[i]));
                    }
                    else {
                        this.history.push(this.prepareHistoryItem(items[i]));
                    }
                }
                if (ACS) {
                    var exists_1 = false;
                    for (var j = 0; j < this.history_massage.length; j++) {
                        if (this.history_massage[j].tx_hash === items[i].tx_hash) {
                            exists_1 = true;
                            if (this.history_massage[j].height !== items[i].height) {
                                this.history_massage[j] = this.prepareHistoryItem(items[i]);
                            }
                            break;
                        }
                    }
                    if (!exists_1) {
                        if (this.history_massage.length && items[i].timestamp >= this.history_massage[0].timestamp) {
                            this.history_massage.unshift(this.prepareHistoryItem(items[i]));
                        }
                        else {
                            this.history_massage.push(this.prepareHistoryItem(items[i]));
                        }
                    }
                }
            }
        }
    };
    Wallet.prototype.removeFromHistory = function (hash) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].tx_hash === hash) {
                this.history.splice(i, 1);
                break;
            }
        }
    };
    Wallet.prototype.prepareContractsAfterOpen = function (items, exp_med_ts, height_app, viewedContracts, notViewedContracts) {
        var wallet = this;
        var _loop_1 = function (i) {
            var contract = items[i];
            var contractTransactionExist = false;
            if (wallet && wallet.history) {
                contractTransactionExist = wallet.history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist && wallet && wallet.excluded_history) {
                contractTransactionExist = wallet.excluded_history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist) {
                contract.state = 140;
            }
            else if (contract.state === 1 && contract.expiration_time < exp_med_ts) {
                contract.state = 110;
            }
            else if (contract.state === 2 && contract.cancel_expiration_time !== 0 && contract.cancel_expiration_time < exp_med_ts && contract.height === 0) {
                var searchResult1 = viewedContracts.some(function (elem) { return elem.state === 2 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (!searchResult1) {
                    contract.state = 130;
                    contract.is_new = true;
                }
            }
            else if (contract.state === 1) {
                var searchResult2 = notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult2) {
                    if (searchResult2.time === contract.expiration_time) {
                        contract.state = 110;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 2 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 201;
            }
            else if (contract.state === 2) {
                var searchResult3 = viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult3) {
                    contract.state = 120;
                }
            }
            else if (contract.state === 5) {
                var searchResult4 = notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult4) {
                    if (searchResult4.time === contract.cancel_expiration_time) {
                        contract.state = 130;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 6 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 601;
            }
            var searchResult = viewedContracts.some(function (elem) { return elem.state === contract.state && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
            contract.is_new = !searchResult;
            wallet.contracts.push(contract);
        };
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        this.recountNewContracts();
    };
    Wallet.prototype.recountNewContracts = function () {
        this.new_contracts = (this.contracts.filter(function (item) { return item.is_new === true; })).length;
    };
    Wallet.prototype.getContract = function (id) {
        for (var i = 0; i < this.contracts.length; i++) {
            if (this.contracts[i].contract_id === id) {
                return this.contracts[i];
            }
        }
        return null;
    };
    return Wallet;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-status-messages.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ContractStatusMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractStatusMessagesPipe", function() { return ContractStatusMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractStatusMessagesPipe = /** @class */ (function () {
    function ContractStatusMessagesPipe(translate) {
        this.translate = translate;
    }
    ContractStatusMessagesPipe.prototype.getStateSeller = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NEW_CONTRACT');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAITING_BUYER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.PROPOSAL_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.getStateBuyer = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                break;
            case 120:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_SELLER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.transform = function (state, is_a) {
        if (is_a) {
            return this.getStateBuyer(state);
        }
        else {
            return this.getStateSeller(state);
        }
    };
    ContractStatusMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractStatusMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ContractStatusMessagesPipe);
    return ContractStatusMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-time-left.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-time-left.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ContractTimeLeftPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTimeLeftPipe", function() { return ContractTimeLeftPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractTimeLeftPipe = /** @class */ (function () {
    function ContractTimeLeftPipe(service, translate) {
        this.service = service;
        this.translate = translate;
    }
    ContractTimeLeftPipe.prototype.transform = function (value, arg) {
        var time = parseInt(((parseInt(value, 10) - this.service.exp_med_ts) / 3600).toFixed(0), 10);
        var type = arg || 0;
        if (time === 0) {
            return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_LESS_ONE');
        }
        if (this.service.settings.language === 'en') {
            if (type === 0) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
            }
            else if (type === 1) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
            }
        }
        else {
            var rest = time % 10;
            if (type === 0) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT', { time: time });
                }
            }
            else if (type === 1) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_WAITING', { time: time });
                }
            }
        }
        return null;
    };
    ContractTimeLeftPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractTimeLeft'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ContractTimeLeftPipe);
    return ContractTimeLeftPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/history-type-messages.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/_helpers/pipes/history-type-messages.pipe.ts ***!
  \**************************************************************/
/*! exports provided: HistoryTypeMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTypeMessagesPipe", function() { return HistoryTypeMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryTypeMessagesPipe = /** @class */ (function () {
    function HistoryTypeMessagesPipe(translate) {
        this.translate = translate;
    }
    HistoryTypeMessagesPipe.prototype.transform = function (item, args) {
        if (item.tx_type === 0) {
            if (item.remote_addresses && item.remote_addresses[0]) {
                return item.remote_addresses[0];
            }
            else {
                if (item.is_income) {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.HIDDEN');
                }
                else {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
                }
            }
        }
        else if (item.tx_type === 6 && item.height === 0) {
            return 'unknown';
        }
        else if (item.tx_type === 9) {
            if (item.hasOwnProperty('contract') && item.contract[0].is_a) {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_BUYER');
            }
            else {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_SELLER');
            }
        }
        else {
            switch (item.tx_type) {
                // case 0:
                //   return '';
                // case 1:
                //   return '';
                // case 2:
                //   return '';
                // case 3:
                //   return '';
                case 4:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_ALIAS');
                case 5:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UPDATE_ALIAS');
                case 6:
                    return (item.td['spn'] && item.td['spn'].length) ? this.translate.instant('HISTORY.TYPE_MESSAGES.POS_REWARD') : this.translate.instant('HISTORY.TYPE_MESSAGES.POW_REWARD');
                case 7:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_CONTRACT');
                case 8:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PLEDGE_CONTRACT');
                // case 9:
                //   return '';
                case 10:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.NULLIFY_CONTRACT');
                case 11:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PROPOSAL_CANCEL_CONTRACT');
                case 12:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CANCEL_CONTRACT');
            }
        }
        return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
    };
    HistoryTypeMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'historyTypeMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], HistoryTypeMessagesPipe);
    return HistoryTypeMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/int-to-money.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/int-to-money.pipe.ts ***!
  \*****************************************************/
/*! exports provided: IntToMoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntToMoneyPipe", function() { return IntToMoneyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntToMoneyPipe = /** @class */ (function () {
    function IntToMoneyPipe(variablesService) {
        this.variablesService = variablesService;
    }
    IntToMoneyPipe.prototype.transform = function (value, args) {
        if (value === 0 || value === undefined) {
            return '0';
        }
        var maxFraction = this.variablesService.digits;
        if (args) {
            maxFraction = parseInt(args, 10);
        }
        var power = Math.pow(10, this.variablesService.digits);
        var str = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](value)).div(power).toFixed(maxFraction);
        for (var i = str.length - 1; i >= 0; i--) {
            if (str[i] !== '0') {
                str = str.substr(0, i + 1);
                break;
            }
        }
        if (str[str.length - 1] === '.') {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    IntToMoneyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'intToMoney'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], IntToMoneyPipe);
    return IntToMoneyPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/money-to-int.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/money-to-int.pipe.ts ***!
  \*****************************************************/
/*! exports provided: MoneyToIntPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyToIntPipe", function() { return MoneyToIntPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoneyToIntPipe = /** @class */ (function () {
    function MoneyToIntPipe(variablesService) {
        this.variablesService = variablesService;
    }
    MoneyToIntPipe.prototype.transform = function (value, args) {
        var CURRENCY_DISPLAY_DECIMAL_POINT = this.variablesService.digits;
        var result;
        if (value) {
            var am_str = value.toString().trim();
            var point_index = am_str.indexOf('.');
            var fraction_size = 0;
            if (-1 !== point_index) {
                fraction_size = am_str.length - point_index - 1;
                while (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size && '0' === am_str[am_str.length - 1]) {
                    am_str = am_str.slice(0, am_str.length - 1);
                    --fraction_size;
                }
                if (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size) {
                    return undefined;
                }
                am_str = am_str.slice(0, point_index) + am_str.slice(point_index + 1, am_str.length);
            }
            else {
                fraction_size = 0;
            }
            if (!am_str.length) {
                return undefined;
            }
            if (fraction_size < CURRENCY_DISPLAY_DECIMAL_POINT) {
                for (var i = 0; i !== CURRENCY_DISPLAY_DECIMAL_POINT - fraction_size; i++) {
                    am_str = am_str + '0';
                }
            }
            result = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](am_str)).integerValue();
        }
        return result;
    };
    MoneyToIntPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'moneyToInt'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], MoneyToIntPipe);
    return MoneyToIntPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/safe-html.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/pipes/safe-html.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHTMLPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHTML'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/services/backend.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/services/backend.service.ts ***!
  \******************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var json_bignumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! json-bignumber */ "./node_modules/json-bignumber/src/JSONBigNumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BackendService = /** @class */ (function () {
    function BackendService(translate, variablesService, modalService, moneyToIntPipe) {
        this.translate = translate;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToIntPipe = moneyToIntPipe;
        this.backendLoaded = false;
    }
    BackendService_1 = BackendService;
    BackendService.bigNumberParser = function (key, val) {
        if (val.constructor.name === 'BigNumber' && ['balance', 'unlocked_balance', 'amount', 'fee', 'b_fee', 'to_pay', 'a_pledge', 'b_pledge', 'coast', 'a'].indexOf(key) === -1) {
            return val.toNumber();
        }
        if (key === 'rcv' || key === 'spn') {
            for (var i = 0; i < val.length; i++) {
                val[i] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](val[i]);
            }
        }
        return val;
    };
    BackendService.Debug = function (type, message) {
        switch (type) {
            case 0:
                console.error(message);
                break;
            case 1:
                console.warn(message);
                break;
            case 2:
                console.log(message);
                break;
            default:
                console.log(message);
                break;
        }
    };
    BackendService.prototype.informerRun = function (error, params, command) {
        var error_translate = '';
        switch (error) {
            case 'NOT_ENOUGH_MONEY':
                error_translate = 'ERRORS.NOT_ENOUGH_MONEY';
                // error_translate = 'ERRORS.NO_MONEY'; maybe that one?
                if (command === 'cancel_offer') {
                    error_translate = this.translate.instant('ERRORS.NO_MONEY_REMOVE_OFFER', {
                        'fee': this.variablesService.default_fee,
                        'currency': this.variablesService.defaultCurrency
                    });
                }
                break;
            case 'CORE_BUSY':
                error_translate = 'ERRORS.CORE_BUSY';
                break;
            case 'BUSY':
                error_translate = 'ERRORS.DAEMON_BUSY';
                break;
            case 'OVERFLOW':
                if (command !== 'get_all_aliases') {
                    error_translate = '';
                }
                break;
            case 'NOT_ENOUGH_OUTPUTS_FOR_MIXING':
                error_translate = 'ERRORS.NOT_ENOUGH_OUTPUTS_TO_MIX';
                break;
            case 'TX_IS_TOO_BIG':
                error_translate = 'ERRORS.TRANSACTION_IS_TO_BIG';
                break;
            case 'DISCONNECTED':
                error_translate = 'ERRORS.TRANSFER_ATTEMPT';
                break;
            case 'ACCESS_DENIED':
                error_translate = 'ERRORS.ACCESS_DENIED';
                break;
            case 'TX_REJECTED':
                // if (command === 'request_alias_registration') {
                // error_translate = 'INFORMER.ALIAS_IN_REGISTER';
                // } else {
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                // }
                break;
            case 'INTERNAL_ERROR':
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                break;
            case 'BAD_ARG':
                error_translate = 'ERRORS.BAD_ARG';
                break;
            case 'WALLET_WRONG_ID':
                error_translate = 'ERRORS.WALLET_WRONG_ID';
                break;
            case 'WALLET_WATCH_ONLY_NOT_SUPPORTED':
                error_translate = 'ERRORS.WALLET_WATCH_ONLY_NOT_SUPPORTED';
                break;
            case 'WRONG_PASSWORD':
                params = JSON.parse(params);
                if (!params.testEmpty) {
                    error_translate = 'ERRORS.WRONG_PASSWORD';
                }
                break;
            case 'FILE_RESTORED':
                if (command === 'open_wallet') {
                    error_translate = 'ERRORS.FILE_RESTORED';
                }
                break;
            case 'FILE_NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'CANCELED':
            case '':
                break;
            case 'FAIL':
                if (command === 'create_proposal' || command === 'accept_proposal' || command === 'release_contract' || command === 'request_cancel_contract' || command === 'accept_cancel_contract') {
                    error_translate = ' ';
                }
                break;
            case 'ALREADY_EXISTS':
                error_translate = 'ERRORS.FILE_EXIST';
                break;
            case 'FAILED':
                BackendService_1.Debug(0, "Error: (" + error + ") was triggered by command: " + command);
                break;
            default:
                error_translate = '';
        }
        if (error.indexOf('FAIL:failed to save file') > -1) {
            error_translate = 'ERRORS.FILE_NOT_SAVED';
        }
        if (error.indexOf('FAILED:failed to open binary wallet file for saving') > -1 && command === 'generate_wallet') {
            error_translate = '';
        }
        if (error_translate !== '') {
            this.modalService.prepareModal('error', error_translate);
        }
    };
    BackendService.prototype.commandDebug = function (command, params, result) {
        BackendService_1.Debug(2, '----------------- ' + command + ' -----------------');
        var debug = {
            _send_params: params,
            _result: result
        };
        BackendService_1.Debug(2, debug);
        try {
            BackendService_1.Debug(2, json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(result, BackendService_1.bigNumberParser));
        }
        catch (e) {
            BackendService_1.Debug(2, { response_data: result, error_code: 'OK' });
        }
    };
    BackendService.prototype.backendCallback = function (resultStr, params, callback, command) {
        var _this = this;
        var Result = resultStr;
        if (command !== 'get_clipboard') {
            if (!resultStr || resultStr === '') {
                Result = {};
            }
            else {
                try {
                    Result = json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(resultStr, BackendService_1.bigNumberParser);
                }
                catch (e) {
                    Result = { response_data: resultStr, error_code: 'OK' };
                }
            }
        }
        else {
            Result = {
                error_code: 'OK',
                response_data: Result
            };
        }
        var core_busy = Result.error_code === 'CORE_BUSY';
        var Status = (Result.error_code === 'OK' || Result.error_code === 'TRUE');
        if (!Status && Status !== undefined && Result.error_code !== undefined) {
            BackendService_1.Debug(1, 'API error for command: "' + command + '". Error code: ' + Result.error_code);
        }
        var data = ((typeof Result === 'object') && 'response_data' in Result) ? Result.response_data : Result;
        var res_error_code = false;
        if (typeof Result === 'object' && 'error_code' in Result && Result.error_code !== 'OK' && Result.error_code !== 'TRUE' && Result.error_code !== 'FALSE' && Result.error_code !== 'WRAP') {
            if (core_busy) {
                setTimeout(function () {
                    // this is will avoid update data when user
                    // on other wallet after CORE_BUSY (blink of data)
                    if (command !== 'get_recent_transfers') {
                        _this.runCommand(command, params, callback);
                    }
                    else {
                        var current_wallet_id = _this.variablesService.currentWallet.wallet_id;
                        if (current_wallet_id === params.wallet_id) {
                            _this.runCommand(command, params, callback);
                        }
                    }
                }, 50);
            }
            else {
                this.informerRun(Result.error_code, params, command);
                res_error_code = Result.error_code;
            }
        }
        // if ( command === 'get_offers_ex' ){
        //   Service.printLog( "get_offers_ex offers count "+((data.offers)?data.offers.length:0) );
        // }
        if (!core_busy) {
            if (typeof callback === 'function') {
                callback(Status, data, res_error_code);
            }
            else {
                return data;
            }
        }
    };
    BackendService.prototype.runCommand = function (command, params, callback) {
        if (this.backendObject) {
            if (command === 'get_recent_transfers') {
                this.variablesService.get_recent_transfers = true;
            }
            var Action = this.backendObject[command];
            if (!Action) {
                BackendService_1.Debug(0, 'Run Command Error! Command "' + command + '" don\'t found in backendObject');
            }
            else {
                var that_1 = this;
                params = (typeof params === 'string') ? params : json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].stringify(params);
                if (params === undefined || params === '{}') {
                    if (command === 'get_recent_transfers') {
                        this.variablesService.get_recent_transfers = false;
                    }
                    Action(function (resultStr) {
                        that_1.commandDebug(command, params, resultStr);
                        return that_1.backendCallback(resultStr, params, callback, command);
                    });
                }
                else {
                    Action(params, function (resultStr) {
                        that_1.commandDebug(command, params, resultStr);
                        return that_1.backendCallback(resultStr, params, callback, command);
                    });
                }
            }
        }
    };
    BackendService.prototype.eventSubscribe = function (command, callback) {
        if (command === 'on_core_event') {
            this.backendObject[command].connect(callback);
        }
        else {
            this.backendObject[command].connect(function (str) {
                callback(json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(str, BackendService_1.bigNumberParser));
            });
        }
    };
    BackendService.prototype.initService = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            if (!_this.backendLoaded) {
                _this.backendLoaded = true;
                var that_2 = _this;
                window.QWebChannel(window.qt.webChannelTransport, function (channel) {
                    that_2.backendObject = channel.objects.mediator_object;
                    observer.next('ok');
                });
            }
            else {
                if (!_this.backendObject) {
                    observer.error('error');
                    observer.error('error');
                }
            }
        });
    };
    BackendService.prototype.webkitLaunchedScript = function () {
        return this.runCommand('webkit_launched_script');
    };
    BackendService.prototype.quitRequest = function () {
        return this.runCommand('on_request_quit');
    };
    BackendService.prototype.getAppData = function (callback) {
        this.runCommand('get_app_data', {}, callback);
    };
    BackendService.prototype.storeAppData = function (callback) {
        var _this = this;
        if (this.variablesService.wallets.length) {
            this.variablesService.settings.wallets = [];
            this.variablesService.wallets.forEach(function (wallet) {
                _this.variablesService.settings.wallets.push({ name: wallet.name, path: wallet.path });
            });
        }
        this.runCommand('store_app_data', this.variablesService.settings, callback);
    };
    BackendService.prototype.getSecureAppData = function (pass, callback) {
        this.runCommand('get_secure_app_data', pass, callback);
    };
    BackendService.prototype.setMasterPassword = function (pass, callback) {
        this.runCommand('set_master_password', pass, callback);
    };
    BackendService.prototype.checkMasterPassword = function (pass, callback) {
        this.runCommand('check_master_password', pass, callback);
    };
    BackendService.prototype.getIsDisabledNotifications = function (callback) {
        var params = {};
        this.runCommand('get_is_disabled_notifications', params, callback);
    };
    BackendService.prototype.setIsDisabledNotifications = function (state) {
        this.runCommand('set_is_disabled_notifications', state);
    };
    BackendService.prototype.storeSecureAppData = function (callback) {
        var _this = this;
        var data;
        var wallets = [];
        var contacts = [];
        this.variablesService.wallets.forEach(function (wallet) {
            wallets.push({ name: wallet.name, pass: wallet.pass, path: wallet.path, staking: wallet.staking });
        });
        this.variablesService.contacts.forEach(function (contact) {
            contacts.push({ name: contact.name, address: contact.address, notes: contact.notes });
        });
        data = { wallets: wallets, contacts: contacts };
        this.backendObject['store_secure_app_data'](JSON.stringify(data), this.variablesService.appPass, function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'store_secure_app_data');
        });
    };
    BackendService.prototype.dropSecureAppData = function (callback) {
        var _this = this;
        this.backendObject['drop_secure_app_data'](function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'drop_secure_app_data');
        });
    };
    BackendService.prototype.haveSecureAppData = function (callback) {
        this.runCommand('have_secure_app_data', {}, callback);
    };
    BackendService.prototype.saveFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_savefile_dialog', params, callback);
    };
    BackendService.prototype.openFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_openfile_dialog', params, callback);
    };
    BackendService.prototype.storeFile = function (path, buff) {
        this.backendObject['store_to_file'](path, buff);
    };
    BackendService.prototype.loadFile = function (path, callback) {
        this.runCommand('load_from_file', path, callback);
    };
    BackendService.prototype.push_offer = function (params, callback) {
        this.runCommand('push_offer', params, callback);
    };
    BackendService.prototype.cancel_offer = function (params, callback) {
        this.runCommand('cancel_offer', params, callback);
    };
    BackendService.prototype.generateWallet = function (path, pass, callback) {
        var params = {
            path: path,
            pass: pass
        };
        this.runCommand('generate_wallet', params, callback);
    };
    BackendService.prototype.exportWalletHistory = function (json_string) {
        this.runCommand('export_wallet_history', json_string);
    };
    BackendService.prototype.openWallet = function (path, pass, txs_to_return, testEmpty, callback) {
        var params = {
            path: path,
            pass: pass,
            txs_to_return: txs_to_return
        };
        params['testEmpty'] = !!(testEmpty);
        this.runCommand('open_wallet', params, callback);
    };
    BackendService.prototype.closeWallet = function (wallet_id, callback) {
        this.runCommand('close_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.getSmartWalletInfo = function (_a, callback) {
        var wallet_id = _a.wallet_id, seed_password = _a.seed_password;
        this.runCommand('get_smart_wallet_info', { wallet_id: +wallet_id, seed_password: seed_password }, callback);
    };
    BackendService.prototype.getSeedPhraseInfo = function (param, callback) {
        this.runCommand('get_seed_phrase_info', param, callback);
    };
    BackendService.prototype.runWallet = function (wallet_id, callback) {
        this.runCommand('run_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.isValidRestoreWalletText = function (param, callback) {
        this.runCommand('is_valid_restore_wallet_text', param, callback);
    };
    BackendService.prototype.restoreWallet = function (path, pass, seed_phrase, seed_pass, callback) {
        var params = {
            seed_phrase: seed_phrase,
            path: path,
            pass: pass,
            seed_pass: seed_pass
        };
        this.runCommand('restore_wallet', params, callback);
    };
    BackendService.prototype.sendMoney = function (from_wallet_id, to_address, amount, fee, mixin, comment, hide, callback) {
        var params = {
            wallet_id: parseInt(from_wallet_id, 10),
            destinations: [
                {
                    address: to_address,
                    amount: amount
                }
            ],
            mixin_count: (mixin) ? parseInt(mixin, 10) : 0,
            lock_time: 0,
            fee: this.moneyToIntPipe.transform(fee),
            comment: comment,
            push_payer: !hide
        };
        this.runCommand('transfer', params, callback);
    };
    BackendService.prototype.validateAddress = function (address, callback) {
        this.runCommand('validate_address', address, callback);
    };
    BackendService.prototype.setClipboard = function (str, callback) {
        return this.runCommand('set_clipboard', str, callback);
    };
    BackendService.prototype.getClipboard = function (callback) {
        return this.runCommand('get_clipboard', {}, callback);
    };
    BackendService.prototype.createProposal = function (wallet_id, title, comment, a_addr, b_addr, to_pay, a_pledge, b_pledge, time, payment_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            details: {
                t: title,
                c: comment,
                a_addr: a_addr,
                b_addr: b_addr,
                to_pay: this.moneyToIntPipe.transform(to_pay),
                a_pledge: this.moneyToIntPipe.transform(a_pledge),
                b_pledge: this.moneyToIntPipe.transform(b_pledge)
            },
            payment_id: payment_id,
            expiration_period: parseInt(time, 10) * 60 * 60,
            fee: this.variablesService.default_fee_big,
            b_fee: this.variablesService.default_fee_big
        };
        BackendService_1.Debug(1, params);
        this.runCommand('create_proposal', params, callback);
    };
    BackendService.prototype.getContracts = function (wallet_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10)
        };
        BackendService_1.Debug(1, params);
        this.runCommand('get_contracts', params, callback);
    };
    BackendService.prototype.acceptProposal = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_proposal', params, callback);
    };
    BackendService.prototype.releaseProposal = function (wallet_id, contract_id, release_type, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            release_type: release_type // "normal" or "burn"
        };
        BackendService_1.Debug(1, params);
        this.runCommand('release_contract', params, callback);
    };
    BackendService.prototype.requestCancelContract = function (wallet_id, contract_id, time, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            fee: this.variablesService.default_fee_big,
            expiration_period: parseInt(time, 10) * 60 * 60
        };
        BackendService_1.Debug(1, params);
        this.runCommand('request_cancel_contract', params, callback);
    };
    BackendService.prototype.acceptCancelContract = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_cancel_contract', params, callback);
    };
    BackendService.prototype.getMiningHistory = function (wallet_id, callback) {
        this.runCommand('get_mining_history', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.startPosMining = function (wallet_id, callback) {
        this.runCommand('start_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.stopPosMining = function (wallet_id, callback) {
        this.runCommand('stop_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.openUrlInBrowser = function (url, callback) {
        this.runCommand('open_url_in_browser', url, callback);
    };
    BackendService.prototype.start_backend = function (node, host, port, callback) {
        var params = {
            configure_for_remote_node: node,
            remote_node_host: host,
            remote_node_port: parseInt(port, 10)
        };
        this.runCommand('start_backend', params, callback);
    };
    BackendService.prototype.getDefaultFee = function (callback) {
        this.runCommand('get_default_fee', {}, callback);
    };
    BackendService.prototype.setBackendLocalization = function (stringsArray, title, callback) {
        var params = {
            strings: stringsArray,
            language_title: title
        };
        this.runCommand('set_localization_strings', params, callback);
    };
    BackendService.prototype.registerAlias = function (wallet_id, alias, address, fee, comment, reward, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias,
                address: address,
                tracking_key: '',
                comment: comment
            },
            fee: this.moneyToIntPipe.transform(fee),
            reward: this.moneyToIntPipe.transform(reward)
        };
        this.runCommand('request_alias_registration', params, callback);
    };
    BackendService.prototype.updateAlias = function (wallet_id, alias, fee, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias.name.replace('@', ''),
                address: alias.address,
                tracking_key: '',
                comment: alias.comment
            },
            fee: this.moneyToIntPipe.transform(fee)
        };
        this.runCommand('request_alias_update', params, callback);
    };
    BackendService.prototype.getAllAliases = function (callback) {
        this.runCommand('get_all_aliases', {}, callback);
    };
    BackendService.prototype.getAliasByName = function (value, callback) {
        return this.runCommand('get_alias_info_by_name', value, callback);
    };
    BackendService.prototype.getAliasByAddress = function (value, callback) {
        return this.runCommand('get_alias_info_by_address', value, callback);
    };
    BackendService.prototype.getAliasCoast = function (alias, callback) {
        this.runCommand('get_alias_coast', { v: alias }, callback);
    };
    BackendService.prototype.resyncWallet = function (id) {
        this.runCommand('resync_wallet', { wallet_id: id });
    };
    BackendService.prototype.getWalletAlias = function (address) {
        var _this = this;
        if (address !== null && this.variablesService.daemon_state === 2) {
            if (this.variablesService.aliasesChecked[address] == null) {
                this.variablesService.aliasesChecked[address] = {};
                if (this.variablesService.aliases.length) {
                    for (var i = 0, length_1 = this.variablesService.aliases.length; i < length_1; i++) {
                        if (i in this.variablesService.aliases && this.variablesService.aliases[i]['address'] === address) {
                            this.variablesService.aliasesChecked[address]['name'] = this.variablesService.aliases[i].name;
                            this.variablesService.aliasesChecked[address]['address'] = this.variablesService.aliases[i].address;
                            this.variablesService.aliasesChecked[address]['comment'] = this.variablesService.aliases[i].comment;
                            return this.variablesService.aliasesChecked[address];
                        }
                    }
                }
                this.getAliasByAddress(address, function (status, data) {
                    if (status) {
                        _this.variablesService.aliasesChecked[data.address]['name'] = '@' + data.alias;
                        _this.variablesService.aliasesChecked[data.address]['address'] = data.address;
                        _this.variablesService.aliasesChecked[data.address]['comment'] = data.comment;
                    }
                });
            }
            return this.variablesService.aliasesChecked[address];
        }
        return {};
    };
    BackendService.prototype.getContactAlias = function () {
        var _this = this;
        if (this.variablesService.contacts.length && this.variablesService.daemon_state === 2) {
            this.variablesService.contacts.map(function (contact) {
                _this.getAliasByAddress(contact.address, function (status, data) {
                    if (status) {
                        if (data.alias) {
                            contact.alias = '@' + data.alias;
                        }
                    }
                    else {
                        contact.alias = null;
                    }
                });
            });
        }
    };
    BackendService.prototype.getRecentTransfers = function (id, offset, count, exclude_mining_txs, callback) {
        var params = {
            wallet_id: id,
            offset: offset,
            count: count,
            exclude_mining_txs: exclude_mining_txs
        };
        this.runCommand('get_recent_transfers', params, callback);
    };
    BackendService.prototype.getWalletInfo = function (wallet_id, callback) {
        this.runCommand('get_wallet_info', { wallet_id: wallet_id }, callback);
    };
    BackendService.prototype.getPoolInfo = function (callback) {
        this.runCommand('get_tx_pool_info', {}, callback);
    };
    BackendService.prototype.getVersion = function (callback) {
        var _this = this;
        this.runCommand('get_version', {}, function (status, version) {
            _this.runCommand('get_network_type', {}, function (status, type) {
                callback(version, type);
            });
        });
    };
    BackendService.prototype.setLogLevel = function (level) {
        return this.runCommand('set_log_level', { v: level });
    };
    var BackendService_1;
    BackendService = BackendService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__["MoneyToIntPipe"]])
    ], BackendService);
    return BackendService;
}());

/*

      toggleAutoStart: function (value) {
        return this.runCommand('toggle_autostart', asVal(value));
      },

      getOptions: function (callback) {
        return this.runCommand('get_options', {}, callback);
      },

      isFileExist: function (path, callback) {
        return this.runCommand('is_file_exist', path, callback);
      },

      isAutoStartEnabled: function (callback) {
        this.runCommand('is_autostart_enabled', {}, function (status, data) {
          if (angular.isFunction(callback)) {
            callback('error_code' in data && data.error_code !== 'FALSE')
          }
        });
      },

      resetWalletPass: function (wallet_id, pass, callback) {
        this.runCommand('reset_wallet_password', {wallet_id: wallet_id, pass: pass}, callback);
      },



      getOsVersion: function (callback) {
        this.runCommand('get_os_version', {}, function (status, version) {
          callback(version)
        })
      },

      getLogFile: function (callback) {
        this.runCommand('get_log_file', {}, function (status, version) {
          callback(version)
        })
      },

      resync_wallet: function (wallet_id, callback) {
        this.runCommand('resync_wallet', {wallet_id: wallet_id}, callback);
      },

      storeFile: function (path, buff, callback) {
        this.backendObject['store_to_file'](path, (typeof buff === 'string' ? buff : JSON.stringify(buff)), function (data) {
          backendCallback(data, {}, callback, 'store_to_file');
        });
      },

      getMiningEstimate: function (amount_coins, time, callback) {
        var params = {
          "amount_coins": $filter('money_to_int')(amount_coins),
          "time": parseInt(time)
        };
        this.runCommand('get_mining_estimate', params, callback);
      },

      backupWalletKeys: function (wallet_id, path, callback) {
        var params = {
          "wallet_id": wallet_id,
          "path": path
        };
        this.runCommand('backup_wallet_keys', params, callback);
      },

      setBlockedIcon: function (enabled, callback) {
        var mode = (enabled) ? "blocked" : "normal";
        Service.runCommand('bool_toggle_icon', mode, callback);
      },

      getWalletInfo: function (wallet_id, callback) {
        this.runCommand('get_wallet_info', {wallet_id: wallet_id}, callback);
      },

      printText: function (content) {
        return this.runCommand('print_text', {html_text: content});
      },

      printLog: function (msg, log_level) {
        return this.runCommand('print_log', {msg: msg, log_level: log_level});
      },

*/


/***/ }),

/***/ "./src/app/_helpers/services/modal.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/modal.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/modal-container/modal-container.component */ "./src/app/_helpers/modals/modal-container/modal-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, appRef, injector, ngZone, translate) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.ngZone = ngZone;
        this.translate = translate;
        this.components = [];
    }
    ModalService.prototype.prepareModal = function (type, message) {
        var _this = this;
        var length = this.components.push(this.componentFactoryResolver.resolveComponentFactory(_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponent"]).create(this.injector));
        this.components[length - 1].instance['type'] = type;
        this.components[length - 1].instance['message'] = message.length ? this.translate.instant(message) : '';
        this.components[length - 1].instance['close'].subscribe(function () {
            _this.removeModal(length - 1);
        });
        this.ngZone.run(function () {
            _this.appendModal(length - 1);
        });
    };
    ModalService.prototype.appendModal = function (index) {
        this.appRef.attachView(this.components[index].hostView);
        var domElem = this.components[index].hostView.rootNodes[0];
        document.body.appendChild(domElem);
    };
    ModalService.prototype.removeModal = function (index) {
        if (this.components[index]) {
            this.appRef.detachView(this.components[index].hostView);
            this.components[index].destroy();
            this.components.splice(index, 1);
        }
        else {
            var last = this.components.length - 1;
            this.appRef.detachView(this.components[last].hostView);
            this.components[last].destroy();
            this.components.splice(last, 1);
        }
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/pagination.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_helpers/services/pagination.service.ts ***!
  \*********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _pagination_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaginationService = /** @class */ (function () {
    function PaginationService(variables, ngZone, paginationStore) {
        this.variables = variables;
        this.ngZone = ngZone;
        this.paginationStore = paginationStore;
    }
    PaginationService.prototype.paginate = function (currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > this.variables.currentWallet.totalPages) {
            currentPage = this.variables.currentWallet.totalPages;
        }
        var startPage, endPage;
        if (this.variables.currentWallet.totalPages <= this.variables.maxPages) {
            startPage = 1;
            endPage = this.variables.currentWallet.totalPages;
        }
        else {
            var maxPagesBeforeCurrentPage = Math.floor(this.variables.maxPages / 2);
            var maxPagesAfterCurrentPage = Math.ceil(this.variables.maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                this.variables.currentWallet.totalPages > this.variables.maxPages
                    ? endPage = this.variables.maxPages
                    : endPage = this.variables.currentWallet.totalPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= this.variables.currentWallet.totalPages) {
                startPage = this.variables.currentWallet.totalPages - this.variables.maxPages + 1;
                endPage = this.variables.currentWallet.totalPages;
            }
            else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        this.ngZone.run(function () {
            _this.variables.currentWallet.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        });
    };
    PaginationService.prototype.getOffset = function (walletID) {
        var mining = this.variables.currentWallet.exclude_mining_txs;
        var currentPage = (this.variables.currentWallet.currentPage);
        var offset = ((currentPage - 1) * this.variables.count);
        if (!mining) {
            return offset;
        }
        var value = this.paginationStore.value;
        var pages = value.filter(function (item) { return item.walletID === walletID; });
        if (pages && pages.length) {
            var max = lodash__WEBPACK_IMPORTED_MODULE_3__["maxBy"](pages, 'page');
            var isForward = this.paginationStore.isForward(pages, currentPage);
            if (isForward) {
                offset = max.offset;
            }
            else {
                var index = pages.findIndex(function (item) { return item.page === (currentPage); });
                offset = pages[index].offset;
            }
        }
        return offset;
    };
    PaginationService.prototype.calcPages = function (data) {
        if (data.total_history_items && (data && data.history)) {
            this.variables.currentWallet.totalPages = Math.ceil(data.total_history_items / this.variables.count);
            this.variables.currentWallet.totalPages > this.variables.maxPages
                ? this.variables.currentWallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                : this.variables.currentWallet.pages =
                    new Array(this.variables.currentWallet.totalPages).fill(1).map(function (value, index) { return value + index; });
        }
        else if (this.variables.currentWallet.restore) {
            this.variables.currentWallet.totalPages = Math.ceil(data.history.length / this.variables.count);
            this.variables.currentWallet.totalPages > this.variables.maxPages
                ? this.variables.currentWallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                : this.variables.currentWallet.pages =
                    new Array(this.variables.currentWallet.totalPages).fill(1).map(function (value, index) { return value + index; });
        }
    };
    PaginationService.prototype.prepareHistory = function (data, status) {
        var _this = this;
        if (status && (data && data.total_history_items)) {
            this.variables.currentWallet.history.splice(0, this.variables.currentWallet.history.length);
            this.ngZone.run(function () {
                _this.paginate(_this.variables.currentWallet.currentPage);
                if (data.history.length !== 0) {
                    _this.variables.currentWallet.restore = false;
                    _this.variables.currentWallet.total_history_item = data.total_history_items;
                    _this.variables.currentWallet.prepareHistory(data.history);
                    if (_this.variables.currentWallet.currentPage === 1 && data.unconfirmed) {
                        _this.variables.currentWallet.prepareHistory(data.unconfirmed);
                    }
                }
            });
        }
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _pagination_store__WEBPACK_IMPORTED_MODULE_2__["PaginationStore"]])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/pagination.store.ts":
/*!*******************************************************!*\
  !*** ./src/app/_helpers/services/pagination.store.ts ***!
  \*******************************************************/
/*! exports provided: PaginationStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationStore", function() { return PaginationStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationStore = /** @class */ (function () {
    function PaginationStore() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pages$ = this.subject.asObservable();
    }
    PaginationStore.prototype.isForward = function (pages, currentPage) {
        var max = lodash__WEBPACK_IMPORTED_MODULE_2__["maxBy"](pages, 'page');
        return !max || max.page < currentPage || max.page === currentPage;
    };
    PaginationStore.prototype.setPage = function (pageNumber, offset, walletID) {
        var newPages = [];
        var pages = this.subject.getValue();
        if (pages && pages.length) {
            newPages = pages.slice(0);
        }
        newPages.push({ page: pageNumber, offset: offset, walletID: walletID });
        this.subject.next(newPages);
    };
    Object.defineProperty(PaginationStore.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    PaginationStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationStore);
    return PaginationStore;
}());



/***/ }),

/***/ "./src/app/_helpers/services/utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/utils.service.ts ***!
  \****************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getMinWidthByScale = function (scale) {
        switch (scale) {
            case 6: return 800;
            case 8: return 1100;
            case 10: return 1400;
            case 12: return 1700;
            default: return 1100;
        }
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/variables.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/services/variables.service.ts ***!
  \********************************************************/
/*! exports provided: VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var idlejs_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idlejs/dist */ "./node_modules/idlejs/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VariablesService = /** @class */ (function () {
    function VariablesService(router, ngZone, contextMenuService) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.contextMenuService = contextMenuService;
        this.request_on_in = {};
        this.stop_paginate = {};
        this.sync_started = false;
        this.digits = 12;
        this.appPass = '';
        this.appLogin = false;
        this.moneyEquivalent = 0;
        this.moneyEquivalentPercent = 0;
        this.defaultCurrency = 'NiR';
        this.exp_med_ts = 0;
        this.net_time_delta_median = 0;
        this.height_app = 0;
        this.height_max = 0;
        this.downloaded = 0;
        this.pos_on1 = 1597;
        this.pos_on2 = 2584;
        this.pos_on3 = 4181;
        this.pos_on4 = 6765;
        this.pos_on5 = 10946;
        this.pos_height1 = 121393;
        this.pos_height2 = 196418;
        this.pos_height3 = 317811;
        this.pos_height4 = 514229;
        this.pos_height5 = 832040;
        this.total = 0;
        this.last_build_available = '';
        this.last_build_displaymode = 0;
        this.daemon_state = 3;
        this.deeplink$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.sendActionData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.sync = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.download = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.get_recent_transfers = false; // avoid of execute function before collback complete
        this.default_fee = '0.001618000000';
        this.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"]('10000000000');
        this.settings = {
            appLockTime: 15,
            appLog: 0,
            scale: 8,
            language: 'en',
            default_path: '/',
            viewedContracts: [],
            notViewedContracts: [],
            wallets: []
        };
        this.count = 40;
        this.maxPages = 5;
        this.testnet = false;
        this.networkType = ''; // testnet of mainnet
        this.wallets = [];
        this.aliases = [];
        this.aliasesChecked = {};
        this.enableAliasSearch = false;
        this.maxWalletNameLength = 25;
        this.maxCommentLength = 255;
        this.dataIsLoaded = false;
        this.contacts = [];
        this.newContact = { name: null, address: null, notes: null };
        this.pattern = '^[a-zA-Z0-9_.\\\]\*\|\~\!\?\@\#\$\%\^\&\+\{\}\(\)\<\>\:\;\"\'\-\=\/\,\[\\\\]*$';
        this.after_sync_request = {};
        this.getExpMedTsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightMaxEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getDownloadedAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getTotalEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getRefreshStackingEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getAliasChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getWalletChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.idle = new idlejs_dist__WEBPACK_IMPORTED_MODULE_2__["Idle"]()
            .whenNotInteractive()
            .do(function () {
            if (_this.appPass == '') {
                _this.restartCountdown();
            }
            else {
                _this.ngZone.run(function () {
                    _this.idle.stop();
                    _this.appPass = '';
                    _this.appLogin = false;
                    _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                });
            }
        });
    }
    VariablesService.prototype.setExpMedTs = function (timestamp) {
        if (timestamp !== this.exp_med_ts) {
            this.exp_med_ts = timestamp;
            this.getExpMedTsEvent.next(timestamp);
        }
    };
    VariablesService.prototype.setHeightApp = function (height) {
        if (height !== this.height_app) {
            this.height_app = height;
            this.getHeightAppEvent.next(height);
        }
    };
    VariablesService.prototype.setHeightMax = function (height) {
        if (height !== this.height_max) {
            this.height_max = height;
            this.getHeightMaxEvent.next(height);
        }
    };
    VariablesService.prototype.setDownloadedBytes = function (bytes) {
        if (bytes !== this.downloaded) {
            this.downloaded = this.bytesToMb(bytes);
            this.getDownloadedAppEvent.next(bytes);
        }
    };
    VariablesService.prototype.setTotalBytes = function (bytes) {
        if (bytes !== this.total) {
            this.total = this.bytesToMb(bytes);
            this.getTotalEvent.next(bytes);
        }
    };
    VariablesService.prototype.setRefreshStacking = function (wallet_id) {
        this.getHeightAppEvent.next(wallet_id);
    };
    VariablesService.prototype.changeAliases = function () {
        this.getAliasChangedEvent.next(true);
    };
    VariablesService.prototype.setCurrentWallet = function (id) {
        var _this = this;
        this.wallets.forEach(function (wallet) {
            if (wallet.wallet_id === id) {
                _this.currentWallet = wallet;
                _this.getWalletChangedEvent.next(wallet);
            }
        });
    };
    VariablesService.prototype.getWallet = function (id) {
        for (var i = 0; i < this.wallets.length; i++) {
            if (this.wallets[i].wallet_id === id) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.getNotLoadedWallet = function () {
        for (var i = 0; i < this.wallets.length; i++) {
            if (!this.wallets[i].loaded) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.startCountdown = function () {
        this.idle.within(this.settings.appLockTime).start();
    };
    VariablesService.prototype.stopCountdown = function () {
        this.idle.stop();
    };
    VariablesService.prototype.restartCountdown = function () {
        this.idle.within(this.settings.appLockTime).restart();
    };
    VariablesService.prototype.bytesToMb = function (bytes) {
        return Number((bytes / Math.pow(1024, 2)).toFixed(1));
    };
    VariablesService.prototype.onContextMenu = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.allContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService.prototype.onContextMenuOnlyCopy = function ($event, copyText) {
        this.contextMenuService.show.next({
            contextMenu: this.onlyCopyContextMenu,
            event: $event,
            item: copyText
        });
        $event.preventDefault();
        $event.stopPropagation();
    };
    VariablesService.prototype.onContextMenuPasteSelect = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        console.warn($event.target);
        console.warn($event.target['disabled']);
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.pasteSelectContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenuService"]])
    ], VariablesService);
    return VariablesService;
}());



/***/ }),

/***/ "./src/app/_shared/constants.ts":
/*!**************************************!*\
  !*** ./src/app/_shared/constants.ts ***!
  \**************************************/
/*! exports provided: MIXIN, RCV_ADDR_QR_SCALE, AUDITABLE_WALLET_HELP_PAGE, CREATE_NEW_WALLET_HELP_PAGE, LOCKED_BALANCE_HELP_PAGE, DOWNLOADS_PAGE_URL, BLOCK_EXPLORER_TX_URL_PREFIX, BLOCK_EXPLORER_TN_TX_URL_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIXIN", function() { return MIXIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RCV_ADDR_QR_SCALE", function() { return RCV_ADDR_QR_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDITABLE_WALLET_HELP_PAGE", function() { return AUDITABLE_WALLET_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NEW_WALLET_HELP_PAGE", function() { return CREATE_NEW_WALLET_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED_BALANCE_HELP_PAGE", function() { return LOCKED_BALANCE_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADS_PAGE_URL", function() { return DOWNLOADS_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_EXPLORER_TX_URL_PREFIX", function() { return BLOCK_EXPLORER_TX_URL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_EXPLORER_TN_TX_URL_PREFIX", function() { return BLOCK_EXPLORER_TN_TX_URL_PREFIX; });
var MIXIN = 0; // default mixin value
var RCV_ADDR_QR_SCALE = 1.5; // scale factor for QR code
var AUDITABLE_WALLET_HELP_PAGE = 'docs.nirmata-network.com/docs/use/auditable-wallets-faq/';
var CREATE_NEW_WALLET_HELP_PAGE = 'docs.nirmata-network.com/docs/use/wallets/managing-wallets/';
var LOCKED_BALANCE_HELP_PAGE = 'docs.nirmata-network.com/docs/use/locked-balance/';
var DOWNLOADS_PAGE_URL = 'nirmata-network.com/#download';
var BLOCK_EXPLORER_TX_URL_PREFIX = 'blockchain.nirmata-network.com/transaction/';
var BLOCK_EXPLORER_TN_TX_URL_PREFIX = '#';


/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\n  <div class=\"head\">\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.ADD_CONTACT' | translate }}</h3>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n  <form class=\"form-add\" [formGroup]=\"addContactForm\" (ngSubmit)=\"add()\">\n    <div class=\"input-block input-block-name\">\n      <label for=\"add-name\">{{ 'CONTACTS.FORM.NAME' | translate }}</label>\n      <input type=\"text\" id=\"add-name\"\n        [class.required-error]=\"addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched\"\n        [placeholder]=\"addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched ? ('CONTACTS.FORM_ERRORS.NAME_REQUIRED' | translate) : ('PLACEHOLDERS.NAME_PLACEHOLDER' | translate)\"\n        formControlName=\"name\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"addContactForm.controls['name'].invalid && !addContactForm.controls['name'].errors['required'] && (addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched)\">\n        <div\n          *ngIf=\"addContactForm.controls['name'].errors['minlength'] || addContactForm.controls['name'].errors['maxlength']\">\n          {{ 'CONTACTS.FORM_ERRORS.NAME_LENGTH' | translate }}\n        </div>\n        <div *ngIf=\"addContactForm.controls['name'].errors['dublicated']\">\n          {{ 'CONTACTS.FORM_ERRORS.NAME_DUBLICATED' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block input-block-alias\">\n      <label for=\"address\">{{ 'CONTACTS.FORM.ADDRESS' | translate }}</label>\n\n      <input type=\"text\" id=\"address\"\n        [class.required-error]=\"addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched\"\n        [placeholder]=\"addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched ? ('CONTACTS.FORM_ERRORS.ADDRESS_REQUIRED' | translate) : ('PLACEHOLDERS.ADRESS_PLACEHOLDER' | translate)\"\n        formControlName=\"address\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n\n      <div class=\"error-block\"\n        *ngIf=\"addContactForm.controls['address'].invalid && !addContactForm.controls['address'].errors['required'] && (addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched)\">\n        <div *ngIf=\"addContactForm.controls['address'].errors['address_not_valid']\">\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\n        </div>\n        <div *ngIf=\"addContactForm.controls['address'].errors['dublicated']\">\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_DUBLICATED' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block input-block-notes\">\n      <label for=\"notes\">{{ 'CONTACTS.FORM.NOTES' | translate }}</label>\n\n      <input type=\"text\" id=\"notes\" placeholder=\"{{ 'PLACEHOLDERS.NOTES_PLACEHOLDER' | translate }}\"\n        formControlName=\"notes\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['notes'].invalid\">\n        <div *ngIf=\"addContactForm.controls['notes'].errors['maxLength']\">\n          {{ 'CONTACTS.FORM_ERRORS.MAX_LENGTH' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"blue-button\" [disabled]=\"!addContactForm.valid\">{{ 'CONTACTS.BUTTON.ADD_EDIT' |\n      translate }}</button>\n\n    <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"addContactForm\" (confirmed)=\"confirmed($event)\">\n    </app-send-modal>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.form-add {\n  margin-top: 3rem; }\n\n.form-add .input-block-name {\n    width: 50%; }\n\n.form-add button {\n    margin-top: 3rem;\n    height: 7rem;\n    width: 25.6rem;\n    max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3RzL0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxhZGQtY29udGFjdHNcXGFkZC1jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFEbEI7SUFJSSxVQUFVLEVBQUE7O0FBSmQ7SUFRSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb250YWN0cy9hZGQtY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbn1cblxuLmZvcm0tYWRkIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcblxuICAuaW5wdXQtYmxvY2stbmFtZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBoZWlnaHQ6IDdyZW07XG4gICAgd2lkdGg6IDI1LjZyZW07XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.ts ***!
  \********************************************************/
/*! exports provided: AddContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactsComponent", function() { return AddContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddContactsComponent = /** @class */ (function () {
    function AddContactsComponent(route, backend, variablesService, modalService, ngZone, location) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.addContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    if (g.value) {
                        _this.backend.validateAddress(g.value, function (valid_status) {
                            _this.ngZone.run(function () {
                                if (valid_status === false) {
                                    g.setErrors(Object.assign({ address_not_valid: true }, g.errors));
                                }
                                else {
                                    if (g.hasError('address_not_valid')) {
                                        delete g.errors['address_not_valid'];
                                        if (Object.keys(g.errors).length === 0) {
                                            g.setErrors(null);
                                        }
                                    }
                                }
                            });
                        });
                        return g.hasError('address_not_valid')
                            ? { address_not_valid: true }
                            : null;
                    }
                    return null;
                },
                function (g) {
                    var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === g.value; });
                    if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                        return { dublicated: true };
                    }
                    return null;
                }
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                function (g) {
                    if (g.value) {
                        if (g.value.length > _this.variablesService.maxCommentLength) {
                            return { maxLength: true };
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        return null;
                    }
                }
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                function (g) {
                    if (g.value) {
                        var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === g.value.trim(); });
                        if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                            return { dublicated: true };
                        }
                        return null;
                    }
                }
            ])
        });
    }
    AddContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.id = parseInt(params.id, 10);
                _this.addContactForm.reset({
                    name: _this.variablesService.contacts[params.id]['name'],
                    address: _this.variablesService.contacts[params.id]['address'],
                    notes: _this.variablesService.contacts[params.id]['notes']
                });
            }
            else {
                _this.addContactForm.reset({
                    name: _this.variablesService.newContact['name'],
                    address: _this.variablesService.newContact['address'],
                    notes: _this.variablesService.newContact['notes']
                });
            }
        });
    };
    AddContactsComponent.prototype.add = function () {
        var _this = this;
        if (!this.variablesService.appPass) {
            this.modalService.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
        else {
            if (this.addContactForm.valid) {
                this.backend.validateAddress(this.addContactForm.get('address').value, function (valid_status) {
                    if (valid_status === false) {
                        _this.ngZone.run(function () {
                            _this.addContactForm
                                .get('address')
                                .setErrors({ address_not_valid: true });
                        });
                    }
                    else {
                        if (_this.id || _this.id === 0) {
                            _this.variablesService.contacts.forEach(function (contact, index) {
                                if (index === _this.id) {
                                    contact.name = _this.addContactForm.get('name').value.trim();
                                    contact.address = _this.addContactForm.get('address').value;
                                    contact.notes =
                                        _this.addContactForm.get('notes').value || '';
                                }
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SAVE');
                        }
                        else {
                            _this.variablesService.contacts.push({
                                name: _this.addContactForm.get('name').value.trim(),
                                address: _this.addContactForm.get('address').value,
                                notes: _this.addContactForm.get('notes').value || ''
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SENT');
                            _this.variablesService.newContact = {
                                name: null,
                                address: null,
                                notes: null
                            };
                            _this.addContactForm.reset();
                        }
                    }
                });
            }
        }
    };
    AddContactsComponent.prototype.confirmed = function () {
    };
    AddContactsComponent.prototype.back = function () {
        this.location.back();
    };
    AddContactsComponent.prototype.ngOnDestroy = function () {
        if (!(this.id || this.id === 0)) {
            this.variablesService.newContact = {
                name: this.addContactForm.get('name').value,
                address: this.addContactForm.get('address').value,
                notes: this.addContactForm.get('notes').value
            };
        }
        this.queryRouting.unsubscribe();
    };
    AddContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contacts',
            template: __webpack_require__(/*! ./add-contacts.component.html */ "./src/app/add-contacts/add-contacts.component.html"),
            styles: [__webpack_require__(/*! ./add-contacts.component.scss */ "./src/app/add-contacts/add-contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AddContactsComponent);
    return AddContactsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
/* harmony import */ var _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./deeplink/deeplink.component */ "./src/app/deeplink/deeplink.component.ts");
/* harmony import */ var _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contracts/contracts-tab/contracts-tab.component */ "./src/app/contracts/contracts-tab/contracts-tab.component.ts");
/* harmony import */ var _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./exchange/exchange.component */ "./src/app/exchange/exchange.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components


























var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'wallet',
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"],
        children: [
            {
                path: 'send',
                component: _send_send_component__WEBPACK_IMPORTED_MODULE_5__["SendComponent"]
            },
            {
                path: 'receive',
                component: _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__["ReceiveComponent"]
            },
            {
                path: 'history',
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"]
            },
            {
                path: 'contracts',
                component: _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_26__["ContractsTabComponent"],
                children: [
                    {
                        path: '',
                        component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__["ContractsComponent"],
                    },
                    {
                        path: 'purchase',
                        component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
                    },
                    {
                        path: 'purchase/:id',
                        component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
                    },
                    {
                        path: '**', redirectTo: '',
                    },
                ]
            },
            {
                path: 'messages/:id',
                component: _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_10__["TypingMessageComponent"],
            },
            {
                path: 'staking',
                component: _staking_staking_component__WEBPACK_IMPORTED_MODULE_11__["StakingComponent"]
            },
            {
                path: 'exchange',
                component: _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_27__["ExchangeComponent"]
            },
            {
                path: '',
                redirectTo: 'history',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'create',
        component: _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_13__["CreateWalletComponent"]
    },
    {
        path: 'open',
        component: _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_14__["OpenWalletComponent"]
    },
    {
        path: 'restore',
        component: _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_15__["RestoreWalletComponent"]
    },
    {
        path: 'seed-phrase',
        component: _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_16__["SeedPhraseComponent"]
    },
    {
        path: 'details',
        component: _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_17__["WalletDetailsComponent"]
    },
    {
        path: 'assign-alias',
        component: _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_18__["AssignAliasComponent"]
    },
    {
        path: 'edit-alias',
        component: _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_19__["EditAliasComponent"]
    },
    {
        path: 'transfer-alias',
        component: _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_20__["TransferAliasComponent"]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_21__["ContactsComponent"]
    },
    {
        path: 'add-contacts',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_22__["AddContactsComponent"]
    },
    {
        path: 'edit-contacts/:id',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_22__["AddContactsComponent"]
    },
    {
        path: 'contact-send/:id',
        component: _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_23__["ContactSendComponent"]
    },
    {
        path: 'import',
        component: _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_24__["ExportImportComponent"]
    },
    {
        path: 'deeplink',
        component: _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_25__["DeeplinkComponent"]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar *ngIf=\"variablesService.appLogin\"></app-sidebar>\n\n<div class=\"app-content scrolled-content\">\n  <router-outlet *ngIf=\"[0, 1, 2, 6].indexOf(variablesService.daemon_state) !== -1\"></router-outlet>\n  <div class=\"preloader\" *ngIf=\"[3, 4, 5].indexOf(variablesService.daemon_state) !== -1\">\n    <span *ngIf=\"variablesService.daemon_state === 3\">{{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}</span>\n    <span *ngIf=\"variablesService.daemon_state === 4\">{{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}</span>\n    <span *ngIf=\"variablesService.daemon_state === 5\">{{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}</span>\n    <span class=\"loading-bar\"></span>\n  </div>\n</div>\n<context-menu #allContextMenu>\n  <ng-template contextMenuItem (execute)=\"contextMenuCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\n</context-menu>\n\n<context-menu #onlyCopyContextMenu>\n  <ng-template contextMenuItem (execute)=\"contextMenuOnlyCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\n</context-menu>\n\n<context-menu #pasteSelectContextMenu>\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\n</context-menu>\n\n\n<app-open-wallet-modal *ngIf=\"needOpenWallets.length\" [wallets]=\"needOpenWallets\"></app-open-wallet-modal>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n* Implementation of themes\n*/\n.app-content {\n  display: flex;\n  overflow-x: overlay;\n  overflow-y: hidden;\n  width: 100%; }\n.app-content .preloader {\n    align-self: center;\n    color: #fff;\n    font-size: 2rem;\n    margin: 0 auto;\n    text-align: center;\n    width: 50%; }\n.app-content .preloader .loading-bar {\n      display: block;\n      animation: move 5s linear infinite;\n      background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n      background-size: 10rem 10rem;\n      margin-top: 2rem;\n      width: 100%;\n      height: 1rem; }\n@keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhc3NldHNcXHNjc3NcXGJhc2VcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGQTs7Q0MvRUM7QUNBRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtBQUpiO0lBT0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7QUFaZDtNQWVNLGNBQWM7TUFDZCxrQ0FBa0M7TUFDbEMsK2xDQXNCRztNQUNILDRCQUE0QjtNQUM1QixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTtBQUloQjtFQUNFO0lBQ0UsZ0NBQWdDLEVBQUE7RUFFbEM7SUFDRSwrQkFBK0IsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRleHQtdHJ1bmNhdGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiB0ZXh0V3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5AbWl4aW4gY292ZXJCb3gge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cbkBtaXhpbiBhYnMgKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcbiAgdG9wOiAkdG9wO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGxlZnQ6ICRsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWl4aW4gY292ZXJJbWcge1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5AbWl4aW4gdmFsaW5nQm94IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6ICA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWl4aW4gdW5TZWxlY3Qge1xuXHQtd2Via2l0LXRvdWNoLWNvbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbkBtaXhpbiBtYXgxOTIwIHsgLy8gbWFrZXQgMTkyMFxuICBAbWVkaWEgKG1heC13aWR0aDogMTkyMHB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gbWF4MTE5OSB7IC8vIG1ha2V0IDExNzFcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIG1heDExNzAgeyAvLyBtYWtldHMgOTkyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBtYXg5OTEgeyAvLyBtYWtldHMgNzYyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIG1heDc2MSB7IC8vIG1ha2V0cyA1NzZcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gbWF4NTc1IHsgLy8gbWFrZXRzIDQwMFxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBpY29DZW50ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbkBtaXhpbiBwc2V1ZG8gKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiAnJyl7XG4gIGNvbnRlbnQ6ICRjb250ZW50O1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgcG9zaXRpb246ICRwb3M7XG59XG5cbi8qXG4qIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xuKi9cbkBtaXhpbiB0aGVtaWZ5KCR0aGVtZXM6ICR0aGVtZXMpIHtcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xuICAgIC50aGVtZS0jeyR0aGVtZX0gJiB7XG4gICAgICAkdGhlbWUtbWFwOiAoKSAhZ2xvYmFsO1xuICAgICAgQGVhY2ggJGtleSwgJHN1Ym1hcCBpbiAkbWFwIHtcbiAgICAgICAgJHZhbHVlOiBtYXAtZ2V0KG1hcC1nZXQoJHRoZW1lcywgJHRoZW1lKSwgJyN7JGtleX0nKTtcbiAgICAgICAgJHRoZW1lLW1hcDogbWFwLW1lcmdlKCR0aGVtZS1tYXAsICgka2V5OiAkdmFsdWUpKSAhZ2xvYmFsO1xuICAgICAgfVxuICAgICAgQGNvbnRlbnQ7XG4gICAgICAkdGhlbWUtbWFwOiBudWxsICFnbG9iYWw7XG4gICAgfVxuICB9XG59XG5cbkBmdW5jdGlvbiB0aGVtZWQoJGtleSkge1xuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLW1hcCwgJGtleSk7XG59XG4iLCIvKlxuKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGVtZXNcbiovXG4uYXBwLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBvdmVybGF5O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5hcHAtY29udGVudCAucHJlbG9hZGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlOyB9XG4gICAgLmFwcC1jb250ZW50IC5wcmVsb2FkZXIgLmxvYWRpbmctYmFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYW5pbWF0aW9uOiBtb3ZlIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDEwMCUgMTAwJSwgY29sb3Itc3RvcCgwLjEyNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC4xMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjM3NSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC42MjUsIHJnYmEoMCwgMCwgMCwgMC4xNSkpLCBjb2xvci1zdG9wKDAuNjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksIGNvbG9yLXN0b3AoMC44NzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKDAuMTI1LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuMTI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuMjUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuMzc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjg3NSwgcmdiYSgwLCAwLCAwLCAwLjI1KSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTByZW0gMTByZW07XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDFyZW07IH1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgLTEwcmVtOyB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTByZW07IH0gfVxuIiwiQGltcG9ydCAnfnNyYy9hc3NldHMvc2Nzcy9iYXNlL21peGlucyc7XG5cbi5hcHAtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IG92ZXJsYXk7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnByZWxvYWRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcblxuICAgIC5sb2FkaW5nLWJhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGFuaW1hdGlvbjogbW92ZSA1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICAtd2Via2l0LWdyYWRpZW50KFxuICAgICAgICAgICAgbGluZWFyLCAwIDAsIDEwMCUgMTAwJSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjEyNSwgcmdiYSgwLCAwLCAwLCAuMTUpKSwgY29sb3Itc3RvcCguMTI1LCB0cmFuc3BhcmVudCksXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4yNTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguMjUwLCByZ2JhKDAsIDAsIDAsIC4xMCkpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCguMzc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC4zNzUsIHRyYW5zcGFyZW50KSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjUwMCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41MDAsIHJnYmEoMCwgMCwgMCwgLjE1KSksXG4gICAgICAgICAgICBjb2xvci1zdG9wKC42MjUsIHJnYmEoMCwgMCwgMCwgLjE1KSksIGNvbG9yLXN0b3AoLjYyNSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCguNzUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjc1MCwgcmdiYSgwLCAwLCAwLCAuMTApKSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjg3NSwgcmdiYSgwLCAwLCAwLCAuMTApKSwgY29sb3Itc3RvcCguODc1LCB0cmFuc3BhcmVudCksXG4gICAgICAgICAgICB0byh0cmFuc3BhcmVudClcbiAgICAgICAgKSxcbiAgICAgICAgLXdlYmtpdC1ncmFkaWVudChcbiAgICAgICAgICAgIGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4xMjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjEyNSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCguMjUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjI1MCwgcmdiYSgwLCAwLCAwLCAuMjUpKSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjM3NSwgcmdiYSgwLCAwLCAwLCAuMjUpKSwgY29sb3Itc3RvcCguMzc1LCB0cmFuc3BhcmVudCksXG4gICAgICAgICAgICBjb2xvci1zdG9wKC41MDAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNTAwLCByZ2JhKDAsIDAsIDAsIC4zMCkpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCguNjI1LCByZ2JhKDAsIDAsIDAsIC4zMCkpLCBjb2xvci1zdG9wKC42MjUsIHRyYW5zcGFyZW50KSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjc1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC43NTAsIHJnYmEoMCwgMCwgMCwgLjI1KSksXG4gICAgICAgICAgICBjb2xvci1zdG9wKC44NzUsIHJnYmEoMCwgMCwgMCwgLjI1KSksIGNvbG9yLXN0b3AoLjg3NSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXG4gICAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcmVtIDEwcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtMTByZW07XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/services/utils.service */ "./src/app/_helpers/services/utils.service.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store */ "./src/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppComponent = /** @class */ (function () {
    function AppComponent(http, renderer, translate, backend, router, variablesService, ngZone, intToMoneyPipe, modalService, utilsService, store) {
        var _this = this;
        this.http = http;
        this.renderer = renderer;
        this.translate = translate;
        this.backend = backend;
        this.router = router;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.modalService = modalService;
        this.utilsService = utilsService;
        this.store = store;
        this.onQuitRequest = false;
        this.firstOnlineState = false;
        this.translateUsed = false;
        this.needOpenWallets = [];
        translate.addLangs(['en', 'fr', 'de', 'it', 'pt', 'ru', 'ro', 'tr']);
        translate.setDefaultLang('en');
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        translate.use('en').subscribe(function () {
            _this.translateUsed = true;
        });
    }
    AppComponent.prototype.setBackendLocalization = function () {
        var _this = this;
        if (this.translateUsed) {
            var stringsArray = [
                this.translate.instant('BACKEND_LOCALIZATION.QUIT'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_RECEIVED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_UNCONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.MINED'),
                this.translate.instant('BACKEND_LOCALIZATION.LOCKED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_MINIMIZE'),
                this.translate.instant('BACKEND_LOCALIZATION.RESTORE'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_SHOW'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_MINIMIZE')
            ];
            this.backend.setBackendLocalization(stringsArray, this.variablesService.settings.language);
        }
        else {
            console.warn('wait translate use');
            setTimeout(function () {
                _this.setBackendLocalization();
            }, 10000);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variablesService.allContextMenu = this.allContextMenu;
        this.variablesService.onlyCopyContextMenu = this.onlyCopyContextMenu;
        this.backend.initService().subscribe(function (initMessage) {
            console.log('Init message: ', initMessage);
            _this.backend.webkitLaunchedScript();
            _this.backend.start_backend(false, '127.0.0.1', 11512, function (st2, dd2) {
                console.log(st2, dd2);
            });
            _this.backend.eventSubscribe('quit_requested', function () {
                if (!_this.onQuitRequest) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                    _this.needOpenWallets = [];
                    _this.variablesService.daemon_state = 5;
                    var saveFunction_1 = function () {
                        _this.backend.storeAppData(function () {
                            var recursionCloseWallets = function () {
                                if (_this.variablesService.wallets.length) {
                                    var lastIndex_1 = _this.variablesService.wallets.length - 1;
                                    _this.backend.closeWallet(_this.variablesService.wallets[lastIndex_1].wallet_id, function () {
                                        _this.variablesService.wallets.splice(lastIndex_1, 1);
                                        recursionCloseWallets();
                                    });
                                }
                                else {
                                    _this.backend.quitRequest();
                                }
                            };
                            recursionCloseWallets();
                        });
                    };
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData(function () {
                            saveFunction_1();
                        });
                    }
                    else {
                        saveFunction_1();
                    }
                }
                _this.onQuitRequest = true;
            });
            _this.backend.eventSubscribe('update_wallet_status', function (data) {
                console.log('----------------- update_wallet_status -----------------');
                console.log(data);
                var wallet_state = data.wallet_state;
                var is_mining = data.is_mining;
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                // 1-synch, 2-ready, 3 - error
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.loaded = false;
                        wallet.staking = is_mining;
                        if (wallet_state === 2) { // ready
                            wallet.loaded = true;
                        }
                        if (wallet_state === 3) { // error
                            // wallet.error = true;
                        }
                        wallet.balance = data.balance;
                        wallet.unlocked_balance = data.unlocked_balance;
                        wallet.mined_total = data.minied_total;
                        wallet.alias_available = data.is_alias_operations_available;
                        performCheck(_this.variablesService.height_app, _this.variablesService.pos_on1, _this.variablesService.pos_height1, wallet);
                        performCheck(_this.variablesService.height_app, _this.variablesService.pos_on2, _this.variablesService.pos_height2, wallet);
                        performCheck(_this.variablesService.height_app, _this.variablesService.pos_on3, _this.variablesService.pos_height3, wallet);
                        performCheck(_this.variablesService.height_app, _this.variablesService.pos_on4, _this.variablesService.pos_height4, wallet);
                        performCheck(_this.variablesService.height_app, _this.variablesService.pos_on5, _this.variablesService.pos_height5, wallet);
                    });
                }
            });
            var performCheck = function (height_app, pos_on, pos_height, wallet) {
                if (height_app > pos_height) {
                    if (((wallet.balance.toNumber() / 1000000000000) < pos_on) && wallet.staking) {
                        _this.backend.stopPosMining(wallet.wallet_id);
                        console.log('STOP POS', wallet.wallet_id);
                    }
                }
            };
            _this.backend.eventSubscribe('wallet_sync_progress', function (data) {
                console.log('----------------- wallet_sync_progress -----------------');
                console.log(data);
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.progress = (data.progress < 0) ? 0 : ((data.progress > 100) ? 100 : data.progress);
                        if (!_this.variablesService.sync_started) {
                            _this.variablesService.sync_started = true;
                        }
                        _this.addToStore(wallet, true); // subscribe on data
                        if (wallet.progress === 0) {
                            wallet.loaded = false;
                        }
                        else if (wallet.progress === 100) {
                            wallet.loaded = true;
                            _this.addToStore(wallet, false);
                            _this.variablesService.sync_started = false;
                        }
                    });
                }
            });
            _this.backend.eventSubscribe('update_daemon_state', function (data) {
                console.log('----------------- update_daemon_state -----------------');
                console.log('DAEMON:' + data.daemon_network_state);
                console.log(data);
                // this.variablesService.exp_med_ts = data['expiration_median_timestamp'] + 600 + 1;
                _this.variablesService.setExpMedTs(data['expiration_median_timestamp'] + 600 + 1);
                _this.variablesService.net_time_delta_median = data.net_time_delta_median;
                _this.variablesService.last_build_available = data.last_build_available;
                _this.variablesService.last_build_displaymode = data.last_build_displaymode;
                _this.variablesService.setHeightApp(data.height);
                _this.variablesService.setHeightMax(data.max_net_seen_height);
                _this.variablesService.setDownloadedBytes(data.downloaded_bytes);
                _this.variablesService.setTotalBytes(data.download_total_data_size);
                _this.backend.getContactAlias();
                _this.ngZone.run(function () {
                    _this.variablesService.daemon_state = data['daemon_network_state'];
                    if (data['daemon_network_state'] === 1) {
                        var max = data['max_net_seen_height'] - data['synchronization_start_height'];
                        var current = data.height - data['synchronization_start_height'];
                        var return_val = Math.floor((current * 100 / max) * 100) / 100;
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.sync.progress_value = 0;
                            _this.variablesService.sync.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.sync.progress_value = 100;
                            _this.variablesService.sync.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.sync.progress_value = return_val;
                            _this.variablesService.sync.progress_value_text = return_val.toFixed(2);
                        }
                    }
                    if (data['daemon_network_state'] === 6) {
                        var max = data['download_total_data_size'];
                        var current = data['downloaded_bytes'];
                        var return_val = Math.floor((current / max) * 100);
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.download.progress_value = 0;
                            _this.variablesService.download.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.download.progress_value = 100;
                            _this.variablesService.download.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.download.progress_value = return_val;
                            _this.variablesService.download.progress_value_text = return_val.toFixed(2);
                        }
                    }
                });
                if (!_this.firstOnlineState && data['daemon_network_state'] === 2) {
                    _this.getAliases();
                    _this.backend.getContactAlias();
                    _this.backend.getDefaultFee(function (status_fee, data_fee) {
                        _this.variablesService.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](data_fee);
                        _this.variablesService.default_fee = _this.intToMoneyPipe.transform(data_fee);
                    });
                    _this.firstOnlineState = true;
                }
            });
            _this.backend.eventSubscribe('money_transfer', function (data) {
                console.log('----------------- money_transfer -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (wallet.history.length > 40) {
                        wallet.history.splice(40, 1);
                    }
                    _this.ngZone.run(function () {
                        if (!wallet.loaded) {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        else {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        if (tr_info.tx_type === 6) {
                            _this.variablesService.setRefreshStacking(wallet_id);
                        }
                        var tr_exists = wallet.excluded_history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; });
                        tr_exists = (!tr_exists) ? wallet.history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; }) : tr_exists;
                        if (wallet.currentPage === 1) {
                            wallet.prepareHistory([tr_info]);
                            if (wallet.restore) {
                                wallet.total_history_item = wallet.history.length;
                                wallet.totalPages = Math.ceil(wallet.total_history_item / _this.variablesService.count);
                                wallet.totalPages > _this.variablesService.maxPages
                                    ? wallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                    : wallet.pages = new Array(wallet.totalPages).fill(1).map(function (value, index) { return value + index; });
                            }
                        }
                        if (tr_info.hasOwnProperty('contract')) {
                            var exp_med_ts = _this.variablesService.exp_med_ts;
                            var height_app = _this.variablesService.height_app;
                            var contract_1 = tr_info.contract[0];
                            if (tr_exists) {
                                for (var i = 0; i < wallet.contracts.length; i++) {
                                    if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                        wallet.contracts[i].cancel_expiration_time = contract_1.cancel_expiration_time;
                                        wallet.contracts[i].expiration_time = contract_1.expiration_time;
                                        wallet.contracts[i].height = contract_1.height;
                                        wallet.contracts[i].timestamp = contract_1.timestamp;
                                        break;
                                    }
                                }
                                // $rootScope.getContractsRecount();
                                return;
                            }
                            if (contract_1.state === 1 && contract_1.expiration_time < exp_med_ts) {
                                contract_1.state = 110;
                            }
                            else if (contract_1.state === 5 && contract_1.cancel_expiration_time < exp_med_ts) {
                                contract_1.state = 130;
                            }
                            else if (contract_1.state === 1) {
                                var searchResult2 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult2) {
                                    if (searchResult2.time === contract_1.expiration_time) {
                                        contract_1.state = 110;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 2 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 201;
                            }
                            else if (contract_1.state === 2) {
                                var searchResult3 = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult3) {
                                    contract_1.state = 120;
                                }
                            }
                            else if (contract_1.state === 5) {
                                var searchResult4 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult4) {
                                    if (searchResult4.time === contract_1.cancel_expiration_time) {
                                        contract_1.state = 130;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 6 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 601;
                            }
                            var searchResult = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === contract_1.state && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                            contract_1.is_new = !searchResult;
                            var findContract = false;
                            for (var i = 0; i < wallet.contracts.length; i++) {
                                if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                    for (var prop in contract_1) {
                                        if (contract_1.hasOwnProperty(prop)) {
                                            wallet.contracts[i][prop] = contract_1[prop];
                                        }
                                    }
                                    findContract = true;
                                    break;
                                }
                            }
                            if (findContract === false) {
                                wallet.contracts.push(contract_1);
                            }
                            wallet.recountNewContracts();
                        }
                    });
                }
            });
            _this.backend.backendObject['handle_deeplink_click'].connect(function (data) {
                console.log('----------------- handle_deeplink_click -----------------');
                console.log(data);
                if (data) {
                    _this.variablesService.deeplink$.next(data);
                }
            });
            _this.backend.eventSubscribe('money_transfer_cancel', function (data) {
                console.log('----------------- money_transfer_cancel -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (tr_info.hasOwnProperty('contract')) {
                        for (var i = 0; i < wallet.contracts.length; i++) {
                            if (wallet.contracts[i].contract_id === tr_info.contract[0].contract_id && wallet.contracts[i].is_a === tr_info.contract[0].is_a) {
                                if (wallet.contracts[i].state === 1 || wallet.contracts[i].state === 110) {
                                    wallet.contracts[i].is_new = true;
                                    wallet.contracts[i].state = 140;
                                    wallet.recountNewContracts();
                                }
                                break;
                            }
                        }
                    }
                    wallet.removeFromHistory(tr_info.tx_hash);
                    var error_tr = '';
                    switch (tr_info.tx_type) {
                        case 0:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NORMAL') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_TO') + ' ' + _this.intToMoneyPipe.transform(tr_info.amount) + ' ' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_END');
                            break;
                        case 1:
                            _this.translate.instant('ERRORS.TX_TYPE_PUSH_OFFER');
                            break;
                        case 2:
                            _this.translate.instant('ERRORS.TX_TYPE_UPDATE_OFFER');
                            break;
                        case 3:
                            _this.translate.instant('ERRORS.TX_TYPE_CANCEL_OFFER');
                            break;
                        case 4:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 5:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_UPDATE_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 6:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_COIN_BASE');
                            break;
                    }
                    if (error_tr) {
                        _this.modalService.prepareModal('error', error_tr);
                    }
                }
            });
            _this.backend.eventSubscribe('on_core_event', function (data) {
                console.log('----------------- on_core_event -----------------');
                console.log(data);
                data = JSON.parse(data);
                if (data.events != null) {
                    var _loop_1 = function (i, length_1) {
                        switch (data.events[i].method) {
                            case 'CORE_EVENT_BLOCK_ADDED':
                                break;
                            case 'CORE_EVENT_ADD_ALIAS':
                                if (_this.variablesService.aliasesChecked[data.events[i].details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['address'] = data.events[i].details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['comment'] = data.events[i].details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var newAlias = {
                                        name: '@' + data.events[i].details.alias,
                                        address: data.events[i].details.address,
                                        comment: data.events[i].details.comment
                                    };
                                    _this.variablesService.aliases = _this.variablesService.aliases.concat(newAlias);
                                    _this.variablesService.changeAliases();
                                }
                                break;
                            case 'CORE_EVENT_UPDATE_ALIAS':
                                for (var address in _this.variablesService.aliasesChecked) {
                                    if (_this.variablesService.aliasesChecked.hasOwnProperty(address)) {
                                        if (_this.variablesService.aliasesChecked[address].name === '@' + data.events[i].details.alias) {
                                            if (_this.variablesService.aliasesChecked[address].address !== data.events[i].details.details.address) {
                                                delete _this.variablesService.aliasesChecked[address]['name'];
                                                delete _this.variablesService.aliasesChecked[address]['address'];
                                                delete _this.variablesService.aliasesChecked[address]['comment'];
                                            }
                                            else {
                                                _this.variablesService.aliasesChecked[address].comment = data.events[i].details.details.comment;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (_this.variablesService.aliasesChecked[data.events[i].details.details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['address'] = data.events[i].details.details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['comment'] = data.events[i].details.details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var CurrentAlias = _this.variablesService.aliases.find(function (element) { return element.name === '@' + data.events[i].details.alias; });
                                    if (CurrentAlias) {
                                        CurrentAlias.address = data.events[i].details.details.address;
                                        CurrentAlias.comment = data.events[i].details.details.comment;
                                    }
                                }
                                _this.variablesService.changeAliases();
                                break;
                            default:
                                break;
                        }
                    };
                    for (var i = 0, length_1 = data.events.length; i < length_1; i++) {
                        _loop_1(i, length_1);
                    }
                }
            });
            _this.intervalUpdateContractsState = setInterval(function () {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 201 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 2;
                            contract.is_new = true;
                            console.warn('need check state in contracts');
                        }
                        else if (contract.state === 601 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 6;
                            contract.is_new = true;
                        }
                    });
                });
            }, 30000);
            _this.expMedTsEvent = _this.variablesService.getExpMedTsEvent.subscribe(function (newTimestamp) {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 1 && contract.expiration_time <= newTimestamp) {
                            contract.state = 110;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                        else if (contract.state === 5 && contract.cancel_expiration_time <= newTimestamp) {
                            contract.state = 130;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                    });
                });
            });
            _this.backend.getAppData(function (status, data) {
                if (data && Object.keys(data).length > 0) {
                    for (var key in data) {
                        if (data.hasOwnProperty(key) && _this.variablesService.settings.hasOwnProperty(key)) {
                            _this.variablesService.settings[key] = data[key];
                        }
                    }
                    if (_this.variablesService.settings.hasOwnProperty('scale') && [6, 8, 9, 10, 11, 12, 13, 14].indexOf(_this.variablesService.settings.scale) !== -1) {
                        var width = _this.utilsService.getMinWidthByScale(_this.variablesService.settings.scale);
                        var app = document.documentElement.querySelector('app-root');
                        _this.renderer.setStyle(app, 'min-width', width + 'px');
                        _this.renderer.setStyle(document.documentElement, 'font-size', _this.variablesService.settings.scale + 'px');
                    }
                    else {
                        _this.variablesService.settings.scale = 8;
                        var width = _this.utilsService.getMinWidthByScale(_this.variablesService.settings.scale);
                        var app = document.documentElement.querySelector('app-root');
                        _this.renderer.setStyle(app, 'min-width', width + 'px');
                        _this.renderer.setStyle(document.documentElement, 'font-size', _this.variablesService.settings.scale + 'px');
                    }
                }
                _this.translate.use(_this.variablesService.settings.language);
                _this.setBackendLocalization();
                _this.backend.setLogLevel(_this.variablesService.settings.appLog);
                if (_this.router.url !== '/login') {
                    _this.backend.haveSecureAppData(function (statusPass) {
                        if (statusPass) {
                            _this.ngZone.run(function () {
                                _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                            });
                        }
                        else {
                            if (Object.keys(data).length !== 0) {
                                _this.needOpenWallets = JSON.parse(JSON.stringify(_this.variablesService.settings.wallets));
                                _this.ngZone.run(function () {
                                    _this.variablesService.appLogin = true;
                                    _this.router.navigate(['/']);
                                });
                            }
                            else {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/login'], { queryParams: { type: 'reg' } });
                                });
                            }
                        }
                    });
                }
            });
        }, function (error) {
            console.log(error);
        });
        this.getMoneyEquivalent();
        this.intervalUpdatePriceState = setInterval(function () {
            _this.getMoneyEquivalent();
        }, 30000);
    };
    AppComponent.prototype.getMoneyEquivalent = function () {
        var _this = this;
        var status = function (response) {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response);
        };
        var json = function (response) {
            return response.json();
        };
        this.http.get("https://http-api.livecoinwatch.com/widgets/coins?only=NIR&currency=USD").subscribe(function () {
            _this.http.get('https://http-api.livecoinwatch.com/widgets/coins?only=NIR&currency=USD').subscribe(function (data) {
                _this.variablesService.moneyEquivalent = data['data'][0]['price'];
            });
        });
    };
    AppComponent.prototype.getAliases = function () {
        var _this = this;
        this.backend.getAllAliases(function (status, data, error) {
            console.warn(error);
            if (error === 'CORE_BUSY') {
                window.setTimeout(function () {
                    _this.getAliases();
                }, 10000);
            }
            else if (error === 'OVERFLOW') {
                _this.variablesService.aliases = [];
                _this.variablesService.enableAliasSearch = false;
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.alias = _this.backend.getWalletAlias(wallet.address);
                });
            }
            else {
                _this.variablesService.enableAliasSearch = true;
                if (data.aliases && data.aliases.length) {
                    _this.variablesService.aliases = [];
                    data.aliases.forEach(function (alias) {
                        var newAlias = {
                            name: '@' + alias.alias,
                            address: alias.address,
                            comment: alias.comment
                        };
                        _this.variablesService.aliases.push(newAlias);
                    });
                    _this.variablesService.wallets.forEach(function (wallet) {
                        wallet.alias = _this.backend.getWalletAlias(wallet.address);
                    });
                    _this.variablesService.aliases = _this.variablesService.aliases.sort(function (a, b) {
                        if (a.name.length > b.name.length) {
                            return 1;
                        }
                        if (a.name.length < b.name.length) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    _this.variablesService.changeAliases();
                }
            }
        });
    };
    AppComponent.prototype.contextMenuCopy = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
            var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
            var canUseSelection = ((target[start]) || (target[start] === '0'));
            var SelectedText = (canUseSelection) ? target['value'].substring(target[start], target[end]) : target['value'];
            this.backend.setClipboard(String(SelectedText));
        }
    };
    AppComponent.prototype.contextMenuOnlyCopy = function (text) {
        if (text) {
            this.backend.setClipboard(String(text));
        }
    };
    AppComponent.prototype.contextMenuPaste = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            this.backend.getClipboard(function (status, clipboard) {
                clipboard = String(clipboard);
                if (typeof clipboard !== 'string' || clipboard.length) {
                    var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
                    var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
                    var _pre = target['value'].substring(0, target[start]);
                    var _aft = target['value'].substring(target[end], target['value'].length);
                    var text = _pre + clipboard + _aft;
                    var cursorPosition = (_pre + clipboard).length;
                    if (target['maxLength'] && parseInt(target['maxLength'], 10) > 0) {
                        text = text.substr(0, parseInt(target['maxLength'], 10));
                    }
                    target['value'] = text;
                    target.setSelectionRange(cursorPosition, cursorPosition);
                    target.dispatchEvent(new Event('input'));
                    target['focus']();
                }
            });
        }
    };
    AppComponent.prototype.contextMenuSelect = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            target['focus']();
            setTimeout(function () {
                target['select']();
            });
        }
    };
    AppComponent.prototype.addToStore = function (wallet, boolean) {
        var value = this.store.value.sync;
        if (value && value.length) {
            var sync = value.filter(function (item) { return item.wallet_id === wallet.wallet_id; });
            if (sync && sync.length) {
                var result = value.map(function (item) {
                    if (item.wallet_id === wallet.wallet_id) {
                        return { sync: boolean, wallet_id: wallet.wallet_id };
                    }
                    else {
                        return item;
                    }
                });
                this.store.set('sync', result);
            }
            else {
                value.push({ sync: boolean, wallet_id: wallet.wallet_id });
                this.store.set('sync', value);
            }
        }
        else {
            this.store.set('sync', [{ sync: boolean, wallet_id: wallet.wallet_id }]);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.intervalUpdateContractsState) {
            clearInterval(this.intervalUpdateContractsState);
        }
        if (this.intervalUpdatePriceState) {
            clearInterval(this.intervalUpdatePriceState);
        }
        this.expMedTsEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('allContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "allContextMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('onlyCopyContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "onlyCopyContextMenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
            _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"],
            store__WEBPACK_IMPORTED_MODULE_11__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, highchartsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./open-wallet-modal/open-wallet-modal.component */ "./src/app/open-wallet-modal/open-wallet-modal.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_helpers/services/pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_helpers/pipes/history-type-messages.pipe */ "./src/app/_helpers/pipes/history-type-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_helpers/pipes/contract-status-messages.pipe */ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_helpers/pipes/contract-time-left.pipe */ "./src/app/_helpers/pipes/contract-time-left.pipe.ts");
/* harmony import */ var _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_helpers/pipes/safe-html.pipe */ "./src/app/_helpers/pipes/safe-html.pipe.ts");
/* harmony import */ var _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_helpers/directives/tooltip.directive */ "./src/app/_helpers/directives/tooltip.directive.ts");
/* harmony import */ var _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_helpers/directives/input-validate/input-validate.directive */ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts");
/* harmony import */ var _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_helpers/directives/staking-switch/staking-switch.component */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts");
/* harmony import */ var _helpers_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_helpers/modals/modal-container/modal-container.component */ "./src/app/_helpers/modals/modal-container/modal-container.component.ts");
/* harmony import */ var _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_helpers/directives/transaction-details/transaction-details.component */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! highcharts/modules/exporting.src */ "./node_modules/highcharts/modules/exporting.src.js");
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_helpers/directives/progress-container/progress-container.component */ "./src/app/_helpers/directives/progress-container/progress-container.component.ts");
/* harmony import */ var _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_helpers/directives/input-disable-selection/input-disable-selection.directive */ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts");
/* harmony import */ var _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./send-modal/send-modal.component */ "./src/app/send-modal/send-modal.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
/* harmony import */ var _helpers_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./_helpers/modals/confirm-modal/confirm-modal.component */ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _helpers_modals_export_history_modal_export_history_modal_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./_helpers/modals/export-history-modal/export-history-modal.component */ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.ts");
/* harmony import */ var cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! cdk-drag-scroll */ "./node_modules/cdk-drag-scroll/fesm5/cdk-drag-scroll.js");
/* harmony import */ var _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./deeplink/deeplink.component */ "./src/app/deeplink/deeplink.component.ts");
/* harmony import */ var _helpers_modals_sync_modal_sync_modal_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./_helpers/modals/sync-modal/sync-modal.component */ "./src/app/_helpers/modals/sync-modal/sync-modal.component.ts");
/* harmony import */ var _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./contracts/contracts-tab/contracts-tab.component */ "./src/app/contracts/contracts-tab/contracts-tab.component.ts");
/* harmony import */ var _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./exchange/exchange.component */ "./src/app/exchange/exchange.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// SERVICES



// SERVICES
// Feature module

// Feature module
































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}
// import * as more from 'highcharts/highcharts-more.src';
// import * as exporting from 'highcharts/modules/exporting.src';
// import * as highstock from 'highcharts/modules/stock.src';
function highchartsFactory() {
    // Default options.
    highcharts__WEBPACK_IMPORTED_MODULE_48__["setOptions"]({
        time: {
            useUTC: false
        }
    });
    return [highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49___default.a];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_9__["CreateWalletComponent"],
                _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_10__["OpenWalletComponent"],
                _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_11__["OpenWalletModalComponent"],
                _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_12__["RestoreWalletComponent"],
                _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_13__["SeedPhraseComponent"],
                _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_14__["WalletDetailsComponent"],
                _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_15__["AssignAliasComponent"],
                _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_16__["EditAliasComponent"],
                _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_17__["TransferAliasComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_18__["WalletComponent"],
                _send_send_component__WEBPACK_IMPORTED_MODULE_19__["SendComponent"],
                _receive_receive_component__WEBPACK_IMPORTED_MODULE_20__["ReceiveComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_21__["HistoryComponent"],
                _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_22__["ContractsComponent"],
                _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_23__["PurchaseComponent"],
                _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__["StakingComponent"],
                _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__["TypingMessageComponent"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__["IntToMoneyPipe"],
                _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_43__["StakingSwitchComponent"],
                _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_37__["HistoryTypeMessagesPipe"],
                _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_38__["ContractStatusMessagesPipe"],
                _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_39__["ContractTimeLeftPipe"],
                _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["TooltipDirective"],
                _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_42__["InputValidateDirective"],
                _helpers_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__["ModalContainerComponent"],
                _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_45__["TransactionDetailsComponent"],
                _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_50__["ProgressContainerComponent"],
                _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_51__["InputDisableSelectionDirective"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__["SendModalComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__["ContactsComponent"],
                _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_54__["AddContactsComponent"],
                _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_55__["ContactSendComponent"],
                _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_56__["ExportImportComponent"],
                _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_40__["SafeHTMLPipe"],
                _helpers_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__["ConfirmModalComponent"],
                _helpers_modals_export_history_modal_export_history_modal_component__WEBPACK_IMPORTED_MODULE_60__["ExportHistoryModalComponent"],
                _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_62__["DeeplinkComponent"],
                _helpers_modals_sync_modal_sync_modal_component__WEBPACK_IMPORTED_MODULE_63__["SyncModalComponent"],
                _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_64__["ContractsTabComponent"],
                _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_65__["ExchangeComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_66__["ChatComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["ChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_58__["DragDropModule"],
                cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_61__["DragScrollModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__["NgSelectModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["ChartModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_59__["PapaParseModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_46__["ContextMenuModule"].forRoot()
            ],
            providers: [
                store__WEBPACK_IMPORTED_MODULE_34__["Store"],
                _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__["BackendService"],
                _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__["ModalService"],
                _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_33__["PaginationStore"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__["IntToMoneyPipe"],
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["HIGHCHARTS_MODULES"], useFactory: highchartsFactory }
                // {provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock, more, exporting ] }
            ],
            entryComponents: [
                _helpers_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__["ModalContainerComponent"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__["SendModalComponent"],
                _helpers_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__["ConfirmModalComponent"],
                _helpers_modals_export_history_modal_export_history_modal_component__WEBPACK_IMPORTED_MODULE_60__["ExportHistoryModalComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/wallet/history']\">{{ wallet.name }}</span>\n      <span>{{ 'BREADCRUMBS.ASSIGN_ALIAS' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-assign\" [formGroup]=\"assignForm\">\n\n    <div class=\"input-block alias-name\">\n      <label for=\"alias-name\" tooltip=\"{{ 'ASSIGN_ALIAS.NAME.TOOLTIP' | translate }}\" placement=\"bottom-left\"\n        tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\n        {{ 'ASSIGN_ALIAS.NAME.LABEL' | translate }}\n      </label>\n      <div class=\"has-no-edit-symbol\">\n        <input type=\"text\" id=\"alias-name\" formControlName=\"name\"\n          [class.required-error]=\"assignForm.controls['name'].dirty || assignForm.controls['name'].touched\"\n          [placeholder]=\" assignForm.controls['name'].dirty || assignForm.controls['name'].touched ? ('ASSIGN_ALIAS.FORM_ERRORS.NAME_REQUIRED' | translate ) : ('ASSIGN_ALIAS.NAME.PLACEHOLDER' | translate)\"\n          (contextmenu)=\"variablesService.onContextMenu($event)\">\n      </div>\n      <div class=\"error-block\"\n        *ngIf=\"assignForm.controls['name'].invalid && !assignForm.controls['name'].errors['required'] && (assignForm.controls['name'].dirty || assignForm.controls['name'].touched)\">\n        <div\n          *ngIf=\"assignForm.controls['name'].errors['pattern'] && assignForm.get('name').value.length > 6 && assignForm.get('name').value.length <= 25\">\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_WRONG' | translate }}\n        </div>\n        <div *ngIf=\"assignForm.get('name').value.length <= 6 || assignForm.get('name').value.length > 25\">\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_LENGTH' | translate }}\n        </div>\n      </div>\n      <div class=\"error-block\" *ngIf=\"alias.exists\">\n        <div>\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_EXISTS' | translate }}\n        </div>\n      </div>\n      <div class=\"error-block\" *ngIf=\"notEnoughMoney\">\n        <div>\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block textarea\">\n      <label for=\"alias-comment\" tooltip=\"{{ 'ASSIGN_ALIAS.COMMENT.TOOLTIP' | translate }}\" placement=\"bottom-left\"\n        tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\n        {{ 'ASSIGN_ALIAS.COMMENT.LABEL' | translate }}\n      </label>\n      <textarea id=\"alias-comment\" class=\"scrolled-content\" formControlName=\"comment\"\n        placeholder=\"{{ 'ASSIGN_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"\n        [maxLength]=\"variablesService.maxCommentLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      </textarea>\n      <div class=\"error-block\" *ngIf=\"assignForm.get('comment').value.length >= variablesService.maxCommentLength\">\n        {{ 'ASSIGN_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\n      </div>\n    </div>\n\n    <div class=\"alias-cost\">{{ \"ASSIGN_ALIAS.COST\" | translate : {value: alias.price | intToMoney, currency:\n      variablesService.defaultCurrency} }}</div>\n\n    <div class=\"wrap-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"assignAlias()\"\n        [disabled]=\"!assignForm.valid || !canRegister || notEnoughMoney\">{{ 'ASSIGN_ALIAS.BUTTON_ASSIGN' | translate\n        }}</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-assign {\n  margin: 2.4rem 0; }\n  .form-assign label {\n    font-size: 1.6rem;\n    line-height: 2rem; }\n  .form-assign .alias-name {\n    width: 50%; }\n  .form-assign .alias-cost {\n    font-size: 2rem;\n    line-height: 2rem;\n    margin-top: 2rem; }\n  .form-assign .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-assign .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n  .assign-alias-tooltip {\n  max-width: 46rem; }\n  .has-no-edit-symbol {\n  position: relative;\n  width: 100%; }\n  .has-no-edit-symbol input {\n    padding-left: 2.35rem; }\n  .has-no-edit-symbol:after {\n    content: \"@\";\n    position: absolute;\n    display: inline-block;\n    top: 50%;\n    left: 1rem;\n    transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduLWFsaWFzL0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxhc3NpZ24tYWxpYXNcXGFzc2lnbi1hbGlhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBSnJCO0lBT0ksVUFBVSxFQUFBO0VBUGQ7SUFXSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBYnBCO0lBaUJJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCLEVBQUE7RUFuQjFCO01Bc0JNLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7RUFLbEI7RUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFGYjtJQUlJLHFCQUFxQixFQUFBO0VBSnpCO0lBT0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFVBQVU7SUFDViwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbi1hbGlhcy9hc3NpZ24tYWxpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1hc3NpZ24ge1xuICBtYXJnaW46IDIuNHJlbSAwO1xuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cbiAgLmFsaWFzLW5hbWUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuYWxpYXMtY29zdCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cblxuICAud3JhcC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XG4gICAgICB3aWR0aDogMTVyZW07XG4gICAgfVxuICB9XG59XG5cbi5hc3NpZ24tYWxpYXMtdG9vbHRpcCB7XG4gIG1heC13aWR0aDogNDZyZW07XG59XG5cbi5oYXMtbm8tZWRpdC1zeW1ib2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjM1cmVtO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiQFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.ts ***!
  \********************************************************/
/*! exports provided: AssignAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAliasComponent", function() { return AssignAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssignAliasComponent = /** @class */ (function () {
    function AssignAliasComponent(ngZone, location, router, backend, variablesService, modalService, moneyToInt, intToMoney) {
        var _this = this;
        this.ngZone = ngZone;
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToInt = moneyToInt;
        this.intToMoney = intToMoney;
        this.assignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^@?[a-z0-9\.\-]{6,25}$/)]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [function (g) {
                    if (g.value > _this.variablesService.maxCommentLength) {
                        return { 'maxLength': true };
                    }
                    else {
                        return null;
                    }
                }])
        });
        this.alias = {
            name: '',
            fee: this.variablesService.default_fee,
            price: new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0),
            reward: '0',
            rewardOriginal: '0',
            comment: '',
            exists: false
        };
        this.canRegister = false;
        this.notEnoughMoney = false;
    }
    AssignAliasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wallet = this.variablesService.currentWallet;
        this.assignFormSubscription = this.assignForm.get('name').valueChanges.subscribe(function (value) {
            _this.canRegister = false;
            _this.alias.exists = false;
            var newName = value.toLowerCase().replace('@', '');
            if (!(_this.assignForm.controls['name'].errors && _this.assignForm.controls['name'].errors.hasOwnProperty('pattern')) && newName.length >= 6 && newName.length <= 25) {
                _this.backend.getAliasByName(newName, function (status) {
                    _this.ngZone.run(function () {
                        _this.alias.exists = status;
                    });
                    if (!status) {
                        _this.alias.price = new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0);
                        _this.backend.getAliasCoast(newName, function (statusPrice, dataPrice) {
                            _this.ngZone.run(function () {
                                if (statusPrice) {
                                    _this.alias.price = bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a.sum(dataPrice['coast'], _this.variablesService.default_fee_big);
                                }
                                _this.notEnoughMoney = _this.alias.price.isGreaterThan(_this.wallet.unlocked_balance);
                                _this.alias.reward = _this.intToMoney.transform(_this.alias.price, false);
                                _this.alias.rewardOriginal = _this.intToMoney.transform(dataPrice['coast'], false);
                                _this.canRegister = !_this.notEnoughMoney;
                            });
                        });
                    }
                    else {
                        _this.notEnoughMoney = false;
                        _this.alias.reward = '0';
                        _this.alias.rewardOriginal = '0';
                    }
                });
            }
            else {
                _this.notEnoughMoney = false;
                _this.alias.reward = '0';
                _this.alias.rewardOriginal = '0';
            }
            _this.alias.name = newName;
        });
    };
    AssignAliasComponent.prototype.assignAlias = function () {
        var _this = this;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        if (alias.hasOwnProperty('name')) {
            this.modalService.prepareModal('info', 'ASSIGN_ALIAS.ONE_ALIAS');
        }
        else {
            this.alias.comment = this.assignForm.get('comment').value;
            this.backend.registerAlias(this.wallet.wallet_id, this.alias.name, this.wallet.address, this.alias.fee, this.alias.comment, this.alias.rewardOriginal, function (status, data) {
                if (status) {
                    _this.wallet.wakeAlias = true;
                    _this.modalService.prepareModal('info', 'ASSIGN_ALIAS.REQUEST_ADD_REG');
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/']);
                    });
                }
            });
        }
    };
    AssignAliasComponent.prototype.back = function () {
        this.location.back();
    };
    AssignAliasComponent.prototype.ngOnDestroy = function () {
        this.assignFormSubscription.unsubscribe();
    };
    AssignAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-alias',
            template: __webpack_require__(/*! ./assign-alias.component.html */ "./src/app/assign-alias/assign-alias.component.html"),
            styles: [__webpack_require__(/*! ./assign-alias.component.scss */ "./src/app/assign-alias/assign-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__["MoneyToIntPipe"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__["IntToMoneyPipe"]])
    ], AssignAliasComponent);
    return AssignAliasComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat works!\n</p>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/contact-send/contact-send.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/contacts']\">{{\n        'CONTACTS.TITLE' | translate\n        }}</span>\n      <span>{{ 'CONTACTS.SEND' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <div>\n    <div class=\"wallets-selection\">\n      <div class=\"input-block\">\n        <label>\n          {{ 'CONTACTS.SEND_FROM' | translate }}\n        </label>\n        <ng-select class=\"custom-select\" [items]=\"this.variablesService.wallets\"\n          [(ngModel)]=\"this.variablesService.selectWallet\" bindValue=\"wallet_id\" bindLabel=\"name\" [clearable]=\"false\"\n          [searchable]=\"false\">\n        </ng-select>\n      </div>\n      <button class=\"blue-button_reset\" [routerLink]=\"['/main']\">\n        {{ 'CONTACTS.OPEN_ADD_WALLET' | translate }}\n      </button>\n    </div>\n\n    <div class=\"input-block\">\n      <label for=\"address\">{{ 'CONTACTS.SEND_TO' | translate }}</label>\n      <input type=\"text\" id=\"address\" [ngModel]=\"address\" [readonly]=\"true\" />\n    </div>\n  </div>\n  <button class=\"blue-button\" (click)=\"goToWallet(this.variablesService.selectWallet)\"\n    [disabled]=\"!(this.variablesService.selectWallet === 0 || this.variablesService.selectWallet)\">{{\n    'CONTACTS.BUTTON.GO_TO_WALLET' | translate }}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wallets-selection {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem; }\n  .wallets-selection button {\n    height: 4rem;\n    font-size: 2rem; }\n  .input-block {\n  width: 44rem; }\n  .input-block input {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .blue-button {\n  margin-top: 2.5rem;\n  width: 100%;\n  max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1zZW5kL0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxjb250YWN0LXNlbmRcXGNvbnRhY3Qtc2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7RUFIbEI7SUFLSSxZQUFZO0lBQ1osZUFBZSxFQUFBO0VBSW5CO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1zZW5kL2NvbnRhY3Qtc2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXRzLXNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG4uaW5wdXQtYmxvY2sge1xuICB3aWR0aDogNDRyZW07XG5cbiAgaW5wdXQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxOHJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.ts ***!
  \********************************************************/
/*! exports provided: ContactSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSendComponent", function() { return ContactSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactSendComponent = /** @class */ (function () {
    function ContactSendComponent(location, variablesService, route, ngZone, router) {
        this.location = location;
        this.variablesService = variablesService;
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
    }
    ContactSendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.address) {
                _this.address = params.address;
            }
        });
    };
    ContactSendComponent.prototype.goToWallet = function (id) {
        var _this = this;
        this.variablesService.setCurrentWallet(id);
        this.variablesService.currentWallet.send_data['address'] = this.address;
        this.ngZone.run(function () {
            _this.router.navigate(['/wallet/send'], { queryParams: { send: true } });
        });
    };
    ContactSendComponent.prototype.back = function () {
        this.location.back();
    };
    ContactSendComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    ContactSendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-send',
            template: __webpack_require__(/*! ./contact-send.component.html */ "./src/app/contact-send/contact-send.component.html"),
            styles: [__webpack_require__(/*! ./contact-send.component.scss */ "./src/app/contact-send/contact-send.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactSendComponent);
    return ContactSendComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\n  <div>\n    <div class=\"head\">\n      <h3 class=\"contacts-title\">{{ 'CONTACTS.TITLE' | translate }}</h3>\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n        <i class=\"icon back\"></i>\n        <span>{{ 'COMMON.BACK' | translate }}</span>\n      </button>\n    </div>\n\n\n\n    <div class=\"wrap-table\">\n      <ng-container>\n        <table *ngIf=\"this.variablesService.contacts.length !== 0; else emptyList\">\n          <thead>\n            <tr #head (window:resize)=\"calculateWidth()\">\n              <th>{{ 'CONTACTS.TABLE.NAME' | translate }}</th>\n              <th>{{ 'CONTACTS.TABLE.ALIAS' | translate }}</th>\n              <th>{{ 'CONTACTS.TABLE.ADDRESS' | translate }}</th>\n              <th>{{ 'CONTACTS.TABLE.NOTES' | translate }}</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"\n                let contact of this.variablesService.contacts;\n                let i = index\n              \">\n              <tr>\n                <td>\n                  {{ contact.name }}\n                </td>\n                <td>\n                  <ng-container *ngIf=\"contact.alias\">\n                    <span>{{ contact.alias }}</span>\n                  </ng-container>\n                </td>\n                <td class=\"remote-address\">\n                  {{ contact.address }}\n                </td>\n                <td class=\"remote-notes\">\n                  {{ contact.notes }}\n                </td>\n                <td>\n                  <div class=\"button-wrapper\">\n                    <button [routerLink]=\"['/contact-send/' + i]\" [queryParams]=\"{ address: contact.address }\">\n                      <i class=\"icon transfer\"></i>\n                      <span>{{ 'CONTACTS.BUTTON.SEND' | translate }}</span>\n                    </button>\n                    <button [routerLink]=\"['/edit-contacts/' + i]\" [queryParams]=\"{ id: i }\">\n                      <i class=\"icon edit\"></i>\n                      <span>{{ 'CONTACTS.BUTTON.EDIT' | translate }}</span>\n                    </button>\n                    <button (click)=\"delete(i)\">\n                      <i class=\"icon delete\"></i>\n                      <span>{{ 'CONTACTS.BUTTON.DELETE' | translate }}</span>\n                    </button>\n                  </div>\n                </td>\n              </tr>\n              <div class=\"row-divider\"></div>\n            </ng-container>\n          </tbody>\n        </table>\n      </ng-container>\n\n      <ng-template #emptyList>\n        <div class=\"empty-list\">\n          {{ 'CONTACTS.TABLE.EMPTY' | translate }}\n        </div>\n      </ng-template>\n    </div>\n\n    <button [routerLink]=\"['/add-contacts']\" class=\"blue-button\">\n      {{ 'CONTACTS.BUTTON.ADD' | translate }}\n    </button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.head {\n  justify-content: space-between; }\n\n.wrap-table {\n  margin-top: 2rem; }\n\n.wrap-table table thead tr th:last-child {\n    max-width: 6rem; }\n\n.wrap-table table tbody tr td {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.wrap-table table tbody tr td:first-child {\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:nth-child(2) {\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:last-child {\n      width: 25rem;\n      min-width: -moz-fit-content;\n      min-width: fit-content; }\n\n.wrap-table table tbody tr td .alias {\n      cursor: pointer; }\n\n.wrap-table table tbody tr td .button-wrapper {\n      display: flex; }\n\n.wrap-table table tbody tr td .button-wrapper button {\n        font-size: 1.5rem;\n        line-height: 1.8rem;\n        display: flex;\n        align-items: center;\n        background: transparent;\n        border: none;\n        outline: none;\n        padding: 0;\n        height: auto;\n        margin-right: 1.8rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon {\n          cursor: pointer;\n          margin-right: 0.8rem;\n          width: 2rem;\n          height: 2rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.edit {\n            background: center/contain no-repeat url('edit.svg'); }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.transfer {\n            background: center/contain no-repeat url('send.svg'); }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.delete {\n            background: center/contain no-repeat url('delete.svg'); }\n\n.wrap-table .empty-list {\n    margin: 2.5rem 3rem; }\n\n.blue-button {\n  width: 100%;\n  max-width: 18rem;\n  margin-top: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGNvbnRhY3RzXFxjb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBTVUsZUFBZSxFQUFBOztBQU56QjtJQWFVLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTs7QUFkakM7TUFnQlksZ0JBQWdCLEVBQUE7O0FBaEI1QjtNQW1CWSxnQkFBZ0IsRUFBQTs7QUFuQjVCO01Bc0JZLFlBQVk7TUFDWiwyQkFBc0I7TUFBdEIsc0JBQXNCLEVBQUE7O0FBdkJsQztNQTBCWSxlQUFlLEVBQUE7O0FBMUIzQjtNQTZCWSxhQUFhLEVBQUE7O0FBN0J6QjtRQWdDYyxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixhQUFhO1FBQ2IsVUFBVTtRQUNWLFlBQVk7UUFDWixvQkFBb0IsRUFBQTs7QUF6Q2xDO1VBNENnQixlQUFlO1VBQ2Ysb0JBQW9CO1VBQ3BCLFdBQVc7VUFDWCxZQUFZLEVBQUE7O0FBL0M1QjtZQWlEa0Isb0RBQXVFLEVBQUE7O0FBakR6RjtZQW9Ea0Isb0RBQXVFLEVBQUE7O0FBcER6RjtZQXVEa0Isc0RBQXlFLEVBQUE7O0FBdkQzRjtJQWtFSSxtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1pbi13aWR0aDogOTVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ud3JhcC10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRhYmxlIHtcbiAgICB0aGVhZCB7XG4gICAgICB0ciB7XG4gICAgICAgIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1heC13aWR0aDogNnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbGlhcyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcblxuICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICAmLmVkaXQge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Zyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYudHJhbnNmZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZW5kLnN2Zyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Zyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmVtcHR5LWxpc3Qge1xuICAgIG1hcmdpbjogMi41cmVtIDNyZW07XG4gIH1cbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMThyZW07XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(location, variablesService, backend) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.calculatedWidth = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.backend.getContactAlias();
    };
    ContactsComponent.prototype.delete = function (index) {
        if (this.variablesService.appPass) {
            this.variablesService.contacts.splice(index, 1);
            this.backend.storeSecureAppData();
        }
    };
    ContactsComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth +
            this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    ContactsComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContactsComponent.prototype, "head", void 0);
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts-tab/contracts-tab.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/contracts/contracts-tab/contracts-tab.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/contracts/contracts-tab/contracts-tab.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/contracts/contracts-tab/contracts-tab.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL2NvbnRyYWN0cy10YWIvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGNvbnRyYWN0c1xcY29udHJhY3RzLXRhYlxcY29udHJhY3RzLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy9jb250cmFjdHMtdGFiL2NvbnRyYWN0cy10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contracts/contracts-tab/contracts-tab.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contracts/contracts-tab/contracts-tab.component.ts ***!
  \********************************************************************/
/*! exports provided: ContractsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsTabComponent", function() { return ContractsTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContractsTabComponent = /** @class */ (function () {
    function ContractsTabComponent() {
    }
    ContractsTabComponent.prototype.ngOnInit = function () {
    };
    ContractsTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts-tab',
            template: __webpack_require__(/*! ./contracts-tab.component.html */ "./src/app/contracts/contracts-tab/contracts-tab.component.html"),
            styles: [__webpack_require__(/*! ./contracts-tab.component.scss */ "./src/app/contracts/contracts-tab/contracts-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContractsTabComponent);
    return ContractsTabComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts.component.html":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table scrolled-content\" *ngIf=\"variablesService.currentWallet.contracts.length; else emtyContracts\">\n  <table class=\"contracts-table\">\n    <thead>\n      <tr>\n        <th>{{ 'CONTRACTS.CONTRACTS' | translate }}</th>\n        <th>{{ 'CONTRACTS.DATE' | translate }}</th>\n        <th>{{ 'CONTRACTS.AMOUNT' | translate }}</th>\n        <th>{{ 'CONTRACTS.STATUS' | translate }}</th>\n        <th>{{ 'CONTRACTS.COMMENTS' | translate }}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of sortedArrayContracts\">\n        <div class=\"row-divider\"></div>\n        <tr [routerLink]=\"'/wallet/contracts/purchase/' + item.contract_id\">\n          <td>\n            <div class=\"contract\">\n              <i class=\"icon alert\" *ngIf=\"!item.is_new\"></i>\n              <i class=\"icon new\" *ngIf=\"item.is_new\"></i>\n              <i class=\"icon\" [class.purchase]=\"item.is_a\" [class.sell]=\"!item.is_a\"></i>\n              <span tooltip=\"{{ item.private_detailes.t }}\" placement=\"top-left\" tooltipClass=\"table-tooltip\"\n                [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{item.private_detailes.t}}</span>\n            </div>\n          </td>\n          <td>\n            <div>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</div>\n          </td>\n          <td>\n            <div>{{item.private_detailes.to_pay | intToMoney}} {{variablesService.defaultCurrency}}</div>\n          </td>\n          <td>\n            <div class=\"status\" [class.error-text]=\"item.state === 4\"\n              tooltip=\"{{item.state | contractStatusMessages : item.is_a}}\" placement=\"top\" tooltipClass=\"table-tooltip\"\n              [delay]=\"500\">\n              {{item.state | contractStatusMessages : item.is_a}}\n            </div>\n          </td>\n          <td>\n            <div class=\"comment\" tooltip=\"{{ item.private_detailes.c }}\" placement=\"top-right\"\n              tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\n              {{item.private_detailes.c}}\n            </div>\n          </td>\n        </tr>\n        <div class=\"row-divider\"></div>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"contracts-buttons\">\n  <button type=\"button\" class=\"blue-button\" [routerLink]=\"'/wallet/contracts/purchase'\">{{\n    'CONTRACTS.PURCHASE_BUTTON' | translate }}</button>\n  <button type=\"button\" class=\"blue-button\" disabled>{{ 'CONTRACTS.LISTING_BUTTON' | translate }}</button>\n</div>\n\n<ng-template #emtyContracts>\n  <span class=\"empty-contracts\">{{ 'CONTRACTS.EMPTY' | translate }}</span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/contracts/contracts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.empty-contracts {\n  font-size: 1.5rem; }\n\n.wrap-table {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: overlay; }\n\n.wrap-table table tbody tr {\n    cursor: pointer;\n    outline: none !important; }\n\n.wrap-table table tbody tr .contract {\n      position: relative;\n      display: flex;\n      align-items: center; }\n\n.wrap-table table tbody tr .contract .icon {\n        flex-shrink: 0; }\n\n.wrap-table table tbody tr .contract .icon.new, .wrap-table table tbody tr .contract .icon.alert {\n          margin-right: 1rem;\n          position: relative; }\n\n.wrap-table table tbody tr .contract .icon.new {\n          background: center/contain no-repeat url('new.svg');\n          width: 1.7rem;\n          height: 1.7rem; }\n\n.wrap-table table tbody tr .contract .icon.alert {\n          background: center/contain no-repeat url('alert.svg');\n          width: 1.7rem;\n          height: 1.2rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase, .wrap-table table tbody tr .contract .icon.sell {\n          margin-right: 1rem;\n          width: 1.5rem;\n          height: 1.5rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase {\n          background: center/contain no-repeat url('purchase.svg'); }\n\n.wrap-table table tbody tr .contract .icon.sell {\n          background: center/contain no-repeat url('sell.svg'); }\n\n.wrap-table table tbody tr .contract span {\n        text-overflow: ellipsis;\n        overflow: hidden; }\n\n.wrap-table table tbody tr .status,\n    .wrap-table table tbody tr .comment {\n      display: inline-flex;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 100%; }\n\n.contracts-buttons {\n  display: flex;\n  margin: 1rem 0;\n  width: 50%; }\n\n.contracts-buttons button {\n    flex: 0 1 50%;\n    margin-right: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxjb250cmFjdHNcXGNvbnRyYWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSHJCO0lBT1EsZUFBZTtJQUNmLHdCQUF3QixFQUFBOztBQVJoQztNQVVVLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7O0FBWjdCO1FBY1ksY0FBYyxFQUFBOztBQWQxQjtVQWlCYyxrQkFBa0I7VUFDbEIsa0JBQWtCLEVBQUE7O0FBbEJoQztVQXFCYyxtREFBc0U7VUFDdEUsYUFBYTtVQUNiLGNBQWMsRUFBQTs7QUF2QjVCO1VBMkJjLHFEQUF3RTtVQUN4RSxhQUFhO1VBQ2IsY0FBYyxFQUFBOztBQTdCNUI7VUFpQ2Msa0JBQWtCO1VBQ2xCLGFBQWE7VUFDYixjQUFjLEVBQUE7O0FBbkM1QjtVQXNDYyx3REFBMkUsRUFBQTs7QUF0Q3pGO1VBeUNjLG9EQUF1RSxFQUFBOztBQXpDckY7UUE2Q1ksdUJBQXVCO1FBQ3ZCLGdCQUFnQixFQUFBOztBQTlDNUI7O01BbURVLG9CQUFvQjtNQUNwQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTs7QUFPekI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFIWjtJQU1JLGFBQWE7SUFDYixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy9jb250cmFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZW1wdHktY29udHJhY3RzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ud3JhcC10YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBvdmVybGF5O1xuICB0YWJsZSB7XG4gICAgdGJvZHkge1xuICAgICAgdHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLmNvbnRyYWN0IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgJi5uZXcsXG4gICAgICAgICAgICAmLmFsZXJ0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLm5ldyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbmV3LnN2Zyk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFsZXJ0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9hbGVydC5zdmcpO1xuICAgICAgICAgICAgICB3aWR0aDogMS43cmVtO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucHVyY2hhc2UsXG4gICAgICAgICAgICAmLnNlbGwge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5wdXJjaGFzZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvcHVyY2hhc2Uuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuc2VsbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc2VsbC5zdmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyxcbiAgICAgICAgLmNvbW1lbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb250cmFjdHMtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMXJlbSAwO1xuICB3aWR0aDogNTAlO1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMCAxIDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/contracts/contracts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contracts/contracts.component.ts ***!
  \**************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractsComponent = /** @class */ (function () {
    function ContractsComponent(variablesService) {
        this.variablesService = variablesService;
    }
    Object.defineProperty(ContractsComponent.prototype, "sortedArrayContracts", {
        get: function () {
            return this.variablesService.currentWallet.contracts.sort(function (a, b) {
                if (a.is_new < b.is_new) {
                    return 1;
                }
                if (a.is_new > b.is_new) {
                    return -1;
                }
                if (a.timestamp < b.timestamp) {
                    return 1;
                }
                if (a.timestamp > b.timestamp) {
                    return -1;
                }
                if (a.contract_id < b.contract_id) {
                    return 1;
                }
                if (a.contract_id > b.contract_id) {
                    return -1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    ContractsComponent.prototype.ngOnInit = function () {
    };
    ContractsComponent.prototype.ngOnDestroy = function () {
    };
    ContractsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts',
            template: __webpack_require__(/*! ./contracts.component.html */ "./src/app/contracts/contracts.component.html"),
            styles: [__webpack_require__(/*! ./contracts.component.scss */ "./src/app/contracts/contracts.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], ContractsComponent);
    return ContractsComponent;
}());



/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\n      <span>{{ 'BREADCRUMBS.CREATE_WALLET' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-create\" [formGroup]=\"createForm\">\n\n    <div class=\"input-block\">\n      <label for=\"wallet-name\">{{'CREATE_WALLET.NAME' | translate }}</label>\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\"\n        [class.required-error]=\"createForm.controls['name'].dirty || createForm.controls['name'].touched\"\n        [placeholder]=\"createForm.controls['name'].dirty || createForm.controls['name'].touched ? ('CREATE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\n        [attr.readonly]=\"walletSaved ? '' : null\" [maxlength]=\"variablesService.maxWalletNameLength\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"createForm.controls['name'].invalid && !createForm.controls['name'].errors['required'] && (createForm.controls['name'].dirty || createForm.controls['name'].touched)\">\n        <div *ngIf=\"createForm.controls['name'].errors['duplicate']\">\n          {{ 'CREATE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\n        </div>\n      </div>\n      <div class=\"error-block\" *ngIf=\"createForm.get('name').value.length >= variablesService.maxWalletNameLength\">\n        {{ 'CREATE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\n      </div>\n    </div>\n    <div class=\"input-block\">\n      <label for=\"wallet-password\">{{ 'CREATE_WALLET.PASS' | translate }}</label>\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\"\n        placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_NEW' | translate }}\" [attr.readonly]=\"walletSaved ? '' : null\"\n        (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n      <div class=\"error-block\" *ngIf=\"createForm.controls['password'].dirty && createForm.controls['password'].errors\">\n        <div *ngIf=\"createForm.controls['password'].errors.pattern\">\n          {{ 'ERRORS.WRONG_PASSWORD' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block\">\n      <label for=\"confirm-wallet-password\">{{ 'CREATE_WALLET.CONFIRM' | translate }}</label>\n      <input type=\"password\" id=\"confirm-wallet-password\" formControlName=\"confirm\"\n        placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate }}\" [attr.readonly]=\"walletSaved ? '' : null\"\n        (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"createForm.controls['confirm'].dirty && createForm.controls['confirm'].dirty && createForm.errors\">\n        <div *ngIf=\"createForm.errors['confirm_mismatch'] && createForm.get('confirm').value.length > 0\">\n          {{ 'CREATE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"wrap-buttons\">\n      <button type=\"button\" class=\"blue-button_reset\" *ngIf=\"walletSaved\" disabled><i\n          class=\"icon\"></i>{{walletSavedName}}</button>\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\" [disabled]=\"!createForm.valid\"\n        *ngIf=\"!walletSaved\">{{ 'CREATE_WALLET.BUTTON_SELECT' | translate }}</button>\n      <button type=\"button\" class=\"blue-button_reset create-button\" (click)=\"createWallet()\"\n        [disabled]=\"!walletSaved\">{{\n        'CREATE_WALLET.BUTTON_CREATE' | translate }}</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.scss":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-create {\n  margin: 3.5rem 0 0 0;\n  width: 50%; }\n\n.form-create .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n\n.form-create .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-create .wrap-buttons button.blue-button_reset {\n        width: 30rem; }\n\n.form-create .wrap-buttons button.select-button {\n        width: 30rem; }\n\n.form-create .wrap-buttons button.create-button {\n        width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXdhbGxldC9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcY3JlYXRlLXdhbGxldFxcY3JlYXRlLXdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7O0FBRlo7SUFLSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7O0FBTjFCO01BU00sZ0JBQWdCLEVBQUE7O0FBVHRCO1FBWVEsWUFBWSxFQUFBOztBQVpwQjtRQWdCUSxZQUFZLEVBQUE7O0FBaEJwQjtRQW9CUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtd2FsbGV0L2NyZWF0ZS13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0tY3JlYXRlIHtcbiAgbWFyZ2luOiAzLjVyZW0gMCAwIDA7XG4gIHdpZHRoOiA1MCU7XG5cbiAgLndyYXAtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XG5cbiAgICAgICYuYmx1ZS1idXR0b25fcmVzZXQge1xuICAgICAgICB3aWR0aDogMzByZW07XG4gICAgICB9XG5cbiAgICAgICYuc2VsZWN0LWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMHJlbTtcbiAgICAgIH1cblxuICAgICAgJi5jcmVhdGUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletComponent", function() { return CreateWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateWalletComponent = /** @class */ (function () {
    function CreateWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, function (g) {
            return g.get('password').value === g.get('confirm').value ? null : { 'confirm_mismatch': true };
        });
        this.wallet = {
            id: ''
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
    }
    CreateWalletComponent.prototype.ngOnInit = function () {
    };
    CreateWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.router.navigate(['/seed-phrase'], { queryParams: { wallet_id: _this.wallet.id } });
        });
    };
    CreateWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.createForm.valid && this.createForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.saveFileDialog(this.translate.instant('CREATE_WALLET.TITLE_SAVE'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
                if (file_status) {
                    _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                    _this.walletSavedName = file_data.path.substr(file_data.path.lastIndexOf('/') + 1, file_data.path.length - 1);
                    _this.backend.generateWallet(file_data.path, _this.createForm.get('password').value, function (generate_status, generate_data, errorCode) {
                        if (generate_status) {
                            _this.wallet.id = generate_data.wallet_id;
                            _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](generate_data.wallet_id, _this.createForm.get('name').value, _this.createForm.get('password').value, generate_data['wi'].path, generate_data['wi'].address, generate_data['wi'].balance, generate_data['wi'].unlocked_balance, generate_data['wi'].mined_total, generate_data['wi'].tracking_hey);
                            _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(generate_data['wi'].address);
                            _this.variablesService.opening_wallet.total_history_item = 0;
                            _this.variablesService.opening_wallet.pages = new Array(1).fill(1);
                            _this.variablesService.opening_wallet.totalPages = 1;
                            _this.variablesService.opening_wallet.currentPage = 1;
                            _this.ngZone.run(function () {
                                _this.walletSaved = true;
                                _this.progressWidth = '33%';
                            });
                        }
                        else {
                            if (errorCode && errorCode === 'ALREADY_EXISTS') {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_TOP');
                            }
                            else {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_SYSTEM');
                            }
                        }
                    });
                }
            });
        }
    };
    CreateWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-wallet',
            template: __webpack_require__(/*! ./create-wallet.component.html */ "./src/app/create-wallet/create-wallet.component.html"),
            styles: [__webpack_require__(/*! ./create-wallet.component.scss */ "./src/app/create-wallet/create-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], CreateWalletComponent);
    return CreateWalletComponent;
}());



/***/ }),

/***/ "./src/app/deeplink/deeplink.component.html":
/*!**************************************************!*\
  !*** ./src/app/deeplink/deeplink.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"host-container\"\n  *ngIf=\"deeplink && (variablesService.daemon_state === 2 && variablesService.sync_started === false)\">\n  <div class=\"container\">\n    <ng-container *ngIf=\"this.walletsTopay.length > 1 && !secondStep\">\n      <div class=\"modal select-wallet\">\n        <div class=\"content\">\n          <div class=\"title\">\n            <span>Select wallet for action:</span>\n          </div>\n          <div class=\"inputs-container\">\n            <div class=\"lock-selection\">\n              <ng-select class=\"custom-select\" [items]=\"walletsTopay\" bindValue=\"wallet_id\" bindLabel=\"name\"\n                [(ngModel)]=\"walletToPayId\" [clearable]=\"false\" [searchable]=\"false\">\n                <ng-template ng-label-tmp let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                  {{item.name}}\n                </ng-template>\n              </ng-select>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"wrapper-buttons\">\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">{{ 'EXPORT_HISTORY.CANCEL' |\n            translate\n            }}</button>\n          <button type=\"submit\" class=\"blue-button\" (click)=\"nextStep()\">Next...</button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"secondStep && marketplaceModalShow && actionData.action === 'marketplace_offer_create'\">\n      <div class=\"modal marketplace\">\n        <div class=\"title\">\n          <span>Creating a marketplace offer</span>\n        </div>\n        <div class=\"data-container\">\n          <div class=\"row\"><span>Offer title:</span> {{actionData.title}}</div>\n          <div class=\"row\"><span>Description:</span> {{actionData.description}}</div>\n          <div class=\"row\"><span>Category:</span> {{actionData.category}}</div>\n          <div class=\"row\"><span>Price:</span> {{actionData.price}} {{this.variablesService.defaultCurrency}}</div>\n          <div class=\"row\"><span>Preview url:</span> {{actionData.url || actionData.img_url}}</div>\n          <div class=\"row\"><span>Contacts:</span> {{actionData.contact}}</div>\n          <div class=\"row\"><span>Comments:</span>{{actionData.comment || actionData.comments}}</div>\n          <div class=\"row mixins\"><span>Mixins:</span> {{actionData.mixins || defaultMixin}}</div>\n          <div class=\"row\"><span>Transaction fee:</span> {{this.variablesService.default_fee}}</div>\n        </div>\n        <div class=\"wrapper-buttons\">\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">{{ 'EXPORT_HISTORY.CANCEL' | translate\n            }}</button>\n          <button type=\"submit\" class=\"blue-button\" (click)=\"marketplaceSend()\">Sign & Send...</button>\n        </div>\n      </div>\n    </ng-container>\n    <!-----------------------------------------------------COSMOS--------------------------------------------------------------------------------->\n    <ng-container *ngIf=\"secondStep && marketplaceModalShow && actionData.action === 'marketplace_cancel_offer'\">\n      <div class=\"modal marketplace\">\n        <div class=\"title\">\n          <span>Cancel a marketplace offer</span>\n        </div>\n        <div class=\"data-container\">\n          <div class=\"row\"><span>tx_id:</span><span style=\"font-size: 16px;\">{{actionData.tx_id}}</span></div>\n          <div class=\"row\"><span>Transaction fee:</span> {{this.variablesService.default_fee}}</div>\n        </div>\n        <div class=\"wrapper-buttons\">\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">{{ 'EXPORT_HISTORY.CANCEL' | translate\n            }}</button>\n          <button type=\"submit\" class=\"blue-button\" (click)=\"marketplaceCancelSend()\">Sign & Send</button>\n        </div>\n      </div>\n    </ng-container>\n    \n    <ng-container *ngIf=\"marketplaceError\">\n      <div class=\"modal marketplace--success\">\n        <div class=\"title\">\n          <span>Operation Error</span>\n        </div>\n        <div class=\"data-container\">\n          <div class=\"row\"><span>Transaction</span>\n            <p>{{marketplaceError}}</p>\n            <p>was not found in the wallet.</p>\n          </div>\n        </div>\n        <div class=\"wrapper-buttons\">\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">Close</button>\n        </div>\n      </div>\n    </ng-container>\n    <!-----------------------------------------------------COSMOS--------------------------------------------------------------------------------->\n    <ng-container *ngIf=\"marketplaceConfirmHash\">\n      <div class=\"modal marketplace--success\">\n        <div class=\"title\">\n          <span>Operation successful</span>\n        </div>\n        <div class=\"data-container\">\n          <div class=\"row\"><span>Operation hash:</span>\n            <p (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, marketplaceConfirmHash)\">\n              {{marketplaceConfirmHash}}<i class=\"icon\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\"\n                (click)=\"copyHash()\"></i></p>\n          </div>\n        </div>\n        <div class=\"wrapper-buttons\">\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">Close</button>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<app-sync-modal *ngIf=\"deeplink && (variablesService.daemon_state !== 2 || variablesService.sync_started === true)\">\n</app-sync-modal>\n"

/***/ }),

/***/ "./src/app/deeplink/deeplink.component.scss":
/*!**************************************************!*\
  !*** ./src/app/deeplink/deeplink.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host-container {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.deep-overflow {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 0; }\n\n.container {\n  position: relative;\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 3.5rem; }\n\n.modal .title {\n    padding: 0 0 7.5rem;\n    font-size: 3.6rem;\n    font-weight: 500;\n    text-align: center;\n    line-height: 4.296rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 30rem; }\n\n.modal .wrapper-buttons button:first-child {\n        margin-right: 5rem; }\n\n.modal.select-wallet .title {\n    padding: 0 0 7.5rem;\n    font-size: 3.6rem;\n    line-height: 4.296rem; }\n\n.modal.select-wallet .content {\n    display: flex;\n    margin: 0 auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    flex-direction: column; }\n\n.modal.select-wallet .content .ng-select.custom-select {\n      border: 1px solid #5c1feb;\n      background: linear-gradient(#000 10%, #36157e 50%, #000 90%);\n      border-radius: 1rem;\n      width: 100%;\n      font-weight: 600;\n      padding: 0.3rem 1rem; }\n\n.modal.select-wallet .wrapper-buttons {\n    margin-top: 16rem; }\n\n.modal.marketplace {\n    padding: 2.2rem 20rem 4rem; }\n\n.modal.marketplace .title {\n      padding: 1rem 0 3rem; }\n\n.modal.marketplace .data-container {\n      max-width: 70rem; }\n\n.modal.marketplace .data-container .row {\n        color: rgba(255, 255, 255, 0.616);\n        margin-bottom: 1.4rem;\n        font-weight: 400;\n        font-size: 2.8rem;\n        line-height: normal; }\n\n.modal.marketplace .data-container .row.mixins {\n          margin-top: 3.8rem; }\n\n.modal.marketplace .data-container .row span {\n          font-weight: 700;\n          color: #fff; }\n\n.modal.marketplace .wrapper-buttons {\n      margin: 4.2rem auto 0; }\n\n.modal.marketplace--success .data-container .row {\n      color: rgba(255, 255, 255, 0.616);\n      font-weight: 400;\n      font-size: 2.8rem;\n      line-height: normal; }\n\n.modal.marketplace--success .data-container .row span {\n        font-weight: 700;\n        color: #fff; }\n\n.modal.marketplace--success .data-container .icon {\n      cursor: pointer;\n      margin-left: 1rem; }\n\n.modal.marketplace--success .data-container .icon.copy {\n        transition: all 0.25s ease;\n        width: 2.4rem;\n        height: 2.4rem;\n        background: center/contain no-repeat url('copy.svg'); }\n\n.modal.marketplace--success .data-container .icon.copied {\n        background: center/contain no-repeat url('complete-testwallet.svg'); }\n\n.modal.marketplace--success .wrapper-buttons {\n      justify-content: center;\n      margin-top: 4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVlcGxpbmsvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGRlZXBsaW5rXFxkZWVwbGluay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFKakI7SUFPSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCLEVBQUE7O0FBWHpCO0lBZUksYUFBYSxFQUFBOztBQWZqQjtJQW1CSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBOztBQXJCbEM7TUEyQk0sWUFBWSxFQUFBOztBQTNCbEI7UUF5QlEsa0JBQWtCLEVBQUE7O0FBekIxQjtJQWdDTSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQixFQUFBOztBQWxDM0I7SUFzQ00sYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBOztBQXpDNUI7TUEyQ1EseUJBQXlCO01BQ3pCLDREQUEwRDtNQUMxRCxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixvQkFBb0IsRUFBQTs7QUFoRDVCO0lBcURNLGlCQUFpQixFQUFBOztBQXJEdkI7SUF5REksMEJBQTBCLEVBQUE7O0FBekQ5QjtNQTJETSxvQkFBb0IsRUFBQTs7QUEzRDFCO01BOERNLGdCQUFnQixFQUFBOztBQTlEdEI7UUFnRVEsaUNBQWlDO1FBQ2pDLHFCQUFxQjtRQUlyQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFBOztBQXZFM0I7VUFtRVUsa0JBQWtCLEVBQUE7O0FBbkU1QjtVQXlFVSxnQkFBZ0I7VUFDaEIsV0FBVyxFQUFBOztBQTFFckI7TUErRU0scUJBQXFCLEVBQUE7O0FBL0UzQjtNQW9GVSxpQ0FBaUM7TUFDakMsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTs7QUF2RjdCO1FBeUZZLGdCQUFnQjtRQUNoQixXQUFXLEVBQUE7O0FBMUZ2QjtNQThGVSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7O0FBL0YzQjtRQWlHWSwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLGNBQWM7UUFDZCxvREFBdUUsRUFBQTs7QUFwR25GO1FBdUdZLG1FQUFzRixFQUFBOztBQXZHbEc7TUE0R1EsdUJBQXVCO01BQ3ZCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVlcGxpbmsvZGVlcGxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9zdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuLmRlZXAtb3ZlcmZsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG59XG4ubW9kYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMuNXJlbTtcblxuICAudGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMCA3LjVyZW07XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQuMjk2cmVtO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAud3JhcHBlci1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gICAgICB9XG4gICAgICB3aWR0aDogMzByZW07XG4gICAgfVxuICB9XG4gICYuc2VsZWN0LXdhbGxldCB7XG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDAgMCA3LjVyZW07XG4gICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0LjI5NnJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLm5nLXNlbGVjdC5jdXN0b20tc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVjMWZlYjtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAgMTAlLCMzNjE1N2UgNTAlLCMwMDAgOTAlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC53cmFwcGVyLWJ1dHRvbnMge1xuICAgICAgbWFyZ2luLXRvcDogMTZyZW07XG4gICAgfVxuICB9XG4gICYubWFya2V0cGxhY2Uge1xuICAgIHBhZGRpbmc6IDIuMnJlbSAyMHJlbSA0cmVtO1xuICAgIC50aXRsZSB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDAgM3JlbTtcbiAgICB9XG4gICAgLmRhdGEtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogNzByZW07XG4gICAgICAucm93IHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTYpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XG4gICAgICAgICYubWl4aW5zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLndyYXBwZXItYnV0dG9ucyB7XG4gICAgICBtYXJnaW46IDQuMnJlbSBhdXRvIDA7XG4gICAgfVxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgLmRhdGEtY29udGFpbmVyIHtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTYpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAmLmNvcHkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogMi40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5jb3BpZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAud3JhcHBlci1idXR0b25zIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/deeplink/deeplink.component.ts":
/*!************************************************!*\
  !*** ./src/app/deeplink/deeplink.component.ts ***!
  \************************************************/
/*! exports provided: DeeplinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeeplinkComponent", function() { return DeeplinkComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeeplinkComponent = /** @class */ (function () {
    function DeeplinkComponent(_router, variablesService, backend, ngZone) {
        var _this = this;
        this._router = _router;
        this.variablesService = variablesService;
        this.backend = backend;
        this.ngZone = ngZone;
        this.deeplink = null;
        this.secondStep = false;
        this.walletToPayId = 0;
        this.marketplaceModalShow = true;
        this.copyAnimation = false;
        this.marketplaceConfirmHash = null;
        this.marketplaceError = null;
        this.sendRoute = false;
        this.actionData = {};
        this.defaultMixin = _shared_constants__WEBPACK_IMPORTED_MODULE_6__["MIXIN"];
        this.walletsTopay = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.variablesService.deeplink$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            _this.ngZone.run(function () {
                if (data) {
                    _this.deeplink = data;
                    _this.actionData = {};
                    _this.walletsTopay = _this.variablesService.wallets.filter(function (wallet) { return !wallet.is_watch_only || !wallet.is_auditable; });
                    if (_this.walletsTopay.length === 0) {
                        _this.canselAction();
                        return;
                    }
                    _this.actionData = _this.parceString(_this.deeplink);
                    if (_this.walletsTopay.length === 1) {
                        if (variablesService.daemon_state === 2 && variablesService.sync_started === false) {
                            _this.walletToPayId = _this.walletsTopay[0].wallet_id;
                            _this.nextStep();
                        }
                        else {
                            _this.nextStepInterval = setInterval(function () {
                                if (variablesService.daemon_state === 2 && variablesService.sync_started === false) {
                                    _this.walletToPayId = _this.walletsTopay[0].wallet_id;
                                    _this.nextStep();
                                    clearInterval(_this.nextStepInterval);
                                }
                            }, 1500);
                        }
                    }
                }
                else {
                    _this.deeplink = null;
                }
            });
        });
    }
    DeeplinkComponent.prototype.ngOnInit = function () {
    };
    DeeplinkComponent.prototype.parceString = function (string) {
        var qoutesRex = new RegExp(/'|"|”|%E2%80%9D|%22/g);
        var spaceSymbolRex = new RegExp(/%20/g);
        var newobj = {};
        var newstring = string.substr(5); // delete NiR:;
        newstring.split('&').forEach(function (string) {
            var _a = string.split('='), key = _a[0], value = _a[1];
            newobj[key] = value.replace(qoutesRex, '').replace(spaceSymbolRex, " ").trim();
        });
        return newobj;
    };
    DeeplinkComponent.prototype.canselAction = function () {
        this.deeplink = null;
        this.variablesService.deeplink$.next(null);
        this.variablesService.sendActionData$.next({});
        this.actionData = {};
        this.secondStep = false;
    };
    DeeplinkComponent.prototype.marketplaceSend = function () {
        var _this = this;
        var offerObject = {
            wallet_id: this.walletToPayId,
            od: {
                ap: this.actionData.price || '',
                at: '1',
                cat: this.actionData.category || '',
                cnt: this.actionData.contact || '',
                com: this.actionData.comment || this.actionData.comments || '',
                do: this.actionData.description || '',
                et: 10,
                fee: new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"]('' +
                    (+this.actionData.fee || +this.variablesService.default_fee) *
                        1000000000000),
                lci: '',
                lco: 'World Wide',
                ot: 1,
                pt: 'Credit cards, BTC, NiR, ETH',
                t: this.actionData.title || '',
                url: this.actionData.url || this.actionData.img_url || '',
            },
        };
        this.backend.push_offer(offerObject, function (status, data) {
            _this.ngZone.run(function () {
                if (data.success) {
                    _this.marketplaceModalShow = false;
                    _this.marketplaceConfirmHash = data.tx_hash;
                }
                else {
                    _this.canselAction();
                }
            });
        });
    };
    DeeplinkComponent.prototype.marketplaceCancelSend = function () {
        var _this = this;
        var offerObject = {
            wallet_id: this.walletToPayId,
            tx_id: this.actionData.tx_id,
            no: 0
        };
        this.backend.cancel_offer(offerObject, function (status, data) {
            _this.ngZone.run(function () {
                if (data.success) {
                    _this.marketplaceModalShow = false;
                    _this.marketplaceConfirmHash = data.tx_hash;
                }
                else {
                    _this.marketplaceModalShow = false;
                    _this.canselAction();
                }
            });
        });
    };
    DeeplinkComponent.prototype.copyHash = function () {
        var _this = this;
        this.backend.setClipboard(this.marketplaceConfirmHash);
        this.copyAnimation = true;
        setTimeout(function () { return (_this.copyAnimation = false); }, 2000);
    };
    DeeplinkComponent.prototype.nextStep = function () {
        if (this.actionData.action === 'send') {
            this.variablesService.sendActionData$.next(this.actionData);
            this.variablesService.deeplink$.next(null);
            this.variablesService.setCurrentWallet(this.walletToPayId);
            this._router.navigate(['/wallet/send']).then();
            this.secondStep = false;
        }
        else if (this.actionData.action === 'escrow') {
            this.variablesService.sendActionData$.next(this.actionData);
            this.variablesService.deeplink$.next(null);
            this.variablesService.setCurrentWallet(this.walletToPayId);
            this._router.navigate(['/wallet/contracts/purchase']).then();
            this.secondStep = false;
        }
        else if (this.actionData.action === 'ACS') {
            this.variablesService.sendActionData$.next(this.actionData);
            this.variablesService.deeplink$.next(null);
            this.variablesService.setCurrentWallet(this.walletToPayId);
            this._router.navigate(['/wallet/ACS']).then();
            this.secondStep = false;
        }
        else {
            this.secondStep = true;
        }
    };
    DeeplinkComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.variablesService.deeplink$.next(null);
    };
    DeeplinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-deeplink',
            template: __webpack_require__(/*! ./deeplink.component.html */ "./src/app/deeplink/deeplink.component.html"),
            styles: [__webpack_require__(/*! ./deeplink.component.scss */ "./src/app/deeplink/deeplink.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], DeeplinkComponent);
    return DeeplinkComponent;
}());



/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/wallet/history']\">{{ wallet.name }}</span>\n      <span>{{ 'BREADCRUMBS.EDIT_ALIAS' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-edit\">\n\n    <div class=\"input-block alias-name\">\n      <label for=\"alias-name\">\n        {{ 'EDIT_ALIAS.NAME.LABEL' | translate }}\n      </label>\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\"\n        placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\n    </div>\n\n    <div class=\"input-block textarea\">\n      <label for=\"alias-comment\">\n        {{ 'EDIT_ALIAS.COMMENT.LABEL' | translate }}\n      </label>\n      <textarea id=\"alias-comment\" class=\"scrolled-content\" [(ngModel)]=\"alias.comment\"\n        [ngModelOptions]=\"{standalone: true}\" [maxlength]=\"variablesService.maxCommentLength\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\"\n        placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\">\n      </textarea>\n      <div class=\"error-block\" *ngIf=\"alias.comment.length > 0 && notEnoughMoney\">\n        {{ 'EDIT_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\n      </div>\n      <div class=\"error-block\" *ngIf=\"alias.comment.length >= variablesService.maxCommentLength\">\n        {{ 'EDIT_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\n      </div>\n    </div>\n\n    <div class=\"alias-cost\">{{ \"EDIT_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency:\n      variablesService.defaultCurrency} }}</div>\n\n    <div class=\"wrap-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"updateAlias()\"\n        [disabled]=\"notEnoughMoney || (oldAliasComment === alias.comment) || alias.comment.length > variablesService.maxCommentLength\">{{\n        'EDIT_ALIAS.BUTTON_EDIT' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.scss":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-edit {\n  margin: 2.4rem 0; }\n  .form-edit .alias-name {\n    width: 50%; }\n  .form-edit .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-edit .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-edit .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hbGlhcy9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcZWRpdC1hbGlhc1xcZWRpdC1hbGlhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBSUksVUFBVSxFQUFBO0VBSmQ7SUFRSSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFUcEI7SUFhSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQixFQUFBO0VBZjFCO01Ba0JNLGdCQUFnQjtNQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWFsaWFzL2VkaXQtYWxpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1lZGl0IHtcbiAgbWFyZ2luOiAyLjRyZW0gMDtcblxuICAuYWxpYXMtbmFtZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5hbGlhcy1jb3N0IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG5cbiAgLndyYXAtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAyLjVyZW0gLTAuN3JlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMC43cmVtO1xuICAgICAgd2lkdGg6IDE1cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.ts ***!
  \****************************************************/
/*! exports provided: EditAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAliasComponent", function() { return EditAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAliasComponent = /** @class */ (function () {
    function EditAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.requestProcessing = false;
    }
    EditAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment
        };
        this.oldAliasComment = alias.comment;
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    EditAliasComponent.prototype.updateAlias = function () {
        var _this = this;
        if (this.requestProcessing || this.notEnoughMoney || this.oldAliasComment === this.alias.comment || this.alias.comment.length > this.variablesService.maxCommentLength) {
            return;
        }
        this.requestProcessing = true;
        this.backend.updateAlias(this.wallet.wallet_id, this.alias, this.variablesService.default_fee, function (status) {
            if (status) {
                _this.modalService.prepareModal('success', '');
                _this.wallet.alias['comment'] = _this.alias.comment;
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/']);
                });
            }
            _this.requestProcessing = false;
        });
    };
    EditAliasComponent.prototype.back = function () {
        this.location.back();
    };
    EditAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-alias',
            template: __webpack_require__(/*! ./edit-alias.component.html */ "./src/app/edit-alias/edit-alias.component.html"),
            styles: [__webpack_require__(/*! ./edit-alias.component.scss */ "./src/app/edit-alias/edit-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EditAliasComponent);
    return EditAliasComponent;
}());



/***/ }),

/***/ "./src/app/exchange/exchange.component.html":
/*!**************************************************!*\
  !*** ./src/app/exchange/exchange.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trading\">\n  <div class=\"widget_custom\">\n    <div class=\"livecoinwatch-widget-1\" lcw-coin=\"NIR\" lcw-base=\"USD\" lcw-secondary=\"BTC\" lcw-period=\"d\" lcw-color-tx=\"#FFF9AD\" lcw-color-pr=\"#FFF9AD\" lcw-color-bg=\"rgb(12,45,36,0.1)\" lcw-border-w=\"none\" ></div>\n    <div class=\"exchsnge_block3\">\n        <div class=\"article\">\n            <span class=\"article_text\">{{ 'EXCHANGE.EXCHANGE_TEXT' | translate }}</span>\n        </div>\n    </div>\n  </div>\n  <div class=\"exchsnge_view\">\n      <div class=\"exchsnge_block1\">\n          <div class=\"exchange\"><img src=\"assets/images/TradeOgre.png\" />\n              <span>NiR/USDT: {{priceOgreUsdt}}</span>\n              <button class=\"buy_sell_button\" (click)=\"openInBrowser('tradeogre.com/exchange/NIR-USDT')\">{{ 'EXCHANGE.EXCHANGE_BUTTON' | translate }}</button>\n          </div>\n          <div class=\"exchange\"><img src=\"assets/images/XgX.png\" />\n              <span>NiR/USDT: {{priceXeggexUsdt}}</span>\n              <button class=\"buy_sell_button\" (click)=\"openInBrowser('xeggex.com/market/NIR_USDT')\">{{ 'EXCHANGE.EXCHANGE_BUTTON' | translate }}</button>\n          </div>\n          <div class=\"exchange exchange_new\">\n              <span>New Listing</span>\n              <button class=\"buy_sell_button\">{{ 'EXCHANGE.EXCHANGE_BUTTON' | translate }}</button>\n          </div>\n      </div>\n      <div class=\"exchsnge_block2\">\n          <div class=\"exchange\"><img src=\"assets/images/nonkyc.png\" />\n              <span>NiR/USDT: {{priceNonkycUsdt}}</span>\n              <button class=\"buy_sell_button\" (click)=\"openInBrowser('nonkyc.io/market/NIR_USDT')\">{{ 'EXCHANGE.EXCHANGE_BUTTON' | translate }}</button>\n          </div>\n          <div class=\"exchange\"><img src=\"assets/images/financex.png\" />\n              <span>NiR/USDT: {{priceFinancexUsdt}}</span>\n              <button class=\"buy_sell_button\" (click)=\"openInBrowser('financex.trade/trading/nirusdt')\">{{ 'EXCHANGE.EXCHANGE_BUTTON' | translate }}</button>\n          </div>\n          <div class=\"exchange exchange_new\">\n              <span>New Listing</span>\n              <button class=\"buy_sell_button\">{{ 'EXCHANGE.EXCHANGE_BUTTON' | translate }}</button>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/exchange.component.scss":
/*!**************************************************!*\
  !*** ./src/app/exchange/exchange.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price-widget {\n  display: flex;\n  flex: 1 1 100%;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 100%;\n  height: 100%; }\n\n.widget_custom:hover {\n  transform: scale(1.2);\n  width: 39%;\n  background-color: #001A12; }\n\n.widget_custom {\n  width: 38%; }\n\n.trading {\n  display: flex; }\n\n.exchange_new {\n  text-align: center;\n  padding-top: 12% !important; }\n\n.exchange {\n  width: 100%;\n  min-width: 310px;\n  height: 100px;\n  margin: 5px;\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 5px; }\n\n.exchsnge_view {\n  display: flex;\n  width: 50%;\n  margin-left: 3rem; }\n\n.exchsnge_block1 .exchsnge_block1 {\n  width: 50%; }\n\n.exchange:hover {\n  transform: scale(1.2);\n  background-color: #001A12; }\n\n.buy_sell_button {\n  padding: 0 2rem;\n  font-size: 2rem;\n  overflow: hidden;\n  line-height: 3rem;\n  font-weight: 500;\n  border-radius: 2rem;\n  border: 1px solid;\n  margin-left: 1rem;\n  color: #FFF9AD; }\n\n.exchsnge_view2 {\n  display: flex; }\n\n.exchange2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100px;\n  margin: 5px;\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 5px; }\n\n.exchsnge_block3 {\n  display: flex; }\n\n.article {\n  padding: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaGFuZ2UvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGV4Y2hhbmdlXFxleGNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZUFBZTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leGNoYW5nZS9leGNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZS13aWRnZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLndpZGdldF9jdXN0b206aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB3aWR0aDogMzklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUExMjtcclxuICB9XHJcbiAgLndpZGdldF9jdXN0b20ge1xyXG4gICAgd2lkdGg6IDM4JTtcclxuICB9XHJcbiAgLnRyYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmV4Y2hhbmdlX25ldyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTIlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5leGNoYW5nZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmV4Y2hzbmdlX3ZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICB9XHJcbiAgLmV4Y2hzbmdlX2Jsb2NrMSAuZXhjaHNuZ2VfYmxvY2sxIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5leGNoYW5nZTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFBMTI7XHJcbiAgfVxyXG4gIC5idXlfc2VsbF9idXR0b24ge1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAjRkZGOUFEO1xyXG4gIH1cclxuICAuZXhjaHNuZ2VfdmlldzIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmV4Y2hhbmdlMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5leGNoc25nZV9ibG9jazMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmFydGljbGUge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/exchange/exchange.component.ts":
/*!************************************************!*\
  !*** ./src/app/exchange/exchange.component.ts ***!
  \************************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return ExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ExchangeComponent = /** @class */ (function () {
    function ExchangeComponent(httpClient, variablesService, backend, document, renderer2) {
        this.httpClient = httpClient;
        this.variablesService = variablesService;
        this.backend = backend;
        this.document = document;
        this.renderer2 = renderer2;
        this.title = 'widget';
        this.textScript = null;
        this.priceNonkycUsdt = 'No Data';
        this.priceNonkycBtc = 'No Data';
        this.priceXeggexUsdt = 'No Data';
        this.priceXeggexBtc = 'No Data';
        this.priceOgreUsdt = 'No Data';
        this.priceFinancexUsdt = 'No Data';
        this.priceFinancexXmr = 'No Data';
    }
    ExchangeComponent.prototype.handleError = function (error) {
        var errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // Server-side errors
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    };
    ExchangeComponent.prototype.getPriceData = function (url) {
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    ExchangeComponent.prototype.getDataPrice = function () {
        var _this = this;
        this.getPriceData('https://tradeogre.com/api/v1/ticker/NIR-USDT').subscribe(function (response) { _this.priceOgreUsdt = Number(response.price).toFixed(4).toString(); });
        this.getPriceData('https://api.xeggex.com/api/v2/asset/getbyticker/NIR').subscribe(function (response) { _this.priceXeggexUsdt = Number(response.usdValue).toFixed(4).toString(); });
        this.getPriceData('https://api.nonkyc.io/api/v2/asset/getbyticker/NIR').subscribe(function (response) { _this.priceNonkycUsdt = Number(response.usdValue).toFixed(4).toString(); });
        this.getPriceData('https://financex.trade/api/v2/trade/public/currencies/nir').subscribe(function (response) { _this.priceFinancexUsdt = Number(response.price).toFixed(4).toString(); });
    };
    ExchangeComponent.prototype.openInBrowser = function (url) {
        this.backend.openUrlInBrowser(url);
    };
    ExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.textScript = this.renderer2.createElement('script');
        this.textScript.src = 'assets/scripts/lcw-widget.js';
        this.renderer2.appendChild(this.document.body, this.textScript);
        this.getDataPrice();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(60000).subscribe(function () {
            _this.getDataPrice();
        });
    };
    ExchangeComponent.prototype.ngOnDestroy = function () {
        this.renderer2.removeChild(this.document.body, this.textScript);
    };
    ExchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exchange',
            template: __webpack_require__(/*! ./exchange.component.html */ "./src/app/exchange/exchange.component.html"),
            styles: [__webpack_require__(/*! ./exchange.component.scss */ "./src/app/exchange/exchange.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "./src/app/export-import/export-import.component.html":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\n  <div>\n    <div class=\"head\">\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n        <i class=\"icon back\"></i>\n        <span>{{ 'COMMON.BACK' | translate }}</span>\n      </button>\n    </div>\n\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.IMPORT_EXPORT' | translate }}</h3>\n\n    <div class=\"btn-wrapper\">\n      <button class=\"blue-button\" type=\"button\" (click)=\"import()\">\n        {{ 'CONTACTS.IMPORT' | translate }}\n      </button>\n      <button class=\"blue-button\" type=\"button\" (click)=\"export()\">\n        {{ 'CONTACTS.EXPORT' | translate }}\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/export-import/export-import.component.scss":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.head {\n  justify-content: flex-end; }\n\n.contacts-title {\n  font-size: 1.7rem;\n  margin-bottom: 1rem; }\n\n.btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -0.5rem;\n  padding: 1.5rem 0; }\n\n.btn-wrapper button {\n    flex: 1 0 auto;\n    margin: 0 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3J0LWltcG9ydC9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcZXhwb3J0LWltcG9ydFxcZXhwb3J0LWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBTG5CO0lBUUksY0FBYztJQUNkLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZXhwb3J0LWltcG9ydC9leHBvcnQtaW1wb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY29udGFjdHMtdGl0bGUge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmJ0bi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgLTAuNXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDA7XG5cbiAgYnV0dG9uIHtcbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBtYXJnaW46IDAgMC41cmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/export-import/export-import.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/export-import/export-import.component.ts ***!
  \**********************************************************/
/*! exports provided: ExportImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImportComponent", function() { return ExportImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExportImportComponent = /** @class */ (function () {
    function ExportImportComponent(location, variablesService, backend, modalService, papa, translate, router, ngZone) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modalService = modalService;
        this.papa = papa;
        this.translate = translate;
        this.router = router;
        this.ngZone = ngZone;
    }
    ExportImportComponent.prototype.ngOnInit = function () { };
    ExportImportComponent.prototype.import = function () {
        var _this = this;
        this.backend.openFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                if (_this.isValid(file_data.path)) {
                    _this.backend.loadFile(file_data.path, function (status, data) {
                        if (!status) {
                            _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT_EMPTY');
                        }
                        else {
                            var options = {
                                header: true
                            };
                            var elements = _this.papa.parse(data, options);
                            var isArray = Array.isArray(elements.data);
                            if (isArray && elements.data.length !== 0 && !elements.errors.length) {
                                if (!_this.variablesService.contacts.length) {
                                    elements.data.forEach(function (element) {
                                        _this.variablesService.contacts.push(element);
                                    });
                                }
                                else {
                                    elements.data.forEach(function (element) {
                                        var indexName = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === element.name; });
                                        var indexAddress = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === element.address; });
                                        if (indexAddress === -1 && indexName === -1) {
                                            _this.variablesService.contacts.push(element);
                                        }
                                        if (indexName !== -1 && indexAddress === -1) {
                                            _this.variablesService.contacts.push({
                                                name: element.name + " " + _this.translate.instant('CONTACTS.COPY'),
                                                address: element.address,
                                                notes: element.notes
                                            });
                                        }
                                    });
                                }
                                _this.backend.getContactAlias();
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/contacts']);
                                });
                            }
                            if (elements.errors.length) {
                                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT');
                                console.log(elements.errors);
                            }
                        }
                    });
                }
                else {
                    _this.modalService.prepareModal('error', 'CONTACTS.ERROR_TYPE_FILE');
                }
            }
        });
    };
    ExportImportComponent.prototype.export = function () {
        var _this = this;
        var contacts = [];
        this.variablesService.contacts.forEach(function (contact) {
            delete contact.alias;
            contacts.push(contact);
        });
        this.backend.saveFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (!_this.variablesService.contacts.length && !(file_data.error_code === 'CANCELED')) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EMPTY_LIST');
            }
            var path = _this.isValid(file_data.path) ? file_data.path : file_data.path + ".csv";
            if (file_status && _this.isValid(path) && _this.variablesService.contacts.length) {
                _this.backend.storeFile(path, _this.papa.unparse(contacts));
            }
            if (!(file_data.error_code === 'CANCELED') && !_this.isValid(path)) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EXPORT');
            }
        });
    };
    ExportImportComponent.prototype.isValid = function (file) {
        return file.endsWith('.csv');
    };
    ExportImportComponent.prototype.back = function () {
        this.location.back();
    };
    ExportImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-import',
            template: __webpack_require__(/*! ./export-import.component.html */ "./src/app/export-import/export-import.component.html"),
            styles: [__webpack_require__(/*! ./export-import.component.scss */ "./src/app/export-import/export-import.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ExportImportComponent);
    return ExportImportComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"history-wrap\">\n  <div class=\"wrap-table scrolled-content\">\n    <table class=\"history-table\">\n      <thead>\n        <tr #head (window:resize)=\"calculateWidth()\">\n          <th>{{ 'HISTORY.STATUS' | translate }}</th>\n          <th>{{ 'HISTORY.DATE' | translate }}</th>\n          <th>{{ 'HISTORY.AMOUNT' | translate }}</th>\n          <th>{{ 'HISTORY.FEE' | translate }}</th>\n          <th>{{ 'HISTORY.ADDRESS' | translate }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let item of variablesService.currentWallet.history; let i = index\">\n          <ng-container *ngIf=\"!item.comment.startsWith('ACS:')\">\n          <tr (click)=\"openDetails(item.tx_hash)\" [class.locked-transaction]=\"!item.is_mining && item.unlock_time > 0\">\n            <td>\n              <div class=\"status\" [ngClass]=\"item.is_income ? 'received' : 'send'\">\n                <ng-container *ngIf=\"getHeight(item) < 10\">\n                  <svg class=\"confirmation\" style=\"transform: rotateZ(-90deg)\"\n                    tooltip=\"{{ 'HISTORY.STATUS_TOOLTIP' | translate : {'current': getHeight(item), 'total': 10} }}\"\n                    placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\n                    <rect stroke-dasharray=\"100\" fill=\"transparent\" stroke-dashoffset=\"0\" x=\"35%\" y=\"35%\"\n                      stroke=\"#FFF9AD\" width=\"30%\" height=\"30%\" stroke-width=\"0.3rem\">\n                    </rect>\n                    <circle class=\"progress-circle\" cx=\"50%\" cy=\"50%\"\n                      [style.stroke]=\"item.is_income ? '#FFF9E7' : '#A34C42'\" r=\"0.7rem\" fill=\"transparent\"\n                      stroke-width=\"0.3rem\" stroke-dasharray=\"4.5rem\" stroke-dashoffset=\"4.5rem\" stroke-linecap=\"round\"\n                      [style.stroke-dashoffset]=\"strokeSize(item)\"></circle>\n                  </svg>\n                </ng-container>\n                <ng-container *ngIf=\"getHeight(item) === 10\">\n                  <img *ngIf=\"!item.is_income\" class=\"status-transaction\" src=\"./assets/icons/send-tab.svg\" alt=\"\">\n                  <img *ngIf=\"item.is_income\" class=\"status-transaction\" src=\"./assets/icons/receive.svg\" alt=\"\">\n                </ng-container>\n                <span class=\"status-transaction-text\">{{ (item.is_income ? 'HISTORY.RECEIVED' : 'HISTORY.SEND') |\n                  translate }}</span>\n                <ng-container *ngIf=\"item.unlock_time !== 0 && item.tx_type !== 6\">\n                  <ng-container *ngIf=\"isLocked(item); else unlock\">\n                    <ng-container *ngIf=\"item.unlock_time < 500000000\">\n                      <i class=\"icon lock-transaction\"\n                        tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': time(item) | date : 'MM.dd.yy'} }}\"\n                        placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\n                        [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\n                    </ng-container>\n                    <ng-container *ngIf=\"item.unlock_time > 500000000\">\n                      <i class=\"icon lock-transaction\"\n                        tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\"\n                        placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\n                        [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\n                    </ng-container>\n                  </ng-container>\n                  <ng-template #unlock>\n                    <i class=\"icon unlock-transaction\" placement=\"bottom-left\"\n                      [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\n                  </ng-template>\n                </ng-container>\n              </div>\n            </td>\n            <td>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</td>\n            <td>\n              <span *ngIf=\"item.sortAmount && item.sortAmount.toString() !== '0'\">{{item.sortAmount | intToMoney}}\n                {{variablesService.defaultCurrency}}</span>\n            </td>\n            <td>\n              <span *ngIf=\"item.sortFee && item.sortFee.toString() !== '0'\">{{item.sortFee | intToMoney}}\n                {{variablesService.defaultCurrency}}</span>\n            </td>\n            <td class=\"remote-address\">\n              <span *ngIf=\"!(item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0])\">{{item |\n                historyTypeMessages}}</span>\n              <span *ngIf=\"item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0]\"\n                (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, item.remote_addresses[0])\">{{addressAlias(item.remote_addresses[0]) || item.remote_addresses[0]}}</span>\n            </td>\n          </tr>\n          <div class=\"row-divider\"></div>\n          <tr class=\"transaction-details\" [class.open]=\"item.tx_hash === openedDetails\">\n            <td colspan=\"5\">\n              <ng-container *ngIf=\"item.tx_hash === openedDetails\">\n                <app-transaction-details [transaction]=\"item\" [sizes]=\"calculatedWidth\"></app-transaction-details>\n              </ng-container>\n            </td>\n          </tr>\n          <div class=\"row-divider\"></div>\n        </ng-container>\n        <ng-container *ngIf=\"item.comment.startsWith('ACS:')\">\n          <tr>\n            <td>\n              <div class=\"status\" [ngClass]=\"item.is_income ? 'received' : 'send'\">\n                <ng-container *ngIf=\"getHeight(item) < 10\">\n                  <svg class=\"confirmation\" style=\"transform: rotateZ(-90deg)\"\n                    tooltip=\"{{ 'HISTORY.STATUS_TOOLTIP' | translate : {'current': getHeight(item), 'total': 10} }}\"\n                    placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\n                    <rect stroke-dasharray=\"100\" fill=\"transparent\" stroke-dashoffset=\"0\" x=\"35%\" y=\"35%\"\n                      stroke=\"#FFF9AD\" width=\"30%\" height=\"30%\" stroke-width=\"0.3rem\">\n                    </rect>\n                    <circle class=\"progress-circle\" cx=\"50%\" cy=\"50%\"\n                      [style.stroke]=\"item.is_income ? '#FFF9E7' : '#A34C42'\" r=\"0.7rem\" fill=\"transparent\"\n                      stroke-width=\"0.3rem\" stroke-dasharray=\"4.5rem\" stroke-dashoffset=\"4.5rem\" stroke-linecap=\"round\"\n                      [style.stroke-dashoffset]=\"strokeSize(item)\"></circle>\n                  </svg>\n                </ng-container>\n                <ng-container *ngIf=\"getHeight(item) === 10\">\n                  <img *ngIf=\"!item.is_income\" class=\"status-transaction\" src=\"./assets/icons/send-tab.svg\" alt=\"\">\n                  <img *ngIf=\"item.is_income\" class=\"status-transaction\" src=\"./assets/icons/receive.svg\" alt=\"\">\n                </ng-container>\n                <span class=\"status-transaction-text\">{{ (item.is_income ? 'HISTORY.RECEIVED' : 'HISTORY.SEND') |\n                  translate }}</span>\n                <ng-container *ngIf=\"item.unlock_time !== 0 && item.tx_type !== 6\">\n                  <ng-container *ngIf=\"isLocked(item); else unlock\">\n                    <ng-container *ngIf=\"item.unlock_time < 500000000\">\n                      <i class=\"icon lock-transaction\"\n                        tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': time(item) | date : 'MM.dd.yy'} }}\"\n                        placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\n                        [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\n                    </ng-container>\n                    <ng-container *ngIf=\"item.unlock_time > 500000000\">\n                      <i class=\"icon lock-transaction\"\n                        tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\"\n                        placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\n                        [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\n                    </ng-container>\n                  </ng-container>\n                  <ng-template #unlock>\n                    <i class=\"icon unlock-transaction\" placement=\"bottom-left\"\n                      [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\n                  </ng-template>\n                </ng-container>\n              </div>\n            </td>\n            <td>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</td>\n            <td>\n              <span></span>\n            </td>\n            <td>\n              <span></span>\n            </td>\n            <td class=\"remote-address\">Anonymous Chat System</td>\n          </tr>\n          <div class=\"row-divider\"></div>\n          <tr class=\"transaction-details\" >\n            <td colspan=\"5\">\n\n            </td>\n          </tr>\n          <div class=\"row-divider\"></div>\n        </ng-container>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n  <div></div>\n  <div class=\"pagination-wrapper\">\n    <div class=\"pagination\">\n      <div>\n        <button [ngClass]=\"{'disabled': variablesService.sync_started || wallet}\"\n          [disabled]=\"variablesService.currentWallet.currentPage === 1 || variablesService.sync_started || wallet\"\n          (click)=\"setPage(variablesService.currentWallet.currentPage - 1)\">\n          <svg class=\"icon\" viewBox=\"0 0 17 17\" width=\"100%\" height=\"100%\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M8.63281 16.3281C12.9922 16.3281 16.6016 12.7109 16.6016 8.35938C16.6016 4 12.9844 0.390625 8.625 0.390625C4.27344 0.390625 0.664062 4 0.664062 8.35938C0.664062 12.7109 4.28125 16.3281 8.63281 16.3281ZM4.49219 8.35156C4.49219 8.17188 4.55469 8.04688 4.71875 7.88281L7.4375 5.14844C7.54688 5.03906 7.6875 4.98438 7.85938 4.98438C8.19531 4.98438 8.44531 5.23438 8.44531 5.57031C8.44531 5.74219 8.36719 5.89062 8.26562 6.00781L7.26562 7L6.29688 7.8125L8 7.74219H12.1797C12.5312 7.74219 12.7891 7.99219 12.7891 8.35156C12.7891 8.70312 12.5391 8.95312 12.1797 8.95312H8L6.28906 8.89062L7.26562 9.70312L8.26562 10.6953C8.375 10.8047 8.44531 10.9531 8.44531 11.125C8.44531 11.4609 8.19531 11.7188 7.85938 11.7188C7.6875 11.7188 7.54688 11.6562 7.4375 11.5469L4.71875 8.82031C4.57031 8.67188 4.49219 8.53125 4.49219 8.35156Z\"\n              fill=\"#FDFEFF\" fill-opacity=\"0.3\" />\n          </svg>\n        </button>\n\n        <ng-container *ngIf=\"!mining\">\n          <button *ngFor=\"let page of variablesService.currentWallet.pages\"\n            [class.active]=\"variablesService.currentWallet.currentPage === page\"\n            (click)=\"setPage(page)\">{{page}}</button>\n        </ng-container>\n\n        <ng-container *ngIf=\"mining\">\n          <button\n            [ngClass]=\"{ 'active': variablesService.currentWallet.currentPage, 'disabled': variablesService.sync_started || wallet}\"\n            [disabled]=\"stop_paginate || variablesService.sync_started || wallet\"\n            (click)=\"setPage(variablesService.currentWallet.currentPage)\">\n            {{variablesService.currentWallet.currentPage}}\n          </button>\n        </ng-container>\n\n        <button [disabled]=\"stop_paginate || variablesService.sync_started || wallet\"\n          [ngClass]=\"{'disabled': variablesService.sync_started || wallet}\"\n          (click)=\"setPage(variablesService.currentWallet.currentPage + 1)\">\n          <svg class=\"icon\" viewBox=\"0 0 17 17\" width=\"100%\" height=\"100%\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M8.63281 16.3281C12.9922 16.3281 16.6016 12.7109 16.6016 8.35938C16.6016 4 12.9844 0.390625 8.625 0.390625C4.27344 0.390625 0.664062 4 0.664062 8.35938C0.664062 12.7109 4.28125 16.3281 8.63281 16.3281ZM12.7656 8.35156C12.7656 8.53125 12.6953 8.67188 12.5391 8.82031L9.82031 11.5469C9.71094 11.6562 9.57031 11.7188 9.39844 11.7188C9.0625 11.7188 8.8125 11.4609 8.8125 11.125C8.8125 10.9531 8.88281 10.8047 8.99219 10.6953L9.99219 9.70312L10.9688 8.89062L9.26562 8.95312H5.07812C4.72656 8.95312 4.46875 8.70312 4.46875 8.35156C4.46875 7.99219 4.72656 7.74219 5.07812 7.74219H9.26562L10.9688 7.8125L9.99219 7L8.99219 6.00781C8.89062 5.89062 8.8125 5.74219 8.8125 5.57031C8.8125 5.23438 9.0625 4.98438 9.39844 4.98438C9.57031 4.98438 9.71094 5.03906 9.82031 5.14844L12.5391 7.88281C12.7031 8.04688 12.7656 8.17188 12.7656 8.35156Z\"\n              fill=\"#FDFEFF\" fill-opacity=\"0.3\" />\n          </svg>\n        </button>\n      </div>\n      <div class=\"mining-transaction-switch\">\n        <span class=\"switch-text\">Hide mining transactions</span>\n        <div class=\"switch\" [ngClass]=\"{'disabled': variablesService.sync_started || wallet}\"\n          (click)=\"toggleMiningTransactions(); $event.stopPropagation()\" [class.on]=\"mining\" [class.off]=\"!mining\">\n          <span class=\"circle\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.history-wrap {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.wrap-table {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  display: flex;\n  flex-direction: column; }\n\n.wrap-table table.history-table tbody {\n    font-weight: 500; }\n\n.wrap-table table.history-table tbody tr td {\n      min-width: 10rem; }\n\n.wrap-table table.history-table tbody tr .status {\n      position: relative;\n      display: flex;\n      align-items: center; }\n\n.wrap-table table.history-table tbody tr .status .confirmation {\n        margin-right: 0.7rem;\n        width: 1.7rem;\n        height: 1.7rem; }\n\n.wrap-table table.history-table tbody tr .status .lock-transaction {\n        background: center/contain no-repeat url('lock-transaction.svg');\n        margin-left: 0.7rem;\n        width: 1.4rem;\n        height: 1.4rem; }\n\n.wrap-table table.history-table tbody tr .status .unlock-transaction {\n        background: center/contain no-repeat url('unlock-transaction.svg');\n        margin-left: 0.7rem;\n        width: 1.4rem;\n        height: 1.4rem; }\n\n.wrap-table table.history-table tbody tr .status img.status-transaction {\n        margin-right: 0.7rem;\n        width: 1.5rem;\n        height: 1.5rem; }\n\n.wrap-table table.history-table tbody tr .remote-address span {\n      display: inline-flex;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.wrap-table table.history-table tbody tr:not(.transaction-details) {\n      cursor: pointer; }\n\n.wrap-table table.history-table tbody tr.transaction-details {\n      transition: 0.5s height linear, 0s font-size;\n      transition-delay: 0s, 0.5s;\n      height: 0; }\n\n.wrap-table table.history-table tbody tr.transaction-details.open {\n        height: 18rem; }\n\n.wrap-table table.history-table tbody tr.transaction-details td {\n        border-radius: 1rem;\n        position: relative;\n        overflow: hidden;\n        line-height: inherit;\n        padding-top: 0;\n        padding-bottom: 0; }\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1rem; }\n\n.pagination-wrapper .pagination {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n\n.pagination-wrapper .pagination > div {\n      display: flex;\n      align-items: center; }\n\n.pagination-wrapper .pagination button {\n      margin-right: 0.5rem;\n      padding: 0;\n      font-size: 1.6rem;\n      transition: all 0.3s;\n      border: none; }\n\n.pagination-wrapper .pagination button.disabled {\n        cursor: url('not-allowed.svg'), not-allowed;\n        border: none; }\n\n.pagination-wrapper .pagination button svg {\n        margin-top: 0.3rem;\n        width: 1.8rem;\n        height: 1.8rem; }\n\n.mining-transaction-switch {\n  display: flex;\n  align-items: center; }\n\n.mining-transaction-switch .switch-text {\n    margin-right: 2rem;\n    font-size: 1.6rem;\n    line-height: 1.9rem;\n    color: #fdfeff; }\n\n.mining-transaction-switch .switch {\n    display: flex;\n    align-items: center;\n    border-radius: 1.1rem;\n    cursor: pointer;\n    padding: 0.2rem;\n    width: 3.6rem;\n    height: 2.2rem; }\n\n.mining-transaction-switch .switch.on {\n      justify-content: flex-end; }\n\n.mining-transaction-switch .switch.off {\n      justify-content: flex-start;\n      background-color: rgba(255, 255, 255, 0.2); }\n\n.mining-transaction-switch .switch .circle {\n      border-radius: 50%;\n      width: 1.8rem;\n      height: 1.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcaGlzdG9yeVxcaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBTHhCO0lBUU0sZ0JBQWdCLEVBQUE7O0FBUnRCO01BV1UsZ0JBQWdCLEVBQUE7O0FBWDFCO01BY1Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTs7QUFoQjdCO1FBa0JZLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQXBCMUI7UUF1QlksZ0VBQW1GO1FBQ25GLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQTFCMUI7UUE2Qlksa0VBQXFGO1FBQ3JGLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQWhDMUI7UUFtQ1ksb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixjQUFjLEVBQUE7O0FBckMxQjtNQTBDWSxvQkFBb0I7TUFDcEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBQTs7QUE3Q25DO01BaURVLGVBQWUsRUFBQTs7QUFqRHpCO01BcURVLDRDQUE0QztNQUM1QywwQkFBMEI7TUFDMUIsU0FBUyxFQUFBOztBQXZEbkI7UUF5RFksYUFBYSxFQUFBOztBQXpEekI7UUE0RFksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTs7QUFPN0I7RUFDRSxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUhwQjtJQVNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBOztBQVp2QjtNQU1NLGFBQWE7TUFDYixtQkFBbUIsRUFBQTs7QUFQekI7TUF1Qk0sb0JBQW9CO01BQ3BCLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsb0JBQW9CO01BQ3BCLFlBQVksRUFBQTs7QUEzQmxCO1FBZVEsMkNBQTREO1FBQzVELFlBQVksRUFBQTs7QUFoQnBCO1FBbUJRLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQVV0QjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFGckI7SUFJSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7O0FBUGxCO0lBVUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQWhCbEI7TUFrQk0seUJBQXlCLEVBQUE7O0FBbEIvQjtNQXFCTSwyQkFBMkI7TUFDM0IsMENBQTBDLEVBQUE7O0FBdEJoRDtNQXlCTSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGlzdG9yeS13cmFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud3JhcC10YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBvdmVybGF5O1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRhYmxlLmhpc3RvcnktdGFibGUge1xuICAgIHRib2R5IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ciB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLmNvbmZpcm1hdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvY2stdHJhbnNhY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9sb2NrLXRyYW5zYWN0aW9uLnN2Zyk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS40cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudW5sb2NrLXRyYW5zYWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdW5sb2NrLXRyYW5zYWN0aW9uLnN2Zyk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS40cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcuc3RhdHVzLXRyYW5zYWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVtb3RlLWFkZHJlc3Mge1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpub3QoLnRyYW5zYWN0aW9uLWRldGFpbHMpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJi50cmFuc2FjdGlvbi1kZXRhaWxzIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgaGVpZ2h0IGxpbmVhciwgMHMgZm9udC1zaXplO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgaGVpZ2h0IGxpbmVhciwgMHMgZm9udC1zaXplO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjVzO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgLnBhZ2luYXRpb24ge1xuICAgID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbm90LWFsbG93ZWQuc3ZnKSwgbm90LWFsbG93ZWQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgICB9XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuLm1pbmluZy10cmFuc2FjdGlvbi1zd2l0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuc3dpdGNoLXRleHQge1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS45cmVtO1xuICAgIGNvbG9yOiAjZmRmZWZmO1xuICB9XG4gIC5zd2l0Y2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICB3aWR0aDogMy42cmVtO1xuICAgIGhlaWdodDogMi4ycmVtO1xuICAgICYub24ge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gICAgJi5vZmYge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAxLjhyZW07XG4gICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_services_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/pagination.service */ "./src/app/_helpers/services/pagination.service.ts");
/* harmony import */ var _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(route, variablesService, pagination, backend, ngZone, paginationStore) {
        this.route = route;
        this.variablesService = variablesService;
        this.pagination = pagination;
        this.backend = backend;
        this.ngZone = ngZone;
        this.paginationStore = paginationStore;
        this.openedDetails = '';
        this.calculatedWidth = [];
        this.stop_paginate = false;
        this.mining = false;
        this.x = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(3);
        this.y = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0.2);
    }
    HistoryComponent.prototype.addressAlias = function (address) {
        var _this = this;
        if (address !== null && this.variablesService.daemon_state === 2) {
            if (this.variablesService.aliasesChecked[address] == null) {
                this.variablesService.aliasesChecked[address] = {};
                if (this.variablesService.aliases.length) {
                    for (var i = 0, length_1 = this.variablesService.aliases.length; i < length_1; i++) {
                        if (i in this.variablesService.aliases && this.variablesService.aliases[i]['address'] === address) {
                            this.variablesService.aliasesChecked[address]['name'] = this.variablesService.aliases[i].name;
                            this.variablesService.aliasesChecked[address]['address'] = this.variablesService.aliases[i].address;
                            this.variablesService.aliasesChecked[address]['comment'] = this.variablesService.aliases[i].comment;
                            return this.variablesService.aliasesChecked[address].name;
                        }
                    }
                }
                this.backend.getAliasByAddress(address, function (status, data) {
                    if (status) {
                        _this.variablesService.aliasesChecked[data.address]['name'] = '@' + data.alias;
                        _this.variablesService.aliasesChecked[data.address]['address'] = data.address;
                        _this.variablesService.aliasesChecked[data.address]['comment'] = data.comment;
                    }
                });
                return ""; // Возвращаем пустую строку вместо объекта Object
            }
            return this.variablesService.aliasesChecked[address].name;
        }
        return "";
    };
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.openedDetails = '';
        });
        var restore = false;
        if (this.variablesService.after_sync_request.hasOwnProperty(this.variablesService.currentWallet.wallet_id)) {
            restore = this.variablesService.after_sync_request[this.variablesService.currentWallet.wallet_id];
        }
        if (!this.variablesService.sync_started && restore && this.variablesService.currentWallet.wallet_id) {
            this.wallet = this.variablesService.getNotLoadedWallet();
            if (this.wallet) {
                this.tick();
            }
            // if this is was restore wallet and it was selected on moment when sync completed
            this.getRecentTransfers();
            this.variablesService.after_sync_request[this.variablesService.currentWallet.wallet_id] = false;
        }
        var after_sync_request = false;
        if (this.variablesService.after_sync_request.hasOwnProperty(this.variablesService.currentWallet.wallet_id)) {
            after_sync_request = this.variablesService.after_sync_request[this.variablesService.currentWallet.wallet_id];
        }
        if (after_sync_request && !this.variablesService.sync_started) {
            // if user click on the wallet at the first time after restore.
            this.getRecentTransfers();
        }
        if (this.variablesService.stop_paginate.hasOwnProperty(this.variablesService.currentWallet.wallet_id)) {
            this.stop_paginate = this.variablesService.stop_paginate[this.variablesService.currentWallet.wallet_id];
        }
        else {
            this.stop_paginate = false;
        }
        // this will hide pagination a bit earlier
        this.wallet = this.variablesService.getNotLoadedWallet();
        if (this.wallet) {
            this.tick();
        }
        this.mining = this.variablesService.currentWallet.exclude_mining_txs;
    };
    HistoryComponent.prototype.ngAfterViewChecked = function () {
        this.calculateWidth();
    };
    HistoryComponent.prototype.strokeSize = function (item) {
        var rem = this.variablesService.settings.scale;
        if ((this.variablesService.height_app - item.height >= 10 && item.height !== 0) || (item.is_mining === true && item.height === 0)) {
            return 0;
        }
        else {
            if (item.height === 0 || this.variablesService.height_app - item.height < 0) {
                return (4.5 * rem);
            }
            else {
                return ((4.5 * rem) - (((4.5 * rem) / 100) * ((this.variablesService.height_app - item.height) * 10)));
            }
        }
    };
    HistoryComponent.prototype.resetPaginationValues = function () {
        var _this = this;
        this.ngZone.run(function () {
            var total_history_item = _this.variablesService.currentWallet
                .total_history_item;
            var count = _this.variablesService.count;
            _this.variablesService.currentWallet.totalPages = Math.ceil(total_history_item / count);
            _this.variablesService.currentWallet.exclude_mining_txs = _this.mining;
            _this.variablesService.currentWallet.currentPage = 1;
            if (!_this.variablesService.currentWallet.totalPages) {
                _this.variablesService.currentWallet.totalPages = 1;
            }
            _this.variablesService.currentWallet.totalPages >
                _this.variablesService.maxPages
                ? (_this.variablesService.currentWallet.pages = new Array(5)
                    .fill(1)
                    .map(function (value, index) { return value + index; }))
                : (_this.variablesService.currentWallet.pages = new Array(_this.variablesService.currentWallet.totalPages)
                    .fill(1)
                    .map(function (value, index) { return value + index; }));
        });
    };
    HistoryComponent.prototype.setPage = function (pageNumber) {
        // this is will allow pagination for wallets that was open from existed wallets'
        if (pageNumber === this.variablesService.currentWallet.currentPage) {
            return;
        }
        if (this.variablesService.currentWallet.open_from_exist &&
            !this.variablesService.currentWallet.updated) {
            this.variablesService.get_recent_transfers = false;
            this.variablesService.currentWallet.updated = true;
        }
        // if not running get_recent_transfers callback
        if (!this.variablesService.get_recent_transfers) {
            this.variablesService.currentWallet.currentPage = pageNumber;
        }
        if (!this.variablesService.get_recent_transfers) {
            this.getRecentTransfers();
        }
    };
    HistoryComponent.prototype.toggleMiningTransactions = function () {
        var _this = this;
        if (!this.variablesService.sync_started && !this.wallet) {
            var value = this.paginationStore.value;
            if (!value) {
                this.paginationStore.setPage(1, 0, this.variablesService.currentWallet.wallet_id); // add back page for the first page
            }
            else {
                var pages = value.filter(function (item) { return item.walletID === _this.variablesService.currentWallet.wallet_id; });
                if (!pages.length) {
                    this.paginationStore.setPage(1, 0, this.variablesService.currentWallet.wallet_id); // add back page for the first page
                }
            }
            this.mining = !this.mining;
            this.resetPaginationValues();
            this.getRecentTransfers();
        }
    };
    HistoryComponent.prototype.getRecentTransfers = function () {
        var _this = this;
        var offset = this.pagination.getOffset(this.variablesService.currentWallet.wallet_id);
        var value = this.paginationStore.value;
        var pages = value
            ? value.filter(function (item) { return item.walletID === _this.variablesService.currentWallet.wallet_id; })
            : [];
        this.backend.getRecentTransfers(this.variablesService.currentWallet.wallet_id, offset, this.variablesService.count, this.variablesService.currentWallet.exclude_mining_txs, function (status, data) {
            var isForward = _this.paginationStore.isForward(pages, _this.variablesService.currentWallet.currentPage);
            if (_this.mining && isForward && pages && pages.length === 1) {
                _this.variablesService.currentWallet.currentPage = 1; // set init page after navigation back
            }
            var history = data && data.history;
            _this.variablesService.stop_paginate[_this.variablesService.currentWallet.wallet_id] =
                (history && history.length < _this.variablesService.count) || !history;
            _this.stop_paginate = _this.variablesService.stop_paginate[_this.variablesService.currentWallet.wallet_id];
            if (!_this.variablesService.stop_paginate[_this.variablesService.currentWallet.wallet_id]) {
                var page = _this.variablesService.currentWallet.currentPage + 1;
                if (isForward &&
                    _this.mining &&
                    history &&
                    history.length === _this.variablesService.count) {
                    _this.paginationStore.setPage(page, data.last_item_index, _this.variablesService.currentWallet.wallet_id); // add back page for current page
                }
            }
            _this.pagination.calcPages(data);
            _this.pagination.prepareHistory(data, status);
            _this.ngZone.run(function () {
                _this.variablesService.get_recent_transfers = false;
                if (_this.variablesService.after_sync_request.hasOwnProperty(_this.variablesService.currentWallet.wallet_id)) {
                    // this is will complete get_recent_transfers request
                    // this will switch of
                    _this.variablesService.after_sync_request[_this.variablesService.currentWallet.wallet_id] = false;
                }
            });
        });
    };
    HistoryComponent.prototype.tick = function () {
        var _this = this;
        var walletInterval = setInterval(function () {
            _this.wallet = _this.variablesService.getNotLoadedWallet();
            if (!_this.wallet) {
                clearInterval(walletInterval);
            }
        }, 1000);
    };
    HistoryComponent.prototype.getHeight = function (item) {
        if ((this.variablesService.height_app - item.height >= 10 && item.height !== 0) || (item.is_mining === true && item.height === 0)) {
            return 10;
        }
        else {
            if (item.height === 0 || this.variablesService.height_app - item.height < 0) {
                return 0;
            }
            else {
                return (this.variablesService.height_app - item.height);
            }
        }
    };
    HistoryComponent.prototype.openDetails = function (tx_hash) {
        if (tx_hash === this.openedDetails) {
            this.openedDetails = '';
        }
        else {
            this.openedDetails = tx_hash;
        }
    };
    HistoryComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth + this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    HistoryComponent.prototype.time = function (item) {
        var now = new Date().getTime();
        var unlockTime = now + ((item.unlock_time - this.variablesService.height_max) * 60 * 1000);
        return unlockTime;
    };
    HistoryComponent.prototype.isLocked = function (item) {
        if ((item.unlock_time > 500000000) && (item.unlock_time > new Date().getTime() / 1000)) {
            return true;
        }
        if ((item.unlock_time < 500000000) && (item.unlock_time > this.variablesService.height_max)) {
            return true;
        }
        return false;
    };
    HistoryComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        if (this.variablesService.currentWallet.totalPages > 0)
            this.setPage(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HistoryComponent.prototype, "head", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_5__["PaginationStore"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"wrap-login\">\n\n    <div class=\"logo\"><img src=\"assets/icons/NN_contrast.svg\" alt=\"\"></div>\n\n    <form *ngIf=\"type === 'reg'\" class=\"form-login\" [formGroup]=\"regForm\" (ngSubmit)=\"onSubmitCreatePass()\">\n\n      <div class=\"input-block\">\n        <label for=\"master-pass\">{{ 'LOGIN.SETUP_MASTER_PASS' | translate }}</label>\n        <input type=\"password\" id=\"master-pass\" formControlName=\"password\"\n          placeholder=\"{{ 'PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate }}\"\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n        <div class=\"error-block\" *ngIf=\"regForm.controls['password'].dirty && regForm.controls['password'].errors\">\n          <div *ngIf=\"regForm.controls['password'].errors.pattern\">\n            {{ 'ERRORS.WRONG_PASSWORD' | translate }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"input-block\">\n        <label for=\"confirm-pass\">{{ 'LOGIN.SETUP_CONFIRM_PASS' | translate }}</label>\n        <input type=\"password\" id=\"confirm-pass\" placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate }}\"\n          formControlName=\"confirmation\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n        <div class=\"error-block\"\n          *ngIf=\"regForm.controls['password'].dirty && regForm.controls['confirmation'].dirty && regForm.errors\">\n          <div *ngIf=\"regForm.errors['mismatch']\">\n            {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"wrap-button\">\n        <button type=\"submit\" class=\"blue-button\"\n          [disabled]=\"!regForm.controls['password'].value.length || !regForm.controls['confirmation'].value.length || (regForm.errors && regForm.errors['mismatch']) || regForm.controls['password'].errors\">{{\n          'LOGIN.BUTTON_NEXT' | translate }}</button>\n        <button type=\"button\" class=\"blue-button\" (click)=\"onSkipCreatePass()\"\n          [disabled]=\"regForm.controls['password'].value.length || regForm.controls['confirmation'].value.length\">{{\n          'LOGIN.BUTTON_SKIP' | translate }}</button>\n      </div>\n\n    </form>\n\n    <form *ngIf=\"type !== 'reg'\" class=\"form-login\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmitAuthPass()\">\n\n      <div class=\"input-block\">\n        <label for=\"master-pass-login\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\n        <input type=\"password\" id=\"master-pass-login\" [class.required-error]=\"authForm.controls['password'].dirty\"\n          [placeholder]=\"authForm.controls['password'].dirty ? ('LOGIN.FORM_ERRORS.INVALID_PASS' | translate) : ('PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate)\"\n          formControlName=\"password\" autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n      </div>\n\n      <div class=\"wrap-button\">\n        <button type=\"submit\" class=\"blue-button\">{{\n          'LOGIN.BUTTON_NEXT' | translate }}</button>\n        <button type=\"button\" class=\"blue-button_reset\" (click)=\"dropSecureAppData()\">{{ 'LOGIN.BUTTON_RESET' |\n          translate }}</button>\n        <!--Add \"Reset\"-button-->\n      </div>\n\n    </form>\n\n  </div>\n\n  <div class=\"synchronization-status\"\n    [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 || variablesService.daemon_state === 6 ? 'flex-start' : 'center'}\">\n    <div class=\"status-container\">\n      <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\n      </span>\n      <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{\n        'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\n      </span>\n      <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\n      </span>\n      <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\n      </span>\n      <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\n      </span>\n      <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\n      </span>\n      <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 6\">\n        {{ 'SIDEBAR.SYNCHRONIZATION.DOWNLOADING' | translate }} {{ variablesService.downloaded }}{{\n        'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.total }}{{ 'SIDEBAR.SYNCHRONIZATION.MB' |\n        translate }}\n      </span>\n      <div class=\"progress-bar-container\"\n        *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\n        <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\n          <div class=\"progress-bar\">\n            <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\n          </div>\n          <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\n        </div>\n        <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\n      </div>\n\n      <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 6\">\n        <div class=\"syncing downloading\" *ngIf=\"variablesService.daemon_state === 6\">\n          <div class=\"progress-bar\">\n            <div class=\"fill\" [style.width]=\"variablesService.download.progress_value + '%'\"></div>\n          </div>\n          <div class=\"progress-percent\">{{ variablesService.download.progress_value_text }}%</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"update-container\"\n      *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\n        <div class=\"update-text standard\">\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\n        </div>\n        <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\"\n          placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\n        <div class=\"update-text important\">\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\n          <br>\n          <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\n        </div>\n        <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\"\n          placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\n        <div class=\"update-text critical\">\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\n          <br>\n          <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\n        </div>\n        <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\"\n          placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\"></i>\n      </ng-container>\n    </div>\n    <div class=\"update-container\"\n      *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\n      <div class=\"update-text time\">\n        <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\n      </div>\n      <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\"\n        tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  :host .content {\n    display: flex; }\n  :host .content .wrap-login {\n      margin: auto;\n      width: 100%;\n      max-width: 42rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n  :host .content .wrap-login .logo {\n        margin-bottom: 7.6rem;\n        height: 14.3rem;\n        display: flex;\n        justify-content: center; }\n  :host .content .wrap-login .form-login {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between; }\n  :host .content .wrap-login .form-login .wrap-button {\n          margin-top: 1.8rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-between; }\n  :host .content .wrap-login .form-login .wrap-button button {\n            height: 7rem;\n            min-width: 20rem;\n            max-width: 38rem; }\n  .synchronization-status {\n  position: absolute;\n  bottom: 3rem;\n  left: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFMZDtJQVFJLGFBQWEsRUFBQTtFQVJqQjtNQVdNLFlBQVk7TUFDWixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsOEJBQThCLEVBQUE7RUFoQnBDO1FBbUJRLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsYUFBYTtRQUNiLHVCQUF1QixFQUFBO0VBdEIvQjtRQTBCUSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDhCQUE4QixFQUFBO0VBNUJ0QztVQW9DVSxrQkFBa0I7VUFDbEIsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQiw4QkFBOEIsRUFBQTtFQXZDeEM7WUFnQ1ksWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0IsRUFBQTtFQVc1QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLndyYXAtbG9naW4ge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDQycmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNy42cmVtO1xuICAgICAgICBoZWlnaHQ6IDE0LjNyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1sb2dpbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAud3JhcC1idXR0b24ge1xuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS44cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5zeW5jaHJvbml6YXRpb24tc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNyZW07XG4gIGxlZnQ6IDNyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, backend, variablesService, modalService, ngZone) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, [function (g) {
                return g.get('password').value === g.get('confirmation').value ? null : { 'mismatch': true };
            }
        ]);
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.type = 'reg';
        this.logo = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8__.logo;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                _this.type = params.type;
            }
        });
    };
    LoginComponent.prototype.onSubmitCreatePass = function () {
        var _this = this;
        if (this.regForm.valid) {
            this.variablesService.appPass = this.regForm.get('password').value; // the pass what was written in input of login form by user
            this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                if (status) {
                    _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                    _this.variablesService.appLogin = true;
                    _this.variablesService.dataIsLoaded = true;
                    if (_this.variablesService.settings.appLockTime) {
                        _this.variablesService.startCountdown();
                    }
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                }
                else {
                    console.log(data['error_code']);
                }
            });
        }
    };
    LoginComponent.prototype.onSkipCreatePass = function () {
        var _this = this;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.variablesService.appLogin = true;
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.dropSecureAppData = function () {
        var _this = this;
        this.backend.dropSecureAppData(function () {
            _this.onSkipCreatePass();
        });
        this.variablesService.wallets = [];
        this.variablesService.contacts = [];
    };
    LoginComponent.prototype.onSubmitAuthPass = function () {
        var _this = this;
        if (this.authForm.valid) {
            this.variablesService.appPass = this.authForm.get('password').value;
            if (this.variablesService.dataIsLoaded) {
                this.backend.checkMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.variablesService.appLogin = true;
                        if (_this.variablesService.settings.appLockTime) {
                            _this.variablesService.startCountdown();
                        }
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/'], { queryParams: { prevUrl: 'login' } });
                        });
                    }
                });
            }
            else {
                this.getData(this.variablesService.appPass);
            }
        }
    };
    LoginComponent.prototype.getData = function (appPass) {
        var _this = this;
        this.backend.getSecureAppData({ pass: appPass }, function (status, data) {
            if (!data.error_code) {
                _this.variablesService.appLogin = true;
                _this.variablesService.dataIsLoaded = true;
                if (_this.variablesService.settings.appLockTime) {
                    _this.variablesService.startCountdown();
                }
                _this.variablesService.appPass = appPass;
                var isEmptyObject = Object.keys(data).length === 0 && data.constructor === Object;
                if (_this.variablesService.wallets.length) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/']);
                    });
                    return;
                }
                if (data.hasOwnProperty('contacts')) {
                    if (Object.keys(data['contacts']).length !== 0) {
                        data['contacts'].map(function (contact) {
                            _this.variablesService.contacts.push(contact);
                        });
                    }
                }
                if (data.hasOwnProperty('wallets')) {
                    if (Object.keys(data['wallets']).length !== 0) {
                        _this.getWalletData(data['wallets']);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
                if (!data.hasOwnProperty('wallets') && !data.hasOwnProperty('contacts')) {
                    if (data.length !== 0 && !isEmptyObject) {
                        _this.getWalletData(data);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            }
        });
    };
    LoginComponent.prototype.getWalletData = function (walletData) {
        var _this = this;
        var openWallets = 0;
        var runWallets = 0;
        walletData.forEach(function (wallet, wallet_index) {
            _this.backend.openWallet(wallet.path, wallet.pass, _this.variablesService.count, true, function (open_status, open_data, open_error) {
                if (open_status || open_error === 'FILE_RESTORED') {
                    openWallets++;
                    _this.ngZone.run(function () {
                        var new_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, wallet.name, wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet.alias = _this.backend.getWalletAlias(new_wallet.address);
                        if (wallet.staking) {
                            new_wallet.staking = true;
                            _this.backend.startPosMining(new_wallet.wallet_id);
                        }
                        else {
                            new_wallet.staking = false;
                        }
                        new_wallet.is_auditable = open_data['wi'].is_auditable;
                        new_wallet.is_watch_only = open_data['wi'].is_watch_only;
                        new_wallet.currentPage = 1;
                        new_wallet.exclude_mining_txs = false;
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet.total_history_item = open_data.recent_history.total_history_items;
                            new_wallet.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                            new_wallet.totalPages > _this.variablesService.maxPages
                                ? new_wallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                : new_wallet.pages = new Array(new_wallet.totalPages).fill(1).map(function (value, index) { return value + index; });
                            new_wallet.prepareHistory(open_data.recent_history.history);
                        }
                        else {
                            new_wallet.total_history_item = 0;
                            new_wallet.pages = new Array(1).fill(1);
                            new_wallet.totalPages = 1;
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet);
                        if (_this.variablesService.wallets.length === 1) {
                            _this.router.navigate(['/wallet/']);
                        }
                    });
                    _this.backend.runWallet(open_data.wallet_id, function (run_status) {
                        if (run_status) {
                            runWallets++;
                        }
                        else {
                            if (wallet_index === walletData.length - 1 && runWallets === 0) {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            }
                        }
                    });
                }
                else {
                    if (wallet_index === walletData.length - 1 && openWallets === 0) {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            });
        });
    };
    LoginComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_7__["DOWNLOADS_PAGE_URL"]);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"add-wallet\">\n    <div class=\"head\">\n      <h3 class=\"add-wallet-title\">{{ 'MAIN.TITLE' | translate }}</h3>\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n        <i class=\"icon back\"></i>\n        <span>{{ 'COMMON.BACK' | translate }}</span>\n      </button>\n    </div>\n    <div class=\"add-wallet-buttons\">\n      <button type=\"button\" class=\"blue-button\" [routerLink]=\"['/create']\">{{ 'MAIN.BUTTON_NEW_WALLET' | translate\n        }}</button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"openWallet()\">{{ 'MAIN.BUTTON_OPEN_WALLET' | translate\n        }}</button>\n      <button type=\"button\" class=\"blue-button_reset\" [routerLink]=\"['/restore']\">{{ 'MAIN.BUTTON_RESTORE_BACKUP' |\n        translate\n        }}</button>\n    </div>\n    <div class=\"add-wallet-help\" (click)=\"openInBrowser()\">\n      <i class=\"icon\"></i><span>{{ 'MAIN.HELP' | translate }}</span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 0 auto;\n  background: none; }\n\n.add-wallet .add-wallet-title {\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.add-wallet .add-wallet-buttons {\n  margin: 8rem 0 3rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.add-wallet .add-wallet-buttons button {\n    margin-right: 3rem;\n    flex: 1 0 auto; }\n\n.add-wallet .add-wallet-buttons button:last-child {\n      margin-right: 0; }\n\n.add-wallet .add-wallet-help {\n  display: flex;\n  cursor: pointer;\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.add-wallet .add-wallet-help .icon {\n    background: center/contain no-repeat url('howto.svg');\n    margin-right: 0.8rem;\n    width: 2rem;\n    height: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFFSSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBSHZCO0VBTUkscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBVGxDO0lBY00sa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTs7QUFmcEI7TUFZUSxlQUFlLEVBQUE7O0FBWnZCO0VBb0JJLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQXZCdkI7SUEwQk0scURBQXdFO0lBQ3hFLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5hZGQtd2FsbGV0IHtcbiAgLmFkZC13YWxsZXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICB9XG4gIC5hZGQtd2FsbGV0LWJ1dHRvbnMge1xuICAgIG1hcmdpbjogOHJlbSAwIDNyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJ1dHRvbiB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICB9XG4gIH1cblxuICAuYWRkLXdhbGxldC1oZWxwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcblxuICAgIC5pY29uIHtcbiAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaG93dG8uc3ZnKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(route, router, location, backend, variablesService, ngZone, translate) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.prevUrl = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.prevUrl) {
            this.prevUrl = this.route.snapshot.queryParams.prevUrl;
        }
    };
    MainComponent.prototype.openWallet = function () {
        var _this = this;
        this.backend.openFileDialog(this.translate.instant('MAIN.CHOOSE_PATH'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                _this.ngZone.run(function () {
                    _this.router.navigate(['/open'], { queryParams: { path: file_data.path } });
                });
            }
            else {
                console.log(file_data['error_code']);
            }
        });
    };
    MainComponent.prototype.openInBrowser = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_WALLET_HELP_PAGE"]);
    };
    MainComponent.prototype.back = function () {
        this.location.back();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <h3 class=\"title\">{{ 'OPEN_WALLET.MODAL.TITLE' | translate }}</h3>\n  <form class=\"open-form\" (ngSubmit)=\"openWallet()\">\n    <div class=\"wallet-path\">{{ wallet.name }}</div>\n    <div class=\"wallet-path\">{{ wallet.path }}</div>\n    <div class=\"input-block\" *ngIf=\"!wallet.notFound\">\n      <label for=\"password\">{{ 'OPEN_WALLET.MODAL.LABEL' | translate }}</label>\n      <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"wallet.pass\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\n    </div>\n    <div class=\"error-block\" *ngIf=\"wallet.notFound\">\n      {{ 'OPEN_WALLET.MODAL.NOT_FOUND' | translate }}\n    </div>\n    <div class=\"wrap-button\">\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"wallet.notFound\">{{ 'OPEN_WALLET.MODAL.OPEN' | translate }}</button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"skipWallet()\">{{ 'OPEN_WALLET.MODAL.SKIP' | translate }}</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 64rem; }\n\n.modal .title {\n    font-size: 1.8rem;\n    text-align: center; }\n\n.modal .open-form .wallet-path {\n    font-size: 1.3rem;\n    margin: 5rem 0 2rem;\n    word-wrap: break-word;\n    line-height: 2rem; }\n\n.modal .open-form .wrap-button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 2rem -2rem 0; }\n\n.modal .open-form .wrap-button button {\n      flex: 1 0 0;\n      margin: 0 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQtbW9kYWwvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXG9wZW4td2FsbGV0LW1vZGFsXFxvcGVuLXdhbGxldC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDLEVBQUE7O0FBR3ZDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBUGxCO0lBVUksaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQVh0QjtJQWlCTSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTs7QUFwQnZCO0lBd0JNLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG9CQUFvQixFQUFBOztBQTNCMUI7TUE4QlEsV0FBVztNQUNYLGNBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29wZW4td2FsbGV0LW1vZGFsL29wZW4td2FsbGV0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBtaW4td2lkdGg6IDM0cmVtO1xuICBtYXgtd2lkdGg6IDY0cmVtO1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm9wZW4tZm9ybSB7XG5cbiAgICAud2FsbGV0LXBhdGgge1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBtYXJnaW46IDVyZW0gMCAycmVtO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgfVxuXG4gICAgLndyYXAtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luOiAycmVtIC0ycmVtIDA7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IDEgMCAwO1xuICAgICAgICBtYXJnaW46IDAgMnJlbSA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: OpenWalletModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletModalComponent", function() { return OpenWalletModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenWalletModalComponent = /** @class */ (function () {
    function OpenWalletModalComponent(variablesService, backend, translate, modalService, ngZone) {
        this.variablesService = variablesService;
        this.backend = backend;
        this.translate = translate;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.wallet = {
            name: '',
            path: '',
            pass: '',
            notFound: false,
            emptyPass: false
        };
    }
    OpenWalletModalComponent.prototype.ngOnInit = function () {
        if (this.wallets.length) {
            this.wallet = this.wallets[0];
            this.wallet.pass = '';
        }
    };
    OpenWalletModalComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.wallets.length === 0) {
            return;
        }
        this.backend.openWallet(this.wallet.path, this.wallet.pass, this.variablesService.count, false, function (open_status, open_data, open_error) {
            if (open_error && open_error === 'FILE_NOT_FOUND') {
                _this.ngZone.run(function () {
                    _this.wallet.notFound = true;
                });
                var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                error_translate += ':<br>' + _this.wallet.path;
                error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                _this.modalService.prepareModal('error', error_translate);
            }
            else {
                if (open_status || open_error === 'FILE_RESTORED') {
                    var exists_1 = false;
                    _this.variablesService.wallets.forEach(function (wallet) {
                        if (wallet.address === open_data['wi'].address) {
                            exists_1 = true;
                        }
                    });
                    if (exists_1) {
                        _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                        _this.backend.closeWallet(open_data.wallet_id);
                    }
                    else {
                        var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__["Wallet"](open_data.wallet_id, _this.wallet.name, _this.wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                        new_wallet_1.is_auditable = open_data['wi'].is_auditable;
                        new_wallet_1.is_watch_only = open_data['wi'].is_watch_only;
                        new_wallet_1.currentPage = 1;
                        new_wallet_1.exclude_mining_txs = false;
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet_1.total_history_item = open_data.recent_history.total_history_items;
                            new_wallet_1.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                            new_wallet_1.totalPages > _this.variablesService.maxPages
                                ? new_wallet_1.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                : new_wallet_1.pages = new Array(new_wallet_1.totalPages).fill(1).map(function (value, index) { return value + index; });
                            new_wallet_1.prepareHistory(open_data.recent_history.history);
                        }
                        else {
                            new_wallet_1.total_history_item = 0;
                            new_wallet_1.pages = new Array(1).fill(1);
                            new_wallet_1.totalPages = 1;
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet_1);
                        _this.backend.runWallet(open_data.wallet_id);
                        _this.skipWallet();
                    }
                }
            }
        });
    };
    OpenWalletModalComponent.prototype.skipWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            if (_this.wallets.length) {
                _this.wallets.splice(0, 1);
                _this.ngOnInit();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenWalletModalComponent.prototype, "wallets", void 0);
    OpenWalletModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet-modal',
            template: __webpack_require__(/*! ./open-wallet-modal.component.html */ "./src/app/open-wallet-modal/open-wallet-modal.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet-modal.component.scss */ "./src/app/open-wallet-modal/open-wallet-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OpenWalletModalComponent);
    return OpenWalletModalComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.html":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\n      <span>{{ 'BREADCRUMBS.OPEN_WALLET' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-open\" [formGroup]=\"openForm\">\n\n    <div class=\"input-block\">\n      <label for=\"wallet-name\">{{ 'OPEN_WALLET.NAME' | translate }}</label>\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\"\n        [class.required-error]=\"openForm.controls['name'].dirty || openForm.controls['name'].touched\"\n        [placeholder]=\"openForm.controls['name'].dirty || openForm.controls['name'].touched ? ('OPEN_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate ):('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"openForm.controls['name'].invalid && !openForm.controls['name'].errors['required'] && (openForm.controls['name'].dirty || openForm.controls['name'].touched)\">\n        <div *ngIf=\"openForm.controls['name'].errors['duplicate']\">\n          {{ 'OPEN_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\n        </div>\n      </div>\n      <div class=\"error-block\" *ngIf=\"openForm.get('name').value.length >= variablesService.maxWalletNameLength\">\n        {{ 'OPEN_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\n      </div>\n    </div>\n\n    <div class=\"input-block\">\n      <label for=\"wallet-password\">{{ 'OPEN_WALLET.PASS' | translate }}</label>\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\"\n        (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n    </div>\n\n    <div class=\"wrap-buttons\">\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"openWallet()\" [disabled]=\"!openForm.valid\">{{\n        'OPEN_WALLET.BUTTON' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.scss":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-open {\n  margin: 2.4rem 0;\n  width: 50%; }\n  .form-open .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n  .form-open .wrap-buttons button {\n      margin: 0 0.7rem; }\n  .form-open .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXG9wZW4td2FsbGV0XFxvcGVuLXdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFGWjtJQUtJLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQU4xQjtNQVNNLGdCQUFnQixFQUFBO0VBVHRCO1FBWVEsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3Blbi13YWxsZXQvb3Blbi13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1vcGVuIHtcbiAgbWFyZ2luOiAyLjRyZW0gMDtcbiAgd2lkdGg6IDUwJTtcblxuICAud3JhcC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcblxuICAgICAgJi5jcmVhdGUtYnV0dG9uIHtcbiAgICAgICAgZmxleDogMSAxIDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.ts ***!
  \******************************************************/
/*! exports provided: OpenWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletComponent", function() { return OpenWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpenWalletComponent = /** @class */ (function () {
    function OpenWalletComponent(route, router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.openForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    OpenWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.path) {
                _this.filePath = params.path;
                var filename = '';
                if (params.path.lastIndexOf('.') === -1) {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1);
                }
                else {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1, params.path.lastIndexOf('.') - 1 - params.path.lastIndexOf('/'));
                }
                if (filename.length > 25) {
                    filename = filename.slice(0, 25);
                }
                _this.openForm.get('name').setValue(filename);
                _this.openForm.get('name').markAsTouched();
            }
        });
    };
    OpenWalletComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.openForm.valid && this.openForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.openWallet(this.filePath, this.openForm.get('password').value, this.variablesService.count, false, function (open_status, open_data, open_error) {
                if (open_error && open_error === 'FILE_NOT_FOUND') {
                    var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                    error_translate += ':<br>' + _this.filePath;
                    error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                    _this.modalService.prepareModal('error', error_translate);
                }
                else {
                    if (open_status || open_error === 'FILE_RESTORED') {
                        var exists_1 = false;
                        _this.variablesService.wallets.forEach(function (wallet) {
                            if (wallet.address === open_data['wi'].address) {
                                exists_1 = true;
                            }
                        });
                        if (exists_1) {
                            _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                            _this.backend.closeWallet(open_data.wallet_id, function () {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            });
                        }
                        else {
                            var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, _this.openForm.get('name').value, _this.openForm.get('password').value, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                            new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                            new_wallet_1.currentPage = 1;
                            new_wallet_1.open_from_exist = true;
                            new_wallet_1.exclude_mining_txs = false;
                            new_wallet_1.is_auditable = open_data['wi'].is_auditable;
                            new_wallet_1.is_watch_only = open_data['wi'].is_watch_only;
                            if (open_data.recent_history && open_data.recent_history.history) {
                                new_wallet_1.total_history_item = open_data.recent_history.total_history_items;
                                new_wallet_1.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                                new_wallet_1.totalPages > _this.variablesService.maxPages
                                    ? new_wallet_1.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                    : new_wallet_1.pages = new Array(new_wallet_1.totalPages).fill(1).map(function (value, index) { return value + index; });
                                new_wallet_1.prepareHistory(open_data.recent_history.history);
                            }
                            else {
                                new_wallet_1.total_history_item = 0;
                                new_wallet_1.pages = new Array(1).fill(1);
                                new_wallet_1.totalPages = 1;
                            }
                            _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                                if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                    _this.ngZone.run(function () {
                                        new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                    });
                                }
                            });
                            _this.variablesService.wallets.push(new_wallet_1);
                            _this.backend.runWallet(open_data.wallet_id, function (run_status, run_data) {
                                if (run_status) {
                                    if (_this.variablesService.appPass) {
                                        _this.backend.storeSecureAppData();
                                    }
                                    _this.ngZone.run(function () {
                                        _this.variablesService.setCurrentWallet(open_data.wallet_id);
                                        _this.router.navigate(['/wallet/']);
                                    });
                                }
                                else {
                                    console.log(run_data['error_code']);
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    OpenWalletComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    OpenWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet',
            template: __webpack_require__(/*! ./open-wallet.component.html */ "./src/app/open-wallet/open-wallet.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet.component.scss */ "./src/app/open-wallet/open-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], OpenWalletComponent);
    return OpenWalletComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <div class=\"breadcrumbs\">\n    <span [routerLink]=\"'/wallet/contracts'\">{{ 'BREADCRUMBS.CONTRACTS' | translate }}</span>\n    <span *ngIf=\"newPurchase\">{{ 'BREADCRUMBS.NEW_PURCHASE' | translate }}</span>\n    <span *ngIf=\"!newPurchase\">{{ 'BREADCRUMBS.OLD_PURCHASE' | translate }}</span>\n  </div>\n  <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n    <i class=\"icon back\"></i>\n    <span>{{ 'COMMON.BACK' | translate }}</span>\n  </button>\n</div>\n\n<form class=\"form-purchase scrolled-content\" [formGroup]=\"purchaseForm\">\n  <div class=\"input-block\">\n    <label for=\"purchase-description\">{{ 'PURCHASE.DESCRIPTION' | translate }}</label>\n    <input type=\"text\" id=\"purchase-description\" formControlName=\"description\"\n      [class.required-error]=\"purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched\"\n      [placeholder]=\"purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched ? ('PURCHASE.FORM_ERRORS.DESC_REQUIRED' | translate ) : ('PLACEHOLDERS.DESCRIPTION_PLACEHOLDER' | translate)\"\n      maxlength=\"100\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n    <div class=\"error-block\"\n      *ngIf=\"purchaseForm.controls['description'].invalid && !purchaseForm.controls['description'].errors['required'] && (purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched)\">\n      <div *ngIf=\"newPurchase && purchaseForm.controls['description'].value.length >= 100\">\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"input-block input-block-alias\">\n    <label for=\"purchase-seller\">{{ 'PURCHASE.SELLER' | translate }}</label>\n    <input type=\"text\" id=\"purchase-seller\"\n      [class.required-error]=\"purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched\"\n      [placeholder]=\"purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched ? ('PURCHASE.FORM_ERRORS.SELLER_REQUIRED' | translate ) : ('PLACEHOLDERS.SELLER_PLACEHOLDER' | translate)\"\n      formControlName=\"seller\" [readonly]=\"!newPurchase\" (mousedown)=\"addressMouseDown($event)\"\n      (contextmenu)=\"(!newPurchase) ? variablesService.onContextMenuOnlyCopy($event, purchaseForm.controls['seller'].value) : variablesService.onContextMenu($event)\">\n    <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\n      <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\n    </div>\n    <div class=\"error-block\"\n      *ngIf=\"purchaseForm.controls['seller'].invalid && !purchaseForm.controls['seller'].errors['required'] && (purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched)\">\n      <div *ngIf=\"purchaseForm.controls['seller'].errors['address_not_valid']\">\n        {{ 'PURCHASE.FORM_ERRORS.SELLER_NOT_VALID' | translate }}\n      </div>\n      <div *ngIf=\"purchaseForm.controls['seller'].errors['address_same']\">\n        {{ 'PURCHASE.FORM_ERRORS.SELLER_SAME' | translate }}\n      </div>\n      <div *ngIf=\"purchaseForm.controls['seller'].errors['alias_not_valid']\">\n        {{ 'PURCHASE.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block\">\n      <label for=\"purchase-amount\">{{ 'PURCHASE.AMOUNT' | translate }}</label>\n      <input type=\"text\" id=\"purchase-amount\" formControlName=\"amount\"\n        [class.required-error]=\"purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched\"\n        [placeholder]=\"purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched ? ('PURCHASE.FORM_ERRORS.AMOUNT_REQUIRED' | translate ) : ('PLACEHOLDERS.AMOUNT_PLACEHOLDER' | translate)\"\n        appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"purchaseForm.controls['amount'].invalid && !purchaseForm.controls['amount'].errors['required'] && (purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched)\">\n        <div *ngIf=\"purchaseForm.controls['amount'].errors['amount_zero']\">\n          {{ 'PURCHASE.FORM_ERRORS.AMOUNT_ZERO' | translate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"input-blocks-row\">\n    <div class=\"input-block\">\n      <label for=\"purchase-your-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.BUYER_DEPOSIT' :\n        'PURCHASE.YOUR_DEPOSIT') | translate }}</label>\n      <input type=\"text\"\n        [class.required-error]=\"purchaseForm.controls['yourDeposit'].dirty || purchaseForm.controls['yourDeposit'].touched\"\n        [placeholder]=\"purchaseForm.controls['yourDeposit'].dirty || purchaseForm.controls['yourDeposit'].touched ? ('PURCHASE.FORM_ERRORS.YOUR_DEPOSIT_REQUIRED' | translate ) : ('PLACEHOLDERS.DEPOSIT_PLACEHOLDER' | translate)\"\n        id=\"purchase-your-deposit\" formControlName=\"yourDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\n    </div>\n\n    <div class=\"input-block\">\n      <div class=\"wrap-label\">\n        <label for=\"purchase-seller-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.YOUR_DEPOSIT' :\n          'PURCHASE.SELLER_DEPOSIT') | translate }}</label>\n        <div class=\"checkbox-block\">\n          <input type=\"checkbox\" id=\"purchase-same-amount\" class=\"style-checkbox\" formControlName=\"sameAmount\"\n            (change)=\"sameAmountChange()\">\n          <label for=\"purchase-same-amount\">{{ 'PURCHASE.SAME_AMOUNT' | translate }}</label>\n        </div>\n      </div>\n      <input type=\"text\" id=\"purchase-seller-deposit\" [readonly]=\"sameAmountChecked\"\n        [value]=\"sameAmountChecked ? purchaseForm.controls['amount'].value : ''\"\n        [class.required-error]=\"purchaseForm.controls['sellerDeposit'].dirty || purchaseForm.controls['sellerDeposit'].touched\"\n        [placeholder]=\"purchaseForm.controls['sellerDeposit'].dirty || purchaseForm.controls['sellerDeposit'].touched ? ('PURCHASE.FORM_ERRORS.SELLER_DEPOSIT_REQUIRED' | translate) : ('PLACEHOLDERS.SELLER_DEPOSIT_PLACEHOLDER' | translate)\"\n        formControlName=\"sellerDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\n    </div>\n  </div>\n\n  <div class=\"input-block\">\n    <label for=\"purchase-comment\">{{ 'PURCHASE.COMMENT' | translate }}</label>\n    <input type=\"text\" id=\"purchase-comment\" formControlName=\"comment\"\n      placeholder=\"{{ 'PLACEHOLDERS.COMMENT_PLACEHOLDER' | translate }}\" maxlength=\"100\" [readonly]=\"!newPurchase\"\n      (contextmenu)=\"variablesService.onContextMenu($event)\">\n    <div class=\"error-block\" *ngIf=\"newPurchase && purchaseForm.controls['comment'].value.length >= 100\">\n      <div>\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\n      </div>\n    </div>\n  </div>\n  <div class=\"input-block confirm-master-pass\" *ngIf=\"variablesService.appPass\">\n    <label for=\"password\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\n    <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\"\n      [class.required-error]=\"purchaseForm.controls['password'].dirty || purchaseForm.controls['password'].touched\"\n      [placeholder]=\"purchaseForm.controls['password'].dirty || purchaseForm.controls['password'].touched ? ('LOGIN.FORM_ERRORS.PASS_REQUIRED' | translate ) : ('PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate) \"\n      autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\n    <div class=\"error-block\">\n      <div *ngIf=\"purchaseForm.controls.password.errors && purchaseForm.controls.password.errors.password_not_match\">\n        {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"purchase-select\" (click)=\"toggleOptions()\">\n    <span style=\"letter-spacing: 1px;\">{{ 'PURCHASE.DETAILS' | translate }}</span><i class=\"icon arrow\"\n      [class.down]=\"!additionalOptions\" [class.up]=\"additionalOptions\"></i>\n  </button>\n\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\n    <div class=\"input-block\">\n      <label for=\"purchase-fee\">{{ 'PURCHASE.FEE' | translate }}</label>\n      <input type=\"text\" id=\"purchase-fee\" formControlName=\"fee\" readonly>\n    </div>\n    <div class=\"input-block\" *ngIf=\"newPurchase\">\n      <label for=\"purchase-time\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\n      <ng-select id=\"purchase-time\" class=\"custom-select\" [clearable]=\"false\" [searchable]=\"false\"\n        formControlName=\"time\">\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\n        </ng-option>\n      </ng-select>\n    </div>\n    <div class=\"input-block\">\n      <label for=\"purchase-payment\">{{ 'PURCHASE.PAYMENT' | translate }}</label>\n      <input type=\"text\" id=\"purchase-payment\"\n        placeholder=\"{{ 'PLACEHOLDERS.PURCHASE_PAYMENT_PLACEHOLDER' | translate }}\" formControlName=\"payment\"\n        [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n    </div>\n  </div>\n\n  <button type=\"button\" class=\"blue-button_reset send-button\" *ngIf=\"newPurchase\" [disabled]=\"!purchaseForm.valid\"\n    (click)=\"createPurchase()\">{{ 'PURCHASE.SEND_BUTTON' | translate }}</button>\n\n  <div class=\"purchase-states\" *ngIf=\"!newPurchase\">\n    <ng-container\n      *ngIf=\"currentContract.state == 1 && !currentContract.is_a && currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\n      <span>{{ 'PURCHASE.NEED_MONEY' | translate }}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"purchase-buttons\" *ngIf=\"!newPurchase\">\n\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 1\">\n      <button type=\"button\" class=\"blue-button_reset\" (click)=\"acceptState();\"\n        [disabled]=\"currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\n        {{'PURCHASE.BUTTON_MAKE_PLEDGE' | translate}}\n      </button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"ignoredContract();\">{{'PURCHASE.BUTTON_IGNORE' |\n        translate}}</button>\n    </ng-container>\n\n    <ng-container\n      *ngIf=\"!showNullify && !showTimeSelect && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\n      <button type=\"button\" class=\"blue-button_reset\" (click)=\"dealsDetailsFinish();\"\n        [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\n        {{'PURCHASE.BUTTON_RECEIVED' | translate}}\n      </button>\n      <button type=\"button\" class=\"blue-button_reset\" (click)=\"showNullify = true;\"\n        [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\n        {{'PURCHASE.BUTTON_NULLIFY' | translate}}\n      </button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = true;\"\n        [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\n        {{'PURCHASE.BUTTON_CANCEL_BUYER' | translate}}\n      </button>\n    </ng-container>\n\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 5\">\n      <button type=\"button\" class=\"blue-button_reset\"\n        (click)=\"dealsDetailsDontCanceling();\">{{'PURCHASE.BUTTON_NOT_CANCEL' | translate}}</button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsSellerCancel();\">{{'PURCHASE.BUTTON_CANCEL_SELLER'\n        | translate}}</button>\n    </ng-container>\n\n  </div>\n\n  <div class=\"nullify-block-row\" *ngIf=\"showNullify\">\n    <div>{{'PURCHASE.NULLIFY_QUESTION' | translate}}</div>\n    <div class=\"nullify-block-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"showNullify = false;\">{{ 'PURCHASE.CANCEL' | translate\n        }}</button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"productNotGot();\">{{ 'PURCHASE.BUTTON_NULLIFY_SHORT' |\n        translate }}</button>\n    </div>\n  </div>\n\n  <div class=\"time-cancel-block-row\"\n    *ngIf=\"showTimeSelect && !newPurchase && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\n    <div class=\"time-cancel-block-question\">{{ 'PURCHASE.WAITING_TIME_QUESTION' | translate }}</div>\n    <label for=\"purchase-timeCancel\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\n    <div class=\"input-block\">\n      <ng-select id=\"purchase-timeCancel\" class=\"custom-select\" [clearable]=\"false\" [searchable]=\"false\"\n        formControlName=\"timeCancel\">\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\n        </ng-option>\n      </ng-select>\n    </div>\n    <div class=\"time-cancel-block-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = false;\">{{ 'PURCHASE.CANCEL' | translate\n        }}</button>\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsCancel();\">{{ 'PURCHASE.BUTTON_CANCEL_BUYER' |\n        translate }}</button>\n    </div>\n  </div>\n\n</form>\n\n<div class=\"progress-bar-container\">\n  <div class=\"progress-bar\">\n    <div class=\"progress-bar-full\" [style.width]=\"getProgressBarWidth()\"></div>\n  </div>\n  <div class=\"progress-labels\">\n\n    <ng-container *ngIf=\"newPurchase\">\n      <span>{{ 'PURCHASE.STATUS_MESSAGES.NEW_PURCHASE' | translate }}</span>\n    </ng-container>\n\n    <ng-container *ngIf=\"!newPurchase && currentContract.is_a\">\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_SELLER' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 120\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_SELLER' | translate\n        }}</span>\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 201\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\n        <ng-container\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\n      </span>\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate\n        }}\n      </span>\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_SELLER' | translate\n        }}</span>\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 601\">\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\n        <ng-container\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\n      </span>\n    </ng-container>\n    <ng-container *ngIf=\"!newPurchase && !currentContract.is_a\">\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_BUYER' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_BUYER' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_BUYER' | translate\n        }}</span>\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 201\">\n        {{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\n        <ng-container\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\n      </span>\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate}}\n      </span>\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_BUYER' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\n      <span *ngIf=\"currentContract.state == 601\">\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\n        <ng-container\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\n      </span>\n    </ng-container>\n  </div>\n  <div class=\"progress-time\" *ngIf=\"!newPurchase\">\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time |\n      contractTimeLeft: 0}}</span>\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time |\n      contractTimeLeft: 2}}</span>\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time |\n      contractTimeLeft: 1}}</span>\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time |\n      contractTimeLeft: 1}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/purchase/purchase.component.scss":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  display: flex;\n  flex-direction: column; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box; }\n\n.form-purchase {\n  flex: 1 1 auto;\n  margin: 1.5rem -3rem 0;\n  padding: 0 3rem;\n  overflow-y: overlay; }\n\n.form-purchase .input-blocks-row {\n    display: flex; }\n\n.form-purchase .input-blocks-row .input-block {\n      flex-basis: 50%; }\n\n.form-purchase .input-blocks-row .input-block:first-child {\n        margin-right: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block:last-child {\n        margin-left: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block .checkbox-block {\n        display: flex; }\n\n.form-purchase .purchase-select {\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    font-size: 1.3rem;\n    line-height: 1.3rem;\n    margin: 1.5rem 0 0;\n    padding: 0;\n    width: 100%;\n    max-width: 15rem;\n    height: 1.3rem; }\n\n.form-purchase .purchase-select .arrow {\n      margin-left: 1rem;\n      width: 0.8rem;\n      height: 0.8rem; }\n\n.form-purchase .purchase-select .arrow.down {\n        background: center/contain no-repeat url('arrow-down.svg'); }\n\n.form-purchase .purchase-select .arrow.up {\n        background: center/contain no-repeat url('arrow-up.svg'); }\n\n.form-purchase .additional-details {\n    display: flex;\n    margin-top: 1.5rem;\n    padding: 0.5rem 0 2rem; }\n\n.form-purchase .additional-details > div {\n      flex-basis: 25%; }\n\n.form-purchase .additional-details > div:first-child {\n        padding-left: 1.5rem;\n        padding-right: 1rem; }\n\n.form-purchase .additional-details > div:last-child {\n        padding-left: 1rem;\n        padding-right: 1.5rem; }\n\n.form-purchase .purchase-states {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    line-height: 2.9rem; }\n\n.form-purchase .send-button {\n    margin: 2.4rem 0;\n    width: 100%;\n    max-width: 15rem; }\n\n.form-purchase .purchase-buttons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 2.4rem -0.5rem; }\n\n.form-purchase .purchase-buttons button {\n      flex: 0 1 33%;\n      margin: 0 0.5rem; }\n\n.form-purchase .nullify-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.form-purchase .time-cancel-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-question {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .input-block {\n      width: 25%; }\n\n.form-purchase .time-cancel-block-row label {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n\n.progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n\n.progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n\n.progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    height: 100%; }\n\n.progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHB1cmNoYXNlXFxwdXJjaGFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBSnJCO0lBTUksYUFBYSxFQUFBOztBQU5qQjtNQVFNLGVBQWUsRUFBQTs7QUFSckI7UUFVUSxvQkFBb0IsRUFBQTs7QUFWNUI7UUFhUSxtQkFBbUIsRUFBQTs7QUFiM0I7UUFnQlEsYUFBYSxFQUFBOztBQWhCckI7SUFxQkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTs7QUEvQmxCO01BaUNNLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQW5DcEI7UUFxQ1EsMERBQTRFLEVBQUE7O0FBckNwRjtRQXdDUSx3REFBMEUsRUFBQTs7QUF4Q2xGO0lBNkNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7O0FBL0MxQjtNQWlETSxlQUFlLEVBQUE7O0FBakRyQjtRQW1EUSxvQkFBb0I7UUFDcEIsbUJBQW1CLEVBQUE7O0FBcEQzQjtRQXVEUSxrQkFBa0I7UUFDbEIscUJBQXFCLEVBQUE7O0FBeEQ3QjtJQTZESSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBOztBQWxFdkI7SUFxRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUF2RXBCO0lBMEVJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCLEVBQUE7O0FBNUUxQjtNQThFTSxhQUFhO01BQ2IsZ0JBQWdCLEVBQUE7O0FBL0V0QjtJQW1GSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUF0RjNCO01Bd0ZNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxXQUFXLEVBQUE7O0FBNUZqQjtRQThGUSxhQUFhO1FBQ2IsZ0JBQWdCLEVBQUE7O0FBL0Z4QjtJQW9HSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUF2RzNCO01BeUdNLG1CQUFtQixFQUFBOztBQXpHekI7TUE0R00sVUFBVSxFQUFBOztBQTVHaEI7TUErR00sbUJBQW1CLEVBQUE7O0FBL0d6QjtNQWtITSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsV0FBVyxFQUFBOztBQXRIakI7UUF3SFEsYUFBYTtRQUNiLGdCQUFnQixFQUFBOztBQUt4QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQU5kO0lBUUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixjQUFjLEVBQUE7O0FBYmxCO01BZU0sY0FBYyxFQUFBOztBQWZwQjtJQW1CSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWSxFQUFBOztBQXZCaEI7SUEwQkksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVyY2hhc2UvcHVyY2hhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLmZvcm0tcHVyY2hhc2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiAxLjVyZW0gLTNyZW0gMDtcbiAgcGFkZGluZzogMCAzcmVtO1xuICBvdmVyZmxvdy15OiBvdmVybGF5O1xuICAuaW5wdXQtYmxvY2tzLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuaW5wdXQtYmxvY2sge1xuICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5jaGVja2JveC1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wdXJjaGFzZS1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgICBtYXJnaW46IDEuNXJlbSAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMS4zcmVtO1xuICAgIC5hcnJvdyB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgIHdpZHRoOiAwLjhyZW07XG4gICAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICAgICYuZG93biB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLnN2Zyk7XG4gICAgICB9XG4gICAgICAmLnVwIHtcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LXVwLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hZGRpdGlvbmFsLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDJyZW07XG4gICAgPiBkaXYge1xuICAgICAgZmxleC1iYXNpczogMjUlO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wdXJjaGFzZS1zdGF0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjlyZW07XG4gIH1cbiAgLnNlbmQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDIuNHJlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTVyZW07XG4gIH1cbiAgLnB1cmNoYXNlLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMi40cmVtIC0wLjVyZW07XG4gICAgYnV0dG9uIHtcbiAgICAgIGZsZXg6IDAgMSAzMyU7XG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgIH1cbiAgfVxuICAubnVsbGlmeS1ibG9jay1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5udWxsaWZ5LWJsb2NrLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBidXR0b24ge1xuICAgICAgICBmbGV4OiAwIDEgMjUlO1xuICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAudGltZS1jYW5jZWwtYmxvY2stcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAudGltZS1jYW5jZWwtYmxvY2stcXVlc3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLmlucHV0LWJsb2NrIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC50aW1lLWNhbmNlbC1ibG9jay1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZmxleDogMCAxIDI1JTtcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDAgM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgLnByb2dyZXNzLWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTAuN3JlbTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAzcmVtO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cmVtKTtcbiAgICBoZWlnaHQ6IDAuN3JlbTtcbiAgICAucHJvZ3Jlc3MtYmFyLWZ1bGwge1xuICAgICAgaGVpZ2h0OiAwLjdyZW07XG4gICAgfVxuICB9XG4gIC5wcm9ncmVzcy1sYWJlbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnByb2dyZXNzLXRpbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zcmVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
/*!************************************************!*\
  !*** ./src/app/purchase/purchase.component.ts ***!
  \************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(route, backend, variablesService, modalService, ngZone, location, intToMoneyPipe) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.intToMoneyPipe = intToMoneyPipe;
        this.isOpen = false;
        this.localAliases = [];
        this.newPurchase = false;
        this.sameAmountChecked = false;
        this.additionalOptions = false;
        this.currentContract = null;
        this.showTimeSelect = false;
        this.showNullify = false;
        this.purchaseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            seller: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (g.value === _this.variablesService.currentWallet.address) {
                        return { 'address_same': true };
                    }
                    return null;
                }, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status) {
                                _this.ngZone.run(function () {
                                    if (valid_status === false) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status, alias_data) {
                                    _this.ngZone.run(function () {
                                        if (alias_status) {
                                            if (alias_data.address === _this.variablesService.currentWallet.address) {
                                                g.setErrors(Object.assign({ 'address_same': true }, g.errors));
                                            }
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (parseFloat(g.value) === 0) {
                        return { 'amount_zero': true };
                    }
                    return null;
                }]),
            yourDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sellerDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sameAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: false, disabled: false }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.variablesService.default_fee),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            timeCancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    PurchaseComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'purchase-seller' && this.isOpen) {
            this.isOpen = false;
        }
    };
    PurchaseComponent.prototype.checkAndChangeHistory = function () {
        var _this = this;
        if (this.currentContract.state === 201) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 8 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
        else if (this.currentContract.state === 601) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 12 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
    };
    PurchaseComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.purchaseForm.get('seller').value && this.purchaseForm.get('seller').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    PurchaseComponent.prototype.setAlias = function (alias) {
        this.purchaseForm.get('seller').setValue(alias);
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subRouting = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.currentContract = _this.variablesService.currentWallet.getContract(params['id']);
                _this.purchaseForm.controls['seller'].setValidators([]);
                _this.purchaseForm.updateValueAndValidity();
                _this.purchaseForm.setValue({
                    description: _this.currentContract.private_detailes.t,
                    seller: _this.currentContract.private_detailes.b_addr,
                    amount: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.to_pay),
                    yourDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.a_pledge),
                    sellerDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.b_pledge),
                    sameAmount: _this.currentContract.private_detailes.to_pay.isEqualTo(_this.currentContract.private_detailes.b_pledge),
                    comment: _this.currentContract.private_detailes.c,
                    fee: _this.variablesService.default_fee,
                    time: 12,
                    timeCancel: 12,
                    payment: _this.currentContract.payment_id,
                    password: ''
                });
                _this.purchaseForm.get('sameAmount').disable();
                _this.newPurchase = false;
                if (_this.currentContract.is_new) {
                    if (_this.currentContract.is_a && _this.currentContract.state === 2) {
                        _this.currentContract.state = 120;
                    }
                    if (_this.currentContract.state === 130 && _this.currentContract.cancel_expiration_time !== 0 && _this.currentContract.cancel_expiration_time < _this.variablesService.exp_med_ts) {
                        _this.currentContract.state = 2;
                    }
                    _this.variablesService.settings.viewedContracts = (_this.variablesService.settings.viewedContracts) ? _this.variablesService.settings.viewedContracts : [];
                    var findViewedCont = false;
                    for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                        if (_this.variablesService.settings.viewedContracts[j].contract_id === _this.currentContract.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === _this.currentContract.is_a) {
                            _this.variablesService.settings.viewedContracts[j].state = _this.currentContract.state;
                            findViewedCont = true;
                            break;
                        }
                    }
                    if (!findViewedCont) {
                        _this.variablesService.settings.viewedContracts.push({
                            contract_id: _this.currentContract.contract_id,
                            is_a: _this.currentContract.is_a,
                            state: _this.currentContract.state
                        });
                    }
                    _this.currentContract.is_new = false;
                    setTimeout(function () {
                        _this.variablesService.currentWallet.recountNewContracts();
                    }, 0);
                }
                _this.checkAndChangeHistory();
            }
            else {
                _this.newPurchase = true;
            }
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (_this.currentContract && _this.currentContract.state === 201 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 2;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
            else if (_this.currentContract && _this.currentContract.state === 601 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 6;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
        });
        if (this.variablesService.appPass) {
            this.purchaseForm.controls.password.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (g.value) {
                        _this.backend.checkMasterPassword({ pass: g.value }, function (status) {
                            _this.ngZone.run(function () {
                                if (status === false) {
                                    g.setErrors(Object.assign({ password_not_match: true }, g.errors));
                                }
                                else {
                                    if (g.hasError('password_not_match')) {
                                        delete g.errors['password_not_match'];
                                        if (Object.keys(g.errors).length === 0) {
                                            g.setErrors(null);
                                        }
                                    }
                                }
                            });
                        });
                        return g.hasError('password_not_match')
                            ? { password_not_match: true }
                            : null;
                    }
                    return null;
                }]);
        }
        this.dLActionSubscribe = this.variablesService.sendActionData$.subscribe(function (res) {
            if (res.action === "escrow") {
                _this.actionData = res;
                _this.fillDeepLinkData();
                _this.variablesService.sendActionData$.next({});
            }
        });
    };
    PurchaseComponent.prototype.fillDeepLinkData = function () {
        this.additionalOptions = true;
        this.purchaseForm.get("description").setValue(this.actionData.description || '');
        this.purchaseForm.get("seller").setValue(this.actionData.seller_address || '');
        this.purchaseForm.get("amount").setValue(this.actionData.amount || '');
        this.purchaseForm.get("yourDeposit").setValue(this.actionData.my_deposit || '');
        this.purchaseForm.get("sellerDeposit").setValue(this.actionData.seller_deposit || '');
        this.purchaseForm.get("comment").setValue(this.actionData.comment || this.actionData.comments || '');
    };
    PurchaseComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    PurchaseComponent.prototype.getProgressBarWidth = function () {
        var progress = '0';
        if (!this.newPurchase) {
            if (this.currentContract) {
                if (this.currentContract.state === 1) {
                    progress = '10%';
                }
                if (this.currentContract.state === 201) {
                    progress = '25%';
                }
                if ([120, 2].indexOf(this.currentContract.state) !== -1) {
                    progress = '50%';
                }
                if ([5, 601].indexOf(this.currentContract.state) !== -1) {
                    progress = '75%';
                }
                if ([110, 130, 140, 3, 4, 6].indexOf(this.currentContract.state) !== -1) {
                    progress = '100%';
                }
            }
        }
        return progress;
    };
    PurchaseComponent.prototype.sameAmountChange = function () {
        if (!this.sameAmountChecked) {
            this.purchaseForm.get('sellerDeposit').clearValidators();
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
            this.sameAmountChecked = !this.sameAmountChecked;
        }
        else {
            this.purchaseForm.get('sellerDeposit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
            this.sameAmountChecked = !this.sameAmountChecked;
        }
    };
    PurchaseComponent.prototype.createPurchase = function () {
        var _this = this;
        if (this.purchaseForm.valid) {
            var sellerDeposit_1 = this.purchaseForm.get('sameAmount').value ? this.purchaseForm.get('amount').value : this.purchaseForm.get('sellerDeposit').value;
            if (this.purchaseForm.get('seller').value.indexOf('@') !== 0) {
                this.backend.createProposal(this.variablesService.currentWallet.wallet_id, this.purchaseForm.get('description').value, this.purchaseForm.get('comment').value, this.variablesService.currentWallet.address, this.purchaseForm.get('seller').value, this.purchaseForm.get('amount').value, this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, this.purchaseForm.get('time').value, this.purchaseForm.get('payment').value, function (create_status) {
                    if (create_status) {
                        _this.back();
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.purchaseForm.get('seller').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.purchaseForm.get('seller').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.createProposal(_this.variablesService.currentWallet.wallet_id, _this.purchaseForm.get('description').value, _this.purchaseForm.get('comment').value, _this.variablesService.currentWallet.address, alias_data.address, _this.purchaseForm.get('amount').value, _this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, _this.purchaseForm.get('time').value, _this.purchaseForm.get('payment').value, function (create_status) {
                                if (create_status) {
                                    _this.back();
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    PurchaseComponent.prototype.back = function () {
        this.location.back();
    };
    PurchaseComponent.prototype.acceptState = function () {
        var _this = this;
        this.backend.acceptProposal(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.ACCEPT_STATE_WAIT_BIG');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ignoredContract = function () {
        this.variablesService.settings.notViewedContracts = (this.variablesService.settings.notViewedContracts) ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 110;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 110,
                time: this.currentContract.expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 110;
        this.currentContract.time = this.currentContract.expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_ACCEPT');
        this.back();
    };
    PurchaseComponent.prototype.productNotGot = function () {
        var _this = this;
        this.backend.releaseProposal(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, 'REL_B', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.BURN_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsFinish = function () {
        var _this = this;
        this.backend.releaseProposal(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, 'REL_N', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('success', 'PURCHASE.SUCCESS_FINISH_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsCancel = function () {
        var _this = this;
        this.backend.requestCancelContract(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, this.purchaseForm.get('timeCancel').value, function (cancel_status) {
            if (cancel_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.SEND_CANCEL_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsDontCanceling = function () {
        this.variablesService.settings.notViewedContracts = this.variablesService.settings.notViewedContracts ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 130;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.cancel_expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 130,
                time: this.currentContract.cancel_expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 130;
        this.currentContract.time = this.currentContract.cancel_expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_CANCEL');
        this.back();
    };
    PurchaseComponent.prototype.dealsDetailsSellerCancel = function () {
        var _this = this;
        this.backend.acceptCancelContract(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.DEALS_CANCELED_WAIT');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        this.actionData = {};
        this.dLActionSubscribe.unsubscribe();
        this.subRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PurchaseComponent.prototype, "onClick", null);
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.scss */ "./src/app/purchase/purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/receive/receive.component.html":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-qr\">\n  <img src=\"{{qrImageSrc}}\" alt=\"qr-code\">\n  <div class=\"wrap-address\">\n    <div class=\"address\">{{variablesService.currentWallet.address}}</div>\n    <button type=\"button\" class=\"btn-copy-address\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/receive/receive.component.scss":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-qr {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.wrap-qr img {\n    margin: 4rem 0; }\n\n.wrap-qr .wrap-address {\n    display: flex;\n    align-items: center;\n    font-size: 1.4rem;\n    line-height: 2.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address {\n      margin-left: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address.copy {\n        transition: all 0.25s ease;\n        width: 2.4rem;\n        height: 2.4rem;\n        background: center/contain no-repeat url('copy.svg'); }\n\n.wrap-qr .wrap-address .btn-copy-address.copied {\n        background: center/contain no-repeat url('complete-testwallet.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZS9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxccmVjZWl2ZVxccmVjZWl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBSHJCO0lBS0ksY0FBYyxFQUFBOztBQUxsQjtJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBOztBQVh2QjtNQWFNLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQWZwQjtRQWlCUSwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLGNBQWM7UUFDZCxvREFBdUUsRUFBQTs7QUFwQi9FO1FBdUJRLG1FQUFzRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVjZWl2ZS9yZWNlaXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwLXFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBtYXJnaW46IDRyZW0gMDtcbiAgfVxuICAud3JhcC1hZGRyZXNzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcbiAgICAuYnRuLWNvcHktYWRkcmVzcyB7XG4gICAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xuICAgICAgd2lkdGg6IDEuN3JlbTtcbiAgICAgIGhlaWdodDogMS43cmVtO1xuICAgICAgJi5jb3B5IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICAgIHdpZHRoOiAyLjRyZW07XG4gICAgICAgIGhlaWdodDogMi40cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYuY29waWVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/receive/receive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/receive/receive.component.ts ***!
  \**********************************************/
/*! exports provided: ReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveComponent", function() { return ReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(backend, variablesService) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.copyAnimation = false;
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        qrcode__WEBPACK_IMPORTED_MODULE_1___default.a.toDataURL(this.variablesService.currentWallet.address, {
            width: 200 * _shared_constants__WEBPACK_IMPORTED_MODULE_4__["RCV_ADDR_QR_SCALE"],
            height: 200 * _shared_constants__WEBPACK_IMPORTED_MODULE_4__["RCV_ADDR_QR_SCALE"]
        }).then(function (url) {
            _this.qrImageSrc = url;
        }).catch(function (err) {
            console.error(err);
        });
    };
    ReceiveComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    ReceiveComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copyAnimationTimeout);
    };
    ReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receive',
            template: __webpack_require__(/*! ./receive.component.html */ "./src/app/receive/receive.component.html"),
            styles: [__webpack_require__(/*! ./receive.component.scss */ "./src/app/receive/receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\n      <span>{{ 'BREADCRUMBS.RESTORE_WALLET' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-restore\" [formGroup]=\"restoreForm\">\n\n    <div class=\"input-block half-block\">\n      <label for=\"wallet-name\">{{ 'RESTORE_WALLET.LABEL_NAME' | translate }}</label>\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\"\n        [class.required-error]=\"restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched\"\n        [placeholder]=\"restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched ? ('RESTORE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\n        [attr.readonly]=\"walletSaved ? '' : null\" [maxLength]=\"variablesService.maxWalletNameLength\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"restoreForm.controls['name'].invalid && !restoreForm.controls['name'].errors['required'] && (restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched)\">\n        <div *ngIf=\"restoreForm.controls['name'].errors['duplicate']\">\n          {{ 'RESTORE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\n        </div>\n        <div *ngIf=\"restoreForm.get('name').value.length >= variablesService.maxWalletNameLength\">\n          {{ 'RESTORE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\n        </div>\n        <div *ngIf=\"restoreForm.get('name').value.length >= variablesService.maxWalletNameLength\">\n          {{ 'RESTORE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"input-block half-block\">\n      <label for=\"wallet-password\">{{ 'RESTORE_WALLET.PASS' | translate }}</label>\n      <input type=\"password\" id=\"wallet-password\"\n        placeholder=\"{{ 'PLACEHOLDERS.WALET_PASSWORD_PLACEHOLDER' | translate }}\" formControlName=\"password\"\n        [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['password'].errors\">\n        <div *ngIf=\"restoreForm.controls['password'].errors.pattern\">\n          {{ 'ERRORS.WRONG_PASSWORD' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block half-block\">\n      <label for=\"confirm-wallet-password\">{{ 'RESTORE_WALLET.CONFIRM' | translate }}</label>\n      <input type=\"password\" id=\"confirm-wallet-password\"\n        placeholder=\"{{ 'PLACEHOLDERS.CONFIRM_WALET_PASSWORD_PLACEHOLDER' | translate }}\" formControlName=\"confirm\"\n        [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['confirm'].dirty && restoreForm.errors && restoreForm.get('confirm').value.length > 0\">\n        <div *ngIf=\"restoreForm.errors['confirm_mismatch']\">\n          {{ 'RESTORE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\n        </div>\n      </div>\n    </div>\n    <div class=\"input-block\">\n      <label for=\"phrase-key\">{{ 'RESTORE_WALLET.LABEL_PHRASE_KEY' | translate }}</label>\n      <input type=\"text\" id=\"phrase-key\" formControlName=\"key\"\n        [class.required-error]=\"restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched\"\n        [placeholder]=\"restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched ? ('RESTORE_WALLET.FORM_ERRORS.KEY_REQUIRED' | translate ) : ('PLACEHOLDERS.SEED_PHRASE_PLACEHOLDER' | translate) \"\n        [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"restoreForm.controls['key'].invalid && !restoreForm.controls['key'].errors['required'] && (restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched)\">\n        <div *ngIf=\"restoreForm.controls['key'].errors['key_not_valid']\">\n          {{ 'RESTORE_WALLET.FORM_ERRORS.KEY_NOT_VALID' | translate }}\n        </div>\n      </div>\n    </div>\n    <div class=\"input-block half-block\"\n      *ngIf=\"this.seedPhraseInfo?.syntax_correct && this.seedPhraseInfo?.require_password\">\n      <label for=\"seed-password\">{{ 'RESTORE_WALLET.SEED_PASSWORD' | translate }}</label>\n      <input type=\"password\" id=\"seed-password\" placeholder=\"{{ 'PLACEHOLDERS.SEED_PHRASE_PLACEHOLDER' | translate }}\"\n        formControlName=\"seedPassword\">\n      <div class=\"error-block\"\n        *ngIf=\"(restoreForm.controls['seedPassword'].dirty || restoreForm.controls['seedPassword'].touched) && !this.seedPhraseInfo?.hash_sum_matched\">\n        <span>{{ 'RESTORE_WALLET.FORM_ERRORS.INCORRECT_PASSWORD' | translate }}</span>\n      </div>\n      <div class=\"success-block\" *ngIf=\"this.seedPhraseInfo?.hash_sum_matched\">\n        <span>{{ 'RESTORE_WALLET.OK' | translate }}</span>\n      </div>\n    </div>\n\n    <div class=\"wrap-buttons\">\n      <button type=\"button\" class=\"blue-button_reset\" *ngIf=\"walletSaved\" disabled><i\n          class=\"icon\"></i>{{walletSavedName}}</button>\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\"\n        [disabled]=\"(!this.seedPhraseInfo?.syntax_correct || !this.seedPhraseInfo?.require_password || !this.seedPhraseInfo?.hash_sum_matched) && (!this.seedPhraseInfo?.syntax_correct || this.seedPhraseInfo?.require_password)\"\n        *ngIf=\"!walletSaved\">{{ 'RESTORE_WALLET.BUTTON_SELECT' | translate }}</button>\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"createWallet()\" [disabled]=\"!walletSaved\">{{\n        'RESTORE_WALLET.BUTTON_CREATE' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-restore {\n  margin: 2.4rem 0;\n  width: 100%; }\n\n.form-restore .input-block.half-block {\n    width: 50%; }\n\n.form-restore .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem;\n    width: 50%; }\n\n.form-restore .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-restore .wrap-buttons button.blue-button_reset {\n        flex-basis: 50%; }\n\n.form-restore .wrap-buttons button.select-button {\n        flex-basis: 60%; }\n\n.form-restore .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdG9yZS13YWxsZXQvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHJlc3RvcmUtd2FsbGV0XFxyZXN0b3JlLXdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRmI7SUFNTSxVQUFVLEVBQUE7O0FBTmhCO0lBV0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUE7O0FBYmQ7TUFnQk0sZ0JBQWdCLEVBQUE7O0FBaEJ0QjtRQW1CUSxlQUFlLEVBQUE7O0FBbkJ2QjtRQXVCUSxlQUFlLEVBQUE7O0FBdkJ2QjtRQTJCUSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXN0b3JlLXdhbGxldC9yZXN0b3JlLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1yZXN0b3JlIHtcbiAgbWFyZ2luOiAyLjRyZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmlucHV0LWJsb2NrIHtcbiAgICAmLmhhbGYtYmxvY2sge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cblxuICAud3JhcC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XG4gICAgd2lkdGg6IDUwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMC43cmVtO1xuXG4gICAgICAmLmJsdWUtYnV0dG9uX3Jlc2V0IHtcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgfVxuXG4gICAgICAmLnNlbGVjdC1idXR0b24ge1xuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XG4gICAgICB9XG5cbiAgICAgICYuY3JlYXRlLWJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.ts ***!
  \************************************************************/
/*! exports provided: RestoreWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreWalletComponent", function() { return RestoreWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RestoreWalletComponent = /** @class */ (function () {
    function RestoreWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.restoreForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { duplicate: true };
                        }
                    }
                    return null;
                },
            ]),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            seedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
        }, function (g) {
            return g.get('password').value === g.get('confirm').value
                ? null
                : { confirm_mismatch: true };
        });
        this.wallet = {
            id: '',
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
        this.seedPhraseInfo = null;
        this.unsubscribeAll = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    RestoreWalletComponent.prototype.ngOnInit = function () {
        this.checkValidSeedPhrasePassword();
        this.changeDetectionSeedPhrasePassword();
    };
    RestoreWalletComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next(true);
        this.unsubscribeAll.complete();
    };
    RestoreWalletComponent.prototype.changeDetectionSeedPhrasePassword = function () {
        var _this = this;
        this.restoreForm.controls.seedPassword.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(function () {
            _this.checkValidSeedPhrasePassword();
        });
        this.restoreForm.controls.key.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(function () {
            _this.checkValidSeedPhrasePassword();
        });
    };
    RestoreWalletComponent.prototype.checkValidSeedPhrasePassword = function () {
        var _this = this;
        var seed_password = this.restoreForm.controls.seedPassword.value;
        var seed_phrase = this.restoreForm.controls.key.value;
        this.backend.getSeedPhraseInfo({ seed_phrase: seed_phrase, seed_password: seed_password }, function (status, data) {
            _this.ngZone.run(function () {
                _this.seedPhraseInfo = data;
            });
        });
    };
    RestoreWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.runWallet();
        });
    };
    RestoreWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.restoreForm.valid &&
            this.restoreForm.get('name').value.length <=
                this.variablesService.maxWalletNameLength) {
            this.backend.isValidRestoreWalletText({
                seed_phrase: this.restoreForm.get('key').value,
                seed_password: this.restoreForm.get('seedPassword').value,
            }, function (valid_status, valid_data) {
                if (valid_data !== 'TRUE') {
                    _this.ngZone.run(function () {
                        _this.restoreForm.get('key').setErrors({ key_not_valid: true });
                    });
                }
                else {
                    _this.backend.saveFileDialog(_this.translate.instant('RESTORE_WALLET.CHOOSE_PATH'), '*', _this.variablesService.settings.default_path, function (save_status, save_data) {
                        if (save_status) {
                            _this.variablesService.settings.default_path = save_data.path.substr(0, save_data.path.lastIndexOf('/'));
                            _this.walletSavedName = save_data.path.substr(save_data.path.lastIndexOf('/') + 1, save_data.path.length - 1);
                            _this.backend.restoreWallet(save_data.path, _this.restoreForm.get('password').value, _this.restoreForm.get('key').value, _this.restoreForm.get('seedPassword').value, function (restore_status, restore_data) {
                                if (restore_status) {
                                    _this.wallet.id = restore_data.wallet_id;
                                    _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](restore_data.wallet_id, _this.restoreForm.get('name').value, _this.restoreForm.get('password').value, restore_data['wi'].path, restore_data['wi'].address, restore_data['wi'].balance, restore_data['wi'].unlocked_balance, restore_data['wi'].mined_total, restore_data['wi'].tracking_hey);
                                    _this.variablesService.opening_wallet.is_auditable =
                                        restore_data['wi'].is_auditable;
                                    _this.variablesService.opening_wallet.is_watch_only =
                                        restore_data['wi'].is_watch_only;
                                    _this.variablesService.opening_wallet.currentPage = 1;
                                    _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(_this.variablesService.opening_wallet.address);
                                    _this.variablesService.opening_wallet.pages = new Array(1).fill(1);
                                    _this.variablesService.opening_wallet.totalPages = 1;
                                    _this.variablesService.opening_wallet.currentPage = 1;
                                    _this.variablesService.opening_wallet.total_history_item = 0;
                                    _this.variablesService.opening_wallet.restore = true;
                                    if (restore_data.recent_history &&
                                        restore_data.recent_history.history) {
                                        _this.variablesService.opening_wallet.totalPages = Math.ceil(restore_data.recent_history.total_history_items /
                                            _this.variablesService.count);
                                        _this.variablesService.opening_wallet.totalPages >
                                            _this.variablesService.maxPages
                                            ? (_this.variablesService.opening_wallet.pages = new Array(5)
                                                .fill(1)
                                                .map(function (value, index) { return value + index; }))
                                            : (_this.variablesService.opening_wallet.pages = new Array(_this.variablesService.opening_wallet.totalPages)
                                                .fill(1)
                                                .map(function (value, index) { return value + index; }));
                                        _this.variablesService.opening_wallet.prepareHistory(restore_data.recent_history.history);
                                    }
                                    _this.backend.getContracts(_this.variablesService.opening_wallet.wallet_id, function (contracts_status, contracts_data) {
                                        if (contracts_status &&
                                            contracts_data.hasOwnProperty('contracts')) {
                                            _this.ngZone.run(function () {
                                                _this.variablesService.opening_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings
                                                    .viewedContracts, _this.variablesService.settings
                                                    .notViewedContracts);
                                            });
                                        }
                                    });
                                    _this.ngZone.run(function () {
                                        _this.walletSaved = true;
                                        _this.progressWidth = '50%';
                                    });
                                }
                                else {
                                    _this.modalService.prepareModal('error', 'RESTORE_WALLET.NOT_CORRECT_FILE_OR_PASSWORD');
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    RestoreWalletComponent.prototype.runWallet = function () {
        var _this = this;
        // add flag when wallet was restored form seed
        this.variablesService.after_sync_request[this.wallet.id] = true;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet.id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.variablesService.setCurrentWallet(_this.wallet.id);
                        _this.router.navigate(['/wallet/']);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet.id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    RestoreWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restore-wallet',
            template: __webpack_require__(/*! ./restore-wallet.component.html */ "./src/app/restore-wallet/restore-wallet.component.html"),
            styles: [__webpack_require__(/*! ./restore-wallet.component.scss */ "./src/app/restore-wallet/restore-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], RestoreWalletComponent);
    return RestoreWalletComponent;
}());



/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.html":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <!-- breadcrumbs -->\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\n      <span>{{ 'BREADCRUMBS.SAVE_PHRASE' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n  <!-- /breadcrumbs -->\n\n  <div class=\"scrolled-content\">\n\n    <form class=\"form-details\" [formGroup]=\"detailsForm\">\n      <div class=\"input-block\">\n        <label>{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\n        <input type=\"text\" id=\"wallet-name\" formControlName=\"name\"\n          [class.required-error]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched\"\n          [placeholder]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched ? ('WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate ) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\n          [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\"\n          readonly>\n        <div class=\"error-block\"\n          *ngIf=\"detailsForm.controls['name'].invalid && !detailsForm.controls['name'].errors['required'] && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\n          <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\n            {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\n          </div>\n          <div *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\n            {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"input-block\">\n        <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\n        <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\n      </div>\n    </form>\n\n    <ng-container *ngIf=\"!showSeed else seedPhraseContent\">\n      <form class=\"form-seed\" [formGroup]=\"seedPhraseForm\" (ngSubmit)=\"onSubmitSeed()\">\n        <div class=\"form-content\">\n          <label>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\n          <div class=\"seed-phrase-form\">\n            <div class=\"input-block\">\n              <label for=\"create-password\">{{ 'WALLET_DETAILS.CREATE_PASSWORD_SECURE' | translate }} <a\n                  title=\"{{ 'WALLET_DETAILS.INFO' | translate }}\"><i class=\"icon info\"></i></a></label>\n              <input type=\"password\" placeholder=\"{{ 'PLACEHOLDERS.PASSWORD_PLACEHOLDER' | translate }}\"\n                id=\"create-password\" formControlName=\"password\">\n            </div>\n            <div class=\"input-block\">\n              <label for=\"confirm-password\">{{ 'WALLET_DETAILS.FORM.CONFIRM_PASSWORD' | translate }}</label>\n              <input type=\"password\" placeholder=\"{{'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate}}\"\n                id=\"confirm-password\" formControlName=\"confirmPassword\">\n              <div class=\"error-block\"\n                *ngIf=\"seedPhraseForm.invalid && (seedPhraseForm.controls['confirmPassword'].dirty || seedPhraseForm.controls['confirmPassword'].touched)\">\n                <div *ngIf=\"seedPhraseForm.invalid && seedPhraseForm.get('confirmPassword').value.length > 0\">\n                  {{ 'WALLET_DETAILS.FORM_ERRORS.PASSWORDS_DONT_MATCH' | translate }}\n                </div>\n              </div>\n            </div>\n\n            <button type=\"submit\" class=\"blue-button\" [disabled]=\"!seedPhraseForm.valid\"><i class=\"icon safety\"></i>\n              {{ 'WALLET_DETAILS.FORM.GENERATE_SECURE_SEED' | translate }}</button>\n            <a class=\"secured-seed\"><i class=\"icon info\"></i>{{ 'WALLET_DETAILS.FORM.SECURED_SEED_WILL_REQUIRE' |\n              translate }}</a>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n    <ng-template #seedPhraseContent>\n      <div class=\"seed-phrase\">\n        <div class=\"seed-phrase-title\">\n          <span class=\"seed-phrase-heading\">{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</span>\n          <p class=\"right-part\">\n            <span *ngIf=\"seedPhraseForm.controls.password.value.length == 0\">{{ 'WALLET_DETAILS.SEED_IS_UNSECURED' |\n              translate }}\n              <i class=\"icon unsecured\"></i></span>\n            <span *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">{{ 'WALLET_DETAILS.SEED_IS_SECURED' |\n              translate }}\n              <i class=\"icon secured\"></i></span>\n          </p>\n        </div>\n        <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\n          <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\n            <div class=\"item\"\n              [class.dark]=\"(index + 1) >= 1 && (index + 1) <= 7 || (index + 1) >= 15 && (index + 1) <= 21\">\n              {{(index + 1) + '. ' + word}}</div>\n          </ng-container>\n        </div>\n        <div class=\"seed-phrase-footer\">\n          <div class=\"wrap-buttons\" *ngIf=\"showSeed\">\n            <button type=\"button\" class=\"blue-button seed-phrase-button\" (click)=\"runWallet()\">{{\n              'SEED_PHRASE.BUTTON_CREATE_ACCOUNT' | translate }}</button>\n            <button type=\"button\" class=\"blue-button_reset copy-button\" (click)=\"copySeedPhrase()\">\n              <ng-container *ngIf=\"!seedPhraseCopied\">\n                {{ 'SEED_PHRASE.BUTTON_COPY' | translate }}\n              </ng-container>\n              <ng-container *ngIf=\"seedPhraseCopied\">\n                {{ 'SEED_PHRASE.BUTTON_COPIED' | translate }}\n              </ng-container>\n            </button>\n          </div>\n          <div class=\"seed-phrase-footer-text\" *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">\n            <i class=\"icon info\"></i>\n            <span class=\"title\">{{ 'WALLET_DETAILS.REMEMBER_YOU_WILL_REQUIRE' | translate\n              }}</span>\n          </div>\n        </div>\n\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.scss":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.content {\n  padding: 3.2rem 3rem 3rem; }\n\n.scrolled-content, .content {\n  height: 100%;\n  overflow-y: auto; }\n\n.mt-2 {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VlZC1waHJhc2UvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNlZWQtcGhyYXNlXFxzZWVkLXBocmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlZWQtcGhyYXNlL3NlZWQtcGhyYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMy4ycmVtIDNyZW0gM3JlbTtcbn1cbi5zY3JvbGxlZC1jb250ZW50LCAuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.ts":
/*!******************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.ts ***!
  \******************************************************/
/*! exports provided: SeedPhraseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedPhraseComponent", function() { return SeedPhraseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeedPhraseComponent = /** @class */ (function () {
    function SeedPhraseComponent(route, router, location, backend, variablesService, modalService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.seedPhrase = '';
        this.showSeed = false;
        this.seedPhraseCopied = false;
        this.progressWidth = '66%';
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id ===
                                _this.variablesService.currentWallet.wallet_id) {
                                return { same: true };
                            }
                            else {
                                return { duplicate: true };
                            }
                        }
                    }
                    return null;
                },
            ]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.seedPhraseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.variablesService.pattern)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.variablesService.pattern)),
        }, { validators: this.checkPasswords });
    }
    SeedPhraseComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    SeedPhraseComponent.prototype.ngOnInit = function () {
        this.showSeed = false;
        this.getWalletId();
        this.setWalletInfoNamePath();
    };
    SeedPhraseComponent.prototype.setWalletInfoNamePath = function () {
        this.detailsForm
            .get('name')
            .setValue(this.variablesService.opening_wallet.name);
        this.detailsForm
            .get('path')
            .setValue(this.variablesService.opening_wallet.path);
    };
    SeedPhraseComponent.prototype.getWalletId = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.wallet_id) {
                _this.wallet_id = params.wallet_id;
            }
        });
    };
    SeedPhraseComponent.prototype.runWallet = function () {
        var _this = this;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet_id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.variablesService.setCurrentWallet(_this.wallet_id);
                        _this.router.navigate(['/wallet/']);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet_id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    SeedPhraseComponent.prototype.copySeedPhrase = function () {
        var _this = this;
        this.backend.setClipboard(this.seedPhrase, function () {
            _this.ngZone.run(function () {
                setTimeout(function () {
                    _this.seedPhraseCopied = false;
                }, 4000);
                _this.seedPhraseCopied = true;
            });
        });
    };
    SeedPhraseComponent.prototype.back = function () {
        this.location.back();
    };
    SeedPhraseComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
        this.progressWidth = '100%';
    };
    SeedPhraseComponent.prototype.onSubmitSeed = function () {
        var _this = this;
        if (this.seedPhraseForm.valid) {
            this.showSeedPhrase();
            var wallet_id = this.wallet_id;
            var seed_password = this.seedPhraseForm.controls.password.value;
            this.backend.getSmartWalletInfo({ wallet_id: wallet_id, seed_password: seed_password }, function (status, data) {
                if (data.hasOwnProperty('seed_phrase')) {
                    _this.ngZone.run(function () {
                        _this.seedPhrase = data['seed_phrase'].trim();
                    });
                }
            });
        }
    };
    SeedPhraseComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    SeedPhraseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed-phrase',
            template: __webpack_require__(/*! ./seed-phrase.component.html */ "./src/app/seed-phrase/seed-phrase.component.html"),
            styles: [__webpack_require__(/*! ./seed-phrase.component.scss */ "./src/app/seed-phrase/seed-phrase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SeedPhraseComponent);
    return SeedPhraseComponent;
}());



/***/ }),

/***/ "./src/app/send-modal/send-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"title\">\n    <span>{{ 'CONFIRM.TITLE' | translate }}</span>\n  </div>\n  <form [formGroup]=\"confirmForm\" (ngSubmit)=\"confirm()\">\n    <div class=\"content\">\n      <div class=\"message-container\">\n        <div class=\"message-block\">\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.SEND' | translate }}</div>\n          <div class=\"message-text\">{{ +form.get('amount').value }} {{variablesService.defaultCurrency}}</div>\n        </div>\n        <div class=\"message-block\">\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.FROM' | translate }}</div>\n          <div class=\"message-text\">{{ variablesService.currentWallet.address }}</div>\n        </div>\n        <div class=\"message-block\">\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.TO' | translate }}</div>\n          <div class=\"message-text\">{{ form.get('address').value }}</div>\n        </div>\n        <ng-container *ngIf=\"form.get('comment').value != ''\">\n          <div class=\"message-block\" *ngIf=\"form.get('comment').value != null\">\n            <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.COMMENT' | translate }}</div>\n            <div class=\"message-text\">{{ form.get('comment').value }}</div>\n          </div>\n        </ng-container>\n        <div class=\"message-block confirm-master-pass\">\n          <div class=\"input-block\" *ngIf=\"variablesService.appPass\">\n            <label for=\"password\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\n            <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\"\n              [class.required-error]=\"confirmForm.controls['password'].dirty || confirmForm.controls['password'].touched\"\n              [placeholder]=\"confirmForm.controls['password'].dirty || confirmForm.controls['password'].touched ? ('LOGIN.FORM_ERRORS.PASS_REQUIRED' | translate ) : ('PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate) \"\n              autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\n            <div class=\"error-block\">\n              <div\n                *ngIf=\"confirmForm.controls['password'].errors && confirmForm.controls['password'].errors.passwordNotMatch\">\n                {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"wrapper-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"onClose()\">{{ 'CONFIRM.BUTTON_CANCEL' | translate }}</button>\n      <button type=\"submit\" class=\"blue-button\" (click)=\"confirm()\">{{ 'CONFIRM.BUTTON_CONFIRM' | translate }}</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 0.3rem 3rem 3rem 3rem;\n  width: 64rem; }\n\n.modal .title {\n    padding: 1.4rem 0;\n    font-size: 1.8rem;\n    line-height: 3rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin: 1.4rem 3rem 6.2rem 0; }\n\n.modal .content .message-container .message-block {\n        display: flex;\n        margin-bottom: 2rem; }\n\n.modal .content .message-container .message-block:last-child {\n          margin-bottom: 0; }\n\n.modal .content .message-container .message-block .message-label {\n          min-width: 6.7rem;\n          line-height: 2rem; }\n\n.modal .content .message-container .message-block .message-text {\n          overflow-wrap: break-word;\n          margin-left: 4.8rem;\n          width: 43.4rem;\n          line-height: 2rem; }\n\n.modal .content .message-container .message-block.confirm-master-pass {\n          width: 100%;\n          margin: 2rem 0; }\n\n.modal .content .message-container .message-block.confirm-master-pass .input-block {\n            width: 100%; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 100%; }\n\n.modal .wrapper-buttons button:first-child {\n        margin-right: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tb2RhbC9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc2VuZC1tb2RhbFxcc2VuZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBOztBQVBkO0lBVUksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFackI7SUFnQkksYUFBYSxFQUFBOztBQWhCakI7TUFtQk0sYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsdUJBQXVCO01BQ3ZCLDRCQUE0QixFQUFBOztBQXZCbEM7UUEwQlEsYUFBYTtRQUNiLG1CQUFtQixFQUFBOztBQTNCM0I7VUE4QlUsZ0JBQWdCLEVBQUE7O0FBOUIxQjtVQWtDVSxpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7O0FBbkMzQjtVQXVDVSx5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLGNBQWM7VUFDZCxpQkFBaUIsRUFBQTs7QUExQzNCO1VBOENVLFdBQVc7VUFDWCxjQUFjLEVBQUE7O0FBL0N4QjtZQWlEWSxXQUFXLEVBQUE7O0FBakR2QjtJQXlESSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBOztBQTNEbEM7TUFpRU0sV0FBVyxFQUFBOztBQWpFakI7UUErRFEsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZW5kLW1vZGFsL3NlbmQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIHBhZGRpbmc6IDAuM3JlbSAzcmVtIDNyZW0gM3JlbTtcbiAgd2lkdGg6IDY0cmVtO1xuXG4gIC50aXRsZSB7XG4gICAgcGFkZGluZzogMS40cmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDEuNHJlbSAzcmVtIDYuMnJlbSAwO1xuXG4gICAgICAubWVzc2FnZS1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtbGFiZWwge1xuICAgICAgICAgIG1pbi13aWR0aDogNi43cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtdGV4dCB7XG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNC44cmVtO1xuICAgICAgICAgIHdpZHRoOiA0My40cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jb25maXJtLW1hc3Rlci1wYXNzIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAuaW5wdXQtYmxvY2sge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLndyYXBwZXItYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgICAgfVxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.ts ***!
  \****************************************************/
/*! exports provided: SendModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendModalComponent", function() { return SendModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendModalComponent = /** @class */ (function () {
    function SendModalComponent(variablesService) {
        this.variablesService = variablesService;
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    SendModalComponent.prototype.ngOnInit = function () {
        if (this.variablesService.appPass) {
            this.confirmForm.controls['password'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.confirmForm.updateValueAndValidity();
        }
    };
    SendModalComponent.prototype.confirm = function () {
        if (this.variablesService.appPass) {
            if (this.confirmForm.controls['password'].value === '') {
                this.confirmForm.controls['password'].setErrors({ requiredPass: true });
                return;
            }
            this.confirmForm.controls['password'].setErrors({ requiredPass: false });
            if (this.variablesService.appPass === this.confirmForm.controls['password'].value) {
                this.confirmed.emit(true);
            }
            else {
                this.confirmForm.controls['password'].setErrors({ passwordNotMatch: true });
            }
        }
        else {
            this.confirmed.emit(true);
        }
    };
    SendModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SendModalComponent.prototype, "wallet_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], SendModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SendModalComponent.prototype, "confirmed", void 0);
    SendModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-modal',
            template: __webpack_require__(/*! ./send-modal.component.html */ "./src/app/send-modal/send-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-modal.component.scss */ "./src/app/send-modal/send-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], SendModalComponent);
    return SendModalComponent;
}());



/***/ }),

/***/ "./src/app/send/send.component.html":
/*!******************************************!*\
  !*** ./src/app/send/send.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!isLoading\" class=\"form-send\" [formGroup]=\"sendForm\" (ngSubmit)=\"showDialog()\">\n\n  <div class=\"input-block input-block-alias\">\n    <label for=\"send-address\">{{ 'SEND.ADDRESS' | translate }}</label>\n    <div class=\"adress-input-row\"><input type=\"text\" id=\"send-address\" formControlName=\"address\"\n        [class.required-error]=\"sendForm.controls['address'].dirty || sendForm.controls['address'].touched\"\n        [placeholder]=\"sendForm.controls['address'].dirty || sendForm.controls['address'].touched ? ('SEND.FORM_ERRORS.ADDRESS_REQUIRED' | translate ) : ('PLACEHOLDERS.ADRESS_PLACEHOLDER' | translate)\"\n        (mousedown)=\"addressMouseDown($event)\" (contextmenu)=\"variablesService.onContextMenu($event)\"><span\n        *ngIf=\"currentAliasAdress\" class=\"curent-alias-adress\"\n        [class.padding-bottom-01]=\"variablesService.settings.scale > 7.5\"\n        [style.left]=\"lenghtOfAdress + 3 + 'rem'\">{{getShorterAdress()}}</span></div>\n    <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\n      <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\n    </div>\n    <div class=\"error-block\"\n      *ngIf=\"sendForm.controls['address'].invalid && (sendForm.controls['address'].dirty || sendForm.controls['address'].touched)\">\n      <div *ngIf=\"sendForm.controls['address'].errors['address_not_valid']\">\n        {{ 'SEND.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\n      </div>\n      <div *ngIf=\"sendForm.controls['address'].errors['alias_not_valid']\">\n        {{ 'SEND.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"input-blocks-row\">\n    <div class=\"input-block\">\n      <label for=\"send-amount\">{{ 'SEND.AMOUNT' | translate }}</label>\n      <input type=\"text\" id=\"send-amount\" formControlName=\"amount\"\n        [class.required-error]=\"sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched\"\n        [placeholder]=\"sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched ? ('SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate ) : ('PLACEHOLDERS.AMOUNT_PLACEHOLDER' | translate)\"\n        appInputValidate=\"money\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"sendForm.controls['amount'].invalid && !sendForm.controls['amount'].errors['required'] && (sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched)\">\n        <div *ngIf=\"sendForm.controls['amount'].errors['zero']\">\n          {{ 'SEND.FORM_ERRORS.AMOUNT_ZERO' | translate }}\n        </div>\n        <div *ngIf=\"sendForm.controls['amount'].errors['great_than_unwraped_coins']\">\n          {{ 'SEND.FORM_ERRORS.GREAT_THAN_UNWRAPPED_COINS' | translate }}\n        </div>\n        <div *ngIf=\"sendForm.controls['amount'].errors['less_than_nir_needed']\">\n          {{ 'SEND.FORM_ERRORS.LESS_THAN_NIR_NEEDED' | translate }}\n        </div>\n        <div *ngIf=\"sendForm.controls['amount'].errors['wrap_info_null']\">\n          {{ 'SEND.FORM_ERRORS.WRAP_INFO_NULL' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"input-block\">\n      <label for=\"send-comment\">{{ 'SEND.COMMENT' | translate }}</label>\n      <input type=\"text\" id=\"send-comment\" formControlName=\"comment\"\n        placeholder=\"{{ 'PLACEHOLDERS.COMMENT_PLACEHOLDER' | translate }}\"\n        [maxLength]=\"variablesService.maxCommentLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"sendForm.get('comment').value && sendForm.get('comment').value.length >= variablesService.maxCommentLength\">\n        {{ 'SEND.FORM_ERRORS.MAX_LENGTH' | translate }}\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"isWrapShown && wrapInfo && !isLoading\" class=\"wrap\">\n    <div class=\"title\">\n      {{ 'SEND.WRAP.TITLE' | translate }}\n      <i class=\"icon info\"></i>\n    </div>\n    <div class=\"text-wrap\">\n      {{ 'SEND.WRAP.MAIN_TEXT' | translate }}\n    </div>\n    <div class=\"title\">{{ 'SEND.WRAP.ESTIMATE' | translate }}</div>\n    <table class=\"text-wrap\">\n      <tr>\n        <td>{{ 'SEND.WRAP.WILL_RECEIVE' | translate }}</td>\n        <td *ngIf=\"!sendForm.controls['amount'].errors\">{{getReceivedValue() | intToMoney}} {{ 'SEND.WRAP.wNIR' |\n          translate }}</td>\n        <td *ngIf=\"sendForm.controls['amount'].errors\">-</td>\n      </tr>\n      <tr>\n        <td>{{ 'SEND.WRAP.FEE' | translate }}</td>\n        <td>\n          {{wrapInfo?.tx_cost?.nir_needed_for_erc20 | intToMoney: 3 }}\n          {{ 'SEND.WRAP.NiR' | translate }}(${{wrapInfo?.tx_cost?.usd_needed_for_erc20}})</td>\n      </tr>\n    </table>\n  </div>\n\n  <button type=\"button\" class=\"send-select\" (click)=\"toggleOptions()\">\n    <span>{{ 'SEND.DETAILS' | translate }}</span><i class=\"icon arrow\" [class.down]=\"!additionalOptions\"\n      [class.up]=\"additionalOptions\"></i>\n  </button>\n\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\n    <div class=\"input-block\">\n      <label for=\"send-mixin\">{{ 'SEND.MIXIN' | translate }}</label>\n      <input type=\"text\" id=\"send-mixin\" formControlName=\"mixin\"\n        [class.required-error]=\"sendForm.controls['mixin'].dirty || sendForm.controls['mixin'].touched\"\n        [placeholder]=\"sendForm.controls['mixin'].dirty || sendForm.controls['mixin'].touched ? ('SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate ) : ('PLACEHOLDERS.AMOUNT_PLACEHOLDER' | translate)\"\n        appInputValidate=\"integer\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n    </div>\n\n    <div class=\"input-block\">\n      <label for=\"send-fee\">{{ 'SEND.FEE' | translate }}</label>\n      <input type=\"text\" id=\"send-fee\" formControlName=\"fee\"\n        [class.required-error]=\"sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched\"\n        [placeholder]=\"sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched ? ('SEND.FORM_ERRORS.FEE_REQUIRED' | translate ) : ('PLACEHOLDERS.FEE_PLACEHOLDER' | translate)\"\n        appInputValidate=\"money\" (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"sendForm.controls['fee'].invalid && !sendForm.controls['fee'].errors['required'] && (sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched)\">\n        <div *ngIf=\"sendForm.controls['fee'].errors['less_min']\">\n          {{ 'SEND.FORM_ERRORS.FEE_MINIMUM' | translate : {fee: variablesService.default_fee} }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"checkbox-block\" [ngClass]=\"{'disabled-checkbox-block': hideWalletAddress}\">\n      <input type=\"checkbox\" id=\"send-hide\" class=\"style-checkbox\" formControlName=\"hide\"\n        [checked]=\"hideWalletAddress || sendForm.controls['hide'].value\">\n      <label for=\"send-hide\">{{ 'SEND.HIDE' | translate }}</label>\n    </div>\n\n  </div>\n\n  <button type=\"submit\" class=\"blue-button\" [disabled]=\"!sendForm.valid || !variablesService.currentWallet.loaded\">{{\n    'SEND.BUTTON' | translate }}</button>\n  <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"sendForm\" (confirmed)=\"confirmed($event)\"></app-send-modal>\n\n</form>\n"

/***/ }),

/***/ "./src/app/send/send.component.scss":
/*!******************************************!*\
  !*** ./src/app/send/send.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.form-send .input-block-alias .adress-input-row {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-end; }\n\n.form-send .input-block-alias .adress-input-row .curent-alias-adress {\n    position: absolute; }\n\n.form-send .input-block-alias .adress-input-row .curent-alias-adress.padding-bottom-01 {\n      padding-bottom: 0.1rem; }\n\n.form-send .input-block-alias input {\n  text-overflow: ellipsis; }\n\n.form-send .input-blocks-row {\n  display: flex; }\n\n.form-send .input-blocks-row > div {\n    flex-basis: 50%; }\n\n.form-send .input-blocks-row > div:first-child {\n      margin-right: 1.5rem; }\n\n.form-send .input-blocks-row > div:last-child {\n      margin-left: 1.5rem; }\n\n.form-send .send-select {\n  display: flex;\n  align-items: center;\n  background: transparent;\n  border: none;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  margin: 1.5rem 0 0;\n  padding: 0;\n  width: 100%;\n  max-width: 15rem;\n  height: 1.3rem; }\n\n.form-send .send-select .arrow {\n    margin-left: 1rem;\n    width: 0.8rem;\n    height: 0.8rem; }\n\n.form-send .send-select .arrow.down {\n      background: center/contain no-repeat url('arrow-down.svg'); }\n\n.form-send .send-select .arrow.up {\n      background: center/contain no-repeat url('arrow-up.svg'); }\n\n.form-send .additional-details {\n  display: flex;\n  margin-top: 1.5rem;\n  padding: 0.5rem 0 2rem; }\n\n.form-send .additional-details > div {\n    flex-basis: 25%; }\n\n.form-send .additional-details > div:first-child {\n      padding-left: 1.5rem;\n      padding-right: 1rem; }\n\n.form-send .additional-details > div:last-child {\n      padding-left: 1rem;\n      padding-right: 1.5rem; }\n\n.form-send .additional-details .checkbox-block {\n    flex-basis: 50%; }\n\n.form-send .additional-details .checkbox-block > label {\n      top: 3.5rem; }\n\n.form-send .additional-details .checkbox-block.disabled-checkbox-block label {\n      cursor: url('not-allowed.svg'), not-allowed; }\n\n.form-send .additional-details .checkbox-block.disabled-checkbox-block label:before {\n        background-color: #556576;\n        border: 0.1rem solid #556576; }\n\n.form-send button {\n  margin: 2.4rem 0;\n  width: 100%;\n  max-width: 15rem; }\n\n.form-send .wrap {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  padding: 2rem;\n  border: 0.1rem solid #2a3543; }\n\n.form-send .wrap .title {\n    font-size: 100%;\n    margin-bottom: 1.5rem;\n    color: #4db1ff; }\n\n.form-send .wrap .title .icon {\n      width: 2rem;\n      height: 2rem;\n      float: right; }\n\n.form-send .wrap .text-wrap {\n    margin: 1.5rem;\n    font-size: 1.5rem; }\n\n.form-send .wrap table tr {\n    background-color: transparent; }\n\n.form-send .wrap table tr td:first-child {\n      width: 22.5rem;\n      padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc2VuZFxcc2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUdNLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQU4zQjtJQVFRLGtCQUFrQixFQUFBOztBQVIxQjtNQVVVLHNCQUFzQixFQUFBOztBQVZoQztFQWVNLHVCQUF1QixFQUFBOztBQWY3QjtFQW1CSSxhQUFhLEVBQUE7O0FBbkJqQjtJQXFCTSxlQUFlLEVBQUE7O0FBckJyQjtNQXVCUSxvQkFBb0IsRUFBQTs7QUF2QjVCO01BMEJRLG1CQUFtQixFQUFBOztBQTFCM0I7RUErQkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUF6Q2xCO0lBMkNNLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQTdDcEI7TUErQ1EsMERBQTRFLEVBQUE7O0FBL0NwRjtNQWtEUSx3REFBMEUsRUFBQTs7QUFsRGxGO0VBdURJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBekQxQjtJQTJETSxlQUFlLEVBQUE7O0FBM0RyQjtNQTZEUSxvQkFBb0I7TUFDcEIsbUJBQW1CLEVBQUE7O0FBOUQzQjtNQWlFUSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUE7O0FBbEU3QjtJQXNFTSxlQUFlLEVBQUE7O0FBdEVyQjtNQXdFUSxXQUFXLEVBQUE7O0FBeEVuQjtNQTRFVSwyQ0FBNEQsRUFBQTs7QUE1RXRFO1FBOEVZLHlCQUF5QjtRQUN6Qiw0QkFBNEIsRUFBQTs7QUEvRXhDO0VBc0ZJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBeEZwQjtFQTJGSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0QkFBNEIsRUFBQTs7QUE5RmhDO0lBZ0dNLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYyxFQUFBOztBQWxHcEI7TUFvR1EsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZLEVBQUE7O0FBdEdwQjtJQTBHTSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7O0FBM0d2QjtJQThHTSw2QkFBNkIsRUFBQTs7QUE5R25DO01BZ0hRLGNBQWM7TUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZW5kL3NlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0tc2VuZCB7XG4gIC5pbnB1dC1ibG9jay1hbGlhcyB7XG4gICAgLmFkcmVzcy1pbnB1dC1yb3cge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgLmN1cmVudC1hbGlhcy1hZHJlc3Mge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICYucGFkZGluZy1ib3R0b20tMDEge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICB9XG4gIC5pbnB1dC1ibG9ja3Mtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgID4gZGl2IHtcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zZW5kLXNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICAgIG1hcmdpbjogMS41cmVtIDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTVyZW07XG4gICAgaGVpZ2h0OiAxLjNyZW07XG4gICAgLmFycm93IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgd2lkdGg6IDAuOHJlbTtcbiAgICAgIGhlaWdodDogMC44cmVtO1xuICAgICAgJi5kb3duIHtcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LWRvd24uc3ZnKTtcbiAgICAgIH1cbiAgICAgICYudXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwofnNyYy9hc3NldHMvaWNvbnMvYXJyb3ctdXAuc3ZnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFkZGl0aW9uYWwtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAgMnJlbTtcbiAgICA+IGRpdiB7XG4gICAgICBmbGV4LWJhc2lzOiAyNSU7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNoZWNrYm94LWJsb2NrIHtcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICAgID4gbGFiZWwge1xuICAgICAgICB0b3A6IDMuNXJlbTtcbiAgICAgIH1cbiAgICAgICYuZGlzYWJsZWQtY2hlY2tib3gtYmxvY2sge1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTY1NzY7XG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjNTU2NTc2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMi40cmVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgfVxuICAud3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzJhMzU0MztcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgY29sb3I6ICM0ZGIxZmY7XG4gICAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtd3JhcCB7XG4gICAgICBtYXJnaW46IDEuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICB0YWJsZSB0ciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDIyLjVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/send/send.component.ts":
/*!****************************************!*\
  !*** ./src/app/send/send.component.ts ***!
  \****************************************/
/*! exports provided: SendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComponent", function() { return SendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SendComponent = /** @class */ (function () {
    function SendComponent(backend, variablesService, modalService, ngZone, http, moneyToInt) {
        var _this = this;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.http = http;
        this.moneyToInt = moneyToInt;
        this.isOpen = false;
        this.localAliases = [];
        this.isModalDialogVisible = false;
        this.hideWalletAddress = false;
        this.isLoading = true;
        this.isWrapShown = false;
        this.additionalOptions = false;
        this.sendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        _this.currentAliasAdress = '';
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status, data) {
                                _this.ngZone.run(function () {
                                    _this.isWrapShown = (data.error_code === 'WRAP');
                                    _this.sendForm.get('amount').setValue(_this.sendForm.get('amount').value);
                                    if (valid_status === false && !_this.isWrapShown) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status, alias_data) {
                                    _this.ngZone.run(function () {
                                        _this.currentAliasAdress = alias_data.address;
                                        _this.lenghtOfAdress = g.value.length;
                                        if (alias_status) {
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if (!g.value) {
                        return null;
                    }
                    if (g.value === 0) {
                        return { 'zero': true };
                    }
                    var bigAmount = _this.moneyToInt.transform(g.value);
                    if (_this.isWrapShown) {
                        if (!_this.wrapInfo) {
                            return { wrap_info_null: true };
                        }
                        if (bigAmount.isGreaterThan(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](_this.wrapInfo.unwraped_coins_left))) {
                            return { great_than_unwraped_coins: true };
                        }
                        if (bigAmount.isLessThan(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](_this.wrapInfo.tx_cost.nir_needed_for_erc20))) {
                            return { less_than_nir_needed: true };
                        }
                    }
                    return null;
                }]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mixin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_shared_constants__WEBPACK_IMPORTED_MODULE_6__["MIXIN"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.variablesService.default_fee, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if ((new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](g.value)).isLessThan(_this.variablesService.default_fee)) {
                        return { 'less_min': true };
                    }
                    return null;
                }]),
            hide: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
    }
    SendComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'send-address' && this.isOpen) {
            this.isOpen = false;
        }
    };
    SendComponent.prototype.getShorterAdress = function () {
        var tempArr = this.currentAliasAdress.split("");
        return this.currentAliasAdress.split("", 34).join('') + "..." + tempArr.splice((tempArr.length - 13), 13).join('');
    };
    SendComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.sendForm.get('address').value && this.sendForm.get('address').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    SendComponent.prototype.setAlias = function (alias) {
        this.sendForm.get('address').setValue(alias);
    };
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mixin = this.variablesService.currentWallet.send_data['mixin'] || _shared_constants__WEBPACK_IMPORTED_MODULE_6__["MIXIN"];
        if (this.variablesService.currentWallet.is_auditable) {
            this.mixin = 0;
            this.sendForm.controls['mixin'].disable();
        }
        this.hideWalletAddress = this.variablesService.currentWallet.is_auditable && !this.variablesService.currentWallet.is_watch_only;
        if (this.hideWalletAddress) {
            this.sendForm.controls['hide'].disable();
        }
        this.sendForm.reset({
            address: this.variablesService.currentWallet.send_data['address'],
            amount: this.variablesService.currentWallet.send_data['amount'],
            comment: this.variablesService.currentWallet.send_data['comment'],
            mixin: this.mixin,
            fee: this.variablesService.currentWallet.send_data['fee'] || this.variablesService.default_fee,
            hide: this.variablesService.currentWallet.send_data['hide'] || false
        });
        this.getWrapInfo();
        this.dLActionSubscribe = this.variablesService.sendActionData$.subscribe(function (res) {
            if (res.action === "send") {
                _this.actionData = res;
                setTimeout(function () {
                    _this.fillDeepLinkData();
                }, 100);
                _this.variablesService.sendActionData$.next({});
            }
        });
    };
    SendComponent.prototype.getWrapInfo = function () {
        var _this = this;
        this.http.get('#')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
            _this.isLoading = false;
        }))
            .subscribe(function (info) {
            _this.wrapInfo = info;
        });
    };
    SendComponent.prototype.showDialog = function () {
        this.isModalDialogVisible = true;
    };
    SendComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.onSend();
        }
        this.isModalDialogVisible = false;
    };
    SendComponent.prototype.fillDeepLinkData = function () {
        this.additionalOptions = true;
        this.sendForm.reset({
            address: this.actionData.address,
            amount: null,
            comment: this.actionData.comment || this.actionData.comments || '',
            mixin: this.actionData.mixins || this.mixin,
            fee: this.actionData.fee || this.variablesService.default_fee,
            hide: this.actionData.hide_sender === "true" ? true : false
        });
    };
    SendComponent.prototype.onSend = function () {
        var _this = this;
        if (this.sendForm.valid) {
            if (this.sendForm.get('address').value.indexOf('@') !== 0) {
                this.backend.validateAddress(this.sendForm.get('address').value, function (valid_status, data) {
                    console.log(valid_status, data.error_code === 'WRAP');
                    if (valid_status === false && !(data.error_code === 'WRAP')) {
                        _this.ngZone.run(function () {
                            _this.sendForm.get('address').setErrors({ 'address_not_valid': true });
                        });
                    }
                    else {
                        _this.backend.sendMoney(_this.variablesService.currentWallet.wallet_id, _this.sendForm.get('address').value, _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (send_status) {
                            if (send_status) {
                                _this.modalService.prepareModal('success', 'SEND.SUCCESS_SENT');
                                _this.variablesService.currentWallet.send_data = {
                                    address: null,
                                    amount: null,
                                    comment: null,
                                    mixin: null,
                                    fee: null,
                                    hide: null
                                };
                                _this.sendForm.reset({
                                    address: null,
                                    amount: null,
                                    comment: null,
                                    mixin: _this.mixin,
                                    fee: _this.variablesService.default_fee,
                                    hide: false
                                });
                            }
                        });
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.sendForm.get('address').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.sendForm.get('address').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.sendMoney(_this.variablesService.currentWallet.wallet_id, alias_data.address, // this.sendForm.get('address').value,
                            _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (send_status) {
                                if (send_status) {
                                    _this.modalService.prepareModal('success', 'SEND.SUCCESS_SENT');
                                    _this.variablesService.currentWallet.send_data = {
                                        address: null,
                                        amount: null,
                                        comment: null,
                                        mixin: null,
                                        fee: null,
                                        hide: null
                                    };
                                    _this.sendForm.reset({
                                        address: null,
                                        amount: null,
                                        comment: null,
                                        mixin: _this.mixin,
                                        fee: _this.variablesService.default_fee,
                                        hide: false
                                    });
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    SendComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    SendComponent.prototype.ngOnDestroy = function () {
        this.dLActionSubscribe.unsubscribe();
        this.variablesService.currentWallet.send_data = {
            address: this.sendForm.get('address').value,
            amount: this.sendForm.get('amount').value,
            comment: this.sendForm.get('comment').value,
            mixin: this.sendForm.get('mixin').value,
            fee: this.sendForm.get('fee').value,
            hide: this.sendForm.get('hide').value
        };
        this.actionData = {};
    };
    SendComponent.prototype.getReceivedValue = function () {
        var amount = this.moneyToInt.transform(this.sendForm.value.amount);
        var needed = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](this.wrapInfo.tx_cost.nir_needed_for_erc20);
        if (amount && needed) {
            return amount.minus(needed);
        }
        return 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SendComponent.prototype, "onClick", null);
    SendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send',
            template: __webpack_require__(/*! ./send.component.html */ "./src/app/send/send.component.html"),
            styles: [__webpack_require__(/*! ./send.component.scss */ "./src/app/send/send.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_8__["MoneyToIntPipe"]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\n\n  <div>\n    <div class=\"head\">\n      <h3 class=\"settings-title\">{{ 'SETTINGS.TITLE' | translate }}</h3>\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n        <i class=\"icon back\"></i>\n        <span>{{ 'COMMON.BACK' | translate }}</span>\n      </button>\n    </div>\n\n    <div class=\"lock-selection\">\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.LANGUAGE.TITLE' | translate }}</label>\n      <ng-select class=\"custom-select\" [items]=\"languagesOptions\" bindValue=\"name\" bindLabel=\"language\"\n        [(ngModel)]=\"variablesService.settings.language\" [clearable]=\"false\" [searchable]=\"false\"\n        (change)=\"onLanguageChange()\">\n        <ng-template ng-label-tmp let-item=\"item\">\n          {{item.language | translate}}\n        </ng-template>\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n          {{item.language | translate}}\n        </ng-template>\n      </ng-select>\n    </div>\n\n    <div class=\"lock-selection\">\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOCK.TITLE' | translate }}</label>\n      <ng-select class=\"custom-select\" [items]=\"appLockOptions\" bindValue=\"id\" bindLabel=\"name\"\n        [(ngModel)]=\"variablesService.settings.appLockTime\" [clearable]=\"false\" [searchable]=\"false\"\n        (change)=\"onLockChange()\">\n        <ng-template ng-label-tmp let-item=\"item\">\n          {{item.name | translate}}\n        </ng-template>\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n          {{item.name | translate}}\n        </ng-template>\n      </ng-select>\n    </div>\n\n    <div class=\"lock-selection\">\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.SCALE.TITLE' | translate }}</label>\n      <ng-select class=\"custom-select\" [items]=\"appScaleOptions\" bindValue=\"id\" bindLabel=\"name\"\n        [(ngModel)]=\"variablesService.settings.scale\" [clearable]=\"false\" [searchable]=\"false\" (change)=\"setScale()\">\n        <ng-template ng-label-tmp let-item=\"item\">\n          {{item.name | translate}}\n        </ng-template>\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n          {{item.name | translate}}\n        </ng-template>\n      </ng-select>\n    </div>\n\n    <div class=\"lock-selection\">\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOG_TITLE' | translate }}</label>\n      <ng-select class=\"custom-select\" [items]=\"appLogOptions\" bindValue=\"id\" bindLabel=\"id\"\n        [(ngModel)]=\"variablesService.settings.appLog\" [clearable]=\"false\" [searchable]=\"false\"\n        (change)=\"onLogChange()\">\n      </ng-select>\n    </div>\n    <div class=\"lock-selection\">\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.NOTIFICATIONS' | translate }}</label>\n      <div class=\"notifications-switch\">\n        <div class=\"switch\" (click)=\"toggleNotifications()\" [ngClass]=\"correntNotificationsState ? 'off' : 'on'\">\n          <span class=\"circle\"></span>\n        </div>\n      </div>\n    </div>\n    <form class=\"master-password\" [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmitChangePass()\">\n\n      <span class=\"master-password-title\">{{ 'SETTINGS.MASTER_PASSWORD.TITLE' | translate }}</span>\n\n      <div class=\"input-block\" *ngIf=\"variablesService.appPass\">\n        <label for=\"old-password\">{{ 'SETTINGS.MASTER_PASSWORD.OLD' | translate }}</label>\n        <input type=\"password\" id=\"old-password\" formControlName=\"password\"\n          placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_OLD' | translate }}\"\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\n        <div class=\"error-block\"\n          *ngIf=\"changeForm.invalid && changeForm.controls['password'].valid && (changeForm.controls['password'].dirty || changeForm.controls['password'].touched) && changeForm.errors && changeForm.errors.pass_mismatch && changeForm.get('password').value.length > 0\">\n          {{ 'SETTINGS.FORM_ERRORS.PASS_NOT_MATCH' | translate }}\n        </div>\n      </div>\n\n      <div class=\"input-block\">\n        <label for=\"new-password\">{{ 'SETTINGS.MASTER_PASSWORD.NEW' | translate }}</label>\n        <input type=\"password\" id=\"new-password\" formControlName=\"new_password\"\n          placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_NEW' | translate }}\"\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\n        <div class=\"error-block\"\n          *ngIf=\"changeForm.controls['new_password'].dirty && changeForm.controls['new_password'].errors\">\n          <div *ngIf=\"changeForm.controls['new_password'].errors.pattern\">\n            {{ 'ERRORS.WRONG_PASSWORD' | translate }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"input-block\">\n        <label for=\"confirm-password\">{{ 'SETTINGS.MASTER_PASSWORD.CONFIRM' | translate }}</label>\n        <input type=\"password\" id=\"confirm-password\" formControlName=\"new_confirmation\"\n          placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate }}\"\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\n        <div class=\"error-block\"\n          *ngIf=\"changeForm.invalid && (changeForm.controls['new_confirmation'].dirty || changeForm.controls['new_confirmation'].touched) && changeForm.errors && changeForm.errors.confirm_mismatch && changeForm.get('new_confirmation').value.length > 0\">\n          {{ 'SETTINGS.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\n        </div>\n      </div>\n\n      <div class=\"submit-button-container\">\n        <button type=\"submit\" class=\"blue-button\" [disabled]=\"!changeForm.valid\">{{ 'SETTINGS.MASTER_PASSWORD.BUTTON'\n          |\n          translate }}</button>\n        <span class=\"saved-message\" [class.active]=\"ifSaved\">{{ 'SETTINGS.SETTINGS_SAVED' | translate }}</span>\n      </div>\n    </form>\n  </div>\n  <div class=\"app_version\">App version: 1.0.3</div>\n\n  <div>\n    <!-- <div class=\"last-build\">{{ 'SETTINGS.LAST_BUILD' | translate : {value: currentBuild} }}</div> -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  position: relative;\n  justify-content: space-between; }\n\n.settings-title {\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.app_version {\n  margin-top: 3rem; }\n\n.lock-selection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 2.2rem 0;\n  width: 25rem; }\n\n.lock-selection .lock-selection-title {\n    display: flex;\n    font-size: 1.6rem;\n    line-height: 1.9rem;\n    margin-bottom: 1.2rem;\n    color: #FFF9AD; }\n\n.lock-selection .switch {\n    border-radius: 1.1rem;\n    cursor: pointer;\n    padding: 0.2rem;\n    width: 3.6rem;\n    height: 2.2rem;\n    transition: all 0.3s ease;\n    position: relative; }\n\n.lock-selection .switch.on .circle {\n      margin-left: 1.4rem; }\n\n.lock-selection .switch.off {\n      background-color: rgba(255, 255, 255, 0.2); }\n\n.lock-selection .switch .circle {\n      display: block;\n      transition: all 0.3s ease;\n      position: relative;\n      border-radius: 50%;\n      width: 1.8rem;\n      height: 1.8rem; }\n\n.master-password {\n  width: 50%;\n  margin-top: 4rem; }\n\n.master-password .master-password-title {\n    display: flex;\n    font-size: 2rem;\n    line-height: 2.4rem;\n    margin-bottom: 3.6rem; }\n\n.master-password .submit-button-container {\n    display: flex;\n    align-items: center; }\n\n.master-password .submit-button-container .saved-message {\n      transition: all 0.5s ease;\n      height: 0;\n      opacity: 0;\n      margin-left: 2rem;\n      font-size: 2rem;\n      line-height: 2.4rem;\n      color: #16d1d6; }\n\n.master-password .submit-button-container .saved-message.active {\n        transition: all 0.5s ease;\n        height: 2.4rem;\n        opacity: 1; }\n\n.master-password .submit-button-container button {\n      margin-top: 1.4rem;\n      width: 25.6rem; }\n\n.last-build {\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFMZDtJQVFJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7O0FBWmxCO0lBZUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7O0FBckJ0QjtNQXdCUSxtQkFBbUIsRUFBQTs7QUF4QjNCO01BNEJNLDBDQUEwQyxFQUFBOztBQTVCaEQ7TUErQk0sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBS3BCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUZsQjtJQUlJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQixFQUFBOztBQVB6QjtJQVdJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFadkI7TUFjTSx5QkFBeUI7TUFDekIsU0FBUztNQUNULFVBQVU7TUFDVixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixjQUFjLEVBQUE7O0FBcEJwQjtRQXNCUSx5QkFBeUI7UUFDekIsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUF4QmxCO01BNEJNLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7O0FBS3BCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2V0dGluZ3MtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG59XG5cbi5hcHBfdmVyc2lvbiB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5sb2NrLXNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDIuMnJlbSAwO1xuICB3aWR0aDogMjVyZW07XG5cbiAgLmxvY2stc2VsZWN0aW9uLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgIGNvbG9yOiAjRkZGOUFEO1xuICB9XG4gIC5zd2l0Y2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIHdpZHRoOiAzLjZyZW07XG4gICAgaGVpZ2h0OiAyLjJyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5vbiB7XG4gICAgICAuY2lyY2xlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vZmYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAxLjhyZW07XG4gICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICB9XG4gIH1cbn1cblxuLm1hc3Rlci1wYXNzd29yZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIC5tYXN0ZXItcGFzc3dvcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy42cmVtO1xuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnNhdmVkLW1lc3NhZ2Uge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgICBjb2xvcjogIzE2ZDFkNjtcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjRyZW07XG4gICAgICB3aWR0aDogMjUuNnJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmxhc3QtYnVpbGQge1xuICBmb250LXNpemU6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/utils.service */ "./src/app/_helpers/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(renderer, variablesService, backend, location, translate, ngZone, utilsService) {
        var _this = this;
        this.renderer = renderer;
        this.variablesService = variablesService;
        this.backend = backend;
        this.location = location;
        this.translate = translate;
        this.ngZone = ngZone;
        this.utilsService = utilsService;
        this.ifSaved = false;
        this.languagesOptions = [
            {
                name: 'en',
                language: 'SETTINGS.LANGUAGE.EN'
            },
            {
                name: 'ru',
                language: 'SETTINGS.LANGUAGE.RU'
            },
            {
                name: 'tr',
                language: 'SETTINGS.LANGUAGE.TR'
            },
            {
                name: 'fr',
                language: 'SETTINGS.LANGUAGE.FR'
            },
            {
                name: 'de',
                language: 'SETTINGS.LANGUAGE.DE'
            },
            {
                name: 'id',
                language: 'SETTINGS.LANGUAGE.ID'
            },
            {
                name: 'it',
                language: 'SETTINGS.LANGUAGE.IT'
            },
            {
                name: 'pt',
                language: 'SETTINGS.LANGUAGE.PT'
            }
        ];
        this.appLockOptions = [
            {
                id: 5,
                name: 'SETTINGS.APP_LOCK.TIME1'
            },
            {
                id: 15,
                name: 'SETTINGS.APP_LOCK.TIME2'
            },
            {
                id: 60,
                name: 'SETTINGS.APP_LOCK.TIME3'
            },
            {
                id: 0,
                name: 'SETTINGS.APP_LOCK.TIME4'
            }
        ];
        this.appScaleOptions = [
            {
                id: 6,
                name: 'SETTINGS.SCALE.75'
            },
            {
                id: 8,
                name: 'SETTINGS.SCALE.100'
            },
            {
                id: 9,
                name: 'SETTINGS.SCALE.125'
            },
            {
                id: 10,
                name: 'SETTINGS.SCALE.150'
            },
            {
                id: 11,
                name: 'SETTINGS.SCALE.175'
            },
            {
                id: 12,
                name: 'SETTINGS.SCALE.200'
            },
            {
                id: 13,
                name: 'SETTINGS.SCALE.225'
            },
            {
                id: 14,
                name: 'SETTINGS.SCALE.250'
            }
        ];
        this.appLogOptions = [
            {
                id: -1
            },
            {
                id: 0
            },
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ];
        this.currentBuild = '';
        this.scale = this.variablesService.settings.scale;
        this.changeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.variablesService.pattern)),
            new_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        }, [function (g) {
                return g.get('new_password').value === g.get('new_confirmation').value ? null : { 'confirm_mismatch': true };
            }, function (g) {
                if (_this.variablesService.appPass) {
                    return g.get('password').value === _this.variablesService.appPass ? null : { 'pass_mismatch': true };
                }
                return null;
            }]);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getVersion(function (version, type) {
            _this.ngZone.run(function () {
                _this.currentBuild = version;
                _this.variablesService.testnet = false;
                if (type == 'testnet') {
                    _this.currentBuild += ' TESTNET';
                    _this.variablesService.testnet = true;
                }
                _this.variablesService.networkType = type;
            });
        });
        this.backend.getIsDisabledNotifications(function (res) {
            _this.correntNotificationsState = res;
        });
    };
    SettingsComponent.prototype.setScale = function () {
        this.scale = this.variablesService.settings.scale;
        var width = this.utilsService.getMinWidthByScale(this.scale);
        var app = document.documentElement.querySelector('app-root');
        this.renderer.setStyle(app, 'min-width', width + 'px');
        this.renderer.setStyle(document.documentElement, 'font-size', this.scale + 'px');
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onSubmitChangePass = function () {
        var _this = this;
        if (this.changeForm.valid) {
            this.onSave();
            this.variablesService.appPass = this.changeForm.get('new_password').value;
            if (this.variablesService.appPass) {
                this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                        _this.variablesService.appLogin = true;
                        _this.variablesService.dataIsLoaded = true;
                        if (_this.variablesService.settings.appLockTime) {
                            _this.variablesService.startCountdown();
                        }
                    }
                    else {
                        console.log(data['error_code']);
                    }
                });
            }
            else {
                this.backend.dropSecureAppData(function (status, data) {
                });
            }
            this.changeForm.reset();
        }
    };
    SettingsComponent.prototype.toggleNotifications = function () {
        if (!this.correntNotificationsState) {
            this.backend.setIsDisabledNotifications("true");
            this.correntNotificationsState = true;
        }
        else {
            this.backend.setIsDisabledNotifications("false");
            this.correntNotificationsState = false;
        }
    };
    SettingsComponent.prototype.onSave = function () {
        var _this = this;
        this.ifSaved = true;
        setTimeout(function () {
            _this.ifSaved = false;
        }, 3000);
    };
    SettingsComponent.prototype.onLockChange = function () {
        if (this.variablesService.appLogin && this.variablesService.settings.appLockTime) {
            this.variablesService.restartCountdown();
        }
    };
    SettingsComponent.prototype.onLogChange = function () {
        this.backend.setLogLevel(this.variablesService.settings.appLog);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onLanguageChange = function () {
        this.translate.use(this.variablesService.settings.language);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.back = function () {
        this.location.back();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            providers: [_helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]],
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header\">\n  <div class=\"logo\">\n    <div>\n      <div><img src=\"assets/icons/NN_contrast.svg\"></div>\n      <div class=\"synchronization-status\"\n        [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 || variablesService.daemon_state === 6 ? 'flex-start' : 'center'}\">\n        <div class=\"status-container\">\n          <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\n          </span>\n          <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{\n            'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\n          </span>\n          <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\n          </span>\n          <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\n          </span>\n          <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\n          </span>\n          <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\n          </span>\n          <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 6\">\n            {{ 'SIDEBAR.SYNCHRONIZATION.DOWNLOADING' | translate }} {{ variablesService.downloaded }}{{\n            'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.total }}{{ 'SIDEBAR.SYNCHRONIZATION.MB' |\n            translate }}\n          </span>\n          <div class=\"progress-bar-container\"\n            *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\n            <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\n              <div class=\"progress-bar\">\n                <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\n              </div>\n              <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\n            </div>\n            <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\n          </div>\n\n          <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 6\">\n            <div class=\"syncing downloading\" *ngIf=\"variablesService.daemon_state === 6\">\n              <div class=\"progress-bar\">\n                <div class=\"fill\" [style.width]=\"variablesService.download.progress_value + '%'\"></div>\n              </div>\n              <div class=\"progress-percent\">{{ variablesService.download.progress_value_text }}%</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"update-container\"\n          *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\n          <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\n            <div class=\"update-text standard\">\n              <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\n            </div>\n            <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\"\n              placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\"><svg version=\"1.1\" id=\"Layer_1\"\n                xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n                <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\n                                L14,9L24,11z\" />\n                <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\n                                c-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\" />\n              </svg></i>\n          </ng-container>\n          <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\n            <div class=\"update-text important\">\n              <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\n              <br>\n              <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\n            </div>\n            <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\"\n              placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"><svg version=\"1.1\" id=\"Layer_1\"\n                xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n                <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\n                L14,9L24,11z\" />\n                <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\n                c-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\" />\n              </svg></i>\n          </ng-container>\n          <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\n            <div class=\"update-text critical\">\n              <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\n              <br>\n              <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\n            </div>\n            <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\"\n              placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\"><svg version=\"1.1\" id=\"Layer_1\"\n                xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n                <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\n                        L14,9L24,11z\" />\n                <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\n                        c-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\" />\n              </svg></i>\n          </ng-container>\n        </div>\n        <div class=\"update-container\"\n          *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\n          <div class=\"update-text time\">\n            <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\n          </div>\n          <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\"\n            tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"sidebar-accounts\">\n  <div class=\"sidebar-accounts-list scrolled-content\" cdkDropList #scrollContainer cdkDropListLockAxis=\"y\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <ng-container *ngFor=\"let wallet of variablesService.wallets\">\n      <div class=\"sidebar-account\" [class.active]=\"wallet?.wallet_id === variablesService?.currentWallet?.wallet_id\"\n        (click)=\"selectWallet(wallet.wallet_id)\" [class.auditable]=\"wallet.is_auditable && !wallet.is_watch_only\"\n        [class.opened]=\"isOpened(wallet.wallet_id)\"\n        [class.watch-only]=\"wallet.is_watch_only\" cdkDrag vsDragScroll [vsDragScrollContainer]=\"scrollContainer\"\n        [cdkDragData]=\"wallet\">\n\n        <div class=\"sidebar-account-front\" *ngIf=\"!isOpened(wallet.wallet_id)\" >\n          <div class=\"sidebar-account-row account-alias\">\n            <button class=\"close-wallet-button\" type=\"button\" (click)=\"showDialog(wallet.wallet_id)\"\n              tooltip=\"{{ 'WALLET.TOOLTIPS.CLOSE' | translate }}\" placement=\"top-left\"\n              tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\n              <i class=\"icon close-wallet\"></i>\n            </button>\n            <div class=\"name\">\n              <div class=\"indicator\" *ngIf=\"wallet.new_contracts\">{{wallet.new_contracts}}</div>\n              <ng-container *ngIf=\"!wallet.alias['name']\">\n                <span class=\"title\" tooltip=\"{{ wallet.name }}\" placement=\"top-left\"\n                  tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\"\n                  [showWhenNoOverflow]=\"false\">{{wallet.name}}</span>\n              </ng-container>\n              <ng-container *ngIf=\"wallet.alias['name']\">\n                <span tooltip=\"{{ wallet.name }}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\"\n                  [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.alias['name']}}</span>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"lock_wallet\">\n            <i class=\"icon_lock\"></i>\n          </div>\n        </div>\n        \n        <div class=\"sidebar-account-back\" *ngIf=\"isOpened(wallet.wallet_id)\">\n          <div class=\"sidebar-account-row account-alias\">\n            <button class=\"close-wallet-button\" type=\"button\" (click)=\"showDialog(wallet.wallet_id)\"\n              tooltip=\"{{ 'WALLET.TOOLTIPS.CLOSE' | translate }}\" placement=\"top-left\"\n              tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\n              <i class=\"icon close-wallet\"></i>\n            </button>\n            <div class=\"name\">\n              <div class=\"indicator\" *ngIf=\"wallet.new_contracts\">{{wallet.new_contracts}}</div>\n              <ng-container *ngIf=\"!wallet.alias['name']\">\n                <span class=\"title\" tooltip=\"{{ wallet.name }}\" placement=\"top-left\"\n                  tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\"\n                  [showWhenNoOverflow]=\"false\">{{wallet.name}}</span>\n              </ng-container>\n              <ng-container *ngIf=\"wallet.alias['name']\">\n                <span tooltip=\"{{ wallet.name }}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\"\n                  [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.alias['name']}}</span>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"sidebar-account-row account-title-balance\">\n            <span class=\"balance\">{{ 'WALLET.BALANCE' | translate }}{{wallet.balance | intToMoney : '3' }}</span>\n            <span class=\"balance\"> {{variablesService.defaultCurrency}}</span>\n          </div>\n          <div class=\"sidebar-account-row account-price\">\n            <span class=\"price\">${{wallet.getMoneyEquivalent(variablesService.moneyEquivalent) |\n              intToMoney | number :\n              '1.2-2'}}</span>\n            <span class=\"price-percent\"></span>\n          </div>\n\n          <ng-container\n          *ngIf=\"(!wallet.is_auditable && !wallet.is_watch_only && wallet.balance.gt(0)) || (wallet.is_auditable && !wallet.is_watch_only && wallet.balance.gt(0))\">\n              <div class=\"sidebar-account-row account-staking\"\n                *ngIf=\"!(!wallet.loaded && variablesService.daemon_state === 2)\">\n                <span class=\"text\">{{ 'SIDEBAR.ACCOUNT.STAKING' | translate }}</span>\n                <app-staking-switch [wallet_id]=\"wallet.wallet_id\" [(staking)]=\"wallet.staking\"></app-staking-switch>\n              </div>\n          </ng-container>\n          \n          <div class=\"sidebar-account-row account-synchronization\"\n            *ngIf=\"!wallet.loaded && variablesService.daemon_state === 2\">\n            <div class=\"progress-bar\">\n              <div class=\"fill\" [style.width]=\"wallet.progress + '%'\"></div>\n            </div>\n            <div class=\"progress-percent\">{{ wallet.progress }}%</div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"sidebar-settings\">\n  <div class=\"wrap-button\">\n    <button class=\"add-wallet-button\" (click)=\"goMainPage()\">\n      <i class=\"icon add-wallet\"></i>\n      <span>{{ 'SIDEBAR.ADD_NEW' | translate\n        }}</span>\n    </button>\n  </div>\n  <div class=\"wrap-button\" routerLinkActive=\"active\" *ngIf=\"variablesService.appPass === ''; else contactsShow\"\n    tooltip=\"{{ 'SIDEBAR.CONTACTS_TOOLTIP' | translate }}\" placement=\"top\" tooltipClass=\"table-tooltip account-tooltip\"\n    [delay]=\"500\" [timeDelay]=\"500\">\n    <button (click)=\"contactsRoute()\"\n      [class.disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\"\n      [disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\">\n      <i class=\"icon contacts\"></i>\n      <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\n    </button>\n  </div>\n  <ng-template #contactsShow>\n    <div class=\"wrap-button\" routerLinkActive=\"active\">\n      <button (click)=\"contactsRoute()\" [class.disabled]=\"variablesService.daemon_state !== 2\"\n        [disabled]=\"variablesService.daemon_state !== 2\">\n        <i class=\"icon contacts\"></i>\n        <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\n      </button>\n    </div>\n  </ng-template>\n  <div class=\"wrap-button\" routerLinkActive=\"active\">\n    <button [routerLink]=\"['/settings']\">\n      <i class=\"icon settings\"></i>\n      <span> {{ 'SIDEBAR.SETTINGS' | translate }}</span>\n    </button>\n  </div>\n  <div class=\"wrap-button\" *ngIf=\"variablesService.appPass === ''; else masterPass\"\n    tooltip=\"{{ 'SIDEBAR.LOG_OUT_TOOLTIP' | translate }}\" placement=\"bottom\"\n    tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\n    <button (click)=\"logOut()\" [class.disabled]=\"variablesService.appPass === ''\"\n      [disabled]=\"variablesService.appPass === ''\">\n      <i class=\"icon logout\"></i>\n      <span> {{ 'SIDEBAR.LOG_OUT' | translate }}</span>\n    </button>\n  </div>\n  <ng-template #masterPass>\n    <div class=\"wrap-button\">\n      <button (click)=\"logOut()\">\n        <i class=\"icon logout\"></i>\n        <span> {{ 'SIDEBAR.LOG_OUT' | translate }}</span>\n      </button>\n    </div>\n  </ng-template>\n</div>\n\n<app-confirm-modal *ngIf=\"isModalDialogVisible\" [title]=\" 'WALLET.CONFIRM.TITLE' | translate \"\n  [message]=\" 'WALLET.CONFIRM.MESSAGE' | translate \" (confirmed)=\"confirmed($event)\"></app-confirm-modal>\n<app-deeplink></app-deeplink>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex: 0 0 35rem;\n  padding: 1.8rem 0 2rem 0; }\n\n.animated {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.2rem; }\n\n.animated::ng-deep svg {\n    width: 2rem;\n    height: 2rem; }\n\n.animated::ng-deep svg path,\n    .animated::ng-deep svg circle,\n    .animated::ng-deep svg polygon {\n      fill: #FFF9AD; }\n\n.sidebar-header {\n  margin-top: 2rem;\n  margin-left: 5px;\n  min-height: 7rem;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.3rem; }\n\n.sidebar-header img {\n    height: 100%;\n    width: 100%; }\n\n.wallet-type {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0.7rem;\n  height: 100%;\n  background-color: transparent;\n  transition: all ease 0.3s;\n  overflow: hidden; }\n\n.wallet-type:hover {\n    width: 2.8rem; }\n\n.wallet-type .content {\n    height: 100%;\n    padding: 0.7rem;\n    font-size: 1.2rem;\n    line-height: 1.4rem;\n    font-weight: 500;\n    color: #ffffff;\n    text-decoration: none;\n    text-transform: capitalize;\n    transition: all ease 0.3s;\n    writing-mode: vertical-rl;\n    text-orientation: mixed; }\n\n.wallet-type .content.auditable {\n      background-color: #5cda9d; }\n\n.wallet-type .content.watch-only, .wallet-type .content.auditable-watch-only {\n      background-color: #206F5A; }\n\n.cdk-drag-placeholder {\n  opacity: 0.3; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-preview.sidebar-account {\n  color: #ffffff;\n  background: #206F5A;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-preview.sidebar-account.account-price .price {\n    color: #FFF9AD; }\n\n.cdk-drag-preview.sidebar-account.account-price .price-percent {\n    color: #BEBEBE; }\n\n.sidebar-account {\n  border-radius: 0.5rem;\n  margin: 1rem;\n  width: 25rem;\n  height: 18rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  padding: 1.3rem 1rem; }\n\n.sidebar-account .close-wallet-button {\n    position: absolute;\n    top: 1.2rem;\n    right: 1.2rem;\n    padding: 0;\n    height: auto;\n    background: transparent;\n    border: none; }\n\n.sidebar-account .close-wallet-button .icon {\n      width: 1.6rem;\n      height: 1.6rem;\n      display: block;\n      content: \"\";\n      background: center/contain no-repeat url('close-wallet.svg'); }\n\n.sidebar-account .sidebar-account-row:last-child {\n    margin-bottom: 0;\n    padding-top: 15px; }\n\n.sidebar-account .sidebar-account-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem; }\n\n.sidebar-account .sidebar-account-row.account-alias {\n      justify-content: flex-start;\n      font-size: 2rem;\n      padding: 5px; }\n\n.sidebar-account .sidebar-account-row.account-alias .name {\n        position: relative;\n        margin-right: 1rem;\n        display: flex;\n        align-items: center;\n        flex-shrink: 1;\n        line-height: 1.7rem; }\n\n.sidebar-account .sidebar-account-row.account-alias .name span {\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap; }\n\n.sidebar-account .sidebar-account-row.account-alias .name .indicator {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 50%;\n          width: 2rem;\n          height: 2rem;\n          margin-right: 0.8rem;\n          font-size: 1.4rem;\n          line-height: 1rem; }\n\n.sidebar-account .sidebar-account-row.account-title-balance .balance {\n      font-size: 2rem;\n      line-height: 2.4rem;\n      font-weight: 400;\n      white-space: nowrap; }\n\n.sidebar-account .sidebar-account-row.account-price {\n      font-size: 1.4rem;\n      line-height: 1.7rem;\n      display: flex;\n      justify-content: flex-start; }\n\n.sidebar-account .sidebar-account-row.account-price .price-percent {\n        margin-left: 0.7rem; }\n\n.sidebar-account .sidebar-account-row.account-staking .text {\n      line-height: 1.9rem;\n      font-size: 1.6rem; }\n\n.sidebar-account .sidebar-account-row.account-synchronization {\n      display: flex;\n      align-items: center;\n      width: 100%; }\n\n.sidebar-account .sidebar-account-row.account-synchronization .progress-bar {\n        border-radius: 1rem;\n        flex: 1 0 auto;\n        height: 0.4rem;\n        overflow: hidden; }\n\n.sidebar-account .sidebar-account-row.account-synchronization .progress-bar .fill {\n          height: 100%; }\n\n.sidebar-account .sidebar-account-row.account-synchronization .progress-percent {\n        flex: 0 0 auto;\n        font-size: 1.4rem;\n        line-height: 1.7rem;\n        padding-left: 1rem; }\n\n.sidebar-account:focus {\n    outline: none; }\n\n.sidebar-accounts {\n  margin: 4rem;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  width: 70%;\n  height: 90%; }\n\n.sidebar-accounts .sidebar-accounts-list {\n    padding: 0 0.9rem;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    overflow-y: auto; }\n\n.sidebar-settings {\n  margin: 4rem;\n  flex: 0 0 auto; }\n\n.sidebar-settings .wrap-button {\n    transition: all 0.25s ease;\n    margin-top: 1.5rem; }\n\n.sidebar-settings .wrap-button button {\n      transition: all 0.25s ease;\n      display: flex;\n      align-items: center;\n      background: transparent;\n      border: none;\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 2.4rem;\n      outline: none; }\n\n.sidebar-settings .wrap-button button:hover span {\n        transition: margin 0.25s ease;\n        margin-left: 0.5rem; }\n\n.sidebar-settings .wrap-button button span {\n        transition: margin 0.25s ease; }\n\n.sidebar-settings .wrap-button button .add-wallet-div {\n        max-width: 1.2rem;\n        max-height: 1.2rem; }\n\n.sidebar-settings .wrap-button button.disabled {\n        cursor: url('not-allowed.svg') not-allowed; }\n\n.sidebar-settings .wrap-button button .icon {\n        margin-right: 0.7rem;\n        width: 2rem;\n        height: 2rem;\n        transition: all 0.25s ease; }\n\n.sidebar-settings .wrap-button button .icon.add-wallet {\n          width: 1.4rem;\n          height: 1.4rem;\n          background: center/contain no-repeat url('addnew.svg'); }\n\n.sidebar-settings .wrap-button button .icon.contacts {\n          background: center/contain no-repeat url('contacts.svg'); }\n\n.sidebar-settings .wrap-button button .icon.settings {\n          background: center/contain no-repeat url('settings-gear.svg'); }\n\n.sidebar-settings .wrap-button button .icon.logout {\n          background: none;\n          background: center/contain no-repeat url('logout.png'); }\n\n.logo {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.synchronization-status {\n  margin: 2rem 3rem 2rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 0 0 7rem;\n  font-size: 1.4rem; }\n\n.synchronization-status .status-container {\n    padding-bottom: 1.5rem;\n    position: relative;\n    flex-grow: 1;\n    text-align: left; }\n\n.synchronization-status .status-container .offline,\n    .synchronization-status .status-container .online {\n      bottom: -3rem;\n      position: relative;\n      display: block;\n      line-height: 1.2rem;\n      padding-left: 2.2rem; }\n\n.synchronization-status .status-container .offline:before,\n      .synchronization-status .status-container .online:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: 50%;\n        width: 1.2rem;\n        height: 1.2rem; }\n\n.synchronization-status .status-container .progress-bar-container {\n      height: 0.8rem;\n      width: 100%; }\n\n.synchronization-status .status-container .progress-bar-container .syncing {\n        display: flex; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-bar {\n          border-radius: 1rem;\n          flex: 1 0 auto;\n          overflow: hidden; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-bar .fill {\n            border-radius: 1rem;\n            height: 100%; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-percent {\n          flex: 0 0 auto;\n          font-size: 1.4rem;\n          line-height: 1.7rem;\n          padding-left: 1.2rem; }\n\n.synchronization-status .status-container .progress-bar-container .loading {\n        animation: move 5s linear infinite;\n        background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n        background-size: 7rem 7rem;\n        height: 100%; }\n\n.synchronization-status .update-container {\n    display: flex;\n    flex-grow: 1;\n    margin-left: 1rem;\n    text-align: right; }\n\n.synchronization-status .update-container .update-text {\n      flex: 1 1 auto;\n      font-size: 1.2rem;\n      line-height: 1.8rem;\n      text-align: left;\n      background-color: red; }\n\n.synchronization-status .update-container .update-text.time {\n        font-size: 1.1rem; }\n\n.synchronization-status .update-container .icon {\n      flex: 1 0 auto;\n      margin: 0.3rem 0 0 0.6rem;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n.synchronization-status .update-container .icon.update {\n        background: center/contain no-repeat url('update.svg'); }\n\n.synchronization-status .update-container .icon.time {\n        background: center/contain no-repeat url('time.svg'); }\n\n.settings-block {\n  position: relative; }\n\n.settings-block button {\n    margin: 0; }\n\n.settings-block button:disabled {\n      cursor: url('not-allowed.svg'), not-allowed; }\n\n.settings-block .settings-dropdown {\n    position: absolute;\n    border-radius: 0.6rem;\n    top: 3rem;\n    right: 0;\n    width: 19rem; }\n\n.settings-block .settings-dropdown button {\n      height: 4rem;\n      display: flex;\n      padding-left: 1.1rem;\n      align-items: center;\n      width: 100%; }\n\n.settings-block .settings-dropdown button:disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.settings-block .settings-dropdown button:disabled .icon svg path,\n        .settings-block .settings-dropdown button:disabled .icon svg .st0 {\n          fill: rgba(255, 255, 255, 0.4); }\n\n.settings-block .settings-dropdown button:disabled span {\n          color: rgba(255, 255, 255, 0.4); }\n\n.settings-block .settings-dropdown button.dark-line {\n        border-bottom: 1px solid #0c0c3a; }\n\n.settings-block .settings-dropdown button span {\n        font-size: 1.4rem;\n        line-height: 1.7rem; }\n\n.settings-block .settings-dropdown button .icon {\n        height: 1.8rem;\n        width: 1.8rem;\n        margin-right: 1rem; }\n\n.settings-block .settings-dropdown button .icon svg {\n          height: 100%;\n          width: 100%; }\n\n.settings-block .settings-dropdown button .icon.resync-wallet {\n          height: 1.7rem;\n          width: 1.7rem; }\n\n.settings-block .settings-dropdown button .icon.close-wallet {\n          background: center/contain no-repeat url('close-wallet-dropdown.svg'); }\n\n.alias {\n  display: flex;\n  align-items: center;\n  font-size: 1.3rem; }\n\n.alias .icon {\n    cursor: pointer;\n    margin-right: 1.2rem;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.alias .icon.edit {\n      background: center/contain no-repeat url('details.svg'); }\n\n.alias .icon.transfer {\n      background: center/contain no-repeat url('send.svg'); }\n\n@keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n.sidebar-account {\n  /* Set perspective for the 3D effect */\n  perspective: 1000px;\n  /* Define the transition duration for the flip effect */\n  transition: transform 0.6s; }\n\n.sidebar-account-back {\n  /* Initially hide the back view */\n  transform: rotateY(180deg); }\n\n.sidebar-account.active {\n  /* Apply the flip effect when the active class is present */\n  transform: rotateY(180deg); }\n\n.lock_wallet {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.lock_wallet .icon_lock {\n    width: 10rem;\n    height: 10rem;\n    background: center/contain no-repeat url('lock_wallet.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFzc2V0c1xcc2Nzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUp0QjtJQU1JLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBUGhCOzs7TUFXTSxhQUFhLEVBQUE7O0FBSW5CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUIsRUFBQTs7QUFOdkI7SUFRSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQVJsQjtJQVVJLGFBQWEsRUFBQTs7QUFWakI7SUFhSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsdUJBQXVCLEVBQUE7O0FBdkIzQjtNQXlCTSx5QkFBeUIsRUFBQTs7QUF6Qi9CO01BNkJNLHlCQ1ppQyxFQUFBOztBRGdCdkM7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxzREFBc0QsRUFBQTs7QUFFeEQ7RUFDRSxjQ3JCNEI7RURzQjVCLG1CQ3hCcUM7RUR5QnJDLHFIQzlCa0MsRUFBQTs7QUQyQnBDO0lBTU0sY0NGb0IsRUFBQTs7QURKMUI7SUFTTSxjQUFjLEVBQUE7O0FBS3BCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFUdEI7SUFXSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZLEVBQUE7O0FBakJoQjtNQW1CTSxhQUFhO01BQ2IsY0FBYztNQUNkLGNBQWM7TUFDZCxXQUFXO01BQ1gsNERBQWlGLEVBQUE7O0FBdkJ2RjtJQTZCSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBOUJyQjtJQWlDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTs7QUFwQ3ZCO01BdUNNLDJCQUEyQjtNQUMzQixlQUFlO01BQ2YsWUFBWSxFQUFBOztBQXpDbEI7UUEyQ1Esa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxtQkFBbUIsRUFBQTs7QUFoRDNCO1VBa0RVLHVCQUF1QjtVQUN2QixnQkFBZ0I7VUFDaEIsbUJBQW1CLEVBQUE7O0FBcEQ3QjtVQXVEVSxhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFlBQVk7VUFDWixvQkFBb0I7VUFDcEIsaUJBQWlCO1VBQ2pCLGlCQUFpQixFQUFBOztBQS9EM0I7TUFxRVEsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7O0FBeEUzQjtNQTRFTSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYiwyQkFBMkIsRUFBQTs7QUEvRWpDO1FBaUZRLG1CQUFtQixFQUFBOztBQWpGM0I7TUF1RlEsbUJBQW1CO01BQ25CLGlCQUFpQixFQUFBOztBQXhGekI7TUE2Rk0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUE7O0FBL0ZqQjtRQWlHUSxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7UUFDZCxnQkFBZ0IsRUFBQTs7QUFwR3hCO1VBc0dVLFlBQVksRUFBQTs7QUF0R3RCO1FBMEdRLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBOztBQTdHMUI7SUFrSEksYUFBYSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFQYjtJQVNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUZoQjtJQUlJLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTs7QUFMdEI7TUFPTSwwQkFBMEI7TUFDMUIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGFBQWEsRUFBQTs7QUFmbkI7UUFrQlUsNkJBQTZCO1FBQzdCLG1CQUFtQixFQUFBOztBQW5CN0I7UUF1QlEsNkJBQTZCLEVBQUE7O0FBdkJyQztRQTBCUSxpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7O0FBM0IxQjtRQThCUSwwQ0FBMkQsRUFBQTs7QUE5Qm5FO1FBaUNRLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsWUFBWTtRQUNaLDBCQUEwQixFQUFBOztBQXBDbEM7VUFzQ1UsYUFBYTtVQUNiLGNBQWM7VUFDZCxzREFBeUUsRUFBQTs7QUF4Q25GO1VBMkNVLHdEQUEyRSxFQUFBOztBQTNDckY7VUE4Q1UsNkRBQWdGLEVBQUE7O0FBOUMxRjtVQWlEVSxnQkFBZ0I7VUFDaEIsc0RBQXlFLEVBQUE7O0FBTW5GO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQU5uQjtJQVFJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVhwQjs7TUFjTSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CLEVBQUE7O0FBbEIxQjs7UUFxQlEsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQTNCdEI7TUErQk0sY0FBYztNQUNkLFdBQVcsRUFBQTs7QUFoQ2pCO1FBa0NRLGFBQWEsRUFBQTs7QUFsQ3JCO1VBb0NVLG1CQUFtQjtVQUNuQixjQUFjO1VBQ2QsZ0JBQWdCLEVBQUE7O0FBdEMxQjtZQXdDWSxtQkFBbUI7WUFDbkIsWUFBWSxFQUFBOztBQXpDeEI7VUE2Q1UsY0FBYztVQUNkLGlCQUFpQjtVQUNqQixtQkFBbUI7VUFDbkIsb0JBQW9CLEVBQUE7O0FBaEQ5QjtRQXFEUSxrQ0FBa0M7UUFDbEMsK2xDQW9Cd2lCO1FBQ3hpQiwwQkFBMEI7UUFDMUIsWUFBWSxFQUFBOztBQTVFcEI7SUFpRkksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBcEZyQjtNQXVGTSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUE7O0FBM0YzQjtRQTZGUSxpQkFBaUIsRUFBQTs7QUE3RnpCO01BaUdNLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUFwR3BCO1FBc0dRLHNEQUF5RSxFQUFBOztBQXRHakY7UUF5R1Esb0RBQXVFLEVBQUE7O0FBTS9FO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBTUksU0FBUyxFQUFBOztBQU5iO01BSU0sMkNBQTRELEVBQUE7O0FBSmxFO0lBU0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVksRUFBQTs7QUFiaEI7TUFlTSxZQUFZO01BQ1osYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsV0FBVyxFQUFBOztBQW5CakI7UUFxQlEsMkNBQTRELEVBQUE7O0FBckJwRTs7VUF5QlUsOEJBQThCLEVBQUE7O0FBekJ4QztVQTRCVSwrQkFBK0IsRUFBQTs7QUE1QnpDO1FBZ0NRLGdDQUFnQyxFQUFBOztBQWhDeEM7UUFtQ1EsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFBOztBQXBDM0I7UUF1Q1EsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0IsRUFBQTs7QUF6QzFCO1VBMkNVLFlBQVk7VUFDWixXQUFXLEVBQUE7O0FBNUNyQjtVQStDVSxjQUFjO1VBQ2QsYUFBYSxFQUFBOztBQWhEdkI7VUFtRFUscUVBQXdGLEVBQUE7O0FBTWxHO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBUmxCO01BVU0sdURBQTBFLEVBQUE7O0FBVmhGO01BYU0sb0RBQXVFLEVBQUE7O0FBSzdFO0VBQ0U7SUFDRSwrQkFBK0IsRUFBQTtFQUVqQztJQUNFLDhCQUE4QixFQUFBLEVBQUE7O0FBR2xDO0VBQ0Usc0NBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdURBQUE7RUFDQSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxpQ0FBQTtFQUNBLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLDJEQUFBO0VBQ0EsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFIekI7SUFLRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJEQUE4RSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zY3NzL2Jhc2UvdmFyaWFibGVzXCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleDogMCAwIDM1cmVtO1xuICBwYWRkaW5nOiAxLjhyZW0gMCAycmVtIDA7XG59XG4uYW5pbWF0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XG4gICY6Om5nLWRlZXAgc3ZnIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgcGF0aCxcbiAgICBjaXJjbGUsXG4gICAgcG9seWdvbiB7XG4gICAgICBmaWxsOiAjRkZGOUFEO1xuICAgIH1cbiAgfVxufVxuLnNpZGViYXItaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWluLWhlaWdodDogN3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIuM3JlbTtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi53YWxsZXQtdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMC43cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcbiAgICB3aWR0aDogMi44cmVtO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC43cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xuICAgICYuYXVkaXRhYmxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2RhOWQ7XG4gICAgfVxuICAgICYud2F0Y2gtb25seSxcbiAgICAmLmF1ZGl0YWJsZS13YXRjaC1vbmx5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NvdW50QWN0aXZlQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfVxufVxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3LnNpZGViYXItYWNjb3VudCB7XG4gIGNvbG9yOiAkYWNjb3VudE1haW5UZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRhY2NvdW50QWN0aXZlQmFja2dyb3VuZENvbG9yO1xuICBib3gtc2hhZG93OiAkYWNjb3VudERyYWdCb3hTaGFkb3c7XG4gICYuYWNjb3VudC1wcmljZSB7XG4gICAgLnByaWNlIHtcbiAgICAgIGNvbG9yOiAkdG9vbHRpcFRleHRDb2xvcjtcbiAgICB9XG4gICAgLnByaWNlLXBlcmNlbnQge1xuICAgICAgY29sb3I6ICNCRUJFQkU7XG4gICAgfVxuICB9XG59XG5cbi5zaWRlYmFyLWFjY291bnQge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDE4cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxLjNyZW0gMXJlbTtcbiAgLmNsb3NlLXdhbGxldC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEuMnJlbTtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMS42cmVtO1xuICAgICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Utd2FsbGV0LnN2Z1wiKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICAuc2lkZWJhci1hY2NvdW50LXJvdzpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gIC5zaWRlYmFyLWFjY291bnQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAmLmFjY291bnQtYWxpYXMge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgLm5hbWUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmFjY291bnQtdGl0bGUtYmFsYW5jZSB7XG4gICAgICAuYmFsYW5jZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5hY2NvdW50LXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAucHJpY2UtcGVyY2VudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY2NvdW50LXN0YWtpbmcge1xuICAgICAgLnRleHQge1xuICAgICAgICBsaW5lLWhlaWdodDogMS45cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjY291bnQtc3luY2hyb25pemF0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgIGhlaWdodDogMC40cmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAuZmlsbCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucHJvZ3Jlc3MtcGVyY2VudCB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG4uc2lkZWJhci1hY2NvdW50cyB7XG4gIG1hcmdpbjogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIC5zaWRlYmFyLWFjY291bnRzLWxpc3Qge1xuICAgIHBhZGRpbmc6IDAgMC45cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG4uc2lkZWJhci1zZXR0aW5ncyB7XG4gIG1hcmdpbjogNHJlbTtcbiAgZmxleDogMCAwIGF1dG87XG4gIC53cmFwLWJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGJ1dHRvbiB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2U7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlO1xuICAgICAgfVxuICAgICAgLmFkZC13YWxsZXQtZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxLjJyZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDEuMnJlbTtcbiAgICAgIH1cbiAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbm90LWFsbG93ZWQuc3ZnKSBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgICAgICAmLmFkZC13YWxsZXQge1xuICAgICAgICAgIHdpZHRoOiAxLjRyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxLjRyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9hZGRuZXcuc3ZnKTtcbiAgICAgICAgfVxuICAgICAgICAmLmNvbnRhY3RzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvbnRhY3RzLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZXR0aW5ncyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZXR0aW5ncy1nZWFyLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5sb2dvdXQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9sb2dvdXQucG5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmxvZ297XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc3luY2hyb25pemF0aW9uLXN0YXR1cyB7XG4gIG1hcmdpbjogMnJlbSAzcmVtIDJyZW0gM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4OiAwIDAgN3JlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIC5zdGF0dXMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAub2ZmbGluZSxcbiAgICAub25saW5lIHtcbiAgICAgIGJvdHRvbTogLTNyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIuMnJlbTtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnByb2dyZXNzLWJhci1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAwLjhyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5zeW5jaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIC5maWxsIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy1wZXJjZW50IHtcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtb3ZlIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcbiAgICAgICAgICAgIGxpbmVhcixcbiAgICAgICAgICAgIDAgMCxcbiAgICAgICAgICAgIDEwMCUgMTAwJSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC4xMjUsIHJnYmEoMCwgMCwgMCwgMC4xNSkpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjEyNSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuMjUsIHJnYmEoMCwgMCwgMCwgMC4xKSksXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuMzc1LCByZ2JhKDAsIDAsIDAsIDAuMSkpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC41LCByZ2JhKDAsIDAsIDAsIDAuMTUpKSxcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC42MjUsIHJnYmEoMCwgMCwgMCwgMC4xNSkpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjYyNSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjc1LCB0cmFuc3BhcmVudCksXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuODc1LCByZ2JhKDAsIDAsIDAsIDAuMSkpLFxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjg3NSwgdHJhbnNwYXJlbnQpLFxuICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoMC4xMjUsIHJnYmEoMCwgMCwgMCwgMC4zKSksIGNvbG9yLXN0b3AoMC4xMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgwLCAwLCAwLCAwLjI1KSksIGNvbG9yLXN0b3AoMC4zNzUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuMzc1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuNjI1LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuNjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuODc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjg3NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDdyZW0gN3JlbTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAudXBkYXRlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAudXBkYXRlLXRleHQge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgJi50aW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgbWFyZ2luOiAwLjNyZW0gMCAwIDAuNnJlbTtcbiAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICYudXBkYXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy91cGRhdGUuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYudGltZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdGltZS5zdmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2V0dGluZ3MtYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJ1dHRvbiB7XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbm90LWFsbG93ZWQuc3ZnKSwgbm90LWFsbG93ZWQ7XG4gICAgfVxuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc2V0dGluZ3MtZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gICAgdG9wOiAzcmVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgICBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmctbGVmdDogMS4xcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9ub3QtYWxsb3dlZC5zdmcpLCBub3QtYWxsb3dlZDtcblxuICAgICAgICAuaWNvbiBzdmcgcGF0aCxcbiAgICAgICAgLmljb24gc3ZnIC5zdDAge1xuICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmRhcmstbGluZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGMwYzNhO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBzdmcge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAmLnJlc3luYy13YWxsZXQge1xuICAgICAgICAgIGhlaWdodDogMS43cmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjdyZW07XG4gICAgICAgIH1cbiAgICAgICAgJi5jbG9zZS13YWxsZXQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Utd2FsbGV0LWRyb3Bkb3duLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5hbGlhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAuaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xuICAgIHdpZHRoOiAyLjRyZW07XG4gICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgJi5lZGl0IHtcbiAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZGV0YWlscy5zdmcpO1xuICAgIH1cbiAgICAmLnRyYW5zZmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc2VuZC5zdmcpO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtN3JlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDdyZW07XG4gIH1cbn1cbi5zaWRlYmFyLWFjY291bnQge1xuICAvKiBTZXQgcGVyc3BlY3RpdmUgZm9yIHRoZSAzRCBlZmZlY3QgKi9cbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLyogRGVmaW5lIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIGZvciB0aGUgZmxpcCBlZmZlY3QgKi9cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG59XG5cbi5zaWRlYmFyLWFjY291bnQtYmFjayB7XG4gIC8qIEluaXRpYWxseSBoaWRlIHRoZSBiYWNrIHZpZXcgKi9cbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5zaWRlYmFyLWFjY291bnQuYWN0aXZlIHtcbiAgLyogQXBwbHkgdGhlIGZsaXAgZWZmZWN0IHdoZW4gdGhlIGFjdGl2ZSBjbGFzcyBpcyBwcmVzZW50ICovXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmxvY2tfd2FsbGV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gLmljb25fbG9ja3tcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2xvY2tfd2FsbGV0LnN2Zyk7XG4gfVxufSIsIiRib2R5QmFja2dyb3VuZENvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzAwMCAxMCUsIzM2MTU3ZSA1MCUsIzAwMCA5MCUpO1xuJHNpZGViYXJCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoMzEsIDE0MywgMjM1LCAwKTtcbiRzaWRlYmFyQm9yZGVyQ29sb3I6IHJnYmEoMzEsIDE0MywgMjM1LCAwKTtcblxuJG9ubGluZUNvbG9yOiAjMWJhMTAwO1xuJG9mZmxpbmVDb2xvcjogI2ZmMDAwMDtcbiRjb250ZW50QmFja2dyb3VuZENvbG9yOiByZ2JhKDE0LCA0OCwgMzksIDAuOCk7XG5cbiRtYWluVGV4dENvbG9yOiAjRkZGOUFEO1xuJGFsdGVybmF0aXZlVGV4dENvbG9yOiByZ2JhKDI1MywgMjU0LCAyNTUsIDEpO1xuJG9wdGlvbmFsVGV4dENvbG9yOiAjMmIwYzNhO1xuJGJsdWVUZXh0Q29sb3I6ICNGRkY5QUQ7XG4kZ3JlZW5UZXh0Q29sb3I6ICMxMGEwMWM7XG4kb3JhbmdlVGV4dENvbG9yOiAjZmY2ZjAwO1xuJHJlZFRleHRDb2xvcjogI2ZmMDAwMDtcbiRhZGRyZXNzVGV4dENvbG9yOiAjRkZGOUFEO1xuJHBsYWNlaG9sZGVyVGV4dENvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiRibHVlQnV0dG9uQmFja2dyb3VuZENvbG9yOiAjMjA2RjVBO1xuJGJsdWVCdXR0b25Cb3hTaGFkb3c6IDBweCAxMHB4IDQwcHggcmdiYSg5NiwgMywgMTU4LCAwKTtcbiRibHVlQnV0dG9uSG92ZXJDb2xvcjogIzE2NkU0NjtcbiRibHVlQnV0dG9uSG92ZXJCb3hTaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSg5NiwgMywgMTU4LCAwKTtcbiRibHVlQnV0dG9uRm9jdXNDb2xvcjogIzE2NkU0NjtcbiRibHVlQnV0dG9uRm9jdXNCb3hTaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg5NiwgMywgMTU4LCAwKTtcbiRibHVlQnV0dG9uZGlzYWJsZWRDb2xvcjogIzE2NkU0NiwgMC41O1xuXG4kcmVzZXRCdXR0b25CYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50O1xuJHJlc2V0QnV0dG9uQ29sb3I6ICNGRkY5QUQ7XG4kcmVzZXRCdXR0b25Ib3ZlckNvbG9yOiAjMTY2RTQ2O1xuJHJlc2V0QnV0dG9uRm9jdXNDb2xvcjogIzIwNkY1QTtcbiRyZXNldEJ1dHRvbkRpc2FibGVkQ29sb3I6IHJnYmEoMjUzLCAyNTQsIDI1NSwgMC43KTtcblxuJHBhZ2luYXRpb25CdXR0b25Db2xvcjogcmdiYSgyNTMsIDI1NCwgMjU1LCAwLjcpO1xuJHBhZ2luYXRpb25CdXR0b25Ib3ZlckNvbG9yOiByZ2JhKDI1MywgMjU0LCAyNTUsIDAuNCk7XG5cbiRpbnB1dEJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQ7XG4kc2VsZWN0RHJvcGRvd25CYWNrZ3JvdW5kQ29sb3I6ICMyMDZGNUE7XG5cbiRzZWxlY3RIb3ZlckNvbG9yOiByZ2JhKDcyLCA1OCwgODUsIDAuNSk7XG4kc2VsZWN0U2VsZWN0ZWRDb2xvcjogcmdiYSg1NywgNDMsIDY4LCAwLjUpO1xuXG4kc3dpdGNoT25CYWNrZ3JvdW5kQ29sb3I6ICMxNzhiMDA7XG4kc3dpdGNoT2ZmQmFja2dyb3VuZENvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4kc3dpdGNoQ2lyY2VsZUJveFNoYWRvdzogMHB4IDIuMTE3NjVweCA1LjY0NzA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDIuMTE3NjVweCAwLjcwNTg4MnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cbiRhY2NvdW50Qm94U2hhZG93OiAwcHggMHB4IDE1cHggM3B4IHJnYmEoMTYwLCA3LCAyNTUsIDApO1xuJGFjY291bnREcmFnQm94U2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYWNjb3VudEJhY2tncm91bmRDb2xvcjogcmdiYSgxMjUsIDMwLCAyMzMsIDAuMyk7XG4kYWNjb3VudFdhdGNoT25seUJvcmRlckNvbG9yOiAjOWE2OWY3O1xuJGFjY291bnRBdWRpdGFibGVCb3JkZXJDb2xvcjogI2ZmZmZmZjtcbiRhY2NvdW50QmFja2dyb3VuZENvbG9yOiAjMDAxOTEzO1xuJGFjY291bnRBY3RpdmVCYWNrZ3JvdW5kQ29sb3I6ICAjMjA2RjVBO1xuJGFjY291bnRIb3ZlckJhY2tncm91bmRDb2xvcjogIzE2NkU0NjtcbiRhY2NvdW50TWFpblRleHRDb2xvcjogI2ZmZmZmZjtcblxuJHNlZWRQaHJhc2VGb3JtQmFja2dyb3VuZENvbG9yOiByZ2JhKDEzNiwgMzEsIDIzNSwgMC4xNSk7XG4kc2VjdXJlZFNlZWQ6ICNlMGUwZTA7XG4kc2VlZEl0ZW1UZXh0OiAjZTBlMGUwO1xuJGNvcHlCYWNrZ3JvdW5kOiByZ2JhKDExOCwgMzAsIDIzMywgMC42KTtcbiRjb3B5QmFja2dyb3VuZEhvdmVyOiByZ2JhKDExOCwgMzAsIDIzMywgMC45KTtcbiRzZWVkSXRlbUJhY2tncm91bmRDb2xvcjogIzI5MTgyYTtcbiRhY2NvdW50T3B0aW9uYWxUZXh0Q29sb3I6ICM2NzU1NzY7XG4kYWNjb3VudEluZGljYXRvclRleHRDb2xvcjogIzI4MGMzYTtcbiRhY2NvdW50SW5kaWNhdG9yQmFja2dyb3VuZENvbG9yOiAjZmZmZmZmO1xuXG4kdGFiSW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoMTQzLCAzMSwgMjM1LCAwKTtcbiR0YWJIb3ZlckJhY2tncm91bmRDb2xvcjogcmdiYSgxNDMsIDMxLCAyMzUsIDApO1xuJHRhYmxlQmFja2dyb3VuZENvbG9yOiByZ2JhKDE0MywgMzEsIDIzNSwgMCk7XG4kbWVzc2FnZU15QmFja2dyb3VuZENvbG9yOiAjMzUyYTQ0O1xuJG1lc3NhZ2VCdWRkeUJhY2tncm91bmRDb2xvcjogIzI0MTgyYTtcbiRwcm9ncmVzc0JhckJhY2tncm91bmRDb2xvcjogcmdiYSgxNDMsIDMxLCAyMzUsIDApO1xuJHByb2dyZXNzQmFyQWNjb3VudENvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4kcHJvZ3Jlc3NCYXJBY2NvdW50QWN0aXZlQ29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiRwcm9ncmVzc0JhckZ1bGxCYWNrZ3JvdW5kQ29sb3I6ICNGRkY5QUQ7XG4kY2hhcnRPcHRpb25zQmFja2dyb3VuZENvbG9yOiAjMzcyYjQ0O1xuJGNoYXJ0T3B0aW9uc0hvdmVyQ29sb3I6ICM2MjU1NzY7XG4kdG9vbHRpcEJhY2tncm91bmRDb2xvcjogIzIwNkY1QTtcbiR0b29sdGlwVGV4dENvbG9yOiAjRkZGOUFEO1xuJHRvb2x0aXBJbXBvcnRhbnRUZXh0Q29sb3I6ICNmZjZmMDA7XG4kdG9vbHRpcEltcG9ydGFudEJhY2tncm91bmRDb2xvcjogIzVmMmIxMTtcbiR0b29sdGlwQ3JpdGljYWxUZXh0Q29sb3I6ICNmZjUyNTI7XG4kdG9vbHRpcENyaXRpY2FsQmFja2dyb3VuZENvbG9yOiAjNWYxZDFkO1xuJHRvb2x0aXBTaGFkb3c6IDAgMCAxcmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiRtb2RhbEJhY2tncm91bmQ6ICMyMDZGNUE7XG4kY2xvc2VCdXR0b25Db2xvcjogIzZkNTU3NjtcbiRob3ZlclBhZ2U6IHJnYmEoNzIsIDU4LCA5MCwgMC4yNDcpO1xuXG4kYWxpYXNEcm9wZG93bkJhY2tncm91bmQ6ICMxNjZFNDY7XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route, router, variablesService, backend, modal, ngZone, store) {
        this.route = route;
        this.router = router;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modal = modal;
        this.ngZone = ngZone;
        this.store = store;
        this.isModalDialogVisible = false;
        this.settingsButtonDisabled = true;
        this.copyAnimation = false;
        this.walletLoaded = false;
        this.delWalletDialogVisible = false;
        this.exportHistoryDialogVisible = false;
        this.walletSynchVisible = false;
        this.is_opened = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsButtonInterval = setInterval(function () {
            if (_this.variablesService.daemon_state == 2 || _this.walletLoaded) {
                _this.settingsButtonDisabled = false;
                clearInterval(_this.settingsButtonInterval);
            }
        }, 1000);
        this.walletsSubscription = this.store
            .select('sync')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (value) {
            var data = value.filter(function (item) { return item.wallet_id === _this.variablesService.currentWallet.wallet_id; })[0];
            if (data && !data.sync) {
                var in_progress = void 0;
                var values = _this.store.value.sync;
                if (values && values.length) {
                    in_progress = values.filter(function (item) { return item.sync; });
                    _this.variablesService.sync_started = !!(in_progress && in_progress.length);
                    if (!in_progress) {
                        _this.variablesService.sync_started = false;
                    }
                }
                else {
                    _this.variablesService.sync_started = false;
                }
            }
        });
        this.copyAnimation = false;
        if (this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
            this.variablesService.currentWallet.wakeAlias = false;
        }
        this.aliasSubscription = this.variablesService.getAliasChangedEvent.subscribe(function () {
            if (_this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
                _this.variablesService.currentWallet.wakeAlias = false;
            }
        });
    };
    SidebarComponent.prototype.goMainPage = function () {
        var _this = this;
        if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.prevUrl === 'login') {
            this.ngZone.run(function () {
                _this.router.navigate(['/'], { queryParams: { prevUrl: 'login' } });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.router.navigate(['/']);
            });
        }
    };
    ;
    SidebarComponent.prototype.selectWallet = function (id) {
        var _this = this;
        this.ngZone.run(function () {
            _this.variablesService.setCurrentWallet(id);
            _this.router.navigate(['/wallet/history']);
        });
        this.selectedWalletId = id;
    };
    SidebarComponent.prototype.isOpened = function (walletId) {
        return this.selectedWalletId === walletId;
    };
    SidebarComponent.prototype.contactsRoute = function () {
        var _this = this;
        if (this.variablesService.appPass) {
            this.ngZone.run(function () { _this.router.navigate(['/contacts']); });
        }
        else {
            this.modal.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
    };
    SidebarComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.variablesService.wallets, event.previousIndex, event.currentIndex);
    };
    SidebarComponent.prototype.showDialog = function (wallet_id) {
        this.isModalDialogVisible = true;
        this.closeWalletId = wallet_id;
    };
    SidebarComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.closeWallet(this.closeWalletId);
        }
        this.isModalDialogVisible = false;
    };
    SidebarComponent.prototype.togleMenuDropdown = function () {
        if (!this.openDropdown) {
            this.openDropdown = true;
        }
        else {
            this.openDropdown = false;
            this.walletSynchVisible = false;
        }
    };
    SidebarComponent.prototype.closeWallet = function (wallet_id) {
        var _this = this;
        this.backend.closeWallet(wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    SidebarComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["DOWNLOADS_PAGE_URL"]);
    };
    SidebarComponent.prototype.goToAuditableWalletHelpPage = function (e) {
        e.preventDefault();
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["AUDITABLE_WALLET_HELP_PAGE"]);
    };
    SidebarComponent.prototype.logOut = function () {
        var _this = this;
        this.variablesService.stopCountdown();
        this.variablesService.appLogin = false;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copyAnimationTimeout);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/staking/staking.component.html":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-header\">\n  <div class=\"general\">\n    <div *ngIf=\"(!variablesService.currentWallet.is_auditable && !variablesService.currentWallet.is_watch_only)\n                || (variablesService.currentWallet.is_auditable && !variablesService.currentWallet.is_watch_only)\">\n      <span class=\"label\">{{ 'STAKING.TITLE' | translate }}</span>\n      <span class=\"value\">\n          <app-staking-switch [wallet_id]=\"variablesService.currentWallet.wallet_id\" [(staking)]=\"variablesService.currentWallet.staking\"></app-staking-switch>\n      </span>\n    </div>\n    <div>\n      <span class=\"label\">{{ 'STAKING.TITLE_PENDING' | translate }}</span>\n      <span class=\"value\">{{pending.total | intToMoney}} {{variablesService.defaultCurrency}}</span>\n    </div>\n    <div>\n      <span class=\"label\">{{ 'STAKING.TITLE_TOTAL' | translate }}</span>\n      <span class=\"value\">{{total | intToMoney}} {{variablesService.defaultCurrency}}</span>\n    </div>\n  </div>\n  <div class=\"selected\" *ngIf=\"selectedDate && selectedDate.date\">\n    <span>{{selectedDate.date | date : 'EEEE, MMMM d, y'}}</span>\n    <span>{{selectedDate.amount}} {{variablesService.defaultCurrency}}</span>\n  </div>\n</div>\n\n<div class=\"chart\">\n  <div [chart]=\"chart\"></div>\n</div>\n\n<div class=\"chart-options\">\n  <div class=\"title\">\n    {{ 'STAKING.TITLE_PERIOD' | translate }}\n  </div>\n  <div class=\"options\">\n    <ng-container *ngFor=\"let period of periods\">\n      <button type=\"button\" [class.active]=\"period.active\" (click)=\"changePeriod(period)\">{{period.title}}</button>\n    </ng-container>\n  </div>\n\n  <div class=\"title\">\n    {{ 'STAKING.TITLE_GROUP' | translate }}\n  </div>\n  <div class=\"options\">\n    <ng-container *ngFor=\"let group of groups\">\n      <button type=\"button\" [class.active]=\"group.active\" (click)=\"changeGroup(group)\">{{group.title}}</button>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/staking/staking.component.scss":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.chart-header {\n  display: flex;\n  flex: 0 0 auto; }\n\n.chart-header .general {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 1.6rem;\n    margin: -0.5rem 0; }\n\n.chart-header .general > div {\n      display: flex;\n      align-items: center;\n      margin: 0.5rem 0;\n      height: 2rem; }\n\n.chart-header .general > div .label {\n        display: inline-block;\n        width: 9rem; }\n\n.chart-header .selected {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 2rem; }\n\n.chart-header .selected span {\n      line-height: 2.9rem; }\n\n.chart {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  min-height: 40rem; }\n\n.chart > div {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n.chart-options {\n  display: flex;\n  align-items: center;\n  height: 2.4rem;\n  flex: 0 0 auto; }\n\n.chart-options .title {\n    font-size: 1.6rem;\n    padding: 0 1rem; }\n\n.chart-options .title:first-child {\n      padding-left: 0; }\n\n.chart-options .options {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1; }\n\n.chart-options .options button {\n      border-radius: 1rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1 1 auto;\n      cursor: pointer;\n      font-size: 1.4rem;\n      margin: 0 0.5rem;\n      padding: 0;\n      height: 4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rha2luZy9GOlxcR2l0SHViXFxOaXJtYXRhR1VJXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc3Rha2luZ1xcc3Rha2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFGaEI7SUFLSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFYckI7TUFjTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7O0FBakJsQjtRQW9CUSxxQkFBcUI7UUFDckIsV0FBVyxFQUFBOztBQXJCbkI7SUEyQkksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBaENuQjtNQW1DTSxtQkFBbUIsRUFBQTs7QUFLekI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBTG5CO0lBUUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUpoQjtJQU9JLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBUm5CO01BV00sZUFBZSxFQUFBOztBQVhyQjtJQWdCSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVksRUFBQTs7QUFsQmhCO01BcUJNLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YWtpbmcvc3Rha2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGFydC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgYXV0bztcblxuICAuZ2VuZXJhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBtYXJnaW46IC0wLjVyZW0gMDtcblxuICAgID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgIGhlaWdodDogMnJlbTtcblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VsZWN0ZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcblxuICAgIHNwYW4ge1xuICAgICAgbGluZS1oZWlnaHQ6IDIuOXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmNoYXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogNDByZW07XG5cbiAgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmNoYXJ0LW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIuNHJlbTtcbiAgZmxleDogMCAwIGF1dG87XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICAub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1ncm93OiAxO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIG1hcmdpbjogMCAwLjVyZW07XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/staking/staking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/staking/staking.component.ts ***!
  \**********************************************/
/*! exports provided: StakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingComponent", function() { return StakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StakingComponent = /** @class */ (function () {
    function StakingComponent(route, variablesService, backend, ngZone, intToMoneyPipe, translate) {
        this.route = route;
        this.variablesService = variablesService;
        this.backend = backend;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.translate = translate;
        this.periods = [
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK1'),
                key: '1 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK2'),
                key: '2 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH1'),
                key: '1 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH3'),
                key: '3 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH6'),
                key: '6 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.YEAR'),
                key: '1 year',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.ALL'),
                key: 'All',
                active: true
            }
        ];
        this.groups = [
            {
                title: this.translate.instant('STAKING.GROUP.DAY'),
                key: 'day',
                active: true
            },
            {
                title: this.translate.instant('STAKING.GROUP.WEEK'),
                key: 'week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.GROUP.MONTH'),
                key: 'month',
                active: false
            }
        ];
        this.selectedDate = {
            date: null,
            amount: null
        };
        this.originalData = [];
        this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
        this.pending = {
            list: [],
            total: new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0)
        };
    }
    StakingComponent_1 = StakingComponent;
    StakingComponent.makeGroupTime = function (key, date) {
        if (key === 'day') {
            return date.setHours(0, 0, 0, 0);
        }
        else if (key === 'week') {
            return new Date(date.setDate(date.getDate() - date.getDay())).setHours(0, 0, 0, 0);
        }
        else {
            return new Date(date.setDate(1)).setHours(0, 0, 0, 0);
        }
    };
    StakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.getMiningHistory();
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (!_this.pending.total.isZero()) {
                var pendingCount = _this.pending.list.length;
                for (var i = pendingCount - 1; i >= 0; i--) {
                    if (newHeight - _this.pending.list[i].h >= 10) {
                        _this.pending.list.splice(i, 1);
                    }
                }
                if (pendingCount !== _this.pending.list.length) {
                    _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                    for (var i = 0; i < _this.pending.list.length; i++) {
                        _this.pending.total = _this.pending.total.plus(_this.pending.list[i].a);
                    }
                }
            }
        });
        this.refreshStackingEvent = this.variablesService.getRefreshStackingEvent.subscribe(function (wallet_id) {
            if (_this.variablesService.currentWallet.wallet_id === wallet_id) {
                _this.getMiningHistory();
            }
        });
    };
    StakingComponent.prototype.drawChart = function (data) {
        var _this = this;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            title: { text: '' },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: { enabled: false },
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                height: null,
                zoomType: null,
                events: {
                    load: function () {
                        _this.changePeriod();
                    }
                }
            },
            yAxis: {
                min: 0,
                tickAmount: 5,
                title: {
                    text: ''
                },
                gridLineColor: '#FFF9AEC1',
                gridLineWidth: 2,
                lineColor: '#FFF9AEC1',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 120,
                tickColor: '#FFF9AEC1',
                labels: {
                    y: -8,
                    align: 'left',
                    x: -120,
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    },
                    format: '{value} ' + this.variablesService.defaultCurrency
                },
                showLastLabel: false,
            },
            xAxis: {
                type: 'datetime',
                gridLineColor: '#FFF9AEC1',
                lineColor: '#FFF9AEC1',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 10,
                tickColor: '#FFF9AEC1',
                labels: {
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    }
                },
                minPadding: 0,
                maxPadding: 0,
                minRange: 86400000,
                minTickInterval: 3600000,
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(255,249,173,0.2)'],
                            [1, 'rgba(255,249,173,0)']
                        ]
                    },
                    marker: {
                        enabled: false,
                        radius: 2
                    },
                    lineWidth: 2,
                    threshold: null
                },
                series: {
                    point: {
                        events: {
                            mouseOver: function (obj) {
                                _this.selectedDate.date = obj.target['x'];
                                _this.selectedDate.amount = obj.target['y'];
                            }
                        }
                    },
                    events: {
                        mouseOut: function () {
                            _this.selectedDate.date = null;
                            _this.selectedDate.amount = null;
                        }
                    }
                }
            },
            series: [
                {
                    type: 'column',
                    data: data
                }
            ]
        });
    };
    StakingComponent.prototype.getMiningHistory = function () {
        var _this = this;
        if (this.variablesService.currentWallet.loaded) {
            this.backend.getMiningHistory(this.variablesService.currentWallet.wallet_id, function (status, data) {
                _this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.pending.list = [];
                _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.originalData = [];
                if (data.mined_entries) {
                    data.mined_entries.forEach(function (item, key) {
                        if (item.t.toString().length === 10) {
                            data.mined_entries[key].t = (new Date(item.t * 1000)).setUTCMilliseconds(0);
                        }
                    });
                    data.mined_entries.forEach(function (item) {
                        _this.total = _this.total.plus(item.a);
                        if (_this.variablesService.height_app - item.h < 10) {
                            _this.pending.list.push(item);
                            _this.pending.total = _this.pending.total.plus(item.a);
                        }
                        _this.originalData.push([parseInt(item.t, 10), parseFloat(_this.intToMoneyPipe.transform(item.a))]);
                    });
                    _this.originalData = _this.originalData.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                }
                _this.ngZone.run(function () {
                    _this.drawChart([]);
                });
            });
        }
    };
    StakingComponent.prototype.changePeriod = function (period) {
        if (period) {
            this.periods.forEach(function (p) {
                p.active = false;
            });
            period.active = true;
        }
        else {
            period = this.periods.find(function (p) { return p.active; });
        }
        var d = new Date();
        var min = null;
        var newData = [];
        var group = this.groups.find(function (g) { return g.active; });
        if (period.key === '1 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 7, 0, 0, 0, 0);
        }
        else if (period.key === '2 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 14, 0, 0, 0, 0);
        }
        else if (period.key === '1 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 1, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '3 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 3, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '6 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 6, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '1 year') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear() - 1, d.getMonth(), d.getDate(), 0, 0, 0, 0);
        }
        else {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
        }
        this.chart.ref.xAxis[0].setExtremes(min, null);
    };
    StakingComponent.prototype.changeGroup = function (group) {
        this.groups.forEach(function (g) {
            g.active = false;
        });
        group.active = true;
        this.changePeriod();
    };
    StakingComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
        this.refreshStackingEvent.unsubscribe();
    };
    var StakingComponent_1;
    StakingComponent = StakingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking',
            template: __webpack_require__(/*! ./staking.component.html */ "./src/app/staking/staking.component.html"),
            styles: [__webpack_require__(/*! ./staking.component.scss */ "./src/app/staking/staking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], StakingComponent);
    return StakingComponent;
}());



/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span [routerLink]=\"['/wallet/history']\">{{ wallet.name }}</span>\n      <span>{{ 'BREADCRUMBS.TRANSFER_ALIAS' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-transfer\">\n\n    <div class=\"input-block alias-name\">\n      <label for=\"alias-name\">\n        {{ 'TRANSFER_ALIAS.NAME.LABEL' | translate }}\n      </label>\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\"\n        placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\n    </div>\n\n    <div class=\"input-block textarea\">\n      <label for=\"alias-comment\">\n        {{ 'TRANSFER_ALIAS.COMMENT.LABEL' | translate }}\n      </label>\n      <textarea id=\"alias-comment\" [value]=\"alias.comment\"\n        placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"></textarea>\n    </div>\n\n    <div class=\"input-block alias-transfer-address\">\n      <label for=\"alias-transfer\">\n        {{ 'TRANSFER_ALIAS.ADDRESS.LABEL' | translate }}\n      </label>\n      <input type=\"text\" id=\"alias-transfer\" [(ngModel)]=\"transferAddress\" [ngModelOptions]=\"{standalone: true}\"\n        (ngModelChange)=\"changeAddress()\" placeholder=\"{{ 'TRANSFER_ALIAS.ADDRESS.PLACEHOLDER' | translate }}\"\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\n      <div class=\"error-block\"\n        *ngIf=\"transferAddress.length > 0 && (transferAddressAlias || !transferAddressValid || (transferAddressValid && !permissionSend) || notEnoughMoney)\">\n        <div *ngIf=\"!transferAddressValid\">\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.WRONG_ADDRESS' | translate }}\n        </div>\n        <div *ngIf=\"transferAddressAlias || (transferAddressValid && !permissionSend)\">\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.ALIAS_EXISTS' | translate }}\n        </div>\n        <div *ngIf=\"notEnoughMoney\">\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"alias-cost\">{{ \"TRANSFER_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency:\n      variablesService.defaultCurrency} }}</div>\n\n    <div class=\"wrap-buttons\">\n      <button type=\"button\" class=\"blue-button\" (click)=\"transferAlias()\"\n        [disabled]=\"transferAddressAlias || !transferAddressValid || notEnoughMoney\">{{ 'TRANSFER_ALIAS.BUTTON_TRANSFER'\n        | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-transfer {\n  margin: 2.4rem 0; }\n  .form-transfer .alias-name {\n    width: 50%; }\n  .form-transfer .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-transfer .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-transfer .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXItYWxpYXMvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHRyYW5zZmVyLWFsaWFzXFx0cmFuc2Zlci1hbGlhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBSUksVUFBVSxFQUFBO0VBSmQ7SUFRSSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFUcEI7SUFhSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQixFQUFBO0VBZjFCO01Ba0JNLGdCQUFnQjtNQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmFuc2Zlci1hbGlhcy90cmFuc2Zlci1hbGlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRyYW5zZmVyIHtcbiAgbWFyZ2luOiAyLjRyZW0gMDtcblxuICAuYWxpYXMtbmFtZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5hbGlhcy1jb3N0IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG5cbiAgLndyYXAtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAyLjVyZW0gLTAuN3JlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMC43cmVtO1xuICAgICAgd2lkdGg6IDE1cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.ts ***!
  \************************************************************/
/*! exports provided: TransferAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferAliasComponent", function() { return TransferAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransferAliasComponent = /** @class */ (function () {
    function TransferAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.transferAddress = '';
        this.requestProcessing = false;
    }
    TransferAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment,
            tracking_key: alias.tracking_key
        };
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    TransferAliasComponent.prototype.changeAddress = function () {
        var _this = this;
        this.backend.validateAddress(this.transferAddress, function (status) {
            _this.transferAddressValid = status;
            if (status) {
                _this.backend.getPoolInfo(function (statusPool, dataPool) {
                    if (dataPool.hasOwnProperty('aliases_que') && dataPool.aliases_que.length) {
                        _this.setStatus(!dataPool.aliases_que.some(function (el) { return el.address === _this.transferAddress; }));
                    }
                    else {
                        _this.setStatus(status);
                    }
                });
            }
            else {
                _this.setStatus(false);
            }
        });
    };
    TransferAliasComponent.prototype.setStatus = function (statusSet) {
        var _this = this;
        this.permissionSend = statusSet;
        if (statusSet) {
            this.backend.getAliasByAddress(this.transferAddress, function (status) {
                _this.ngZone.run(function () {
                    if (status) {
                        _this.transferAddressAlias = true;
                        _this.permissionSend = false;
                    }
                    else {
                        _this.transferAddressAlias = false;
                    }
                });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.transferAddressAlias = false;
            });
        }
    };
    TransferAliasComponent.prototype.transferAlias = function () {
        var _this = this;
        if (this.requestProcessing || !this.permissionSend || !this.transferAddressValid || this.notEnoughMoney) {
            return;
        }
        this.requestProcessing = true;
        var newAlias = {
            name: this.alias.name,
            address: this.transferAddress,
            comment: this.alias.comment,
            tracking_key: this.alias.tracking_key
        };
        this.backend.updateAlias(this.wallet.wallet_id, newAlias, this.variablesService.default_fee, function (status, data) {
            if (status && data.hasOwnProperty('success') && data.success) {
                _this.modalService.prepareModal('info', 'TRANSFER_ALIAS.REQUEST_SEND_REG');
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/']);
                });
            }
            _this.requestProcessing = false;
        });
    };
    TransferAliasComponent.prototype.back = function () {
        this.location.back();
    };
    TransferAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-alias',
            template: __webpack_require__(/*! ./transfer-alias.component.html */ "./src/app/transfer-alias/transfer-alias.component.html"),
            styles: [__webpack_require__(/*! ./transfer-alias.component.scss */ "./src/app/transfer-alias/transfer-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TransferAliasComponent);
    return TransferAliasComponent;
}());



/***/ }),

/***/ "./src/app/typing-message/typing-message.component.html":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <div class=\"interlocutor\">\n    @bitmain\n  </div>\n  <a class=\"back-btn\" [routerLink]=\"['/main']\">\n    <i class=\"icon back\"></i>\n    <span>{{ 'COMMON.BACK' | translate }}</span>\n  </a>\n</div>\n\n<div class=\"messages-content\">\n  <div class=\"messages-list scrolled-content\">\n    <div class=\"date\">10:39</div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"buddy\">\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"buddy\">\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </div>\n    <div class=\"date\">11:44</div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"buddy\">\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"date\">12:15</div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"buddy\">\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"date\">13:13</div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n    <div class=\"buddy\">\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </div>\n    <div class=\"my\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </div>\n  </div>\n  <div class=\"type-message\">\n    <div class=\"input-block textarea\">\n      <textarea placeholder=\"{{ 'MESSAGES.SEND_PLACEHOLDER' | translate }}\"></textarea>\n    </div>\n    <button type=\"button\" class=\"blue-button\">{{ 'MESSAGES.SEND_BUTTON' | translate }}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  margin: -3rem -3rem 0; }\n\n.messages-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1; }\n\n.messages-content .messages-list {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    margin: 1rem -3rem;\n    padding: 0 3rem;\n    overflow-y: overlay; }\n\n.messages-content .messages-list div {\n      margin: 0.7rem 0; }\n\n.messages-content .messages-list div.date {\n        text-align: center; }\n\n.messages-content .messages-list div.my, .messages-content .messages-list div.buddy {\n        position: relative;\n        padding: 1.8rem;\n        max-width: 60%; }\n\n.messages-content .messages-list div.buddy {\n        align-self: flex-end; }\n\n.messages-content .type-message {\n    display: flex;\n    flex: 0 0 auto;\n    width: 100%;\n    height: 4.2rem; }\n\n.messages-content .type-message .input-block {\n      width: 100%; }\n\n.messages-content .type-message .input-block > textarea {\n        min-height: 4.2rem; }\n\n.messages-content .type-message button {\n      flex: 0 0 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nLW1lc3NhZ2UvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHR5cGluZy1tZXNzYWdlXFx0eXBpbmctbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixZQUFZLEVBQUE7O0FBSmQ7SUFPSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQixFQUFBOztBQVp2QjtNQWVNLGdCQUFnQixFQUFBOztBQWZ0QjtRQWtCUSxrQkFBa0IsRUFBQTs7QUFsQjFCO1FBc0JRLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsY0FBYyxFQUFBOztBQXhCdEI7UUE0QlEsb0JBQW9CLEVBQUE7O0FBNUI1QjtJQWtDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUE7O0FBckNsQjtNQXdDTSxXQUFXLEVBQUE7O0FBeENqQjtRQTJDUSxrQkFBa0IsRUFBQTs7QUEzQzFCO01BZ0RNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3R5cGluZy1tZXNzYWdlL3R5cGluZy1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWQge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG1hcmdpbjogLTNyZW0gLTNyZW0gMDtcbn1cblxuLm1lc3NhZ2VzLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZ3JvdzogMTtcblxuICAubWVzc2FnZXMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbjogMXJlbSAtM3JlbTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcblxuICAgIGRpdiB7XG4gICAgICBtYXJnaW46IDAuN3JlbSAwO1xuXG4gICAgICAmLmRhdGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICYubXksICYuYnVkZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDEuOHJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICB9XG5cbiAgICAgICYuYnVkZHkge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudHlwZS1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNC4ycmVtO1xuXG4gICAgLmlucHV0LWJsb2NrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICA+IHRleHRhcmVhIHtcbiAgICAgICAgbWluLWhlaWdodDogNC4ycmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBmbGV4OiAwIDAgMTVyZW07XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.ts":
/*!************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.ts ***!
  \************************************************************/
/*! exports provided: TypingMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingMessageComponent", function() { return TypingMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypingMessageComponent = /** @class */ (function () {
    function TypingMessageComponent(route) {
        this.route = route;
    }
    TypingMessageComponent.prototype.ngOnInit = function () {
    };
    TypingMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typing-message',
            template: __webpack_require__(/*! ./typing-message.component.html */ "./src/app/typing-message/typing-message.component.html"),
            styles: [__webpack_require__(/*! ./typing-message.component.scss */ "./src/app/typing-message/typing-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TypingMessageComponent);
    return TypingMessageComponent;
}());



/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"head\">\n    <div class=\"breadcrumbs\">\n      <span (click)=\"back()\">{{variablesService.currentWallet.name}}</span>\n      <span>{{ 'BREADCRUMBS.WALLET_DETAILS' | translate }}</span>\n    </div>\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\n      <i class=\"icon back\"></i>\n      <span>{{ 'COMMON.BACK' | translate }}</span>\n    </button>\n  </div>\n\n  <form class=\"form-details\" [formGroup]=\"detailsForm\" (ngSubmit)=\"onSubmitEdit()\">\n    <div class=\"input-block\">\n      <label for=\"wallet-name\">{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\n      <div class=\"input-container\">\n        <input type=\"text\" id=\"wallet-name\"\n          [class.required-error]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched\"\n          [placeholder]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched ? ('WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate ) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate) \"\n          formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\"\n          (contextmenu)=\"variablesService.onContextMenu($event)\">\n        <div class=\"submit-button-container\">\n          <button type=\"submit\" class=\"blue-button\"\n            [disabled]=\"detailsForm.invalid && !detailsForm.controls['name'].dirty\">{{\n            'SETTINGS.MASTER_PASSWORD.BUTTON'\n            |\n            translate }}</button>\n          <span class=\"saved-message\" [class.active]=\"ifSaved\">Saved!</span>\n        </div>\n      </div>\n      <div class=\"error-block\"\n        *ngIf=\"detailsForm.controls['name'].invalid &&!detailsForm.controls['name'].errors['required'] && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\n        <!-- <div *ngIf=\"detailsForm.controls['name'].errors['required']\">\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate }}\n        </div> -->\n        <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\n        </div>\n        <div *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\n          {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\n        </div>\n      </div>\n    </div>\n    <div class=\"input-block\">\n      <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\n      <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\n    </div>\n  </form>\n\n  <ng-container *ngIf=\"!showSeed else seedPhraseContent\">\n    <form class=\"form-seed\" [formGroup]=\"seedPhraseForm\" (ngSubmit)=\"onSubmitSeed()\">\n\n      <div class=\"form-content\">\n        <label class=\"form-seed-heading\">{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\n        <div class=\"seed-phrase-form\">\n          <div class=\"input-block\">\n            <label for=\"create-password\">{{ 'WALLET_DETAILS.CREATE_PASSWORD_SECURE' | translate }} <a\n                class=\"text-coral\">{{ 'WALLET_DETAILS.INFO' | translate }}<i class=\"icon info\"></i></a></label>\n            <input type=\"password\" placeholder=\"{{ 'PLACEHOLDERS.PASSWORD_PLACEHOLDER' | translate }}\"\n              id=\"create-password\" formControlName=\"password\">\n          </div>\n          <div class=\"input-block\">\n            <label for=\"confirm-password\">{{ 'WALLET_DETAILS.FORM.CONFIRM_PASSWORD' | translate }}</label>\n            <input type=\"password\" placeholder=\"{{'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate}}\"\n              id=\"confirm-password\" formControlName=\"confirmPassword\">\n            <div class=\"error-block\"\n              *ngIf=\"seedPhraseForm.invalid && (seedPhraseForm.controls['confirmPassword'].dirty || seedPhraseForm.controls['confirmPassword'].touched)\">\n              <div *ngIf=\"seedPhraseForm.invalid && seedPhraseForm.get('confirmPassword').value.length > 0\">\n                {{ 'WALLET_DETAILS.FORM_ERRORS.PASSWORDS_DONT_MATCH' | translate }}\n              </div>\n            </div>\n          </div>\n\n\n          <button type=\"submit\" class=\"blue-button\" [disabled]=\"!seedPhraseForm.valid\"><i class=\"icon safety\"></i>\n            {{ 'WALLET_DETAILS.FORM.GENERATE_SECURE_SEED' | translate }}</button>\n\n          <a class=\"secured-seed\"><i class=\"icon info\"></i>{{ 'WALLET_DETAILS.FORM.SECURED_SEED_WILL_REQUIRE' |\n            translate }}</a>\n        </div>\n      </div>\n    </form>\n  </ng-container>\n\n  <ng-template #seedPhraseContent>\n    <div class=\"seed-phrase mt-2\">\n      <div class=\"seed-phrase-title\">\n        <span>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</span>\n        <p class=\"right-part\">\n          <span *ngIf=\"seedPhraseForm.controls.password.value.length == 0\">{{ 'WALLET_DETAILS.SEED_IS_UNSECURED' |\n            translate }} <i class=\"icon unsecured\"></i></span>\n          <span *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">{{ 'WALLET_DETAILS.SEED_IS_SECURED' |\n            translate }} <i class=\"icon secured\"></i></span>\n        </p>\n      </div>\n      <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\n        <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\n          <div class=\"item\"\n            [class.dark]=\"(index + 1) >= 1 && (index + 1) <= 7 || (index + 1) >= 15 && (index + 1) <= 21\">\n            {{(index + 1) + '. ' + word}}</div>\n        </ng-container>\n      </div>\n      <div class=\"wrap-buttons\">\n        <button type=\"button\" class=\"blue-button_reset copy-button\" (click)=\"copySeedPhrase()\">\n          <ng-container *ngIf=\"!seedPhraseCopied\">\n            {{ 'SEED_PHRASE.BUTTON_COPY' | translate }}\n          </ng-container>\n          <ng-container *ngIf=\"seedPhraseCopied\">\n            {{ 'SEED_PHRASE.BUTTON_COPIED' | translate }}\n          </ng-container>\n        </button>\n      </div>\n      <div class=\"seed-phrase-footer-text\" *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">\n        <i class=\"icon info\"></i>\n        <span class=\"title\">{{ 'WALLET_DETAILS.REMEMBER_YOU_WILL_REQUIRE' | translate }}</span>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-details {\n  margin-top: 3.5rem; }\n  .form-details .submit-button-container {\n    display: flex;\n    align-items: center; }\n  .form-details .submit-button-container .saved-message {\n      transition: all 0.5s ease;\n      height: 0;\n      opacity: 0;\n      margin-left: 2rem;\n      font-size: 2rem;\n      line-height: 2.4rem;\n      color: #16d1d6; }\n  .form-details .submit-button-container .saved-message.active {\n        transition: all 0.5s ease;\n        height: 2.4rem;\n        opacity: 1; }\n  .form-details .submit-button-container button {\n      min-width: 10rem;\n      height: 3.5rem; }\n  .form-details .input-block .input-container {\n    display: flex; }\n  .form-details .input-block:first-child {\n    width: 50%; }\n  .wrap-buttons {\n  display: flex;\n  margin-bottom: 2rem; }\n  .wrap-buttons .copy-button {\n    width: 20rem; }\n  .mt-2 {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LWRldGFpbHMvRjpcXEdpdEh1YlxcTmlybWF0YUdVSVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHdhbGxldC1kZXRhaWxzXFx3YWxsZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUksYUFBYTtJQUNiLG1CQUFtQixFQUFBO0VBTHZCO01BT00seUJBQXlCO01BQ3pCLFNBQVM7TUFDVCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsY0FBYyxFQUFBO0VBYnBCO1FBZVEseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxVQUFVLEVBQUE7RUFqQmxCO01BcUJNLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7RUF0QnBCO0lBNEJNLGFBQWEsRUFBQTtFQTVCbkI7SUErQk0sVUFBVSxFQUFBO0VBS2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBRnJCO0lBS0ksWUFBWSxFQUFBO0VBSWhCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQtZGV0YWlscy93YWxsZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWRldGFpbHMge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG5cbiAgLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnNhdmVkLW1lc3NhZ2Uge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgICBjb2xvcjogIzE2ZDFkNjtcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4td2lkdGg6IDEwcmVtO1xuICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWJsb2NrIHtcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cbn1cblxuLndyYXAtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgLmNvcHktYnV0dG9uIHtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cbn1cblxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.ts ***!
  \************************************************************/
/*! exports provided: WalletDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailsComponent", function() { return WalletDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletDetailsComponent = /** @class */ (function () {
    function WalletDetailsComponent(router, backend, variablesService, ngZone, location) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.location = location;
        this.seedPhrase = '';
        this.showSeed = false;
        this.copyAnimation = false;
        this.seedPhraseCopied = false;
        this.ifSaved = false;
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id ===
                                _this.variablesService.currentWallet.wallet_id) {
                                return { same: true };
                            }
                            else {
                                return { duplicate: true };
                            }
                        }
                    }
                    return null;
                },
            ]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.seedPhraseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
        }, { validators: this.checkPasswords });
    }
    WalletDetailsComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    WalletDetailsComponent.prototype.ngOnInit = function () {
        this.showSeed = false;
        this.detailsForm
            .get('name')
            .setValue(this.variablesService.currentWallet.name);
        this.detailsForm
            .get('path')
            .setValue(this.variablesService.currentWallet.path);
    };
    WalletDetailsComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
    };
    WalletDetailsComponent.prototype.onSubmitSeed = function () {
        var _this = this;
        if (this.seedPhraseForm.valid) {
            this.showSeedPhrase();
            var wallet_id = this.variablesService.currentWallet.wallet_id;
            var seed_password = this.seedPhraseForm.controls.password.value;
            this.backend.getSmartWalletInfo({ wallet_id: wallet_id, seed_password: seed_password }, function (status, data) {
                if (data.hasOwnProperty('seed_phrase')) {
                    _this.ngZone.run(function () {
                        _this.seedPhrase = data['seed_phrase'].trim();
                    });
                }
            });
        }
    };
    WalletDetailsComponent.prototype.onSave = function () {
        var _this = this;
        this.ifSaved = true;
        setTimeout(function () {
            _this.ifSaved = false;
        }, 3000);
    };
    WalletDetailsComponent.prototype.onSubmitEdit = function () {
        if (this.detailsForm.value) {
            this.onSave();
            this.variablesService.currentWallet.name = this.detailsForm.get('name').value;
            this.detailsForm.reset({ name: this.variablesService.currentWallet.name, path: this.variablesService.currentWallet.path });
        }
    };
    WalletDetailsComponent.prototype.closeWallet = function () {
        var _this = this;
        this.backend.closeWallet(this.variablesService.currentWallet.wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id ===
                    _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletDetailsComponent.prototype.copySeedPhrase = function () {
        var _this = this;
        this.backend.setClipboard(this.seedPhrase, function () {
            _this.ngZone.run(function () {
                setTimeout(function () {
                    _this.seedPhraseCopied = false;
                }, 4000);
                _this.seedPhraseCopied = true;
            });
        });
    };
    WalletDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    WalletDetailsComponent.prototype.ngOnDestroy = function () {
    };
    WalletDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-details',
            template: __webpack_require__(/*! ./wallet-details.component.html */ "./src/app/wallet-details/wallet-details.component.html"),
            styles: [__webpack_require__(/*! ./wallet-details.component.scss */ "./src/app/wallet-details/wallet-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], WalletDetailsComponent);
    return WalletDetailsComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div>\n    <h3 tooltip=\"{{ variablesService.currentWallet.name }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\"\n      [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{variablesService.currentWallet.name}}</h3>\n    <div *ngIf=\"!variablesService.currentWallet.is_auditable\">\n      <button [routerLink]=\"['/assign-alias']\"\n        *ngIf=\"!variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2 && variablesService.currentWallet.alias_available\">\n        <i class=\"icon account\"></i>\n        <span>{{ 'WALLET.REGISTER_ALIAS' | translate }}</span>\n      </button>\n      <div class=\"alias\"\n        *ngIf=\"variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2\">\n        <span>{{variablesService.currentWallet.alias['name']}}</span>\n        <ng-container *ngIf=\"variablesService.currentWallet.alias_available\">\n          <i class=\"icon edit\" [routerLink]=\"['/edit-alias']\" tooltip=\"{{ 'WALLET.TOOLTIPS.EDIT_ALIAS' | translate }}\"\n            placement=\"bottom-right\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"></i>\n          <i class=\"icon transfer\" [routerLink]=\"['/transfer-alias']\"\n            tooltip=\"{{ 'WALLET.TOOLTIPS.TRANSFER_ALIAS' | translate }}\" placement=\"right\"\n            tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"></i>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"settings-block\">\n    <button [disabled]=\"settingsButtonDisabled && !variablesService.currentWallet.loaded\" (click)=\"togleMenuDropdown()\">\n      <i class=\"icon details\" data-target=\"wallet-dropdown-button\">\n        <svg data-target=\"wallet-dropdown-button\" width=\"100%\" height=\"100%\" viewBox=\"0 0 20 21\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path data-target=\"wallet-dropdown-button\"\n            d=\"M0.96875 1.22266C0.96875 1.64258 1.31055 1.96484 1.7207 1.96484L18.4395 1.96484C18.8496 1.96484 19.1816 1.64258 19.1816 1.22266C19.1816 0.8125 18.8496 0.490234 18.4395 0.490234L1.7207 0.490234C1.31055 0.490234 0.96875 0.8125 0.96875 1.22266ZM0.96875 6.0957C0.96875 6.51562 1.31055 6.83789 1.7207 6.83789L18.4395 6.83789C18.8496 6.83789 19.1816 6.51562 19.1816 6.0957C19.1816 5.68555 18.8496 5.36328 18.4395 5.36328L1.7207 5.36328C1.31055 5.36328 0.96875 5.68555 0.96875 6.0957ZM0.96875 10.9687C0.96875 11.3887 1.31055 11.7109 1.7207 11.7109L18.4395 11.7109C18.8496 11.7109 19.1816 11.3887 19.1816 10.9688C19.1816 10.5586 18.8496 10.2363 18.4395 10.2363L1.7207 10.2363C1.31055 10.2363 0.96875 10.5586 0.96875 10.9687ZM7.08203 16.8965L9.24023 20.1289C9.63086 20.7051 10.4609 20.6855 10.8516 20.1289L13.0488 16.8965C13.5566 16.1445 13.2734 15.3535 12.375 15.3633L7.74609 15.3633C6.87695 15.3535 6.61328 16.1836 7.08203 16.8965Z\"\n            fill=\"#FFF9AD\" />\n        </svg>\n      </i>\n    </button>\n    <div *ngIf=\"openDropdown\" class=\"settings-dropdown\">\n      <button class=\"dark-line\" [routerLink]=\"['/details']\" routerLinkActive=\"active\"\n        tooltip=\"{{ 'WALLET.TOOLTIPS.SETTINGS' | translate }}\" placement=\"left\"\n        tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"\n        [disabled]=\"!variablesService.currentWallet.loaded\">\n        <i class=\"icon wallet-settings\">\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 17 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M11.6641 4.47656C12.4766 4.47656 13.1641 3.95312 13.4297 3.23438H16.1328C16.4531 3.23438 16.7344 2.95312 16.7344 2.60156C16.7344 2.25 16.4531 1.97656 16.1328 1.97656H13.4297C13.1719 1.25 12.4766 0.71875 11.6641 0.71875C10.8516 0.71875 10.1484 1.25 9.89062 1.97656H1.61719C1.26562 1.97656 0.992188 2.25 0.992188 2.60156C0.992188 2.95312 1.26562 3.23438 1.61719 3.23438H9.89844C10.1562 3.95312 10.8516 4.47656 11.6641 4.47656ZM11.6641 3.51562C11.1484 3.51562 10.75 3.10938 10.75 2.59375C10.75 2.07812 11.1484 1.67969 11.6641 1.67969C12.1797 1.67969 12.5781 2.07812 12.5781 2.59375C12.5781 3.10938 12.1797 3.51562 11.6641 3.51562ZM1.58594 6.74219C1.26562 6.74219 0.992188 7.02344 0.992188 7.375C0.992188 7.72656 1.26562 8 1.58594 8H4.38281C4.64062 8.73438 5.33594 9.25781 6.14844 9.25781C6.96094 9.25781 7.65625 8.73438 7.92188 8H16.1016C16.4531 8 16.7344 7.72656 16.7344 7.375C16.7344 7.02344 16.4531 6.74219 16.1016 6.74219H7.91406C7.65625 6.02344 6.96094 5.5 6.14844 5.5C5.33594 5.5 4.64062 6.02344 4.38281 6.74219H1.58594ZM6.14844 8.28906C5.64062 8.28906 5.23438 7.88281 5.23438 7.375C5.23438 6.85938 5.64062 6.46094 6.14844 6.46094C6.66406 6.46094 7.0625 6.85938 7.0625 7.375C7.0625 7.88281 6.66406 8.28906 6.14844 8.28906ZM11.6641 14.0234C12.4766 14.0234 13.1719 13.5 13.4297 12.7734H16.1328C16.4531 12.7734 16.7344 12.5 16.7344 12.1484C16.7344 11.7969 16.4531 11.5156 16.1328 11.5156H13.4297C13.1719 10.7891 12.4766 10.2734 11.6641 10.2734C10.8516 10.2734 10.1562 10.7891 9.89844 11.5156H1.61719C1.26562 11.5156 0.992188 11.7969 0.992188 12.1484C0.992188 12.5 1.26562 12.7734 1.61719 12.7734H9.89062C10.1562 13.5 10.8516 14.0234 11.6641 14.0234ZM11.6641 13.0625C11.1484 13.0625 10.75 12.6562 10.75 12.1484C10.75 11.625 11.1484 11.2344 11.6641 11.2344C12.1797 11.2344 12.5781 11.625 12.5781 12.1484C12.5781 12.6562 12.1797 13.0625 11.6641 13.0625Z\"\n              fill=\"white\" />\n          </svg>\n        </i><span>{{ 'WALLET_DETAILS.WALLET_OPTIONS' | translate }}</span>\n      </button>\n      <button class=\"dark-line\" tooltip=\"{{ 'EXPORT_HISTORY.TOOLTIP' | translate }}\" placement=\"left\"\n        tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"\n        (click)=\"exportHistoryDialogVisible = !exportHistoryDialogVisible\"\n        [disabled]=\"variablesService.currentWallet.history.length <= 0\">\n        <i class=\"icon export-history\"><svg viewBox=\"0 0 18 18\" width=\"100%\" height=\"100%\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M8.95264 17.4736C13.5845 17.4736 17.4194 13.6304 17.4194 9.00684C17.4194 4.375 13.5762 0.540039 8.94434 0.540039C4.3208 0.540039 0.48584 4.375 0.48584 9.00684C0.48584 13.6304 4.3291 17.4736 8.95264 17.4736ZM8.95264 16.0625C5.03467 16.0625 1.90527 12.9248 1.90527 9.00684C1.90527 5.08887 5.02637 1.95117 8.94434 1.95117C12.8623 1.95117 16 5.08887 16.0083 9.00684C16.0166 12.9248 12.8706 16.0625 8.95264 16.0625ZM8.94434 9.77881C9.17676 9.77881 9.35938 9.60449 9.35938 9.38037V5.18018L9.34277 4.79004L9.70801 5.18018L10.0815 5.57031C10.1479 5.64502 10.2476 5.68652 10.3721 5.68652C10.5962 5.68652 10.7539 5.53711 10.7539 5.32129C10.7539 5.22168 10.7207 5.12207 10.6294 5.04736L9.24316 3.70264C9.14355 3.60303 9.04395 3.56152 8.94434 3.56152C8.84473 3.56152 8.74512 3.61133 8.65381 3.70264L7.25928 5.03906C7.16797 5.13037 7.14307 5.22168 7.14307 5.32129C7.14307 5.53711 7.30078 5.68652 7.5166 5.68652C7.63281 5.68652 7.74072 5.64502 7.80713 5.57031L8.18066 5.18018L8.5542 4.79004L8.5376 5.18018V9.38037C8.5376 9.60449 8.72021 9.77881 8.94434 9.77881ZM6.60352 13.041H11.3018C12.2065 13.041 12.6797 12.5762 12.6797 11.6797V7.5874C12.6797 6.69092 12.2065 6.23438 11.3018 6.23438H10.0732V7.07275H11.2935C11.6587 7.07275 11.8413 7.25537 11.8413 7.62891V11.6548C11.8413 12.02 11.6587 12.2109 11.2935 12.2109H6.61182C6.24658 12.2109 6.06396 12.0283 6.06396 11.6548V7.62891C6.06396 7.25537 6.24658 7.07275 6.61182 7.07275H7.84033V6.23438H6.60352C5.70703 6.23438 5.23389 6.69922 5.22559 7.5874V11.6797C5.23389 12.5679 5.70703 13.041 6.60352 13.041Z\"\n              fill=\"white\" />\n          </svg></i><span>{{ 'EXPORT_HISTORY.EXPORT_BUTTON' | translate }}</span>\n      </button>\n      <ng-container *ngIf=\"walletSynchVisible\">\n        <button class=\"dark-line\" tooltip=\"{{ 'WALLET_DETAILS.RESYNC_WALLET' | translate }}\" placement=\"left\"\n          tooltipClass=\"table-tooltip account-tooltip\" [disabled]=\"!variablesService.currentWallet.loaded\" [delay]=\"500\"\n          [timeDelay]=\"500\" (click)=\"resyncCurrentWallet(variablesService.currentWallet.wallet_id)\">\n          <i class=\"icon resync-wallet\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"\n              style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n              <style type=\"text/css\">\n                .st0 {\n                  fill: #FFFFFF;\n                }\n              </style>\n              <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\n          \tL14,9L24,11z\" />\n              <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\n          \tc-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\" />\n            </svg></i><span>{{ 'WALLET_DETAILS.RESYNC_WALLET_BUTTON' | translate }}</span>\n        </button>\n      </ng-container>\n      <button type=\"button\" (click)=\"showConfirmDialog(variablesService.currentWallet.wallet_id)\"\n        tooltip=\"{{ 'WALLET.TOOLTIPS.CLOSE' | translate }}\" placement=\"top-left\"\n        tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\n        <i class=\"icon close-wallet\"></i><span>{{ 'WALLET_DETAILS.BUTTON_REMOVE' | translate }}</span>\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"address\" [ngClass]=\"{ 'blur': !isHovered }\" (mouseenter)=\"toggleHover(false)\" (mouseleave)=\"toggleHover(true)\">\n  <span>{{ 'WALLET.WADDRESS' | translate }}{{ variablesService.currentWallet.address }}</span>\n  <i class=\"icon\" [ngClass]=\"{ 'copy': !copyAnimation, 'copied': copyAnimation }\" (click)=\"copyAddress()\"></i>\n</div>\n\n<div class=\"balance\">\n  <span [tooltip]=\"getTooltip()\" [placement]=\"'bottom'\" [tooltipClass]=\"'balance-tooltip'\" [delay]=\"150\" [timeout]=\"0\"\n    (onHide)=\"onHideTooltip()\">{{ 'WALLET.BALANCE' | translate }}{{variablesService.currentWallet.balance | intToMoney : '3'}}\n    {{variablesService.defaultCurrency}}</span>\n    <span></span>\n  </div>\n<div class=\"tabs\">\n  <div class=\"tabs-header\">\n    <ng-container *ngFor=\"let tab of tabs; let index = index\">\n      <button class=\"tab\" [routerLink]=\"['/wallet' + tab.link]\" routerLinkActive=\"active\"\n        [ngClass]=\"{ 'hide': ((tab.link === '/send' || tab.link === '/contracts') && variablesService.currentWallet.is_watch_only && variablesService.currentWallet.is_auditable) }\"\n        [disabled]=\"tab.disabled\">\n        <i class=\"icon\" [ngClass]=\"tab.icon\"></i>\n        <span>{{ tab.title | translate }}</span>\n        <span class=\"indicator\" *ngIf=\"tab.indicator\">{{variablesService.currentWallet.new_contracts}}</span>\n      </button>\n    </ng-container>\n  </div>\n  <div #scrolledContent class=\"tabs-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-confirm-modal *ngIf=\"delWalletDialogVisible\" [title]=\" 'WALLET.CONFIRM.TITLE' | translate \"\n  [message]=\" 'WALLET.CONFIRM.MESSAGE' | translate \" (confirmed)=\"confirmed($event)\"></app-confirm-modal>\n<app-export-history-modal [currentWalletId]=\"variablesService.currentWallet.wallet_id\"\n  *ngIf=\"exportHistoryDialogVisible\" (closeExportModal)=\"closeExportModal($event)\">\n</app-export-history-modal>\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.scss":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 2.8rem 3rem;\n  min-width: 95rem;\n  width: 100%; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  margin-bottom: 2.8rem; }\n\n.header > div {\n    display: flex;\n    align-items: center; }\n\n.header > div :not(:last-child) {\n      margin-right: 3.2rem; }\n\n.header .settings-block {\n    position: relative; }\n\n.header .settings-block button {\n      margin: 0; }\n\n.header .settings-block button:disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.header .settings-block .settings-dropdown {\n      position: absolute;\n      border-radius: 0.6rem;\n      top: 3rem;\n      right: 0;\n      width: 19rem; }\n\n.header .settings-block .settings-dropdown button {\n        height: 4rem;\n        display: flex;\n        padding-left: 1.1rem;\n        align-items: center;\n        width: 100%; }\n\n.header .settings-block .settings-dropdown button:disabled {\n          cursor: url('not-allowed.svg'), not-allowed; }\n\n.header .settings-block .settings-dropdown button:disabled .icon svg path,\n          .header .settings-block .settings-dropdown button:disabled .icon svg .st0 {\n            fill: rgba(255, 255, 255, 0.4); }\n\n.header .settings-block .settings-dropdown button:disabled span {\n            color: rgba(255, 255, 255, 0.4); }\n\n.header .settings-block .settings-dropdown button.dark-line {\n          border-bottom: 1px solid #0c0c3a; }\n\n.header .settings-block .settings-dropdown button span {\n          font-size: 1.4rem;\n          line-height: 1.7rem; }\n\n.header .settings-block .settings-dropdown button .icon {\n          height: 1.8rem;\n          width: 1.8rem;\n          margin-right: 1rem; }\n\n.header .settings-block .settings-dropdown button .icon svg {\n            height: 100%;\n            width: 100%; }\n\n.header .settings-block .settings-dropdown button .icon.resync-wallet {\n            height: 1.7rem;\n            width: 1.7rem; }\n\n.header .settings-block .settings-dropdown button .icon.close-wallet {\n            background: center/contain no-repeat url('close-wallet-dropdown.svg'); }\n\n.header h3 {\n    font-size: 2rem;\n    line-height: 2.4rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 30rem; }\n\n.header button {\n    font-size: 2rem;\n    line-height: 2.4rem;\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    font-weight: 400;\n    outline: none;\n    padding: 0; }\n\n.header button .icon {\n      margin-right: 0.8rem;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n.header button .icon.account {\n        height: 1.6rem;\n        background: center/contain no-repeat url('account.svg'); }\n\n.header button .icon.lock {\n        background: center/contain no-repeat url('lock.svg'); }\n\n.header button .icon.details {\n        margin-right: 0; }\n\n.header button .icon.close-wallet {\n        background: center/contain no-repeat url('close-wallet.svg');\n        margin-right: 0; }\n\n.header .alias {\n    display: flex;\n    align-items: center;\n    font-size: 1.3rem; }\n\n.header .alias .icon {\n      cursor: pointer;\n      margin-right: 1.2rem;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n.header .alias .icon.edit {\n        background: center/contain no-repeat url('details.svg'); }\n\n.header .alias .icon.transfer {\n        background: center/contain no-repeat url('send.svg'); }\n\n.address {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  font-size: 1.6rem;\n  line-height: 1.9rem;\n  filter: blur(6px);\n  transition: filter 0.3s ease; }\n\n.address .icon {\n    cursor: pointer;\n    margin-left: 1rem; }\n\n.address .icon.copy {\n      transition: all 0.25s ease;\n      width: 2.4rem;\n      height: 2.4rem;\n      background: center/contain no-repeat url('copy.svg'); }\n\n.address .icon.copied {\n      background: center/contain no-repeat url('complete-testwallet.svg'); }\n\n.blur {\n  filter: none; }\n\n.balance {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  flex: 0 0 auto;\n  margin: 1.6rem 0 2.5rem 0; }\n\n.balance :first-child {\n    font-size: 4rem;\n    font-weight: 500;\n    line-height: 3.8rem;\n    margin-right: 1rem; }\n\n.balance :last-child {\n    font-size: 2rem;\n    font-weight: 400;\n    line-height: 2.4rem; }\n\n.tabs {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto; }\n\n.tabs .tabs-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    height: 100%; }\n\n.tabs .tabs-header .tab {\n      border-radius: 5px;\n      border: 1px solid;\n      margin: 1rem;\n      width: 20rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 2rem;\n      line-height: 2.4rem;\n      flex: 1 0 auto;\n      cursor: pointer;\n      padding: 0 1rem;\n      height: 5rem; }\n\n.tabs .tabs-header .tab.hide {\n        display: none; }\n\n.tabs .tabs-header .tab:hover .icon {\n        transition: all 0.25s ease;\n        margin-top: -1rem; }\n\n.tabs .tabs-header .tab .icon {\n        transition: all 0.25s ease;\n        margin-right: 0.5rem;\n        width: 2rem;\n        height: 2.4rem; }\n\n.tabs .tabs-header .tab .icon.send {\n          background: center/contain no-repeat url('send.svg'); }\n\n.tabs .tabs-header .tab .icon.receive {\n          background: center/contain no-repeat url('receive-blue.svg'); }\n\n.tabs .tabs-header .tab .icon.history {\n          background: center/contain no-repeat url('history.svg'); }\n\n.tabs .tabs-header .tab .icon.contracts {\n          background: center/contain no-repeat url('contracts.svg'); }\n\n.tabs .tabs-header .tab .icon.messages {\n          background: center/contain no-repeat url('message.svg'); }\n\n.tabs .tabs-header .tab .icon.staking {\n          background: center/contain no-repeat url('staking.svg'); }\n\n.tabs .tabs-header .tab .icon.price {\n          background: center/contain no-repeat url('price.svg');\n          width: 3rem;\n          height: 3rem; }\n\n.tabs .tabs-header .tab .icon.ptp {\n          background: center/contain no-repeat url('ptp.svg');\n          width: 3rem;\n          height: 3rem; }\n\n.tabs .tabs-header .tab .indicator {\n        margin-left: 0.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 2rem;\n        font-size: 1.2rem;\n        line-height: 1.4rem;\n        min-width: 2.4rem;\n        height: 1.6rem; }\n\n.tabs .tabs-header .tab:disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.tabs .tabs-header .tab:not(:last-child) {\n        margin-right: 0.3rem; }\n\n.tabs .tabs-content {\n    display: flex;\n    padding: 1.5rem;\n    flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L0Y6XFxHaXRIdWJcXE5pcm1hdGFHVUlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFx3YWxsZXRcXHdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUViO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUx2QjtJQU9JLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFSdkI7TUFXTSxvQkFBb0IsRUFBQTs7QUFYMUI7SUFlSSxrQkFBa0IsRUFBQTs7QUFmdEI7TUFvQk0sU0FBUyxFQUFBOztBQXBCZjtRQWtCUSwyQ0FBNEQsRUFBQTs7QUFsQnBFO01BdUJNLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsU0FBUztNQUNULFFBQVE7TUFDUixZQUFZLEVBQUE7O0FBM0JsQjtRQTZCUSxZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsV0FBVyxFQUFBOztBQWpDbkI7VUFtQ1UsMkNBQTRELEVBQUE7O0FBbkN0RTs7WUF1Q1ksOEJBQThCLEVBQUE7O0FBdkMxQztZQTBDWSwrQkFBK0IsRUFBQTs7QUExQzNDO1VBOENVLGdDQUFnQyxFQUFBOztBQTlDMUM7VUFpRFUsaUJBQWlCO1VBQ2pCLG1CQUFtQixFQUFBOztBQWxEN0I7VUFxRFUsY0FBYztVQUNkLGFBQWE7VUFDYixrQkFBa0IsRUFBQTs7QUF2RDVCO1lBeURZLFlBQVk7WUFDWixXQUFXLEVBQUE7O0FBMUR2QjtZQTZEWSxjQUFjO1lBQ2QsYUFBYSxFQUFBOztBQTlEekI7WUFpRVkscUVBQXdGLEVBQUE7O0FBakVwRztJQXlFSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUEvRXBCO0lBa0ZJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVUsRUFBQTs7QUEzRmQ7TUE2Rk0sb0JBQW9CO01BQ3BCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBL0ZwQjtRQWlHUSxjQUFjO1FBQ2QsdURBQTBFLEVBQUE7O0FBbEdsRjtRQXFHUSxvREFBdUUsRUFBQTs7QUFyRy9FO1FBd0dRLGVBQWUsRUFBQTs7QUF4R3ZCO1FBMkdRLDREQUErRTtRQUMvRSxlQUFlLEVBQUE7O0FBNUd2QjtJQWlISSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBOztBQW5IckI7TUFxSE0sZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQXhIcEI7UUEwSFEsdURBQTBFLEVBQUE7O0FBMUhsRjtRQTZIUSxvREFBdUUsRUFBQTs7QUFLL0U7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEIsRUFBQTs7QUFQOUI7SUFTSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBVnJCO01BWU0sMEJBQTBCO01BQzFCLGFBQWE7TUFDYixjQUFjO01BQ2Qsb0RBQXVFLEVBQUE7O0FBZjdFO01Ba0JNLG1FQUFzRixFQUFBOztBQUk1RjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFMM0I7SUFPSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTs7QUFWdEI7SUFhSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUhoQjtJQUtJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBVGhCO01BV00sa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLGVBQWU7TUFDZixlQUFlO01BQ2YsWUFBWSxFQUFBOztBQXZCbEI7UUF5QlEsYUFBYSxFQUFBOztBQXpCckI7UUE2QlUsMEJBQTBCO1FBQzFCLGlCQUFpQixFQUFBOztBQTlCM0I7UUFrQ1EsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsY0FBYyxFQUFBOztBQXJDdEI7VUF1Q1Usb0RBQXVFLEVBQUE7O0FBdkNqRjtVQTBDVSw0REFBK0UsRUFBQTs7QUExQ3pGO1VBNkNVLHVEQUEwRSxFQUFBOztBQTdDcEY7VUFnRFUseURBQTRFLEVBQUE7O0FBaER0RjtVQW1EVSx1REFBMEUsRUFBQTs7QUFuRHBGO1VBc0RVLHVEQUEwRSxFQUFBOztBQXREcEY7VUF5RFUscURBQXdFO1VBQ3hFLFdBQVc7VUFDWCxZQUFZLEVBQUE7O0FBM0R0QjtVQThEVSxtREFBc0U7VUFDdEUsV0FBVztVQUNYLFlBQVksRUFBQTs7QUFoRXRCO1FBb0VRLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsY0FBYyxFQUFBOztBQTVFdEI7UUErRVEsMkNBQTRELEVBQUE7O0FBL0VwRTtRQWtGUSxvQkFBb0IsRUFBQTs7QUFsRjVCO0lBdUZJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyLjhyZW0gM3JlbTtcbiAgbWluLXdpZHRoOiA5NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMi44cmVtO1xuICA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzLjJyZW07XG4gICAgfVxuICB9XG4gIC5zZXR0aW5ncy1ibG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJ1dHRvbiB7XG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuc2V0dGluZ3MtZHJvcGRvd24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICAgICAgdG9wOiAzcmVtO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTlyZW07XG4gICAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4xcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xuXG4gICAgICAgICAgLmljb24gc3ZnIHBhdGgsXG4gICAgICAgICAgLmljb24gc3ZnIC5zdDAge1xuICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuZGFyay1saW5lIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBjMGMzYTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgICB3aWR0aDogMS44cmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICYucmVzeW5jLXdhbGxldCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgICYuY2xvc2Utd2FsbGV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Utd2FsbGV0LWRyb3Bkb3duLnN2Zyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBoMyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgfVxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICAgICAgd2lkdGg6IDIuNHJlbTtcbiAgICAgIGhlaWdodDogMi40cmVtO1xuICAgICAgJi5hY2NvdW50IHtcbiAgICAgICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvYWNjb3VudC5zdmcpO1xuICAgICAgfVxuICAgICAgJi5sb2NrIHtcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9sb2NrLnN2Zyk7XG4gICAgICB9XG4gICAgICAmLmRldGFpbHMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICAmLmNsb3NlLXdhbGxldCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Utd2FsbGV0LnN2Zyk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFsaWFzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgLmljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XG4gICAgICB3aWR0aDogMi40cmVtO1xuICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICAmLmVkaXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2RldGFpbHMuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYudHJhbnNmZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbmQuc3ZnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5hZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMCAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMS45cmVtO1xuICBmaWx0ZXI6IGJsdXIoNnB4KTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcbiAgLmljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAmLmNvcHkge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICB3aWR0aDogMi40cmVtO1xuICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKTtcbiAgICB9XG4gICAgJi5jb3BpZWQge1xuICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zyk7XG4gICAgfVxuICB9XG59XG4uYmx1ciB7XG4gIGZpbHRlcjogbm9uZTtcbn1cbi5iYWxhbmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDEuNnJlbSAwIDIuNXJlbSAwO1xuICA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIDpsYXN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICB9XG59XG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICAudGFicy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC50YWIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBtYXJnaW46IDFyZW07XG4gICAgICB3aWR0aDogMjByZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgJi5oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pY29uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgICYuc2VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZW5kLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5yZWNlaXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3JlY2VpdmUtYmx1ZS5zdmcpO1xuICAgICAgICB9XG4gICAgICAgICYuaGlzdG9yeSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9oaXN0b3J5LnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jb250cmFjdHMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY29udHJhY3RzLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXNzYWdlcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9tZXNzYWdlLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5zdGFraW5nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3N0YWtpbmcuc3ZnKTtcbiAgICAgICAgfVxuICAgICAgICAmLnByaWNlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3ByaWNlLnN2Zyk7XG4gICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgICYucHRwIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3B0cC5zdmcpO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmluZGljYXRvciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyLjRyZW07XG4gICAgICAgIGhlaWdodDogMS42cmVtO1xuICAgICAgfVxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9ub3QtYWxsb3dlZC5zdmcpLCBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAudGFicy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WalletComponent = /** @class */ (function () {
    function WalletComponent(route, router, backend, variablesService, ngZone, translate, intToMoneyPipe, store) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.intToMoneyPipe = intToMoneyPipe;
        this.store = store;
        this.settingsButtonDisabled = true;
        this.copyAnimation = false;
        this.walletLoaded = false;
        this.delWalletDialogVisible = false;
        this.exportHistoryDialogVisible = false;
        this.walletSynchVisible = false;
        this.isHovered = true;
        this.tabs = [
            {
                title: 'WALLET.TABS.HISTORY',
                icon: 'history',
                link: '/history',
                disabled: false
            },
            {
                title: 'WALLET.TABS.SEND',
                icon: 'send',
                link: '/send',
                disabled: true
            },
            {
                title: 'WALLET.TABS.RECEIVE',
                icon: 'receive',
                link: '/receive',
                disabled: false
            },
            {
                title: 'WALLET.TABS.CONTRACTS',
                icon: 'contracts',
                link: '/contracts',
                disabled: true
            },
            {
                title: 'WALLET.TABS.STAKING',
                icon: 'staking',
                link: '/staking',
                indicator: false,
                disabled: true
            },
            {
                title: 'WALLET.TABS.PRICE',
                icon: 'ptp',
                link: '/exchange',
                disabled: false
            }
        ];
        if (!this.variablesService.currentWallet && this.variablesService.wallets.length > 0) {
            this.variablesService.setCurrentWallet(0);
        }
        ;
        this.walletLoaded = this.variablesService.currentWallet.loaded ? true : false;
    }
    WalletComponent.prototype.onKeyPresed = function () {
        if (!this.openDropdown) {
            this.walletSynchVisible = true;
        }
    };
    WalletComponent.prototype.onKeyUpPresed = function () {
        if (!this.openDropdown) {
            this.walletSynchVisible = false;
        }
    };
    WalletComponent.prototype.onClick = function (targetElement) {
        if (targetElement.dataset.target !== 'wallet-dropdown-button' && this.openDropdown) {
            this.openDropdown = false;
            this.walletSynchVisible = false;
        }
    };
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsButtonInterval = setInterval(function () {
            if (_this.variablesService.daemon_state == 2 || _this.walletLoaded) {
                _this.settingsButtonDisabled = false;
                clearInterval(_this.settingsButtonInterval);
            }
        }, 1000);
        this.walletsSubscription = this.store
            .select('sync')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (value) {
            var data = value.filter(function (item) { return item.wallet_id === _this.variablesService.currentWallet.wallet_id; })[0];
            if (data && !data.sync) {
                var in_progress = void 0;
                var values = _this.store.value.sync;
                if (values && values.length) {
                    in_progress = values.filter(function (item) { return item.sync; });
                    _this.variablesService.sync_started = !!(in_progress && in_progress.length);
                    if (!in_progress) {
                        _this.variablesService.sync_started = false;
                    }
                }
                else {
                    _this.variablesService.sync_started = false;
                }
            }
        });
        this.copyAnimation = false;
        if (this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
            this.variablesService.currentWallet.wakeAlias = false;
        }
        this.aliasSubscription = this.variablesService.getAliasChangedEvent.subscribe(function () {
            if (_this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
                _this.variablesService.currentWallet.wakeAlias = false;
            }
        });
        this.updateWalletStatus();
        this.variablesService.getWalletChangedEvent.subscribe(function (v) {
            _this.setTabsDisabled(_this.variablesService.currentWallet.balance.eq(0));
        });
    };
    WalletComponent.prototype.toggleHover = function (isHovered) {
        this.isHovered = isHovered;
    };
    WalletComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    WalletComponent.prototype.getTooltip = function () {
        var _this = this;
        this.balanceTooltip = document.createElement('div');
        var available = document.createElement('span');
        available.setAttribute('class', 'available');
        available.innerHTML = this.translate.instant('WALLET.AVAILABLE_BALANCE', {
            available: this.intToMoneyPipe.transform(this.variablesService.currentWallet.unlocked_balance),
            currency: this.variablesService.defaultCurrency,
        });
        this.balanceTooltip.appendChild(available);
        var locked = document.createElement('span');
        locked.setAttribute('class', 'locked');
        locked.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE', {
            locked: this.intToMoneyPipe.transform(this.variablesService.currentWallet.balance.minus(this.variablesService.currentWallet.unlocked_balance)),
            currency: this.variablesService.defaultCurrency,
        });
        this.balanceTooltip.appendChild(locked);
        var link = document.createElement('span');
        link.setAttribute('class', 'link');
        link.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE_LINK');
        link.addEventListener('click', function () {
            _this.openInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["LOCKED_BALANCE_HELP_PAGE"]);
        });
        this.balanceTooltip.appendChild(link);
        return this.balanceTooltip;
    };
    WalletComponent.prototype.onHideTooltip = function () {
        this.balanceTooltip = null;
    };
    WalletComponent.prototype.openInBrowser = function (link) {
        this.backend.openUrlInBrowser(link);
    };
    WalletComponent.prototype.togleMenuDropdown = function () {
        if (!this.openDropdown) {
            this.openDropdown = true;
        }
        else {
            this.openDropdown = false;
            this.walletSynchVisible = false;
        }
    };
    WalletComponent.prototype.resyncCurrentWallet = function (id) {
        this.backend.resyncWallet(id);
    };
    WalletComponent.prototype.showConfirmDialog = function (wallet_id) {
        this.delWalletDialogVisible = true;
        this.closeWalletId = wallet_id;
    };
    WalletComponent.prototype.closeExportModal = function (confirmed) {
        if (confirmed) {
            this.exportHistoryDialogVisible = false;
        }
    };
    WalletComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.closeWallet(this.closeWalletId);
        }
        this.delWalletDialogVisible = false;
    };
    WalletComponent.prototype.closeWallet = function (wallet_id) {
        var _this = this;
        this.backend.closeWallet(wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletComponent.prototype.ngOnDestroy = function () {
        this.aliasSubscription.unsubscribe();
        if (this.walletsSubscription) {
            this.walletsSubscription.unsubscribe();
        }
        clearTimeout(this.copyAnimationTimeout);
    };
    WalletComponent.prototype.updateWalletStatus = function () {
        var _this = this;
        this.backend.eventSubscribe('wallet_sync_progress', function (data) {
            var wallet_id = data.wallet_id;
            if (wallet_id === _this.variablesService.currentWallet.wallet_id) {
                _this.ngZone.run(function () {
                    _this.walletLoaded = false;
                });
            }
        });
        this.backend.eventSubscribe('update_wallet_status', function (data) {
            var wallet_state = data.wallet_state;
            var wallet_id = data.wallet_id;
            _this.ngZone.run(function () {
                if (wallet_state === 2 && wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.walletLoaded =
                        (_this.variablesService.getWallet(_this.variablesService.currentWallet.wallet_id) !== null &&
                            _this.variablesService.getWallet(_this.variablesService.currentWallet.wallet_id).loaded)
                            ? true
                            : false;
                    if (_this.walletLoaded) {
                        _this.setTabsDisabled(_this.variablesService.currentWallet.balance.eq(0));
                    }
                }
                else {
                    _this.walletLoaded = false;
                }
            });
        });
    };
    WalletComponent.prototype.setTabsDisabled = function (disabled) {
        this.tabs[1].disabled = disabled;
        this.tabs[3].disabled = disabled;
        this.tabs[4].disabled = disabled;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown.shift', ['$event.key']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WalletComponent.prototype, "onKeyPresed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup.shift', ['$event.key']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WalletComponent.prototype, "onKeyUpPresed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletComponent.prototype, "onClick", null);
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/assets/icons/icons.json":
/*!*************************************!*\
  !*** ./src/assets/icons/icons.json ***!
  \*************************************/
/*! exports provided: logo, contacts, settings, addnew, exit, history, send, receive, contracts, messages, staking, default */
/***/ (function(module) {


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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var state = {
    wallets: undefined,
    sync: undefined,
};
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](state);
        this.store = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (name) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])(name));
    };
    // tslint:disable-next-line:no-shadowed-variable
    Store.prototype.set = function (name, state) {
        var _a;
        this.subject.next(__assign({}, this.value, (_a = {}, _a[name] = state, _a)));
    };
    return Store;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GitHub\NirmataGUI\html_source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map