const itemsData = [
  {
    Nombre: "Forum 84 Low 8k",
    Marca: "Adidas",
    Precio: 450,
    Img: "./imgs/adidas-shoes/Card-img-1.png",
    Id: 1,
  },

  {
    Nombre: "Stan Smith Recon",
    Marca: "Adidas",
    Precio: 850,
    Img: "./imgs/adidas-shoes/Card-img-2.png",
    Id: 2,
  },

  {
    Nombre: "Adizero Adios Pro 3.0",
    Marca: "Adidas",
    Precio: 900,
    Img: "./imgs/adidas-shoes/Card-img-3.png",
    Id: 3,
  },

  {
    Nombre: "NMD_S1",
    Marca: "Adidas",
    Precio: 125,
    Img: "./imgs/adidas-shoes/Card-img-4.png",
    Id: 4,
  },

  {
    Nombre: "Ultra Boost Light 23",
    Marca: "Adidas",
    Precio: 110,
    Img: "./imgs/adidas-shoes/Card-img-5.png",
    Id: 5,
  },

  {
    Nombre: "Top 10 2000",
    Marca: "Adidas",
    Precio: 105,
    Img: "./imgs/adidas-shoes/Card-img-6.png",
    Id: 6,
  },

  {
    Nombre: "Pensford SS TX",
    Marca: "DC",
    Precio: 750,
    Img: "./imgs/dc-shoes/Card-img-1.png",
    Id: 7,
  },

  {
    Nombre: "Versatil RS",
    Marca: "DC",
    Precio: 859,
    Img: "./imgs/dc-shoes/Card-img-2.png",
    Id: 8,
  },

  {
    Nombre: "Manteca SS",
    Marca: "DC",
    Precio: 900,
    Img: "./imgs/dc-shoes/Card-img-3.png",
    Id: 9,
  },

  {
    Nombre: "Stag Lite",
    Marca: "DC",
    Precio: 459,
    Img: "./imgs/dc-shoes/Card-img-4.png",
    Id: 10,
  },

  {
    Nombre: "Versatil RS 2",
    Marca: "DC",
    Precio: 800,
    Img: "./imgs/dc-shoes/Card-img-5.png",
    Id: 11,
  },

  {
    Nombre: "Skyline Air",
    Marca: "DC",
    Precio: 649,
    Img: "./imgs/dc-shoes/Card-img-6.png",
    Id: 12,
  },

  {
    Nombre: "G.T Cut 2",
    Marca: "Nike",
    Precio: 899,
    Img: "./imgs/nike-shoes/Card-img-1.png",
    Id: 13,
  },

  {
    Nombre: "Jordan Stadium 90",
    Marca: "Nike",
    Precio: 849,
    Img: "./imgs/nike-shoes/Card-img-2.png",
    Id: 14,
  },

  {
    Nombre: "Air Jordan 5 Retro SE",
    Marca: "Nike",
    Precio: 899,
    Img: "./imgs/nike-shoes/Card-img-3.png",
    Id: 15,
  },

  {
    Nombre: "Zoom Lebron 4",
    Marca: "Nike",
    Precio: 499,
    Img: "./imgs/nike-shoes/Card-img-4.png",
    Id: 16,
  },

  {
    Nombre: "Air Jordan 1 Mid SE",
    Marca: "Nike",
    Precio: 699,
    Img: "./imgs/nike-shoes/Card-img-5.png",
    Id: 17,
  },

  {
    Nombre: "Air Jordan 1 Retro High",
    Marca: "Nike",
    Precio: 200,
    Img: "./imgs/nike-shoes/Card-img-6.png",
    Id: 18,
  },

  {
    Nombre: "TRC Blaze Milksha",
    Marca: "Puma",
    Precio: 599,
    Img: "./imgs/puma-shoes/Card-img-1.png",
    Id: 19,
  },

  {
    Nombre: "Disperse XT 2",
    Marca: "Puma",
    Precio: 499,
    Img: "./imgs/puma-shoes/Card-img-2.png",
    Id: 20,
  },

  {
    Nombre: "Slipstream Motorsport",
    Marca: "Puma",
    Precio: 800,
    Img: "./imgs/puma-shoes/Card-img-3.png",
    Id: 21,
  },

  {
    Nombre: "Rebound Game",
    Marca: "Puma",
    Precio: 799,
    Img: "./imgs/puma-shoes/Card-img-4.png",
    Id: 22,
  },

  {
    Nombre: "Forever Run NITRO",
    Marca: "Puma",
    Precio: 950,
    Img: "./imgs/puma-shoes/Card-img-5.png",
    Id: 23,
  },

  {
    Nombre: "Ferrari Electron E",
    Marca: "Puma",
    Precio: 595,
    Img: "./imgs/puma-shoes/Card-img-1.png",
    Id: 24,
  },
];
// Contenedor de productos
const itemContainer = document.querySelector(".items");

// Contenedor de categorias (por marca)
const brandContainer = document.querySelector(".filter-brand-container");

// Boton de filtrar categorias
const filterBtn = document.querySelectorAll(".filter-button");

// Boton del carrito
const cartBtn = document.querySelector(".cart-button");

// Contenedor del carrito
const cartMenu = document.querySelector(".cart-container");

// Boton del menu de opciones
const listBtn = document.querySelector(".list-button");

// Contenedor del menu de opciones
const listMenu = document.querySelector(".list-container");

// OVERLAY
const overlay = document.querySelector(".overlay");

// Boton para cargar mas contenido
const loadMoreBtn = document.querySelector(".item-section-button");

// Burbujita del carrito (el numero que aparece justo encima del icono del carro)
const cartBubble = document.querySelector(".cart-bubble");

// Precio total de la suma de todos los items del carrito
const total = document.querySelector(".total-price");

// Boton para REALIZAR COMPRA de todos los items del carrito
const buyBtn = document.querySelector(".cart-buy-button");

// Boton para BORRAR todos los items del carrito
const clearBtn = document.querySelector(".cart-clear-button");

// Carrito del menu
const itemsCart = document.querySelector(".cart");

//Modal (mensaje que aparece abajo en la pagina)
const modal = document.querySelector(".add-modal")

// Carrito seteado
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// funcion para guardar en local storage
function cartContentSave () {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// creamos el html de los items
function createItemTemplate(item) {
  const { Img, Nombre, Marca, Precio, Id } = item;
  return `
  <div class="item">
    <div class="item-img-container">
        <img src="${Img}" alt="">
    </div>
    <div class="item-info-container">
        <h3 class="item-title">${Nombre}</h3>
        <h3 class="item-brand">${Marca}</h3>
        <div class="item-price-container">
            <h3 class="item-price">$${Precio}</h3>
            <div class="item-add-button" 
            data-id="${Id}" 
            data-title="${Nombre}" 
            data-brand="${Marca}" 
            data-price="${Precio}"
            data-img="${Img}">
            </div>
        </div>
    </div>
</div>
  `;
}

// renderizamos el html que escribimos en la anterior funcion
function renderItems(itemList) {
  itemContainer.innerHTML += itemList.map(createItemTemplate).join("");
}

// dividimos el array para solo mostrar una parte del mismo
function divideItems(size) {
  const itemList = [];

  for (let i = 0; i < itemsData.length; i += size) {
    itemList.push(itemsData.slice(i, i + size));
  }

  return itemList;
}

// appstate
const appState = {
  item: divideItems(6),
  itemIndex: 0,
  itemLimit: divideItems(6).length,
  activeFilter: null,
};

//  Codigo para ver mas contenido
function loadMore() {
  appState.itemIndex += 1;
  renderItems(appState.item[appState.itemIndex]);

  if (appState.itemIndex === appState.itemLimit - 1) {
    loadMoreBtn.style.display = "none";
  }
}

// cambiar el color del boton
function changeActiveState(category) {
  const filter = [...filterBtn];

  filter.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== category) {
      categoryBtn.classList.remove("active-filter");
      return;
    }
    categoryBtn.classList.add("active-filter");
  });
}

// esconder y mostrar el boton
function hideBtn() {
  loadMoreBtn.style.display = "block";
  if (appState.activeFilter) {
    loadMoreBtn.style.display = "none";
  }
}

// funcion para cambiar el estado entre filtro activo o inactivo
function changeFilterState(button) {
  appState.activeFilter = button.dataset.category;
  changeActiveState(appState.activeFilter);
  hideBtn(appState.activeFilter);
}

// codigo para filtrar los items
function renderFilteredItems() {
  const filteredItems = itemsData.filter(
    (item) => item.Marca === appState.activeFilter
  );
  renderItems(filteredItems);
}

// funcion para aplicar filtro por marca
function applyFilter({ target }) {
  if (!isInactiveBtn(target)) return;
  changeFilterState(target);
  itemContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredItems();
    appState.itemIndex = 0;
    return;
  }
  renderItems(appState.item[0]);
}

// funcion para comprobar el estado del boton (devuelve un booleano)
function isInactiveBtn(button) {
  return (
    button.classList.contains("filter-button") &&
    !button.classList.contains("active-filter")
  );
}

// funcion para activar el carrito al darle click
function toggleCart() {
  cartMenu.classList.toggle("active-menu");
  if (listMenu.classList.contains("active-menu")) {
    listMenu.classList.remove("active-menu");
    return;
  }
  overlay.classList.toggle("active-overlay");
}

// Abrir y cerrar el menu
function toggleList() {
  listMenu.classList.toggle("active-menu");
  if (cartMenu.classList.contains("active-menu")) {
    cartMenu.classList.remove("active-menu");
    return;
  }
  overlay.classList.toggle("active-overlay");
}

// Cerrar todos los menus
function closeAllMenu() {
  cartMenu.classList.remove("active-menu");
  listMenu.classList.remove("active-menu");
  overlay.classList.remove("active-overlay");
}

// Cerrar al scrollear
function closeAtScroll() {
  if (
    !cartMenu.classList.contains("active-menu") &&
    !listMenu.classList.contains("active-menu")
  )
    return;
  closeAllMenu();
}

// Template de los items dentro del carrito
function cartItemsTemplate(item) {
  const { brand, price, quantity, title, img, id } = item;
  return `
   <div class="cart-item-card">
  <div class="card-item-img-container">
      <img src="${img}" alt="">
  </div>
  <div class="card-item-info">
      <div class="card-item-text">
      <p>${title}</p>
      <p>${brand}</p>
      </div>
      <div class="card-item-price-container">
          <div class="card-item-price">$${price}</div>
          <div class="card-item-number-button">
              <div class="item-number-subtract-button" data-id="${id}">-</div>
              <div class="item-number">${quantity}</div>
              <div class="item-number-add-button" data-id="${id}">+</div>
          </div>
      </div>
  </div>
</div> 
`;
}

// Codigo para render de los items en el carrito
function renderCart() {
  itemsCart.innerHTML = cart.map(cartItemsTemplate).join("");
}

// funcion para OBTENER el total de todos los items del carrito
function getCartTotalPrice() {
  return cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
}

// Funcion para MOSTRAR el total de todos los items del carrito
function showCartTotalPrice() {
  total.innerHTML = `$${getCartTotalPrice()}`;
}

// Funcion para mostrar en la burbuja del icono,
// la cantidad de productos agregados al carrito
function renderCartBubble() {
  cartBubble.innerHTML = cart.reduce((acc, item) => acc + item.quantity, 0);
}

// Funcion para inhabilitar botones cuando el carrito este vacío
function disableCartBtn(btn) {
  if (!cart.length) {
    btn.classList.add("disable-button");
  } else {
    btn.classList.remove("disable-button");
  }
}

// funcion para hacer añadir item
function addItem(e) {
  if (!e.target.classList.contains("item-add-button")) return;
  const item = e.target.dataset;

  if (itemExist(item)) {
    addQuantityItem(item);
  } else {
    createCartItem(item);
    successModal("Product added")
  }
  updateCartState();
}

// Funcion para hacer aparecer un mensaje abajo en la pagina
function successModal (modalMsg) {
  modal.classList.add("active-modal")
  modal.textContent = modalMsg
  setTimeout(() => {
    modal.classList.remove("active-modal")
  }, 1500);
}

// Funcion para sacar el item del carrito
function removeItem (cartProductExists) {
  cart = cart.filter((cartItem) => cartItem.id !== cartProductExists.id)
}

// Funcion para añadir una unidad al item
function addQuantityItem(item) {
  cart = cart.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
}

// Funcion para sacar una unidad al item
function subtractQuantityItem(item) {
  cart = cart.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

// Funcion para manejar el click sobre el boton de suma (+)
function handleAddQuantity(id) {
  const cartProductExists = cart.find((item) => item.id === id);
  addQuantityItem(cartProductExists);
}

// Funcion para manejar el click sobre el boton de resta (-) 
function handleSubtractQuantity (id) {
  const cartProductExists = cart.find((item) => item.id === id)
  if(cartProductExists.quantity === 1) {
    if(window.confirm("Do you want delete this product?")) {
      removeItem(cartProductExists)
      updateCartState()
    }
    return
    
  }
  
  subtractQuantityItem(cartProductExists)
}

// Funcion para sumar o restar un item desde del carrito con el boton
function handleQuantityItem(e) {
  if (e.target.classList.contains("item-number-add-button")) {
    handleAddQuantity(e.target.dataset.id);
    successModal("Product Added")
  } else if (e.target.classList.contains("item-number-subtract-button")) {
    handleSubtractQuantity(e.target.dataset.id)
  }

  updateCartState ()
}

// Funcion para hacer funcionar los botones de borrar y comprar (como parametro recibe un mensaje)
function btnCartAction (btnAlertMessage, btnSuccesMessage) {
  if(!cart.length) return;
  if(window.confirm(`${btnAlertMessage}`)) {
    cart = []
    updateCartState()
    alert(`${btnSuccesMessage}`)
  }
}

// Funcion para comprar todos los items del carrito con un boton 
function buyCartItems () {
  btnCartAction("Do you want to buy all products?", "Buy succes!")
}

// Funcion para borrar todos los items del carrito con un boton 
function clearCartItems () {
  btnCartAction("Do you want to clear all the cart?", "You deleted all the products from the cart")
}

// Funcion para crear un objeto con la info del item qu¿e se agregara al carro
function createCartItem(item) {
  cart = [...cart, { ...item, quantity: 1 }];
}

// Funcion para saber si el item ya existe dentro del carro
function itemExist(item) {
  return cart.find((product) => product.id === item.id);
}

// Funcion para manejar grupo de funciones y tener todo organizado
function updateCartState() {
  renderCart();
  showCartTotalPrice();
  renderCartBubble();
  disableCartBtn(buyBtn);
  disableCartBtn(clearBtn);
  cartContentSave();
}

// inicializamos lo que codeamos anteriormente
function init() {
  renderItems(appState.item[0]);
  loadMoreBtn.addEventListener("click", loadMore);
  brandContainer.addEventListener("click", applyFilter);
  cartBtn.addEventListener("click", toggleCart);
  listBtn.addEventListener("click", toggleList);
  overlay.addEventListener("click", closeAllMenu);
  window.addEventListener("scroll", closeAtScroll);
  itemContainer.addEventListener("click", addItem);
  itemsCart.addEventListener("click", handleQuantityItem);
  document.addEventListener("DOMContentLoaded", renderCart);
  buyBtn.addEventListener("click", buyCartItems)
  clearBtn.addEventListener("click", clearCartItems)
  disableCartBtn(buyBtn);
  disableCartBtn(clearBtn);
  updateCartState()
}

init();
