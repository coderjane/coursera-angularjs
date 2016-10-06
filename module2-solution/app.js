(function (){
'use strict';

angular.module('ShoppingListApp', [])
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
    [{name: "Cereal", quantity: 1} ,
     {name: "Breads", quantity: 2} ,
     {name: 'Juices', quantity: 3 },
     {name: 'Eggs', quantity: 2} ,
     {name: 'Milk', quantity: 1} ]  ;
  var boughtItems = [];

  service.addItemToBuy = function(itemName, itemQuantity){
    var buyItem = service.addItemToList(itemName, itemQuantity);
    buyItems.push(buyItem);
    console.log("ServiceBuyList", buyItems);
  }

  service.addItemToList = function(itemName, itemQuantity){
    var item = {
      name : itemName,
      quantity : itemQuantity
    };
    console.log("Item Added", item);
    return item;
    //buyItems.push(item);
  }

  service.buyItem = function(itemIndex){
    boughtItems.push(service.addItemToList(buyItems[itemIndex].name, buyItems[itemIndex].quantity));
    service.removeItem(itemIndex);
    console.log("NewServiceBoughtList", boughtItems);
    console.log("NewServiceBuyList", buyItems);
  }

  service.removeItem = function (itemIndex){
    buyItems.splice(itemIndex, 1);
  }

  service.getItemsToBuy = function(){
    console.log("GetBuyList", buyItems);
    return buyItems;
  }

  service.getItemsBought = function(){
    console.log("GetBoughtList", boughtItems);
    return boughtItems;
  }


 }

}) ();
