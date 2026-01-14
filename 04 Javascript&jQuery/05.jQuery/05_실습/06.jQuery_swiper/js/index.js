// index.js

$(document).ready(function(){

    //swiper 플러그인 적용하기

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        loop: true,
        speed: 800,
        effect: 'fraction'
    });

});

/* 
pagination type
- 원 (기본값)
- fraction 숫자

effect
- slide : 슬라이드 효과 (기본값)
- fade : 페이드 효과
- cube : 큐브 효과
- flip : 플립 효과
- coverflow : 커버 플로우 효과

loop (슬라이드 반복설정)
- false : 기본값, 반복없음
- true : 무한루프 (반복)

*/