const express = require('express')
const app = express();
const db = require('./db/db');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/posts.route');
const authRoutes = require('./routes/auth.route');
const errorHandler = require('./middlewares/errorHandler.middleware');

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("Welcome to Instagram Mini Clone")
})

app.use('/auth', authRoutes);

app.use('/users', userRoutes);

app.use('/posts', postRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Oops! Route not found!'
    })
})