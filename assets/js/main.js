
(function ($) {
	"use strict";
   $(document).ready(function($){

			 // Sticky Menu
			$('.js--services-section').waypoint(function(direction){
			   if(direction == 'down'){
			         $('nav').addClass('sticky');
			      } else {
			         $('nav').removeClass('sticky');
			   }
			});
			// Sticky Menu

			// Menu Active Color
			$('.main-nav li').on('click', function(){
			   $('.main-nav li').removeClass('active');
			   $(this).addClass('active');
			});
			// End Menu


      // Start Owl-carousel
      $('.case-study-carousel.style-2').owlCarousel({
         items: 3,
         loop: true,
         dots: true,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: true,
				 autoplayTimeout:1000,
    		 autoplayHoverPause:true,
         margin: 30,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 3
            },
        },
      });
      // End Owl-carousel //


      // Start Isotope //
      // data filter
      $('.portfolio-tab button').on('click', function () {
         var filterData = $(this).attr('data-filter');

         $('.portfolio-list').isotope({
            filter: filterData,
         });

      // // Tab Color
      //    $('.portfolio-tab button').removeClass('active');
      //    $(this).addClass('active');
      });

      // initial isotope
      $('.portfolio-list').isotope({
         itemSelector: '.single-portfolio-item',
         percentPosition: true,
            masonry: {
               columnWidth: '.single-portfolio-item',
               horizontalOrder: true,
            },
      });

      //for menu active class
      $('.portfolio-tab button').on('click', function(event) {
         $(this).siblings('.active').removeClass('active');
         $(this).addClass('active');
         event.preventDefault();
      });
      // End Isotope //





   });

})(jQuery);
