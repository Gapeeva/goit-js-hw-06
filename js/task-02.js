const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsUl = document.querySelector("#ingredients");
const itenIngredients = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
ingredientsUl.append(...itenIngredients);
