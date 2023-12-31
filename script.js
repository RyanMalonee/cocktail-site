const getDrinks = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showDrinks = async () => {
  const vodkaSection = document.getElementById("vodka");
  const rumSection = document.getElementById("rum");
  const ginSection = document.getElementById("gin");

  const vodkaData = await getDrinks(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka"
  );
  const rumData = await getDrinks(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum"
  );
  const ginData = await getDrinks(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin"
  );

  const vodkaDrinks = vodkaData.drinks;
  const rumDrinks = rumData.drinks;
  const ginDrinks = ginData.drinks;

  vodkaDrinks.forEach((drink) => {
    vodkaSection.append(getDrinkItem(drink));
  });
  rumDrinks.forEach((drink) => {
    rumSection.append(getDrinkItem(drink));
  });
  ginDrinks.forEach((drink) => {
    ginSection.append(getDrinkItem(drink));
  });
};

const getDrinkItem = (drink) => {
  const section = document.createElement("section");

  const name = document.createElement("h4");
  name.innerHTML = drink.strDrink;
  section.append(name);

  const img = document.createElement("img");
  img.src = drink.strDrinkThumb;
  section.append(img);

  section.classList.add("drink-style");
  return section;
};

const hideVodka = () => {
  console.log("here");
  document.getElementById("vodka").classList.toggle("hidden");
};

const hideRum = () => {
  document.getElementById("rum").classList.toggle("hidden");
};

const hideGin = () => {
  document.getElementById("gin").classList.toggle("hidden");
};

window.onload = () => {
  showDrinks();
  document.getElementById("vodka-label").onclick = hideVodka;
  document.getElementById("rum-label").onclick = hideRum;
  document.getElementById("gin-label").onclick = hideGin;
};
