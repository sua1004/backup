// 1cutslide-2.js
//alert('연결~~~~~');
/* 
슬라이드가 이동하려면, 이동대상은 누구? #gallery
어떻게 이동할까?
1) margin-left
2) position의 좌표!

언제 움직이지? 페이저를 클릭했을 때!
>> 클릭 이벤트 click()
>> 클릭 대상 : #pager li 또는 #pager li a

얼만큼 이동할까?
1200px 만큼 -> 슬라이드 하나의 너비만큼! >> width()

각 슬라이드가 보여질 때 #gallery의 위치값

1번 슬라이드     0 -> 0*1200 |  0    
2번 슬라이드 -1200 -> 1*1200 | -100%
3번 슬라이드 -2400 -> 2*1200 | -200%
4번 슬라이드 -3600 -> 3*1200 | -300%

>> 곱해지는 값을 내가 클릭하는 li의 인덱스 값으로 사용!

*/

$(function(){

    //슬라이드 하나의 너비 구하기
    var imgWidth = $('#gallery img').width();
    console.log('슬라이드 하나의 너빗값: ' + imgWidth);

    $('#pager li').click(function(){

        var idx = $(this).index();
        console.log('클릭한 li의 인덱스값: ' + idx);

        // 이동거리를 px로 사용!
        /* $('#gallery').animate({
            marginLeft: -(imgWidth*idx)
        }, 800); */

        // 이동거리를 %로 사용!
        $('#gallery').animate({
            //marginLeft: -(100*idx) + '%'
            left: -(100*idx) + '%'
        }, 800);

        // 페이저 변경!!!
        $(this).addClass('active').siblings().removeClass('active');

    });
});