
const modelWindowError = document.getElementById('model-window-error');
const modelWindow = document.getElementById('model-window');


let cart = document.querySelector('#shop');
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  restoreCart();
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
var button = removeCartButtons[i];
button.addEventListener("click", removeCartItem);
  }
  
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
var input = quantityInputs[i];
input.addEventListener("change", quantityChanged);
  }
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
var button = addCart[i];
button.addEventListener("click", addCarClicked);    
  }
}


function restoreCart() {
  var storedCart = localStorage.getItem("cart");
  if (storedCart) {
document.getElementsByClassName("cart-content")[0].innerHTML = storedCart;
updateTotal();
    
  }
}

function saveCart() {
  var cartContent = document.getElementsByClassName("cart-content")[0].innerHTML;
  localStorage.setItem("cart", cartContent);
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  saveCart();
  updateTotal();
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
input.value = 1;
  }
  saveCart();
  updateTotal();
}


function addCarClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  saveCart();
  updateTotal();    
 
}



function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  for (var i = 0; i < cartItems.children.length; i++) {
    var cartItem = cartItems.children[i];
    var cartItemTitle = cartItem.getElementsByClassName("cart-product-title")[0].innerText;
    
    if (cartItemTitle === title) {
    modelWindowError.classList.add("show");
    setTimeout(() => {
        modelWindowError.classList.remove("show");
    }, 1000);
   
   
  return;
        }
  }

  
  
  
    var cartBoxContent = '<img src="' + productImg + '" class="cart-img">' +
        '<div class="detail-box">' +
        '<div class="cart-product-title">' + title + '</div>' +
        '<div class="cart-price">' + price + '</div>' +
        '<div class="quantity-wraper">' +
        '<button class="quantity-btn minus">-</button>' +
        '<input type="number" value="1" class="cart-quantity">' +
        '<button class="quantity-btn plus">+</button>' +
        '</div>' +
        '</div>' +
        '<i class="bx bxs-trash-alt cart-remove"></i>';
  
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);

    
    var plusButton = cartShopBox.getElementsByClassName("plus")[0];
    var minusButton = cartShopBox.getElementsByClassName("minus")[0];
    
    plusButton.addEventListener("click", incrementQuantity);
    minusButton.addEventListener("click", decrementQuantity);
    
    
    
    if (cartBoxContent === cartBoxContent) {
    
    modelWindow.classList.add("show");
    setTimeout(() => {
        modelWindow.classList.remove("show");
    }, 1000);
   
  return;
    }
   
}

function incrementQuantity(event) {
    var button = event.target;
    var input = button.parentElement.getElementsByClassName("cart-quantity")[0];
    input.value = parseInt(input.value) + 1;
    updateTotal();
}

function decrementQuantity(event) {
    var button = event.target;
    var input = button.parentElement.getElementsByClassName("cart-quantity")[0];
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
    updateTotal();
}









function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
  
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = total + 'грн';
}

ready();
