import mongoose from 'mongoose'

const MONGODB_URI = `mongodb+srv://nuevo_usuario_1:Test12345.@cluster0.e3mpe.mongodb.net/Project_Dw?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URI,{
useNewUrlParser: true, 
useUnifiedTopology: true
})
.then((db) => console.log("Mongodb is connected to", db.connection.host)) 
.catch((err) => console.error(err));
