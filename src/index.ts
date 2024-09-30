import express, { Express } from 'express'

const app: Express = express()

const PORT: number = 1234

app.use(express.json())
app.use(cookieParser())