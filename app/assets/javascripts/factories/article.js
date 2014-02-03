myBlogApp.factory('ArticleResource', ['$resource', function($resource) {
    return $resource('/api/articles/:id',
                          {id:'@id'},
                          { 'get':    {method:'GET'},
                            'save':   {method:'POST'},
                            'query':  {method:'GET', isArray:true},
                            'remove': {method:'DELETE'},
                            'delete': {method:'DELETE'} }
                          );
}]);


myBlogApp.factory('Article', ["$rootScope", function($rootScope){

  return function(attributes){
    this.author      = attributes.author;
    this.title       = attributes.title;
    this.text        = attributes.text;
    this.visible     = attributes.visible;
    this.color       = attributes.color;
    this.created_at  = attributes.created_at;
    this.editElement = {};

    this.select = function(){
      if($rootScope.articles.every(function(e){return e.unselect()})){
        this.selected = true;

        if($rootScope.isMobile)
          this.mobile_text = this.text;
      }
    }

    this.unselect = function(){
      if(!this.edit || this.cancelEditForm()){
        this.selected = false;

        if($rootScope.isMobile)
          this.mobile_text = undefined;

        return true;
      }
      return false;
    }

    this.toggleSelect = function(){
      if(this.selected)
        this.unselect();
      else
        this.select();
    }

    this.editForm =  function(){
      this.select();
      this.editElement = {title:     this.title,
                          text:      this.text,
                          thumb_url: this.thumb_url,
                          color:     this.color};
      this.edit = true;
    }

    this.canCancelEditForm = function(){
      return (!this.hasChanges() || confirm('As alterações serão perdidas, deseja continuar?'));
    }

    this.cancelEditForm =  function(skipConfirm){
      if(skipConfirm || this.canCancelEditForm()){
        this.edit = false;
        this.editElement = {};
        return true
      }
      return false
    }

    this.hasChanges = function(){
      return !( this.color     === this.editElement.color &&
                this.title     === this.editElement.title &&
                this.thumb_url === this.editElement.thumb_url &&
                this.text      === this.editElement.text)

    }

    this.save =  function(){
      this.saving = true;
      console.log('saving');
      this.saving = false;
      return true;
    }

    this.destroy =  function(){
      if(confirm('Deseja remover este article?')){
        console.log('destroing');
        this.cancelEditForm(true);

      }
    }

    this.getTitleStyle = function(el){
      if(el == undefined){el = this;}

      styles = {};
      styles['background-color'] = el.color;

      if(el.thumb_url != undefined)
        styles['background-image'] = 'url('+ el.thumb_url +')';

      return styles
    }

    this.canEdit = function(){ return $rootScope.user && this.author && (this.author.id == $rootScope.user.id)}
    this.canDestroy = function(){ return $rootScope.user && this.author && (this.author.id == $rootScope.user.id)}
    this.canView = function(){ return !!this.text}
  }

}])

Article = {



}
