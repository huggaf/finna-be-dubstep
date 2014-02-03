var NewArticleCtrl = ["$scope", "$rootScope", "$location", "Article", "ArticleResource", function ($scope, $rootScope, $location, Article, ArticleResource){
  $scope.article = new Article({color: $rootScope.colors[0], visible: true});

  $scope.save = function(){
    if($scope.article.saving){return}

    $scope.errors = [];
    if($scope.article.save()){
      $rootScope.articles.unshift($scope.article);
      $location.path('/');
    }
    else{
      $scope.errors = $scope.article.errors;
    }

  }

  $scope.cancel = function(){
    if(confirm("Deseja cancelar este cadastro?"))
      $location.path('/');
  }
}]
