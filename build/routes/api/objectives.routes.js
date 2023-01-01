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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const act = __importStar(require("../../handlers/objectives.handlers"));
const authMiddle_1 = __importDefault(require("../../middleware/authMiddle"));
const routes = (0, express_1.Router)();
routes.post('/', authMiddle_1.default, act.createObjective);
routes.get('/', authMiddle_1.default, act.getAllObjectives);
routes.get('/:id', authMiddle_1.default, act.getOneObjective);
routes.patch('/:id', authMiddle_1.default, act.updateObjective);
routes.delete('/:id', authMiddle_1.default, act.deleteObjective);
exports.default = routes;
