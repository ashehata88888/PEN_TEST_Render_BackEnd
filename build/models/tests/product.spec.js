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
const product_model_1 = __importDefault(require("../product.model"));
const database_1 = __importDefault(require("../../database"));
const productModel = new product_model_1.default();
describe('Product Model defined', () => {
    describe('test if Product methods exists', () => {
        it('if getAllproduct Method exists', () => {
            expect(productModel.getAllProducts).toBeDefined();
        });
        it('if createProduct Method exists', () => {
            expect(productModel.createProduct).toBeDefined();
        });
        it('if update Product Method exists', () => {
            expect(productModel.updateProduct).toBeDefined();
        });
        it('if getOneProduct Method exists', () => {
            expect(productModel.getOneProduct).toBeDefined();
        });
        it('if deleteProduct Method exists', () => {
            expect(productModel.deleteProduct).toBeDefined();
        });
        describe('Test Product Model methods', () => {
            const product = {
                item_name: 'Tesla806',
                price: 200000
            };
            beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
                const createProduct = yield productModel.createProduct(product);
                product.id = createProduct.id;
            }));
            afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
                const conn = yield database_1.default.connect();
                const sql = 'DELETE FROM products';
                const reOrderId = 'ALTER SEQUENCE products_id_seq RESTART WITH 1';
                yield conn.query(reOrderId);
                yield conn.query(sql);
                conn.release();
            }));
            it('test createProduct method', () => __awaiter(void 0, void 0, void 0, function* () {
                const createProduct = yield productModel.createProduct({
                    item_name: 'Bogaty',
                    price: 400000
                });
                expect(createProduct).toEqual({
                    id: createProduct.id,
                    item_name: 'Bogaty',
                    price: 400000
                });
            }));
            it('test getAllProducts method', () => __awaiter(void 0, void 0, void 0, function* () {
                const products = yield productModel.getAllProducts();
                expect(products.length).toBe(2);
            }));
            it('test getOneProduct method', () => __awaiter(void 0, void 0, void 0, function* () {
                const getOneProduct = yield productModel.getOneProduct(product.id);
                expect(getOneProduct.id).toBe(product.id);
                expect(getOneProduct.item_name).toBe(product.item_name);
                expect(getOneProduct.price).toBe(product.price);
            }));
            it('test updateProduct method', () => __awaiter(void 0, void 0, void 0, function* () {
                const updateProduct = yield productModel.updateProduct({
                    id: product.id,
                    item_name: 'updated Product',
                    price: 300000
                });
                expect(updateProduct.id).toBe(product.id);
                expect(updateProduct.item_name).toBe('updated Product');
                expect(updateProduct.price).toBe(300000);
            }));
            it('test deleteProduct method', () => __awaiter(void 0, void 0, void 0, function* () {
                const deleteProduct = yield productModel.deleteProduct(product.id);
                expect(deleteProduct.id).toBe(product.id);
            }));
        });
    });
});
