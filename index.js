import express  from 'express'
import routes from './config/routes.js'
import morgan from 'morgan';

const app = express();

//settings
app.set('port', process.env.PORT || 8000);
app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/Api', routes);
app.get('*', (req, res) =>  res.send("error.. EndPoint Not Found!"))

//Initializing server, listening...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

export default app