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
exports.deleteSpeciality = exports.updateSpeciality = exports.getAllSpecialitys = exports.getOneSpeciality = exports.createSpeciality = void 0;
const speciality_model_1 = __importDefault(require("../models/speciality.model"));
const specialityModel = new speciality_model_1.default();
const createSpeciality = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sp = yield specialityModel.createSpeciality(req.body);
        res.json({
            Message: ` Speciality '${sp.speciality_name}' was created successfully`,
            data: Object.assign({}, sp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createSpeciality = createSpeciality;
const getOneSpeciality = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sp = yield specialityModel.getOneSpeciality(req.params.id);
        res.json({
            Message: ` Speciality '${sp.speciality_name}' was retrieved successfully`,
            data: Object.assign({}, sp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneSpeciality = getOneSpeciality;
const getAllSpecialitys = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sps = yield specialityModel.getAllSpecialitys();
        res.json({
            Message: ` the specialities was retrieved successfully`,
            data: Object.assign({}, sps)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllSpecialitys = getAllSpecialitys;
const updateSpeciality = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sp = yield specialityModel.updateSpeciality(req.body);
        res.json({
            Message: ` '${sp.speciality_name}' Speciality  was updated successfully`,
            data: Object.assign({}, sp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSpeciality = updateSpeciality;
const deleteSpeciality = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sp = yield specialityModel.deleteSpeciality(req.params.id);
        res.json({
            Message: ` '${sp.speciality_name}'  Speciality was deleted successfully`,
            data: Object.assign({}, sp)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSpeciality = deleteSpeciality;
