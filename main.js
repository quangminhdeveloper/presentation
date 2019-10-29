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
/* harmony import */ var _import_text_import_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-text/import-text.component */ "./src/app/import-text/import-text.component.ts");
/* harmony import */ var _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide-show/slide-show.component */ "./src/app/slide-show/slide-show.component.ts");





var routes = [
    { path: '', component: _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_4__["SlideShowComponent"] },
    { path: 'import', component: _import_text_import_text_component__WEBPACK_IMPORTED_MODULE_3__["ImportTextComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #facc9e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuZ21pbmgvam9icmVhZHkvUHJpdmF0ZVdvcmtzL3ByZXNlbnRhdGlvbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgYmFja2dyb3VuZDogI2ZhY2M5ZTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'presentation';
    }
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        this.key = event;
        if (event.keyCode == 105) {
            this.router.navigate(['/', 'import']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keypress', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _import_text_import_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import-text/import-text.component */ "./src/app/import-text/import-text.component.ts");
/* harmony import */ var _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide-show/slide-show.component */ "./src/app/slide-show/slide-show.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _import_text_import_text_component__WEBPACK_IMPORTED_MODULE_7__["ImportTextComponent"],
                _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_8__["SlideShowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/import-text/import-text.component.html":
/*!********************************************************!*\
  !*** ./src/app/import-text/import-text.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ckeditor [editor]=\"Editor\" [(ngModel)]=\"text\" class=\"import-text\"></ckeditor>\n<button class=\"btn btn-success\" (click)=\"save()\">Start</button>\n"

/***/ }),

/***/ "./src/app/import-text/import-text.component.scss":
/*!********************************************************!*\
  !*** ./src/app/import-text/import-text.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-text {\n  width: 100%;\n  height: 40vh;\n  outline: none; }\n\n.btn {\n  margin: 0 auto;\n  display: block;\n  width: 100px;\n  height: 35px;\n  font-size: 20px;\n  border-radius: 8px;\n  border: 1px solid #facc9e;\n  outline: none; }\n\n:host ::ng-deep .ck-editor__editable {\n  min-height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuZ21pbmgvam9icmVhZHkvUHJpdmF0ZVdvcmtzL3ByZXNlbnRhdGlvbi9zcmMvYXBwL2ltcG9ydC10ZXh0L2ltcG9ydC10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWY7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUVmO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnQtdGV4dC9pbXBvcnQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBvcnQtdGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5idG57XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFjYzllO1xuICBvdXRsaW5lOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlIHtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/import-text/import-text.component.ts":
/*!******************************************************!*\
  !*** ./src/app/import-text/import-text.component.ts ***!
  \******************************************************/
/*! exports provided: ImportTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTextComponent", function() { return ImportTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);





var ImportTextComponent = /** @class */ (function () {
    function ImportTextComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.text = '';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
    }
    ImportTextComponent.prototype.ngOnInit = function () {
    };
    ImportTextComponent.prototype.save = function () {
        this.mainService.setText(this.text);
        this.router.navigate(['/']);
    };
    ImportTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-text',
            template: __webpack_require__(/*! ./import-text.component.html */ "./src/app/import-text/import-text.component.html"),
            styles: [__webpack_require__(/*! ./import-text.component.scss */ "./src/app/import-text/import-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ImportTextComponent);
    return ImportTextComponent;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainService = /** @class */ (function () {
    function MainService() {
    }
    MainService.prototype.setText = function (value) {
        this.text = value;
    };
    MainService.prototype.getText = function () {
        return this.text;
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/slide-show/slide-show.component.html":
/*!******************************************************!*\
  !*** ./src/app/slide-show/slide-show.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slide\" [innerHTML]=\"text\"></div>"

/***/ }),

/***/ "./src/app/slide-show/slide-show.component.scss":
/*!******************************************************!*\
  !*** ./src/app/slide-show/slide-show.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide {\n  font-size: 100px;\n  color: #fff; }\n\nbody {\n  background: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuZ21pbmgvam9icmVhZHkvUHJpdmF0ZVdvcmtzL3ByZXNlbnRhdGlvbi9zcmMvYXBwL3NsaWRlLXNob3cvc2xpZGUtc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NsaWRlLXNob3cvc2xpZGUtc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/slide-show/slide-show.component.ts":
/*!****************************************************!*\
  !*** ./src/app/slide-show/slide-show.component.ts ***!
  \****************************************************/
/*! exports provided: SlideShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowComponent", function() { return SlideShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var SlideShowComponent = /** @class */ (function () {
    function SlideShowComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.text = 'Default';
        this.time = 100;
    }
    SlideShowComponent.prototype.ngOnInit = function () {
        this.text = this.mainService.getText();
        // this.pageScroll()
    };
    SlideShowComponent.prototype.isBottom = function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_4__(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_4__(window).height() == jquery__WEBPACK_IMPORTED_MODULE_4__(document).height()) {
            return true;
        }
        return false;
    };
    SlideShowComponent.prototype.pageScroll = function () {
        var _this = this;
        clearInterval(this.interval);
        var speed = 1;
        if ((this.time / 5) < 0) {
            speed = Math.abs(this.time / 5);
        }
        this.interval = setInterval(function () {
            window.scrollBy(0, speed);
            if (_this.isBottom())
                clearInterval(_this.interval);
        }, this.time);
    };
    SlideShowComponent.prototype.handleKeyboardEvent = function (event) {
        event.preventDefault();
        var key = event.keyCode;
        if (key == 44) {
            this.time += 5;
            this.pageScroll();
        }
        else if (key == 46) {
            this.time -= 5;
            this.pageScroll();
        }
        else if (key == 32) {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            else {
                if (this.isBottom())
                    return;
                this.pageScroll();
            }
        }
        else if (key == 116) {
            window.scrollTo(0, 0);
        }
        else if (key == 49) {
            var size = parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('fontSize').replace('px', ''));
            jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('fontSize', size - 10);
        }
        else if (key == 50) {
            var size = parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('fontSize').replace('px', ''));
            jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('fontSize', size + 10);
        }
        else if (key == 51) {
            var size = parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('lineHeight').replace('px', ''));
            if (!size)
                size = 100;
            jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('lineHeight', (size - 1) + 'px');
        }
        else if (key == 52) {
            var size = parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('lineHeight').replace('px', ''));
            if (!size)
                size = 100;
            jquery__WEBPACK_IMPORTED_MODULE_4__('.slide').css('lineHeight', (size + 1) + 'px');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keypress', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SlideShowComponent.prototype, "handleKeyboardEvent", null);
    SlideShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slideshow',
            template: __webpack_require__(/*! ./slide-show.component.html */ "./src/app/slide-show/slide-show.component.html"),
            styles: [__webpack_require__(/*! ./slide-show.component.scss */ "./src/app/slide-show/slide-show.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SlideShowComponent);
    return SlideShowComponent;
}());



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

module.exports = __webpack_require__(/*! /Users/quangminh/jobready/PrivateWorks/presentation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map