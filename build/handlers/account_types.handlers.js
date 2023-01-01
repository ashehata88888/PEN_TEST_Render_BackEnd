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
exports.deleteAccount_Type = exports.updateAccount_Type = exports.getAllAccount_Types = exports.getOneAccount_Type = exports.createAccount_Type = void 0;
const account_type_model_1 = __importDefault(require("../models/account_type.model"));
const atModel = new account_type_model_1.default();
const createAccount_Type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const at = yield atModel.createAccount_typet(req.body);
        res.json({
            Message: ` account "${at.account_type}" was created successfully`,
            data: Object.assign({}, at)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createAccount_Type = createAccount_Type;
const getOneAccount_Type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const at = yield atModel.getOneAccount_type(req.params.id);
        res.json({
            Message: ` account_Type "${at.account_type}" was retrieved successfully`,
            data: Object.assign({}, at)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneAccount_Type = getOneAccount_Type;
const getAllAccount_Types = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const at = yield atModel.getAllAccount_types();
        res.json({
            Message: ` the account_types was retrieved successfully`,
            data: Object.assign({}, at)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllAccount_Types = getAllAccount_Types;
const updateAccount_Type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const at = yield atModel.updateAccount_type(req.body);
        res.json({
            Message: ` "${at.account_type}" account_type  was updated successfully`,
            data: Object.assign({}, at)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateAccount_Type = updateAccount_Type;
const deleteAccount_Type = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const at = yield atModel.deleteAccount_type(req.params.id);
        res.json({
            Message: `"${at.account_type}" Account_type was deleted successfully`,
            data: Object.assign({}, at)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteAccount_Type = deleteAccount_Type;
