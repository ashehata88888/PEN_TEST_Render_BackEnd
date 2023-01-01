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
exports.deletePF = exports.updatePF = exports.getAllPFs = exports.getAllPFsBySupID = exports.getAllPFBySupId = exports.getOnePF = exports.createPF = void 0;
const product_family_model_1 = __importDefault(require("../models/product_family.model"));
const pfModel = new product_family_model_1.default();
const createPF = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bf = yield pfModel.createPF(req.body);
        res.json({
            Message: ` product Family "${bf.product_family}" was created successfully`,
            data: Object.assign({}, bf)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createPF = createPF;
const getOnePF = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pf = yield pfModel.getOnePF(req.params.id);
        res.json({
            Message: ` product family "${pf.product_family}" was retrieved successfully`,
            data: Object.assign({}, pf)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOnePF = getOnePF;
const getAllPFBySupId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pf = yield pfModel.getAllPFBySupId(req.params.id);
        res.json([
            // Message: ` product family was retrieved successfully`,
            ...pf
        ]);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPFBySupId = getAllPFBySupId;
const getAllPFsBySupID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sup = yield pfModel.getAllPFBySupId(req.params.id);
        res.json([...sup
            // Message: ` the supplier Names was retrieved successfully`,
            // data: { ...ac }
        ]);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPFsBySupID = getAllPFsBySupID;
const getAllPFs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pfs = yield pfModel.getAllPFs();
        res.json({
            Message: ` the Product Family was retrieved successfully`,
            data: Object.assign({}, pfs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPFs = getAllPFs;
const updatePF = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pf = yield pfModel.updatePF(req.body);
        res.json({
            Message: ` ${pf} product Family  was updated successfully`,
            data: Object.assign({}, pf)
        });
        console.log(JSON.stringify(pf));
    }
    catch (err) {
        next(err);
    }
});
exports.updatePF = updatePF;
const deletePF = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pf = yield pfModel.deletePF(req.params.id);
        res.json({
            Message: ` product family "${pf.product_family}" was deleted successfully`,
            data: Object.assign({}, pf)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deletePF = deletePF;
