(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.lunchList = "";
  $scope.placeholder= "Enter how many items you had for lunch";
  $scope.displayMessage = "";
  $scope.displayColor = "";

  $scope.countList = function (){
    var comma = ",";
    var limit = 3;

    if($scope.lunchList.length == 0){
      $scope.displayColor = "red";
      $scope.displayMessage = "Please enter data first";
    }else {
      $scope.displayColor = "green";
      $scope.displayMessage = checkStringLength($scope.lunchList, comma, limit);
    }
  };

  function checkStringLength(stringToSplit, separator, limit){
    var count = 0;
    var item = "";
    //count = stringToSplit.split(separator).length;
    var arrayOfString = stringToSplit.split(separator);

    for( var i=0; i < stringToSplit.split(separator).length; i++){
      item = arrayOfString[i].trim();
      if(item.length != 0 ){
        count++;
      }
    }

    if(count <= limit){
      return "Enjoy!";
    }else {
      return "Too Much!";
    }
  }
};


}) ();
