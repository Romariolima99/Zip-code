
async function ObterCep() {
  const cep = document.getElementById("cep");

  let search = cep.value.replace("-", "")

  if (search.length > 8) {
    toggledivAlert(), setTimeout(() => { 
      hideDivAttention()
    }, 3000); 
    return;
  }

  await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => response.json())
    .then((data) => {
     
      if (data.erro === "true") {
        toggleDivError(), setTimeout(() => { 
          hideDivError()
        }, 3000); 
        return; // para a execução para não preencher os dados
      }  
      toggledivSuccess(), setTimeout(() => { 
        hideDiv()
      }, 3000); 
      ExibirDados(data);
    })
    .catch((error) => {
      console.log("Deu erro " + error);
      toggleDivError(), setTimeout(() => { 
        hideDivError()
      }, 3000); 
      return;
    });
}

const options = {
  method: 'Get',
  mode: 'cors',
  Cache: 'default',
}

function ExibirDados(response) {
  document.getElementById('logradouro').innerHTML = "Logradouro: " + response.logradouro;
  document.getElementById('bairro').innerHTML = "Bairro: " + response.bairro;
  document.getElementById('localidade').innerHTML = "Localidade: " + response.localidade;
  document.getElementById('ibge').innerHTML = "Numero ibge: " + response.ibge;



}

function toggleDivError() {
  var show = document.getElementById("alert");
  show.style.display = "block";

}

function toggledivAlert() {
  var show = document.getElementById("alert-Attention");
  show.style.display = "block";

}

function toggledivSuccess() {
  var show = document.getElementById("success");
  show.style.display = "block";

}

// Ocultar Divs

function hideDiv ()  {
  var hide = document.getElementById("success");
  hide.style.display = "none";

    }

    function hideDivError ()  {
      var hide = document.getElementById("alert");
      hide.style.display = "none";
    
        }

        function hideDivAttention ()  {
          var hide = document.getElementById("alert-Attention");
          hide.style.display = "none";
        
            }