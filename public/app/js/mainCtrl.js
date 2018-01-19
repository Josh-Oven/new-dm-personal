angular.module('creative').controller('mainCtrl', function($scope, mainService, $stateParams){

$scope.test = 'working'

$scope.getData = () => {
  mainService.getData().then( (response) => {
    // console.log(response)
    $scope.caseData = response;
  })
}

$scope.getBlogData = () => {
  mainService.getBlogData().then( (response) => {
    // console.log(response)
    $scope.blogData = response;
  })
}

$scope.newBlogData;

$scope.getPostGresData = () => {
  mainService.postGresData().then( (response) => {
    // console.log('controller: ', response)
    $scope.newBlogData = response;
    console.log($scope.newBlogData)
  })
}

$scope.getData();

$scope.getBlogData();

$scope.getPostGresData();



})
