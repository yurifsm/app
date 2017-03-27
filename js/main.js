(function ($){
	var All = {
		'common':{
			init: function(){

				$(document).ready(function(){
					$('.play-vid').addClass('.hvr-underline-from-center:hover:before,');
				});

				window.scrollTo(0, 0);

				$(".navbar-toggle").on('click', function(){
					$(".close-menu").show();
				})

				 $(function(){ 
				     var navMain = $(".navbar-collapse"); // avoid dependency on #id
				     // "a:not([data-toggle])" - to avoid issues caused
				     // when you have dropdown inside navbar
				     navMain.on("click", ".close-menu", null, function () {
				         navMain.collapse('hide');
				     });
				 });

				 $(document).on("keydown", function(event) {
				    if ( event.which === 8 && !$(event.target).is("span, a, input") ) {
				        event.preventDefault();
				    }
				});
				 
				var $item = $('.carousel .item'); 
				var $wHeight = $(window).height();
				$item.eq(0).addClass('active');
				$item.height($wHeight); 
				$item.addClass('full-screen');

				$('.carousel img').each(function() {
				  var $src = $(this).attr('src');
				  $(this).parent().css({
				    'background-image' : 'url(' + $src + ')',
				  });
				  $(this).remove();
				});

				$(window).on('resize', function (){
				  $wHeight = $(window).height();
				  $item.height($wHeight);
				});

				$('.carousel').carousel({
				  interval: 6000,
				  pause: "false"
				});

				
			},
			finalize: function(){
			}	
		},
		'home':{
			init: function(){

				  $(".modal-fullscreen-video").on('show.bs.modal', function (e) {
				  	$('#player1')[0].play()
				  });

				   $(".modal-fullscreen-video").on('hide.bs.modal', function (e) {
				  	$('#player1')[0].pause();
					$('#player1')[0].currentTime = 0;
					$('#player1')[0].load();
				  });

				   $('video').on('ended', function(){
                		$('#player1')[0].pause();
                		$('#modal-video').modal('hide');
					});

				$('.icon-vid').hover(
				  function() {
					$('.watch-vid-txt').fadeIn();
				  }, function() {
					$('.watch-vid-txt').fadeOut();
				  }
				);

				$( ".item-logo > a" ).hover(
				  function() {
					$( ".item-logo > a > img" ).attr({
					  src: "./assets/logo/skr_b.png",
					  title: "SKR",
					  alt: "SKR Logo"
					}).fadeIn('slow');
				  }, function() {
					$( ".item-logo > a > img" ).attr({
					  src: "./assets/logo/skr.png",
					  title: "SKR",
					  alt: "SKR Logo"
					}).fadeIn('slow');
				  }
				);
			},
			finalize: function(){
				
			}	
		},
		'conceito':{
			init: function(){
				// $(document).ready(function(){
				// 	sr.reveal('.row',{ duration: 2000 }, 50);
				// });

				$('a[href^="#"]').on('click', function(event) {
				    var target = $(this.getAttribute('href'));
				    if( target.length ) {
				        event.preventDefault();
				        $('html, body').stop().animate({
				            scrollTop: target.offset().top + (-70)
				        }, 1000);
				    }
				});

				  $('.icones-nomad div').on("mouseenter", function() {
				    $(this).prev().addClass("beside");
				    $(this).next().addClass("beside");
				  });
				  $('.icones-nomad div').on("mouseleave", function() {
				    $(this).prev().removeClass("beside");
				    $(this).next().removeClass("beside");
				  });

			},
			finalize: function(){
				
			}	
		},
		'galeria':{
			init: function(){

			},
			finalize: function(){
				
			}	
		},
		'decorado':{
			init: function(){


			},
			finalize: function(){
				
			}	
		},
		'plantas':{
			init: function(){

				// var tamPlanta = new Array(); 
				// tamPlanta[0] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento40m2_001.jpg";
				// tamPlanta[1] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento40m2_002.jpg";
				// tamPlanta[2] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento47m2_001.jpg";
				// tamPlanta[3] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento47m2_002.jpg";
				// tamPlanta[4] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento48m2_01.jpg";
				// tamPlanta[5] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento48m2_02.jpg";
				// tamPlanta[6] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento52m2_001.jpg"; 
				// tamPlanta[7] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento72m2.jpg";
				// tamPlanta[8] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento81m2_Pav1.jpg";
				// tamPlanta[9] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento81m2_Pav2.jpg"; 
				// tamPlanta[10] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento115m2_Pav1.jpg";
				// tamPlanta[11] = "./assets/plantas/Apartamento_Nomad_Moema_FR_PlantaHumanizada_Apartamento115m2_Pav2.jpg";  

			$('.tam').on('click', function(){
			    event.preventDefault();
			    if ($(this).is('.tam-40')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p40').addClass('show');

			    }
			    if ($(this).is('.tam-47')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p47').addClass('show');

			    }
			    if ($(this).is('.tam-48')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p48').addClass('show');

			    }
			    if ($(this).is('.tam-52')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p52').addClass('show');

			    }
			    if ($(this).is('.tam-72')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p72').addClass('show');

			    }
			    if ($(this).is('.tam-81')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p81').addClass('show');

			    }
			    if ($(this).is('.tam-115')) {
			    	$('#modal-plantas button').removeClass('active');
			    	$(this).addClass('active');
			    	
			    	$('.item-planta').removeClass('show').addClass('hide');
			    	$('.item-planta.p115').addClass('show');

			    }

			});

			},
			finalize: function(){
				
			}	
		},
		'visite':{
			init: function(){


			},
			finalize: function(){
				
			}	
		},

	};

	var UTIL = {
    fire: function (func, funcname, args) {
      var fire;
      var namespace = All;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function () {
      UTIL.fire('common');

      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function (i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      UTIL.fire('common', 'finalize');
    }
  };

  $(document).ready(UTIL.loadEvents);

})(jQuery);
