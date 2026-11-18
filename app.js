import express from "express";
import 'dotenv/config.js';
import userRoutes from './routes/userRoutes.js';    
import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

//create express app
const app = express();

app.use(express.json()); 

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

try {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
    } catch(e) {
        console.log(e);
    }