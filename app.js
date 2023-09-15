import express from "express"
import mongoose from "mongoose"
import { config } from 'dotenv'

/**
 * INSTANCIANDO O METODO CONFIG DOTENV
 */
config()

/**
 * INSTACIAMENTO DO EXPRESS
 */
const app = express()

/**
 * DEFININDO A PORTA DO SERVIDOR
 */
const port = process.env.PORT || 3000

/**
 * DEFININDO AS INFOS USADAS NO DATABASE
 *  As infos estão seguras no arquivo .env e facilita uma manutenção futura no banco de dados
 */
const USER_DB = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

/**
 * CONEXÃO COM O MONGO E
 * LEVANTE DO SERVIDOR
 */
mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/`)
// mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD}@cluster0.3owtykr.mongodb.net/`)
// THEN E CATCH PARA PEGAR POSSÍVEIS ERROS
.then(()=>{
    app.listen(port,()=>{
        console.log(`Servidor online na porta ${port}`)
    })
})
.catch((e)=>console.log(e.message))
