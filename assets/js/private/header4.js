
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(".header").addClass("sticky animated fadeInDown");
        } else {
            $(".header").removeClass("sticky animated fadeInDown");
        }
    })

    $(".hdrBtmListbtn").click(function(){
        $(".hdrBtmList").slideToggle(300)
    })
    $(".hdrtpBtn").click(function(){
        $(".hdrside").toggleClass("active")
    })
    $(".hdrside__topclose").click(function(){
        $(".hdrside").removeClass("active")
    })
    $("body").click(function(){
        $(".hdrside").removeClass("active")
    })
    $(".hdrside,.hdrtpBtn").click(function(event){
        event.stopPropagation();
    })
    // language toggle start
    if (document.dir == "ltr") {
        $('.english').hide();
        $('.arabic').show();
    } else if (document.dir == "rtl") {
        $('.english').show();
        $('.arabic').hide();
    }
    $('.arabic').click(function() {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl').removeClass('ltr');
        $('.arabic').hide();
        $('.english').show();
        localStorage.removeItem('ltr');
        localStorage.setItem('rtl', 'true');
    });
    $('.english').click(function() {
        $('html').attr('dir', 'ltr');
        $('body').addClass('ltr').removeClass('rtl');
        $('.english').hide();
        $('.arabic').show();
        localStorage.removeItem('rtl');
        localStorage.setItem('ltr', 'true');
    });
    if (localStorage.getItem('ltr') === 'true') {
        $('.arabic').show();
        $('.english').hide();
        $('body').addClass('ltr').removeClass('rtl');
        $('html').attr('dir', 'ltr');
    }
    // language toggle end
    // dark theme toggle start
     $('.lightoff').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.lighton').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
	if (localStorage.getItem('darkClass') === 'true'){
		$('body').addClass('dark');
	}