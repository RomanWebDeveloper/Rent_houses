
  /* Nav */

  const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navBranding = document.querySelector(".nav-branding-2");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      navBranding.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))


  /* Slick Slider */

  $(document).ready(function(){
		$('.intro__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:false,
			speed:500
		});
	});

  $(document).ready(function(){
    $('.rent__slider').slick({
      arrows:false,
      dots:true,
      slidesToShow:1,
      autoplay:false,
      speed:500
    });
  });

  $(document).ready(function(){
    $('.map__slider').slick({
      arrows:false,
      dots:false,
      slidesToShow:4,
      autoplay:false,
      speed:500,
      responsive:[
        {
        breakpoint: 992,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  $(document).ready(function(){
    $('.reviews__slider').slick({
      arrows:false,
      dots:false,
      slidesToShow:2,
      autoplay:false,
      speed:500,
      responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  $(document).ready(function(){
    $('.houses__slider').slick({
      arrows:false,
      dots:false,
      slidesToShow:3,
      autoplay:false,
      speed:500,
      responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  $(document).ready(function(){
    $('.service__slider').slick({
      arrows:false,
      dots:false,
      slidesToShow:3,
      autoplay:false,
      speed:500,
      responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });


  /* Calendar */

  customSelect('select');

  const start = new easepick.create({
        element: document.getElementById('date'),
        format: 'YYYY MM DD',
        css: ['css/calendar.css'],
    });

    const end = new easepick.create({
        element: document.getElementById('date2'),
        css: ['css/calendar.css'],
    });

    /* Swiper */

    window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      }

      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener('change', checker);
      checker();
    }

    const someFunc = (instance) => {
      if (instance) {
        instance.on('slideChange', function (e) {
          console.log('*** mySwiper.activeIndex', instance.activeIndex);
        });
      }
    };

    resizableSwiper(
      '(max-width: 992px)',
      '.slider-1',
      {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        breakpoints: {
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
      }
    );
  });


  /* Filter */

  let filter = $("[data-filter]");

      filter.on("click", function(event) {
          event.preventDefault();

          let cat = $(this).data('filter');

          if(cat == 'all') {
              $("[data-cat]").removeClass("hide");
          } else {
              $("[data-cat]").each(function() {
                  let workCat = $(this).data('cat');

                  if(workCat != cat) {
                      $(this).addClass('hide');
                  } else {
                      $(this).removeClass('hide');
                  }
              });
          }
      });