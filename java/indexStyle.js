let personaje2 = document.getElementById("pers2");
let derecha = document.getElementById("derecha");
let distanciaX=0;
let distanciaY=0;

derecha.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarX)});

//Funcion General
function mainCaminar(a,b,c,fnc){
    caminarDerecha(a,b,c,fnc);
    setTimeout(caminarDerecha,101,a,b,c,fnc);
    setTimeout(caminarDerecha,204,a,b,c,fnc);
};



function caminarDerecha(a,b,c,fnc){

    cambiar(a, "img/personajes/"+c);
    fnc();
    a.style.transition="0.09s"
    a.style.transform="translate("+distanciaX+"px,"+distanciaY+"px)";
    
    setTimeout(cambiar,100,a,"img/personajes/"+b);
    


};
//Fin de la funcon general


function sumarX(){
    distanciaX= distanciaX +5;
};


/*
function sumarY(){}
distanciaY = distanciaY-5;}
*/





function cambiar(a,b){
    a.src=b;
    console.log("Este es el mensaje")
};

