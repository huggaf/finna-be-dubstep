var LoginCtrl = ["$scope", "$rootScope", "UserResource", "SessionResource", function ($scope, $rootScope, UserResource, SessionResource){
  // config de textos para o botão do formulário
  $scope.btnTexts = {signin: "Cadastrar",
                     login: "Entrar",
                     remember: "Recuperar senha"};

  // inicia o formulário para login
  $scope.login = {type: 'login'};

  // destrói a sessão e limpa o $rootScope.user
  $scope.logout = function(){
    if($rootScope.articles.every(function(e){return e.unselect()})){
      SessionResource.logout(function(){
        $rootScope.user = null;
      })
    }
  }

  // envia o formulário dependendo da ação
  $scope.sendForm = function(){
    // pré-condição
    if($scope.logging){return}

    // tranca
    $scope.logging = true

    // limpa lista de feedback
    $rootScope.errors = [];
    $rootScope.messages = [];

    // função de sucesso
    success_function = function(data){
      // preenche o usuário
      $rootScope.user = data;
      // esconde o formulário de login
      $rootScope.showLogin = false;
      // reseta o formulário para login
      $scope.login = {type: 'login'};
      // destranca
      $scope.logging = false;
    }

    // função de erro
    error_function = function(response){
      // feedback de erro
      $rootScope.errors = response.data.errors;
      // destranca
      $scope.logging = false;
    }

    switch($scope.login.type){
      case 'signin':    UserResource.create({user: $scope.login}, success_function, error_function); break;
      case 'login':     SessionResource.login({login: $scope.login}, success_function, error_function); break;
      case 'remember':  UserResource.reset_password_token({user: $scope.login}, function(){
                          $rootScope.messages.push('Um e-mail com instruções foi enviado para <b>'+$scope.login.email+'</b>.');
                          $scope.login.type = 'login';
                          $scope.logging = false;
                        }, function(response){
                          $rootScope.errors = response.data.errors;
                          $scope.logging = false;
                        }); break;
    }
  }
}]
