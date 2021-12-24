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
exports.CategoriesController = void 0;
var common_1 = require("@nestjs/common");
var CategoriesController = /** @class */ (function () {
    function CategoriesController() {
    }
    CategoriesController.prototype.getCategoryFilter = function () {
        return 'Yo soy un Filter';
    };
    CategoriesController.prototype.getAll = function (limit, offset) {
        if (limit === void 0) { limit = 100; }
        if (offset === void 0) { offset = 0; }
        return {
            message: "Categories: limit => ".concat(limit, " y offset => ").concat(offset)
        };
    };
    CategoriesController.prototype.getCategory = function (categoryId, productId) {
        return "Category: ".concat(categoryId, " y Product ").concat(productId);
    };
    CategoriesController.prototype.getOne = function (categoryId) {
        return "Category ".concat(categoryId);
    };
    CategoriesController.prototype.create = function (payload) {
        return {
            message: 'Accion para crear Category',
            payload: payload
        };
    };
    CategoriesController.prototype.update = function (id, payload) {
        return {
            id: id,
            payload: payload
        };
    };
    CategoriesController.prototype["delete"] = function (id) {
        return {
            message: 'Eliminar Category',
            id: id
        };
    };
    __decorate([
        (0, common_1.Get)('/filter')
    ], CategoriesController.prototype, "getCategoryFilter");
    __decorate([
        (0, common_1.Get)(''),
        __param(0, (0, common_1.Query)('limit')),
        __param(1, (0, common_1.Query)('offset'))
    ], CategoriesController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)('/:categoryId/products/:productId'),
        __param(0, (0, common_1.Param)('categoryId')),
        __param(1, (0, common_1.Param)('productId'))
    ], CategoriesController.prototype, "getCategory");
    __decorate([
        (0, common_1.Get)('/:categoryId'),
        __param(0, (0, common_1.Param)('categoryId'))
    ], CategoriesController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], CategoriesController.prototype, "create");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CategoriesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategoriesController.prototype, "delete");
    CategoriesController = __decorate([
        (0, common_1.Controller)('categories')
    ], CategoriesController);
    return CategoriesController;
}());
exports.CategoriesController = CategoriesController;
