"use strict";var App={events:{},init:function(){App.Util.init(),$(".alert-message").on("click",function(){$(this).hide()}),"/"!==location.pathname&&$('nav a[href^="/'+location.pathname.split("/")[1]+'"]').addClass("active")},isTablet:function(){return window.innerWidth<900},isMobile:function(){return window.innerWidth<600},registerDocumentEventHandler:function(t,n){"function"==typeof n&&"string"==typeof t&&(void 0===this.events[t]&&this.registerNewDocumentEvent(t),this.events[t].queue.push(n))},registerNewDocumentEvent:function(t){var n=this;n.events[t]={},n.events[t].queue=[],$(document).on(t,function(e){for(var o=n.events[t].queue,i=0;i<o.length;i++)"function"==typeof o[i]&&o[i](e)})}};App.Util={init:function(){for(var t,n,e,o=$("[data-controller]"),i=0;i<o.length;i++)e=o[i],t=e.getAttribute("data-controller"),n=e.getAttribute("data-action"),this.exec(t,n)},exec:function(t,n){n=n?n:"init",""!==t&&App[t].controller&&"function"==typeof App[t].controller[n]&&App[t].controller[n]()}},App.Helpers={showAlert:function(t,n){var e=".alert-message .alert-"+t;n&&$(e).innerHTML(n),$(".alert-message").css("display","block"),$(e).css("display","block"),setTimeout(function(){$(".alert-message").css("display","none"),$(e).css("display","none")},1e4)}},App.Nav={},App.Nav.controller={init:function(){},initMobileNav:function(){var t=$(".mob-nav-buttons-container ul").height();$(".mob-nav-toggle-button").on("click",function(){$(this).toggleClass("active");var n=$(this).hasClass("active");$(".mob-nav-buttons-container").height(n?t:0)})}},App.Home={},App.Home.controller={components:{},init:function(){},initCarousel:function(){var t=this;t.components.carousel&&t.components.carousel.destroySlider();var n=4;window.innerWidth<1300&&(n=3),window.innerWidth<900&&(n=2),window.innerWidth<500||(t.components.carousel=$(".js-home-carousel-list").bxSlider({slideWidth:"1000",minSlides:n,maxSlides:n,pager:!1,infiniteLoop:!0,touchEnabled:!0,moveSlides:1,auto:!0,pause:5e3}),$(".control-right").on("click",function(){t.components.carousel.goToNextSlide()}),$(".control-left").on("click",function(){t.components.carousel.goToPrevSlide()}),$(".control-right").on("mousemove",function(){$(this).css("width","50px")}),$(".control-left").on("mousemove",function(){$(this).css("width","50px")}),$(".control-right").mouseleave(function(){$(this).css("width","30px")}),$(".control-left").mouseleave(function(){$(this).css("width","30px")}))},initSwitchHero:function(){var t=["../images/home-hero@1x.png","../heros/home1.jpg","../heros/home2.jpg","../heros/home3.jpg","../heros/home4.jpg","../heros/home5.jpg"],n=0;$(".home-main").on("click",function(){n++,n===t.length&&(n=0),$(".home-main").css("background-image","url("+t[n]+")")})}},App.Service={},App.Service.controller={init:function(){},initScrollDownButton:function(){var t;t=App.isTablet()?".service-regular-programs":".timeline-section",$(".scroll-down-button").on("click",function(){$("html, body").animate({scrollTop:$(t).offset().top-70},500)}),this.disableLinks()},disableLinks:function(){App.isMobile()&&$("a.disabled-mobile").removeAttr("href")},initSwitchHero:function(){var t=["../images/service-introduction@2x.png","../heros/service.jpg","../heros/service1.jpg","../heros/service2.jpg","../heros/service3.jpg","../heros/service4.jpg","../heros/service5.jpg"],n=0;$(".service-main").on("click",function(){console.log(n),n++,n===t.length&&(n=0),$(this).css("background-image","url("+t[n]+")")}),this.initSwitchTimeline()},initSwitchTimeline:function(){},initRunningMan:function(){function t(t){s=window.innerHeight-70-parseFloat($(".running-man").css("height")),n=$(document).scrollTop()+70,e=$(".running-man").offset().top,o=e-n,i=-o/s+1,0>i?$(".running-man").attr("src","../images/runningdude1.png"):i>1&&$(".running-man").attr("src","../images/runningdude12.png"),t.preventDefault(),r=Math.ceil(i*a),r>a||1>r||(c="../images/runningdude"+r+".png",$(".running-man").attr("src",c))}if(!App.isMobile()){console.log("hh"),$(".running-man").attr("src","../images/runningdude1.png"),$(document).on("scroll",function(n){t(n)}),$(document).on("touchmove",function(n){t(n)});var n,e,o,i,r,c,s=window.innerHeight-70,a=12}}},App.Contact={},App.Contact.controller={init:function(){},initScrollDownButton:function(){$(".scroll-down-button").on("click",function(){$("html, body").animate({scrollTop:$(".contact-offices").offset().top-70},500)})},initForm:function(){$(".contact-form form").on("submit",function(t){t.preventDefault();var n={};$.each($(".contact-form form").serializeArray(),function(t,e){n[e.name]=e.value}),$.ajax({type:"POST",url:"/contact",data:n,success:function(t,n){$(".contact-form form")[0].reset(),App.Helpers.showAlert("success")},error:function(t){console.log(t)}})})}},App.Career={},App.Career.controller={init:function(){},initScrollDownButton:function(){$(".scroll-down-button").on("click",function(){$("html, body").animate({scrollTop:$(".text-content").offset().top-70},500)})},initSwitchHero:function(){var t=["../images/career-introduction@2x.png","../heros/career.jpg","../heros/career1.jpg","../heros/career2.jpg","../heros/career3.jpg","../heros/career4.jpg"],n=0;$(".career-main").on("click",function(){n++,n===t.length&&(n=0),$(this).css("background-image","url("+t[n]+")")})}},App.About={},App.About.controller={init:function(){},initScrollDownButton:function(){$(".scroll-down-button").on("click",function(t){$("html, body").animate({scrollTop:$(".about-history").offset().top-70},1e3)})},initSwitchHero:function(){var t=["../images/about-introduction@2x.png","../heros/about.jpg","../heros/about2.jpg","../heros/about3.jpg","../heros/about4.jpg","../heros/about5.jpg","../heros/about6.jpg"],n=0;$(".about-main").on("click",function(){n++,n===t.length&&(n=0),$(this).css("background-image","url("+t[n]+")")})},initSwitchIllustrations:function(){var t=["../images/about-enrichment@2x.png","../images/enrichment_program@1x.png"],n=0;$(".enrichment .diagram").on("click",function(){n++,n===t.length&&(n=0),$(this).attr("src",t[n])})}},App.Keystory={},App.Keystory.controller={init:function(){},initScrollDownButton:function(){console.log("init"),$(".scroll-down-button").on("click",function(){$("html, body").animate({scrollTop:$(".keystory-testimonials").offset().top-70},500)}),this.initTextSlider2()},initSwitchHero:function(){var t=["../heros/keystory.jpg","../heros/keystory1.jpg","../heros/keystory2.jpg","../heros/keystory3.jpg"],n=0;$(".keystory-main").on("click",function(){console.log(n),n++,n===t.length&&(n=0),$(this).css("background-image","url("+t[n]+")")})},initTextSlider:function(){function t(){setInterval(function(){o++,o===e.length&&(o=0),$(n).text(e[o]),$(n).addClass("fadeInRight"),$(n).removeClass("fadeOutLeft"),setTimeout(function(){$(n).addClass("fadeOutLeft"),$(n).removeClass("fadeInRight")},5e3)},5500)}if(!App.isTablet()){var n=".keystory-main-text h3",e=["More than 3,000 students have entrusted Keystone to help them through their academic journeys en route to their top choice universities","75% of CAPstone students have been accepted to their early decision / action schools","90% of CAPstone students have been accepted to at least one of their top 3 universities of choice","90% of Keystone students have reached or exceeded their target SAT and SAT / AP Subject Test scores","100% of students love Keystone!"],o=0;t(),$(n).addClass("animated"),$(n).text(e[o]),setTimeout(function(){$(n).addClass("fadeOutLeft")},5e3)}},initTextSlider2:function(){function t(){o++,o===e.length&&(o=0),$(n+" h1").text(e[o]),$(n).addClass("fadeInRight"),$(n).removeClass("fadeOutLeft"),setTimeout(function(){$(n).addClass("fadeOutLeft"),$(n).removeClass("fadeInRight")},5e3)}var n=".quote.tag-line .tag-container",e=["Over 3,000 satisfied students","75% accepted to 1st choice university","90% accepted to top 3 choice universities","90% reached target test score","100% of students love Keystone!"],o=-1;$(n).addClass("animated"),$(n+" h1").text(e[o]),t(),setInterval(function(){t()},5500)}},App.Grade5={},App.Grade5.controller={init:function(){},initTabs:function(){var t=location.hash;if(t.length>0){setTimeout(function(){window.scrollTo(0,0)},1);var n=$(t);0!=n.size()&&$("a[href=#"+n.attr("id")+"]").click()}$('a[role="tab"]').click(function(){var t=$(this).attr("href").substr(1);history&&history.replaceState?history.replaceState(void 0,void 0,"#"+t):location.replace("#"+t)})}},App.Snapshot={},App.Snapshot.controller={init:function(){},initSwitchHero:function(){}},App.Bootcamp={},App.Bootcamp.controller={init:function(){},initSwitchHero:function(){var t=["../heros/bootcamp.jpg","../heros/bootcamp1.jpg","../heros/bootcamp2.jpg","../heros/bootcamp3.jpg","../heros/bootcamp4.jpg"],n=0;$(".bootcamp-main").on("click",function(){n++,n===t.length&&(n=0),$(this).css("background-image","url("+t[n]+")")})},initSwitchIllustrations:function(){var t=["../images/bootcamp-enrichment@2x.png","../images/enrichment_program@1x.png"],n=0;$(".enrichment .diagram").on("click",function(){n++,n===t.length&&(n=0),$(this).attr("src",t[n])})}},App.Summer={},App.Summer.controller={init:function(){},initSwitchHero:function(){var t=["../heros/summer_course.jpg","../heros/summer_course1.jpg","../heros/summer_course2.jpg","../heros/summer_course3.jpg"],n=0;$(".summer-main").on("click",function(){n++,n===t.length&&(n=0),$(this).css("background-image","url("+t[n]+")")})},initScrollDownButton:function(){$(".scroll-down-button").on("click",function(){$("html, body").animate({scrollTop:$(".text-content").offset().top-70},500)})}},$(function(){App.init()});