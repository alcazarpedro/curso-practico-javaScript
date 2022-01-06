const lista1= [
    1,
    2,
    3,
    2,
    2,
    4,
    4,
    1,
    5,
    3,
    1

];



const listaCount = {};
lista1.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento]+=1;
        }
        else{
            listaCount [elemento]= 1;
        }
        
    }
);
const lista1Array = Object.entries(listaCount).sort(
    function(valorAcumulado,nuevoValor){
       return  valorAcumulado[1] - nuevoValor[1]

    }
);

const moda = lista1Array[lista1Array.length - 1];