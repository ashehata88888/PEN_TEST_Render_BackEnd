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
const supertest_1 = __importDefault(require("supertest"));
const database_1 = __importDefault(require("../../database"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const index_1 = __importDefault(require("../../index"));
const userModel = new user_model_1.default();
const request = (0, supertest_1.default)(index_1.default);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let token = '';
describe('Test api/users endpoints', () => {
    const user = {
        user_name: 'Ahmed',
        password: 'foo@123'
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
    it('test Authenticate function if token returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .post('/api/users/authenticate')
            .set('content-type', 'application/json')
            .send({
            user_name: 'Ahmed',
            password: 'foo@123'
        });
        expect(res.status).toBe(200);
        const { id, user_name, token: userToken } = res.body.data;
        expect(id).toBe(user.id);
        expect(user_name).toBe('Ahmed');
        token = userToken;
    }));
    it('test Authenticate with wrong username & password', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .post('/api/users/authenticate')
            .set('content-type', 'application/json')
            .send({
            user_name: 'example1',
            password: 'wrongPass'
        });
        expect(res.status).toBe(401);
    }));
    describe(`CRUD testing for All Endpoints`, () => {
        it('test post by creating new user', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request
                .post('/api/users/')
                .set('content-type', 'application/json')
                .send({
                user_name: 'Mohamed',
                password: 'pass@123'
            });
            expect(res.status).toBe(200);
            const user_name = res.body.data;
            expect(user_name).toBe('Mohamed');
        }));
        it(`get all Users`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('api/users/');
            expect(res.status).toBe(200);
            const { id, user_name, token: userToken } = res.body.data;
            expect(id).toBe(user.id);
            expect(user_name).toBe(['Ahmed', 'Mohamed']);
            token = userToken;
        }));
        it(`get one Users`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get(`api/users/1`);
            expect(res.status).toBe(200);
            const { user_name, token: userToken } = res.body.data;
            expect(user.id).toBe(1);
            expect(user_name).toBe(['Ahmed']);
            token = userToken;
        }));
        it(`updae one Users`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.patch(`api/users/${user.id}`);
            expect(res.status).toBe(200);
            const { user_name, token: userToken } = res.body.data;
            expect(user_name).toBe(user_name);
            token = userToken;
        }));
        it(`delete one Users`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.delete(`api/users/${user.id}`);
            expect(res.status).toBe(200);
        }));
    });
});
