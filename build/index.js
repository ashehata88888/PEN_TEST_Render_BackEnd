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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import morgan from 'morgan'
const dotenv = __importStar(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
const whiteList = ["http://localhost:3000/", "http://mydomain/",
    // "https://www.google.com/"
];
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'), false);
        }
    },
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   app.use('/api', routes)
//   next();
// });
// app.use(morgan('short'))
app.use(express_1.default.json());
// Add headers
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   // res.setHeader ('Access-Control-Allow-Credentials',true) 
//   // Pass to next layer of middleware
//   next();
// });
app.use('/api', routes_1.default);
// const hello = (req: any,res: { json: (arg0: { hello: string[] }) => void })=>{
//   res.json({
//   "hello":["Ahmed","Mohamed","Mostafa"]
//   })
//   };
app.get('/', (req, res) => {
    res.json({ message: 'Hello World YAaaaaaaaaa' });
});
app.listen(PORT, () => {
    console.log(`Server is starting at prot:${PORT}`);
});
exports.default = app;
