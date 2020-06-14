function go_to_div(id) {
    $(".tab-content .active").removeClass("active")
    $(id).addClass("active")
    $(id).addClass("in")
    $(id).show()
}

$(document).ready(function () {
    $(".nav-miao").click(function () {
        go_to_div($(this).attr("data-target"))
        var miao = $(this).attr("data-miao")
        if (miao != null && typeof (miao) != 'undefined') {
            $("html, body").animate({
                scrollTop: $(miao).offset().top
            }, {duration: 500, easing: "swing"});
        }
        return false;
    });
})