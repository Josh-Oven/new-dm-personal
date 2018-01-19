'use strict';

angular.module('creative', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '../views/home.html'
  }).state('case-studies', {
    url: '/case-studies',
    templateUrl: '../views/caseStudies.html'
  }).state('about', {
    url: '/about',
    templateUrl: '../views/about.html'
  }).state('blog', {
    url: '/blog',
    templateUrl: '../views/blog.html'
  }).state('read', {
    url: '/blog/:blogId',
    templateUrl: '../views/blogItem.html',
    controller: 'blogItemCtrl'
  }).state('editor', {
    url: '/editor',
    templateUrl: '../views/form.html'
  });

  $urlRouterProvider.otherwise('/home');
});
'use strict';

angular.module('creative').directive('boxSlide', function () {

  return {
    restrict: 'A',
    templateUrl: './templates/animation.html',
    link: function link(scope, element, attributes) {
      $('.boxSlider').on('mouseenter', function () {
        $(element).animate({ left: '111%' });
      });

      $('.boxSlider').on('mouseleave', function () {
        $(element).animate({ left: '-115%' });
      });
    }
  };
});
'use strict';

angular.module('creative').controller('blogItemCtrl', function ($scope, mainService, $stateParams) {

  $scope.blogId = $stateParams.blogId;

  console.log($scope.blogId);

  $scope.getBlogItem = mainService.getBlogItem($scope.blogId).then(function (response) {
    $scope.singleBlogItem = response;
    console.log($scope.singleBlogItem);
  });
});
"use strict";
'use strict';

angular.module('creative').controller('mainCtrl', function ($scope, mainService, $stateParams) {

  $scope.test = 'working';

  $scope.getData = function () {
    mainService.getData().then(function (response) {
      // console.log(response)
      $scope.caseData = response;
    });
  };

  $scope.getBlogData = function () {
    mainService.getBlogData().then(function (response) {
      // console.log(response)
      $scope.blogData = response;
    });
  };

  $scope.newBlogData;

  $scope.getPostGresData = function () {
    mainService.postGresData().then(function (response) {
      // console.log('controller: ', response)
      $scope.newBlogData = response;
      console.log($scope.newBlogData);
    });
  };

  $scope.getData();

  $scope.getBlogData();

  $scope.getPostGresData();
});
'use strict';

angular.module('creative').service('mainService', function ($http) {

  this.getData = function () {
    return $http.get('/storage.json').then(function (response) {
      return response.data;
    });
  };

  this.getBlogData = function () {
    return $http.get('/blog.json').then(function (response) {
      return response.data;
    });
  };

  this.postGresData = function () {
    return $http.get('/getAllBlogs').then(function (response) {
      // console.log(response)
      return response.data;
    });
  };

  this.getBlogItem = function (blogId) {
    return $http.get('/blog/' + blogId).then(function (response) {
      return response.data;
    });
  };

  this.postGresData();

  this.getData();

  this.getBlogData();
});
// var quill = new Quill('.editor', {
//   modules: {
//     toolbar: '#toolbar'
//   },
//   theme: 'snow'
// });
"use strict";
//# sourceMappingURL=bundle.js.map
