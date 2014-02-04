var ArticlesCtrl = ["$scope", "$rootScope", "Article", "ArticleResource", function ($scope, $rootScope, Article, ArticleResource){

  // função que determina qual template irá carregar em /assets/templates/articles/index.html (line: 3)
  $scope.template = function(article){
    str = '/assets/articles/'
    str += article.edit ? 'edit' : 'show';
    str += $rootScope.isMobile ? '.mobile' : '.desktop';
    str += '.html'

    return str
  }

  // query de artigos
  $scope.nextPage = function(){
    // pré-condição para não disparar mais de uma requisição para o server.
    if($rootScope.loadingArticles || !$rootScope.loadMore){return}

    // tranca que será liberada após retorno e processamento da resposta.
    $rootScope.loadingArticles = true;

    // ajax para buscar mais artigos.
    ArticleResource.query({min_id: $rootScope.min_id},function(data){
      if(data.length > 0){

        // caso retorne dados.
        // instancia objetos retornados pelo json.
        data.forEach(function(attributes){
          // verificação para não adicionar artigos duplicados.
          if($rootScope.getArticleIdx(attributes.id) == -1){
            $rootScope.articles.push(new Article(attributes));

            // controla o menor id.
            new_id = parseInt(attributes.id);
            if(!$rootScope.min_id || (new_id < $rootScope.min_id))
              $rootScope.min_id = new_id;
          }
        })
      }

      // atingiu o final da lista, sem mais registros para serem carregados.
      if(data.length < 5)
        $rootScope.loadMore = false;

      // destranca o controller para permitir novas consultas.
      $rootScope.loadingArticles = false;
    },function(){
      // destranca o controller para permitir novas consultas.
      $rootScope.loadingArticles = false;
    });
  }

  // ação para carregar os artigos em hold na listagem de novos artigos.
  $scope.showNewArticles = function(){
    $rootScope.hasNewArticles = false;
    $rootScope.articles.forEach(function(el,idx){
      console.log(el)

      el.new = false;
    })
  }

  // atualização de artigos.
  $scope.save = function(article){
    // pré-condição.
    if(article.saving){return}

    // tranca.
    article.saving = true;

    // limpa as listas de feedback.
    article.errors = []
    article.messages = []

    // ajax para atualizar.
    ArticleResource.update({id: article.id, article: article.editElement}, function(data){
      // feedback de sucesso.
      article.messages.push("Artigo atualizado com sucesso");
      // fecha o form de edição, sem perguntar.
      article.closeEditForm(true);
      // destranca.
      article.saving = false;
    }, function(response){
      // feedback de erro.
      article.errors = response.data.errors;
      // destranca.
      article.saving = false;
    })
  }

  $scope.destroy =  function(article){
    // pré-condição.
    if(article.destroying){return}

    // pergunta de confirmação.
    if(confirm('Deseja remover este artigo?')){
      // tranca.
      article.destroying = true;

      // limpa as listas de feedback.
      article.errors = [];
      article.messages = [];

      // ajax para deletar.
      ArticleResource.delete({id: article.id}, function(data){
        // remove da lista o artigo.
        $rootScope.removeArticle(article.id);
      }, function(response){
        // feedback de erro.
        article.errors = response.data.errors;
        // destranca.
        article.destroying = false;
      });
    }
  }

  // load inicial para puxar os primeiros artigos.
  if($rootScope.articles.length == 0)
    $scope.nextPage();

}]
