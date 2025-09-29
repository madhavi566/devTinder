const express = require('express');

const app = express();

// app.use('/user',(req,res)=>{
//     res.send('2 get user data')
// })

// this will match only get method
app.get('/user',(req,res)=>{
    res.send({'firsname':'Madhavi','lastname':'Pavan'})
})

app.get('/abc',(req,res)=>{
    res.send({'firsname':'abc','lastname':'abc'})
})

// ? - matches zero or one occurrence of the preceding character
// will match only quam and qum
app.get('/qua?m',(req,res)=>{
    res.send('qualcom abc')
})


// matches only /m as regex
app.get('/m',(req,res)=>{
    res.send('only m')
})


// + matches one or more occurrences of the preceding character in repeated mode
app.get('/madha(vi)+b',(req,res)=>{
    res.send('only madhavi and vi can be repeated')
})


// * matches anything before or after the specified character
app.get('/madhavi*b',(req,res)=>{
    res.send('matches madhavi....b inbetween anything')
})

// (xx) optional matches only abcd or abcvid
app.get('/abc(vi)?d',(req,res)=>{
    res.send('matches abc....d inbetween anything')
})

app.get(/z/,(req,res)=>{
    res.send('matches any path with z in it')
})


app.get(/.*fly$/,(req,res)=>{
    res.send('matches start anything and end fly')
})


app.get('/users/:userId/:address/:pincode',(req,res)=>{
    console.log(req.params)
    res.send('matches start anything and end fly')
})

app.get('/details',(req,res)=>{
    console.log(req.query)
    res.send({'status':'success'})
})

// app.all - matches path that exactly matches
// app.use - matches path that starts or begins with 
// this will match only post method
app.post('/user',(req,res)=>{
    res.send('post user data')
})

// this will match only post method
app.delete('/user',(req,res)=>{
    res.send('delete success')
})

// this will match all the methods
app.use('/',(req,res)=>{
    res.send('default handler')
})

app.listen(7777,()=>{
    console.log('server is running on port 7777')
});