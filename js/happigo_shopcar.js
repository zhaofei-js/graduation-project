$(function(){
    if($.cookie("regist")){
        $(".h_t_l_a1").html("李猛");
    }
	//获取列表商品ajax，等待点击加入购车商品
	var loadData = function(){
		$.getJSON("../json/happigo.json",function(data){
			$.each(data.seventh, function(index, val) {
				$(".f_b_tui_ul").append("<li class=\"f_b_tui_li\"><img src=\"" + val.img + "\" class=\"f_b_tui_img\"/>"
	                            		+ "<p class=\"f_b_tui_p1\">" + val.name + "</p>"
	                            		+ "<p class=\"f_b_tui_p2\">￥<span class=\"f_b_tui_span\">" + val.price + "</span></p>"
	                            		+ "<a class=\"f_b_tui_a\" href=\"javascript:;\"  pid=\""+ val.id +"\">加入购物车</a></li>");
			});
		});
	};
	/****************jq中的ajax************************************/
    //获取购物列表
	var getCart = function(){
	    var $cookie = $.cookie("shopcart");
	    var json = strOper.getStr($cookie === undefined ? "" : $cookie);
	    var html = "";
        var arr = [];
	    $.each(json,function(inddex,val){
	        html += "<div class=\"f_shop\">"
                    + "<input class=\"f_s_cb ft\" type=\"checkbox\"/>"
                    + "<div class=\"f_s_goods ft\">"
                    + "<a href=\"happigo_detailPage.html\">"
                    + "<img class=\"f_s_g_img ft\" src=\"" + val.img + "\" />"
                    + "</a>"
                    + "<a href=\"happigo_detailPage.html\">"
                    + "<div class=\"f_s_g_font ft\">" + val.name + "</div>"
                    + "</a>"       
                    + "</div>"
                    + "<p class=\"f_s_price ft\">￥" + val.price + "</p>"
                    + "<div class=\"f_s_number ft\">"
     	      	 	+ "<a class=\"f_s_n_a f_s_n_a1 ft\" href=\"javascript:;\">-</a>"
                    + "<input class=\"f_s_n_font ft\" data-pid=\""+ val.id +"\" type=\"text\" value=\"" + val.count + "\"/>"
                    + "<a class=\"f_s_n_a f_s_n_a2 ft\" href=\"javascript:;\">+</a>"
                    + "</div>"
                    + "<p class=\"f_s_price1 ft\">" + val.priceSum + "</p>"
                    + "<div class=\"f_s_del ft\">"
                    + "<a class=\"f_s_del_a\" href=\"javascript:;\" data-del=\""+ val.id +"\"></a>"
              	 	+ "</div>"
                    + "</div>"
            arr.push(val.priceSum);
            console.log(arr)
	    });
        var n = 0;
        for (var i = 0; i < arr.length; i++) {
            n += parseInt(arr[i]);
        };
	    $(".f_shop_list").html(html);
        $(".f_sum_p2_num").html(n);
        $(".f_sum_p1_num").html(arr.length);
	};


	var addCart = function(str){
	    var $cookie = $.cookie("shopcart");
	    if($cookie){
	        //cookie文件存在
	        var newStr = strOper.addStr($cookie,str);
	        $.cookie("shopcart",newStr);
	        // console.log($.cookie("shopcart"));
	    }
	    else{
	        //cookie文件没有创建,用户第一次使用购物车
	        $.cookie("shopcart",str,{
	            expires:7
	        });
	    }
	    getCart();
	};
	//封装函数   字符串增加  删除
	var strOper = {
        addStr:function(str1,str2){
            var rowArr = str1.split("|");
            var isAdd = true;
            for(var i = 0; i < rowArr.length; i++){
                var colArr = rowArr[i].split("#");
                var str2Arr = str2.split("#");
                if(colArr[0] == str2Arr[0]){
                    isAdd = false;
                    colArr[1] = parseInt(colArr[1]) + 1;
                    rowArr[i] = colArr.join("#");
                    break;
                }
            }
            if(isAdd){
                rowArr.push(str2);
            }
            return rowArr.join("|");
        },
        getStr:function($cookie){
            var rowArr = $cookie === "" ? [] : $cookie.split("|");
            var newArr = [];
            for(var i = 0; i < rowArr.length; i++){
                var colArr = rowArr[i].split("#");
                var colObj = {};
                colObj.id = colArr[0];
                colObj.count = colArr[1];
                colObj.img = colArr[2];
                colObj.name = colArr[3];
                colObj.price = colArr[4];
                // console.log(colArr[1],colArr[4])
                colObj.priceSum = parseInt(colArr[1]) * parseInt(colArr[4]);
                newArr.push(colObj);
            }
            return newArr;
        },
        counter:function($cookie,id,type){
            var rowArr = $cookie.split("|");
            for(var i = 0; i < rowArr.length; i++){
                var colArr = rowArr[i].split("#");
                if(colArr[0] == id){
                    if(type == 1) colArr[1] = parseInt(colArr[1]) + 1;
                    else colArr[1] = parseInt(colArr[1]) - 1;
                    rowArr[i] = colArr.join("#");
                    break;
                }
            }
            return rowArr.join("|");
        },
        remove:function($cookie,id){
            var rowArr = $cookie.split("|");
            var newArr = [];
            for(var i = 0; i < rowArr.length; i++){
                var colArr = rowArr[i].split("#");
                if(colArr[0] != id){
                    newArr.push(colArr.join("#"));
                }
            }
            return newArr.join("|");
        }
    };
    /****************获取购物列表************************************/
	loadData(); //加载商品数据
    getCart(); //加载购物车列表
    $(".f_b_tui_ul").click(function(e){
        //使用事件代理实现为加入购物车按钮增加事件处理
        var $target = $(e.target);
        if($target.is("a")){
            var id = $target.attr("pid");
            var img = $target.parent().children().eq(0).attr("src");
            var name = $target.parent().children().eq(1).html();
            var price = $target.parent().children().eq(2).children().html();
            var str = id +"#" + 1 + "#" + img + "#" + name + "#" + price;
            // console.log(id,img,name,price,str)
            addCart(str);
        }
    });
    $(".f_shop_list").click(function(e){
        var $target = $(e.target);
        // console.log($target)
        if($target.attr("class") === "f_s_n_a f_s_n_a1 ft"){
            //购物车减少数量
            
            var num = parseInt($target.next().val());
            // console.log(num);
            if(num > 1){
                num--;
                $target.next().val(num);
                var id = $target.next().data("pid");
                var result = strOper.counter($.cookie("shopcart"),id,0);                
                $.cookie("shopcart",result);
                // console.log(id)
                getCart();
            }
        }
        else if($target.attr("class") === "f_s_n_a f_s_n_a2 ft"){
            //购物车增加数量
            var count = parseInt($target.prev().val()) + 1;
            // console.log(count);
            $target.prev().val(count);
            var id = $target.prev().data("pid");
            var result = strOper.counter($.cookie("shopcart"),id,1);
            $.cookie("shopcart",result);
            getCart();
        }
        else if($target.attr("class") === ("f_s_del_a")){
            //购物车删除功能
            // console.log(1)
            var id = $target.data("del");
            var result = strOper.remove($.cookie("shopcart"),id);
            $.cookie("shopcart",result);
            getCart();
        }
    });
    //计算总价  商品数量
  

});

