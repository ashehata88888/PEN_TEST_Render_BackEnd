"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct_status = exports.updateProduct_status = exports.getAllProduct_statuses = exports.getOneProduct_status = exports.createProduct_status = void 0;
const product_status_model_1 = __importDefault(require("../models/product_status.model"));
const product_statusModel = new product_status_model_1.default();
const createProduct_status = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ps = yield product_statusModel.createProduct_status(req.body);
        res.json({
            Message: ` Product_status '${ps.product_status_name}' was created successfully`,
            data: Object.assign({}, ps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createProduct_status = createProduct_status;
const getOneProduct_status = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ps = yield product_statusModel.getOneProduct_status(req.params.id);
        res.json({
            Message: ` Product_status '${ps.product_status_name}' was retrieved successfully`,
            data: Object.assign({}, ps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneProduct_status = getOneProduct_status;
const getAllProduct_statuses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pss = yield product_statusModel.getAllProduct_statuss();
        res.json({
            Message: ` the product_status was retrieved successfully`,
            data: Object.assign({}, pss)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllProduct_statuses = getAllProduct_statuses;
const updateProduct_status = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ps = yield product_statusModel.updateProduct_status(req.body);
        res.json({
            Message: ` '${ps.product_status_name}' Product_status  was updated successfully`,
            data: Object.assign({}, ps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateProduct_status = updateProduct_status;
const deleteProduct_status = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ps = yield product_statusModel.deleteProduct_status(req.params.id);
        res.json({
            Message: ` '${ps.product_status_name}'  Product_status was deleted successfully`,
            data: Object.assign({}, ps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProduct_status = deleteProduct_status;
