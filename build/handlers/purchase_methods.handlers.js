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
exports.deletePurchase_Method = exports.updatePurchase_Method = exports.getAllPurchase_Methods = exports.getOnePurchase_Method = exports.createPurchase_Method = void 0;
const purchase_method_model_1 = __importDefault(require("../models/purchase_method.model"));
const pmModel = new purchase_method_model_1.default();
const createPurchase_Method = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pm = yield pmModel.createPurchase_Method(req.body);
        res.json({
            Message: ` Purchase_Method "${pm.purchase_method}" was created successfully`,
            data: Object.assign({}, pm)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createPurchase_Method = createPurchase_Method;
const getOnePurchase_Method = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pm = yield pmModel.getOnePurchase_Method(req.params.id);
        res.json({
            Message: ` Purchase_Method "${pm.purchase_method}" was retrieved successfully`,
            data: Object.assign({}, pm)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOnePurchase_Method = getOnePurchase_Method;
const getAllPurchase_Methods = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pms = yield pmModel.getAllPurchase_Methods();
        res.json({
            Message: ` the Purchase_Methods was retrieved successfully`,
            data: Object.assign({}, pms)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPurchase_Methods = getAllPurchase_Methods;
const updatePurchase_Method = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pm = yield pmModel.updatePurchase_Method(req.body);
        res.json({
            Message: ` "${pm.purchase_method}" Purchase_Method was updated successfully`,
            data: Object.assign({}, pm)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updatePurchase_Method = updatePurchase_Method;
const deletePurchase_Method = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pm = yield pmModel.deletePurchase_Method(req.params.id);
        res.json({
            Message: ` "${pm.purchase_method}" Purchase_Method was deleted successfully`,
            data: Object.assign({}, pm)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deletePurchase_Method = deletePurchase_Method;
