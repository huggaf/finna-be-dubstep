// factory do resource, responsável pelas requisições http com o server
myBlogApp.factory('ArticleResource', ['$resource', function($resource) {
    return $resource('/api/articles/:id',
                          {id:'@id'},
                          { 'query':  {method:'GET', isArray:true},
                            'create': {method:'POST'},
                            'update': {method:'PATCH'},
                            'delete': {method:'DELETE'} }
                          );
}]);

// factory do Artigo
myBlogApp.factory('Article', ["$rootScope", "$location", "$anchorScroll", "$timeout", 'ArticleResource', function($rootScope, $location, $anchorScroll, $timeout, ArticleResource){

  return function(attributes){
    // load dos attributos.
    this.id          = attributes.id;
    this.author      = attributes.author;
    this.title       = attributes.title;
    this.text        = attributes.text;
    this.thumb_url   = attributes.thumb_url;
    this.color       = attributes.color;
    this.created_at  = attributes.created_at;

    // pré-config do objeto para edição.
    this.editElement = {};

    // mostra o contéudo, somente um artigo aberto por vez.
    this.select = function(){
      // pergunta para todos os artigos se podem fechar.
      if($rootScope.articles.every(function(e){return e.unselect()})){

        var article_id = this.id;
        // mostra o conteúdo.
        this.selected = true;

        // carrega o texto, somente quando esta selecionado em dispositivos mobile, para otimizar memória.
        if($rootScope.isMobile)
          this.mobile_text = this.text;

        $timeout(function(){
          $location.hash("article-"+article_id);
          $anchorScroll();
        },450,true);
      }
    }

    // esconde o contéudo. Caso possua formulário de edição aberto e se necessário, pede confirmação.
    this.unselect = function(){
      if(!this.edit || this.closeEditForm()){
        // controla a classe css que mostra ou esconde o conteúdo.
        this.selected = false;

        // limpa as listas de feedback.
        this.errors = [];
        this.messages = [];

        // remove o texto para otimizar memória de dispositivos mobile.
        if($rootScope.isMobile)
          this.mobile_text = undefined;

        return true;
      }
      return false;
    }

    // mostra/esconde o conteúdo dependendo da situação do artigo.
    this.toggleSelect = function(){
      if(this.selected)
        this.unselect();
      else
        this.select();
    }

    // abre o formulário de edição.
    this.editForm =  function(){
      // limpa as listas de feedback.
      this.errors = [];
      this.messages = [];

      // mostra o conteúdo.
      this.select();

      // prepara o objeto editElement com os dados originais.
      this.editElement = {title:     this.title,
                          text:      this.text,
                          thumb_url: this.thumb_url,
                          color:     this.color};

      // troca o template para o formulário de edit.
      this.edit = true;
    }

    // checa todos os itens editáveis para verificar se ocorreram alterações.
    this.hasChanges = function(){
      return !( this.color     === this.editElement.color &&
                this.title     === this.editElement.title &&
                this.thumb_url === this.editElement.thumb_url &&
                this.text      === this.editElement.text)
    }

    // verificação para ver se o usuário confirma o fechamento do formulário, caso não tenho nenhuma modificação não pergunta.
    this.canCloseEditForm = function(){
      return (!this.hasChanges() || confirm('As alterações serão perdidas, deseja continuar?'));
    }

    // fecha o formulário de edição, permite forçar o fechamento sem perguntar confirmação.
    this.closeEditForm =  function(skipConfirm){
      // skipa confirmação, caso seja forçado ou verifica se pode fechar o formulário
      if(skipConfirm || this.canCloseEditForm()){
        // troca o template para a visualização
        this.edit = false;
        // limpa o objeto de edição
        this.editElement = {};
        return true
      }
      return false
    }

    // gera a hash de estilos utilizada pelo ng-style nas div.title
    this.getTitleStyle = function(el){
      if(el == undefined){el = this;}

      styles = {};
      styles['background-color'] = el.color;

      if(el.thumb_url != undefined)
        styles['background-image'] = 'url('+ el.thumb_url +')';

      return styles
    }

    this.extractInfo = function(data){
      this.title       = data.title;
      this.text        = data.text;
      this.thumb_url   = data.thumb_url;
      this.color       = data.color;

      if($rootScope.isMobile)
        this.mobile_text = data.text;
    }

    // permissões a nivel de front-end para exibir ou não os botões de ação
    this.canEdit = function(){ return $rootScope.user && this.author && (this.author.id == $rootScope.user.id)}
    this.canDestroy = function(){ return $rootScope.user && this.author && (this.author.id == $rootScope.user.id)}
    this.canView = function(){ return !!this.text}
  }

}])
