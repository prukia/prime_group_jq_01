var availableCash = 1000;

$(function (){
  console.log('Document is ready');

  window.setInterval(function(){
  setTimeout(timesUp,5000)
  }, 5000);

  var apple = new fruitPrice ('apple', 500);
  var orange = new fruitPrice ('orange', 500);
  var banana = new fruitPrice ('banana', 500);
  var grape = new fruitPrice ('grape', 500);

  var fruitArray = [apple, orange, banana, grape];

  $('#appleMarketPrice').append(apple.marketPrice);
  $('#orangeMarketPrice').append(orange.marketPrice);
  $('#bananaMarketPrice').append(banana.marketPrice);
  $('#grapeMarketPrice').append(grape.marketPrice);

  function fruitPrice(name,marketPrice) {
    this.name = name;
    this.marketPrice = marketPrice;
  }

  function timesUp () {
    for (var i=0; i < fruitArray.length; i++){
     updatePrice(fruitArray[i]);
   }
   function updatePrice (fruit) {
    fruit.marketPrice += (randomNumber((-50), 50));
    }
    console.log(fruitArray);
    $('#appleMarketPrice').empty();
    $('#orangeMarketPrice').empty();
    $('#bananaMarketPrice').empty();
    $('#grapeMarketPrice').empty();

    $('#appleMarketPrice').append(apple.marketPrice);
    $('#orangeMarketPrice').append(orange.marketPrice);
    $('#bananaMarketPrice').append(banana.marketPrice);
    $('#grapeMarketPrice').append(grape.marketPrice);
  }

  $('#appleBuyButton').on('click', function() {
    if (availableCash < apple.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - apple.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash);
    }
  })
  $('#orangeBuyButton').on('click', function() {
    if (availableCash < orange.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - orange.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash);
    }
  })
  $('#bananaBuyButton').on('click', function() {
    if (availableCash < banana.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - banana.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash);
    }
  })
  $('#grapeBuyButton').on('click', function() {
    if (availableCash < grape.marketPrice) {
      alert("You got no cash money!");
    } else {
    availableCash = (availableCash - grape.marketPrice);
    console.log(availableCash);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash);
    }
  })

});


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
