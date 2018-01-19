angular.module('creative').directive('boxSlide', function(){

  return {
    restrict: 'A',
    templateUrl: './templates/animation.html',
    link: function(scope, element, attributes){
      $('.boxSlider').on('mouseenter', function(){
        $(element).animate({left: '111%'})
      })

      $('.boxSlider').on('mouseleave', function(){
        $(element).animate({left: '-115%'})
      })
    }
  }

})
