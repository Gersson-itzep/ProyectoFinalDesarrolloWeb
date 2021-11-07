import { Schema, model} from "mongoose";

const notasSchema = new Schema ({
   alumno: String,
    cursos: [{
        ref: "Cursos",
        type: Schema.Types.String
    }],
    actividad: String,
    nota: Number,

},
    {
        timestamps: true,
        versionKey: false
    
})

export default model('Notas', notasSchema);