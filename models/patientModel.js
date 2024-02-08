const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema(
    {
        id:String,
        name:String,
        age:String,
        phnno:String,
        address:String,
        bloodgrp:String,
        date:String,
        disease:String,
        prescription:String

    }
)

module.exports = mongoose.model("patients",patientSchema)