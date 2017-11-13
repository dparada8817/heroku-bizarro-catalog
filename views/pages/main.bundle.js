webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  html, body {\r\n    margin: 0;\r\n    font-family: 'Roboto', 'Noto', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    background: #f1f1f1;\r\n    max-height: 368px;\r\n  }\r\n  app-toolbar {\r\n    background-color: #831b1c;\r\n    color: #fff;\r\n  }\r\n\r\n  paper-icon-button {\r\n    --paper-icon-button-ink-color: white;\r\n  }\r\n\r\n  paper-icon-button + [main-title] {\r\n    margin-left: 24px;\r\n  }\r\n  paper-progress {\r\n    display: block;\r\n    width: 100%;\r\n    --paper-progress-active-color: rgba(255, 255, 255, 0.5);\r\n    --paper-progress-container-color: transparent;\r\n  }\r\n  app-header {\r\n    @apply --layout-fixed-top;\r\n    color: #fff;\r\n    \\--app-header-background-rear-layer: {\r\n      background-color: #ef6c00;\r\n    };\r\n  }\r\n  app-drawer {\r\n    --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);\r\n    \\--app-drawer-content-container: {\r\n      background-color: #B0BEC5;\r\n    }\r\n  }\r\n\r\n  a {\r\n    text-decoration: none;\r\n    font-size: inherit;\r\n    color: inherit;\r\n  }\r\n  .tabs {\r\n    height: 100%;\r\n    @apply --layout-horizontal;\r\n    @apply --layout-end-justified;\r\n    position: absolute;\r\n    right: 0px;\r\n  }\r\n  .tabs  a {\r\n    @apply --layout-vertical;\r\n    @apply --layout-center-center;\r\n    margin: 12px 16px 12px;\r\n  }\r\n\r\n  footer {\r\n    height: 50px;\r\n    width: 98%;\r\n    line-height: 50px;\r\n    text-align: right;\r\n    background-color: rgb(255, 255, 255);\r\n    font-size: 14px;\r\n    opacity: 0.9;\r\n  }\r\n\r\n\r\n  @media (max-width: 960px) {\r\n    a {\r\n      font-size: 15px;\r\n    }\r\n    .tabs  a {\r\n      margin: 8px 12px 8px;\r\n    }\r\n  \r\n  }\r\n  @media (max-width: 719px) {\r\n    a {\r\n      font-size: 12px;\r\n    }\r\n    .tabs  a {\r\n      margin: 2px 5px 2px;\r\n    }\r\n  \r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-drawer-layout>\r\n  <app-header-layout>\r\n    <app-header class=\"mainHeader\" condenses fixed effects=\"resize-title blend-background waterfall\" slot=\"header\">\r\n      <app-toolbar>\r\n        <img src=\"assets/images/logo64.jpg\">\r\n        <div class=\"tabs\">\r\n            <a [routerLink]=\"['/']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">Inicio</a>\r\n            <a [routerLink]=\"['/somos']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">Quienes Somos</a>\r\n            <a [routerLink]=\"['/catalogo']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">Catalogo</a>\r\n            <!--a [routerLink]=\"['/contactenos']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">Contactenos</a-->\r\n          </div>\r\n      </app-toolbar>\r\n      <app-header reveals effects=\"waterfall\" slot=\"header\">\r\n\r\n        <app-toolbar class=\"toolbar\">\r\n          \r\n        </app-toolbar>\r\n\r\n      </app-header>\r\n    </app-header>\r\n    <router-outlet></router-outlet>\r\n    <footer style=\"position:fixed;bottom:0\">\r\n        Direccion: Calle 48 # 18 - 22 B. Colombia - Tel: (7) 6121078 - Barrancabermeja\r\n    </footer>\r\n  </app-header-layout>\r\n</app-drawer-layout>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__codebakery_origami__ = __webpack_require__("../../../../@codebakery/origami/@codebakery/origami.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__codebakery_origami_lib_collections__ = __webpack_require__("../../../../@codebakery/origami/@codebakery/origami/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inicio_inicio_module__ = __webpack_require__("../../../../../src/app/inicio/inicio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__catalogo_catalogo_module__ = __webpack_require__("../../../../../src/app/catalogo/catalogo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contactenos_contactenos_module__ = __webpack_require__("../../../../../src/app/contactenos/contactenos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quienes_somos_quienes_somos_module__ = __webpack_require__("../../../../../src/app/quienes-somos/quienes-somos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // O







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__codebakery_origami__["c" /* PolymerModule */].forRoot(),
            // Optional modules to help reduce markup complexity
            __WEBPACK_IMPORTED_MODULE_4__codebakery_origami_lib_collections__["b" /* IronElementsModule */],
            __WEBPACK_IMPORTED_MODULE_4__codebakery_origami_lib_collections__["c" /* PaperElementsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__inicio_inicio_module__["a" /* InicioModule */],
            __WEBPACK_IMPORTED_MODULE_8__catalogo_catalogo_module__["a" /* CatalogoModule */],
            __WEBPACK_IMPORTED_MODULE_9__contactenos_contactenos_module__["a" /* ContactenosModule */],
            __WEBPACK_IMPORTED_MODULE_10__quienes_somos_quienes_somos_module__["a" /* QuienesSomosModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/catalogo/catalogo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogo_component__ = __webpack_require__("../../../../../src/app/catalogo/catalogo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CatalogoRoutingModule = (function () {
    function CatalogoRoutingModule() {
    }
    return CatalogoRoutingModule;
}());
CatalogoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: 'catalogo', component: __WEBPACK_IMPORTED_MODULE_2__catalogo_component__["a" /* CatalogoComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CatalogoRoutingModule);

//# sourceMappingURL=catalogo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/catalogo/catalogo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: block;\r\n  max-width: 1000px;\r\n}\r\n.card-container {\r\n  display: inline-block;\r\n  width: 30%;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\npaper-card {\r\n  display: block;\r\n  margin: 5px;\r\n  \\--paper-card-header-image: {\r\n    height: 200px;\r\n  }\r\n}\r\npaper-card h2 {\r\n  margin: 4px;\r\n  font-weight: normal;\r\n}\r\npaper-card p {\r\n  margin: 4px;\r\n  color: #999;\r\n}\r\n.container1 {\r\n  display: block;\r\n}\r\n.container1 > * {\r\n  @apply --layout-flex;\r\n}\r\n\r\n@media (max-width: 960px) {\r\n  .content {\r\n    max-width: 800px;\r\n  }\r\n  .card-container {\r\n    width: 50%;\r\n  }\r\n}\r\n@media (max-width: 719px) {\r\n  .content {\r\n    max-width: 400px;\r\n  }\r\n  .card-container {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalogo/catalogo.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\r\n  <div class=\"container\">\r\n    <h3>Catalogo Bizarro!</h3>\r\n  </div>\r\n  <div class=\"container\">\r\n    <p>Estamos trabajando para tener un mostrario amplio que ofrecerte, estos son algunos de los productos que tenemos para ti:</p>\r\n  </div>\r\n  <div class=\"container container1\">\r\n    <a class=\"card-container\">\r\n      <paper-card image=\"assets/images/muestra1.jpg\">\r\n        <div class=\"card-content\">\r\n          <h2>Baguette Selena</h2>\r\n        </div>\r\n      </paper-card>\r\n    </a>\r\n    <a class=\"card-container\">\r\n        <paper-card image=\"assets/images/muestra3.jpg\">\r\n          <div class=\"card-content\">\r\n            <h2>Baguette Elia</h2>\r\n         </div>\r\n        </paper-card>\r\n      </a>\r\n      <a class=\"card-container\">\r\n          <paper-card image=\"assets/images/muestra4.jpg\">\r\n            <div class=\"card-content\">\r\n              <h2>Shopping Mar</h2>\r\n            </div>\r\n          </paper-card>\r\n        </a>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/catalogo/catalogo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogoComponent = (function () {
    function CatalogoComponent() {
    }
    CatalogoComponent.prototype.ngOnInit = function () {
    };
    return CatalogoComponent;
}());
CatalogoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-catalogo',
        template: __webpack_require__("../../../../../src/app/catalogo/catalogo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalogo/catalogo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CatalogoComponent);

//# sourceMappingURL=catalogo.component.js.map

/***/ }),

/***/ "../../../../../src/app/catalogo/catalogo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogo_component__ = __webpack_require__("../../../../../src/app/catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalogo_routing_module__ = __webpack_require__("../../../../../src/app/catalogo/catalogo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CatalogoModule = (function () {
    function CatalogoModule() {
    }
    return CatalogoModule;
}());
CatalogoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__catalogo_routing_module__["a" /* CatalogoRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__catalogo_component__["a" /* CatalogoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__catalogo_component__["a" /* CatalogoComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], CatalogoModule);

//# sourceMappingURL=catalogo.module.js.map

/***/ }),

/***/ "../../../../../src/app/contactenos/contactenos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactenosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactenos_component__ = __webpack_require__("../../../../../src/app/contactenos/contactenos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactenosRoutingModule = (function () {
    function ContactenosRoutingModule() {
    }
    return ContactenosRoutingModule;
}());
ContactenosRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: 'contactenos', component: __WEBPACK_IMPORTED_MODULE_2__contactenos_component__["a" /* ContactenosComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ContactenosRoutingModule);

//# sourceMappingURL=contactenos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/contactenos/contactenos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactenos/contactenos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contactenos works!\r\n</p>\r\n<div class=\"container\">\r\n  <paper-card >\r\n    <div class=\"card-content\">\r\n      <form is=\"iron-form\" id=\"form\">\r\n\r\n        <div class=\"vertical layout\">\r\n          <div class=\"infoCorreo horizontal end-justified layout\">\r\n            Para multiples correos separar con una coma (,).\r\n          </div>\r\n          <paper-input id=\"de\" class=\"input-container\" label=\"De\">\r\n          </paper-input>\r\n          <paper-input id=\"para\" class=\"input-container\" label=\"Para\">\r\n          </paper-input>\r\n          <paper-input id=\"asunto\" class=\"input-container\" label=\"Asunto\">\r\n          </paper-input>\r\n          <paper-textarea id=\"contenido\" label=\"Contenido\">\r\n          </paper-textarea>\r\n        </div>\r\n      </form>\r\n      <div class=\"buttons\">\r\n        <paper-button class=\"button-general button-gral-afirmativo\">Enviar</paper-button>\r\n        <paper-button class=\"button-general button-gral-negativo\">Cancelar</paper-button>\r\n      </div>\r\n    </div>\r\n  </paper-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contactenos/contactenos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactenosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactenosComponent = (function () {
    function ContactenosComponent() {
    }
    ContactenosComponent.prototype.ngOnInit = function () {
    };
    return ContactenosComponent;
}());
ContactenosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contactenos',
        template: __webpack_require__("../../../../../src/app/contactenos/contactenos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contactenos/contactenos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactenosComponent);

//# sourceMappingURL=contactenos.component.js.map

/***/ }),

/***/ "../../../../../src/app/contactenos/contactenos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactenosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactenos_component__ = __webpack_require__("../../../../../src/app/contactenos/contactenos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactenos_routing_module__ = __webpack_require__("../../../../../src/app/contactenos/contactenos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactenosModule = (function () {
    function ContactenosModule() {
    }
    return ContactenosModule;
}());
ContactenosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__contactenos_routing_module__["a" /* ContactenosRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__contactenos_component__["a" /* ContactenosComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__contactenos_component__["a" /* ContactenosComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
    })
], ContactenosModule);

//# sourceMappingURL=contactenos.module.js.map

/***/ }),

/***/ "../../../../../src/app/inicio/inicio-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_component__ = __webpack_require__("../../../../../src/app/inicio/inicio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioRoutingModule = (function () {
    function InicioRoutingModule() {
    }
    return InicioRoutingModule;
}());
InicioRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inicio_component__["a" /* InicioComponent */] },
                { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_2__inicio_component__["a" /* InicioComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], InicioRoutingModule);

//# sourceMappingURL=inicio-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    display: block;\r\n    margin: auto;\r\n    width: 40%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n   <img class=\"center\" src=\"assets/images/construccion.jpg\">\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    return InicioComponent;
}());
InicioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inicio',
        template: __webpack_require__("../../../../../src/app/inicio/inicio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inicio/inicio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InicioComponent);

//# sourceMappingURL=inicio.component.js.map

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inicio_component__ = __webpack_require__("../../../../../src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_routing_module__ = __webpack_require__("../../../../../src/app/inicio/inicio-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InicioModule = (function () {
    function InicioModule() {
    }
    return InicioModule;
}());
InicioModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__inicio_routing_module__["a" /* InicioRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__inicio_component__["a" /* InicioComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__inicio_component__["a" /* InicioComponent */]],
        providers: []
    })
], InicioModule);

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ "../../../../../src/app/quienes-somos/quienes-somos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienesSomosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quienes_somos_component__ = __webpack_require__("../../../../../src/app/quienes-somos/quienes-somos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuienesSomosRoutingModule = (function () {
    function QuienesSomosRoutingModule() {
    }
    return QuienesSomosRoutingModule;
}());
QuienesSomosRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: 'somos', component: __WEBPACK_IMPORTED_MODULE_2__quienes_somos_component__["a" /* QuienesSomosComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], QuienesSomosRoutingModule);

//# sourceMappingURL=quienes-somos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/quienes-somos/quienes-somos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  section {\r\n    padding: 88px 16px;\r\n  }\r\n  .container img {\r\n    max-width: 100%;\r\n    max-height: 80%;\r\n  }\r\n  .container h3 {\r\n    font-size: 32px;\r\n    font-weight: 300;\r\n    margin: 24px 0;\r\n  }\r\n  .container p {\r\n    line-height: 1.5;\r\n  }\r\n  .container > * {\r\n    @apply --layout-flex;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quienes-somos/quienes-somos.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\r\n  <div class=\"container\">\r\n    <div>\r\n      <img src=\"assets/images/logo.jpg\">\r\n    </div>\r\n    <div>\r\n      <h3>En Bizarro Somos Fabricantes!</h3>\r\n      <p>Contamos con referencias que se adaptan a las necesidades y a la diversidad de las mujeres de hoy: casuales, elegantes, frescas, modernas y conservadoras</p>\r\n      <p>Elige el diseño de tu preferencia y podrás adaptarlo a tu estilo.</p>\r\n    </div>\r\n  </div>\r\n</section> "

/***/ }),

/***/ "../../../../../src/app/quienes-somos/quienes-somos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienesSomosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienesSomosComponent = (function () {
    function QuienesSomosComponent() {
    }
    QuienesSomosComponent.prototype.ngOnInit = function () {
    };
    return QuienesSomosComponent;
}());
QuienesSomosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quienes-somos',
        template: __webpack_require__("../../../../../src/app/quienes-somos/quienes-somos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quienes-somos/quienes-somos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienesSomosComponent);

//# sourceMappingURL=quienes-somos.component.js.map

/***/ }),

/***/ "../../../../../src/app/quienes-somos/quienes-somos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienesSomosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quienes_somos_component__ = __webpack_require__("../../../../../src/app/quienes-somos/quienes-somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quienes_somos_routing_module__ = __webpack_require__("../../../../../src/app/quienes-somos/quienes-somos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuienesSomosModule = (function () {
    function QuienesSomosModule() {
    }
    return QuienesSomosModule;
}());
QuienesSomosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__quienes_somos_routing_module__["a" /* QuienesSomosRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__quienes_somos_component__["a" /* QuienesSomosComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__quienes_somos_component__["a" /* QuienesSomosComponent */]]
    })
], QuienesSomosModule);

//# sourceMappingURL=quienes-somos.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__codebakery_origami__ = __webpack_require__("../../../../@codebakery/origami/@codebakery/origami.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__codebakery_origami_collections__ = __webpack_require__("../../../../@codebakery/origami/@codebakery/origami/collections.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__codebakery_origami_collections__["a" /* AppElementsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__codebakery_origami_collections__["b" /* IronElementsModule */],
            __WEBPACK_IMPORTED_MODULE_7__codebakery_origami_collections__["c" /* PaperElementsModule */],
            __WEBPACK_IMPORTED_MODULE_6__codebakery_origami__["c" /* PolymerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
        declarations: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__codebakery_origami__ = __webpack_require__("../../../../@codebakery/origami/@codebakery/origami.es5.js");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_4__codebakery_origami__["d" /* webcomponentsReady */])().then(function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], {
        enableLegacyTemplate: false
    });
}).catch(function (error) {
    // No WebComponent support and webcomponentsjs is not loaded
    console.error(error);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map