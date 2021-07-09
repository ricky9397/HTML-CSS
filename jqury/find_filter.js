$(function(){
    var $duration = 300,
        $image = $('#images p');

    // 첫번째 캡션, span animate메서드
    /* 
        공백 있는 것 = find 
        공백이 없는 것 = filter
        #images p span { } -> $image.find('span')
        #images p.strong { } ->  $image.filter('strong')
        선택자.anmate({속성:값, 속성:값},시간,이징,다른할일);
        span, strong {opaacity:1;}
    */
    $image.filter(':nth-child(1)').mouseover(function(){
        $(this).find('span, strong').animate({opacity:1}, $duration);
    }).mouseout(function(){
        $(this).find('span, strong').animate({opacity:0}, $duration);
    });

    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({opacity:1, left:'0%'}, $duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({opacity:0, left:'-200%'}, $duration);
    });

    $image.filter(':nth-child(1)').mouseover(function(){
        $(this).find('span, strong').animate({opacity:1}, $duration);
    }).mouseout(function(){
        $(this).find('span, strong').animate({opacity:0}, $duration);
    });

    $image.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({opacity:1, bottom:0}, $duration);
        $(this).find('img').stop().animate({top:'-40px'}, $duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({opacity:1, bottom:'-80px'}, $duration);
        $(this).find('img').stop().animate({top:'0px'}, $duration);
    });

});