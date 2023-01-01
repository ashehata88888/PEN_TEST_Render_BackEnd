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
const order_model_1 = __importDefault(require("../../models/order.model"));
const index_1 = __importDefault(require("../../index"));
const orderModel = new order_model_1.default();
const request = (0, supertest_1.default)(index_1.default);
describe('Test api/orders endpoints', () => {
    const order = {
        status: 'Active',
        user_id: 1
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const createdorder = yield orderModel.createOrder(order);
        order.id = createdorder.id;
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const conn = yield database_1.default.connect();
        const sql = 'DELETE FROM products';
        const reOrderId = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1';
        yield conn.query(reOrderId);
        yield conn.query(sql);
        conn.release();
    }));
    describe(`CRUD testing for All Endpoints`, () => {
        it('test post by creating order', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request
                .post('/api/orders/')
                .set('content-type', 'application/json')
                .send({
                status: 'Active',
                user_id: 1
            });
            expect(res.status).toBe(200);
            const { status, user_id } = res.body.data;
            expect(status).toBe('Active');
            expect(user_id).toBe(1);
        }));
        it(`get all orders`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('api/orders/');
            expect(res.status).toBe(200);
        }));
        it(`get one order`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get(`api/orders/${order.id}`);
            expect(res.status).toBe(200);
        }));
        it(`updae one order`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.patch(`api/orders/${order.id}`);
            expect(res.status).toBe(200);
        }));
        it(`delete one order`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.delete(`api/orders/${order.id}`);
            expect(res.status).toBe(200);
        }));
    });
});
