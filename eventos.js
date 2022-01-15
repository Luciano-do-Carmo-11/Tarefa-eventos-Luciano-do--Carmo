//sistema de cadastro de eventos-primeiro requisito idade 
let idade = 20
if(idade>=18) {
    console.log("pode realizar o cadastro, pois a idade esta de acordo")
} else {
    console.log("idade nao permitida para realizar o cadastro")
}
//segundo requisito quantidade de participantes
let quantidadedeparticipantes = 120
if(quantidadedeparticipantes<=100) {
    console.log("pode fazer o cadastro")
} else {
    console.log("nao e permitido cadastrar, devido ultrapassar o limite de participantes")
}
// terceiro requisito data do evento
let dataevento = new Date("January 21, 2022 12:00:00");
let dataatual = new Date("January 15, 2022 15:00:00");

if (dataatual < dataevento) {
  console.log("pode cadastrar evento, pois a data esta de acordo");
} else { 
  console.log("nao pode marcar o evento");
}
// quarto requisito condição    
const participantes= ["Luciano, Arthur, Vitor, Joao, Maria, Pedro"]
console.log (participantes)