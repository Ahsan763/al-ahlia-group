$( ".commBox" ).slice( 0, 2 ).addClass( "active" );
$(".commentsContBtn").click(function(){
    $(this).toggleClass("active")
    $( ".commBox" ).slice( 2, 1000 ).toggleClass( "active" );
})