// map coordinates and modal

const handleWindowResize = () => {
  // Get the area element with id "area1"
  const area1 = document.getElementById('area1');
  // Get the area element with id "area2"
  const area2 = document.getElementById('area2');
  // Get the area element with id "area3"
  const area3 = document.getElementById('area3');
  // Get the area element with id "area4"
  const area4 = document.getElementById('area4');
  // Get the area element with id "area5"
  const area5 = document.getElementById('area5');
  // Get the area element with id "area6"
  const area6 = document.getElementById('area6');
  // Get the area element with id "area7"
  const area7 = document.getElementById('area7');
  // Get the area element with id "area8"
  const area8 = document.getElementById('area8');
  // Get the area element with id "area9"
  const area9 = document.getElementById('area9');
  // Get the area element with id "area10"
  const area10 = document.getElementById('area10');

  // Check the window width
  //   if (window.innerWidth <= 1440) {
  //     area1.coords = '400, 97, 437. 118';
  //     area2.coords = '409, 179, 496, 209';
  //   } else {
  //     area1.coords = '443, 109, 499, 140';
  //     area2.coords = '409, 179, 496, 209';
  //   }

  if (window.innerWidth <= 1540) {
    area1.coords = '264, 65, 291, 80';
    area2.coords = '247, 107, 290, 118';
    area3.coords = '252, 140, 273, 157';
    area4.coords = '249, 162, 288, 176';
    area5.coords = '151, 168, 183, 181';
    area6.coords = '259, 214, 286, 233';
    area7.coords = '232, 244, 269, 255';
    area8.coords = '127, 265, 158, 297';
    area9.coords = '241, 271, 288, 282';
    area10.coords = '170, 355, 224, 368';
  } else {
    area1.coords = '443, 109, 499, 140';
    area2.coords = '409, 179, 496, 209';
    area3.coords = '413, 275, 493, 300';
    area4.coords = '415, 235, 467, 263';
    area5.coords = '393, 455, 492, 485';
    area6.coords = '246, 285, 311, 312';
    area7.coords = '427, 360, 503, 396';
    area8.coords = '384, 407, 461, 432';
    area9.coords = '205, 445, 270, 473';
    area10.coords = '284, 597, 388, 628';
  }

  if (window.innerWidth <= 400) {
    area1.coords = '212, 52, 232, 63';
    area2.coords = '198, 86, 231, 96';
    area3.coords = '201. 111, 219, 122';
    area4.coords = '199, 131, 230, 142';
    area5.coords = '122, 134, 146, 146';
    area6.coords = '207, 169, 226, 190';
    area7.coords = '185, 194, 216, 204';
    area8.coords = '100, 212, 127, 221';
    area9.coords = '192, 217, 230, 228';
    area10.coords = '136, 284, 180, 295';
  } else {
    area1.coords = '264, 65, 291, 80';
    area2.coords = '247, 107, 290, 118';
    area3.coords = '252, 140, 273, 157';
    area4.coords = '249, 162, 288, 176';
    area5.coords = '151, 168, 183, 181';
    area6.coords = '259, 214, 286, 233';
    area7.coords = '232, 244, 269, 255';
    area8.coords = '127, 265, 158, 297';
    area9.coords = '241, 271, 288, 282';
    area10.coords = '170, 355, 224, 368';
  }
};

window.addEventListener('resize', handleWindowResize);

handleWindowResize();

// video carousel
// const carousel = document.querySelector('.carousel');
// const previousButton = document.querySelector('.previous-button');
// const nextButton = document.querySelector('.next-button');

// let currentIndex = 0;

// function previous() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = carousel.children.length - 1;
//   }
//   carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function next() {
//   currentIndex++;
//   if (currentIndex >= carousel.children.length) {
//     currentIndex = 0;
//   }
//   carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// previousButton.addEventListener('click', previous);
// nextButton.addEventListener('click', next);

// price slider
const rangeInput = document.querySelectorAll('.range-input input'),
  priceInput = document.querySelectorAll('.price-input input'),
  range = document.querySelector('.slider .progress');
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === 'input-min') {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
    }
  });
});


// Get all the day headers
const dayHeaders = document.querySelectorAll(".day-header");

// Loop through each day header and add a click event listener
dayHeaders.forEach((dayHeader) => {
  dayHeader.addEventListener("click", () => {
    // Toggle the active class on the clicked day header
    dayHeader.classList.toggle("active");

    // Get the activities container of the clicked day
    const activities = dayHeader.nextElementSibling;

    // Toggle the visibility of the activities container
    if (activities.style.maxHeight) {
      activities.style.maxHeight = null;
    } else {
      activities.style.maxHeight = activities.scrollHeight + "px";
    }
  });
});
