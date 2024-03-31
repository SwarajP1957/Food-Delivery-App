import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './db.js';
import cors from 'cors';
import priceRoute from './routes/priceroutes.js'
const app = express()


dotenv.config();

connectDB();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/price',priceRoute)
app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to eccommerce App"
    })
})


const Port = process.env.Port || 6514

app.listen(Port,()=>{
    console.log(`Server Running On ${process.env.Dev_mode}`.bgBlue.white);
})