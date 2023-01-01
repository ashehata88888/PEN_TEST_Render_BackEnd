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
exports.deleteMarket_potential = exports.updateMarket_potential = exports.getAllMarket_potentials = exports.getOneMarket_potential = exports.createMarket_potential = void 0;
const market_potential_model_1 = __importDefault(require("../models/market_potential.model"));
const market_potentialModel = new market_potential_model_1.default();
const createMarket_potential = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mp = yield market_potentialModel.createMarket_potential(req.body);
        res.json({
            Message: ` Market_potential '${mp.id}' was created successfully`,
            data: Object.assign({}, mp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createMarket_potential = createMarket_potential;
const getOneMarket_potential = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mp = yield market_potentialModel.getOneMarket_potential(req.params.id);
        res.json({
            Message: ` Market_potential '${mp.id}' was retrieved successfully`,
            data: Object.assign({}, mp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneMarket_potential = getOneMarket_potential;
const getAllMarket_potentials = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mps = yield market_potentialModel.getAllMarket_potentials();
        res.json({
            Message: ` the market_potentials was retrieved successfully`,
            data: Object.assign({}, mps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllMarket_potentials = getAllMarket_potentials;
const updateMarket_potential = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mp = yield market_potentialModel.updateMarket_potential(req.body);
        res.json({
            Message: ` '${mp.id}' Market_potential  was updated successfully`,
            data: Object.assign({}, mp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateMarket_potential = updateMarket_potential;
const deleteMarket_potential = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mp = yield market_potentialModel.deleteMarket_potential(req.params.id);
        res.json({
            Message: ` '${mp.id}'  Market_potential was deleted successfully`,
            data: Object.assign({}, mp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteMarket_potential = deleteMarket_potential;
