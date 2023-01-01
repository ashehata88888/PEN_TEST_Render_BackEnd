"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const tokenE = process.env.TOKEN;
// reference
// https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0293/modules/535057c1-db8d-403f-a6ae-6b3345338d10/lessons/021b936e-f489-4c12-b2f7-f7b94a979264/concepts/815626b0-dc15-4a7e-b5e7-f5e832d3e9e1
// this function validate the user token
const validateToken = (req, res, next) => {
    try {
        const getAuthHeader = req.get('Authorization');
        if (getAuthHeader) {
            const bearer = getAuthHeader.split(' ')[0].toLowerCase();
            const token = getAuthHeader.split(' ')[1];
            // the tokey type must be 'bearer'
            if (token && bearer === 'bearer') {
                // the following if statement confirms the quality of the token which send from the header with the token already stored in .env file
                const decoding = jsonwebtoken_1.default.verify(token, tokenE);
                if (decoding) {
                    next();
                }
                else {
                    throw new Error('access denied');
                }
            }
            else {
                throw new Error('access denied');
            }
        }
        else {
            throw new Error('access denied');
        }
    }
    catch (err) {
        throw new Error('access denied');
    }
};
exports.default = validateToken;
