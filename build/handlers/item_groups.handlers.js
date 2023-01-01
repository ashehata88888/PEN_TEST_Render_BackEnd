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
exports.deleteItem_group = exports.updateItem_group = exports.getAllItem_groups = exports.getAllItem_groupByPFID = exports.getOneItem_group = exports.createItem_group = void 0;
const item_group_model_1 = __importDefault(require("../models/item_group.model"));
const item_groupModel = new item_group_model_1.default();
const createItem_group = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ig = yield item_groupModel.createItem_group(req.body);
        res.json({
            Message: ` Item_group "${ig.item_group}" was created successfully`,
            data: Object.assign({}, ig)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createItem_group = createItem_group;
const getOneItem_group = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ig = yield item_groupModel.getOneItem_group(req.params.id);
        res.json({
            Message: ` item_group "${ig.item_group}" was retrieved successfully`,
            data: Object.assign({}, ig)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneItem_group = getOneItem_group;
const getAllItem_groupByPFID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ig = yield item_groupModel.getAllItem_groupByPFID(req.params.id);
        res.json([
            // Message: ` item_group was retrieved successfully`,
            ...ig
        ]);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllItem_groupByPFID = getAllItem_groupByPFID;
const getAllItem_groups = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const igs = yield item_groupModel.getAllItem_groups();
        res.json({
            Message: ` the item_groups was retrieved successfully`,
            data: Object.assign({}, igs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllItem_groups = getAllItem_groups;
const updateItem_group = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ig = yield item_groupModel.updateItem_group(req.body);
        res.json({
            Message: ` "${ig.item_group}" item_group  was updated successfully`,
            data: Object.assign({}, ig)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateItem_group = updateItem_group;
const deleteItem_group = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ig = yield item_groupModel.deleteItem_group(req.params.id);
        res.json({
            Message: ` item_group "${ig.item_group}" was deleted successfully`,
            data: Object.assign({}, ig)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteItem_group = deleteItem_group;
