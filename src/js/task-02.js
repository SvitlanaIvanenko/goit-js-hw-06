const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");
  ingredientsList.appendChild(item);
}
console.log(ingredientsList)