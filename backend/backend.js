const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/usersRoute');
const authRoutes = require('./routes/authRoute');
// const materialsRoutes = require('./routes/materialsRoute');
// const profileRoutes = require('./routes/profileRoute');

const app = express();

app.use(cors());

//Specifying the use of JSON
app.use(express.json());

//Attaching routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);
// app.use('/materials', materialsRoutes);

//Using port 4000
const port = process.env.PORT || 4000;




app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });