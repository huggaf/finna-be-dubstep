var NewArticleCtrl = ["$scope", "$rootScope", "$location", "Article", "ArticleResource", function ($scope, $rootScope, $location, Article, ArticleResource){
  // instancia um artigo em branco apenas com a primeira cor seleciona.
  $scope.article = new Article({color: $rootScope.colors[0]});

  $scope.save = function(){
    // pré-condição.
    if($scope.saving){return}

    // tranca.
    $scope.saving = true;

    // limpa as listas de feedback.
    $rootScope.errors = []
    $rootScope.messages = []

    // ajax para cadastrar.
    ArticleResource.create({article: $scope.article}, function(data){
      // feedback de sucesso.
      $rootScope.messages.push("Artigo criado com sucesso");
      // destranca.
      $scope.saving = false;
      // redireciona para a listagem de artigos.
      $location.path('/');
    }, function(response){
      // feedback de erros.
      $rootScope.errors = response.data.errors
      // destranca.
      $scope.saving = false
    })

  }

  // cancela o cadastro e volta para a listagem de artigos.
  $scope.cancel = function(){
    if(confirm("Deseja cancelar este cadastro?"))
      $location.path('/');
  }
}]
