
$(function (){
  console.log('Document is ready');

  window.setInterval(function(){
  setTimeout(timesUp,5000)
  }, 5000);


  fruitPrice('apple', 500);
  fruitPrice('orange', 500);
  fruitPrice('banana', 500);
  fruitPrice('grape', 500);



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






});
// setTimeout(timesUp, 5000);

// console.log(fruitArray);



// console.log(fruitPriceArray);
//
// console.log(fruitArray);


// setTimeout(priceChange, time)
//     priceChange (fruitArray){
//     var change = randomNumber((-.50)..50)
//     for(var i=0; i < 4; i++){
//      change += fruitArray[i];
//    }
//  }

// function fruitPrice(name,marketPrice) {
//   this.name = name;
//   this.marketPrice = marketPrice;
// }
//
// function timesUp () {
//   for (var i=0; i < fruitArray.length; i++){
//    updatePrice(fruitArray[i]);
//  }
//  function updatePrice (fruit) {
//   fruit.marketPrice += (randomNumber((-50), 50));
//   }
// console.log(fruitArray);
// }

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
