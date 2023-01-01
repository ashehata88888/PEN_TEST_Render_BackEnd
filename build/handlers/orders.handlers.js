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
exports.addProduct = exports.deleteOrder = exports.updateOrder = exports.getAllOrders = exports.getOneOrder = exports.createOrder = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const orderModel = new order_model_1.default();
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel.createOrder(req.body);
        res.json({
            Message: ` order "${order.id}" was created successfully`,
            data: Object.assign({}, order)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createOrder = createOrder;
const getOneOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel.getOneOrder(req.params.id);
        res.json({
            Message: ` order "${order.id}" was retrieved successfully`,
            data: Object.assign({}, order)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneOrder = getOneOrder;
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderModel.getAllOrders();
        res.json({
            Message: ` the products was retrieved successfully`,
            data: Object.assign({}, orders)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllOrders = getAllOrders;
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield orderModel.updateOrder(req.body);
        res.json({
            Message: `the order was updated successfully`,
            data: product
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel.deleteOrder(req.params.id);
        res.json({
            Message: ` order "${order.id}" was deleted successfully`,
            data: Object.assign({}, order)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteOrder = deleteOrder;
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.id;
        const productId = req.body.product_id;
        const quantity = parseInt(req.body.quantity);
        const AddPro = yield orderModel.addProduct(quantity, orderId, productId);
        res.json({
            Message: ` the Product was successfully added to the order `,
            data: Object.assign({}, AddPro)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.addProduct = addProduct;
