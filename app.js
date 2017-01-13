var availableCash = 100;

var appleTotal = 0;
var orangeTotal = 0;
var bananaTotal = 0;
var grapeTotal = 0;

var appleAvg = [];
var orangeAvg = [];
var bananaAvg = [];
var grapeAvg = [];

$(function (){
  console.log('Document is ready');

  setTimeout (storeIsClosed, 300000);

  var timer = null;

  timer = window.setInterval(function(){
    setTimeout(timesUp,15000)
  }, 15000);

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
      // console.log(availableCash);
      $('#userAvailableCash').empty();
      $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
      appleTotal++;
      $('#appleInventory').empty();
      $('#appleInventory').append(appleTotal);
      appleAvg.push(apple.marketPrice);
      var appleAverage = 0;
      for (var i = 0; i < appleAvg.length; i++) {
        appleAverage += Number(appleAvg[i]);
      }
      console.log(appleAvg);
      console.log(appleAverage);
      appleAverage = Number(appleAverage / appleAvg.length);
      console.log(appleAverage);
      $('#appleAvgPrice').text('');
      $('#appleAvgPrice').append(appleAverage.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));

    }
  })
  $('#orangeBuyButton').on('click', function() {
    if (availableCash < orange.marketPrice) {
      alert("You got no cash money!");
    } else {
      availableCash = (availableCash - orange.marketPrice);
      // console.log(availableCash);
      $('#userAvailableCash').empty();
      $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
      orangeTotal++;
      $('#orangeInventory').empty();
      $('#orangeInventory').append(orangeTotal);
      orangeAvg.push(orange.marketPrice);
      var orangeAverage = 0;
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
      // console.log(availableCash);
      $('#userAvailableCash').empty();
      $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
      bananaTotal++;
      $('#bananaInventory').empty();
      $('#bananaInventory').append(bananaTotal);
      bananaAvg.push(banana.marketPrice);
      var bananaAverage = 0;
      for (var i = 0; i < bananaAvg.length; i++) {
        bananaAverage += Number(bananaAvg[i]);
      }
      bananaAverage = Number(bananaAverage / bananaAvg.length);
      $('#bananaAvgPrice').text('');
      $('#bananaAvgPrice').append(bananaAverage.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    }

  })
  $('#grapeBuyButton').on('click', function() {
    if (availableCash < grape.marketPrice) {
      alert("You got no cash money!");
    } else {
      availableCash = (availableCash - grape.marketPrice);
      // console.log(availableCash);
      $('#userAvailableCash').empty();
      $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
      grapeTotal++;
      $('#grapeInventory').empty();
      $('#grapeInventory').append(grapeTotal);
      grapeAvg.push(grape.marketPrice);
      var grapeAverage = 0;
      for (var i = 0; i < grapeAvg.length; i++) {
        grapeAverage += Number(grapeAvg[i]);
      }
      grapeAverage = Number(grapeAverage / grapeAvg.length);
      $('#grapeAvgPrice').text('');
      $('#grapeAvgPrice').append(grapeAverage.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    }
  })
$('#sellApple').on('click', function() {
  if (appleTotal < 1) {
    alert("You can't sell what you don't have!");
  } else {
  appleTotal--;
  $('#appleInventory').empty();
  $('#appleInventory').append(appleTotal);
  availableCash = (availableCash + apple.marketPrice);
  $('#userAvailableCash').empty();
  $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
}
})
$('#sellOrange').on('click', function() {
  if (orangeTotal < 1) {
    alert("You can't sell what you don't have!");
  } else {
  orangeTotal--;
  $('#orangeInventory').empty();
  $('#orangeInventory').append(orangeTotal);
  availableCash = (availableCash + orange.marketPrice);
  $('#userAvailableCash').empty();
  $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
}
})
$('#sellBanana').on('click', function() {
  if (bananaTotal < 1) {
    alert("You can't sell what you don't have!");
  } else {
  bananaTotal--;
  $('#bananaInventory').empty();
  $('#bananaInventory').append(bananaTotal);
  availableCash = (availableCash + banana.marketPrice);
  $('#userAvailableCash').empty();
  $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
}
})
$('#sellGrape').on('click', function() {
  if (grapeTotal < 1) {
    alert("You can't sell what you don't have!");
  } else {
  grapeTotal--;
  $('#grapeInventory').empty();
  $('#grapeInventory').append(grapeTotal);
  availableCash = (availableCash + grape.marketPrice);
  $('#userAvailableCash').empty();
  $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
}
})

function storeIsClosed() {

    clearInterval(timer);

    var appleProfit = (appleTotal * apple.marketPrice);
    appleTotal = 0;
    $('#appleInventory').empty();
    $('#appleInventory').append(appleTotal);
    availableCash = (availableCash + appleProfit);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));

    var orangeProfit = (orangeTotal * orange.marketPrice);
    orangeTotal = 0;
    $('#orangeInventory').empty();
    $('#orangeInventory').append(orangeTotal);
    availableCash = (availableCash + orangeProfit);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));

    var bananaProfit = (bananaTotal * banana.marketPrice);
    bananaTotal = 0;
    $('#bananaInventory').empty();
    $('#bananaInventory').append(bananaTotal);
    availableCash = (availableCash + bananaProfit);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));

    var grapeProfit = (grapeTotal * grape.marketPrice);
    grapeTotal = 0;
    $('#grapeInventory').empty();
    $('#grapeInventory').append(grapeTotal);
    availableCash = (availableCash + grapeProfit);
    $('#userAvailableCash').empty();
    $('#userAvailableCash').append(availableCash.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));


}

});



function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
