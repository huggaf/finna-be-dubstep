myBlogApp.filter('markdown', ['$sce', function($sce) {
  return function (txt) {
    var converter = new Showdown.converter();
    return $sce.trustAsHtml(converter.makeHtml(txt));
  }
}]);
