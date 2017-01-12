var availableCash = 100;

var appleTotal = 0;
var orangeTotal = 0;
var bananaTotal = 0;
var grapeTotal = 0;

var appleAvg = [];
var appleAverage = 0;

var orangeAvg = [];
var orange

$(function (){
  console.log('Document is ready');

  window.setInterval(function(){
  setTimeout(timesUp,5000)
  }, 5000);

  var apple = new fruitPrice ('apple', 5.00);
  var orange = new fruitPrice ('orange', 5.00);
  var banana = new fruitPrice ('banana', 5.00);
  var grape = new fruitPrice ('grape', 5.00);

  var fruitArray = [apple, orange, banana, grape];

  $('#appleMarketPrice').append(apple.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
  $('#orangeMarketPrice').append(orange.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
  $('#bananaMarketPrice').append(banana.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
  $('#grapeMarketPrice').append(grape.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));

  function fruitPrice(name,marketPrice) {
    this.name = name;
    this.marketPrice = marketPrice;
  }

  function timesUp () {
    for (var i=0; i < fruitArray.length; i++){
     updatePrice(fruitArray[i]);
   }
   function updatePrice (fruit) {
    fruit.marketPrice += ((randomNumber((-50), 50))/100);
    if (fruit.marketPrice < .50) {
      fruit.marketPrice = .50;
    } else if (fruit.marketPrice > 9.99) {
      fruit.marketPrice = 9.99;
    }
    }

    console.log(fruitArray);
    $('#appleMarketPrice').empty();
    $('#orangeMarketPrice').empty();
    $('#bananaMarketPrice').empty();
    $('#grapeMarketPrice').empty();

    $('#appleMarketPrice').append(apple.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    $('#orangeMarketPrice').append(orange.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    $('#bananaMarketPrice').append(banana.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    $('#grapeMarketPrice').append(grape.marketPrice.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
  }

  $('#appleBuyButton').on('click', function() {
    if (availableCash < apple.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - apple.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    appleTotal++;
    $('#appleInventory').empty();
    $('#appleInventory').append(appleTotal);
    appleAvg.push(apple.marketPrice);
    for (var i = 0; i < appleAvg.length; i++) {
      appleAverage += Number(appleAvg[i]);
    }
      appleAverage = Number(appleAverage / appleAvg.length);
      $('#appleAvgPrice').text('');
      $('#appleAvgPrice').append(appleAverage.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));

    }
  })
  $('#orangeBuyButton').on('click', function() {
    if (availableCash < orange.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - orange.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    orangeTotal++;
    $('#orangeInventory').empty();
    $('#orangeInventory').append(orangeTotal);
    orangeAvg.push(orange.marketPrice);
    for (var i = 0; i < orangeAvg.length; i++) {
      orangeAverage += Number(orangeAvg[i]);
    }
      orangeAverage = Number(orangeAverage / orangeAvg.length);
      $('#orangeAvgPrice').text('');
      $('#orangeAvgPrice').append(orangeAverage.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    }
  })
  $('#bananaBuyButton').on('click', function() {
    if (availableCash < banana.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - banana.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    bananaTotal++;
    $('#bananaInventory').empty();
    $('#bananaInventory').append(bananaTotal);
    }
  })
  $('#grapeBuyButton').on('click', function() {
    if (availableCash < grape.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - grape.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    grapeTotal++;
    $('#grapeInventory').empty();
    $('#grapeInventory').append(grapeTotal);
    }
  })

});

//we need parameters between 50cents- 9.99
//each fruit can not go below the cost of 50cents or above $9.99
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
