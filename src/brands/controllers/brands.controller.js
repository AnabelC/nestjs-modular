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
exports.BrandsController = void 0;
var common_1 = require("@nestjs/common");
var BrandsController = /** @class */ (function () {
    function BrandsController() {
    }
    BrandsController.prototype.getBrandFilter = function () {
        return 'Yo soy un Filter';
    };
    BrandsController.prototype.getAll = function (limit, offset) {
        if (limit === void 0) { limit = 100; }
        if (offset === void 0) { offset = 0; }
        return {
            message: "brands: limit => ".concat(limit, " y offset => ").concat(offset)
        };
    };
    BrandsController.prototype.getOne = function (brandId) {
        return "Brand ".concat(brandId);
    };
    BrandsController.prototype.create = function (payload) {
        return {
            message: 'Accion para crear Brand',
            payload: payload
        };
    };
    BrandsController.prototype.update = function (id, payload) {
        return {
            id: id,
            payload: payload
        };
    };
    BrandsController.prototype["delete"] = function (id) {
        return {
            message: 'Eliminar brand',
            id: id
        };
    };
    __decorate([
        (0, common_1.Get)('/filter')
    ], BrandsController.prototype, "getBrandFilter");
    __decorate([
        (0, common_1.Get)(''),
        __param(0, (0, common_1.Query)('limit')),
        __param(1, (0, common_1.Query)('offset'))
    ], BrandsController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)('/:brandId'),
        __param(0, (0, common_1.Param)('brandId'))
    ], BrandsController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], BrandsController.prototype, "create");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], BrandsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], BrandsController.prototype, "delete");
    BrandsController = __decorate([
        (0, common_1.Controller)('brands')
    ], BrandsController);
    return BrandsController;
}());
exports.BrandsController = BrandsController;
