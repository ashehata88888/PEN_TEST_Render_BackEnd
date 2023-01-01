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
class Call_contactModel {
    // create new Call_contact
    createCall_contact(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO call_contacts(contact_person, mobile_number,authority_id,speciality_id,position_id,call_product_id,activity_id,account_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
                const result = yield conn.query(sql, [b.contact_person, b.mobile_number, b.authority_id, b.speciality_id, b.position_id, b.call_product_id, b.activity_id, b.account_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Call_contact Error : ${err.message}`);
            }
        });
    }
    // get one Call_contact by id
    getOneCall_contact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from call_contacts WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Call_contact by id Error : ${err.message}`);
            }
        });
    }
    // get all Call_contacts
    getAllCall_contacts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from call_contacts`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Call_contacts Error : ${err.message}`);
            }
        });
    }
    // udate one Call_contact by id
    updateCall_contact(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE call_contacts SET contact_person=$1, mobile_number=$2,authority_id=$3,speciality_id=$4,position_id=$5,call_product_id=$6,activity_id=$7,account_id=$8 WHERE id=$9 RETURNING *`;
                const result = yield conn.query(sql, [b.contact_person, b.mobile_number, b.authority_id, b.speciality_id, b.position_id, b.call_product_id, b.activity_id, b.account_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Call_contact Error : ${err.message}`);
            }
        });
    }
    // delete one Call_contact by id I'll hold this method and replace it with another function as I need to delete all contact where activity_id = $1
    deleteCall_contact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM call_contacts WHERE activity_id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this Call_contact Error : ${err.message}`);
            }
        });
    }
}
exports.default = Call_contactModel;
