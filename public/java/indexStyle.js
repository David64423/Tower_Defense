let personaje2 = document.getElementById("pers2");
let derecha = document.getElementById("derecha");
let abajo = document.getElementById("abajo");
let izquierda = document.getElementById("izquierda");
let x = document.getElementById("x");
let y = document.getElementById("y");
let distanciaX=0;
let distanciaY=0;    
let distanciaM=0.7;
let start = document.getElementById('start');
let reset = document.getElementById('reset');
izquierda.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarX)});
start.addEventListener('click',function(){ automatizar(personaje2,"pers2_1.png","pers2_2.png",sumarX)});
arriba.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarY)});
abajo.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarY)});
botomA.addEventListener('click',function(){ataque(personaje2,"pers2_2.png")});




//Funcion para actualizar coordenadas
const cambiarXY = () => {
x.innerText = distanciaX;
y.innerText = distanciaY;
};

cambiarXY();
reset.addEventListener('click',resetear());
function resetear(){
    distanciaX=0;
    distanciaY=0;
    personaje2.style.transform=`translate(${distanciaX}vw, ${distanciaY}vh)`;
    personaje2.style.transition="0.009s"
    cambiarXY();
}


//Funcion General
function mainCaminar(a,b,c,fnc){
    let tiempo=0;
    let i=0;

    while(i<1){
        if ((distanciaX<=(2) && fnc===restarX) || (distanciaX>=(34) && fnc===sumarX)|| (distanciaY<=(-13) && fnc===sumarY) || (distanciaY>=(32) && fnc===restarY) ){
            
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
};



function automatizar(a,b,c){
   
   let camino= Math.floor(Math.random()*2);
    console.log("camino:",camino);
   
   let tiempo=0;
   let aumento=200;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);

if(camino===1){
   //Abajo 1
let i56=0;
while(i56<24) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}



let camino2 = Math.floor(Math.random()*2);
console.log("camino2:",camino2);

if(camino2===1){


//Derecha2

 i56=0;
while(i56<16) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}




//Abajo 2

 i56=0;
while(i56<9) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


}


else{
    //Derecha2

 i56=0;
 while(i56<3) {
    tiempo += aumento;
    setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
 i56++;
 }


 //Abajo2

 i56=0;
while(i56<17) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}



//Derecha3

i56=0;
while(i56<3) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo3

i56=0;
while(i56<7) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


//Derecha4

i56=0;
while(i56<7) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


// Arriba 1


i56=0;
while(i56<4) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}


//Derecha5

i56=0;
while(i56<3) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}

// Arriba 2

i56=0;
while(i56<9) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}


}


//Derecha3

i56=0;
while(i56<10) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}

//Abajo 3

i56=0;
while(i56<8) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


//Derecha4

i56=0;
while(i56<13) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}

// Arriba 1


i56=0;
while(i56<25) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}






}

// CAMINO 2
else {
//Derecha2

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo 2

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}



//Derecha3

i56=0;
while(i56<7) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


// Arriba 1


i56=0;
while(i56<15) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}


//Derecha4

i56=0;
while(i56<13) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo 3

i56=0;
while(i56<8) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


//Derecha5

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo 4

i56=0;
while(i56<17) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}

//Derecha6

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}
}
   
   
   
   
    /* let tiempo = 0;

    let i43=0;

    while( i43<7){

    setTimeout(()=>{
        
        console.log("Espera");
        mainCaminar(a,b,c,sumarX);
        tiempo = tiempo+ 10000;
        
    
    
},tiempo)
i43++;
}



i43=0;
while( i43<7){

    setTimeout(()=>{
        
        console.log("Espera");
        mainCaminar(a,b,c,restarY);
        tiempo = tiempo+ 10000;
        
    
    
},tiempo)
i43++;
}


//Derecha 2

i43=0;

while( i43<7){

    setTimeout(()=>{
        
        console.log("Espera");
        mainCaminar(a,b,c,sumarX);
        tiempo = tiempo+ 100000;
        
    
    
},tiempo)
i43++;
}


*/
};

function ataque(a,b,c,fnc){

    cambiar(a, "img/gif/"+c);
    fnc();
    a.style.transition="0.09s"
    a.style.transform="translate("+distanciaX+"vw,"+distanciaY+"vh)";
    
    setTimeout(cambiar,100,a,"img/gif/"+b);
    
    cambiarXY();

};
