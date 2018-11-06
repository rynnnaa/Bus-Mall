'use strict';
var allProducts = [];
var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu','dog-dick', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(name, src) {
  this.name = name; 
  this.src = src;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

(function buildAlbum() {
  for (var i = 0; i < products.length; i++) {
    new Product(products[i], './assets' + products[i] + '.jpg');
  }
})();

var productRank = {


  leftEl: document.getElementById('img1'),
  middleEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),

  resultsButton: document.getElementById('results'),
  resetButton: document.getElementById('reset'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * products.length);
  },

