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
const product_model_1 = __importDefault(require("../../models/product.model"));
const index_1 = __importDefault(require("../../index"));
const productModel = new product_model_1.default();
const request = (0, supertest_1.default)(index_1.default);
describe('Test api/products endpoints', () => {
    const product = {
        item_name: 'Tesla806',
        price: 200000
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const createdProduct = yield productModel.createProduct(product);
        product.id = createdProduct.id;
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const conn = yield database_1.default.connect();
        const sql = 'DELETE FROM products';
        const reOrderId = 'ALTER SEQUENCE products_id_seq RESTART WITH 1';
        yield conn.query(reOrderId);
        yield conn.query(sql);
        conn.release();
    }));
    describe(`CRUD testing for All Endpoints`, () => {
        it('test post by creating product', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request
                .post('/api/products/')
                .set('content-type', 'application/json')
                .send({
                item_name: 'Tesla',
                price: 200000
            });
            expect(res.status).toBe(200);
            const { item_name, price } = res.body.data;
            expect(item_name).toBe('Tesla');
            expect(price).toBe(200000);
        }));
        it(`get all products`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('api/products/');
            expect(res.status).toBe(200);
        }));
        it(`get one product`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get(`api/products/${product.id}`);
            expect(res.status).toBe(200);
        }));
        it(`updae one product`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.patch(`api/products/${product.id}`);
            expect(res.status).toBe(200);
        }));
        it(`delete one product`, () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.delete(`api/products/${product.id}`);
            expect(res.status).toBe(200);
        }));
    });
});
