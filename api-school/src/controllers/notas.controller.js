import Notas from '../models/notas.models'
import Cursos from '../models/cursos.models'


export const createNotas = async (req,res) =>{

const {alumno,cursos,actividad,nota} = req.body;

const newNotas = new Notas ({alumno,actividad,nota});


if(cursos){
    const foundCursos = await Cursos.find({name: {$in: cursos}}).populate()

    newNotas.cursos = foundCursos.map(curso => curso.name)
}

const notasSave = await newNotas.save()

res.status(201).json(notasSave)
} 

export const getNotas = async (req,res)=>{
    const notas = await Notas.find();
    res.json(notas)
}

export const deleteNotasById = async (req,res)=>{
    const {notaId} = req.params;
    await Notas.findByIdAndDelete(notaId);
    res.status(204).json();
        
    }

 