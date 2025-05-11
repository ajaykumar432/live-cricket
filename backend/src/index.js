// const connectDb = require('../src/config/database')
const cors = require('cors')
const express = require('express')
const userRoute = require('../src/routes/userRoute')
const path = require('path')
const errorHandler = require('./utils/errorHandler')
const dotenv = require('dotenv');

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config(); 
// connectDb()
app.use(express.static(path.join(__dirname, 'public')));

app.use('/app', userRoute)

// app.use(errorHandler())
const port = process.env.PORT;
app.listen(port, () =>{
    // connectDb()
    console.log(`Server is running on port ${port}`)
})

// const connectDb = require('../src/config/database');
// const cors = require('cors');
// const express = require('express');
// const userRoute = require('./routes/userRoute');
// const path = require('path');
// const errorHandler = require('./utils/errorHandler');
// const dotenv = require('dotenv');

// const app = express();
// dotenv.config(); 

// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/app', userRoute);

// // Use error handler without invoking it
// app.use(errorHandler);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     // connectDb();
//     console.log(`Server is running on port ${port}`);
// });
