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
class ActivityModel {
    // create new Activity
    createActivity(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO activities(user_id,bl_id,bu_id,activity_date_from,activity_date_to,activity_type_id,account_type_id,account_id,purchase_method_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`;
                const result = yield conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.activity_date_from, b.activity_date_to, b.activity_type_id, b.account_type_id, b.account_id, b.purchase_method_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Activity Error : ${err.message}`);
            }
        });
    }
    // get one Activity by id
    getOneActivity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from activities WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Activity by id Error : ${err.message}`);
            }
        });
    }
    // get all Activitys
    getAllActivitys() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from activities`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Activitys Error : ${err.message}`);
            }
        });
    }
    // udate one Activity by id
    updateActivity(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE activities SET user_id=$1,bl_id=$2,bu_id=$3,activity_date_from=$4,activity_date_to=$5,activity_type_id=$6,account_type_id=$7,account_id=$8,purchase_method_id=$9 WHERE id=$10 RETURNING *`;
                const result = yield conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.activity_date_from, b.activity_date_to, b.activity_type_id, b.account_type_id, b.account_id, b.purchase_method_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Activity Error : ${err.message}`);
            }
        });
    }
    // delete one Activity by id
    deleteActivity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM activities WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this Activity Error : ${err.message}`);
            }
        });
    }
}
exports.default = ActivityModel;
