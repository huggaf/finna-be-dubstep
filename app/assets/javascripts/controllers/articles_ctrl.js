var ArticlesCtrl = ["$scope", "$rootScope", "Article", "ArticleResource", function ($scope, $rootScope, Article, ArticleResource){
  $scope.article = new Article({color: $rootScope.colors[0], visible: true});

  if($rootScope.page == undefined)
    $rootScope.page = 0;

  // $scope.template = $rootScope.isMobile ? '/assets/articles/show.mobile.html' : '/assets/articles/show.desktop.html'

  $scope.template = function(article){
    str = '/assets/articles/'
    str += article.edit           ? 'edit' : 'show';
    str += $rootScope.isMobile ? '.mobile' : '.desktop';
    str += '.html'

    return str
  }

  $scope.nextPage = function(){
    if($rootScope.loadingArticles || !$rootScope.loadMore){return}
    $rootScope.loadingArticles = true;

    $rootScope.page += 1;
    ArticleResource.query({page: $rootScope.page},function(data){

      if(data.length > 0){
        // instancia objetos retornados pelo json
        data.forEach(function(attributes){
          if($rootScope.articles.every(function(el){return el.id != attributes.id}))
            $rootScope.articles.push(new Article(attributes));
        })
      }
      else
        $rootScope.loadMore = false;

      $rootScope.loadingArticles = false;
    },function(){
      $rootScope.loadingArticles = false;
    });
  }

  if($rootScope.articles.length == 0)
    $scope.nextPage();

  $scope.save = function(article){
    if(article.saving){return}

    if(article.save()){
      article.color     = article.editElement.color;
      article.title     = article.editElement.title;
      article.thumb_url = article.editElement.thumb_url;
      article.text      = article.editElement.text;

      article.cancelEditForm();
      console.log('saved');
    }
    else{ alert("something is wrong") }

  }

}]
