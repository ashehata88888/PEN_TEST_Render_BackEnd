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
class ItemGroupModel {
    // create new Item_Group
    createItem_group(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO item_groups(item_group,item_name,item_stock,product_family_id) VALUES (
        $1,$2,$3,$4) RETURNING *`;
                const result = yield conn.query(sql, [b.item_group, b.item_name, b.item_stock, b.product_family_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this item_group Error : ${err.message}`);
            }
        });
    }
    // get one item_group by id
    getOneItem_group(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from item_groups WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this item_group id Error : ${err.message}`);
            }
        });
    }
    // get All item_group by product_Family
    getAllItem_groupByPFID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from item_groups WHERE product_family_id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get this item_group id Error : ${err.message}`);
            }
        });
    }
    // get all item_groups
    getAllItem_groups() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from item_groups`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these item_groups Error : ${err.message}`);
            }
        });
    }
    // udate one item_group by id
    updateItem_group(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE item_groups SET item_group=$1,item_name=$2,item_stock=$3,product_family_id=$4 WHERE id=$5 RETURNING *`;
                const result = yield conn.query(sql, [b.item_group, b.item_name, b.item_stock, b.product_family_id, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this item_group Error : ${err.message}`);
            }
        });
    }
    // delete one item_group by id
    deleteItem_group(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM item_groups WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this item_group Error : ${err.message}`);
            }
        });
    }
}
exports.default = ItemGroupModel;
