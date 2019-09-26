//header navbar
/*let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

*/

jQuery(document).ready(function (){
    "use strict";
    jQuery(document).ready(function (){
        $('.couter').counterUp({
          delay: 10,
          time: 1000
          });
        });
    $("#slidr-carousel").carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        height:"variable",
        scroll:{
                  item:1,
                  duration:500,
                  pauseOnHover:true
        },
          auto:true,
          items:
          {
            visible:{
                  min:1,
                  max:1
            },
            height:"variable"
          },
          pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
          }

      });

      $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=60)
        {
          $("header").addClass('secondry');
        }
        else
            if($("header").hasClass('secondry'))
            {

                $("header").removeClass('secondry');

            }
        });



  });
