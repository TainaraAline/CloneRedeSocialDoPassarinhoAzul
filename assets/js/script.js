// const cabecalho = document.querySelector('header')
// console.log(cabecalho)
const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')
const feed = document.querySelector('.conteudoPrincipal__listaTweets')

function pegarTweet(event) {
  event.preventDefault()

  const tweetTextArea = textarea.value
  criarTweet(tweetTextArea)
  textarea.value = ''
}

tweetar.addEventListener('click', pegarTweet)

// Criar o tweet: texto do tweet / nome / nome do user / horario de postagem
function criarTweet(tweetTexto) {
  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()

  const tweet = {
    nome: 'Tainara',
    foto: './assets/img/taiiinara.PNG',
    usuario: '@tainarasbmlima',
    texto: tweetTexto,
    tempo: `${hora}:${minutos}:${segundos}`,
    tempoEmSegundos: `${segundos}`
  }
  listarTemplateTweet(tweet)
}

// listando o tweet na tela
function listarTemplateTweet(tweet) {
  // desestruturação
  const { nome, foto, usuario, texto, tempoEmSegundos } = tweet

  let li = document.createElement('li')
  li.classList.add('conteudoPrincipal__tweet')
  let img = document.createElement('img')
  img.src = foto
  img.classList.add('tweet__fotoPerfil')
  let div = document.createElement('div')
  div.classList.add('tweet__conteudo')
  let h2 = document.createElement('h2')
  h2.innerText = nome
  console.log(h2)
  let span = document.createElement('span')
  span.innerText = ` ${usuario} • ${tempoEmSegundos}s`
  span.classList.add('textoNomeDoUsuario')
  console.log(span)
  let p = document.createElement('p')
  p.innerText = texto

  // organizando elementos na div
  div.appendChild(h2)
  div.appendChild(span)
  div.appendChild(p)

  li.appendChild(img)
  li.appendChild(div)

  feed.appendChild(li)
}
