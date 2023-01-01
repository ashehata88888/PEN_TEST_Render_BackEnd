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
exports.deleteMarket_size = exports.updateMarket_size = exports.getAllMarket_sizes = exports.getOneMarket_size = exports.createMarket_size = void 0;
const market_size_model_1 = __importDefault(require("../models/market_size.model"));
const market_sizeModel = new market_size_model_1.default();
const createMarket_size = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mz = yield market_sizeModel.createMarket_size(req.body);
        res.json({
            Message: ` Market_size '${mz.id}' was created successfully`,
            data: Object.assign({}, mz)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createMarket_size = createMarket_size;
const getOneMarket_size = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mz = yield market_sizeModel.getOneMarket_size(req.params.id);
        res.json({
            Message: ` Market_size '${mz.id}' was retrieved successfully`,
            data: Object.assign({}, mz)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneMarket_size = getOneMarket_size;
const getAllMarket_sizes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mzs = yield market_sizeModel.getAllMarket_sizes();
        res.json({
            Message: ` the market_size was retrieved successfully`,
            data: Object.assign({}, mzs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllMarket_sizes = getAllMarket_sizes;
const updateMarket_size = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mz = yield market_sizeModel.updateMarket_size(req.body);
        res.json({
            Message: ` '${mz.id}' Market_size  was updated successfully`,
            data: Object.assign({}, mz)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateMarket_size = updateMarket_size;
const deleteMarket_size = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mz = yield market_sizeModel.deleteMarket_size(req.params.id);
        res.json({
            Message: ` '${mz.id}'  Market_size was deleted successfully`,
            data: Object.assign({}, mz)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteMarket_size = deleteMarket_size;
