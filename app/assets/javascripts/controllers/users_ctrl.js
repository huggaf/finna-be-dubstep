var UsersCtrl = ["$scope", "$rootScope", "$location", "$routeParams","UserResource", function ($scope, $rootScope, $location, $routeParams, UserResource){
  $scope.user = {}
  $scope.reset_password = $routeParams.reset_token;

  $scope.resetPassword = function(){
    // pré-condição
    if($scope.reseting){return}

    // tranca
    $scope.reseting = true;

    // limpa as listas de feedback
    $rootScope.errors = []
    $rootScope.messages = []

    UserResource.reset_password({reset_token: $scope.reset_password, user: $scope.user}, function(data){
      $rootScope.messages.push("Senha alterada com sucesso");
      $rootScope.user = data;
      $scope.reseting = false;
      $location.path('/');
    }, function(response){
      $rootScope.errors = response.data.errors;
      $scope.reseting = false;
    })

  }

  $scope.cancelToken = function(){
    // pré-condição
    if($scope.canceling){return}

    // tranca
    $scope.canceling = true;

    // limpa as listas de feedback
    $rootScope.errors = []
    $rootScope.messages = []

    UserResource.cancel_reset_password_token({reset_token: $routeParams.reset_token}, function(data){
      $rootScope.messages.push("Token cancelada com sucesso");
      $scope.canceling = false;
    }, function(response){
      $rootScope.errors = response.data.errors;
      $scope.canceling = false;
    })

  }

  $scope.cancel = function(){
    if(confirm("Deseja abandonar sua recuperação de senha?\n\nVocê pode voltar mais tarde, desde que o token ainda esteja válido.\n\nCaso já tenha passado da validade basta refazer a requisição de lembrar a senha."))
      $location.path('/');
  }
}]
