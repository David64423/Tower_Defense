let personaje2 = document.getElementById("pers2");
let derecha = document.getElementById("derecha");
let abajo = document.getElementById("abajo");
let izquierda = document.getElementById("izquierda");
let x = document.getElementById("x");
let y = document.getElementById("y");
let distanciaX=0;
let distanciaY=0;    
let distanciaM=0.7;
izquierda.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarX)});
derecha.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarX)});
arriba.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarY)});
abajo.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarY)});



//Funcion para actualizar coordenadas
const cambiarXY = () => {
x.innerText = distanciaX;
y.innerText = distanciaY;
};

cambiarXY();


//Funcion General
function mainCaminar(a,b,c,fnc){
    let tiempo=0;
    let i=0;

    while(i<3){
        if ( (distanciaY<=(-13) && fnc===sumarY) ){
            
        }
        else{
            setTimeout(caminar,tiempo,a,b,c,fnc);
            tiempo= tiempo + 200;
            
        }
        i++;
    };
    
};



function caminar(a,b,c,fnc){

    cambiar(a, "img/personajes/"+c);
    fnc();
    a.style.transition="0.09s"
    a.style.transform="translate("+distanciaX+"vw,"+distanciaY+"vh)";
    
    setTimeout(cambiar,100,a,"img/personajes/"+b);
    
    cambiarXY();

};
//Fin de la funcon general

function restarX(){
    distanciaX= distanciaX -distanciaM;
};

function sumarX(){
    distanciaX= distanciaX +distanciaM;
};

function sumarY(){
distanciaY = distanciaY - distanciaM;
};
function restarY(){
    distanciaY = distanciaY + distanciaM
    };



/*
function sumarY(){}
distanciaY = distanciaY-5;}
*/





function cambiar(a,b){
    a.src=b;
    console.log("Este es el mensaje")
};



