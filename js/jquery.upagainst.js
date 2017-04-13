/*
**
(function($){
  $.fn.jQueryPluginName=function(options){
    //code here...
  };
}(jQuery));
**
*/

(function($){
  $.fn.upAgainst=function(options){ //与浏览器上边界的一段距离
    var defaultOptions={dist:0};
    var optionsEtd1=$.extend({},defaultOptions,options);
    var offsetT=this.offset().top;  //留意此行的this
    $('html,body').stop().animate({scrollTop:(offsetT-optionsEtd1.dist)});
  };
}(jQuery));
