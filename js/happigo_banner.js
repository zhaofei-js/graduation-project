$(function(){
	/****************banner轮播图************************************/
	$("#banner").hover(function(){
        $(".b_leftBtn").stop().show(400);
        $(".b_rightBtn").stop().show(400);
    },function(){
        $(".b_leftBtn").stop().hide(400);
        $(".b_rightBtn").stop().hide(400);
    })
    var currIndex = 0;
    var count = 0;
    // 点击向右按钮
    $(".b_rightBtn").click(function(){
        currIndex++;
        if(currIndex == 4){
            $("#banner > ul").css("left","0");
            currIndex = 1;
        }
        $("#banner > ul").animate({
            left:currIndex * 1423 * -1
        },400);
        $(".b_nav > span").removeClass(); 
        if(currIndex == 3){
            count = 0;
        }else{
            count = currIndex;
        }                
        $(".b_nav > span").eq(count).addClass("on");
        autoPlay();
    });
    //点击向左按钮
    $(".b_leftBtn").click(function(){
        currIndex--;
        if(currIndex == -1){
            $("#banner > ul").css("left","-4269px");
            currIndex = 2;
        }
        $("#banner > ul").animate({
            left:currIndex * 1423 * -1
        },400);
        $(".b_nav > span").removeClass(); 
        count = currIndex;                
        $(".b_nav > span").eq(count).addClass("on");
        autoPlay();
    });
    //定时器  3秒自动换图
    var timer = 0;
    function autoPlay(){
        clearInterval(timer);
        timer = setInterval(function(){
            $(".b_rightBtn").click();
        },3000);
    };
    //span按钮点击跳转图片
    $(".b_nav > span").click(function(){
        count = $(this).index();
        currIndex = count;
        $(".banner > ul").css("left",count * 1423 * -1);
        $(".b_nav > span").removeClass("on");
        $(".b_nav > span").eq(count).addClass('on');
        $("#banner > ul").animate({
            left:currIndex * 1423 * -1
        },400);
        autoPlay(); 
    })
    autoPlay();
})