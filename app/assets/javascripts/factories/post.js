myBlogApp.factory('PostResource', ['$resource', function($resource) {
    return $resource('/api/posts/:id',
                          {id:'@id'},
                          { 'get':    {method:'GET'},
                            'save':   {method:'POST'},
                            'query':  {method:'GET', isArray:true},
                            'remove': {method:'DELETE'},
                            'delete': {method:'DELETE'} }
                          );
}]);


myBlogApp.factory('Post', ["$rootScope", function($rootScope){

  return function(attributes){
    this.author      = attributes.author;
    this.title       = attributes.title;
    this.text        = attributes.text;
    this.visible     = attributes.visible;
    this.color       = attributes.color;
    this.created_at  = attributes.created_at;
    this.editElement = {};

    this.select = function(){
      if($rootScope.posts.every(function(e){return e.unselect()})){
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
      this.editElement = {title:    this.title,
                          text:     this.text,
                          visible:  this.visible,
                          color:    this.color};
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
      return !( this.color    === this.editElement.color &&
                this.visible  === this.editElement.visible &&
                this.title    === this.editElement.title &&
                this.text     === this.editElement.text)

    }

    this.save =  function(){
      console.log('saving');

      this.color    = this.editElement.color;
      this.visible  = this.editElement.visible;
      this.title    = this.editElement.title;
      this.text     = this.editElement.text;

      this.cancelEditForm();
    }

    this.destroy =  function(){
      if(confirm('Deseja remover este post?')){
        console.log('destroing');
        this.cancelEditForm(true);

      }
    }
  }

}])

Post = {



}
