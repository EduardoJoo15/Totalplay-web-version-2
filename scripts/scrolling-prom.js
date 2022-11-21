export default function carouselProm(){

    window.addEventListener('load',function(){
      new Glider(document.querySelector(".carousel__list_prom"),{
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
          dots: '.carousel__indicadores_prom',
          arrows: {
            prev: '.carousel__anterior_prom',
            next: '.carousel__siguiente_prom'
          },
          responsive: [
              {
                  breakpoint: 0,
                  settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: '1',
                  slidesToScroll: '1',
                  itemWidth: 150,
                  duration: 0.50
                }
              },
              {
                // screens greater than >= 775px
                breakpoint: 630,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: '2',
                  slidesToScroll: '1',
                  itemWidth: 150,
                  duration: 0.80
                }
              },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                  slidesToShow: '3',
                  slidesToScroll: '3',
                  itemWidth: 150,
                  duration: 0.80
                }
              }
            ]
      });
  })
  
  }