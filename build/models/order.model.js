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
// reference
class OrderModel {
    // create new order by the following promise function it's returns promiese with Order type
    createOrder(o) {
        return __awaiter(this, void 0, void 0, function* () {
            // I used try and catch here to catch any error my eccure during the promise return
            try {
                //  I used connect to connect to the database
                const conn = yield database_1.default.connect();
                //  sql constant represents the sql query that will be executed into the database to insert new order with 2 columns (status,user_id)
                //  and 2 values will be set by passing them through the main function by the o argument which is Order type and that means the availability to have status(string) and user_id(number) in order types
                const sql = `INSERT INTO orders (status,user_id) VALUES ($1,$2) RETURNING *`;
                // the result constant makes the sql query execution doable by connecting the database and passing the sql constant which represents the query and the values which will be entered letter by the handler function
                const result = yield conn.query(sql, [o.status, o.user_id]);
                // release() responsable to close the database connection
                conn.release();
                // return the result which hold the query returend values
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this order Error : ${err.message}`);
            }
        });
    }
    // I follwoed the same stypes to declear getOneOrder function as createOrder function
    getOneOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from orders WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Order Error : ${err.message}`);
            }
        });
    }
    // I followed the same styles to declare getOneOrder function as createOrder function
    //  I added [] to Order to make the type of function return is Order array
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from orders`;
                // we get all the orders so no need to use variables for get the values needed as the previews functions which get one value only by id
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get this Order Error : ${err.message}`);
            }
        });
    }
    // I followed the same styles to declare getOneOrder function as createOrder function
    updateOrder(o) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE orders SET status=$1 WHERE id=$2 RETURNING *`;
                const result = yield conn.query(sql, [o.status, o.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Order Error : ${err.message}`);
            }
        });
    }
    // I followed the same styles to declare getOneOrder function as createOrder function
    deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM orders WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this order Error : ${err.message}`);
            }
        });
    }
    // reference
    // https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0293/modules/535057c1-db8d-403f-a6ae-6b3345338d10/lessons/e98f79f7-2b7c-4b8e-a6bf-e779610941ca/concepts/5cd3f5d8-ab54-4815-ba76-6fd283bd42df
    // https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0293/modules/535057c1-db8d-403f-a6ae-6b3345338d10/lessons/e98f79f7-2b7c-4b8e-a6bf-e779610941ca/concepts/dc82b0b9-f83f-4f46-ae80-900bd10876c8
    addProduct(quantity, order_Id, product_Id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [quantity, order_Id, product_Id]);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (err) {
                throw new Error(`Could not add this product # ${product_Id} to the order # ${order_Id}: ${err}`);
            }
        });
    }
}
exports.default = OrderModel;
