const express = require('express');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
require('dotenv').config()


const passport = require('./app/strategies/localStrategy');
const { hashPassword } = require('./app/utils/bcrypt');
const userRouter = require('./app/routes/user')
const taskRouter = require('./app/routes/tasks')
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

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.setHeader('Access-Control-Allow-Credentials', 'true'); 
    next();
  });



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
app.use(cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:8080']; // List of origins you want to allow
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy violation'));
      }
    },
    credentials: true // Important: This enables credentials (cookies, HTTP authentication)
  }));
app.use(express.urlencoded({ extended: true })); 
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log('Session ID:', req.session.id);
  // console.log('Session:', req.session);
  next();
});

app.use('/', userRouter);
app.use('/', taskRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
