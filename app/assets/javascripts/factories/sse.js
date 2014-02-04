// Server-Side-Event
myBlogApp.factory('$sse', [function() {

    return function(scope){

      var $scope = scope;
      $scope.$on('$destroy', function() { this.destroy(); });

      this.callbacks = [];

      this.stream =  function(path){
        this.source = new EventSource(path);
        return this;
      }

      this.on =  function(event, callback){
        c = function(response){
              var data = angular.fromJson(response.data);
              $scope.$apply(function () {
                callback(data);
              });
            }

        this.callbacks.push({event: event, callback: c});
        this.source.addEventListener(event, c);
        return this;
      }

      this.destroy =  function(){
        for(idx in this.callbacks){
          callback = this.callbacks[idx];
          this.source.removeListener(callback.event,callback.callback);
        }

        this.source.close();
        this = undefined;
        return this;
      }

    }

}])
