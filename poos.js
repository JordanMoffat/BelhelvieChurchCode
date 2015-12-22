/**
 * 
 *
 * Makes poo fall from your browser. Sooo mature.
 *
 * 
 * 
 *
 * @params minSize - min size of poo, 10 by default
 * @params maxSize - max size of poo, 20 by default
 * @params newOn - frequency in ms of appearing of new poo, 500 by default
 * @params flakeColor - color of poo
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
!function(n){n.fn.snow=function(o){var e=n('<div id="flake" />').css({position:"absolute",top:"-50px"}).html("&#128169;"),t=n(document).height(),a=n(document).width(),i={minSize:10,maxSize:20,newOn:500,flakeColor:"#8B4513"},o=n.extend({},i,o);setInterval(function(){var i=Math.random()*a-100,m=.5+Math.random(),r=o.minSize+Math.random()*o.maxSize,d=t-40,l=i-100+200*Math.random(),c=10*t+5e3*Math.random();e.clone().appendTo("body").css({left:i,opacity:m,"font-size":r,color:o.flakeColor}).animate({top:d,left:l,opacity:.2},c,"linear",function(){n(this).remove()})},o.newOn)}}(jQuery);
