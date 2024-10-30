var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const allBtn = document.getElementById('all-btn');
const below15000Btn = document.getElementById('below-15000-btn');
const btn15000to25000 = document.getElementById('15000-25000-btn');
const btn25000to50000 = document.getElementById('250000-50000-btn');
const btn50000to80000 = document.getElementById('50000-80000-btn');
const above80000Btn = document.getElementById('above-80000-btn');
const cards = document.querySelectorAll('.filter');
const familyPack = document.querySelector('.familyPac')
const flagShipPack = document.querySelector('.flacshipPac')


allBtn.addEventListener('click', function() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'block';
  }
});

below15000Btn.addEventListener('click', function() {
  for (let i = 0; i < cards.length; i++) {
    const price = parseInt(cards[i].dataset.price);
    if (price >= 15000) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'block';
    }
  }
});

btn15000to25000.addEventListener('click', function() {
  for (let i = 0; i < cards.length; i++) {
    const price = parseInt(cards[i].dataset.price);
    if (price < 15000 || price > 25000) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'block';
    }
  }
});

btn25000to50000.addEventListener('click', function() {
  for (let i = 0; i < cards.length; i++) {
    const price = parseInt(cards[i].dataset.price);
    if (price < 25000 || price > 35000) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'block';
    }
  }
});

btn50000to80000.addEventListener('click', function() {
  for (let i = 0; i < cards.length; i++) {
    const price = parseInt(cards[i].dataset.price);
    if (price <= 40000) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'block';
    }
  }
});
above80000Btn.addEventListener('click', function() {
  for (let i = 0; i < cards.length; i++) {
    const price = parseInt(cards[i].dataset.upprice);
    if (price === 80000) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
});

function showData() {
  const select = document.getElementById("budget-price");
  const price = document.getElementById("price-pac");

  price.textContent = select.value;
}