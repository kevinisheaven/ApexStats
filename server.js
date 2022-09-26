import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
// const profileRoute = import('./routes/profile.js')
import profile from './routes/profile.js'  //profile == router

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
// morgan gives results like: GET /api/v1/profile/psn/OGgluttonoustoad 404 9.781 ms - 174
}

//load env
dotenv.config({path: './config.env'})

const app = express();

//dev logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Profile routes
//app.use('/api/v1/profile', require('./routes/profile'))
app.use('/api/v1/profile', profile)

// Handle production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static(__dirname + '/public/'))

//     // Handle SPA (single page application)
//     app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
// }

const port = process.env.PORT || 5003 //|| 8000


app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})