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
exports.deleteComment = exports.updateComment = exports.getAllComments = exports.getOneComment = exports.createComment = void 0;
const comment_model_1 = __importDefault(require("../models/comment.model"));
const commentModel = new comment_model_1.default();
const createComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const com = yield commentModel.createComment(req.body);
        res.json({
            Message: ` Comment '${com.comment}' was created successfully`,
            data: Object.assign({}, com)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createComment = createComment;
const getOneComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const com = yield commentModel.getOneComment(req.params.id);
        res.json({
            Message: ` Comment '${com.comment}' was retrieved successfully`,
            data: Object.assign({}, com)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneComment = getOneComment;
const getAllComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coms = yield commentModel.getAllComments();
        res.json({
            Message: ` the comments was retrieved successfully`,
            data: Object.assign({}, coms)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllComments = getAllComments;
const updateComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const com = yield commentModel.updateComment(req.body);
        res.json({
            Message: ` '${com.comment}' Comment  was updated successfully`,
            data: Object.assign({}, com)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const com = yield commentModel.deleteComment(req.params.id);
        res.json({
            Message: ` '${com.comment}'  Comment was deleted successfully`,
            data: Object.assign({}, com)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteComment = deleteComment;
