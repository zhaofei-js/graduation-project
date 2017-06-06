$(function(){
	if($.cookie("regist")){
		$(".h_t_l_a1").html("李猛");
	}
	/****************导航菜单列表************************************/
    //获取ajax
    $.getJSON("../json/happigo.json", function(data){
        $.each(data.first, function(index, val){
            $.each(val,function(index1,val1){
                $(".b_div_ajax").eq(index).children().append("<li><a href=\"javascript:;\">"+ val1 +"</a></li>");
                // console.log($(".b_div_ajax"));
            })
        });
    });
    // console.log( $(".b_d_ul_li"))
    //移入移出div显示隐藏
    $(".b_d_ul_li").hover(function(){
        
        $(this).children().eq(1).show();
    },function(){
        $(this).children().eq(1).hide();
    });
	/**********************former_one******************************************************/
	//点击切换5张轮播
	$(".f_o_t_today").click(function(){
	    $(this).css("background","#94193f");
	    $(".f_o_t_yesterday").css("background","none");
	    $(".f_o_b_ul2").hide();
	    $(".f_o_b_ul1").show();
	});
	$(".f_o_t_yesterday").click(function(){
	    $(this).css("background","#94193f");
	    $(".f_o_t_today").css("background","none");
	    $(".f_o_b_ul1").hide();
	    $(".f_o_b_ul2").show();
	});
	/********************today*****************************************/
	//获取ajax轮播图，每个li信息
	$.get("../json/happigo.json", function(data){
		// console.log(data);
		$.each(data.second, function(index, val) {
			// console.log(1);
			$(".f_o_b_ul1").append("<li class=\"f_o_b_ul_li\">"
								+ "<div class=\"f_o_b_ajax\"><a href=\"happigo_detailPage.html\" target=\"_blank\"><img class=\"f_o_b_ajax_img\" src=\"" + val.img + "\"/></a></div>"
                                + "<p class=\"f_o_b_ajax_p1\"><a href=\"javascript:;\">" + val.name + "</a></p>"
                                + "<p class=\"f_o_b_ajax_p2\">" + val.model + "</p>"
                                + "<p class=\"f_o_b_ajax_p3\">" + val.price + "</p>"
                                + "<p class=\"f_o_b_ajax_p4\">" + val.time + "</p>"
                                + "</li>");
		});
		//5张图轮播
		var $cloneNode = $(".f_o_b_ul_li:lt(5)").clone(true).appendTo(".f_o_b_ul");	//复制前5张图
		var currIndex = 0;
		//向后运动轮播图
		$(".f_o_t_rightBtn").click(function(){
			currIndex++;
			if(currIndex == 3){
				$(".f_o_b_ul").css("left","0");
				currIndex = 1;
			}
			$(".f_o_b_ul").animate({
				left:currIndex * 1160 * -1
			},400);
			autoPlay();
		});
		//向前运动轮播图
		$(".f_o_t_leftBtn").click(function(){
			currIndex--;
			if(currIndex == -1){
				$(".f_o_b_ul").css("left","-2320px");
				currIndex = 1;
			}
			$(".f_o_b_ul").animate({
				left:currIndex * 1160 * -1
			},400);
			autoPlay();
		});
		//定时器  3秒自动换图
	    var timer = 0;
	    function autoPlay(){
	        clearInterval(timer);
	        timer = setInterval(function(){
	            $(".f_o_t_rightBtn").click();
	        },3000);
	    };
	    autoPlay();
		//鼠标移进图片效果
		$(".f_o_b_ul_li").hover(function(e){
			$(this).css("borderColor","#000").children().eq(0).children().children().stop().animate({
				height:234,
				width:234
			},200);
			clearInterval(timer);
		},function(e){			
			$(this).css("borderColor","#fff").children().eq(0).children().children().stop().animate({
				height:224,
				width:224
			},200);
			autoPlay();
		});
	});
	/***************yesterday**********************/
	$.get("../json/happigo.json", function(data){
		// console.log(data);
		$.each(data.second2, function(index, val) {
			// console.log(1);
			$(".f_o_b_ul2").append("<li class=\"f_o_b_ul_li\">"
								+ "<div class=\"f_o_b_ajax\"><a href=\"happigo_detailPage.html\" target=\"_blank\"><img class=\"f_o_b_ajax_img\" src=\"" + val.img + "\"/></a></div>"
                                + "<p class=\"f_o_b_ajax_p1\"><a href=\"javascript:;\">" + val.name + "</a></p>"
                                + "<p class=\"f_o_b_ajax_p2\">" + val.model + "</p>"
                                + "<p class=\"f_o_b_ajax_p3\">" + val.price + "</p>"
                                + "<p class=\"f_o_b_ajax_p4\">" + val.time + "</p>"
                                + "</li>");
		});
		//5张图轮播
		var $cloneNode = $(".f_o_b_ul_li:lt(5)").clone(true).appendTo(".f_o_b_ul");	//复制前5张图
		var currIndex = 0;
		//向后运动轮播图
		$(".f_o_t_rightBtn").click(function(){
			currIndex++;
			if(currIndex == 3){
				$(".f_o_b_ul").css("left","0");
				currIndex = 1;
			}
			$(".f_o_b_ul").animate({
				left:currIndex * 1160 * -1
			},400);
			autoPlay();
		});
		//向前运动轮播图
		$(".f_o_t_leftBtn").click(function(){
			currIndex--;
			if(currIndex == -1){
				$(".f_o_b_ul").css("left","-2320px");
				currIndex = 1;
			}
			$(".f_o_b_ul").animate({
				left:currIndex * 1160 * -1
			},400);
			autoPlay();
		});
		//定时器  3秒自动换图
	    var timer = 0;
	    function autoPlay(){
	        clearInterval(timer);
	        timer = setInterval(function(){
	            $(".f_o_t_rightBtn").click();
	        },3000);
	    };
	    autoPlay();
		//鼠标移进图片效果
		$(".f_o_b_ul_li").hover(function(e){
			$(this).css("borderColor","#000").children().eq(0).children().children().stop().animate({
				height:234,
				width:234
			},200);
			clearInterval(timer);
		},function(e){			
			$(this).css("borderColor","#fff").children().eq(0).children().children().stop().animate({
				height:224,
				width:224
			},200);
			autoPlay();
		});
	});
	/**********************former_two******************************************************/
	//获取ajax 物品信息
	$.get("../json/happigo.json", function(data){
		$.each(data.third, function(index, val) {
			$(".f_t_s_ul").append("<li class=\"f_t_s_li\"><a href=\"happigo_earthshop.html\" target=\"_blank\"><img class=\"f_t_s_img\" src=\"" + val.img + "\"/></a>"
									+ "<p class=\"f_t_s_p\">" + val.time + "</p></li>");
			// console.log($(".f_t_s_li"))
		});
		//鼠标移进效果
		$(".f_t_s_li").hover(function(e){
			$(this).css("borderColor","#000").addClass("shadow");
		},function(e){			
			$(this).css("borderColor","#e9e7ea").removeClass("shadow");
		});
	});
	/**********************former_three******************************************************/
	//获取ajax 物品信息
	$.get("../json/happigo.json", function(data){
		$.each(data.fourth, function(index, val) {
			$(".f_th_s_ul").append("<li class=\"f_th_s_li\"><a href=\"happigo_earthshop.html\" target=\"_blank\"><img class=\"f_th_s_img\" src=\"" + val.img + "\"/></a>"
											+ "<a class=\"f_th_s_li_a\" href=\"happigo_earthshop.html\" target=\"_blank\">"
                                    		+ "<div class=\"f_th_s_li_div1\">"
                                       		+ "<div class=\"f_th_s_li_div2\">"
                                        	+ "<div class=\"f_th_s_li_div3\"><span>" + val.font1 + "</span>"+ val.font2 + "</div>"
                                           	+ "<div class=\"f_th_s_li_div4\">" + val.font3 + "</div></div></div></a></li>");
			// console.log($(".f_t_s_li"))
		});
		//鼠标移进效果
		$(".f_th_s_li").hover(function(e){
			// console.log($(this).children())
			$(this).children().eq(1).stop().show(200);
		},function(){
			$(this).children().eq(1).stop().hide(200);
		});
	});
	/**********************former_four******************************************************/
	$.get("../json/happigo.json", function(data){
		$.each(data.fifth, function(index, val){
			$(".f_f_s_ul").append("<li class=\"f_f_s_li\">"
                                    + "<img class=\"f_f_s_li_img\" src=\"" + val.img + "\"/>"
                                	+ "<p class=\"f_f_s_li_p1\"><span class=\"f_f_s_li_span1\">" + val.discount + "</span>" + val.name + "</p><p class=\"f_f_s_li_p2\">"
                                    + "<span class=\"f_f_s_li_span2\">" + val.price + "</span>"
                                    + "<span class=\"f_f_s_li_span3\">" + val.price1 + "</span>"
                                    + "<a class=\"f_f_s_li_shopcart\" href=\"javascript:;\"></a></p><a href=\"happigo_detailPage.html\" target=\"_blank\"><p class=\"f_f_s_li_p3\"></p></a></li>");
		});
		$(".f_f_s_li").hover(function(e){
			// console.log(1);
			$(this).stop().animate({
				top:-3
			},200).addClass("shadow");
			$(this).children().eq(3).children().stop().show();
		},function(e){
			$(this).stop().animate({
				top:0,
			},200).removeClass("shadow");
			$(this).children().eq(3).children().stop().hide();
		});
	});
	
});