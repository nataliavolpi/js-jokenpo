//pontuação
let humanScoreN = 0;
let machineScoreN = 0;
const humanScore_span = document.querySelector('.human-score')
const machineScore_span = document.querySelector('.machine-score')

//mudar classe da div de imagens resultados
const result_div = document.querySelector('.imgResult');

function changeClass(){
  result_div.classList.remove('hidden')
}

//escolha do jogador
const playHuman = (playerChoice) =>{
  playGame(playerChoice, playMachine())
}

//escolha da máquina
const playMachine = () =>{
  const choices = ['rock', 'paper', 'scissors' ]
  const randomC = Math.floor(Math.random()*3) //sorteia um n entre 0e1, multiplica por 3 e arredonda pra baixo
  return choices [randomC]
}

//Comparar escolhas, mudar imagens e textos
const result_span = document.querySelector('.result')
const machineChoice_img = document.querySelector('#pc')
const machineChoice_span = document.querySelector('.machine-choice')

const playGame = (human, machine) =>{
  //mudar texto e img resultado PC
  let changeMachineChoice = () =>{
    if (machine === 'rock'){
      machineChoice_img.src = "images/rock.png"
      machineChoice_span.innerHTML = "O computador escolheu pedra"
    } else if (machine === 'paper'){
      machineChoice_img.src = "images/paper.png"
      machineChoice_span.innerHTML = "O computador escolheu papel"
    } else {
      machineChoice_img.src = "images/scissors.png"
      machineChoice_span.innerHTML = "O computador escolheu tesoura"
    }
  }
  //mudar o Score e o Texto de acordo com o resultado
  if (human === machine){
    result_span.innerHTML = "Deu empate!"
  } else if ((human === 'paper' && machine === 'rock') || 
  (human === 'rock' && machine === 'scissors') || 
  (human === 'scissors' && machine === 'paper')
  ) {
    humanScoreN++
    humanScore_span.innerHTML = humanScoreN;
    result_span.innerHTML = "Você ganhou!"
  } else { 
    machineScoreN++
    machineScore_span.innerHTML = machineScoreN;
    result_span.innerHTML = "O computador ganhou!"
  }
  
  changeMachineChoice()
  changeClass() //pra aparecer as imagens do resultado
}


//mudar texto e img resultado PLAYER
const humanChoice_img = document.querySelector('#jog')
const humanChoice_span = document.querySelector('.human-choice')
const humanChoice_r = document.querySelector('#rock')
const humanChoice_p = document.querySelector('#paper')
const humanChoice_s = document.querySelector('#scissors')

function changeHumanChoiceP(){
    humanChoice_img.src = "images/paper.png"
    humanChoice_span.innerHTML = "Você escolheu papel"
  } 
  
function changeHumanChoiceS(){
    humanChoice_img.src = "images/scissors.png"
    humanChoice_span.innerHTML = "Você escolheu tesoura"
}
function changeHumanChoiceR(){
    humanChoice_img.src = "images/rock.png"
    humanChoice_span.innerHTML = "Você escolheu pedra"
  }

humanChoice_p.addEventListener('click', changeHumanChoiceP)
humanChoice_r.addEventListener('click', changeHumanChoiceR)
humanChoice_s.addEventListener('click', changeHumanChoiceS)