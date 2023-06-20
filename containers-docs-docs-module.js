(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-docs-docs-module"],{

/***/ "a2JW":
/*!********************************************************!*\
  !*** ./src/app/containers/docs/docs-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DocsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsRoutingModule", function() { return DocsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.component */ "jhbq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _docs_component__WEBPACK_IMPORTED_MODULE_1__["DocsComponent"]
    }
];
var DocsRoutingModule = /** @class */ (function () {
    function DocsRoutingModule() {
    }
    DocsRoutingModule.ɵfac = function DocsRoutingModule_Factory(t) { return new (t || DocsRoutingModule)(); };
    DocsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DocsRoutingModule });
    DocsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return DocsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "eq+d":
/*!************************************************!*\
  !*** ./src/app/containers/docs/docs.module.ts ***!
  \************************************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules */ "WNGt");
/* harmony import */ var _docs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs-routing.module */ "a2JW");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs.component */ "jhbq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var DocsModule = /** @class */ (function () {
    function DocsModule() {
    }
    DocsModule.ɵfac = function DocsModule_Factory(t) { return new (t || DocsModule)(); };
    DocsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DocsModule });
    DocsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }),
                _modules__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _docs_routing_module__WEBPACK_IMPORTED_MODULE_4__["DocsRoutingModule"]
            ]] });
    return DocsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DocsModule, { declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_5__["DocsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _modules__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _docs_routing_module__WEBPACK_IMPORTED_MODULE_4__["DocsRoutingModule"]] }); })();


/***/ }),

/***/ "jhbq":
/*!***************************************************!*\
  !*** ./src/app/containers/docs/docs.component.ts ***!
  \***************************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "lR5k");



var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
    }
    DocsComponent.prototype.ngOnInit = function () {
    };
    DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(); };
    DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["lasp-docs"]], decls: 2, vars: 1, consts: [[3, "src"]], template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "markdown", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://raw.githubusercontent.com/SWxTREC/vector-api/master/README.md");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return DocsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=containers-docs-docs-module.js.map