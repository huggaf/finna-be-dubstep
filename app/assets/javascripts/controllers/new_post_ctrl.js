var NewPostCtrl = ["$scope", "$rootScope", "Post", "PostResource", function ($scope, $rootScope, Post, PostResource){
  $scope.post = new Post({color: $rootScope.colors[0], visible: true});
}]
