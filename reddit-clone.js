angular.module("theRedditClone", ['angularMoment'])
  .controller("all", function($scope) {

  $scope.sortType = 'date';
  $scope.sortReverse = false;
  $scope.searchPosts = '';

  $scope.posts = [];
  // $scope.post = {};

  $scope.savePost = function(post){
    post.timeAdded = new Date()
    post.votes = 0
    post.comments = []
    $scope.posts.push(post)
    $scope.post = {}
    $scope.showForm = false;
  }

  $scope.upvote = function(post){
    this.post.votes += 1
  }

  $scope.downvote = function(post){
    this.post.votes -= 1
  }

  $scope.saveComment = function(comment){
    this.post.comments.push(comment);
    this.comment = {};
    $scope.showCommentForm = !$scope.showCommentForm;
  }

  $scope.showComments = function(post){
    $scope.thisPostComments = this.post.comments;
    $scope.showCommentSection = !$scope.showCommentSection;
  }

  // A user can click to view existing comments on a specific post
  // The number of comments is correctly pluralized
  // A user can search through posts
  // Animate posts as they are added and removed from the search results.
  // Style the app. It should look better than my implementation.

})