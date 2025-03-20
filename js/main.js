(function($){
    "use strict";
        
        // CounterUp sec about us page
		$('#count-box').animationCounter({
			start: 0,
			end:30,
			step: 1,
			delay:200,
		  });
		  $('#count-box2').animationCounter({
			start: 0,
			end:300,
			step: 15,
			delay:200,
            txt: '+'
		  });
		  $('#count-box3').animationCounter({
			start: 0,
			end: 8,
			step: 1,
			delay: 200
		  });


          $('.client_slider').slick({
            dots: false,
            arrows:false,
            infinite: true,
            speed: 600,
            autoplay:true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            }
            ]
        });
        })(jQuery);