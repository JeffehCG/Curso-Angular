(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts",
		"about-about-module"
	],
	"./order/order.module": [
		"./src/app/order/order.module.ts",
		"order-order-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.api.ts":
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/*! exports provided: MEAT_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEAT_API", function() { return MEAT_API; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
//Configurações de conexão com o backend

var MEAT_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api; //Pegando o rost da api, dependendo do ambiente(produção ou desenvolvimento)


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <mt-header></mt-header>\r\n\r\n  <!-- Full Width Column -->\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"container\">\r\n\r\n      <router-outlet></router-outlet> <!-- Componente de rotas-->\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- snakbar deve ser aqui -->\r\n  <mt-snackbar></mt-snackbar>\r\n\r\n  <footer class=\"main-footer\">\r\n    <div class=\"container\">\r\n      <div class=\"pull-right hidden-xs\">\r\n        <b>Version</b> 1.0.0\r\n      </div>\r\n      <strong>Meat</strong> Angular Application\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

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
    function AppComponent() {
        this.content = 'Welcome do Meat App!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.error-handler.ts":
/*!**************************************!*\
  !*** ./src/app/app.error-handler.ts ***!
  \**************************************/
/*! exports provided: ApplicationErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationErrorHandler", function() { return ApplicationErrorHandler; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/login/login.service */ "./src/app/security/login/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Tratamentos de erros




var ApplicationErrorHandler = /** @class */ (function (_super) {
    __extends(ApplicationErrorHandler, _super);
    function ApplicationErrorHandler(ns, //Serviço de exibição de notificação para o usuario
    injector, //Injector é referencia para o mecanismo de dependencia do angular ( atraves dele pode obter qualquer objeto dentro do conteniner de dependencia) 
    zone //O errorHandler é executado fora da zona do angular, assim muitas vezes ele não consegue alterar atributos na tela para o usuario
    //(então o NgZone é usado para garantir a execução do errorHandler dentro de uma zona, para ele ser monitorado pelo angular, e assim atualizando o que é preciso após a execução)
    //O NgZone tambem pode ser executado para garantir que bibliotecas javascript externas sejam executadas em uma zona
    ) {
        var _this = _super.call(this) //Nesse caso é preciso chamar o super() , pois a Interface ErrorHandler ja tem um construtor padrão
         || this;
        _this.ns = ns;
        _this.injector = injector;
        _this.zone = zone; //O errorHandler é executado fora da zona do angular, assim muitas vezes ele não consegue alterar atributos na tela para o usuario
        return _this;
    }
    //Metodo para tratar erros
    ApplicationErrorHandler.prototype.handleError = function (errorResponse) {
        var _this = this;
        if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            var message_1 = errorResponse.error.message; //Pegando a mensagem do erro
            //Garantindo que o codigo abaixo sera executado em uma zona do angular
            this.zone.run(function () {
                switch (errorResponse.status) {
                    case 401:
                        //Redirecionando para a pagina de login
                        _this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]).hadleLogin(); //Pegando a referencia de LoginService e suas dependencias pelo Injector
                        break;
                    case 403:
                        _this.ns.notify(message_1 || 'Não autorizado.'); //Exibindo a notificação para o usuario
                        break;
                    case 404:
                        _this.ns.notify(message_1 || 'Recurso não encontrado. Verifique o console para mais detalhes');
                        break;
                }
            });
        }
        _super.prototype.handleError.call(this, errorResponse); //Exibindo erro no console
    };
    ApplicationErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() //Interface ErrorHandler (Padrão de tratamento de erros do angular)
        ,
        __metadata("design:paramtypes", [_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] //O errorHandler é executado fora da zona do angular, assim muitas vezes ele não consegue alterar atributos na tela para o usuario
            //(então o NgZone é usado para garantir a execução do errorHandler dentro de uma zona, para ele ser monitorado pelo angular, e assim atualizando o que é preciso após a execução)
            //O NgZone tambem pode ser executado para garantir que bibliotecas javascript externas sejam executadas em uma zona
        ])
    ], ApplicationErrorHandler);
    return ApplicationErrorHandler;
}(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]));

// Metodo tratamento de erro ( primeiro exemplo)
// static handleError(error: HttpErrorResponse | any){
//     let errorMessage: string
//     if(error instanceof HttpErrorResponse){ //Se o erro for instancia de um response tratalo da maneira abaixo
//         const body = error.error
//         errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''}${body}`
//     }else{ // se não, exibir o erro
//         errorMessage = error.message ? error.message : error.toString()
//     }
//     console.log(errorMessage)
//     return Observable.throw(errorMessage)
// }


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/restaurants/restaurants.component.ts");
/* harmony import */ var _restaurants_item_restaurant_item_restaurant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restaurants/item-restaurant/item-restaurant.component */ "./src/app/restaurants/item-restaurant/item-restaurant.component.ts");
/* harmony import */ var _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restaurant-detail/restaurant-detail.component */ "./src/app/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restaurant-detail/menu/menu.component */ "./src/app/restaurant-detail/menu/menu.component.ts");
/* harmony import */ var _restaurant_detail_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restaurant-detail/shopping-cart/shopping-cart.component */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _restaurant_detail_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./restaurant-detail/menu-item/menu-item.component */ "./src/app/restaurant-detail/menu-item/menu-item.component.ts");
/* harmony import */ var _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./restaurant-detail/reviews/reviews.component */ "./src/app/restaurant-detail/reviews/reviews.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/order-summary/order-summary.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _header_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/user-detail/user-detail.component */ "./src/app/header/user-detail/user-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.error-handler */ "./src/app/app.error-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 //Local ID - esta sendo usado para converter moeda brasileira


 //Modulos de formularios



Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default.a, 'pt'); //Definindo a Região para o brasil
//Importando modulo de rotas















//Modulos

//Modulo separado
//Os providers estão sendo exportado em SharedModule.forRoot(), assim não precisando usar o CoreModule
// import { CoreModule } from './core/core.module';
//ErrorHandler padrão

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantsComponent"],
                _restaurants_item_restaurant_item_restaurant_component__WEBPACK_IMPORTED_MODULE_13__["ItemRestaurantComponent"],
                _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_14__["RestaurantDetailComponent"],
                _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _restaurant_detail_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartComponent"],
                _restaurant_detail_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_17__["MenuItemComponent"],
                _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_18__["ReviewsComponent"],
                _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_19__["OrderSummaryComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"],
                _security_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _header_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_22__["UserDetailComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"].forRoot(),
                // CoreModule //Modulo de serviços
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"] }),
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt' },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_24__["ApplicationErrorHandler"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/restaurants/restaurants.component.ts");
/* harmony import */ var _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-detail/restaurant-detail.component */ "./src/app/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-detail/reviews/reviews.component */ "./src/app/restaurant-detail/reviews/reviews.component.ts");
/* harmony import */ var _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant-detail/menu/menu.component */ "./src/app/restaurant-detail/menu/menu.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/order-summary/order-summary.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _security_loggedin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security/loggedin.guard */ "./src/app/security/loggedin.guard.ts");









var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'login/:to', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'login', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'restaurants/:id', component: _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_2__["RestaurantDetailComponent"],
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
            { path: 'reviews', component: _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_3__["ReviewsComponent"] }
        ] },
    { path: 'restaurants', component: _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__["RestaurantsComponent"] },
    // Esta rota esta Carregando o modulo de pagamento(loadChildrem- chama modulos separados do componente pricipal tardiamente (lazy-loading))
    { path: 'order', loadChildren: "./order/order.module#OrderModule",
        canLoad: [_security_loggedin_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]],
        canActivate: [_security_loggedin_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]] //Após o modulo ser carregado, toda vez que ele for acessado deverar atender as condições do CanActivate dentro de LoggedinGuard
    },
    { path: 'order-summary', component: _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_5__["OrderSummaryComponent"] },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];


/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Início do header -->\r\n  <header class=\"main-header\">\r\n    <nav class=\"navbar navbar-static-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <a [routerLink]=\"['/']\" class=\"navbar-brand\"><b>Meat</b></a>\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n        </div>\r\n  \r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse pull-left\" id=\"navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n              <li routerLinkActive=\"active\"><a [routerLink]=\"['/restaurants']\">Restaurantes</a></li> <!-- routerLink = diretiva de rota--> \r\n              <li routerLinkActive=\"active\"><a [routerLink]=\"['/about']\">Sobre</a></li><!-- routerLinkActive adiciona determinada classe de css quando o link do filho esta ativa, nesse caso o about-->\r\n          </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n\r\n        <!-- Componente de botão para ir para o login -->\r\n        <mt-user-detail></mt-user-detail>\r\n      </div>\r\n    </nav>\r\n    </header>\r\n<!-- Fim do header -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/user-detail/user-detail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/header/user-detail/user-detail.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu>span{ /**/\r\n    position: relative;\r\n    display: block;\r\n    padding: 15px 15px;\r\n    color: #fff;\r\n  }\r\n\r\n  .user-menu a{\r\n    color: #fff;\r\n    cursor: pointer\r\n  }\r\n\r\n  @media (max-width: 991px){\r\n    .navbar-custom-menu {\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 40px;\r\n      }\r\n  }"

/***/ }),

/***/ "./src/app/header/user-detail/user-detail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/header/user-detail/user-detail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-custom-menu\">\r\n  <ul class=\"nav navbar-nav\">\r\n    <li class=\"user user-menu\">\r\n\r\n      <!-- *ngIf com else - caso a condição não seja verdadeira, é aberto o template notLoggedIn -->\r\n      <span *ngIf=\"isLoggedIn(); else notLoggedIn\">\r\n        Olá, {{user().name}} | <a (click)=\"logout()\">Sair</a>\r\n      </span> \r\n\r\n      <!-- Template que sera aberto no else-->\r\n      <ng-template #notLoggedIn>\r\n        <a (click)=\"login()\">Entrar</a>\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/user-detail/user-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/header/user-detail/user-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/security/login/login.service */ "./src/app/security/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Componente do header para redirecionar para tela de login, caso o usuario não esteja logado


var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(loginService) {
        this.loginService = loginService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    //Pegando o usuario logado
    UserDetailComponent.prototype.user = function () {
        return this.loginService.user;
    };
    //Verificando se o usuario esta logado
    UserDetailComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    //Metodo para redirecionar para tela de login
    UserDetailComponent.prototype.login = function () {
        this.loginService.hadleLogin();
    };
    //Metodo para desconectar usuario
    UserDetailComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/header/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/header/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [app_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\r\n<section class=\"content-header\">\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n  <div class=\"jumbotron welcome-jumbotron\">\r\n     <h1>Bem vindo ao Meat!</h1>\r\n     <p>\r\n       Está com fome? Peça e receba em casa.\r\n     </p>\r\n     <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/restaurants']\">Ver Restaurantes</a>\r\n  </div>\r\n\r\n</section>\r\n<!-- FIM DO CONTEÚDO -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]; });





/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\r\n<section class=\"content-header\">\r\n</section>\r\n\r\n<!-- Main content -->\r\n<section class=\"content\">\r\n\r\n  <div class=\"jumbotron\">\r\n    <img src=\"assets/img/404.png\" /><h2>Página Não Encontrada</h2>\r\n    <p>\r\n      Está com fome? Acesse a página de <a [routerLink]=\"['/restaurants']\">restaurantes</a>.\r\n    </p>\r\n  </div>\r\n</section>\r\n<!-- FIM DO CONTEÚDO -->\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/order-summary/order-summary.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INICIO DO CONTEUDO -->\r\n<section class=\"content-header\">\r\n  </section>\r\n\r\n  <section class=\"content\">\r\n    <div class=\"jumbotron\">\r\n      <h2>Pedido Conluído</h2>\r\n      <p>Seu pedido foi recebido pelo restaurante. Prepare a mesa que a comida está chegando!</p>\r\n      <p><b>Avalie</b> sua experiência:</p>\r\n      <p><mt-rating (rated)=\"rate()\"></mt-rating></p> <!-- Componente de avaliação-->\r\n      <p [hidden]=\"!rated\"> <!-- Exibido apenas se a avaliação for setada (quando evento rated for emitido)-->\r\n        Obrigado pela sua avaliação!\r\n      </p>\r\n    </div>\r\n\r\n  </section>\r\n  <!-- FIM DO CONTEUDO -->"

/***/ }),

/***/ "./src/app/order-summary/order-summary.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
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

var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
    };
    OrderSummaryComponent.prototype.rate = function () {
        this.rated = true;
    };
    OrderSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-order-summary',
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/order-summary/order-summary.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/order/leave-order.guard.ts":
/*!********************************************!*\
  !*** ./src/app/order/leave-order.guard.ts ***!
  \********************************************/
/*! exports provided: LeaveOrderGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveOrderGuard", function() { return LeaveOrderGuard; });
//A interface CanDeactivate espera um tipo generico, que é o componente que sera associado com esse guard (Nesse caso o OrderComponent)
var LeaveOrderGuard = /** @class */ (function () {
    function LeaveOrderGuard() {
    }
    //Metodo de CanDeactivate
    //ActivatedRouteSnapshot - Representa a rota ativada (Atual)
    //RouterStateSnapshot - Arvore de Rotas (Todas rotas que foram acessadas antes da rota ativada)
    LeaveOrderGuard.prototype.canDeactivate = function (orderComponent, activatedRoute, routeState) {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGuard;
}());

//O metodo CanDeactivate deve ser associado a rota que contenha o componente (nesse caso em order.module)


/***/ }),

/***/ "./src/app/order/order.service.ts":
/*!****************************************!*\
  !*** ./src/app/order/order.service.ts ***!
  \****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/restaurant-detail/shopping-cart/shopping-cart.service */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.api */ "./src/app/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = /** @class */ (function () {
    function OrderService(cartService, http) {
        this.cartService = cartService;
        this.http = http;
    }
    //Pegando o valor total dos itens no carrinho
    OrderService.prototype.itemsValue = function () {
        return this.cartService.total();
    };
    //Listando itens do carrinho
    OrderService.prototype.cartItems = function () {
        return this.cartService.items;
    };
    //Aumentando quantidade do carrinho
    OrderService.prototype.increaseQty = function (item) {
        this.cartService.increaseQty(item);
    };
    //Diminuindo quantidade do carrinho
    OrderService.prototype.decreaseQty = function (item) {
        this.cartService.decreaseQty(item);
    };
    //Removendo item
    OrderService.prototype.remove = function (item) {
        this.cartService.removeItem(item);
    };
    //Limpando a compra
    OrderService.prototype.clear = function () {
        this.cartService.clear();
    };
    //Efetuando pagamento (O usuario precisa estar logado para ser efetuado)
    OrderService.prototype.checkOrder = function (order) {
        //Para essa requecisão ser efetuada é preciso passar o token de Authorization no Header
        //A adição desse Header esta sendo feita no HttpInterceptor (auth.interceptor.ts) - que interceptar todas requisições http, e trata as mesmas (adicionando ou auterando itens da requisição)
        return this.http.post(app_app_api__WEBPACK_IMPORTED_MODULE_4__["MEAT_API"] + "/orders", order)
            .pipe(//Utilizado para chamar operadores (filter, tap, map etc...)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (order) { return order.id; }) //Retornando o ID da compra
        );
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());

//Setando Header manualmente na requisição
// let headers = new HttpHeaders()
// if(this.loginService.isLoggedIn()){
//     headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
// }
// //Efetuando pagamento (Versão 4.0.0 para baixo do angular)
// checkOrder(order: Order): Observable<string>{
//     const headers = new Headers() //Tipo dos dados enviados para a API
//     headers.append('Content-Type', 'application/json')
//     return this.http.post(`${MEAT_API}/orders`, 
//                             JSON.stringify(order),
//                             new RequestOptions({headers:headers}))
//                     .map(respose => respose.json()) //Retornando resposta
//                     .map(order => order.id) //Retornando o ID da compra
// }


/***/ }),

/***/ "./src/app/restaurant-detail/menu-item/menu-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant-detail/menu-item/menu-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-item-info-box\" [@menuItemAppeared]=\"menuItemState\">\r\n  <span class=\"menu-item-info-box-icon\"><img [src]=\"menuItem.imagePath\"></span>\r\n\r\n  <div class=\"menu-item-info-box-content\">\r\n    <span class=\"menu-item-info-box-text\">{{menuItem.name}}</span>\r\n    <span class=\"menu-item-info-box-detail\">{{menuItem.description}}</span>\r\n    <span class=\"menu-item-info-box-price\">{{menuItem.price | currency: 'BRL': 'symbol'}}</span> <!-- Pipe para colocar como formato de moeda-->\r\n    <a (click) =\"emitAddEvent()\" class=\"\"><i class=\"fa fa-plus-circle\"></i> Adicionar</a> <!-- Evento de clique chama metodo-->\r\n  </div>\r\n  <!-- /.info-box-content -->\r\n</div>"

/***/ }),

/***/ "./src/app/restaurant-detail/menu-item/menu-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/menu-item/menu-item.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //EventEmitter e Output - trabalhar com eventos e eventos personalizados

var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.menuItemState = "ready";
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    //Adicionar o item no carrinho
    MenuItemComponent.prototype.emitAddEvent = function () {
        this.add.emit(this.menuItem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "menuItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "add", void 0);
    MenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/restaurant-detail/menu-item/menu-item.component.html"),
            animations: [
                //Animação de entrada na pagina
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuItemAppeared', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => ready', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-20px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/menu/menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/restaurant-detail/menu/menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INÍCIO DO MENU -->\r\n<div class=\"col-md-9 col-xs-12\">\r\n\r\n    <!-- Exibindo itens do menu-->\r\n    <mt-menu-item \r\n      *ngFor=\"let item of menu | async\" \r\n      [menuItem]=\"item\"\r\n      (add)=\"shoppingCart.addItem($event)\"></mt-menu-item> <!-- clicando em adicionar o objeto do componente sera enviado para o metodo--> \r\n</div>\r\n<div class=\"col-md-3 col-xs-12\">\r\n  <mt-shopping-cart #shoppingCart></mt-shopping-cart>\r\n</div>\r\n<!-- FIM DO MENU -->\r\n"

/***/ }),

/***/ "./src/app/restaurant-detail/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurant-detail/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menu = this.restaurantsService
            .menuOfRestaurant(this.route.parent.snapshot.params['id']); //Pegando os itens do menu
    };
    //Recebendo item adicionado (para o carrinho)
    MenuComponent.prototype.addMenuItem = function (item) {
        console.log(item);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/restaurant-detail/menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [app_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n\r\n  </h1>\r\n</section>\r\n\r\n\r\n<section class=\"content\">\r\n\r\n  <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-solid\">\r\n          <div class=\"box-header with-border\">\r\n            <i class=\"fa fa-home\"></i>\r\n\r\n            <!-- Esta sendo utilizado o ? depois de restaurant, para tornalo um parametro não obrigatorio, assim não dando erro caso demore a requisição para o backend -->\r\n            <h3 class=\"box-title\">{{restaurant?.name}}</h3><span class=\"pull-right\"><i class=\"fa fa-star\"></i> {{restaurant?.rating}}</span>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"col-sm-3 col-xs-12\" *ngIf=\"restaurant\"> <!-- Imagem ira aparecer apenas quando restaunt não for null-->\r\n              <img class=\"box-img-detail\" [src]=\"restaurant?.imagePath\" />\r\n            </div>\r\n\r\n            <dl class=\"col-sm-9 col-xs-12\">\r\n              <dt>Categoria</dt>\r\n              <dd>{{restaurant?.category}}</dd>\r\n              <dt>Quem somos</dt>\r\n              <dd>{{restaurant?.about}}</dd>\r\n              <dt>Horários</dt>\r\n              <dd>{{restaurant?.hours}}</dd>\r\n            </dl>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer detail-footer\">\r\n          <a class=\"pull-left\" routerLinkActive=\"detail-active\" [routerLink]=\"['menu']\"> <!-- Verificando qual esta ativo, para ativar rota filha-->\r\n             Menu\r\n          </a>\r\n          <a class=\"pull-right\" routerLinkActive=\"detail-active\" [routerLink]=\"['reviews']\"> <!-- Verificando qual esta ativo, para ativar rota filha-->\r\n             Avaliações\r\n          </a>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.col-xs-12 -->\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n</section>\r\n<!-- FIM DO CONTEÚDO -->\r\n"

/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RestaurantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailComponent", function() { return RestaurantDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Para pegar atributo da URL
 //Serviço que se comunica com o backend
var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantsService.restaurantById(this.route.snapshot.params['id']) //Pegando parametro ID da URL 
            .subscribe(function (restaurant) { return _this.restaurant = restaurant; });
    };
    RestaurantDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-restaurant-detail',
            template: __webpack_require__(/*! ./restaurant-detail.component.html */ "./src/app/restaurant-detail/restaurant-detail.component.html")
        }),
        __metadata("design:paramtypes", [_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/reviews/reviews.component.html":
/*!******************************************************************!*\
  !*** ./src/app/restaurant-detail/reviews/reviews.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INICIO DO CONTEUDO -->\r\n<div class=\"col-xs-12 col-sm-6\" *ngFor=\"let review of reviews | async\"> <!-- Pipe async ja faz uma subscrib do Observable-->\r\n\r\n  <div class=\"box box-solid\">\r\n    <div class=\"box-header with-border\">\r\n      <span class=\"review-score pull-right\"><i class=\"fa fa-star\"></i> {{review.rating}}</span>\r\n      <div class=\"user-block\">\r\n        <img *ngIf=\"review.rating < 3 \" alt=\"User Image\" class=\"img-circle\" src=\"assets/img/reactions/pissed.png\">\r\n        <img *ngIf=\"review.rating >= 3 && review.rating < 4 \" alt=\"User Image\" class=\"img-circle\" src=\"assets/img/reactions/soso.png\">\r\n        <img  *ngIf=\"review.rating >= 4 \" alt=\"User Image\" class=\"img-circle\" src=\"assets/img/reactions/loved.png\">\r\n        <span class=\"username\">{{review.name}}</span>\r\n        <span class=\"description\">{{review.date | date:'dd/MM/yyyy'}}</span> <!-- Papi data formata a hora recebida-->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"box-body\">\r\n      <p>{{review.comments}}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!--FIM DO CONTEUDO -->\r\n"

/***/ }),

/***/ "./src/app/restaurant-detail/reviews/reviews.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/restaurant-detail/reviews/reviews.component.ts ***!
  \****************************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //Para pegar o parametro da rota
var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.reviews = this.restaurantService
            .reviewsOfRestaurant(this.route.parent.snapshot.params['id']); //Pegando o parametro do componente pai
        //Não é feito o subscrib aqui por que ele esta sendo feito no Pipe async no html
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/restaurant-detail/reviews/reviews.component.html")
        }),
        __metadata("design:paramtypes", [_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/cart-item.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/cart-item.model.ts ***!
  \********************************************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(menuItem, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
    CartItem.prototype.value = function () {
        return this.menuItem.price * this.quantity;
    };
    return CartItem;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/shopping-cart.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INICIO DO CARRINHO-->\r\n<div class=\"box box-solid\">\r\n  <div class=\"box-header\">\r\n    <i class=\"fa fa-shopping-cart\"></i>\r\n\r\n    <h3 class=\"box-title\">Carrinho</h3>\r\n  </div>\r\n  <!-- /.box-header -->\r\n  <div class=\"box-body\">\r\n    <div *ngIf=\"!items().length\"> <!-- Carrinho ira aparecer apenas quando conter itens-->\r\n      <p class=\"text-center\">\r\n        Seu carrinho está vazio!\r\n      </p>\r\n    </div>\r\n    <div class=\"table-responsive\" *ngIf=\"items().length\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n          <tr *ngFor=\"let item of items()\" [@row]=\"rowState\"> <!-- Animação-->\r\n            <th>({{item.quantity}}x) {{item.menuItem.name}}</th>\r\n            <td class=\"text-right\">{{item.value() | currency: 'BRL': 'symbol'}}</td>\r\n            <td class=\"text-right\">\r\n              <a (click)=\"removeItem(item)\" class=\"btn btn-sm danger\"><i class=\"fa fa-remove\"></i></a>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>Total:</th>\r\n\r\n            <td class=\"text-right\">{{total() | currency: 'BRL': 'symbol'}}</td>\r\n          </tr>\r\n        </tbody></table>\r\n      </div>\r\n  </div>\r\n  <div class=\"box-footer\" *ngIf=\"items().length\">\r\n    <div class=\"pull-right\">\r\n      <button (click)=\"clear()\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i> Limpar</button>\r\n      <a [routerLink]=\"['/order']\" class=\"btn btn-success\"><i class=\"fa fa-credit-card\"></i> Fechar Pedido</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- FIM DO CARRINHO -->\r\n"

/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/shopping-cart.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Serviço de comunicação com backend

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.rowState = 'ready';
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    //Exibindo os itens do carrinho
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCartService.items;
    };
    //Exibindo o total do carrinho
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCartService.total();
    };
    //Limpar carrinho
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCartService.clear();
    };
    //Removendo item do carrinho
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.shoppingCartService.removeItem(item);
    };
    //Adicionando item ao carrinho
    ShoppingCartComponent.prototype.addItem = function (item) {
        this.shoppingCartService.addItem(item);
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.html"),
            //Com a nova compilação do angular 5 e 6, ele acaba tirando espaços em brancos , assim algumas vezez quebrando o CSS
            preserveWhitespaces: true,
            //Caso queira ativar esse atributo em todos componentes é preciso adicionar o preserveWhitespaces: true no arquivo main.ts
            //Ja para o ambiente de produção é preciso adicionar esse atributo em tsconfig.json 
            //Animações
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('row', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    //Adicionando item ao carrinho
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms 0s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0px)', offset: 1 }),
                    ]))),
                    //Removendo item do carrinho
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('ready => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 0s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(30px)', offset: 1 }),
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _cart_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-item.model */ "./src/app/restaurant-detail/shopping-cart/cart-item.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Serviço de compras



var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(notificationService) {
        this.notificationService = notificationService;
        this.items = []; //Coleção de items do carrinho
    }
    //Limpar carrinho
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    //Adicionar item ao carrinho
    ShoppingCartService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; }); //Metodo que verifica se o item ja esta no carrinho
        if (foundItem) {
            this.increaseQty(foundItem); //Aumentando a quantidade
        }
        else {
            this.items.push(new _cart_item_model__WEBPACK_IMPORTED_MODULE_0__["CartItem"](item)); //Adicionando item ao carrinho
        }
        this.notificationService.notify("Voc\u00EA adicionou o item " + item.name); //Exibindo a notificação (snackBar)
    };
    //Aumentando quantidade
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    //Diminuindo quantidade
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    };
    //Remover item do carrinho
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Voc\u00EA removeu o item " + item.menuItem.name); //Exibindo a notificação (snackBar)
    };
    //Somar total do carrinho
    ShoppingCartService.prototype.total = function () {
        return this.items
            .map(function (item) { return item.value(); }) //Percorendo todos valores de cada item (metodo value multiplica valor pela quantidade)
            .reduce(function (prev, value) { return prev + value; }, 0); //Somando cada valor (0 é o valor inicial)
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() //Todo serviço que recebe algo é marcado com injectable (notification)
        ,
        __metadata("design:paramtypes", [app_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/restaurants/item-restaurant/item-restaurant.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/restaurants/item-restaurant/item-restaurant.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/restaurants/', restaurant.id]\">\r\n  <div class=\"place-info-box\" [@restaurantAppeared]=\"restaurantState\"> <!-- Aplicando animação de entrada-->\r\n    <span class=\"place-info-box-icon\"><img [src]=\"restaurant.imagePath\" /></span>\r\n\r\n    <div class=\"place-info-box-content\">\r\n      <span class=\"place-info-box-text\">{{restaurant.name}}</span>\r\n      <span class=\"place-info-box-star\"><i class=\"fa fa-star\"></i> {{restaurant.rating}}</span>\r\n      <span class=\"place-info-box-detail\">{{restaurant.category}}</span>\r\n      <span class=\"place-info-box-detail\">{{restaurant.deliveryEstimate}}</span>\r\n    </div>\r\n    <!-- /.info-box-content -->\r\n  </div>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/restaurants/item-restaurant/item-restaurant.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurants/item-restaurant/item-restaurant.component.ts ***!
  \**************************************************************************/
/*! exports provided: ItemRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRestaurantComponent", function() { return ItemRestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //Necessario peger o decorate Input, para que outros componentes possão passar dados para esse

var ItemRestaurantComponent = /** @class */ (function () {
    function ItemRestaurantComponent() {
        this.restaurantState = 'ready';
    }
    ItemRestaurantComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemRestaurantComponent.prototype, "restaurant", void 0);
    ItemRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-item-restaurant',
            template: __webpack_require__(/*! ./item-restaurant.component.html */ "./src/app/restaurants/item-restaurant/item-restaurant.component.html"),
            animations: [
                //Animação de entrada na pagina
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('restaurantAppeared', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => ready', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translate(-30px, -10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ItemRestaurantComponent);
    return ItemRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.component.html":
/*!********************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INíCIO do CONTEÚDO -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n    Todos os Restaurantes\r\n    <a (click)=\"toggleSearch()\" class=\"search-link pull-right\"><i class=\"fa fa-search\"></i><!-- Icone Barra de busca-->\r\n      <span *ngIf=\"iptSearch.value\"><small>\"{{iptSearch.value}}\"</small></span> <!-- iptSearch é a referencia do input de pesquisa (ou seja, só ira aparecer quando tiver um valor no input-->\r\n    </a>\r\n  </h1>\r\n\r\n  <!-- Barra de busca -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 search-bar\" [@toggleSearch]=\"searchBarState\"> <!-- Escondida por padrão-->\r\n      <form [formGroup]=\"searchForm\">\r\n        <div class=\"form-group\"> <!-- Form Group-->\r\n          <input type=\"text\" #iptSearch formControlName=\"searchControl\" class=\"form-control\" placeholder=\"O que você esta procurando?\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section class=\"content\">\r\n\r\n  <div class=\"row\">\r\n          <div *ngFor=\"let restaurant of restaurants\" class=\"col-sm-6 col-xs-12\">\r\n            <mt-item-restaurant [restaurant]=\"restaurant\"></mt-item-restaurant>\r\n          </div>\r\n          <!-- Caso não retorne nenhum restaurante, ou não seja encontrado resultados para pesquisa, exibir abaixo-->\r\n          <div *ngIf=\"restaurants?.length === 0\" class=\"col-xs-12\">\r\n            <p class=\"lead text-center\">\r\n              Não foram encontrados itens para sua busca.\r\n            </p>\r\n          </div>\r\n  </div>\r\n\r\n</section>\r\n\r\n<!-- FIM  do CONTEÚDO -->\r\n"

/***/ }),

/***/ "./src/app/restaurants/restaurants.component.ts":
/*!******************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.ts ***!
  \******************************************************/
/*! exports provided: RestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsComponent", function() { return RestaurantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _restaurants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Importando serviço que se comunica com o banco


// from - Criar uma string atravez de um array


//switchMap - Substitui o observable
//tap - Executa algo antes do subscrib
//debounceTime - Coloca um tempo para para que outro observable seja chamado
//distinctUntilChanged - Evitando que o mesmo conteudo seja passado varias vezes
//catchError - tratamento de erro
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(restaurantsService, fb) {
        this.restaurantsService = restaurantsService;
        this.fb = fb;
        this.searchBarState = 'hidden';
    } //Recebendo serviço no contrutor
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Definindo formulario
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });
        //Filtrando restaurantes
        //valueChanges chama um evento toda vez que o campo é alterado (praticamente um event onChange)
        this.searchControl.valueChanges
            .pipe(//Utilizado para chamar operadores (filter, tap, map etc...)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), //Um evento é chamdo apenas 5 segundos depois do outro (evitando que seja feita uma requisição para o back a cada letra digitada)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), //Não deixar que a mesma pesquisa seja feita varias vezes (por exemplo, pesquisar doces, e depois rapidamente apagar e escrever de novo)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (searchTerm) {
            return _this.restaurantsService
                .restaurants(searchTerm) //switchMap substitui o Observable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])([]); }));
        } //Caso não de erro retornar array vazio
        ))
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; }); //Definindo o restaurants como os restaurantes pesquisados
        //Pegando todos restaurantes
        this.restaurantsService.restaurants()
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; }); //subscribe efetua a requisição http do metodo do serviço para pegar os dados
    };
    //Metodo para aparecer barra de pesquisa
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-restaurants',
            template: __webpack_require__(/*! ./restaurants.component.html */ "./src/app/restaurants/restaurants.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('toggleSearch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        "max-height": "0px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        "max-height": "70px",
                        "margin-top": "20px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms 0s ease-in-out')) //'* => *' = de qualquer um para qualquer um
                ])
            ]
        }),
        __metadata("design:paramtypes", [_restaurants_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.service.ts":
/*!****************************************************!*\
  !*** ./src/app/restaurants/restaurants.service.ts ***!
  \****************************************************/
/*! exports provided: RestaurantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsService", function() { return RestaurantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Serviço que ira se comunicar com o backend
 //Como sera recebido outro serviço (http) é preciso o injectable
 //Para receber requisição http (Get, Post etc...)
 //API de conexão com o backend
var RestaurantsService = /** @class */ (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    //Metodo para pegar todos restaurantes / ou listar o restaurante pela pesquisa
    RestaurantsService.prototype.restaurants = function (search) {
        var params = undefined;
        if (search) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', search); //Passando parametros para o backend
        }
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants", { params: params }); //Requisição http // passando parametro para servidor pesquisar (json-serve aceita um parametro generico "g" para pesquisar geral)
    };
    //Metodo para pegar restaurante por ID
    RestaurantsService.prototype.restaurantById = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants/" + id);
    };
    //Trazendo os reviews do restaurante
    RestaurantsService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants/" + id + "/reviews");
    };
    //Pegando item do cardapio do menu
    RestaurantsService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants/" + id + "/menu");
        //Versão 4.0.0 pra baixo precisa dos comandos abaixo para fazer requisição
        // .map(response => response.json())//Convertendo resposta em json
        // .catch(ErrorHandler.handleError) //tratamento de erro
    };
    RestaurantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestaurantsService);
    return RestaurantsService;
}());



/***/ }),

/***/ "./src/app/security/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/app/security/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector //Injector é referencia para o mecanismo de dependencia do angular ( atraves dele pode obter qualquer objeto dentro do conteniner de dependencia) 
    ) {
        this.injector = injector; //Injector é referencia para o mecanismo de dependencia do angular ( atraves dele pode obter qualquer objeto dentro do conteniner de dependencia) 
    }
    //request - é a requisição que sera modificada (adicionando um header, modificando algo etc...)
    //next - representa o proximo intercept a ser executado ou a chamada final para finalmente efetuar a requisição para o backend
    AuthInterceptor.prototype.intercept = function (request, next) {
        var loginService = this.injector.get(_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]); //Pegando a referencia de LoginService e suas dependencias pelo Injector
        //Se o usuario estiver logado, sera passado dentro do Header o token de Authorization, para efetuar o pedido de compra
        if (loginService.isLoggedIn()) {
            //A requisição é imutavel - por tando antes de modifica-la é preciso clona-la
            var authRequest = request.clone({
                setHeaders: { 'Authorization': "Bearer " + loginService.user.accessToken } //Adicionando Header na requisição clonada
            });
            return next.handle(authRequest); //Retornando requisição alterada
        }
        else {
            return next.handle(request); //Chamando o proximo intercept, ou efetuar a requisição caso seja o ultimo intercept
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] //Injector é referencia para o mecanismo de dependencia do angular ( atraves dele pode obter qualquer objeto dentro do conteniner de dependencia) 
        ])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/security/loggedin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/security/loggedin.guard.ts ***!
  \********************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/app/security/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Metodos de segurança do login
//Diferença CanLoad e CanActivate 
//CanLoad - Tratamentos antes de carregar o modulo
//CanActivate - Tratamentos com o modulo ja carregado, efetuado toda vez que entrar no mesmo
var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(loginService) {
        this.loginService = loginService;
    }
    //Metodo para verificar se o usuario esta autenticado
    LoggedInGuard.prototype.checkAuthentication = function (path) {
        //Verificando se o usuario esta logado
        var loggedIn = this.loginService.isLoggedIn();
        if (!loggedIn) {
            this.loginService.hadleLogin("/" + path); //Passando rota para ser navegada após o login
        }
        return loggedIn; //Se o usuario estiver logado sera retorando True, assim liberando o carregamento do modulo
    };
    //Metodo de CanLoad
    //Associado com rotas LoadChildrem (Decidindo se o modulo carregado de maneira tardia, sera mesmo carregado levando alguma condição em questão)
    LoggedInGuard.prototype.canLoad = function (route) {
        return this.checkAuthentication(route.path);
    };
    //Metodo de CanActivate
    //ActivatedRouteSnapshot - Representa a rota ativada (Atual)
    //RouterStateSnapshot - Arvore de Rotas (Todas rotas que foram acessadas antes da rota ativada)
    LoggedInGuard.prototype.canActivate = function (activatedRoute, routeState) {
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/security/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\r\n<section class=\"content login-content\" style=\"margin: 10% auto\">\r\n  <div class=\"login-logo\">\r\n       <b>MEAT</b> | Login\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-offset-3 col-sm-6 login-box-body\">\r\n  <p class=\"login-box-msg\">Por favor, efetue o login para continuar</p>\r\n\r\n  <form [formGroup] = \"loginForm\">\r\n    <mt-input-container [showTip]=\"false\">\r\n      <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n      <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n    </mt-input-container>\r\n    <mt-input-container [showTip]=\"false\">\r\n      <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n      <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n    </mt-input-container>\r\n    <div class=\"row\">\r\n      <!-- /.col -->\r\n      <div class=\"col-xs-offset-8 col-xs-4\">\r\n        <button type=\"submit\" [disabled]=\"loginForm.invalid\" (click)=\"login()\" class=\"btn btn-primary btn-block btn-flat\">Entrar</button>\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n  </form>\r\n  </div>\r\n</section>\r\n<!-- FIM DO CONTEÚDO -->"

/***/ }),

/***/ "./src/app/security/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/security/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/security/login/login.service.ts");
/* harmony import */ var app_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(fb, loginService, notificationService, activatedRoute, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        //Pegando caminho a ser navegado após efetuar o login
        //Esse caminho é passado em loggedin.guard pelo metodo hadleLogin() de login.service
        //Esse pagametro é pego atravez do proprio Router (Quando é passado para redirecionar para o login tambem é passado o caminho proximo a ser redirecionado)
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
    };
    //Metodo para efetuar login
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (user) { _this.notificationService.notify("Bem vindo, " + user.name); }, function (error) { _this.notificationService.notify(error.error.message); }, 
        //O terceiro metodo do subscribe é executado apos a finalização do Observable
        function () { _this.router.navigate([atob(_this.navigateTo)]); } // atob - decodifica o caminho que foi codificado em btoa //Navegando para proxima pagina apos efetuar o login
        );
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            app_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/security/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/security/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.api */ "./src/app/app.api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Serviços para efetuar login





var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        //Pegando a URL da pagina que o usuario esta acessando (Para o usuario ser redirecionada para mesma apos efetuar o login)
        this.router.events
            .pipe(//Utilizado para chamar operadores (filter, tap, map etc...)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }))
            .subscribe(function (event) { return _this.lastUrl = event.url; });
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.user !== undefined;
    };
    //Metodo para efetuar o login, retornando assim o token
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_3__["MEAT_API"] + "/login", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) { return _this.user = user; }) //Salvando usuario em memoria
        );
    };
    //Metodo para redirecionar para tela de login
    //path é o caminha que sera aberto após efetuar o login
    LoginService.prototype.hadleLogin = function (path) {
        if (path === void 0) { path = this.lastUrl; }
        this.router.navigate(['/login', btoa(path)]); //btoa - codificando a url, para aparecer melhor para o usuario
    };
    //Metodo para desconectar usuario
    LoginService.prototype.logout = function () {
        this.user = undefined;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/input/input.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/input/input.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- A classe success é aplicada caso o input seja valido e o campo seja clicado ou digitado -->\r\n<div class=\"form-group has-feedback\" [class.has-success]=\"hasSuccess()\"\r\n                        [class.has-error]=\"hasError()\"> \r\n  <label class=\"control-label sr-only\" for=\"inputSuccess\"><i class=\"fa fa-check\"></i> {{label}}</label>\r\n\r\n  <ng-content></ng-content> <!-- Sera passado o input do formulario por aqui-->\r\n\r\n  <span class=\"help-block\" *ngIf=\"showTip && hasSuccess()\"><i class=\"fa fa-check\"></i> Ok</span> <!-- Mensagem exibida quando campo esta valido-->\r\n  <span class=\"help-block\" *ngIf=\"showTip && hasError()\"><i class=\"fa fa-check\"></i> {{errorMessage}}</span> <!-- Mensagem exibida quando campo esta invalido-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/input/input.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.showTip = true;
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
        }
    };
    //Metodo que retorna se o input esta valido
    InputComponent.prototype.hasSuccess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    //Metodo que retorna se o input esta invalido
    InputComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "showTip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"] //Referencia do NgModel, para referenciar os inputs para o form de order
        //Ou trabalhando com FormControl
        )
    ], InputComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"])
    ], InputComponent.prototype, "control", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-input-container',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/shared/input/input.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/shared/messages/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/messages/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
//Serviço para o componente de notificação ser usado por outros componetes

var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //Atributo que é um evento, que sera disparado quando for passado uma mensagem
    }
    NotificationService.prototype.notify = function (message) {
        this.notifier.emit(message); //disparando o evento mensagem, quando for passado para para o serviço (assim passando um observable para o componente snackbar)
    };
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/messages/snackbar/snackbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snackbar{\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n    background-color: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n}"

/***/ }),

/***/ "./src/app/shared/messages/snackbar/snackbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"snackbar\" [@snack-visibility]=\"snackVisibility\"> <!-- O estado da animação sera o valor do atributo snackVisibility-->\r\n  {{message}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/messages/snackbar/snackbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.ts ***!
  \****************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(notificationService) {
        this.notificationService = notificationService;
        this.message = 'Helo there!';
        this.snackVisibility = 'hidden'; //Atributo definindo o stado inicial da animação
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notifier //Quando for enviada uma mensagem pelo serviço sera disparada essa função
            .pipe(//Pipe é Utilizado para chamar operadores (filter, tap, map etc...)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (message) {
            _this.message = message;
            _this.snackVisibility = 'visible';
        }), 
        //Timer, depois de 3 segundos ele volta para hidden, assim escondendo o snackBar
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (message) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(3000); }) //switchmap troca o observable quando são chamados varios em seguida, ou seja, o timer ira ser zerado 
        )
            .subscribe(function (timer) { return _this.snackVisibility = "hidden"; });
    };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/shared/messages/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.css */ "./src/app/shared/messages/snackbar/snackbar.component.css")],
            animations: [
                //Animações são definidas em trigger
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('snack-visibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        bottom: "0px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        bottom: "30px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-out')) //ease-out = mais rapido no final
                ])
            ]
        }),
        __metadata("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/radio/radio.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/radio/radio.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let option of options\">\r\n    <label>\r\n      <div (click)=\"setValue(option.value)\" class=\"iradio_flat-red\" [class.checked]=\"option.value === value\" aria-checked=\"false\" aria-disabled=\"false\"\r\n          style=\"position: relative;\"> <!-- Se o value de option for o mesmo que o do compoente, aplica classe css checked (para checkar o radio)-->\r\n          \r\n          <ins class=\"iCheck-helper\" style=\"position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins>\r\n      </div>\r\n      {{option.label}}\r\n    </label>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/shared/radio/radio.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/radio/radio.component.ts ***!
  \*************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
    }
    RadioComponent_1 = RadioComponent;
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.setValue = function (value) {
        this.value = value;
        this.onChange(this.value);
    };
    RadioComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    RadioComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioComponent.prototype.registerOnTouched = function (fn) {
    };
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    RadioComponent.prototype.setDisabledState = function (isDisabled) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RadioComponent.prototype, "options", void 0);
    RadioComponent = RadioComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/shared/radio/radio.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RadioComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
    var RadioComponent_1;
}());



/***/ }),

/***/ "./src/app/shared/rating/rating.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Exibindo cada estrela -->\r\n<i *ngFor=\"let r of rates\" class=\"fa\"\r\n    [class.fa-star]=\"r <= rate\" [class.fa-star-o]=\"r > rate\"\r\n    (click)=\"setRate(r)\"\r\n    (mouseenter)=\"setTemporaryRate(r)\"\r\n    (mouseleave)=\"clearTemporaryRate(r)\">\r\n\r\n<!-- Quando for clicado na estrela, sera chamado um metodo que ira definir o valor da avaliação como o numero da estrela\r\nse o valor da estrela for maior que a avaliação sera aplicada a classe (class.fa-star-o) que é uma estrela vazia -->\r\n\r\n<!-- (mouseenter) = evento que chama um metodo quando passa o mouse por cima da estrela\r\n     (mouseleave) = evento que chama um metodo quando tira o mouse de cima -->\r\n"

/***/ }),

/***/ "./src/app/shared/rating/rating.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/rating/rating.component.ts ***!
  \***************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //Atributo que é diponibilizado para o componete pai
        this.rates = [1, 2, 3, 4, 5]; // Declarando cada estrela
        this.rate = 0; //Valor da avaliação (de 0 a 5)
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    //Metodo que ira definir a nota da avaliação (quantidade de estrelas) quando clicar
    RatingComponent.prototype.setRate = function (r) {
        this.rate = r;
        this.previousRate = undefined;
        this.rated.emit(r); //Passando evento que a avaliação foi setada para o elemento pai
    };
    //Ira definir a estrela quando passar o mouse por cima
    RatingComponent.prototype.setTemporaryRate = function (r) {
        if (this.previousRate === undefined) {
            this.previousRate = this.rate;
        }
        this.rate = r;
    };
    //Voltar para o valor da avaliação original quando tirar o mouse das estrelas
    RatingComponent.prototype.clearTemporaryRate = function (r) {
        if (this.previousRate !== undefined) {
            this.rate = this.previousRate;
            this.previousRate = undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "rated", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/shared/rating/rating.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ "./src/app/shared/input/input.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/shared/radio/radio.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/shared/rating/rating.component.ts");
/* harmony import */ var _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/snackbar/snackbar.component */ "./src/app/shared/messages/snackbar/snackbar.component.ts");
/* harmony import */ var app_restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/restaurant-detail/shopping-cart/shopping-cart.service */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var app_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
/* harmony import */ var app_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/order/order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _messages_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var app_security_login_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/security/login/login.service */ "./src/app/security/login/login.service.ts");
/* harmony import */ var app_security_loggedin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/security/loggedin.guard */ "./src/app/security/loggedin.guard.ts");
/* harmony import */ var app_order_leave_order_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/order/leave-order.guard */ "./src/app/order/leave-order.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/security/auth.interceptor */ "./src/app/security/auth.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modulo shared (Para compartilhar com outros modulos)
//Modulo não referenciado em app.modulo.ts, que é carregado aparte

//Dependencias que precisam ser importadas


//Componentes que seram compartilhados com outros modulos




//Providers







//HtppIntercptor - Intercepta requisições http
 //Token que deve ser referenciado no intercpt

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    //Exportando os serviços
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                app_restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"],
                app_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_8__["RestaurantsService"],
                app_order_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"],
                _messages_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
                app_security_login_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"],
                app_security_loggedin_guard__WEBPACK_IMPORTED_MODULE_12__["LoggedInGuard"],
                app_order_leave_order_guard__WEBPACK_IMPORTED_MODULE_13__["LeaveOrderGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: app_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true } //Intercept
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _radio_radio_component__WEBPACK_IMPORTED_MODULE_4__["RadioComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"], _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"]],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _radio_radio_component__WEBPACK_IMPORTED_MODULE_4__["RadioComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"], _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] //Definindo dependencias que seram compatilhadas com outros modulos(assim os outros modulos não precisaram importar essas dependencias)
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
//Personalizando variaveis de ambiente no desenvolvimento
var environment = {
    production: false,
    api: 'https://localhost:3001'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");
//import './polyfills.ts';




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
// platformBrowserDynamic().bootstrapModule(AppModule, {preserveWhitespaces: true});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dezje\Documents\GitHub\Curso-Angular\3- Aplicação MEAT\meat-app-starter-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map