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
const order_model_1 = __importDefault(require("../order.model"));
const database_1 = __importDefault(require("../../database"));
const orderModel = new order_model_1.default();
describe('Order Model defined', () => {
    describe('test if Order methods exists', () => {
        it('if getAllOrders Method exists', () => {
            expect(orderModel.getAllOrders).toBeDefined();
        });
        it('if createOrder Method exists', () => {
            expect(orderModel.createOrder).toBeDefined();
        });
        it('if updateOrder Method exists', () => {
            expect(orderModel.updateOrder).toBeDefined();
        });
        it('if getOneOrder Method exists', () => {
            expect(orderModel.getOneOrder).toBeDefined();
        });
        it('if deleteOrder Method exists', () => {
            expect(orderModel.deleteOrder).toBeDefined();
        });
        describe('Test Order Model methods', () => {
            const order = {
                status: 'Active',
                user_id: 1
            };
            beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
                const createOrder = yield orderModel.createOrder(order);
                order.id = createOrder.id;
            }));
            afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
                const conn = yield database_1.default.connect();
                const sql = 'DELETE FROM orders';
                const reOrderId = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1';
                yield conn.query(reOrderId);
                yield conn.query(sql);
                conn.release();
            }));
            it('test createOrder method', () => __awaiter(void 0, void 0, void 0, function* () {
                const createOrder = yield orderModel.createOrder({
                    status: 'Demo',
                    user_id: 1
                });
                expect(createOrder).toEqual({
                    id: createOrder.id,
                    status: 'Demo',
                    user_id: 1
                });
            }));
            it('test getAllOrders method', () => __awaiter(void 0, void 0, void 0, function* () {
                const orders = yield orderModel.getAllOrders();
                expect(orders.length).toBe(2);
            }));
            it('test getOneOrder method', () => __awaiter(void 0, void 0, void 0, function* () {
                const getOneOrder = yield orderModel.getOneOrder(order.id);
                expect(getOneOrder.id).toBe(order.id);
                expect(getOneOrder.status).toBe(order.status);
                expect(getOneOrder.user_id).toBe(order.user_id);
            }));
            it('test updateOrder method', () => __awaiter(void 0, void 0, void 0, function* () {
                const updateOrder = yield orderModel.updateOrder({
                    id: order.id,
                    status: 'not Active',
                    user_id: 2
                });
                expect(updateOrder.id).toBe(order.id);
                expect(updateOrder.status).toBe('not Active');
                expect(updateOrder.user_id).toBe(2);
            }));
            it('test deleteOrder method', () => __awaiter(void 0, void 0, void 0, function* () {
                const deleteOrder = yield orderModel.deleteOrder(order.id);
                expect(deleteOrder.id).toBe(order.id);
            }));
        });
    });
});
