let result = document.getElementById("res");
let loss = document.getElementById("loss");
let gain = document.getElementById("gain");
let advice = document.getElementById("advice");
let resultLoss = document.getElementById("resultLoss");
let resultGain = document.getElementById("resultGain");
let keep = document.getElementById("keep");

function calc() {
  let num0 = Number(document.getElementById("num0").value);
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let genderMan = document.getElementById("man").checked;
  let genderWoman = document.getElementById("woman").checked;
  let result = document.getElementById("board");

  // Limpar conteúdo anterior
  result.innerText = ``;
  result.style.color = "";

  let res;

  if (genderMan) {
    res = 66 + 13.7 * num0 + 5.0 * num1 - 6.8 * num2; // men
    result.innerText += ` ${Math.round(res)} Kcal`;
    result.style.color = "#F8962F"
    result.style.opacity = 1

    loss.innerHTML = `Ao reduzir a ingestão calórica em <strong>20%</strong> e 
    incorporar exercícios de cardio na rotina diária, você cria um <strong>déficit calórico</strong> 
    essencial para promover a perda de gordura corporal de forma saudável.`;

    gain.innerHTML = `Aumento de <strong>20%</strong> das calorias <strong>+</strong>
  equilíbrio de macros <strong>+</strong>
  levantamento de peso = ganho de músculos. 
  <strong>Superavit calórico</strong> sem equilíbrio e exercícios = ganho de gordura.`;

  advice.innerHTML = `Você deve consumir <strong>exatamente</strong>
  as calorias que o seu corpo necessita. Não é necessário seguir uma dieta específica ou praticar
  exercícios, fique atento à sua ingestão calórica diária.`;


    loss.style.opacity = 1;
    gain.style.opacity = 1;
    advice.style.opacity = 1;

  } else if (genderWoman) {
    res = 665 + 9.6 * num0 + 1.8 * num1 - 4.7 * num2; // woman
    result.innerText += ` ${Math.round(res)}Kcal`;
    result.style.color = "#F8962F"
    result.style.opacity = 1

    loss.innerHTML = `Ao reduzir a ingestão calórica em <strong>20%</strong> e 
    incorporar exercícios de cardio na rotina diária, você cria um <strong>déficit calórico</strong> 
    essencial para promover a perda de gordura corporal de forma saudável.`;
    gain.innerHTML = `Aumento de <strong>20%</strong> das calorias <strong>+</strong>
  equilíbrio de macros <strong>+</strong>
  levantamento de peso = ganho de músculos. 
  <strong>Superavit</strong> calórico sem equilíbrio e exercícios = ganho de gordura.`;
  advice.innerHTML = `Você deve consumir <strong>exatamente</strong>
  as calorias que o seu corpo necessita. Não é necessário seguir uma dieta específica ou praticar
  exercícios, fique atento à sua ingestão calórica diária.`;
    loss.style.opacity = 1;
    gain.style.opacity = 1;
    advice.style.opacity = 1;
  } else {
    result.innerText = `Por favor escolha seu gênero para continuar !!!`;
    result.style.color = "red";
    result.style.opacity = 1
  }
  let porcentLess = res - res * 0.2;
  let porcentGain = res + res * 0.2;

  resultLoss.innerText = `${Math.round(porcentLess)} Kcal`;
  resultLoss.style.color = "#F8962F";
  resultLoss.style.opacity = 1;
  resultGain.innerText = `${Math.round(porcentGain)} Kcal`;
  resultGain.style.color = "#F8962F";
  resultGain.style.opacity = 1;
  keep.innerText = `${Math.round(res)} Kcal`;
  keep.style.color = "#F8962F";
  keep.style.opacity = 1;
}
