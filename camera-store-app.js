var app = angular.module("cameraStore", []);
app.controller("CameraController", function($scope){

  $scope.sortType = 'price'
  $scope.sortByRating = function() {
    $scope.sortType = 'rating';
  }
  $scope.sortByPrice = function() {
    $scope.sortType = 'price';
  }

  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ]


})