let texto = [
  'Hoje é seu aniversário meu amor.',
  'É tão difícil expressar meu sentimento por você.',
  'Não há palavra ou adjetivo capaz de descrever sua beleza;',
  'Não há presentes ou joias que representem seu valor;',
  'Não há música que soe tão doce quanto sua voz;',
  'Assim sendo, como demonstrar o quão incrível você é?',
  'Oooo tarefinha difícil kkkkkk',
  'Busquei entre os filósofos, compositores',
  'Poetas,romancistas...',
  'ENFIM',
  'Nenhum me serviu de grande ajuda KKKKK :/',
  'Parei com essa busca quando encontrei esse poema de Drumont:',
  '“Se você sabe explicar o que sente, não ama, pois o amor foge de todas as,explicações possíveis',
  'Quem sabe no dia do nosso casamento eu consiga citar algumas explicações.'
]
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function checarnome() {
  nome = document.getElementById('nome-bella').value
  nome = nome.trim()
  nome = nome.toLowerCase()
  if (nome == 'isabella danes' || nome == 'bella') {
    alert('Oi meu amorzinhoooooo')
    primeiro_passo()
  } else {
    alert('Você não é quem eu esperava, sorry')
  }
}

async function relogio_mensagem(texto) {
  let i = 0
  while (i < texto.length) {
    await sleep(3500)
    mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = texto[i]
    i++
  }
  setTimeout(segundopasso(mensagem), 3000)
}

function primeiro_passo() {
  primeiro = document.getElementsByClassName('primeiro-hide')[0]
  primeiro.classList.remove('primeiro-hide')
  primeiro.classList.add('primeiro-show')
  setTimeout(relogio_mensagem(texto), 5000)
}

async function segundopasso(mensagem) {
  mensagem.innerHTML = `<img id="we" src="./images/we.jpg" alt="" srcset=""/>
  `
  mensagem.innerHTML += [
    ' <p>Isabella Danes, te achei linda desde a primeira vez que te vi e fiquei ainda mais impressionado em como você é gente boa, inteligente e meio bestalhada kkkkkk Lembro de entrar no carro com o Rub, estava desconsertado e desde então ansiava por uma chance de te conhecer melhor... e quando esse dia chegou foi incrível! Me emociono só de pensar. Você me tirou de um lugar frio e vazio, me fez amar de novo.</p>'
  ]
  await sleep(20000)

  terceiropasso(mensagem)
}

async function terceiropasso(mensagem) {
  mensagem.innerHTML += `<img id="we" src="./images/we2.jpg" alt="" srcset=""/>
  `
  mensagem.innerHTML += [
    ' <p>Eu te amo, não só como minha namorada. Amo seu jeito de ser, amo seu cuidado com amigos, familiares e até alguns desconhecidos kkkkkkk</p>'
  ]
  await sleep(15000)

  quartopasso(mensagem)
}

async function quartopasso(mensagem) {
  mensagem.innerHTML += `<img id="we" src="./images/we3.jpg" alt="" srcset=""/>
  `
  mensagem.innerHTML += [
    ' <p>Você é doce, paciente, brincalhona, atrapalhadinha, linda, gostosa, meu ponto de paz, minha princesa <3 Para mim Bella, você é amor.</p> <h3>Bom, feliz aniversário!! Você é a mulher da minha vida!</h3> '
  ]
  await sleep(10000)
  alert('Te amo Neném')
  alert('De: Michael')
}
