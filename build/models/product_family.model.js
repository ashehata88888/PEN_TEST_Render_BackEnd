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
const database_1 = __importDefault(require("../database"));
class ProductFamilyModel {
    // create new Product Family
    createPF(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO product_families(product_family,supplier_id) VALUES (
        $1,$2) RETURNING *`;
                const result = yield conn.query(sql, [b.product_family, b.supplier_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Product Family Error : ${err.message}`);
            }
        });
    }
    // get one BL by id
    getOnePF(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from product_families WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this product family
 id Error : ${err.message}`);
            }
        });
    }
    // get All PF by supplier_id
    getAllPFBySupplierId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from product_families WHERE supplier_id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get this product family
 id Error : ${err.message}`);
            }
        });
    }
    // get all product families based on supplier id
    // get one BL by id
    getAllPFBySupId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from product_families WHERE supplier_id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get this product family
   id Error : ${err.message}`);
            }
        });
    }
    // get all PFs
    getAllPFs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from product_families`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get All product families Error : ${err.message}`);
            }
        });
    }
    // udate one Product Fmily by id
    updatePF(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE product_families SET product_family=$1,supplier_id=$2 WHERE id=$3 RETURNING *`;
                const result = yield conn.query(sql, [b.product_family, b.supplier_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this product family Error : ${err.message}`);
            }
        });
    }
    // delete one product family by id
    deletePF(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = ` DELETE FROM product_families WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this product family Error : ${err.message}`);
            }
        });
    }
}
exports.default = ProductFamilyModel;
