
angular.module('ieorblog', [
  'ngRoute',
  'ieorblog.todo',
    'ieorblog.blog',
    'ui.bootstrap'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      controller: 'IeorBlogController',
      templateUrl: 'blog.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
