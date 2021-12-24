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
exports.CustomersController = void 0;
var common_1 = require("@nestjs/common");
var CustomersController = /** @class */ (function () {
    function CustomersController() {
    }
    CustomersController.prototype.getCustomerFilter = function () {
        return 'Yo soy un Filter';
    };
    CustomersController.prototype.getAll = function (limit, offset) {
        if (limit === void 0) { limit = 100; }
        if (offset === void 0) { offset = 0; }
        return {
            message: "customers: limit => ".concat(limit, " y offset => ").concat(offset)
        };
    };
    CustomersController.prototype.getOne = function (customerId) {
        return "Customer ".concat(customerId);
    };
    CustomersController.prototype.create = function (payload) {
        return {
            message: 'Accion para crear Customer',
            payload: payload
        };
    };
    CustomersController.prototype.update = function (id, payload) {
        return {
            id: id,
            payload: payload
        };
    };
    CustomersController.prototype["delete"] = function (id) {
        return {
            message: 'Eliminar customer',
            id: id
        };
    };
    __decorate([
        (0, common_1.Get)('/filter')
    ], CustomersController.prototype, "getCustomerFilter");
    __decorate([
        (0, common_1.Get)(''),
        __param(0, (0, common_1.Query)('limit')),
        __param(1, (0, common_1.Query)('offset'))
    ], CustomersController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)('/:customerId'),
        __param(0, (0, common_1.Param)('customerId'))
    ], CustomersController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], CustomersController.prototype, "create");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CustomersController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CustomersController.prototype, "delete");
    CustomersController = __decorate([
        (0, common_1.Controller)('customers')
    ], CustomersController);
    return CustomersController;
}());
exports.CustomersController = CustomersController;
