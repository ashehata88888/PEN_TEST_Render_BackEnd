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
exports.deleteActivity = exports.updateActivity = exports.getAllActivitys = exports.getOneActivity = exports.createActivity = void 0;
const activities_model_1 = __importDefault(require("../models/activities.model"));
const activityModel = new activities_model_1.default();
const createActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const act = yield activityModel.createActivity(req.body);
        res.json({
            Message: ` Activity '${act.activity_type_id}' was created successfully`,
            data: Object.assign({}, act)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createActivity = createActivity;
const getOneActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const act = yield activityModel.getOneActivity(req.params.id);
        res.json({
            Message: ` Activity '${act.activity_type_id}' was retrieved successfully`,
            data: Object.assign({}, act)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneActivity = getOneActivity;
const getAllActivitys = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const acts = yield activityModel.getAllActivitys();
        res.json({
            Message: ` the Activities was retrieved successfully`,
            data: Object.assign({}, acts)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllActivitys = getAllActivitys;
const updateActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const act = yield activityModel.updateActivity(req.body);
        res.json({
            Message: ` '${act.activity_type_id}' Activity  was updated successfully`,
            data: Object.assign({}, act)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateActivity = updateActivity;
const deleteActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const act = yield activityModel.deleteActivity(req.params.id);
        res.json({
            Message: ` '${act.activity_type_id}'  Activity was deleted successfully`,
            data: Object.assign({}, act)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteActivity = deleteActivity;
