import { Schema, model} from 'mongoose';

const cursoSchema = new Schema(
 {
    name:String,
 },
 {
    versionKey: false
 }
);

export default model('Cursos', cursoSchema);