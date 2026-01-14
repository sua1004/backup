// setInerval.js

$(document).ready(function(){

    //.pager의 초기설정!
    $('.pager li').first().css('color', 'red');

    //함수 최초호출!
    //leftmove();

    //$('.main').click(leftmove);

    //자동실행
    //setInterval(leftmove, 3000);

    var autocall = setInterval(leftmove, 3000);

    //슬라이드에 마우스 오보(자동실행 멈춤)/아웃(자동실행 다시시작)
    $('.slide-box').mouseenter(function(){
        //자동실행 멈춤, 인터벌 제거
        clearInterval(autocall);

    }).mouseleave(function(){
        //자동실행 다시시작 인터벌 재가동!
        //autocall = setInterval(leftmove, 3000);

        autocall = setInterval(function(){
            leftmove();
            console.log('인터벌 재가동!!!');
        }, 3000);
    });

});

/*/////////////////////////////////////////////////////
함수명 : leftmove
기능 : 슬라이드를 왼쪽(다음)으로 이동
////////////////////////////////////////////////////*/

var page = 0; //현재 슬라이드 인덱스(페이지)를 담을 변수!

function leftmove (){

    page++;
    console.log('현재 슬라이드 인덱스: ' + page);

    //제어문 등장! - 변경된 page값이 적용되기 전에 검사!
    if(page === 4){

        //위치값 리셋
        $('.gallery').css('left', 0);

        //다음 페이지 이동을 위한 page 변수값 변경
        //현재 보고 있는 슬라이드는 1번 내용, 2번 슬라이드를 보기 위해 2번 인덱스 번호로 변경
        page = 1
        console.log('변경된 page값: ' + page);
    }

    //슬라이드 이동!
    $('.gallery').animate({
        left: -(1280*page)
    }, 800);

    //페이저 변경!
    //페이저 버튼을 모두 검정으로 초기화!
    $('.pager li').css('color','black');

    //현재 보여지는 슬라이드의 페이저 버튼만 빨강으로 변경!
    //$('#btn' + page)
    //$(`#btn${page}`).css('color','red');
    $('.pager li').eq(page).css('color','red');

    if (page === 3){
        //$('#btn0').css('color','red');
        $('.pager li').eq(0).css('color','red');
    }
}
