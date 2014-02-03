myBlogApp.factory('UserResource', ['$resource', function($resource) {
    return $resource('/api/users',
                          {},
                          { 'me':    {method:'GET', url: '/api/users/me'},
                            'reset_password_token':  {method:'PATCH', url: '/api/users/reset_password_token'},
                            'create':  {method:'POST'},
                            'update':  {method:'PATCH'},
                            'delete':  {method:'DELETE'} }


                          );
}]);

