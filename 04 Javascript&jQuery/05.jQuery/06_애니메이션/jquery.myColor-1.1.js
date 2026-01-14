// 내가 만드는 jQuery 플러그인
/*

    플러그인이란?
    
    - 특정기능을 구현하여 함수를 호출하면 쉽게 그 기능을 사용할 수
    있도록 만들어진 외부구현 메서드
    
    - 플러그인 함수 명명법:
        개발언어.플러그인명-버전.js
    예) jquery.myColor-1.1.js

    - 플러그인 형식:
    
    jQuery.fn.함수명 = function(){
        구현코드....
        return 결과;->필요에 따라씀
    };
    
*/
//// 함수기능: 색상과 왼쪽마진, 시간값을 받아서 애니메이션 처리함
jQuery.fn.myColor = function(color,ml,tt){
    // color-배경색, ml-왼쪽마진값(숫자만),tt-애니메이션시간
    // $(this) 이 함수를 클릭한 요소 자신!
    $(this).css({backgroundColor:color})
    .animate({marginLeft:ml+"px"},tt);
    
    
    
};///////// myColor함수 //////////////////////
    
    
    
    
    
    
    
    
    
    