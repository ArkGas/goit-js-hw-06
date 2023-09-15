const listCategories = document.querySelectorAll(`#categories li.item`);
const categoriesItem = listCategories.length;
console.log(`Number of Categories:${categoriesItem}`);

listCategories.forEach((category) => {
  const titleCategory = category.querySelector("h2");
  const nameCategory = titleCategory.textContent;

  const listElements = category.querySelectorAll("ul li");
  const amountElements = listElements.length;

  console.log(`Category: ${nameCategory}`);
  console.log(`Elements: ${amountElements}`);
});
