let personaje2 = document.getElementById("pers2");
let derecha = document.getElementById("derecha");
let abajo = document.getElementById("abajo");
let distanciaX=0;
let distanciaY=0;
let distanciaM=5;

derecha.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarX)});
arriba.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarY)});
abajo.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarY)});

//Funcion General
function mainCaminar(a,b,c,fnc){
    let tiempo=0;
    let i=0;

    while(i<3){
    setTimeout(caminar,tiempo,a,b,c,fnc);
    tiempo= tiempo + 110;
    i++;
    };
};



function caminar(a,b,c,fnc){

    cambiar(a, "img/personajes/"+c);
    fnc();
    a.style.transition="0.09s"
    a.style.transform="translate("+distanciaX+"px,"+distanciaY+"px)";
    
    setTimeout(cambiar,100,a,"img/personajes/"+b);
    


};
//Fin de la funcon general


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

