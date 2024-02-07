fetch("https://kea-alt-del.dk/t7/api/kategories")
    .then(res=>res.json())
    .then(showCategories)

function showCategories(cats){
    cats.forEach(showCategory)
}

function showCategory(cat){
    // fanger indholdet
    const template = document.querySelector("template").content;

    // cloner
    const clone = template.cloneNode(true);

    // ændrer indholdet

    // appender
    document.querySelector("boks").appendChild(clone);
}