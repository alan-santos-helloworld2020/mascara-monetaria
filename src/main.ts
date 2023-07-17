import dados from "./dados/dados";

let valor1:string="";
let valor2:string="";
let valor3:string="";

document.querySelector("#valor1")!.addEventListener("input",(event:any)=>{
    const onlyDigits = (<String>event.target.value)
        .split("")
        .filter((s:any) => /\d/.test(s))
        .join("")
        .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    valor1 = event.target.value = maskCurrency(digitsFloat)
    
})

document.querySelector("#valor2")!.addEventListener("input",(event:any)=>{
    const onlyDigits = (<String>event.target.value)
        .split("")
        .filter((s:any) => /\d/.test(s))
        .join("")
        .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    valor2 = event.target.value = maskCurrency(digitsFloat)
})

document.querySelector("#valor3")!.addEventListener("input",(event:any)=>{
    const onlyDigits = (<String>event.target.value)
        .split("")
        .filter((s:any) => /\d/.test(s))
        .join("")
        .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        valor3 = event.target.value = maskCurrency(digitsFloat)
})

let maskCurrency = (valor:any, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency:currency
    }).format(valor)
}


dados.forEach(ds => {
    document.querySelector("tbody")!.innerHTML += `
    <tr>
    <td>${ds.id}</td>
    <td>${ds.data}</td>
    <td>${maskCurrency(ds.valor)}</td>
    </tr>        
    `
})




document.querySelector("#action")!.addEventListener("click",()=>{

    alert(valor3.replace(/[^0-9]/g,''));

})


