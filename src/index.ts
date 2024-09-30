import express, { Express } from 'express'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

const app: Express = express()

const PORT: number = 1234

app.use(express.json())
app.use(cookieParser())

app.listen(process.env.PORT,() =>{
    console.log(`you are in at port ${process.env.PORT}`)
})