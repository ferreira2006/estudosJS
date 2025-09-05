// URL da API

// URL da API do ViaCEP (busca dados de endereço a partir de um CEP)
const APIURL = "https://viacep.com.br/ws/89900000/json/";

// Fazendo a requisição GET para a API
fetch(APIURL)
  // Primeiro .then: recebe a resposta bruta do servidor
  .then(response => {
    // Verifica se a resposta foi bem-sucedida (status HTTP 200–299)
    if (!response.ok) {
      // Se não foi, lança um erro que será capturado pelo .catch
      throw new Error(`Erro na requisição. ${response.statusText}`);
    }
    // Se deu certo, converte a resposta (texto) em JSON (objeto JS)
    return response.json();
  })
  // Segundo .then: agora temos os dados já em formato de objeto
  .then(data => {
    // Exibe os dados no console
    console.log(data);
    // Exemplo: para acessar a cidade → console.log(data.localidade);
  })
  // Captura qualquer erro que aconteceu em qualquer etapa acima
  .catch(error => {
    console.error(`Erro ao buscar dados: ${error}`);
  });



    // API do pokemon
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json()) // transforma a resposta em JSON
  .then(data => {
    console.log(`Pokemon fetch: ${data.name} - Altura: ${data.height}`);
  })
  .catch(error => console.error("Erro:", error));


  // async/await
  async function pegarPokemon() {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const dados = await resposta.json();
    console.log(`Pokemon asynk: ${dados.name} - Altura: ${dados.height}`);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

pegarPokemon();