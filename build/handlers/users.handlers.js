"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.authenticate = exports.deleteUser = exports.updateUserPass = exports.updateUser = exports.getAllUsers = exports.getOneUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const tokenE = process.env.TOKEN;
const userModel = new user_model_1.default();
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.createUser(req.body);
        res.json({
            Message: ` User "${user.user_name}" was created successfully`,
            data: Object.assign({}, user)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
const getOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.getOneUser(req.params.id);
        res.json({
            Message: ` User "${user.user_name}" was retrieved successfully`,
            data: Object.assign({}, user)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneUser = getOneUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.getAllUser();
        res.json({
            Message: ` the Users was retrieved successfully`,
            data: Object.assign({}, users)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const paramId = req.params.id as unknown as User
        const user = yield userModel.updateUser(req.body);
        res.json({
            Message: ` the User Name "${user.user_name}" was updated successfully`,
            data: Object.assign({}, user)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
const updateUserPass = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const paramId = req.params.id as unknown as User
        const user = yield userModel.updateUserPass(req.body);
        res.json({
            Message: ` the User Name "${user.user_name}" was updated successfully`,
            data: Object.assign({}, user)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateUserPass = updateUserPass;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.deleteUser(req.params.id);
        res.json({
            Message: ` User Name "${user.user_name}" was deleted successfully`,
            data: Object.assign({}, user)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_name, password } = req.body;
        const user = yield userModel.authenticate(user_name, password);
        const token = jsonwebtoken_1.default.sign({ user }, tokenE);
        if (!user) {
            return res.status(401).json({
                message: `User Name or Password is not correct`
            });
        }
        return res.json({
            data: Object.assign(Object.assign({}, user), { token }),
            message: `user's passed the authentication successfully`
        });
    }
    catch (err) {
        return next(err);
    }
});
exports.authenticate = authenticate;
