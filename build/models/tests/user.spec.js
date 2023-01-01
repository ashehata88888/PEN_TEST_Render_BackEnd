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
describe('User Model defined', () => {
    describe('test if User methods exists', () => {
        it('if getAllUser Method exists', () => {
            expect(userModel.getAllUser).toBeDefined();
        });
        it('if createUser Method exists', () => {
            expect(userModel.createUser).toBeDefined();
        });
        it('if updateUser Method exists', () => {
            expect(userModel.updateUser).toBeDefined();
        });
        it('if getOneUser Method exists', () => {
            expect(userModel.getOneUser).toBeDefined();
        });
        it('if deleteUser Method exists', () => {
            expect(userModel.deleteUser).toBeDefined();
        });
        it('test if AuthUser Function exists', () => {
            expect(userModel.authenticate).toBeDefined();
        });
        describe('Test User Model methods', () => {
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
            it('test createUser method', () => __awaiter(void 0, void 0, void 0, function* () {
                const createUser = yield userModel.createUser({
                    user_name: 'UserTest',
                    password: 'testpassword'
                });
                expect(createUser).toEqual({
                    id: createUser.id,
                    user_name: 'UserTest',
                    password: createUser.password
                });
            }));
            it('test getAllUsers method', () => __awaiter(void 0, void 0, void 0, function* () {
                const users = yield userModel.getAllUser();
                expect(users.length).toBe(2);
            }));
            it('test getOneUser method', () => __awaiter(void 0, void 0, void 0, function* () {
                const getOneUser = yield userModel.getOneUser(user.id);
                expect(getOneUser.id).toBe(user.id);
                expect(getOneUser.user_name).toBe(user.user_name);
            }));
            it('test updateUser method', () => __awaiter(void 0, void 0, void 0, function* () {
                const updateUser = yield userModel.updateUser({
                    id: user.id,
                    user_name: 'updated User',
                    password: user.password,
                    first_name: '',
                    last_name: '',
                    user_mail: '',
                    position: '',
                    privilege: '',
                    status: '',
                    created_date: '',
                    bl1_id: 0,
                    bl2_id: 0,
                    bl3_id: 0,
                    bl4_id: 0,
                    bl5_id: 0,
                    bl6_id: 0,
                    bl7_id: 0,
                    bu_id: 0
                });
                expect(updateUser.id).toBe(user.id);
                expect(updateUser.user_name).toBe('updated User');
                expect(updateUser.password).toBe(user.password);
            }));
            it('test deleteUser method', () => __awaiter(void 0, void 0, void 0, function* () {
                const deleteUser = yield userModel.deleteUser(user.id);
                expect(deleteUser.id).toBe(user.id);
            }));
        });
    });
});
