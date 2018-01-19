angular.module('creative', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../views/home.html'
    })

    .state('case-studies', {
      url: '/case-studies',
      templateUrl: '../views/caseStudies.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html'
    })

    .state('blog', {
      url: '/blog',
      templateUrl: '../views/blog.html'
    })

    .state('read', {
      url: '/blog/:blogId',
      templateUrl: '../views/blogItem.html',
      controller: 'blogItemCtrl'
    })

    .state('editor', {
      url: '/editor',
      templateUrl: '../views/form.html'
    })

    $urlRouterProvider
    .otherwise('/home')
})
