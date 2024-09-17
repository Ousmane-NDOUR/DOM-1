document.addEventListener('DOMContentLoaded', function () {
    let totalPrice = 0;
  
    function updateTotal() {
      document.querySelector('.total').innerText = `${totalPrice} $`;
    }
  
    function adjustQuantity(product, change) {
      const quantityElement = product.querySelector('.quantity');
      const unitPrice = parseInt(product.querySelector('.unit-price').innerText.replace(' $', ''));
      let quantity = parseInt(quantityElement.innerText);
  
      quantity += change;
      if (quantity < 0) quantity = 0;
  
      quantityElement.innerText = quantity;
  
      totalPrice += change * unitPrice;
      if (totalPrice < 0) totalPrice = 0;
  
      updateTotal();
    }
  
    function toggleLike(likeButton) {
      likeButton.classList.toggle('liked');
    }
  
    function deleteProduct(product) {
      const unitPrice = parseInt(product.querySelector('.unit-price').innerText.replace(' $', ''));
      const quantity = parseInt(product.querySelector('.quantity').innerText);
  
      totalPrice -= unitPrice * quantity;
      if (totalPrice < 0) totalPrice = 0;
  
      updateTotal();
  
      product.remove();
    }
  
    const products = document.querySelectorAll('.card-body');
  
    products.forEach((product) => {
      const plusButton = product.querySelector('.fa-plus-circle');
      const minusButton = product.querySelector('.fa-minus-circle');
      const trashButton = product.querySelector('.fa-trash-alt');
      const likeButton = product.querySelector('.fa-heart');
  
      plusButton.addEventListener('click', function () {
        adjustQuantity(product, 1);
      });
  
      minusButton.addEventListener('click', function () {
        adjustQuantity(product, -1);
      });
  
      trashButton.addEventListener('click', function () {
        deleteProduct(product);
      });
  
      likeButton.addEventListener('click', function () {
        toggleLike(likeButton);
      });
    });
  });
  