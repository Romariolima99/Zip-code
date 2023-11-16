

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
  document.getElementById('logradouro').innerHTML = response.logradouro;
  document.getElementById('complemento').innerHTML = response.complemento;
  document.getElementById('bairro').innerHTML = response.bairro;
  document.getElementById('localidade').innerHTML = response.localidade;



}
