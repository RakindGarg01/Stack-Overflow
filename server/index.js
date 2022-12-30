import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import userRoutes from './routes/user.js'
import blogRoutes from './routes/Blogs.js'

const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended : true}))
app.use(express.urlencoded({limit : "30mb" , extended : true}))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router()



//Storage
app.get('/' , (req,res) =>{
    res.send("This is a Stack OverFlow Clone API")
})
// app
app.use('/user' , userRoutes)
app.use('/questions' , questionRoutes)
app.use('/answer' , answerRoutes)
app.use('/community', blogRoutes)



const PORT = process.env.PORT || 8000;
mongoose.set({ strictQuery: true })
const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL ,{useNewUrlParser : true , useUnifiedTopology : true})
    .then(() => {
        console.log("Connection With DataBase is Succesfully Estabilished.");
    })
    .catch((err) => {
        console.log("OOPS!! You lost Your Connection");
    })

app.listen(PORT , (err)=>{console.log(`Server is running on port ${PORT}` , err)})