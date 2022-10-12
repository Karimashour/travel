'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");

    
});
//loading screen
window.onload=function()
{
    $("body").css("overflow","auto");
    $(".overlay .sk-cube-grid").fadeOut(2000,function(){
        $(this).parent().fadeOut(2000,function(){
            $(this).remove();
        });
    });
    var scrollbut=$("#scroll-top");
    $(Window).scroll(function(){
        ($(this).scrollTop()>=700)?scrollbut.fadeIn(1000):scrollbut.fadeOut(1000);
    });
    scrollbut.click(function(){
        $("html,body").animate({
            scrollTop:0,
        },600)
    });
};