//index_230714.js

$(function(){

    //jQuery 이벤트
    /* $('.prev').click(function(){
        goSlide(0);
    });

    $('.next').click(function(){
        goSlide(1); 
    }); */

    //자바스크립트로 이벤트 실행
    document.querySelector('.prev').onclick = function(){
        goSlide(0);
    };

    document.querySelector('.next').onclick = function(){
        goSlide(1);
    };

});

/*//////////////////////////////////////////////////////////////////////
    함수명 : goSlide
    기능 : 맨 앞의 이미지를 맨 뒤로 또는 맨 뒤의 이미지를 맨 앞으로 이동, class를 다시 순서대로 주어서 트랜지션 효과를 이용하여 슬라이드가 이동되게 한다.
/////////////////////////////////////////////////////////////////////*/
var prot = 0; //광클금지 상태값 (0-허용, 1-막기)
function goSlide(bang){

    //광클금지 설정!
    if (prot === 1) return false;
    prot = 1;

    //1. 대상선정 : .pbox
    var tg = document.querySelector('.pbox');
    var tg2 = tg.querySelectorAll('img');
    console.log('이미지 갯수: ' + tg2.length);

    if (bang === 0){
        //이전, 왼쪽버튼

        //맨 뒤의 이미지를 맨 앞으로 이동
        //insertBefore(넣을요소, 넣을요소 위치)
        //insertBefore(4, 0)
        tg.insertBefore(tg2.item(tg2.length-1), tg2.item(0));

    }else if (bang === 1){
        //다음, 오른쪽 버튼

        //맨 앞의 이미지를 맨 뒤로 이동
        tg.appendChild(tg2.item(0));

    }

    //변경된 순서의 이미지를 다시 읽어와!
    //그리고 클래스를 새로 부여해줘!

    tg2 = tg.querySelectorAll('img');

    for (var i=0; i < tg2.length; i++){
        tg2[i].setAttribute('class','i'+(i+1));
    }

    //광클금지 상태값 변경
    setTimeout(function(){
        prot = 0;
    }, 500);

}