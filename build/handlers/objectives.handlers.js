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
exports.deleteObjective = exports.updateObjective = exports.getAllObjectives = exports.getOneObjective = exports.createObjective = void 0;
const objective_model_1 = __importDefault(require("../models/objective.model"));
const objectiveModel = new objective_model_1.default();
const createObjective = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obj = yield objectiveModel.createObjective(req.body);
        res.json({
            Message: ` Objective '${obj.objective_name}' was created successfully`,
            data: Object.assign({}, obj)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createObjective = createObjective;
const getOneObjective = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obj = yield objectiveModel.getOneObjective(req.params.id);
        res.json({
            Message: ` Objective '${obj.objective_name}' was retrieved successfully`,
            data: Object.assign({}, obj)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneObjective = getOneObjective;
const getAllObjectives = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objs = yield objectiveModel.getAllObjectives();
        res.json({
            Message: ` the objectives was retrieved successfully`,
            data: Object.assign({}, objs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllObjectives = getAllObjectives;
const updateObjective = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obj = yield objectiveModel.updateObjective(req.body);
        res.json({
            Message: ` '${obj.objective_name}' Objective  was updated successfully`,
            data: Object.assign({}, obj)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateObjective = updateObjective;
const deleteObjective = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obj = yield objectiveModel.deleteObjective(req.params.id);
        res.json({
            Message: ` '${obj.objective_name}'  Objective was deleted successfully`,
            data: Object.assign({}, obj)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteObjective = deleteObjective;
