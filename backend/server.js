import express from 'express';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';

const app=express();

dotenv.config();

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });


app.listen(5000,()=>{
    console.log('server port 5000 is running')
})