//onePage_autoscroll_PageAction.js

//////////////// 전역변수 선언 //////////////////////
var pno = 0;  //현재 페이지 번호 (첫 페이지 0)
const totcnt = 7; //전체 페이지 수(total content)
var prot = 0; //광스크롤 막기 (0-허용, 1-막기)
/////////////////////////////////////////////////////


/*///////////////////////////////////////////////////////
    함수명 : initSet
    기능 : 각 페이지별 등장요소 초기 CSS 설정
///////////////////////////////////////////////////////*/
function initSet (){
    //1. 닥터두리틀
    $('#page1 .minfo').css({
        left: '150%'
    });

    //2. 안녕베일리
    $('#page2 .minfo').hide();

    //3. 라라랜드
    $('#page3 .minfo').css({
        top: '-100%'
    });

    //4. 어바웃 타임
    $('#page4 .minfo').css({
        transform: 'translate(-50%,-50%) scale(0)'
    });

    //5. 어벤져스
    $('#page5 .minfo').css({
        transform: 'translate(-50%,-50%) rotateY(180deg)'
    });

    //6. 아이언맨
    $('#page6 .minfo').css({
        transform: 'translate(-50%,-50%) rotate(1000deg) scale(0)'
    });

    //7. 라이언킹
    $('#page7 .minfo').css({
        transform: 'translate(-50%,-50%) scaleX(10)',
        opacity: 0
    });
}

/*///////////////////////////////////////////////////////
    함수명 : pageAction (else if문 사용)
    기능 : 각 페이지별 등장 액션
///////////////////////////////////////////////////////*/
function pageAction (){

    if (pno === 0){
        //1. 닥터두리틀 - 오른쪽에서 중앙으로 날아오기
        $('#page1 .minfo').stop().animate({
            left: '50%'
        }, 1500, 'easeOutElastic');

    } else if (pno === 1){
        //2. 안녕베일리 - 서서히 나타나기
        $('#page2 .minfo').stop().fadeIn(800);

    } else if (pno === 2){
        //3. 라라랜드 - 위에서 아래로 떨어지기 
        $('#page3 .minfo').stop().animate({
            top: '50%'
        }, 1200, 'easeOutElastic');

    } else if (pno === 3){
        //4. 어바웃타임 - 요소가 확대되면서 나타나기
        $('#page4 .minfo').css({
            transform: 'translate(-50%,-50%) scale(1)',
            transition: 'all 1.5s ease-out'
        });

    } else if (pno === 4){
        //5. 어벤져스 - 좌우 회전
        $('#page5 .minfo').css({
            transform: 'translate(-50%,-50%) rotateY(0)',
            transition: 'all 1.5s ease-out'
        });

    } else if (pno === 5){
        //6. 아이언맨 - 회전하면서 나타나기 
        $('#page6 .minfo').css({
            transform: 'translate(-50%,-50%) rotate(0deg) scale(1)',
            transition: 'all 1.5s ease-out'
        });

    } else if (pno === 6){
        //7. 라이언킹 - 너비가 좁아지면서 선명하게 나타나기
        $('#page7 .minfo').css({
            transform: 'translate(-50%,-50%) scaleX(1)',
            opacity: 1,
            transition: 'all 1.5s ease-out'  
        });
    }

}


/*///////////////////////////////////////////////////////
    함수명 : chgMenu
    기능 : GNB 메뉴와 블릿 메뉴를 현재 페이지와 일치되도록 동시에 변경

    pno === .gnb li의 인덱스 === #bnavi li의 인덱스
///////////////////////////////////////////////////////*/
function chgMenu (){

    //GNB메뉴의 class변경
    $('.gnb li').eq(pno).addClass('selM').siblings().removeClass('selM');

    //bnavi 메뉴의 class변경
    $('#bnavi li').eq(pno).addClass('selB').siblings().removeClass('selB');
}


$(function(){

    //각 페이지 초기세팅 함수 호출!
    initSet();

    //페이지 액션 최초 호출! (첫 번째 페이지를 위해 호출!)
    pageAction();


    //마우스휠 이벤트
    $(document).on('mousewheel DOMMouseScroll', function (e){

        if (prot === 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log('마우스휠 델타값: '+delta);

        if (/Firefox/i.test(navigator.userAgent)){
            delta = -evt.detail;
        }

        if (delta > 0){
            //양수, 윗방향(이전페이지)
            pno--;
            if (pno === -1) pno = 0;

        } else {
            //음수, 아랫방향(다음페이지)
            pno++;
            if (pno === totcnt) pno = totcnt-1;
        }

        console.log('현재 pno값: '+pno);

        var pagepos = $('.page').eq(pno).offset().top;
        console.log('페이지 이동거리: '+pagepos);

        //페이지 이동 애니메이션
        $('html, body').animate({
            scrollTop: pagepos + 'px'
        }, 800, function(){

            initSet();
            pageAction();

            prot = 0; //휠 스크롤 막기 해제
        });

        chgMenu();

    }); //mousewheel


    //GNB와 블릿 메뉴를 클릭하면 해당 페이지 위치로 스크롤 이동 
    $('#gnb a, #bnavi a').click(function(e){

        e.preventDefault();

        var idx = $(this).parent().index();
        
        pno=idx; //인덱스 번호로 pno 값 변경

        var pagepos2 = $('.page').eq(pno).offset().top;
        
        $('html, body').animate({
            scrollTop: pagepos2 + 'px'
        }, 800, function(){
            initSet();
            pageAction();
        });

        chgMenu();

    });


});