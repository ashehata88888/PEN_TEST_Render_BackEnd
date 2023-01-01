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
                const sql = `INSERT INTO activities(user_id,bl_id,bu_id,activity_date_from,activity_date_to,activity_type_id,account_type_id,account_id,purchase_method_id,comment) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;
                const result = yield conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.activity_date_from, b.activity_date_to, b.activity_type_id, b.account_type_id, b.account_id, b.purchase_method_id, b.comment]);
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
    // get All Activities for Super user
    getAllActivityforSuperUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                //       const sql = `SELECT * from activities WHERE id=($1)`
                const custSql = `SELECT
          activities.id as Activity_ID, 
              activities.session_created_at,
              users.user_name,
              users.user_mail,
              bls.bl_name,
              bl_manager_name,
              bus.bu_name,
              activities.activity_date_from,
              activities.activity_date_to,
              activity_types.activity_type,
              account_types.account_type,
              accounts.account_name,
              accounts.account_area,
              purchase_methods.purchase_method,
              activities.comment,
              call_products.id AS Product_Call_ID,
              suppliers.supplier_name,
              product_families.product_family,
              item_groups.item_group,
              call_products.item_name,
              call_products.item_stock,
              objectives.objective_name,
              statuses.status_name,
              call_contacts.id as Call_Contact_ID,
              call_contacts.contact_person,
              call_contacts.mobile_number,
              authorities.authority_name,
              specialities.speciality_name,
              positions.position_name
         
              FROM activities
         
              LEFT JOIN users ON (users.id = activities.user_id)
                  LEFT JOIN bls ON (bls.id = activities.bl_id)
                  LEFT JOIN bus ON (bus.id = activities.bu_id)
                  LEFT JOIN activity_types ON (activity_types.id = activities.activity_type_id)
                  LEFT JOIN account_types ON (account_types.id = activities.account_type_id)
                  LEFT JOIN accounts ON (accounts.id = activities.account_id)
                  LEFT JOIN purchase_methods ON (purchase_methods.id = activities.purchase_method_id)
         
                  Right JOIN call_products ON (call_products.activity_id = activities.id)
                  LEFT JOIN suppliers ON (suppliers.id = call_products.supplier_id)
                  LEFT JOIN product_families ON (product_families.id = call_products.product_family_id)
                  LEFT JOIN item_groups ON (item_groups.id = call_products.item_group_id)
                  LEFT JOIN objectives ON (objectives.id = call_products.objective_id)
                  LEFT JOIN statuses ON (statuses.id = call_products.status_id)
         
                  Right JOIN call_contacts ON (call_contacts.call_product_id = call_products.id)
                  LEFT JOIN authorities ON (authorities.id = call_contacts.authority_id)
                  LEFT JOIN specialities ON (specialities.id = call_contacts.speciality_id)
                  LEFT JOIN positions ON (positions.id = call_contacts.position_id)
         
                  
                
                  ORDER BY activities.id ASC; `;
                const result = yield conn.query(custSql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these activities by id Error : ${err.message}`);
            }
        });
    }
    // get All Activities by user id
    getAllActivityforOneUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                //       const sql = `SELECT * from activities WHERE id=($1)`
                const custSql = `SELECT activities.id,activities.session_created_at,activities.activity_date_from,activities.activity_date_to,activity_types.activity_type,account_types.account_type,accounts.account_name,accounts.account_area,purchase_methods.purchase_method 
          FROM activities 
          LEFT JOIN activity_types ON (activity_types.id = activities.activity_type_id) 
          LEFT JOIN account_types ON (account_types.id = activities.account_type_id)  
          LEFT JOIN accounts ON (accounts.id = activities.account_id) 
          LEFT JOIN purchase_methods ON (purchase_methods.id = activities.purchase_method_id) 
          Where activities.user_id =($1) 
          ORDER BY activities.session_created_at ASC `;
                const result = yield conn.query(custSql, [id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these activities by id Error : ${err.message}`);
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
                const sql = `UPDATE activities SET user_id=$1,bl_id=$2,bu_id=$3,activity_date_from=$4,activity_date_to=$5,activity_type_id=$6,account_type_id=$7,account_id=$8,purchase_method_id=$9 comment=$10 WHERE id=$11 RETURNING *`;
                const result = yield conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.activity_date_from, b.activity_date_to, b.activity_type_id, b.account_type_id, b.account_id, b.purchase_method_id, b.comment, b.id]);
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
