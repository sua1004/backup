//banapresso.js

$(document).ready(function(){

    //.txt-box 등장을 위한 초기설정
    //4번 박스만 다른 구현을 사용하여 1~3번 박스를 위한 설정!
    $('.box').not(':eq(3)').find('.txt-box').css('opacity',1);
    $('.box').eq(3).find('.txt-box').css('display','block');

    var box = $('.box:eq(0), .box:eq(1)');

    box.find('.img-box').animate({
        width: '50%'
    }, 800, function(){
        box.find('.txt-box').fadeIn(600);
    });

    //box.find('.txt-box').fadeIn(600);

});

$(window).scroll(function(){

    var scTop = $(this).scrollTop();
    console.log('현재 스크롤 위치값: ' +scTop);

    var winHeight = $(this).height();
    //console.log('브라우저 화면의 높잇값: ' + winHeight); //993

    var gap = Math.ceil(winHeight * 0.9);
    //console.log('gap: ' + gap); 

    
    //3번 박스 등장
    var box3pos = $('.box').eq(2).offset().top - gap; //1270-894=376
    console.log('3번째 박스 등장 스크롤 기준값: '+box3pos);

    if (scTop > box3pos){
        $('.box').eq(2).find('.img-box').animate({
            width: '50%'
        }, 800, function(){
            $(this).next().fadeIn(600);
        });
    }

    //4번 박스 등장
    var box4pos = $('.box').eq(3).offset().top - gap;
    console.log('4번째 박스 등장 스크롤 기준값: '+box4pos);

    /* if(scTop > box4pos){
        $('.box').eq(3).find('.img-box').animate({
            width: '50%'
        }, 800, function(){
            $(this).prev().fadeIn(600);
        });
    }  */

    // 4번 박스 등장 반복
    if (scTop > box4pos){
        $('.box').eq(3).addClass('active');
    } else {
        $('.box').eq(3).removeClass('active');
    }    
});