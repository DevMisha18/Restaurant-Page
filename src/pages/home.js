import img1 from "../pics/sichuan_dish2.jpg"
import img2 from "../pics/sichuan_dish4.jpg"


export function homePage() {
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to the Red Dragon";
  const h3 = document.createElement("h3");
  h3.textContent = "home of authentic sichuan comfort food";
  const section1 = createSection1();
  const section2 = createSection2();

  const content = document.querySelector("#content");
  content.append(h1, h3, section1, section2);
}


function createSection1() {
  const divSection = document.createElement("div");
  divSection.classList.add("section");
  const p = document.createElement("p");
  p.textContent = "At Red Dragon, we bring the bold and fiery flavors of Sichuan cuisine right to the heart of the city. Family-run and born from our deep passion for food, our restaurant is more than just a place to eat—it's a celebration of togetherness. We believe that the best meals are shared, and nothing brings people together like the rich, authentic taste of Sichuan comfort food.";
  const imgEl1 = document.createElement("img");
  imgEl1.src = img1;

  divSection.append(p, imgEl1);

  return divSection;
}

function createSection2() {
  const divSection = document.createElement("div");
  divSection.classList.add("section");
  const p = document.createElement("p");
  p.textContent = "Indulge in classics like Kung Pao Chicken, Mapo Tofu, Dan Dan Noodles, and the signature Sichuan Hot Pot, all prepared with the freshest ingredients and time-honored recipes passed down through generations. Whether you're craving the numbing heat of Sichuan Peppercorns or the savory warmth of our family dishes, Red Dragon is where great food meets great company.";
  const imgEl2 = document.createElement("img");
  imgEl2.src = img2;

  divSection.append(imgEl2, p);

  return divSection;
}

