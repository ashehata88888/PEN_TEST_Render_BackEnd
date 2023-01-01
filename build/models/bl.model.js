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
class BlModel {
    // create new BL
    createBl(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO bls(bl_name,bl_manager_name,bl_manager_mail,bu_id) VALUES (
        $1,$2,$3,$4) RETURNING *`;
                const result = yield conn.query(sql, [b.bl_name, b.bl_manager_name, b.bl_manager_mail, b.bu_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this BL Error : ${err.message}`);
            }
        });
    }
    // get one BL by id
    getOneBl(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from bls WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this BL id Error : ${err.message}`);
            }
        });
    }
    // get all BLs
    getAllBls() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from bls`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Bls Error : ${err.message}`);
            }
        });
    }
    // udate one Bl by id
    updateBl(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE bls SET bl_name=$1,bl_manager_name=$2,bl_manager_mail=$3,bu_id=$4 WHERE id=$5 RETURNING *`;
                const result = yield conn.query(sql, [b.bl_name, b.bl_manager_name, b.bl_manager_mail, b.bu_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Bl Error : ${err.message}`);
            }
        });
    }
    // delete one BL by id
    deleteBl(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM bls WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this BL Error : ${err.message}`);
            }
        });
    }
}
exports.default = BlModel;
