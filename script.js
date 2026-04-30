
function clacuprecobrique(){
    //infos
    let precocompra, precovenda
    //leituras
precocompra = Number (prompt("preço de compra:"))
    //processamento
    precovenda = precocompra *3
    //saidas
    console.log("preço para vidas:R$" + precovenda.toFixed(2));
    alert("o preço de vendas de obra deve ser R$:" + precovenda.toFixed(2));
    
    document.getElementById("resultado").innerHTML = "preço para vindas:R$" + precovenda.toFixed(2)

}