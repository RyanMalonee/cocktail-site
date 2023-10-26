const getDrinks = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showDrinks = async () => {
  const vodkaSection = document.getElementById("vodka");
  const rumSection = document.getElementById("rum");
  const ginSection = document.getElementById("gin");

  const vodkaDrinks = await getDrinks(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka"
  );
  const rumDrinks = await getDrinks(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum"
  );
  const ginDrinks = await getDrinks(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin"
  );

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

  const name = document.createElement("h2");
  name.innerHTML = drink.strDrink;
  section.append(name);

  const img = document.createElement("img");
  img.src = drink.strDrinkThumb;
  section.append(img);

  return section;
};

window.onload = () => {
  showDrinks();
};
