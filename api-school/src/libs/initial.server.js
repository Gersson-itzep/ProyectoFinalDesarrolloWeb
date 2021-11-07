import Role from '../models/Role'

export const createRoles = async () =>{
    try {
        const count = await Role.estimatedDocumentCount()
        if(count>0) return;

        const values = await Promise.all([
        new Role({name: 'student'}).save(),
        new Role({name: 'profesor'}).save(),
        new Role({name: 'director'}).save()
    ])
    console.log(values)
    } catch (error) {
        console.error(error)
    }
}