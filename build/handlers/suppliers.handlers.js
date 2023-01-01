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
exports.deleteSup = exports.updateSup = exports.getAllSups = exports.getAllSuppliersByBLId = exports.getOneSup = exports.createSup = void 0;
const supplier_model_1 = __importDefault(require("../models/supplier.model"));
const supModel = new supplier_model_1.default();
const createSup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sup = yield supModel.createSup(req.body);
        res.json({
            Message: ` Supplier "${sup.supplier_name}" was created successfully`,
            data: Object.assign({}, sup)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createSup = createSup;
const getOneSup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sup = yield supModel.getOneSup(req.params.id);
        res.json({
            Message: ` Supplier "${sup.supplier_name}" was retrieved successfully`,
            data: Object.assign({}, sup)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneSup = getOneSup;
const getAllSuppliersByBLId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sup = yield supModel.getAllSuppliersByBLId(req.params.id);
        res.json([...sup
            // Message: ` the supplier Names was retrieved successfully`,
            // data: { ...ac }
        ]);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllSuppliersByBLId = getAllSuppliersByBLId;
const getAllSups = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sups = yield supModel.getAllSups();
        res.json({
            Message: ` the suppliers was retrieved successfully`,
            data: Object.assign({}, sups)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllSups = getAllSups;
const updateSup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sup = yield supModel.updateSup(req.body);
        res.json({
            Message: ` "${sup.supplier_name}" supplier  was updated successfully`,
            data: Object.assign({}, sup)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSup = updateSup;
const deleteSup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sup = yield supModel.deleteSup(req.params.id);
        res.json({
            Message: `"${sup.supplier_name}" supplier was deleted successfully`,
            data: Object.assign({}, sup)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSup = deleteSup;
