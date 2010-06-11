// ==UserScript==
// @name        twitdrang
// @namespace   http://fluidapp.com
// @description Makes Twitter narrower.
// @include     *
// @author      Dr. Drang (http://www.leancrew.com/all-this/
// ==/UserScript==

function twitdrang() {
  $("head link:last").after('<link href="http://fonts.googleapis.com/css?family=IM+Fell+English" rel="stylesheet" type="text/css">');
  $("#container").css({'width':'600px'});
  $("#header").css({'width':'600px'});
  $("div#wrapper").css({'width':'400px'});
  $("#side_base").css({'width':'200px'});
  $("ol.statuses li").css({'width':'400px'});
  $("fieldset.common-form").css({'width':'400px'});
  $("#update_notifications").css({'width':'250px'});
  $("ol.statuses span.status-body").css({'width':'300px'});
  $("fieldset.common-form textarea").css({'width':'375px'});
  $(".actions-hover li").css({'width':'20px'});
  // $(".actions-hover .reply").css({'float':'right'});
  // $(".actions-hover .retweet-link").css({'float':'right'});
  $(".actions-hover .retweet-link a").css({'display':'none'});
  $(".actions-hover .reply a").css({'display':'none'});
  $(".actions-hover .retweet-link a").css({'display':'none'});
  $(".actions-hover .del a").css({'display':'none'});
  $("ol#timeline .status-content").css({"font-family": "Lucida Grande", "font-size": "15px", "line-height": "1.3"});
  $("textarea#status").css({"line-height": "1.4", "height": "4.2em"});
  $("li.u-DrSamuelJohnson span.entry-content").css({"font-family": "IM Fell English", "font-size": "120%"});
  $("li.u-DrSamuelJohnson.latest-status span.entry-content").css({"font-family": "IM Fell English", "font-size": "175%"});
}
  
(function () {
    if (window.fluid) {
		  twitdrang();
    }
})();