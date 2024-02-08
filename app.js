const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const patientRoute = require("./controllers/patientRoute")

//middleware
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/hospitalDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

//routing
app.use("/api/hospital",patientRoute)

app.listen(3002,()=>{
    console.log("Server Running")
})