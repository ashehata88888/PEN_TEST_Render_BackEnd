"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv.config();
const passwordEnv = process.env.BCRYPT_PASS;
const salt = process.env.SALT_ROUNDS;
const hashPass = (pass) => {
    const saltend = parseInt(salt, 10);
    return bcrypt_1.default.hashSync(pass + passwordEnv, saltend);
};
class UserModel {
    // create new user
    createUser(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO users (
        first_name,
        last_name,
        user_name,
        user_mail,
        position,
        privilege,
        status,
        password,
        bl1_id,
        bl2_id,
        bl3_id,
        bl4_id,
        bl5_id,
        bl6_id,bl7_id,bu_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING *`;
                const result = yield conn.query(sql, [u.first_name, u.last_name, u.user_name, u.user_mail,
                    u.position, u.privilege, u.status, hashPass(u.password),
                    u.bl1_id, u.bl2_id, u.bl3_id, u.bl4_id, u.bl5_id, u.bl6_id, u.bl7_id, u.bu_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this user Error : ${err.message}`);
            }
        });
    }
    // get one user by id
    getOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from users WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this user id Error : ${err.message}`);
            }
        });
    }
    // get all users
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from users`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get this user Error : ${err.message}`);
            }
        });
    }
    // udate one user by id
    updateUser(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE users SET  
      first_name=$1,
      last_name=$2,
      user_name=$3,
      user_mail=$4,
      position=$5,
      privilege=$6,
      status=$7,
      password=$8,
      bl1_id=$9,
      bl2_id=$10,
      bl3_id=$11,
      bl4_id=$12,
      bl5_id=$13,
      bl6_id=$14,
      bl7_id=$15,
      bu_id=$16 WHERE id=$17 RETURNING *`;
                const result = yield conn.query(sql, [
                    u.first_name, u.last_name, u.user_name, u.user_mail,
                    u.position, u.privilege, u.status, hashPass(u.password),
                    u.bl1_id, u.bl2_id, u.bl3_id, u.bl4_id, u.bl5_id, u.bl6_id, u.bl7_id, u.bu_id,
                    u.id
                ]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this user Error : ${err.message}`);
            }
        });
    }
    // udate one user by id
    updateUserPass(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE users SET 
        password=$1 WHERE id=$2 RETURNING *`;
                const result = yield conn.query(sql, [hashPass(u.password), u.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this user Password Error : ${err.message}`);
            }
        });
    }
    // delete one user by id
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM users WHERE id=($1) RETURNING id, user_name , bl1_id, bu_id`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this user Error : ${err.message}`);
            }
        });
    }
    // Auth user
    authenticate(user_name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT password FROM users WHERE user_name=$1`;
                const result = yield conn.query(sql, [user_name]);
                if (result.rows.length) {
                    const { password: hashPass } = result.rows[0];
                    const isPasswordValid = bcrypt_1.default.compareSync(password + passwordEnv, hashPass);
                    if (isPasswordValid) {
                        const sql = `SELECT * FROM users WHERE user_name=$1`;
                        const userinfo = yield conn.query(sql, [user_name]);
                        return userinfo.rows[0];
                    }
                }
                conn.release();
                return null;
            }
            catch (err) {
                throw new Error(`Invaled username or password ${err.message}`);
            }
        });
    }
}
exports.default = UserModel;
