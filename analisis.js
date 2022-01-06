
// Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
   
    const sumaLista = lista.reduce(
        function (valorAcumulado =0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista/lista.length;

    return promedioLista;

}

// calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1=lista[mitad-1];
        const personaMitad2= lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
         return mediana;





    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
// mediana general
const salarios = colombia.map(
    function(persona){
        return persona.salary;

    }
);

const saliriosColSorted = salarios.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;

    }
);

const medianaGeneral = medianaSalarios(saliriosColSorted);

// mediana del top 10
const spliceStar =(saliriosColSorted.length * 90) / 100;
const spliceCount = saliriosColSorted.length - spliceStar;

const salariosTop10 = saliriosColSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log({
    medianaGeneral,
    medianaTop10
}
    
);
