// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require 'lib/angular.min.js'
//= require 'lib/angular-route.min.js'
//= require 'lib/angular-resource.min.js'
//= require 'lib/angular-sanitize.min.js'
//= require_self
//= require_tree .

var myBlogApp = angular.module('myBlogApp', ['ngSanitize', 'ngResource', 'ngRoute'],
                                  ['$routeProvider', '$locationProvider', '$httpProvider', '$anchorScrollProvider', function($routeProvider,$locationProvider,$httpProvider,$anchorScrollProvider){

  // $anchorScrollProvider.disableAutoScrolling()

  // cache and history with pre-loaded sources
  $locationProvider.html5Mode(true);

  // angular routes
  $routeProvider.when("/articles", {templateUrl: "/assets/articles/index.html", controller: ArticlesCtrl})
      .when("/new-article", {templateUrl: "/assets/articles/new.html"})
      .when("/recuperar/:reset_token", {templateUrl: "/assets/users/reset_password.html"})
      .when("/recuperar/:reset_token/cancelar", {templateUrl: "/assets/users/cancel_token.html"})

      .otherwise({redirectTo : '/articles' });

  // json header
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
}]);

myBlogApp.run(['$rootScope', '$sse', 'UserResource', 'Article', function($rootScope, $sse, UserResource, Article){
  $rootScope.colors = ["#d9534f", "#f0ad4e", "#5cb85c", "#428bca", "#5bc0de" ];

  $rootScope.loadMore = true;   //controle para infinite scroll, não buscar mais artigos quando chegar no final da lista
  $rootScope.showLogin = false;

  $rootScope.articles = [];          // listagem dos artigos
  $rootScope.hasNewArticles = false; // flag para exbir/esconder o botão de carregar novos artigos

  $rootScope.errors = [];       //lista de errors para feedback
  $rootScope.messages = [];     //lista de mensagens para feedback


  $rootScope.user = null;
  UserResource.me(function(data){ $rootScope.user = data }); //pesquisa o usuário logado

  // identificação se o browser é mobile, para melhorar questões de performando como loads diferenciados para desktop e mobile
  $rootScope.isMobile = (function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    })();

  if($rootScope.isMobile)
    $rootScope.showSearch = true;

  // toggle do form de login/signin/lembrar a senha
  $rootScope.openLogin = function(){
    $rootScope.showLogin = !$rootScope.showLogin;
  }

  $rootScope.openSearch = function(){
    if($rootScope.showSearch)
      $rootScope.search = "";

    $rootScope.showSearch = !$rootScope.showSearch;
  }

  // procura o id e remove da lista
  $rootScope.removeArticle = function(id){
    if((idx = $rootScope.getArticleIdx(id)) > -1)
      $rootScope.articles.splice(idx,1);
  }

  // adiciona os attributos na listagem de novos artigos
  $rootScope.addArticle = function(data){
    if((idx = $rootScope.getArticleIdx(data.id)) == -1){
      article = new Article(data);

      // caso seja o autor não exibir na lista de novos artigos
      if(!$rootScope.user || ($rootScope.user && $rootScope.user.id != data.author_id)){
        article.new = true;
        $rootScope.hasNewArticles = true;
      }

      $rootScope.articles.unshift(article);
    }
    else{
      $rootScope.articles[idx].extractInfo(data);
    }
  }

  // helper para buscar o index do artigo pelo id, retorna -1 se não encontrou
  $rootScope.getArticleIdx = function(id){
    for(idx in $rootScope.articles)
      if($rootScope.articles[idx].id == id){return parseInt(idx);}

    return -1;
  }

  // server side event
  new $sse($rootScope).stream('/streaming/articles')
      .on('article.update', function(data){  $rootScope.addArticle(data) })
      .on('article.add', function(data){  $rootScope.addArticle(data) })
      .on('article.destroy', function(data){ $rootScope.removeArticle(data.id) });

}])
