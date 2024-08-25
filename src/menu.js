
export const havenMenu = document.createElement("div");
havenMenu.classList.add("havenMenu");

const havenMenuTitle = document.createElement("h2");
havenMenuTitle.textContent = "Burger Haven Menu";
havenMenu.appendChild(havenMenuTitle);

const menuContent = document.createElement("div");
menuContent.classList.add("menuContent");

const appetizersDiv = document.createElement("div");
const appetizers = document.createElement("h3");
appetizers.textContent = "Appetizers";

const appUl = document.createElement("ul");
const appList1 = document.createElement("li");
appList1.textContent = "Loaded Fries: Crispy fries topped with cheese, bacon, jalapenos, and sour cream.";
const appList2 = document.createElement("li");
appList2.textContent = "Onion Rings: Golden-brown onion rings served with a tangy dipping sauce.";
const appList3 = document.createElement("li");
appList3.textContent = "Mozzarella Sticks: Crispy fried mozzarella sticks served with marinara sauce.";
const appList4 = document.createElement("li");
appList4.textContent = "Buffalo Wings: Spicy chicken wings tossed in your choice of buffalo sauce.";
const appList5 = document.createElement("li");
appList5.textContent = "Cheesy Garlic Bread: Crusty bread topped with melted cheese and garlic butter.";
appUl.appendChild(appList1);
appUl.appendChild(appList2);
appUl.appendChild(appList3);
appUl.appendChild(appList4);
appUl.appendChild(appList5);
appetizersDiv.appendChild(appetizers);
appetizersDiv.appendChild(appUl);
menuContent.appendChild(appetizersDiv);


const burgersDiv = document.createElement("div");
const burgers = document.createElement("h3");
burgers.textContent = "Burgers";

const burgersUl = document.createElement("ul");
const burgersList1 = document.createElement("li");
burgersList1.textContent = "Classic Cheeseburger: A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, pickles, and mayonnaise.";
const burgersList2 = document.createElement("li");
burgersList2.textContent = "Bacon Cheeseburger: A classic cheeseburger with crispy bacon added.";
const burgersList3 = document.createElement("li");
burgersList3.textContent = "Jalapeno Popper Burger: A beef patty topped with jalapeno peppers, cheese, and bacon.";
const burgersList4 = document.createElement("li");
burgersList4.textContent = "Mushroom Swiss Burger: A beef patty topped with sautéed mushrooms and Swiss cheese.";
const burgersList5 = document.createElement("li");
burgersList5.textContent = "Avocado Burger: A beef patty topped with avocado, lettuce, tomato, and onion.";
burgersUl.appendChild(burgersList1);
burgersUl.appendChild(burgersList2);
burgersUl.appendChild(burgersList3);
burgersUl.appendChild(burgersList4);
burgersUl.appendChild(burgersList5);
burgersDiv.appendChild(burgers);
burgersDiv.appendChild(burgersUl);
menuContent.appendChild(burgersDiv);


const sidesDiv = document.createElement("div");
const sides = document.createElement("h3");
sides.textContent = "Sides";

const sidesUl = document.createElement("ul");

const sidesList1 = document.createElement("li");
sidesList1.textContent = "French Fries: Crispy, hand-cut fries.";

const sidesList2 = document.createElement("li");
sidesList2.textContent = "Sweet Potato Fries: Sweet potato fries seasoned with cinnamon sugar.";

const sidesList3 = document.createElement("li");
sidesList3.textContent = "Onion Rings: Golden-brown onion rings.";

const sidesList4 = document.createElement("li");
sidesList4.textContent = "Coleslaw: Freshly made coleslaw.";

const sidesList5 = document.createElement("li");
sidesList5.textContent = "Mac and Cheese: Creamy macaroni and cheese.";

sidesUl.appendChild(sidesList1);
sidesUl.appendChild(sidesList2);
sidesUl.appendChild(sidesList3);
sidesUl.appendChild(sidesList4);
sidesUl.appendChild(sidesList5);

sidesDiv.appendChild(sides);
sidesDiv.appendChild(sidesUl);

menuContent.appendChild(sidesDiv);


const dessertsDiv = document.createElement("div");
const desserts = document.createElement("h3");
desserts.textContent = "Desserts";

const dessertsUl = document.createElement("ul");

const dessertsList1 = document.createElement("li");
dessertsList1.textContent = "Chocolate Shake: A rich and creamy chocolate milkshake.";

const dessertsList2 = document.createElement("li");
dessertsList2.textContent = "Vanilla Shake: A classic vanilla milkshake.";

const dessertsList3 = document.createElement("li");
dessertsList3.textContent = "Strawberry Shake: A sweet and fruity strawberry milkshake.";

const dessertsList4 = document.createElement("li");
dessertsList4.textContent = "Root Beer Float: A creamy root beer float.";

const dessertsList5 = document.createElement("li");
dessertsList5.textContent = "Chocolate Chip Cookies: Warm, gooey chocolate chip cookies.";

dessertsUl.appendChild(dessertsList1);
dessertsUl.appendChild(dessertsList2);
dessertsUl.appendChild(dessertsList3);
dessertsUl.appendChild(dessertsList4);
dessertsUl.appendChild(dessertsList5);

dessertsDiv.appendChild(desserts);
dessertsDiv.appendChild(dessertsUl);

menuContent.appendChild(dessertsDiv);


const beveragesDiv = document.createElement("div");
const beverages = document.createElement("h3");
beverages.textContent = "Beverages";

const beveragesUl = document.createElement("ul");

const beveragesList1 = document.createElement("li");
beveragesList1.textContent = "Soft Drinks: Coca-Cola, Diet Coke, Sprite, Fanta, Dr. Pepper, Root Beer";

const beveragesList2 = document.createElement("li");
beveragesList2.textContent = "Bottled Water";

const beveragesList3 = document.createElement("li");
beveragesList3.textContent = "Coffee";

const beveragesList4 = document.createElement("li");
beveragesList4.textContent = "Tea";

beveragesUl.appendChild(beveragesList1);
beveragesUl.appendChild(beveragesList2);
beveragesUl.appendChild(beveragesList3);
beveragesUl.appendChild(beveragesList4);

beveragesDiv.appendChild(beverages);
beveragesDiv.appendChild(beveragesUl);

menuContent.appendChild(beveragesDiv);


havenMenu.appendChild(menuContent);
