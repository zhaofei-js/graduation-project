$(function(){
	$(".f_r_tx").focus(function(){
		$(".f_r_txp").html("请输入用户名");
	});
	$(".f_r_tx").blur(function(){
		var $oValue = $(".f_r_tx").val();
		// console.log($oValue);
		if($oValue == ""){
			$(".f_r_txp").html("");
		}else if($oValue.length < 6 || $oValue.length > 12){
			$(".f_r_txp").html("！用户名必须为6——12位").css("color","#f00808");
		}else if(isTrue($oValue) == false){
			$(".f_r_txp").html("√ 用户名可使用").css("color","#000");
		}else{
			$(".f_r_txp").html("！用户名由数字，字母，下划线组成").css("color","#f00808");
		}
	});
	$(".f_r_complete").focus(function(){
		$(".f_r_cpp").html("请输入发送您手机上的验证码");
	});
	$(".f_r_complete").blur(function(){
		$(".f_r_cpp").html("");
	});
	$(".f_r_pw").focus(function(){
		$(".f_r_pwp").html("请输入您的密码，您的密码可能为数字、字母或下划线组成");
	});
	$(".f_r_pw").blur(function(){
		var $oValue = $(".f_r_pw").val();
		if($oValue == ""){
			$(".f_r_pwp").html("");
		}else if($oValue.length < 6 || $oValue.length > 12){
			$(".f_r_pwp").html("！密码必须为6——12位").css("color","#f00808");
		}else if($oValue[0] >= "0" && $oValue[0] <= "9"){
			$(".f_r_pwp").html("！密码首字母不能为数字").css("color","#f00808");
		}else if(isTrue($oValue) == false){
			$(".f_r_pwp").html("√ 密码正确").css("color","#000");
		}else{
			$(".f_r_pwp").html("！密码由数字，字母，下划线组成").css("color","#f00808");
		}
	});
	$(".f_r_pw1").focus(function(){
		$(".f_r_pwp1").html("请再次输入您的密码");
	});
	$(".f_r_pw1").blur(function(){
		if($(".f_r_pw1").val() == ""){
			$(".f_r_pwp1").html("");
		}else if($(".f_r_pw").val() == $(".f_r_pw1").val()){
			$(".f_r_pwp1").html("√ 密码相同").css("color","#000");
		}else{
			$(".f_r_pwp1").html("！两次输入不一致").css("color","#f00808");
		}
	});
	$(".f_r_complete1").focus(function(){
		$(".f_r_cpp1").html("请输入右侧验证码，不区分大小写");
	});
	$(".f_r_complete1").blur(function(){
		if($(".f_r_complete1").val() == ""){
			$(".f_r_cpp1").html("");
		}else if($(".f_r_bt1").val().toLowerCase() == $(".f_r_complete1").val().toLowerCase()){
			$(".f_r_cpp1").html("√ 验证码正确").css("color","#000");
		}else{
			$(".f_r_cpp1").html("！验证码不正确").css("color","#f00808");
		}
		
	});
	$(".f_r_bt1").on("click",function(){

		var $arr = [];
		for(var i = 0; i < 4; i++){
			var $num = parseInt(Math.random() * 100);
			if($num >= 0 && $num <= 9){
				$arr.push($num);
			}else if($num >= 65 && $num <= 90){
				$arr.push(String.fromCharCode($num));
			}else if($num >= 10 && $num <= 35){
				$arr.push(String.fromCharCode($num + 87));
			}else{
				i--;
			}
			var $str = $arr.join("");
			$(this).val($str);
		}
	});
	$(".f_r_regist").on("click",function(){
		if($(".f_r_txp").html() == "√ 用户名可使用" && $(".f_r_pwp").html() == "√ 密码正确" && $(".f_r_pwp1").html() == "√ 密码相同" && $(".f_r_cpp1").html() == "√ 验证码正确"){
			
		//使用事件代理实现为加入购物车按钮增加事件处理
			var $username = $(".f_r_tx").val();
			var $password = $(".f_r_pw").val();
			var str = $username + "#" + $password
			// console.log(str)
			var $cookie = $.cookie("regist");
			// console.log($cookie);
			if ($cookie) {
				var newStr = $cookie + "|" + str;
				$.cookie("regist", newStr,{
					expires: 7
				});
				
			} else {
				$.cookie("regist", str, {
					expires: 7
				});
			};
			alert("注册成功");
			location.href = "happigo_login.html"
			// console.log($.cookie("regist"))
		}else{
			alert("注册失败，请重新填写信息");
		}
	});
	function isTrue(n){
		for(var i = 0; i < n.length; i++){
			if(n[i] >= "0" && n[i] <= "9" || n[i] >= "a" && n[i] <= "z" || n[i] >= "A" && n[i] <= "Z" || n[i] == "_"){

			}else{
				break;
			}
			if(i == n.length){
				return true;
			}else{
				return false;
			}
		}
	}
});