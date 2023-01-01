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
class BuModel {
    // create new BU
    createBu(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO bus(bu_name,bu_manager_name,bu_manager_mail) VALUES (
        $1,$2,$3) RETURNING *`;
                const result = yield conn.query(sql, [b.bu_name, b.bu_manager_name, b.bu_manager_mail]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this BU Error : ${err.message}`);
            }
        });
    }
    // get one BU by id
    getOneBu(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from bus WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this BU id Error : ${err.message}`);
            }
        });
    }
    // get all users
    getAllBus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from bus`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these BUs Error : ${err.message}`);
            }
        });
    }
    // udate one Bu by id
    updateBu(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE bus SET bu_name=$1,bu_manager_name=$2,bu_manager_mail=$3 WHERE id=$4 RETURNING *`;
                const result = yield conn.query(sql, [b.bu_name, b.bu_manager_name, b.bu_manager_mail, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this BU Error : ${err.message}`);
            }
        });
    }
    // delete one BU by id
    deleteBu(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM bus WHERE id=($1) RETURNING id, bu_name , bu_manager_name`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this BU Error : ${err.message}`);
            }
        });
    }
}
exports.default = BuModel;
