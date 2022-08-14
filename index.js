const express = require ('express');

const app = express();
app.set('port','3000');
app.set('view engine','ejs');

app.use(express.json());


app.all('/user/:id', (req,res,next) =>{

console.log(`Paso por el midleWare`);

next();
})



app.use( (req,res)=> {


    console.log(`Route received:${req.protocol}://${req.get('host')}${req.originalUrl}`)
})







app.get('/user/:id', (req,res)=>{
    res.send('Se conecto perfecto al get del /User/:id');
    console.log(req.params);
})


app.post('/post',(req, res) => {
res.send('Esto es el link del post');
console.log(req.body);
});

app.get('/test', (req,res)=>{

const data = [{name:'Dana'},{name:'Galo'}, {name:'Juan'}, {name:'Lucho'}, {name:'Karlen'}, {name:'Celeste'}]


res.render('index.ejs',{people:data});
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log('Port on', app.get('port'));
})