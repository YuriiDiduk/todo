import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
const front = process.env.FRONT_URL || "mongodb://localhost:4000";


app.use(express.json())
app.use(cors())
app.use(todoRoutes) 

const uri: string = `mongodb+srv://admin:mongo26@cluster0.iozni.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://${front}`)
        )
    )
    .catch((error) => {
        throw error
    })
