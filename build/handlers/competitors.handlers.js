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
exports.deleteCompetitor = exports.updateCompetitor = exports.getAllCompetitors = exports.getOneCompetitor = exports.createCompetitor = void 0;
const competitor_model_1 = __importDefault(require("../models/competitor.model"));
const compModel = new competitor_model_1.default();
const createCompetitor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comp = yield compModel.createCompetitor(req.body);
        res.json({
            Message: ` Competitor "${comp.competitor_name}" was created successfully`,
            data: Object.assign({}, comp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCompetitor = createCompetitor;
const getOneCompetitor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comp = yield compModel.getOneCompetitor(req.params.id);
        res.json({
            Message: ` Competitor "${comp.competitor_name}" was retrieved successfully`,
            data: Object.assign({}, comp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneCompetitor = getOneCompetitor;
const getAllCompetitors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comps = yield compModel.getAllCompetitors();
        res.json({
            Message: ` the CompetitorS was retrieved successfully`,
            data: Object.assign({}, comps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllCompetitors = getAllCompetitors;
const updateCompetitor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comp = yield compModel.updateCompetitor(req.body);
        res.json({
            Message: ` "${comp.competitor_name}" Competitor  was updated successfully`,
            data: Object.assign({}, comp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCompetitor = updateCompetitor;
const deleteCompetitor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comp = yield compModel.deleteCompetitor(req.params.id);
        res.json({
            Message: ` Competitor "${comp.competitor_name}" was deleted successfully`,
            data: Object.assign({}, comp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCompetitor = deleteCompetitor;
