(function (){
'use strict';

angular.module ('ShoppingListApp', [])
.controller ('ToBuyController', ToBuyController)
.controller ('AlreadyBoughtController', AlreadyBoughtController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;

  buy.item = "";
  buy.quantity = "";

  buy.addItemToBuy = function (){
    ShoppingListCheckOffService.addItemToBuy(buy.item, buy.quantity);
  }

  buy.buyList = ShoppingListCheckOffService.getItemsToBuy();

  buy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);

  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;

  bought.boughtList = ShoppingListCheckOffService.getItemsBought();
}



 function ShoppingListCheckOffService (){
  var service = this;

  var buyItems =
    [{name: "Cereal", quantity: 1},
     {name: "Bananas", quantity: 6},
     {name: 'Juices', quantity: 3 },
     {name: 'Eggs', quantity: 2},
     {name: 'Milk', quantity: 1}];
  var boughtItems = [];

  service.getItemsToBuy = function(){
    return buyItems;
  }

  service.addItem= function(itemName, itemQuantity){
    var item = {
      name : itemName,
      quantity : itemQuantity
    };
    return item;
  }

  service.addItemToBuy = function(itemName, itemQuantity){
    var buyItem = service.addItem(itemName, itemQuantity);
    buyItems.push(buyItem);
  }

  service.buyItem = function(itemIndex){
    boughtItems.push(service.addItem(buyItems[itemIndex].name, buyItems[itemIndex].quantity));
    service.removeItem(itemIndex);
  }

  service.getItemsBought = function(){
    console.log("GetBoughtList", boughtItems);
    return boughtItems;
  }

  service.removeItem = function (itemIndex){
    buyItems.splice(itemIndex, 1);
  }

 }

}) ();
