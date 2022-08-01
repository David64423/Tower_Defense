let personaje2 = document.getElementById("pers2");
let derecha = document.getElementById("derecha");
let distanciaX=0;
let distanciaY=0;

derecha.addEventListener('click',function(){ mainCaminar(personaje2)});


function mainCaminar(a){
    caminarDerecha(personaje2);
    setTimeout(caminarDerecha,101,personaje2);
    setTimeout(caminarDerecha,204,personaje2);
};



function caminarDerecha(a){

    cambiar(a, "img/personajes/pers2_2.png");
    distanciaX= distanciaX +5;
    a.style.transform="translate("+distanciaX+"px,"+distanciaY+"px)";
    
    setTimeout(cambiar,100,personaje2,"img/personajes/pers2_1.png");
    


};




function cambiar(a,b){
    a.src=b;
    console.log("Este es el mensaje")
};

