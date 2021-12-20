"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.getProductFilter = function () {
        return 'Yo soy un Filter';
    };
    // @Get('products')
    // getProducts(@Query() params: any) {
    //   const { limit, offset } = params;
    //   return `products: limit => ${limit} y offset =${offset}`;
    // }
    ProductsController.prototype.getAll = function (limit, offset, brand) {
        if (limit === void 0) { limit = 100; }
        if (offset === void 0) { offset = 0; }
        return {
            message: "products: limit => ".concat(limit, ", offset => ").concat(offset, " y brand => ").concat(brand)
        };
    };
    // @Get('/:productId')
    // getOne(@Param() params: any): string {
    //   return `product ${params.productId}`;
    // }
    ProductsController.prototype.getOne = function (productId) {
        return "product ".concat(productId);
    };
    ProductsController.prototype.create = function (payload) {
        return {
            message: 'accion para crear',
            payload: payload
        };
    };
    ProductsController.prototype.update = function (id, payload) {
        return {
            id: id,
            payload: payload
        };
    };
    ProductsController.prototype["delete"] = function (id) {
        return {
            message: 'Eliminar producto',
            id: id
        };
    };
    __decorate([
        (0, common_1.Get)('/filter')
    ], ProductsController.prototype, "getProductFilter");
    __decorate([
        (0, common_1.Get)(''),
        __param(0, (0, common_1.Query)('limit')),
        __param(1, (0, common_1.Query)('offset')),
        __param(2, (0, common_1.Query)('brand'))
    ], ProductsController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)('/:productId'),
        __param(0, (0, common_1.Param)('productId'))
    ], ProductsController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ProductsController.prototype, "create");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ProductsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "delete");
    ProductsController = __decorate([
        (0, common_1.Controller)('products')
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
