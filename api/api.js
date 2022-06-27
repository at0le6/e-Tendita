import express from 'express'
import morgan from 'morgan'
import * as Routers from './routes/index.js'
import { creatBases } from "./lib/databaseSetUp.js";

const app=express()
const prefix="/api/v1"

app.use(express.json())
app.use(morgan("dev"))
//rutas van aqui con el prefico de APP
creatBases()
app.use(prefix,Routers.productoRouter)
app.use(prefix,Routers.cuponRouter)
app.use(prefix,Routers.userRouter)
app.use("/",(req,res)=>res.sendStatus(200))

export default app