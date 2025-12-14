const express = require('express')
const app = express();
const db = require('./db/db');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/posts.route');
const authRoutes = require('./routes/auth.route');

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

app.get('/', (req,res)=>{
    res.send('welcome to instagram clone');
})

app.use('/auth', authRoutes);

app.use('/users', userRoutes);

app.use('/posts', postRoutes);