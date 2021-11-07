import { Schema, model } from 'mongoose'

const studentsSchema = new Schema({
    name: String,
    apellido: String,
    correo: String,
    telefono: Number,
    grado: String,
    seccion: String
   
},{
    timestamps: true,
    versionKey: false
})

export default model('Students', studentsSchema);