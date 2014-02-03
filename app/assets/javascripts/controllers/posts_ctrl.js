var PostsCtrl = ["$scope", "$rootScope", "Post", "PostResource", function ($scope, $rootScope, Post, PostResource){
  $scope.post = new Post({color: $rootScope.colors[0], visible: true});

  if($rootScope.page == undefined)
    $rootScope.page = 0;

  // $scope.template = $rootScope.isMobile ? '/assets/posts/show.mobile.html' : '/assets/posts/show.desktop.html'

  $scope.template = function(post){
    str = '/assets/posts/'
    str += post.edit           ? 'edit' : 'show';
    str += $rootScope.isMobile ? '.mobile' : '.desktop';
    str += '.html'

    return str
  }

  $scope.nextPage = function(){
    if($rootScope.loadingPosts || !$rootScope.loadMore){return}
    $rootScope.loadingPosts = true;

    $rootScope.page += 1;
    PostResource.query({page: $rootScope.page},function(data){

      if(data.length > 0){
        // instancia objetos retornados pelo json
        data.forEach(function(attributes){
          $rootScope.posts.push(new Post(attributes));
        })
      }
      else
        $rootScope.loadMore = false;

      $rootScope.loadingPosts = false;
    },function(){
      $rootScope.loadingPosts = false;
    });
  }

  if($rootScope.posts.length == 0)
    $scope.nextPage();

}]
