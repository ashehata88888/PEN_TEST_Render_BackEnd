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
exports.deleteProduct = exports.updateProduct = exports.getAllProducts = exports.getOneProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const productModel = new product_model_1.default();
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel.createProduct(req.body);
        res.json({
            Message: ` Product "${product.item_name}" was created successfully`,
            data: Object.assign({}, product)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createProduct = createProduct;
const getOneProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel.getOneProduct(req.params.id);
        res.json({
            Message: ` Product "${product.item_name}" was retrieved successfully`,
            data: Object.assign({}, product)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneProduct = getOneProduct;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productModel.getAllProducts();
        res.json({
            Message: ` the products was retrieved successfully`,
            data: Object.assign({}, products)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllProducts = getAllProducts;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel.updateProduct(req.body);
        res.json({
            Message: `the product was updated successfully`,
            data: product
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel.deleteProduct(req.params.id);
        res.json({
            Message: ` product "${product.item_name}" was deleted successfully`,
            data: Object.assign({}, product)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProduct = deleteProduct;
