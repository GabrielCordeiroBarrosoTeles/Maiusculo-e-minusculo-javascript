document.addEventListener("keyup",caixa_baixa_alta);
function caixa_baixa_alta(){
var nome = document.getElementById('nome')
var sobrenome = document.getElementById('sobrenome')
nome.value = nome.value.toUpperCase();//Maiúscula
sobrenome.value = sobrenome.value.toLowerCase(); //Minúscula
}