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
    var defaultMessage = "Please enter data first";

     $scope.displayMessage = checkListLength($scope.lunchList, comma, limit);

     if($scope.displayMessage == defaultMessage){
       $scope.displayColor="red";
     }else{
       $scope.displayColor="green";
     }
  };

  function checkListLength(stringToSplit, separator, limit){
    var count = 0;

    count = splitString(stringToSplit, separator);

    if(count == 0 ){
      return "Please enter data first";
    }else if (count <= limit) {
      return "Enjoy!";
    }else{
      return "Too Much!";
    }
  }

  function splitString(stringToSplit, separator){
    var count=0;
    var item = "";

    var arrayOfString = stringToSplit.split(separator);

    for( var i=0; i < arrayOfString.length; i++){
      item = arrayOfString[i].trim();
      if(item.length != 0 ){
        count++;
      }
    }
    return count;
  }
};


}) ();
