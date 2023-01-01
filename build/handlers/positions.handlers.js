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
exports.deletePosition = exports.updatePosition = exports.getAllPositions = exports.getOnePosition = exports.createPosition = void 0;
const position_model_1 = __importDefault(require("../models/position.model"));
const positionModel = new position_model_1.default();
const createPosition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const po = yield positionModel.createPosition(req.body);
        res.json({
            Message: ` Position '${po.position_name}' was created successfully`,
            data: Object.assign({}, po)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createPosition = createPosition;
const getOnePosition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const po = yield positionModel.getOnePosition(req.params.id);
        res.json({
            Message: ` Position '${po.position_name}' was retrieved successfully`,
            data: Object.assign({}, po)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOnePosition = getOnePosition;
const getAllPositions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pos = yield positionModel.getAllPositions();
        res.json({
            Message: ` the positions was retrieved successfully`,
            data: Object.assign({}, pos)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPositions = getAllPositions;
const updatePosition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const po = yield positionModel.updatePosition(req.body);
        res.json({
            Message: ` '${po.position_name}' Position  was updated successfully`,
            data: Object.assign({}, po)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updatePosition = updatePosition;
const deletePosition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const po = yield positionModel.deletePosition(req.params.id);
        res.json({
            Message: ` '${po.position_name}'  Position was deleted successfully`,
            data: Object.assign({}, po)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deletePosition = deletePosition;
