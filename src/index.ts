import express, { Express } from 'express'
import cookieParser from 'cookie-parser'

const app: Express = express()

const PORT: number = 1234

app.use(express.json())
app.use(cookieParser())