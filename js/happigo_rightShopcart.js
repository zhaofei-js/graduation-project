$(function(){
	/****************search搜索导航************************************/
    //导航TOP 和 搜索菜单
    $(window).scroll(function(){
        // alert($(this).height())
        if($(this).scrollTop() >= $(this).height()){
            $(".r_s_b_d3_top").stop().show().animate({
                opacity:1
            },400);
         // console.log($("#search"))
            $("#search").stop().animate({
                height:52
            },200);
        }else{
            $(".r_s_b_d3_top").stop().animate({
                opacity:0.1
            }).hide();
            $("#search").stop().animate({
                height:0
            },200);
        }
    });
    //鼠标移入效果，隐藏div显示
    $(".r_s_t_div1").hover(function(){
        console.log(1)
        $(".r_s_t_d1_none").stop().show(200);
    },function(){
        $(".r_s_t_d1_none").stop().hide();
    });
    $(".r_s_b_div1").hover(function(){
        console.log(1)
        $(".r_s_b_d1_none").stop().show(200);
    },function(){
        $(".r_s_b_d1_none").stop().hide();
    });
    $(".r_s_b_div2").hover(function(){
        console.log(1)
        $(".r_s_b_d2_none").stop().show(200);
    },function(){
        $(".r_s_b_d2_none").stop().hide();
    });
    $(".r_s_b_d3_top").click(function(){
        $("html,body").animate({
                    scrollTop:0
                },200);

    });
});