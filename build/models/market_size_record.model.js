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
class Market_size_recordModel {
    // create new Market_size_record
    createMarket_size_record(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO market_size_records(egmed_consumption,total_consumption,competitor_id,item_qty1,item_status1_id,item_qty2,item_status2_id,market_size_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
                const result = yield conn.query(sql, [b.egmed_consumption, b.total_consumption, b.competitor_id, b.item_qty1, b.item_status1_id, b.item_qty2, b.item_status2_id, b.market_size_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Market_size_record Error : ${err.message}`);
            }
        });
    }
    // get one Market_size_record by id
    getOneMarket_size_record(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from market_size_records WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Market_size_record by id Error : ${err.message}`);
            }
        });
    }
    // get all Market_size_records
    getAllMarket_size_records() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from market_size_records`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Market_size_records Error : ${err.message}`);
            }
        });
    }
    // udate one Market_size_record by id
    updateMarket_size_record(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE market_size_records SET egmed_consumption=$1,total_consumption=$2,competitor_id=$3,item_qty1=$4,item_status1_id=$5,item_qty2=$6,item_status2_id=$7,market_size_id=$8 WHERE id=$9 RETURNING *`;
                const result = yield conn.query(sql, [b.egmed_consumption, b.total_consumption, b.competitor_id, b.item_qty1, b.item_status1_id, b.item_qty2, b.item_status2_id, b.market_size_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Market_size_record Error : ${err.message}`);
            }
        });
    }
    // delete one Market_size_record by id
    deleteMarket_size_record(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM market_size_records WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this Market_size_record Error : ${err.message}`);
            }
        });
    }
}
exports.default = Market_size_recordModel;
