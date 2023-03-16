// Criar 8 posições num objeto
// cada posição é um id identificando o card
// ex: {img: "./images/bear"}
// fazer randomico e só pode repetir 2 vezes cada card

const imagePlacement = [];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const checkIfTwice = (randomMax, isAlreadyUsedTwice) => {
  const random = getRandomInt(randomMax);
  // [0,0,0,0]

  if (isAlreadyUsedTwice[random] !== 2) {
    isAlreadyUsedTwice[random]++;
    return random;
  } else if (isAlreadyUsedTwice[random] === 2) {
    const Newrandom = checkIfTwice(randomMax, isAlreadyUsedTwice);
    return Newrandom;
  }
};

const descobrir = (index) => {
  const card = document.getElementsByClassName("card")[index];
  const image = document.createElement("img");
  image.src = imagePlacement[index];

  // Virar o card específico
  card.classList.add("flip");

  card.children = [];
  card.removeChild(card?.children[0]);

  setInterval(() => {
    card.append(image);
  }, [300]);
};

const addCard = (index) => {
  const container = document.getElementsByClassName("cards")[0];

  const card = document.createElement("div");
  const h1 = document.createElement("h1");

  card.classList.add("card");
  card.addEventListener("click", () => {
    descobrir(index);
  });
  h1.classList.add("questionMark");
  h1.innerHTML = "?";

  card.append(h1);

  container.append(card);
};

const setupGame = () => {
  const images = [
    "./images/bear.png",
    "./images/cow.png",
    "./images/lizard.png",
    "./images/horse.png",
  ];

  const isAlreadyUsedTwice = [0, 0, 0, 0];

  for (let i = 0; i < images.length * 2; i++) {
    addCard(i);
    const random = checkIfTwice(images.length, isAlreadyUsedTwice);
    imagePlacement.push(images[random]);
  }

  console.log(imagePlacement);
};
