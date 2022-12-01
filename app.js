import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
//import ProUser from './model/user.js';
import bcrypt from 'bcryptjs';

//CONNECTING TO THE DATABASE
mongoose.connect('mongodb://localhost:27017/login-app-db', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true
});

const app = express();

//GIVING THE LOCATION OF STATIC FILES WHICH I WANT TO THE SERVER
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
app.use('/', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());//USING THIS AS OUR DATA FROM CLIENT SIDE IS ALREADY STRINGIFY FROM JSON.


app.post('/api/register', async (req, res) => {
    const { password } = req.body;
    console.log(await bcrypt.hash(password,10));
    res.json({ status: 'ok' });
})

app.listen(3002, () => {
    console.log("server running at 3002");
});
