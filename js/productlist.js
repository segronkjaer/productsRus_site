/* test */
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url = "https://kea-alt-del.dk/t7/api/products?category=" + category;

fetch(url)
  .then((response) => response.json())
  .then(dataRecieved);

function dataRecieved(data) {
  // we have the data
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("template").content;
  // man kopierer templaten
  const myClone = template.cloneNode(true);
  // ændrer indholdet
  myClone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  myClone.querySelector(".productdisplayname").textContent =
    product.productdisplayname;
  myClone.querySelector(".brandname").textContent = product.brandname;
  myClone.querySelector(".price").textContent = `${product.price},-`;
  // hvis productet er udsolgt
  if (product.soldout) {
    myClone.querySelector("article").classList.add("product_udsolgt");
  } //virker ikke

  myClone
    .querySelector("p.link a")
    .setAttribute("href", `product.html?id=${product.id}`);

  // appende
  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);
}

/* min HTML struktur: 
<article class="smallProduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp">
            <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
            <p class="brand">Nike</p>
            <p class="price">DKK 895,-</p>
            <p class="link"><a href="product.html">LÆS MERE</a></p>
        </article> 
*/

/* eksempel på data 
id:	1163
gender:	"Men"
category:	"Apparel"
subcategory:	"Topwear"
articletype:	"Tshirts"
season:	"Summer"
productionyear:	2011
usagetype:	"Sports"
productdisplayname:	"Sahara Team India Fanwear Round Neck Jersey"
price:	895
discount:	null
brandname:	"Nike"
soldout: 0
*/
