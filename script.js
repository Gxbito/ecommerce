const itemsData = [
  {
    Nombre: "Forum 84 Low 8k",
    Marca: "Adidas",
    Precio: 89.999,
    Img: "./imgs/adidas-shoes/Card-img-1.png",
    Gender: "Male",
  },

  {
    Nombre: "Stan Smith Recon",
    Marca: "Adidas",
    Precio: 85.999,
    Img: "./imgs/adidas-shoes/Card-img-2.png",
    Gender: "Male",
  },

  {
    Nombre: "Adizero Adios Pro 3.0",
    Marca: "Adidas",
    Precio: 90.999,
    Img: "./imgs/adidas-shoes/Card-img-3.png",
    Gender: "Female",
  },

  {
    Nombre: "NMD_S1",
    Marca: "Adidas",
    Precio: 125.999,
    Img: "./imgs/adidas-shoes/Card-img-4.png",
    Gender: "Female",
  },

  {
    Nombre: "Ultra Boost Light 23",
    Marca: "Adidas",
    Precio: 110.999,
    Img: "./imgs/adidas-shoes/Card-img-5.png",
    Gender: "Female",
  },

  {
    Nombre: "Top 10 2000",
    Marca: "Adidas",
    Precio: 109.999,
    Img: "./imgs/adidas-shoes/Card-img-6.png",
    Gender: "Male",
  },

  {
    Nombre: "Pensford SS TX",
    Marca: "DC",
    Precio: 75.999,
    Img: "./imgs/dc-shoes/Card-img-1.png",
    Gender: "Male",
  },

  {
    Nombre: "Versatil RS",
    Marca: "DC",
    Precio: 85.999,
    Img: "./imgs/dc-shoes/Card-img-2.png",
    Gender: "Male",
  },

  {
    Nombre: "Manteca SS",
    Marca: "DC",
    Precio: 90.999,
    Img: "./imgs/dc-shoes/Card-img-3.png",
    Gender: "Female",
  },

  {
    Nombre: "Stag Lite",
    Marca: "DC",
    Precio: 45.999,
    Img: "./imgs/dc-shoes/Card-img-4.png",
    Gender: "Male",
  },

  {
    Nombre: "Versatil RS 2",
    Marca: "DC",
    Precio: 85.999,
    Img: "./imgs/dc-shoes/Card-img-5.png",
    Gender: "Female",
  },

  {
    Nombre: "Skyline Air",
    Marca: "DC",
    Precio: 64.999,
    Img: "./imgs/dc-shoes/Card-img-6.png",
    Gender: "Female",
  },

  {
    Nombre: "G.T Cut 2",
    Marca: "Nike",
    Precio: 89.999,
    Img: "./imgs/nike-shoes/Card-img-1.png",
    Gender: "Male",
  },

  {
    Nombre: "Jordan Stadium 90",
    Marca: "Nike",
    Precio: 85.999,
    Img: "./imgs/nike-shoes/Card-img-2.png",
    Gender: "Male",
  },

  {
    Nombre: "Air Jordan 5 Retro SE",
    Marca: "Nike",
    Precio: 90.999,
    Img: "./imgs/nike-shoes/Card-img-3.png",
    Gender: "Male",
  },

  {
    Nombre: "Zoom Lebron 4",
    Marca: "Nike",
    Precio: 125.999,
    Img: "./imgs/nike-shoes/Card-img-4.png",
    Gender: "Female",
  },

  {
    Nombre: "Air Jordan 1 Mid SE",
    Marca: "Nike",
    Precio: 110.999,
    Img: "./imgs/nike-shoes/Card-img-5.png",
    Gender: "Female",
  },

  {
    Nombre: "Air Jordan 1 Retro High",
    Marca: "Nike",
    Precio: 109.999,
    Img: "./imgs/nike-shoes/Card-img-6.png",
    Gender: "Female",
  },

  {
    Nombre: "TRC Blaze Milksha",
    Marca: "Puma",
    Precio: 59.999,
    Img: "./imgs/puma-shoes/Card-img-1.png",
    Gender: "Male",
  },

  {
    Nombre: "Disperse XT 2",
    Marca: "Puma",
    Precio: 49.999,
    Img: "./imgs/puma-shoes/Card-img-2.png",
    Gender: "Male",
  },

  {
    Nombre: "Slipstream Motorsport",
    Marca: "Puma",
    Precio: 89.999,
    Img: "./imgs/puma-shoes/Card-img-3.png",
    Gender: "Male",
  },

  {
    Nombre: "Rebound Game",
    Marca: "Puma",
    Precio: 79.999,
    Img: "./imgs/puma-shoes/Card-img-4.png",
    Gender: "Female",
  },

  {
    Nombre: "Forever Run NITRO",
    Marca: "Puma",
    Precio: 95.999,
    Img: "./imgs/puma-shoes/Card-img-5.png",
    Gender: "Female",
  },

  {
    Nombre: "Ferrari Electron E",
    Marca: "Puma",
    Precio: 59.999,
    Img: "./imgs/puma-shoes/Card-img-1.png",
    Gender: "Female",
  },
];
// Contenedor de productos
const itemContainer = document.querySelector(".items");

// Contenedor de categorias (por marca)
const filterBrandContainer = document.querySelector(".filter-brand-container");

// Contenedor de categorias (por género)
const filterGenderContainer = document.querySelector(
  ".filter-gender-container"
);

// Contenedor de categorias (por precio)
const filterPriceContainer = document.querySelector(".filter-price-container");

// Boton de filtrar categorias
const filterBtn = document.querySelectorAll(".filter-button");

// Contenedor del carrito
const cartContainer = document.querySelector(".cart");

// Boton para cargar mas contenido 
const loadMoreBtn = document.querySelector(".item-section-button")

// creamos el html de los items
function createItemTemplate (item) {
  const {Img, Nombre, Marca, Precio } = item
  return `
  <div class="item">
    <div class="item-img-container">
        <img src="${Img}" alt="">
    </div>
    <div class="item-info-container">
        <h3 class="item-title">${Nombre}</h3>
        <h3 class="item-brand">${Marca}</h3>
        <div class="item-price-container">
            <h3 class="item-price">${Precio}</h3>
            <div class="item-add-button">
                <img src="./imgs/Vector.svg" alt="">
            </div>
        </div>
    </div>
</div>
  `

// renderizamos el html que escribimos en la anterior funcion
}
function renderItems(itemList) {
  itemContainer.innerHTML += itemList.map(createItemTemplate).join("");
}

// dividimos el array para solo mostrar una parte del mismo
function divideItems(size) {
  const itemList = [];

  for(let i = 0; i < itemsData.length; i+= size) {
    itemList.push(itemsData.slice(i, i + size));
  }

  return itemList;
}

// appstate
const appState = {
  item: divideItems(4),
  itemIndex: 0,
  itemLimit: divideItems(4).length,
  activeFilter: null,

};

//  Codigo para ver mas contenido 
function loadMore () {
  appState.itemIndex += 1;
  renderItems(appState.item[appState.itemIndex])

  if (appState.itemIndex === appState.itemLimit - 1) {
    loadMoreBtn.style.display = "none";
  }
}

// inicializamos lo que codeamos anteriormente
function init () {
 renderItems(appState.item[0]);
 loadMoreBtn.addEventListener("click", loadMore)

}

init()

