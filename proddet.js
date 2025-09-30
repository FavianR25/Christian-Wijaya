document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const mainImage = document.querySelector('.main-image');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      mainImage.src = this.src;
      mainImage.alt = this.alt;
      
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
      sizeButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', function() {
      colorOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const decrementBtn = document.querySelector('.decrement');
  const incrementBtn = document.querySelector('.increment');
  const quantityInput = document.querySelector('.qty-value');
  
  decrementBtn.addEventListener('click', function() {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });
  
  incrementBtn.addEventListener('click', function() {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
  });
  
  quantityInput.addEventListener('change', function() {
    if (this.value < 1 || isNaN(this.value)) {
      this.value = 1;
    }
  });
});