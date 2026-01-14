//setInterval_vertical_v1.js

$(function(){
    
    //버튼 초기 색상 설정
    $('#btn0').css('color','red');
    
    var pno = 0; //현재 페이지를 담는 변수
    
    function move(){
        
        pno++;
        
        if(pno === 4) {
            $('#gallery').css({
                top: 0
            });
            
            pno = 1; //2번째 이미지
        }
        
        $('#gallery').animate({
            top: -600 *pno //-600 -1200 -1800
        }, 800);
        
        
        //버튼 색상 초기화
        $('#btngrp li').css('color','white');
        
        //해당 페이지 버튼을 빨강
        //$('#btn'+pno).css('color','red');
        $('#btngrp li').eq(pno).css('color','red');
        
        if(pno===3){
            //$('#btn0').css('color','red');
            //$('#btngrp li').first().css('color','red');
            $('#btngrp li').eq(0).css('color','red');
        }
        
    }
    
    var cosmetic = setInterval(function(){
        move();
    }, 2000);
    
    //마우스 올리면 멈춤, 마우스 떠나면 다시 시작
    $('#gallery').mouseenter(function(){
        clearInterval(cosmetic);
    }).mouseleave(function(){
        cosmetic = setInterval(function(){
            move();
        }, 2000);
    });
    
    
});




