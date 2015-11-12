var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  // $scope.name = "Severus Snape";
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.nums = [1,1,2,5,6,9,9,9]
})