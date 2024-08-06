$(".faqQues").click(function(){
    $(this).toggleClass("active")
    $(this).nextAll(".faqaccorBody").eq(0).slideToggle(200)
})