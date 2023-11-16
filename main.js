

async function  ObterCep () {
 const cep = document.getElementById("cep");
 let search = cep.value.replace("-","")
 const response = await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
.then((response) => response.json())

    console.log(response);
    ExibirDados(response);
    
};

const options = {
  method: 'Get',
  mode: 'cors',
  Cache: 'default',
}

function ExibirDados (response){
  document.getElementById('logradouro').innerHTML = "logradouro: " + response.logradouro;
  document.getElementById('bairro').innerHTML = "Bairro: " + response.bairro;
  document.getElementById('localidade').innerHTML = "Localidade: " + response.localidade;
  document.getElementById('ibge').innerHTML = "Numero ibge: " + response.ibge;



}
