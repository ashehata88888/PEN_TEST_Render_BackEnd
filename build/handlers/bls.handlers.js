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
exports.deleteBl = exports.updateBl = exports.getAllBls = exports.getOneBl = exports.createBl = void 0;
const bl_model_1 = __importDefault(require("../models/bl.model"));
const blModel = new bl_model_1.default();
const createBl = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bl = yield blModel.createBl(req.body);
        res.json({
            Message: ` BL "${bl.bl_name}" was created successfully`,
            data: Object.assign({}, bl)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createBl = createBl;
const getOneBl = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bl = yield blModel.getOneBl(req.params.id);
        res.json({
            Message: ` Bl "${bl.bl_name}" was retrieved successfully`,
            data: Object.assign({}, bl)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneBl = getOneBl;
const getAllBls = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bls = yield blModel.getAllBls();
        res.json({
            Message: ` the BLS was retrieved successfully`,
            data: Object.assign({}, bls)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllBls = getAllBls;
const updateBl = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bl = yield blModel.updateBl(req.body);
        res.json({
            Message: ` "${bl.bl_name}" Bl  was updated successfully`,
            data: Object.assign({}, bl)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateBl = updateBl;
const deleteBl = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bl = yield blModel.deleteBl(req.params.id);
        res.json({
            Message: ` Bl "${bl.bl_name}" was deleted successfully`,
            data: Object.assign({}, bl)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteBl = deleteBl;
