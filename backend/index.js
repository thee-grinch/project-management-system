const express = require('express');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
require('dotenv').config()


const passport = require('./app/strategies/localStrategy');
const { hashPassword } = require('./app/utils/bcrypt');
const userRouter = require('./app/routes/user')
const taskRouter = require('./app/routes/tasks')
const authenticateUser = require('./app/strategies/jwtStrategy');
const cors = require('cors');

const app = express();

const connectDB = (async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB is connected');
        } catch (error) {
            console.log(error);
            }
    })

app.use(expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions'
      }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    }
}));
connectDB();

app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:8080', // Frontend URL
  credentials: true, // Allow cookies
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true })); 
// app.use(passport.initialize());
// app.use(passport.session());
// app.use((req, res, next) => {
//   console.log('Session ID:', req.session.id);
//   // console.log('Session:', req.session);
//   next();
// });

app.use(authenticateUser);
app.use('/', userRouter);
app.use('/', taskRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
