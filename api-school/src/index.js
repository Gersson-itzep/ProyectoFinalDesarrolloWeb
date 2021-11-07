import app from './app'
import './database'
import cors from 'cors'
app.set('port', process.env.PORT || 5000);

app.listen(5000);
console.log('Server listen on port', 5000);
