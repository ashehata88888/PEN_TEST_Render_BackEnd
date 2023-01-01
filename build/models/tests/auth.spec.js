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
const user_model_1 = __importDefault(require("../user.model"));
const database_1 = __importDefault(require("../../database"));
const userModel = new user_model_1.default();
describe('Auth Module', () => {
    describe('testing if the function exists or not', () => {
        it('have to has Authenticate method', () => {
            expect(userModel.authenticate).toBeDefined();
        });
    });
    describe('User Authentication test', () => {
        const user = {
            user_name: 'Ahmed',
            password: 'pass@123'
        };
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            const createdUser = yield userModel.createUser(user);
            user.id = createdUser.id;
        }));
        afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = 'DELETE FROM users';
            const reOrderId = 'ALTER SEQUENCE users_id_seq RESTART WITH 1';
            yield conn.query(reOrderId);
            yield conn.query(sql);
            conn.release();
        }));
        it('return the Authenticated user', () => __awaiter(void 0, void 0, void 0, function* () {
            const authUser = yield userModel.authenticate(user.user_name, user.password);
            expect(authUser === null || authUser === void 0 ? void 0 : authUser.user_name).toBe(user.user_name);
            expect(authUser === null || authUser === void 0 ? void 0 : authUser.password).toBe(user.password);
        }));
        it('returns null in case invalid username or password', () => __awaiter(void 0, void 0, void 0, function* () {
            const authUser = yield userModel.authenticate('UserNameExample', 'wrongPassword');
            expect(authUser).toBe(null);
        }));
    });
});
