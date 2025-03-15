// Hàm mở popup
function openPopup(productName, productPrice) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-price').textContent = productPrice.toLocaleString();
  }
  
  // Hàm đóng popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  