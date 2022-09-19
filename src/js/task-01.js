// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categoryItems = document.querySelectorAll(".item");

console.log("Number of categories:", categoryItems.length);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега <h2>) и количество элементов в категории 
// (всех вложенных в него <li>).

categoryItems.forEach(item => {
const title = item.firstElementChild.textContent;
const itemsQuantity = item.lastElementChild.children.length;
console.log("Category:", title);
console.log("Elements:", itemsQuantity);
  });