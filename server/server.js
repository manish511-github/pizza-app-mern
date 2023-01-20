const express=require ('express');
const dotenv=require('dotenv');

const connectDB=require('./config/config')

require ('colors')
const morgan=require('morgan')


//config

dotenv.config()

//connection mongodb
 connectDB()


const app=express()
//middleware

app.use(express.json())
app.use(morgan('dev'))


//route
app.use("/api/pizzas",require("./routes/pizzaRoutes"));
app.use("/api/users",require("./routes/userRoutes"));


app.get("/",(req,res)=>{
    res.send("<h1> Hello From Node Server</h1>")
})

const port=process.env.PORT|| 8080

    app.listen(port,()=>{
    console.log(`Server Running on Port ${process.env.NODE_ENV} node on port ${process.env.PORT}` );

})