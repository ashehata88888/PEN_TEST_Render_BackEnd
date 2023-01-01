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
exports.deleteActivity_type = exports.updateActivity_type = exports.getAllActivity_types = exports.getOneActivity_type = exports.createActivity_type = void 0;
const activity_type_model_1 = __importDefault(require("../models/activity_type.model"));
const activity_typeModel = new activity_type_model_1.default();
const createActivity_type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actt = yield activity_typeModel.createActivity_type(req.body);
        res.json({
            Message: ` Activity_type '${actt.activity_type}' was created successfully`,
            data: Object.assign({}, actt)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createActivity_type = createActivity_type;
const getOneActivity_type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actt = yield activity_typeModel.getOneActivity_type(req.params.id);
        res.json({
            Message: ` Activity_type '${actt.activity_type}' was retrieved successfully`,
            data: Object.assign({}, actt)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneActivity_type = getOneActivity_type;
const getAllActivity_types = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actts = yield activity_typeModel.getAllActivity_types();
        res.json({
            Message: ` the activity_types was retrieved successfully`,
            data: Object.assign({}, actts)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllActivity_types = getAllActivity_types;
const updateActivity_type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actt = yield activity_typeModel.updateActivity_type(req.body);
        res.json({
            Message: ` '${actt.activity_type}' Activity_type  was updated successfully`,
            data: Object.assign({}, actt)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateActivity_type = updateActivity_type;
const deleteActivity_type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actt = yield activity_typeModel.deleteActivity_type(req.params.id);
        res.json({
            Message: ` '${actt.activity_type}'  Activity_type was deleted successfully`,
            data: Object.assign({}, actt)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteActivity_type = deleteActivity_type;
