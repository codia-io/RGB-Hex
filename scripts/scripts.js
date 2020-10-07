// navbar and showcase scroll effect
const checkpoint = 200;
const lg_breakpoint = 980;

function top_effect() {
    $("header").removeClass("scroll-effect-on");
    $("#img-logo").removeClass("img-logo-on");
    $("header>div").addClass("mt-3");
    $("header").removeClass("border-bot");
}

function bottom_effect() {
    $("header").addClass("scroll-effect-on");
    $("#img-logo").addClass("img-logo-on");
    $("header>div").removeClass("mt-3");
    $("header").addClass("border-bot");

}

function menu_animation() {
    width = $(window).width();
    var scroll = $(window).scrollTop();
    if (width >= lg_breakpoint) {
        $("header").addClass("fixed-top");
        if (scroll < checkpoint) {
            // original scroll place
            top_effect();
            opacity = 1 - scroll / checkpoint;
            document.querySelector("#main-text").style.opacity = opacity;
        } else {
            //when scrolled down
            bottom_effect();
            opacity = 0;
            document.querySelector("#main-text").style.opacity = opacity;
        }
    } else {
        bottom_effect();
        document.querySelector("#main-text").style.opacity = 1;
        $("header").removeClass("fixed-top");
    }

}
$(window).scroll(menu_animation);
$(window).resize(menu_animation);
menu_animation();