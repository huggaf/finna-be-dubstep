var LoginCtrl = ["$scope", "$rootScope", "UserResource", "SessionResource", function ($scope, $rootScope, UserResource, SessionResource){
  $scope.btnTexts = {signin: "Cadastrar",
                     login: "Entrar",
                     remember: "Recuperar senha"};

  $scope.login = {type: 'login'};
  $scope.errors = [];
  $scope.messages = [];

  $scope.logout = function(){
    if($rootScope.posts.every(function(e){return e.unselect()})){
      SessionResource.logout(function(){
        $rootScope.user = null;
      })
    }
  }

  $scope.sendForm = function(){
    if($scope.logging){return}

    $scope.logging = true
    $scope.errors = [];
    $scope.messages = [];

    success_function = function(data){
      $rootScope.user = data;
      $rootScope.showLogin = false;
      $scope.login = {type: 'login'};
      $scope.logging = false;
    }

    error_function = function(response){
      $scope.errors = response.data.errors;
      $scope.logging = false;
    }

    switch($scope.login.type){
      case 'signin':    UserResource.create({user: $scope.login}, success_function, error_function); break;
      case 'login':     SessionResource.login({login: $scope.login}, success_function, error_function); break;
      case 'remember':  UserResource.reset_password_token({user: $scope.login}, function(){
                          $scope.messages.push('Um e-mail com instruções foi enviado para <b>'+$scope.login.email+'</b>.');
                          $scope.login.type = 'login';
                          $scope.logging = false;
                        }, function(response){
                          $scope.errors = response.data.errors;
                          $scope.logging = false;
                        }); break;
    }
  }
}]
