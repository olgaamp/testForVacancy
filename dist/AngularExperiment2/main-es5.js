function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_pages_navigation_pages_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/pages-navigation/pages-navigation.component */
    "./src/app/components/pages-navigation/pages-navigation.component.ts");
    /* harmony import */


    var _components_page1_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/page1/page1.component */
    "./src/app/components/page1/page1.component.ts");
    /* harmony import */


    var _components_page2_page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/page2/page2.component */
    "./src/app/components/page2/page2.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pages-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page2");
        }
      },
      directives: [_components_pages_navigation_pages_navigation_component__WEBPACK_IMPORTED_MODULE_1__["PagesNavigationComponent"], _components_page1_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"], _components_page2_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_car_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/car/car.component */
    "./src/app/components/car/car.component.ts");
    /* harmony import */


    var _components_car_vacantion_test_car_vacantion_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/car-vacantion-test/car-vacantion-test.component */
    "./src/app/components/car-vacantion-test/car-vacantion-test.component.ts");
    /* harmony import */


    var _components_page1_page1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page1/page1.component */
    "./src/app/components/page1/page1.component.ts");
    /* harmony import */


    var _components_page2_page2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page2/page2.component */
    "./src/app/components/page2/page2.component.ts");
    /* harmony import */


    var _components_pages_navigation_pages_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/pages-navigation/pages-navigation.component */
    "./src/app/components/pages-navigation/pages-navigation.component.ts");
    /* harmony import */


    var _components_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/car-card/car-card.component */
    "./src/app/components/car-card/car-card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_car_car_component__WEBPACK_IMPORTED_MODULE_3__["CarComponent"], _components_car_vacantion_test_car_vacantion_test_component__WEBPACK_IMPORTED_MODULE_4__["CarVacantionTestComponent"], _components_page1_page1_component__WEBPACK_IMPORTED_MODULE_5__["Page1Component"], _components_page2_page2_component__WEBPACK_IMPORTED_MODULE_6__["Page2Component"], _components_pages_navigation_pages_navigation_component__WEBPACK_IMPORTED_MODULE_7__["PagesNavigationComponent"], _components_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_8__["CarCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_car_car_component__WEBPACK_IMPORTED_MODULE_3__["CarComponent"], _components_car_vacantion_test_car_vacantion_test_component__WEBPACK_IMPORTED_MODULE_4__["CarVacantionTestComponent"], _components_page1_page1_component__WEBPACK_IMPORTED_MODULE_5__["Page1Component"], _components_page2_page2_component__WEBPACK_IMPORTED_MODULE_6__["Page2Component"], _components_pages_navigation_pages_navigation_component__WEBPACK_IMPORTED_MODULE_7__["PagesNavigationComponent"], _components_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_8__["CarCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/car-card/car-card.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/car-card/car-card.component.ts ***!
    \***********************************************************/

  /*! exports provided: CarCardComponent */

  /***/
  function srcAppComponentsCarCardCarCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarCardComponent", function () {
      return CarCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CarCardComponent = /*#__PURE__*/function () {
      function CarCardComponent() {
        _classCallCheck(this, CarCardComponent);
      }

      _createClass(CarCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarCardComponent;
    }();

    CarCardComponent.ɵfac = function CarCardComponent_Factory(t) {
      return new (t || CarCardComponent)();
    };

    CarCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarCardComponent,
      selectors: [["app-car-card"]],
      decls: 16,
      vars: 0,
      consts: [[1, "container"], [1, "centre-container"], [1, "cardTitle"], [1, "btn", "btn-danger"], [1, "btn", "btn-danger", "large"]],
      template: function CarCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wide choice of llorem ipsum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Car1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Car2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Car3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go to Step2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["p[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #45535f;\r\n  line-height: 20px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  height: 230px;\r\n  border: 1px #f5f5f6 solid;\r\n  background-color: #fafafa;\r\n  margin-right: 50px;\r\n}\r\n\r\n.centre-container[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #45535f;\r\n  line-height: 20px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.btn-danger.large[_ngcontent-%COMP%] {\r\n  background-color: #f15a29;\r\n  border-color: #f15a29;\r\n  width: 190px;\r\n  height: 43px;\r\n  font-size: 10px;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #fbb040;\r\n  border-color: #fafafa;\r\n  width: 54px;\r\n  height: 25px;\r\n  font-size: 9px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXItY2FyZC9jYXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXItY2FyZC9jYXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNDU1MzVmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG4gIGJvcmRlcjogMXB4ICNmNWY1ZjYgc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jZW50cmUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uY2FyZFRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM0NTUzNWY7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWRhbmdlci5sYXJnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNWEyOTtcclxuICBib3JkZXItY29sb3I6ICNmMTVhMjk7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogNDNweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiMDQwO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZhZmFmYTtcclxuICB3aWR0aDogNTRweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuXHJcbi8qLmJ0bi0xIC5idG4tZGFuZ2VyLmxhcmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcclxufSovXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-car-card',
          templateUrl: './car-card.component.html',
          styleUrls: ['./car-card.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/car-vacantion-test/car-vacantion-test.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/car-vacantion-test/car-vacantion-test.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CarVacantionTestComponent */

  /***/
  function srcAppComponentsCarVacantionTestCarVacantionTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarVacantionTestComponent", function () {
      return CarVacantionTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CarVacantionTestComponent = /*#__PURE__*/function () {
      function CarVacantionTestComponent() {
        _classCallCheck(this, CarVacantionTestComponent);
      }

      _createClass(CarVacantionTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.car = {
            title: 'Mercedes',
            id: 1,
            price: 10000,
            popularity: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          };
        }
      }]);

      return CarVacantionTestComponent;
    }();

    CarVacantionTestComponent.ɵfac = function CarVacantionTestComponent_Factory(t) {
      return new (t || CarVacantionTestComponent)();
    };

    CarVacantionTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarVacantionTestComponent,
      selectors: [["app-car-vacantion-test"]],
      decls: 2,
      vars: 0,
      template: function CarVacantionTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "car-vacantion-test works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLXZhY2FudGlvbi10ZXN0L2Nhci12YWNhbnRpb24tdGVzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarVacantionTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-car-vacantion-test',
          templateUrl: './car-vacantion-test.component.html',
          styleUrls: ['./car-vacantion-test.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/car/car.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/car/car.component.ts ***!
    \*************************************************/

  /*! exports provided: CarComponent */

  /***/
  function srcAppComponentsCarCarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarComponent", function () {
      return CarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CarComponent = /*#__PURE__*/function () {
      function CarComponent() {
        _classCallCheck(this, CarComponent);
      }

      _createClass(CarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = 'Audi';
          this.speed = 235;
          this.model = 'RS';
          this.colors = {
            car: 'White',
            salon: 'Black',
            wheels: 'Silver'
          };
          this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
        }
      }]);

      return CarComponent;
    }();

    CarComponent.ɵfac = function CarComponent_Factory(t) {
      return new (t || CarComponent)();
    };

    CarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarComponent,
      selectors: [["app-car"]],
      decls: 2,
      vars: 1,
      template: function CarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyL2Nhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-car',
          templateUrl: './car.component.html',
          styleUrls: ['./car.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page1/page1.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/page1/page1.component.ts ***!
    \*****************************************************/

  /*! exports provided: Page1Component */

  /***/
  function srcAppComponentsPage1Page1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Component", function () {
      return Page1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../car-card/car-card.component */
    "./src/app/components/car-card/car-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Page1Component_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var car_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.popularity);
      }
    }

    var Page1Component = /*#__PURE__*/function () {
      function Page1Component() {
        _classCallCheck(this, Page1Component);

        var data = '[{"title":"Mercedes","id":1,"price":10000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Audi","id":2,"price":8000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Renault","id":3,"price":5000,"popularity":5,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Bmw","id":5,"price":12000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Honda","id":7,"price":4000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Toyota","id":9,"price":4500,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Alfa Romeo","id":10,"price":4500,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Nissan","id":11,"price":5000,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Peugeot","id":12,"price":5000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]';
        this.carsArray = JSON.parse(data);
        this.carsArray.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          }

          if (a.title < b.title) {
            return 1;
          }

          if (a.title === b.title) {
            return 0;
          }
        });
      }

      _createClass(Page1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page1Component;
    }();

    Page1Component.ɵfac = function Page1Component_Factory(t) {
      return new (t || Page1Component)();
    };

    Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page1Component,
      selectors: [["app-page1"]],
      decls: 20,
      vars: 1,
      consts: [[1, "step1Title"], [1, "container"], [1, "btn-1"], [1, "btn-2"], [1, "btn-3"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "car-title"]],
      template: function Page1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1. Step 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-car-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-car-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-car-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Popularity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Page1Component_tr_19_Template, 12, 4, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carsArray);
        }
      },
      directives: [_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_1__["CarCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-bottom: 85px;\r\n}\r\n\r\n.step1Title[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-2 .btn-danger.large {\r\n  background-color: #75bad3;\r\n  border-color: #fafafa;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-3 .btn-danger.large {\r\n  background-color: #78a240;\r\n  border-color: #fafafa;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-top: 0px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n  height: 68px;\r\n}\r\n\r\n.car-title[_ngcontent-%COMP%] {\r\n  color: #1c75bc;\r\n  font-weight: bold;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f1f2f2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlMS9wYWdlMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlMS9wYWdlMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODVweDtcclxufVxyXG5cclxuLnN0ZXAxVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5idG4tMiAuYnRuLWRhbmdlci5sYXJnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YmFkMztcclxuICBib3JkZXItY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuYnRuLTMgLmJ0bi1kYW5nZXIubGFyZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGEyNDA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4udGFibGUgdGgge1xyXG4gIGJvcmRlci10b3A6IDBweDtcclxufVxyXG5cclxudHIge1xyXG4gIGhlaWdodDogNjhweDtcclxufVxyXG5cclxuLmNhci10aXRsZSB7XHJcbiAgY29sb3I6ICMxYzc1YmM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYyO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page1',
          templateUrl: './page1.component.html',
          styleUrls: ['./page1.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page2/page2.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/page2/page2.component.ts ***!
    \*****************************************************/

  /*! exports provided: Page2Component */

  /***/
  function srcAppComponentsPage2Page2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page2Component", function () {
      return Page2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page2Component = /*#__PURE__*/function () {
      function Page2Component() {
        _classCallCheck(this, Page2Component);
      }

      _createClass(Page2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page2Component;
    }();

    Page2Component.ɵfac = function Page2Component_Factory(t) {
      return new (t || Page2Component)();
    };

    Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page2Component,
      selectors: [["app-page2"]],
      decls: 2,
      vars: 0,
      template: function Page2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page2 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTIvcGFnZTIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page2',
          templateUrl: './page2.component.html',
          styleUrls: ['./page2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages-navigation/pages-navigation.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/pages-navigation/pages-navigation.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PagesNavigationComponent */

  /***/
  function srcAppComponentsPagesNavigationPagesNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesNavigationComponent", function () {
      return PagesNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagesNavigationComponent = /*#__PURE__*/function () {
      function PagesNavigationComponent() {
        _classCallCheck(this, PagesNavigationComponent);
      }

      _createClass(PagesNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onStep1ButtonClick",
        value: function onStep1ButtonClick() {
          this.step1IsSelected = true;
        }
      }, {
        key: "onStep2ButtonClick",
        value: function onStep2ButtonClick() {
          this.step1IsSelected = false;
        }
      }]);

      return PagesNavigationComponent;
    }();

    PagesNavigationComponent.ɵfac = function PagesNavigationComponent_Factory(t) {
      return new (t || PagesNavigationComponent)();
    };

    PagesNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagesNavigationComponent,
      selectors: [["app-pages-navigation"]],
      outputs: {
        step1IsSelected: "step1IsSelected"
      },
      decls: 9,
      vars: 0,
      consts: [[1, "container"], [1, "line-red", "triangle-box-right"], [1, "line-gray", "triangle-box-right"]],
      template: function PagesNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1. Step1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2. Step2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-bottom: 70px;\r\n  color: #45535f;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.line-red[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 20px solid #f26522;\r\n  width: 570px;\r\n  height: 0;\r\n}\r\n\r\n.triangle-box-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -10px;\r\n  left: 40px;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n\r\n.line-gray[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 20px solid #d1d3d4;\r\n  width: 570px;\r\n  height: 0;\r\n  border-left-color: transparent;\r\n}\r\n\r\n.line-gray[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -20px;\r\n  right: -90px;\r\n  border: 20px solid #d1d3d4;\r\n  width: 70px;\r\n  height: 0;\r\n  border-top-color: transparent;\r\n  border-bottom-color: transparent;\r\n  border-right-style: none;\r\n}\r\n\r\n.line-red[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -20px;\r\n  right: -90px;\r\n  border: 20px solid #f26522;\r\n  width: 70px;\r\n  height: 0;\r\n  border-top-color: transparent;\r\n  border-bottom-color: transparent;\r\n  border-right-style: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy1uYXZpZ2F0aW9uL3BhZ2VzLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osU0FBUztFQUNULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMtbmF2aWdhdGlvbi9wYWdlcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gIGNvbG9yOiAjNDU1MzVmO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxpbmUtcmVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICNmMjY1MjI7XHJcbiAgd2lkdGg6IDU3MHB4O1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnRyaWFuZ2xlLWJveC1yaWdodCBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmUtZ3JheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMjBweCBzb2xpZCAjZDFkM2Q0O1xyXG4gIHdpZHRoOiA1NzBweDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGluZS1ncmF5OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIHJpZ2h0OiAtOTBweDtcclxuICBib3JkZXI6IDIwcHggc29saWQgI2QxZDNkNDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubGluZS1yZWQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgcmlnaHQ6IC05MHB4O1xyXG4gIGJvcmRlcjogMjBweCBzb2xpZCAjZjI2NTIyO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pages-navigation',
          templateUrl: './pages-navigation.component.html',
          styleUrls: ['./pages-navigation.component.css']
        }]
      }], function () {
        return [];
      }, {
        step1IsSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\olgak\WebstormProjects\AngularExperiment2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map