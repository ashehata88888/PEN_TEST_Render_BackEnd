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
exports.deleteCall_contact = exports.updateCall_contact = exports.getAllCall_contacts = exports.getOneCall_contact = exports.createCall_contact = void 0;
const call_contact_model_1 = __importDefault(require("../models/call_contact.model"));
const call_contactModel = new call_contact_model_1.default();
const createCall_contact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cc = yield call_contactModel.createCall_contact(req.body);
        res.json({
            Message: ` Call_contact '${cc.contact_person}' was created successfully`,
            data: Object.assign({}, cc)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCall_contact = createCall_contact;
const getOneCall_contact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cc = yield call_contactModel.getOneCall_contact(req.params.id);
        res.json({
            Message: ` Call_contact '${cc.contact_person}' was retrieved successfully`,
            data: Object.assign({}, cc)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneCall_contact = getOneCall_contact;
const getAllCall_contacts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ccs = yield call_contactModel.getAllCall_contacts();
        res.json({
            Message: ` the call_contacts was retrieved successfully`,
            data: Object.assign({}, ccs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllCall_contacts = getAllCall_contacts;
const updateCall_contact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cc = yield call_contactModel.updateCall_contact(req.body);
        res.json({
            Message: ` '${cc.contact_person}' Call_contact  was updated successfully`,
            data: Object.assign({}, cc)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCall_contact = updateCall_contact;
const deleteCall_contact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cc = yield call_contactModel.deleteCall_contact(req.params.id);
        res.json({
            Message: ` '${cc.contact_person}'  Call_contact was deleted successfully`,
            data: Object.assign({}, cc)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCall_contact = deleteCall_contact;
