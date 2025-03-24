const express = require('express');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/usersRoute');
const authRoutes = require('./routes/authRoute');
const materialsRoutes = require('./routes/materialsRoute');
// const profileRoutes = require('./routes/profileRoute');

const app = express();

app.use(cors({
  origin: 'http://10.47.0.172:4000',
  credentials: true
}));

//Specifying the use of JSON
app.use(express.json());

app.use(session({
  secret: 'Surgi-Vice-Secret-Key',
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    secure: false,
    maxAge: 1000*60*60
  }
}));

//Attaching routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);
app.use('/materials', materialsRoutes);

//Using port 4000
const port = process.env.PORT || 4000;




app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });