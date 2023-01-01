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
exports.deleteBu = exports.updateBu = exports.getAllBus = exports.getOneBu = exports.createBu = void 0;
const bu_model_1 = __importDefault(require("../models/bu.model"));
const buModel = new bu_model_1.default();
const createBu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bu = yield buModel.createBu(req.body);
        res.json({
            Message: ` BU "${bu.bu_name}" was created successfully`,
            data: Object.assign({}, bu)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createBu = createBu;
const getOneBu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bu = yield buModel.getOneBu(req.params.id);
        res.json({
            Message: ` BU "${bu.bu_name}" was retrieved successfully`,
            data: Object.assign({}, bu)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneBu = getOneBu;
const getAllBus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bus = yield buModel.getAllBus();
        res.json({
            Message: ` the BUS was retrieved successfully`,
            data: Object.assign({}, bus)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllBus = getAllBus;
const updateBu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bu = yield buModel.updateBu(req.body);
        res.json({
            Message: ` the BU number "${bu.bu_name}" was updated successfully`,
            data: Object.assign({}, bu)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateBu = updateBu;
const deleteBu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bu = yield buModel.deleteBu(req.params.id);
        res.json({
            Message: ` BU "${bu.bu_name}" was deleted successfully`,
            data: Object.assign({}, bu)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteBu = deleteBu;
