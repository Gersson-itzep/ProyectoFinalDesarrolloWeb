
import Alumnos from '../models/Alumnos'


export const createAlumnos = async (req,res)=>{

    const {name,apellido,correo,telefono,grado,seccion} = req.body

    const newStudent = new Alumnos({name,apellido,correo,telefono,grado,seccion});

    const studentSave = await newStudent.save()

    res.status(201).json(studentSave)
}

export const getAlumnos = async(req,res)=>{
const alumnos = await Alumnos.find();
res.json(alumnos)
}

export const getAlumnosName = async (req,res)=>{
const alumnos = await Alumnos.find({},{'name':1});
res.json(alumnos)
    
}

export const getAlumnosCorreo = async (req,res)=>{
    const alumnos = await Alumnos.find({},{'correo':1});
    res.json(alumnos)
        
    }
    


export const getAlumnosById = async (req,res)=>{
const alumnos = await Alumnos.findById(req.params.alumnosId);
res.status(200).json(alumnos);
    
}


export const updateAlumnosById = async (req,res)=>{
const updateAlumnos = await Alumnos.findByIdAndUpdate(req.params.alumnosId, req.body,{
    new: true
})
    res.status(200).json(updateAlumnos)
}


export const deleteAlumnosById = async (req,res)=>{
const {alumnosId} = req.params;
await Alumnos.findByIdAndDelete(alumnosId);
res.status(204).json();
    
}

