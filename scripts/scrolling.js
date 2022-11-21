export default function carouselPaq(){

  window.addEventListener('load',function(){
    new Glider(document.querySelector(".carousel__lista"),{
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
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
              breakpoint: 580,
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