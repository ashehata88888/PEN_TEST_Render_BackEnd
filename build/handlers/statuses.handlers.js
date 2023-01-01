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
exports.deleteStatus = exports.updateStatus = exports.getAllStatuss = exports.getOneStatus = exports.createStatus = void 0;
const status_model_1 = __importDefault(require("../models/status.model"));
const statusModel = new status_model_1.default();
const createStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const st = yield statusModel.createStatus(req.body);
        res.json({
            Message: ` Status '${st.status_name}' was created successfully`,
            data: Object.assign({}, st)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createStatus = createStatus;
const getOneStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const st = yield statusModel.getOneStatus(req.params.id);
        res.json({
            Message: ` Status '${st.status_name}' was retrieved successfully`,
            data: Object.assign({}, st)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneStatus = getOneStatus;
const getAllStatuss = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sts = yield statusModel.getAllStatuss();
        res.json({
            Message: ` the statuses was retrieved successfully`,
            data: Object.assign({}, sts)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllStatuss = getAllStatuss;
const updateStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const st = yield statusModel.updateStatus(req.body);
        res.json({
            Message: ` '${st.status_name}' Status  was updated successfully`,
            data: Object.assign({}, st)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateStatus = updateStatus;
const deleteStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const st = yield statusModel.deleteStatus(req.params.id);
        res.json({
            Message: ` '${st.status_name}'  Status was deleted successfully`,
            data: Object.assign({}, st)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteStatus = deleteStatus;
