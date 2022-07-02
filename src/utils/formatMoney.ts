export const formatMoney =(valor:number)=>{
    return valor.toLocaleString("pt-br",{
        style: 'currency',
        currency: 'BRL',
    });
}

export const formatMoneyNotS =(valor:number)=>{
    return valor.toLocaleString("pt-br");
}

export const formatMoneyDec =(valor:number)=>{
    return valor.toFixed(2).replace(".",",");
}