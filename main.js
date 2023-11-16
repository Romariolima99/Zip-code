

async function  ObterCep () {
 const cep = document.getElementById("cep");

 let search = cep.value.replace("-","")

 if (search.length > 8) {
  alert("informe uma quntidade de numeros validos")
  return;
 }

 await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
.then((response) => response.json()) 
.then((data) => { 
 
  ExibirDados(data);
})
.catch((data) => {
  if (data.erro === true) {
    alert("cep invalido")
    return;
   }

});
}

const options = {
  method: 'Get',
  mode: 'cors',
  Cache: 'default',
}

function ExibirDados (response){
  document.getElementById('logradouro').innerHTML = "Logradouro: " + response.logradouro;
  document.getElementById('bairro').innerHTML = "Bairro: " + response.bairro;
  document.getElementById('localidade').innerHTML = "Localidade: " + response.localidade;
  document.getElementById('ibge').innerHTML = "Numero ibge: " + response.ibge;



}

