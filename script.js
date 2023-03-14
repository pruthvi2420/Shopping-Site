
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    // loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    // loginform.classList.remove('active');
    navbar.classList.remove('active');
    
}








let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    // loginform.classList.remove('active');
    
}

window.onscroll = ()=>{
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    // loginform.classList.remove('active');
    navbar.classList.remove('active');
    

}










// Cart
let cartIcon = document.querySelector('#cart-btn');
let cart = document.querySelector('.shopping-cart');
let closeCart = document.querySelector('#close-cart');
// Open Cart
cartIcon.onclick = () =>{
  cart.classList.add("active");
}

// Close Cart
closeCart.onclick = () =>{
  cart.classList.remove("active");
}


// Cart Working Js
if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', ready);
}else{
  ready();
}

//Making Function
function ready() {
  //Remove items from Cart
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for(var i=0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for(var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  // Add to cart from list page
  var addCart = document.getElementsByClassName('add-cart')
}


//Remove Items From Cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// Quantity Changes
function quantityChanged(event){
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

//Update Total
function updatetotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;
  for(var i=0; i<cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity = quantityElement.value;
    total = total + price + quantity ;

    // if price contain some cents Value
    total = Math.round(total + 100)/100;
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
  }
}