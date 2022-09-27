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



const port = process.env.PORT || 8080


app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})