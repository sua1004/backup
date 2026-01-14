//flow.js

//alert('연결~~~~');
/* 
**우리가 구현할 것**

1. (왼쪽으로) 흘러가는 슬라이드 

2. 이벤트 연결
>> 마우스 올리면 멈춤
>> 마우스 벗어나면 다시 흘러가!

3. 마우스 올린 디저트 상자의 캡션(.caption) 등장!!!!! 
*/

var autocall; //인터벌을 담을 변수!

$(document).ready(function () {

    autocall = setInterval(flow, 20); //흘러가는 속도조절->자동실행 시간으로 조절!

    //$('.flow li').mouseenter().mouseleave();
    $('.flow li').hover(function(){
        //mouseenter
        // 1) 자동실행 멈춤 >> 인터벌 제거
        // 2) .caption 등장!

        clearInterval(autocall);

        //$(this).find('.caption').show();
        $(this).find('.caption').animate({
            top: '105%',
            opacity: 1
        }, 500);

    }, function(){
        //mouseleave
        // 1) 자동실행 다시시작 >> 인터벌 설정
        // 2) .caption 숨기기

        autocall = setInterval(flow, 20);

        //$('.caption').hide();

        $(this).find('.caption').hide(0, function(){
            //재등장을 위한 초깃값 복원!!!!
            $(this).css({
                top: '50%',
                opacity: 0,
                display: 'block'
            });
        });

    });
    
});



/*/////////////////////////////////////////////////
함수명 : flow
기능 : 컨텐츠를 왼쪽으로 흐르게 하는 함수
/////////////////////////////////////////////////*/

var moveNum = 0;  //이동하는 left값을 담을 변수!

function flow() {

    moveNum++; //left 이동값을 1씩 증가

    // (무한반복을 위해) 다음을 위한 준비!
    // li하나의 너비보다 이동한 left값(moveNum)이 커졌을 때 >> li하나의 너비 구하기!
    // 화면에서 사라진 첫번째 li를 맨 뒤로 이동

    var boxWidth = $('.flow li').first().outerWidth();
    console.log('li하나의 너빗값: ' + boxWidth);

    //if else문
    if (moveNum > boxWidth) {
        // 이동한 픽셀수(moveNum)가 li 하나의 너비보다 커졌을 때!
        // 다음을 위한 준비
        // 1) 왼쪽으로 흘러가서 사라진 첫번째 li를 .flow의 맨 뒤로 이동 >> append()
        // 2) .flow의 li 순서가 변경되었으므로 left값 초기화! 
        // 3) 동시에 이동값(moveNum)을 초기화!!!

        $('.flow').append($('.flow li').first()).css('left', 0);
        //$('.flow').css('left',0);
        
        moveNum = 0;

    } else {
        //moveNum의 값을 left 값으로 적용 -> 이동
        $('.flow').css({
            left: -moveNum
        });
    }




}



