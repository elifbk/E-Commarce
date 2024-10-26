export function saveToLocalStorage(cart) {
  //* localStorage'a veri ekleme
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartFromLocalStorage() {
  //* localStorage'da cart adında bir key varsa onları json formatında getir.
  //* Yoksa da boş bir dizi döndür.
  return JSON.parse(localStorage.getItem("cart")) || [];
}
//* Sepetteki ürün miktarını hesaplar
export function updateCartIcon(cart) {
  const cartIcon = document.getElementById("cart-icon");
  const i = document.querySelector(".bx-shopping-bag");

  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  i.setAttribute("data-quantity", totalQuantity);
  cartIcon.setAttribute("data-quantity", totalQuantity);
}

export function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
