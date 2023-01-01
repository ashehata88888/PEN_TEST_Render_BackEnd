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
exports.deleteAccount = exports.updateAccount = exports.getAllAccounts = exports.getAllAccountNamesForOneUser = exports.getOneAccount = exports.createAccount = void 0;
const accounts_model_1 = __importDefault(require("../models/accounts.model"));
const accountModel = new accounts_model_1.default();
const createAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ac = yield accountModel.createAccount(req.body);
        res.json({
            Message: ` account "${ac.account_name}" was created successfully`,
            data: Object.assign({}, ac)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createAccount = createAccount;
const getOneAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ac = yield accountModel.getOneAccount(req.params.id);
        res.json({
            Message: ` account "${ac.account_name}" was retrieved successfully`,
            data: Object.assign({}, ac)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOneAccount = getOneAccount;
const getAllAccountNamesForOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ac = yield accountModel.getAllAccountNamesForOneUser(req.params.id);
        res.json([...ac
            // Message: ` the account Names was retrieved successfully`,
            // data: { ...ac }
        ]);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllAccountNamesForOneUser = getAllAccountNamesForOneUser;
const getAllAccounts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const acs = yield accountModel.getAllAccounts();
        res.json({
            Message: ` the accounts was retrieved successfully`,
            data: Object.assign({}, acs)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllAccounts = getAllAccounts;
const updateAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ac = yield accountModel.updateAccount(req.body);
        res.json({
            Message: ` "${ac.account_name}" account  was updated successfully`,
            data: Object.assign({}, ac)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateAccount = updateAccount;
const deleteAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ac = yield accountModel.deleteAccount(req.params.id);
        res.json({
            Message: `"${ac.account_name}" Account was deleted successfully`,
            data: Object.assign({}, ac)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteAccount = deleteAccount;
