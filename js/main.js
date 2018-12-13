function slideHome() {
	// var bgSlide1 = $(".extra img:nth-child(1)").attr("src");
	// var	bgSlide2 = $(".extra img:nth-child(2)").attr("src");
	// var	bgSlide3 = $(".extra img:nth-child(3)").attr("src");
	// var	bgSlide4 = $(".extra img:nth-child(4)").attr("src");

	$(".slide_home").vegas({
		overlay: true,
        delay: 5000,
        slidesToKeep: 1,
        transition: 'fade2',
        transitionDuration: 8000,
        animation: 'random',
        animationDuration: 8000,
        // overlay: "./imgs/07.png",
	    slides: [
	        { src: './imgs/bg_home_a.png'},
	        { src: './imgs/bg_home_b.png'},
	        { src: './imgs/bg_home_c.png'},
	        { src: './imgs/bg_home_d.png'},
	    ]
	});
}

function header_hover() {
	// alert("hola");
	var dd = $('.top').scrollTop();
    console.log('el top esta en ' + dd)
	// $(window).scroll(function(){
		// var dd = $('.page').offset().top;


		if (dd == 0){	
			$(".header_fix").show();	
		}else{
			$(".header_fix").hide();
		}
	// });
}