var bolsas = 0;
var pulseras = 0;
var camisetas = 0;
var loteria = 0;
var resumen = ""    ;



document.getElementById('bolsas').innerHTML= bolsas;
document.getElementById('pulseras').innerHTML= pulseras;
document.getElementById('camisetas').innerHTML= camisetas;
document.getElementById('loteria').innerHTML= loteria;




/* ==================FUNCIONES==============================*/

function anadir_bolsas(){
    bolsas=bolsas+1;
    document.getElementById('bolsas').innerHTML= bolsas;
    
    
};
function restar_bolsas(){
    if (bolsas>0) {
        bolsas=bolsas-1;
        var resumen= [bolsas, pulseras, camisetas, loteria];

    }
    document.getElementById('bolsas').innerHTML= bolsas;
    
};
function anadir_pulseras(){
    pulseras=pulseras+1;
    document.getElementById('pulseras').innerHTML= pulseras;
    
};
function restar_pulseras(){
    if (pulseras>0) {
        pulseras=pulseras-1;
    }
    
    
    document.getElementById('pulseras').innerHTML= pulseras;
    
};
function anadir_camisetas(){
    camisetas=camisetas+1;
    document.getElementById('camisetas').innerHTML= camisetas;
    
};
function restar_camisetas(){
    if (camisetas>0) {
        camisetas=camisetas-1
    }
    document.getElementById('camisetas').innerHTML= camisetas;
    
};
function anadir_loteria(){
    loteria=loteria+1;
    document.getElementById('loteria').innerHTML= loteria;
    
};
function restar_loteria(){
    if (loteria>0){
        loteria=loteria-1;
    }
    document.getElementById('loteria').innerHTML= loteria;
    
};



/*=================================================================*/

