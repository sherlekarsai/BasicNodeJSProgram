const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hey it worked');

});

app.listen(3000,()=> console.log('Server is running'));

let name = 'sai';
console.log('Hello ${ name }');