//const precioOriginal = 100;
//const descuentos = 15;

function calcularPrecioConDescuento(precio,descuento){

 const porcentajePrecioConDescuento = 100- descuento;
 const precioConDescuento =(precio*porcentajePrecioConDescuento) / 100;
 return precioConDescuento;
}

function onCliclButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;



    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const cupons = [
        "Pedro_luis",
        "es_un_secreto",
        "Magdiel_es_un_arte"
    ];
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;
    switch(couponValue){
        case cupons[0]:
            descuento = 15;
        break;
        case cupons [1]:
            descuento =30;
        break;
        case cupons[2]:
            descuento = 25;
        break;          
    }


    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
    

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//console.log({
 //   precioOriginal,
   // descuentos,
    //porcentajePrecioConDescuento,
    //precioConDescuento
//});