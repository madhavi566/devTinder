const express = require('express');

const app = express();

app.use('/xyz',(req,res)=>{
    res.send('xyz ')
})

app.use('/hello/2',(req,res)=>{
    res.send('hello 2')
})

app.use('/hello1',(req,res)=>{
    res.send('hello from hello route')
})


app.use('/goodbye',(req,res)=>{
    res.send('goodbye from goodbye route')
})

app.use('/',(req,res)=>{
    res.send('Hello world')
})


app.listen(7777,()=>{
    console.log('server is running on port 7777')
});