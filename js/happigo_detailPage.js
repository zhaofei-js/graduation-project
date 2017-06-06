$(function() {
	if($.cookie("regist")){
		$(".h_t_l_a1").html("李猛");
	}
	/****************search_ul************************************/
	$(window).scroll(function() {
		if ($(this).scrollTop() >= $(".f_b_top").offset().top) {
			$("#search").stop().animate({
				height: 40
			},
			200);
			if ($(window).scrollTop() >= $(".f_b_h21").offset().top - 70 && $(window).scrollTop() < $(".f_b_h22").offset().top - 70) {
				$(".s_li1").css({
					color: "#666666",
					background: "#fff"
				});
				$(".s_ul > :not(.s_li1)").css({
					color: "#fff",
					background: "#333333"
				});
			} else if ($(window).scrollTop() >= $(".f_b_h22").offset().top - 70 && $(window).scrollTop() < $(".f_b_h23").offset().top - 70) {
				$(".s_li2").css({
					color: "#666666",
					background: "#fff"
				});
				$(".s_ul > :not(.s_li2)").css({
					color: "#fff",
					background: "#333333"
				});
			} else if ($(window).scrollTop() >= $(".f_b_h23").offset().top - 70 && $(window).scrollTop() < $(".f_b_h24").offset().top - 70) {
				$(".s_li3").css({
					color: "#666666",
					background: "#fff"
				});
				$(".s_ul > :not(.s_li3)").css({
					color: "#fff",
					background: "#333333"
				});
			} else if ($(window).scrollTop() >= $(".f_b_h24").offset().top - 70 && $(window).scrollTop() < $(".f_b_h25").offset().top - 70) {
				$(".s_li4").css({
					color: "#666666",
					background: "#fff"
				});
				$(".s_ul > :not(.s_li4)").css({
					color: "#fff",
					background: "#333333"
				});
			} else if ($(window).scrollTop() >= $(".f_b_h25").offset().top - 70) {
				$(".s_li5").css({
					color: "#666666",
					background: "#fff"
				});
				$(".s_ul > :not(.s_li5)").css({
					color: "#fff",
					background: "#333333"
				});
			}
		} else {
			$("#search").stop().animate({
				height: 0
			},
			200);
		}
	});
	//点击li时改变this样式，以及赋值window卷曲高度
	$(".s_li1").click(function() {
		$(window).scrollTop($(".f_b_h21").offset().top - 70);
		$(this).css({
			color: "#666666",
			background: "#fff"
		});
		$(".s_ul > :not(.s_li1)").css({
			color: "#fff",
			background: "#333333"
		});
	});
	$(".s_li2").click(function() {
		$(window).scrollTop($(".f_b_h22").offset().top - 70);
		$(this).css({
			color: "#666666",
			background: "#fff"
		});
		$(".s_ul > :not(.s_li2)").css({
			color: "#fff",
			background: "#333333"
		});
	});
	$(".s_li3").click(function() {
		$(window).scrollTop($(".f_b_h23").offset().top - 70);
		$(this).css({
			color: "#666666",
			background: "#fff"
		});
		$(".s_ul > :not(.s_li3)").css({
			color: "#fff",
			background: "#333333"
		});
	});
	$(".s_li4").click(function() {
		$(window).scrollTop($(".f_b_h24").offset().top - 70);
		$(this).css({
			color: "#666666",
			background: "#fff"
		});
		$(".s_ul > :not(.s_li4)").css({
			color: "#fff",
			background: "#333333"
		});
	});
	$(".s_li5").click(function() {
		$(window).scrollTop($(".f_b_h25").offset().top - 70);
		$(this).css({
			color: "#666666",
			background: "#fff"
		});
		$(".s_ul > :not(.s_li5)").css({
			color: "#fff",
			background: "#333333"
		});
	});
	//加入购物车动画
	$(".f_m_r_d5_a2").click(function(e) {
		$(".r_s_d2_count").html(1);
		//使用事件代理实现为加入购物车按钮增加事件处理
		var id = 1;
		var img = $(".f_m_top_img").attr("src");
		var name = $(".f_m_right > h1").html();
		var price = $(".span").html();
		var count = $(".f_m_r_d4_input").val();
		var str = id + "#" + count + "#" + img + "#" + name + "#" + price;
		// console.log(id,img,name,price,str)
		var $cookie = $.cookie("shopcart");
		// console.log($cookie);
		if ($cookie) {
			//cookie文件存在
			var newStr = addStr($cookie, str);
			$.cookie("shopcart", newStr);
			// console.log($.cookie("shopcart"));
		} else {
			//cookie文件没有创建,用户第一次使用购物车
			$.cookie("shopcart", str, {
				expires: 7
			});
		};
		// console.log($cookie);
	});
	function addStr(str1, str2) {
		var rowArr = str1.split("|");
		var isAdd = true;
		for (var i = 0; i < rowArr.length; i++) {
			var colArr = rowArr[i].split("#");
			var str2Arr = str2.split("#");
			if (colArr[0] == str2Arr[0]) {
				isAdd = false;
				colArr[1] = parseInt(colArr[1]) + 1;
				rowArr[i] = colArr.join("#");
				break;
			}
		}
		if (isAdd) {
			rowArr.push(str2);
		}
		return rowArr.join("|");
	};
	$(".s_d_a").click(function() {
		$(".r_s_d2_count").html(1);
	});

	//商品选择样式
	$(".f_m_r_d3_li").click(function() {
		$(".f_m_r_d3_li").css({
			border: "1px solid #dbdbdb"
		}).children().stop().hide();
		$(this).css({
			border: "1px solid #94193f"
		}).children().stop().show();
	});
	//商品数量
	$(".f_m_r_d4_a1").click(function() {
		var $val = parseInt($(".f_m_r_d4_input").val());
		console.log($val);
		$(".f_m_r_d4_input").val($val + 1);
	});
	$(".f_m_r_d4_a2").click(function() {
		var $val = parseInt($(".f_m_r_d4_input").val());
		console.log($val);
		if ($val === 1) {
			$val = 2;
		}
		$(".f_m_r_d4_input").val($val - 1);
	});
	//放大镜——选择图片
	$(".f_m_bot_li").mouseenter(function() {
		$(".f_m_bot_li:not(this)").css({
			border: "1px solid #ccc"
		});
		$(this).css({
			border: "1px solid #000"
		});
		var $src = $(this).children().attr("src");
		// console.log($src)
		$(".f_m_top_img").attr("src", $src);
		$(".f_m_none_img").attr("src", $src);
	});
	//放大境——移入鼠标显示图片
	$(".f_m_l_top").hover(function(e) {
		$(".f_m_imgNone").show();
		$(".f_m_divNone").show();
	},
	function(e) {

		$(".f_m_imgNone").hide();
		$(".f_m_divNone").hide();
	});
	//放大境——放大图片
	$(".f_m_l_top").mousemove(function(e) {
		// e.stopPropagation();
		var $x = e.pageX - $(".f_m_l_top").offset().left - ($(".f_m_divNone").width() / 2);
		var $y = e.pageY - $(".f_m_l_top").offset().top - ($(".f_m_divNone").height() / 2);
		var $maxWidth = $(".f_m_l_top").width() - $(".f_m_divNone").width();
		var $maxHeight = $(".f_m_l_top").height() - $(".f_m_divNone").height();
		var $nowX = Math.max(Math.min($x, $maxWidth), 0);
		var $nowY = Math.max(Math.min($y, $maxHeight), 0);
		//console.log($nowX * 2,$nowY * 2)
		$(".f_m_divNone").css({
			left: $nowX,
			top: $nowY
		});
		$(".f_m_none_img").css({
			left: -$nowX * 2,
			top: -$nowY * 2
		});
	});
	//点击购买  存入cookie
});