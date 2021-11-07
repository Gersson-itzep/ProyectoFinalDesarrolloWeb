import Cursos from '../models/cursos.models'
export const createCursos = async () =>{
    try {
        const count = await Cursos.estimatedDocumentCount()
        if(count>0) return;

        const values = await Promise.all([
        new Cursos({name: 'matematica'}).save(),
        new Cursos({name: 'ciencias'}).save(),
        new Cursos({name: 'informatica'}).save(),
        new Cursos({name: 'sociales'}).save()
    ])
    console.log(values)
    } catch (error) {
        console.error(error)
    }
}