const express = require('express')
const path = require('path')
const cors = require('cors')
//const math = require('mathjs')
//const { Recoverable } = require('repl')


const app2 = express()

app2.use(express.static(path.join(__dirname , '/aplicacion2')))
app2.use(cors())
app2.use(express.json())
app2.use(express.urlencoded({extended:true}))

//app2.get('/',(req, res)=>{ 
    //res.sendFile(path.join(__dirname,  'index2.html'))
//})
app2.get('/',(req, res)=>{ 
    res.sendFile(path.join(__dirname, 'aplicacion2', 'index2.html'))
})

app2.get('/estoyvivo',(req, res)=>{
    res.statusCode = 200;
    res.send({"status":"si estoy vivo"})
    //res.sendFile(path.join(__dirname, 'html', 'index.html'))
})

app2.listen(4500 , function(){
    console.log('app is running in http://localhost:4500')
})



