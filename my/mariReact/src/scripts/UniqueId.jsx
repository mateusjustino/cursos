// Função para gerar um número aleatório de 0 a 5
function generateRandomNumber() {
  const randomNumber = Math.random();
  const randomHexString = randomNumber.toString(16);
  const randomId = randomHexString.slice(2);
  return randomId;
}

// Lista para armazenar os números
const idList = [];

// Função para adicionar um número à lista, verificando se já existe
export default function uniqueID() {
  let newId;

  do {
    newId = generateRandomNumber();
  } while (idList.includes(newId));

  idList.push(newId);
  return newId;
}
