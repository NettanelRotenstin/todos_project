import express, { Express } from 'express'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import authCtrl from './controllers/authController'
import userCtrl from './controllers/userController'
import todosCtrl from './controllers/todosController'


const app: Express = express()

const PORT: number = 1234

app.use(express.json())
app.use(cookieParser())

app.use('/auth',authCtrl)
app.use('/users',userCtrl)
app.use('/todos',todosCtrl)

app.listen(process.env.PORT,() =>{
    console.log(`you are in at port ${process.env.PORT}`)
})