import { Schema, model} from "mongoose";

const teachersSchema = new Schema ({
    name: String,
    apellido: String,
    correo: String,
    telefono: Number,
    cursos: [{
        ref: "Cursos",
        type: Schema.Types.String
    }]
},
    {
        timestamps: true,
        versionKey: false
    
})

export default model('Teaches', teachersSchema);

