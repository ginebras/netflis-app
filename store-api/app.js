const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/public/uploads',express.static(__dirname+'/public/uploads'));

app.use(process.env.API_AUTH,require('./routes/Auth.route'));
app.use(process.env.API_USER,require('./routes/User.route'));
app.use(process.env.API_MOVIE,require('./routes/Movie.route'));
app.use(process.env.API_LIST,require('./routes/List.route'));

module.exports=app;