
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('nav').addClass('black');
        }
        else{
            $('nav').removeClass('black');
        }
    })
/*menu button onclick function*/         $(document).ready(function(){
            $('.menu i').click(function(){
                $("nav ul").toggleClass("active")
        })
        })
