document.getElementById("BuyNow").addEventListener("click", function() {
  let totalPrice = document.querySelector(".total-price").innerHTML;
  let cartContent = localStorage.getItem("cart");

  // Кодируем данные в формат URL
  let encodedCartContent = encodeURIComponent(cartContent);
  let encodedTotalPrice = encodeURIComponent(totalPrice);

  // Передаем обе переменные в URL
  window.location.href = "checkout.html?totalPrice=" + encodedTotalPrice + "&cart=" + encodedCartContent;
});