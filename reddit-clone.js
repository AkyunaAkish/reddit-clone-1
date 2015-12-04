angular.module("theRedditClone", ['angularMoment', 'ngAnimate'])
  .controller("all", function($scope) {

  $scope.sortType = 'date';
  $scope.sortReverse = false;
  $scope.searchPosts = '';

  $scope.posts = [];

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

})