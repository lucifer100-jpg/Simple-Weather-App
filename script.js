const body = document.getElementById("body");
const weatherSelect = document.getElementById("weatherSelect");
const result = document.getElementById("result");
const weatherText = document.getElementById("currentWeatherText");
const Refresh = document.getElementById("Refresh");

let currentWeather = "cold";

function getRecipe(weather) {
  if (weather === "cold") {
    return {
      name: "Tomato Soup",
      description: "A warm and comforting soup.",
      ingredients: ["Tomatoes", "Onion", "Garlic"]
    };
  } else if (weather === "hot") {
    return {
      name: "Fresh Salad",
      description: "Light and refreshing salad.",
      ingredients: ["Lettuce", "Cucumber", "Olive Oil"]
    };
  } else if (weather === "rainy") {
    return {
      name: "Chai and Pakoda",
      description: "Perfect combo for rainy days.",
      ingredients: ["Tea Leaves", "Onion", "Gram Flour"]
    };
  } else {
    return {
      name: "Chatpate",
      description: "Light, sour and spicy snack.",
      ingredients: ["Puffed Rice", "Lemon", "Tomato", "Cucumber"]
    };
  }
}

function displayRecipe() {
  body.className = currentWeather;
  weatherText.textContent = currentWeather.toUpperCase();

  const recipe = getRecipe(currentWeather);

  result.innerHTML = `
    <h3>${recipe.name}</h3>
    <p>${recipe.description}</p>
    <strong>Ingredients:</strong>
    <ul>
      ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

weatherSelect.addEventListener("change", () => {
  currentWeather = weatherSelect.value;
  displayRecipe();
});

Refresh.addEventListener("click", displayRecipe);

window.onload = () => {
  weatherSelect.value = currentWeather;
  displayRecipe();
};
