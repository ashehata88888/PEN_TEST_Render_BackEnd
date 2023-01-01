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
exports.deleteMarket_size_record = exports.updateMarket_size_record = exports.getAllMarket_size_records = exports.getOneMarket_size_record = exports.createMarket_size_record = void 0;
const market_size_record_model_1 = __importDefault(require("../models/market_size_record.model"));
const market_size_recordModel = new market_size_record_model_1.default();
const createMarket_size_record = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mzr = yield market_size_recordModel.createMarket_size_record(req.body);
        res.json({
            Message: ` Market_size_record '${mzr.id}' was created successfully`,
            data: Object.assign({}, mzr)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createMarket_size_record = createMarket_size_record;
const getOneMarket_size_record = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mzr = yield market_size_recordModel.getOneMarket_size_record(req.params.id);
        res.json({
            Message: ` Market_size_record '${mzr.id}' was retrieved successfully`,
            data: Object.assign({}, mzr)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneMarket_size_record = getOneMarket_size_record;
const getAllMarket_size_records = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mzrs = yield market_size_recordModel.getAllMarket_size_records();
        res.json({
            Message: ` the market_size_records was retrieved successfully`,
            data: Object.assign({}, mzrs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllMarket_size_records = getAllMarket_size_records;
const updateMarket_size_record = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mzr = yield market_size_recordModel.updateMarket_size_record(req.body);
        res.json({
            Message: ` '${mzr.id}' Market_size_record  was updated successfully`,
            data: Object.assign({}, mzr)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateMarket_size_record = updateMarket_size_record;
const deleteMarket_size_record = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mzr = yield market_size_recordModel.deleteMarket_size_record(req.params.id);
        res.json({
            Message: ` '${mzr.id}'  Market_size_record was deleted successfully`,
            data: Object.assign({}, mzr)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteMarket_size_record = deleteMarket_size_record;
