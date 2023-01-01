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
class Call_productModel {
    // create new Call_product
    createCall_product(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO call_products(supplier_id ,product_family_id ,item_group_id ,item_name ,item_stock ,objective_id ,status_id ,activity_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
                const result = yield conn.query(sql, [b.supplier_id, b.product_family_id, b.item_group_id, b.item_name, b.item_stock, b.objective_id, b.status_id, b.activity_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Call_product Error : ${err.message}`);
            }
        });
    }
    // get one Call_product by id
    getOneCall_product(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from call_products WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Call_product by id Error : ${err.message}`);
            }
        });
    }
    // get all Call_products
    getAllCall_products() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from call_products`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Call_products Error : ${err.message}`);
            }
        });
    }
    // udate one Call_product by id
    updateCall_product(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE call_products SET supplier_id=$1,product_family_id=$2,item_group_id=$3,item_name=$4,item_stock=$5,objective_id=$6,status_id=$7,activity_id=$8 WHERE id=$9 RETURNING *`;
                const result = yield conn.query(sql, [b.supplier_id, b.product_family_id, b.item_group_id, b.item_name, b.item_stock, b.objective_id, b.status_id, b.activity_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Call_product Error : ${err.message}`);
            }
        });
    }
    // delete one Call_product by id I hold that method and replace it as delete CP where activity_id =$1
    deleteCall_product(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM call_products WHERE activity_id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this Call_product Error : ${err.message}`);
            }
        });
    }
}
exports.default = Call_productModel;
