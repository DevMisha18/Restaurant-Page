export function menuPage() {
  const h1 = document.createElement("h1");
  h1.textContent = "Main dishes";

  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-card");
  const p1 = createP("Kung Pao Chicken");
  const p2 = createP("Fried Rice");
  const p3 = createP("Dumplings");
  const p4 = createP("Spicy Shrimp Stir-fry");
  const p5 = createP("Beef with Broccoli");
  const p6 = createP("Eggplant with Garlic Sauce");
  const p7 = createP("Sichuan Hot Pot");
  const p8 = createP("Dan Dan Noodles");
  const p9 = createP("Mapo Tofu");
  const p10 = createP("Kung Pao Chicken");
  menuCard.append(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);

  const content = document.querySelector("#content");
  content.append(h1, menuCard);
}

function createP(textContent) {
  const p = document.createElement("p");
  p.textContent = textContent;
  return p;
}