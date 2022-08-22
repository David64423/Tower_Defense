const express = require ('express');

const app = express();
app.set('port','3000');
app.set('view engine','ejs');

app.use(express.json());


app.all('/user/:id', (req,res,next) =>{   /* Esto fue una practica nomas, asi que ignoralo */

console.log(`Paso por el midleWare`);

next();
})



app.use( (req,res, next)=> { /* Esto fue una practica nomas, asi que ignoralo */


    console.log(`Route received:${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
})





app.get('/user/:id', (req,res)=>{   /* Esto fue una practica nomas, asi que ignoralo */
    res.send('Se conecto perfecto al get del /User/:id');
    console.log(req.params);
})


app.post('/post',(req, res) => {  /* Esto fue una practica nomas, asi que ignoralo */ 
res.send('Esto es el link del post');
console.log(req.body);
});

app.get('/test', (req,res)=>{ /* Esto fue una practica nomas, asi que ignoralo */

const data = [{name:'Dana'},{name:'Galo'}, {name:'Juan'}, {name:'Lucho'}, {name:'Karlen'}, {name:'Celeste'}]


res.render('index.ejs',{people:data});
console.log(__dirname);
});



app.use(express.static(__dirname+'/public')); /*El dirname almacena mi url de donde esta mi proyecto,es una varia-
                                                ble global*/

app.listen(app.get('port'), () => {
    console.log('Port on', app.get('port'));
})