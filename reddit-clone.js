angular.module("theRedditClone", [])
  .controller("all", function($scope) {

  $scope.posts = [];
  $scope.post = {};

  $scope.savePost = function(post){
    post.timeAdded = new Date()
    post.votes = 0
    $scope.posts.push(post)
    $scope.post = {}
    $scope.showForm = !$scope.showForm
  }

  $scope.upvote = function(post){
    this.post.votes += 1
  }

  $scope.downvote = function(post){
    this.post.votes -= 1
  }

})