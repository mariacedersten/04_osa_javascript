const form = document.querySelector('.form-container');

const pancakePriceCalc = () => {
  const typeSelect = document.querySelector('#type');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalPriceElement = document.querySelector('#totalPrice');
  const totalPriceElement1 = document.querySelector('#totalPriceT');
  const priceBanner = document.querySelector('.price-banner');
  const priceText = document.querySelector('.price-text');
  
  let total = parseInt(typeSelect.value, 10); 
  for (const item of checkboxes) {
    if (item.checked) {
      total += parseInt(item.value, 10); 
    }
  }

  
  totalPriceElement.textContent = `${total}€`;
  totalPriceElement1.textContent = `${total}€`;
};


form.addEventListener('change', pancakePriceCalc);
