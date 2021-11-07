import Teachers from '../models/teacher.models'
import Cursos from '../models/cursos.models'

export const createTeachers = async (req,res)=>{

    const {name,apellido,correo,telefono,cursos} = req.body

    const newTeacher = new Teachers({name,apellido,correo,telefono});

    if(cursos){
        const foundCursos = await Cursos.find({name: {$in: cursos}}).populate()
        newTeacher.cursos = foundCursos.map(curso => curso.name)
    }
    const teacherSave = await newTeacher.save()

    res.status(201).json(teacherSave)
}

export const getTeachers = async (req,res)=>{
    const teacher = await Teachers.find();
    res.json(teacher)
}

export const getTeacherName = async(req,res)=>{
    const teacher = await Teachers.find({},{'name':1});
    res.json(teacher)
    }
    
    export const getTeacherCorreo = async (req,res)=>{
    const teacher = await Teachers.find({},{'correo':1});
    res.json(teacher)
        
    }

export const getTeacherById = async (req,res)=>{
    const teacher = await Teachers.findById(req.params.teacherId);
    res.status(200).json(teacher); 
}
    
    
    export const updateTeacherById = async (req,res)=>{
    const updateTeacher = await Teachers.findByIdAndUpdate(req.params.teacherId, req.body,{
        new: true
    })
        res.status(200).json(updateTeacher)
    }
    
    
    export const deleteTeacherById = async (req,res)=>{
    const {teacherId} = req.params;
    await Teachers.findByIdAndDelete(teacherId);
    res.status(204).json();
        
    }