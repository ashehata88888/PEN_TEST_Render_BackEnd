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
exports.deleteCall_product = exports.updateCall_product = exports.getAllCall_products = exports.getOneCall_product = exports.createCall_product = void 0;
const call_product_model_1 = __importDefault(require("../models/call_product.model"));
const call_productModel = new call_product_model_1.default();
const createCall_product = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cp = yield call_productModel.createCall_product(req.body);
        res.json({
            Message: ` Call_product '${cp.id}' was created successfully`,
            data: Object.assign({}, cp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCall_product = createCall_product;
const getOneCall_product = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cp = yield call_productModel.getOneCall_product(req.params.id);
        res.json({
            Message: ` Call_product '${cp.id}' was retrieved successfully`,
            data: Object.assign({}, cp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneCall_product = getOneCall_product;
const getAllCall_products = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cps = yield call_productModel.getAllCall_products();
        res.json({
            Message: ` the call_products was retrieved successfully`,
            data: Object.assign({}, cps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllCall_products = getAllCall_products;
const updateCall_product = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cp = yield call_productModel.updateCall_product(req.body);
        res.json({
            Message: ` '${cp.id}' Call_product  was updated successfully`,
            data: Object.assign({}, cp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCall_product = updateCall_product;
const deleteCall_product = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cp = yield call_productModel.deleteCall_product(req.params.id);
        res.json({
            Message: ` '${cp.id}'  Call_product was deleted successfully`,
            data: Object.assign({}, cp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCall_product = deleteCall_product;
