(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/order/delivery-costs/delivery-costs.component.html":
/*!********************************************************************!*\
  !*** ./src/app/order/delivery-costs/delivery-costs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <tbody><tr>\r\n      <th style=\"width:50%\">Itens:</th>\r\n      <td class=\"text-right\">{{itemsValue | currency : 'BRL': 'symbol' }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Frete:</th>\r\n      <td class=\"text-right\">{{delivery | currency: 'BRL': 'symbol'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Total:</th>\r\n      <td class=\"text-right\">{{total() | currency: 'BRL': 'symbol'}}</td>\r\n    </tr>\r\n  </tbody></table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/order/delivery-costs/delivery-costs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/order/delivery-costs/delivery-costs.component.ts ***!
  \******************************************************************/
/*! exports provided: DeliveryCostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryCostsComponent", function() { return DeliveryCostsComponent; });
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

var DeliveryCostsComponent = /** @class */ (function () {
    function DeliveryCostsComponent() {
    }
    DeliveryCostsComponent.prototype.ngOnInit = function () {
    };
    //Total da compra, frete + itens
    DeliveryCostsComponent.prototype.total = function () {
        return this.delivery + this.itemsValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeliveryCostsComponent.prototype, "delivery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeliveryCostsComponent.prototype, "itemsValue", void 0);
    DeliveryCostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-delivery-costs',
            template: __webpack_require__(/*! ./delivery-costs.component.html */ "./src/app/order/delivery-costs/delivery-costs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryCostsComponent);
    return DeliveryCostsComponent;
}());



/***/ }),

/***/ "./src/app/order/order-items/order-items.component.html":
/*!**************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" *ngIf=\"items.length === 0\">\r\n  <p>\r\n    Não há itens no seu carrinho. Que tal começar por <a [routerLink]=\"['/restaurants']\">aqui</a>\r\n  </p>\r\n</div>\r\n<div class=\"col-xs-12 table-responsive\" *ngIf=\"items.length > 0\">\r\n\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"text-center\">Quantidade</th>\r\n        <th>Item</th>\r\n        <th>Descrição</th>\r\n        <th class=\"text-right\">Subtotal</th>\r\n        <th class=\"text-right\"></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of items\">\r\n        <td class=\"text-center\">\r\n          <a (click)=\"emitDecreaseQty(item)\" class=\"btn btn-sm\"><i class=\"fa fa-minus\"></i></a> <!-- Botão para aumentar-->\r\n          {{item.quantity}}\r\n          <a (click)=\"emitIncreaseQty(item)\" class=\"btn btn-sm\"><i class=\"fa fa-plus\"></i></a> <!-- Botão para diminuir-->\r\n        </td>\r\n        <td>{{item.menuItem.name}}</td>\r\n\r\n        <td>{{item.menuItem.description}}</td>\r\n        <td class=\"text-right\">{{item.value() | currency: 'BRL': 'symbol'}}</td>\r\n        <td class=\"text-right\">\r\n          <a (click)=\"emitRemove()\" class=\"btn btn-sm danger\"><i class=\"fa fa-remove\"></i></a> <!-- Botão para remover-->\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>"

/***/ }),

/***/ "./src/app/order/order-items/order-items.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.ts ***!
  \************************************************************/
/*! exports provided: OrderItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function() { return OrderItemsComponent; });
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

var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent() {
        //Output - enviar dados para outro componente
        this.increaseQty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //Almentando a quantidade do item
        this.decreaseQty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //Diminuindo a quantidade do item
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //Removendo o item
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
    };
    //Metodo para aumentar quantidade do item
    OrderItemsComponent.prototype.emitIncreaseQty = function (item) {
        this.increaseQty.emit(item);
    };
    //Metodo para diminuir a quantidade do item
    OrderItemsComponent.prototype.emitDecreaseQty = function (item) {
        this.decreaseQty.emit(item);
    };
    //Metodo para remover o item
    OrderItemsComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OrderItemsComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "increaseQty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "decreaseQty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "remove", void 0);
    OrderItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-order-items',
            template: __webpack_require__(/*! ./order-items.component.html */ "./src/app/order/order-items/order-items.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INICIO DO CONTEUDO-->\r\n<section class=\"content-header\">\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <section class=\"invoice\">\r\n\r\n      <!--{{form.valid}}--> <!-- Exibindo se o formulario é valido, por exemplo (Se um campo for required e ele estiver vazio, o valor é false)-->\r\n      <!--{{form.value | json}}--> <!-- Valores do inputs do formulario-->\r\n\r\n        <!-- novalidate desativa a validação padrão do formulario -->\r\n        <!-- <form #form= \"ngForm\" novalidate> Aplica por padrão a diretiva ngForm (para pegar valor do form , os campos do form etc) -->\r\n        <form [formGroup] = \"orderForm\" novalidate> <!-- Defivindo o formulario como formGroup-->\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <h2 class=\"page-header\">\r\n                <i class=\"fa fa-shopping-cart\"></i> Finalize o seu pedido\r\n              </h2>\r\n            </div>\r\n          </div>       \r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm9\">\r\n              <p class=\"lead\">Seus Dados:</p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-3\">\r\n                <span class=\"help-block pull-right has-error-block\" *ngIf=\"orderForm.hasError('emailsNotMatch')\"><i class=\"fa fa-check\"></i> Email-s não conferem</span> <!-- --> \r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n                <mt-input-container errorMessage=\"Campo obrigatorio e com 5 caracteres\" label=\"Nome\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Nome\" autocomplete=\"off\"> <!-- ngModel alteração de duas mãos, minlength tamanho minimo do campo-->\r\n                </mt-input-container>\r\n            </div>\r\n            <div class=\"col-sm-3 col-xs-6\">\r\n                <mt-input-container errorMessage=\"E-mail invalido\" label=\"E-mail\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"email\" autocomplete=\"off\" placeholder=\"E-mail\"> <!-- ngModel alteração de duas mãos, minlength tamanho minimo do campo-->\r\n                </mt-input-container>\r\n            </div>\r\n            <div class=\"col-sm-3 col-xs-6\">\r\n                <mt-input-container errorMessage=\"E-mail invalido\" label=\"Confirmação do e-mail\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"emailConfirmation\" placeholder=\"Confirmação do e-mail\" autocomplete=\"off\"> <!-- ngModel alteração de duas mãos, minlength tamanho minimo do campo-->\r\n                </mt-input-container>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <p class=\"lead\">Endereço de Entrega:</p>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <!-- Passando atributos e o input para o componente input-->\r\n              <mt-input-container errorMessage=\"Campo obrigatorio e com 5 caracteres\" label=\"Endereço\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Endereço\" autocomplete=\"off\"> <!-- ngModel alteração de duas mãos, minlength tamanho minimo do campo-->\r\n              </mt-input-container>\r\n            </div>\r\n            <div class=\"col-sm-3 col-xs-6\">\r\n              <mt-input-container errorMessage=\"Obrigatorio e somente numeros\" label=\"Numbero\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"number\" placeholder=\"Número\" autocomplete=\"off\"> <!-- Em pattern você coloca expressões regulares para validar os dados digitados, como por exemplo, validar um cpf, aceitar só numeros etc...-->\r\n              </mt-input-container>\r\n            </div>\r\n            <div class=\"col-sm-3 col-xs-6\">\r\n              <mt-input-container>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"optionalAddress\" placeholder=\"Complemento\" autocomplete=\"off\">\r\n              </mt-input-container>\r\n            </div>\r\n            <!-- /.col -->\r\n          </div>\r\n          <!-- /.row -->\r\n\r\n          <!-- Table row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <p class=\"lead\">Itens do Pedido:</p>\r\n            </div>\r\n            \r\n            <mt-order-items [items]=\"cartItems()\"\r\n                (increaseQty)=\"increaseQty($event)\"\r\n                (decreaseQty)=\"decreaseQty($event)\"\r\n                (remove)=\"remove($event)\"></mt-order-items>\r\n\r\n            <!-- /.col -->\r\n          </div>\r\n          <!-- /.row -->\r\n\r\n          <div class=\"row\">\r\n            <!-- accepted payments column -->\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <p class=\"lead\">Formas de Pagamento:</p>\r\n\r\n                <div class=\"form-group\">\r\n                   <mt-radio [options]='paymentOptions' formControlName=\"paymentOption\"></mt-radio > <!-- Componente de raio (Passando opções de pagamento-->\r\n                </div>\r\n\r\n            </div>\r\n            <!-- /.col -->\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <p class=\"lead\">Frete e Total:</p>\r\n\r\n              <!-- Componente de frete-->\r\n              <mt-delivery-costs \r\n                [delivery]=\"delivery\"\r\n                [itemsValue]=\"itemsValues()\"></mt-delivery-costs> <!--Passando atributos para o componete-->\r\n                \r\n            </div>\r\n            <!-- /.col -->\r\n          </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <!-- Clicando sera enviado o valor do do form (atributos) para o metodo-->\r\n            <button (click)=\"checkOrder(orderForm.value)\" href=\"order-summary.html\" \r\n                    class=\"btn btn-success pull-right\" [disabled]=\"!orderForm.valid || cartItems().length === 0\"> <!-- caso formulario não seja valido, desabilitar-->\r\n              <i class=\"fa fa-credit-card\"></i> Concluir Pedido\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n    </section>\r\n</section>\r\n<!-- FIM DO CONTEUDO-->\r\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.model */ "./src/app/order/order.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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






var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, router, formBuilder) {
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
        //Validadores
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        this.delivery = 8; //Valor do frete
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão Refeição', value: 'REF' }
        ];
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.prototype.ngOnInit = function () {
        //Controle de formulario
        this.orderForm = this.formBuilder.group({
            //No FormBuilder como padrão, os validadores são executados sempre quando um novo caracter é digitado (Atraves do evento onChange)
            //Com o FormControl no angular 5 e 6 esse comportamento pode ser alterado, executando por exemplo a execução do validados apenas no submit
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)],
                updateOn: 'blur' //Executar validador apenas no evento blur (Quando é tirado o foco do input)
            }),
            email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]),
            emailConfirmation: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]),
            address: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            number: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.numberPattern)]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        }, { validator: OrderComponent_1.equalsTo }); //Passando validador personalizado
        //Caso queira alterar o comportamento da execução de todos validators pode declarar o formulario interifo como FormControl (Como o exemplo abaixo)
        // this.orderForm = new FormControl({
        //   name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        //   email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]), 
        //   emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)])
        // }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'})
    };
    //Validação personalizada, confirmação de email
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true }; //Passando a chave para mostrar que os emails não são iguais
        }
        return undefined;
    };
    //Metodo para pegar o valor total dos itens
    OrderComponent.prototype.itemsValues = function () {
        return this.orderService.itemsValue();
    };
    //Pegando itens do carrinho
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    //Aumentando quantidade
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    //Diminuindo quantidade
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    //Removendo item
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    //Metodo usado pelo CanDeactivate(leave-order.guard.ts) para verificar se o pedido foi finalizado
    OrderComponent.prototype.isOrderCompleted = function () {
        return this.orderId !== undefined;
    };
    //Metodo para efetuar pagamento
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.cartItems().map(function (item) { return new _order_model__WEBPACK_IMPORTED_MODULE_2__["OrderItem"](item.quantity, item.menuItem.id); }); //Pegando cada item do carrinho, e transformando em OrdemItem para o pagamento
        this.orderService.checkOrder(order) //Serviço para mandar para o back
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (orderId) {
            _this.orderId = orderId; //Setando o orderId para identificar que o pedido foi concluido
        }))
            .subscribe(function (orderId) {
            _this.router.navigate(['/order-summary']); //Navegando para pagina de sucesso
            _this.orderService.clear(); //Limpar itens do pedido
        }, function () { });
    };
    OrderComponent = OrderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html")
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], OrderComponent);
    return OrderComponent;
    var OrderComponent_1;
}());



/***/ }),

/***/ "./src/app/order/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/order/order.model.ts ***!
  \**************************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
//Classes para o pagamento
//Dados da compra
var Order = /** @class */ (function () {
    function Order(address, number, optionalAddress, paymentOption, orderItems, //Na compra tera um array de itens
    id) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
//Items da compra, é enviado para o back apenas a quantidade e o id do item
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-items/order-items.component */ "./src/app/order/order-items/order-items.component.ts");
/* harmony import */ var _delivery_costs_delivery_costs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-costs/delivery-costs.component */ "./src/app/order/delivery-costs/delivery-costs.component.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leave_order_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-order.guard */ "./src/app/order/leave-order.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modulo da compra, separado do modulo principal (app.module.ts) (Feature module)
//Carregado apenas quando é chamado

//Componentes do modulo



//Dependecias


//Guard

//Rotas desse modulo
var ROUTES = [
    { path: '', component: _order_component__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"],
        canDeactivate: [_leave_order_guard__WEBPACK_IMPORTED_MODULE_6__["LeaveOrderGuard"]] //Associando o CanDeactivate na rota para exibir uma mensagem de confirmação caso usuario saia sem salvar o pedido
    },
];
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_order_component__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"], _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_2__["OrderItemsComponent"], _delivery_costs_delivery_costs_component__WEBPACK_IMPORTED_MODULE_3__["DeliveryCostsComponent"]],
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(ROUTES)],
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map