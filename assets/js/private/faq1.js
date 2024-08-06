$(".accordian-box__header").click(function(){
    $(".accordian-box__header.active").removeClass("active")
    $(".accordian-box__body").slideUp(300)
    $(this).addClass("active");
    $(this).nextAll(".accordian-box__body").eq(0).slideToggle(300)
})