console.group("cuadrados");
//const ladoCuadrado=5;
//console.log("los lados de cuadrado mide:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
} 
//console.log("el perimetro del cusdro es:" + perimetro + "cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("el area del cuadrado es:" + area + "cm^2");
console.groupEnd();

//codigo del triangulo
console.group("Triangulos");
//const trianguloLado1 = 6;
//const trianguloLado2 = 6;
//const baseTriangulo = 4;


//console.log("los lados del triangulo miden:" 
/* + trianguloLado1 
 + "cm, " 
 + trianguloLado2 
 + "cm, "
 + baseTriangulo 
 + "cm"
);*/

/*const altura = 5.5;

console.log("La altura del triangulo es:" + altura + "cm");*/

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
//console.log("el perimetro del triangulo es:" + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return(altura * base) / 2;
} 
//console.log("la area del triangulo es:" + areaTriangulo + "cm");




console.groupEnd();

//codigo de circulo

console.group("circulo");

//Radio
//const radio = 4;
//console.log("El radio del circulo es:" + radio + "cm");

//Diametro
function diametroCirculo(radio){
    return radio*2;
}
//const diametro = radio * 2;
//console.log("el diametro del circulo es:" + diametro + "cm");

//PI
const PI = Math.PI;
//console.log("el PI del circulo es:" + PI);

//Circuferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El perimetro del circulo es:" + perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo es:" + areaCirculo + "cm^2");



console.groupEnd();

console.group("trianguloIsoceles");
/*function alturaTrianguloIsoceles(ladoA,ladoB,ladoBase){
    if(ladoA!=ladoB){
        console.error("Los lados de lado a y lado b no son iguales");
    }
    else {
        console.log("los lado a y b son iguales ")
    }

}*/
function alturaTrianguloIsoceles(trianguloGA,trianguloGB,trianguloBaseG){
    if(trianguloGA!=trianguloGB){
        console.error("los lados a y b no son iguales");
    }
    else {
        //let trianguloLadoPA;
        const trianguloLadoPB=trianguloGB/2;
        const trianguloLadoBaseP = trianguloGA;

        const trianguloPequenoLadoBCuadrado= trianguloLadoPB*trianguloLadoPB;
        const trianguloPequenoLadoBaseCuadrado= trianguloLadoBaseP*trianguloLadoBaseP;

        const trianguloLadoPA= Math.sqrt(trianguloPequenoLadoBaseCuadrado-trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloLadoPA;
        return trianguloGrandeAltura;
    }
}



//aqui interatuamos con html
function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;
    const area= areaCuadrado(value);

    alert(area);

}



