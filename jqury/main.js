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

// $('#typo .inner').css({
//     TextDecoder:'underline',
//     'border-bottom': '5px solid red',
//     'transform': 'rotate(45deg)'
// });

// $(function(){
//     $('h1').css('color', 'red');
    
//     /* $('선택자').on('이벤트종류', 할일);
//         할일 = 임의 함수 = function(){} */
//     $('#typo').on('mouseover', function(){
//         //아이디 typo의 배경색을 green
//         $('#typo').css('background-color', 'green');
//     });

//     /* 마우스가 나가는 것도 지정해줘야한다. */
//     $('#typo').on('mouseout', function(){
//         //아이디 typo의 배경색을 green
//         $('#typo').css('background-color', '#3498db');
//     });

// });

/* 위에코드를 줄인 것 */
// $(function(){
//     $('h1').css('color', 'red');
    
//     /* $('선택자').on('이벤트종류', 할일);
//         할일 = 임의 함수 = function(){} */
//     $('#typo').on('mouseover', function(){
//         //아이디 typo의 배경색을 green
//         $('#typo').css('background-color', 'green');
//     }).on('mouseout', function(){
//         $('#typo').css('background-color', '#3498db');
//     });

// });

/* 위에 코드에서 on을 없애고 줄인것 */
// $(function(){
//     $('h1').css('color', 'red');
    
//     /* $('선택자').on('이벤트종류', 할일);
//         할일 = 임의 함수 = function(){} */
//     $('#typo, h1').mouseover(function(){
//         $(this).css('background-color', 'green');
//     }).mouseout(function(){
//         $(this).css('background-color', '#3498db');
//     });

// });


/* 마우스 클릭하면 글자가 사라지는 이벤트 */
/* linear, swing, easeInOutElastic */
// $(function(){
//     $('#typo .inner').click(function(){
//         $(this).animate({opacity:0, fontSize:'0px'}, 1500, 'easeInOutElastic',
//         function(){
//             /* 글씨가 다시돌아오는 이벤트. */
//             $(this).animate({opacity:1, fontSize:'110px'},500);
//         });
//     });
// });

