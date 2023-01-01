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
class Market_sizeModel {
    // create new Market_size
    createMarket_size(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO market_size(supplier_id,product_family_id,item_group_id,market_potential_id) VALUES (
$1,$2,$3,$4) RETURNING *`;
                const result = yield conn.query(sql, [b.supplier_id, b.product_family_id, b.item_group_id, b.market_potential_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Market_size Error : ${err.message}`);
            }
        });
    }
    // get one Market_size by id
    getOneMarket_size(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from market_size WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Market_size by id Error : ${err.message}`);
            }
        });
    }
    // get all Market_sizes
    getAllMarket_sizes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from market_size`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Market_sizes Error : ${err.message}`);
            }
        });
    }
    // udate one Market_size by id
    updateMarket_size(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE market_size SET supplier_id=$1,product_family_id =$2,item_group_id =$3,market_potential_id =$4 WHERE id=$5 RETURNING *`;
                const result = yield conn.query(sql, [b.supplier_id, b.product_family_id, b.item_group_id, b.market_potential_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Market_size Error : ${err.message}`);
            }
        });
    }
    // delete one Market_size by id
    deleteMarket_size(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM market_size WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this Market_size Error : ${err.message}`);
            }
        });
    }
}
exports.default = Market_sizeModel;
