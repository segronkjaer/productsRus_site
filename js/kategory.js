fetch("https://kea-alt-del.dk/t7/api/products?kategories")
    .then(res=>res.json())
    .then(showCategories);

function showCategories(cats){
    cats.forEach(showCategory);
}

function showCategory(cat){
    // fanger indholdet
    const template = document.querySelector("template").content;

    // cloner
    const clone = template.cloneNode(true);

    // ændrer indholdet
    clone.querySelector("a").textContent = cat.category;
    clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

    // appender
    document.querySelector(".boks ol").appendChild(clone);
}