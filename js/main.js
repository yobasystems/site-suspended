$(document).ready(function(){function a(a){"success"===a.result?(b("loading","icon"),c("Thank You For Subscribing To Our Email List"),$("#sub_form #mc-email").val("")):(b("loading","icon"),c("Please Enter a Correct Email"))}function b(a,b){$("#mc_submit i").removeClass(a),$("#mc_submit i").addClass(b)}function c(a){$(".tooltip").length&&$(".tooltip").remove(),$(".subscription_form").append('<span class="tooltip"></span>');var b=$(".tooltip");b.append(a);var c=b.outerWidth(),e=$(".subscription_form").width(),f=$(".subscription_form").height()+10,c=(e-c)/2;$(".tooltip").css({left:c+"px",bottom:f+"px"}).stop().animate({opacity:1},300),setTimeout(function(){d()},2e3)}function d(){var a=$(".tooltip");a.animate({opacity:0},300,function(){a.remove()})}$box=$(".content"),$ht=$box.height()+175,$win_ht=$(window).height(),$win_ht>$ht?$box.css({left:"50%",top:"50%","margin-left":-$box.width()/2+"px","margin-top":-$ht/2+"px"}):$box.css({left:"50%","margin-left":-$box.width()/2+"px","margin-top":"60px","margin-bottom":"60px"}),$.backstretch(["img/bg_img.jpg","img/bg_img2.jpg","img/bg_img3.jpg"],{fade:750,duration:2500}),$(".counter").TimeCircles({direction:"Clockwise",animation:"Tricks",bg_width:0,fg_width:.01,circle_bg_color:"rgba(255, 255, 255, 0)",circle_bg_fill_color:"rgba(255, 255, 255, 0.1)",time:{Days:{text:"Days",color:"#ffffff",show:!0},Hours:{text:"Hrs",color:"#ffffff",show:!0},Minutes:{text:"Mins",color:"#ffffff",show:!0},Seconds:{text:"Secs",color:"#ffffff",show:!0}}}),$("#sub_form").submit(function(){b("icon","loading")}),$("#sub_form").length&&$("#sub_form").ajaxChimp({callback:a})});
