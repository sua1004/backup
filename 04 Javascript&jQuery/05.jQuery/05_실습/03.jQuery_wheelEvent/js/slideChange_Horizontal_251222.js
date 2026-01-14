//slideChange_Horizontal.js

/////// 전역변수 설정 ////////////////////////////////////////
var pageCount = 0;  //현재 페이지의 인덱스 번호를 담을 변수! (첫 페이지 0)
var total;  //페이지 총 갯수를 담을 변수, 문서가 로딩되면 페이지 갯수를 먼저 읽어올 것!
var stat = 0;  //이벤트 핸들러 실행 제어 (0-실행전/허용, 1-실행중/잠금)
/////////////////////////////////////////////////////////////

$(document).ready(function(){

    //전체 페이지 갯수 읽어오기
    total = $('.page').length;
    console.log('전체 페이지 갯수: ' +total); //6

    //마우스휠 이벤트
    /* 
    1. 이벤트 핸들러 제어하기 (스크롤 잠금)
    2. 브라우저에 발생한 이벤트 정보 확인 - mousewheel, DOMMouseScroll
    >> 이벤트명, 발생한 이벤트에 따른 속성 
    3. wheelDelta(또는 detail) 값 구하기!
    4. 파이어폭스 브라우저를 위한 별도 처리!!
    5. 적용 - 페이지 이동하기
    */
    $(document).on('mousewheel DOMMouseScroll',function(e){

        //1. 이벤트 핸들러 제어하기 (스크롤 잠금)
        if (stat === 1) {
            console.log('스크롤 잠금 실행!!');
            //return false;
            return; 
        }
        stat = 1;

        //2. 브라우저에 발생한 이벤트 정보 확인
        //var evt = window.event;

        //표준방식으로 변경**
        const evt = e.originalEvent;
        console.log(evt);

        //3. wheelDelta(또는 detail) 값 구하기!
        var delta = evt.detail ? evt.detail : evt.wheelDelta;

        //4. 파이어폭스 브라우저를 위한 별도 처리!!
        var browserInfo = navigator.userAgent;
        console.log(browserInfo);

        if (/Firefox/i.test(browserInfo)){
            delta = -evt.detail;
            console.log('파이어폭스 detail: ' + delta);
        }

        //5. 페이지 이동하기
        //휠 아래 - 다음 페이지 (오른쪽 페이지), 음수 (-이동거리)
        //휠 위로 - 이전 페이지 (왼쪽 페이지), 양수 (+이동거리)

        if (delta > 0){
            //양수, 휠 위로, 이전 페이지 
            pageCount--;
            if (pageCount === -1) pageCount=0;

        } else {
            //음수, 휠 아래로, 다음 페이지
            pageCount++;
            if (pageCount === total) pageCount = total-1;
        }

        var pageLeft = $('.page').eq(pageCount).offset().left;

        //이동
        $('html, body').animate({
            scrollLeft: pageLeft
        }, 800, function(){
            stat = 0; //핸들러 실행 허용상태로 변경!
        });

        //메뉴변경 함수호출
        menuChg();

    }); //mousewheel 이벤트 핸들러 

    $('.gnb a, .side-pager a').on('click', function(e){

        e.preventDefault();

        // 내가 클릭한 메뉴에 맞춰 현재 보고 있는 페이지 일치시키기!

        var idx = $(this).parent().index();
        console.log(idx);

        //클릭된 메뉴와 현재 페이지를 일치!
        pageCount = idx;

        //페이지 이동거리 구하기
        var pid = $(this).attr('href');

        var pageLeft = $(pid).offset().left; // = 스크롤 이동거리!

        //이동!
        $('html, body').animate({
            scrollLeft: pageLeft
        }, 800);

        //메뉴변경
        menuChg();

    });


});

/*//////////////////////////////////////////////
함수명 : menuChg
기능 : .gnb와 .side-pager 메뉴 동시 변경, 전역변수(pageCount) 사용!
//////////////////////////////////////////////*/
function menuChg (){
    $('.gnb li').eq(pageCount).addClass('on').siblings().removeClass('on');
    $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
}