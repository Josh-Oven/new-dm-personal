angular.module('creative').controller('blogItemCtrl', function($scope, mainService, $stateParams){

  $scope.blogId = $stateParams.blogId

  console.log($scope.blogId)

  $scope.getBlogItem =
    mainService.getBlogItem($scope.blogId).then( (response) => {
      $scope.singleBlogItem = response;
      console.log($scope.singleBlogItem)
    })

})
