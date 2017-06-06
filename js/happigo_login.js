$(function(){
	$(".f_r_tx").focus(function(){
		$(".f_r_txp").html("登录名可能是您的手机、邮箱或用户名");
	});
	$(".f_r_tx").blur(function(){
		var $oValue = $(".f_r_tx").val();
		if($oValue == ""){
			$(".f_r_txp").html("").css("color","#000");
		}else if($oValue.length < 6 || $oValue.length > 12 && $oValue[0] >= "0" && $oValue[0] <= "9"  && isTrue($oValue)){
			$(".f_r_txp").html("！不存在此账号").css("color","#f00808");
		}else{
			$(".f_r_txp").html("√ 账号正确").css("color","#000");
		}
	});
	$(".f_r_pw").focus(function(){
		$(".f_r_pwp").html("您的密码可能是数字、字母或下划线组成");
	});
	$(".f_r_pw").blur(function(){
		var $oValue = $(".f_r_pw").val();
		if($oValue == ""){
			$(".f_r_pwp").html("").css("color","#000");
		}else if($oValue.length < 6 || $oValue.length > 12){
			$(".f_r_pwp").html("！密码必须6——12位").css("color","#f00808");
		}else{
			$(".f_r_pwp").html("√ 密码输入正确").css("color","#000");
		}
	});
	$(".f_r_complete").focus(function(){
		$(".f_r_cpp").html("请输入右侧验证码，不区分大小写");
	});
	$(".f_r_complete").blur(function(){
		if($(".f_r_complete").val() == ""){
			$(".f_r_cpp").html("");
		}else if($(".f_r_bt").val().toLowerCase() == $(".f_r_complete").val().toLowerCase()){
			$(".f_r_cpp").html("√ 验证码正确").css("color","#000");
		}else{
			$(".f_r_cpp").html("！验证码不正确").css("color","#f00808");
		}
	});
	$(".f_r_bt").on("click",function(){

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
	$(".f_r_login").on("click",function(){

		var $cookie = $.cookie("regist");console.log($cookie)
		var arr = $cookie.split("|");
		var username = $(".f_r_tx").val();
		var password = $(".f_r_pw").val();
		for (var i = 0; i < arr.length; i++) {
			var arr1 = arr[i].split("#");
			}
		if(arr1[0] ===username && arr1[1] === password && $(".f_r_cpp").html() == "√ 验证码正确"){
			alert("登陆成功");
			location.href = "happigo.html";
		}else{
			alert("账户密码不匹配，登录失败");
		}

		// console.log($cookie)
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