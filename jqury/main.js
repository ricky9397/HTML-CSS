// $(document).ready(function(){
//     $('h1').css({'color' : 'red'});



// });


/*
@ css(밑줄) 
#typo.inner{text-decoration:underline;} 
*/
// $(function(){
//     $('h1').css('color', 'red'); //css 속성 하나를 변경

//     $('#typo .inner').css('text-decoration', 'underline'); // 밑줄

//     $('#typo .inner').css('border-bottom', '5px solid red');

//     $('#typo .inner').css('transform', 'rotate(45deg)');
    
// });

$('#typo .inner').css({
    TextDecoder:'underline',
    'border-bottom': '5px solid red',
    'transform': 'rotate(45deg)'
});
