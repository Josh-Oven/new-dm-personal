angular.module('creative').service('mainService', function($http){

this.getData = () => {
  return $http.get('/storage.json').then( (response) => {
    return response.data;
  })
}

this.getBlogData = () => {
  return $http.get('/blog.json').then( (response) => {
    return response.data;
  })
}

this.postGresData = () => {
  return $http.get('/getAllBlogs').then( (response) => {
    // console.log(response)
    return response.data;
  })
}

this.getBlogItem = (blogId) => {
  return $http.get('/blog/' + blogId).then( (response) => {
    return response.data;
  })
}

this.postGresData();

this.getData();

this.getBlogData();

})
