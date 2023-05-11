import express, { Application, Response, Request } from 'express'
import cors from 'cors'
// import morgan from 'morgan'
import * as dotenv from 'dotenv'
import routes from './routes'


dotenv.config()


const PORT = process.env.PORT || 3000

const app: Application = express()
const allowedOrigins = ['https://ahmed-shehata-crm.onrender.com/','https://ahmed-shehata-crm.onrender.com/home','https://pen-test.onrender.com/','http://localhost:3000/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", ['http://localhost:3000','https://www.google.com/']);
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   app.use('/api', routes)
//   next();
// });

// app.use(morgan('short'))
app.use(express.json())
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

//  just for restarting the clould server
//  just for restarting the clould server
//  just for restarting the clould server


app.use('/api', routes)

// const hello = (req: any,res: { json: (arg0: { hello: string[] }) => void })=>{
//   res.json({
//   "hello":["Ahmed","Mohamed","Mostafa"]
//   })
//   };

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World YAaaaaaaaaa' })
})




app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app 
