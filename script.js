$(document).ready(

  function(){

    $('.im1').click(function(){
      $(this).fadeOut(1500, function(){
        $(this).attr('src', './images/img2.png').fadeIn(1500);
      })
    })

    $('.im2').dblclick(function(){
      $(this).hide();
    })

    $('.im3').click(function(){
      $('.im2').show();
    })

    $('.im4').click(function(){
      $(this).remove();
    })

    $('.expand').click(function(){
      $(this).toggleClass('expandclr');
      $(this).append(' text');
      $(this).prepend('text ')
    })

    $('footer').click(function(){
      $(this).empty();
    })

    $('.abhead').click(function(){
      $(this).text('me About');
      $(this).wrap('<div class = "new"></div>');
    })

    let fontsize = $('.w1').css('font-size')
    
    $('.w1').click(function(){
      $(this).addClass('blue');
      $(this).prepend(fontsize + ' ');
    })
    $('.w1').mouseleave(function(){
      $(this).removeClass('blue');
      $(this).text('What I do');
    })

    $('.w2').mouseenter(function(){
      $(this).addClass('blue');
    })
    $('.w2').mouseleave(function(){
      $(this).removeClass('blue');
    })

    $('.name').click(function(){
      $(this).unwrap();
    })

    
    list_elements_sans = $('document').find('li').css('font-family','sans-serif');


  }
)

  $(function(){
    $('#panels').accordion({
      collapsible:true,
      heightStyle:true,
    })
  })

