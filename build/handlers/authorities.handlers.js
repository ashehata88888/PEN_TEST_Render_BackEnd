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
exports.deleteAuthority = exports.updateAuthority = exports.getAllAuthoritys = exports.getOneAuthority = exports.createAuthority = void 0;
const authority_model_1 = __importDefault(require("../models/authority.model"));
const authorityModel = new authority_model_1.default();
const createAuthority = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Auth = yield authorityModel.createAuthority(req.body);
        res.json({
            Message: ` Authority '${Auth.authority_name}' was created successfully`,
            data: Object.assign({}, Auth)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createAuthority = createAuthority;
const getOneAuthority = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Auth = yield authorityModel.getOneAuthority(req.params.id);
        res.json({
            Message: ` Authority '${Auth.authority_name}' was retrieved successfully`,
            data: Object.assign({}, Auth)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneAuthority = getOneAuthority;
const getAllAuthoritys = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Auths = yield authorityModel.getAllAuthoritys();
        res.json({
            Message: ` the authorities was retrieved successfully`,
            data: Object.assign({}, Auths)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllAuthoritys = getAllAuthoritys;
const updateAuthority = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Auth = yield authorityModel.updateAuthority(req.body);
        res.json({
            Message: ` '${Auth.authority_name}' Authority  was updated successfully`,
            data: Object.assign({}, Auth)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateAuthority = updateAuthority;
const deleteAuthority = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Auth = yield authorityModel.deleteAuthority(req.params.id);
        res.json({
            Message: ` '${Auth.authority_name}'  Authority was deleted successfully`,
            data: Object.assign({}, Auth)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteAuthority = deleteAuthority;
