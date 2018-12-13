var code;
var wait = 60;
var show_flag=0;
var tel;
function time(o) {
	if(wait == 0) {
		o.value = "send code";
		o.style.backgroundColor = '#FFFFFF';
		o.style.color = '#263238';
		wait = 60;
	} else {

		o.setAttribute("disabled", true);
		o.style.backgroundColor = '#FF7766';
		o.style.color = 'white';
		o.value = "Send(" + wait + "s)";
		wait--;
		setTimeout(function() {
				time(o)
			},
			1000)
	}
}

function phone_varify_send() {

	tel = document.getElementById("tel").value;
re = /^(((13[0-9]{1})|(15[0-9]{1})|(1[0-9]{2}))+\d{8})$/;
	if(re.test(tel)) {
		//生成code
    code = parseInt(Math.random() * 10000);
	code=code.toString();
	var length = code.length;  
	console.log(length);
    if(code.length<4){  
        for(var i=0;i<4-length;i++){  
            code = "0"+code;  
        }  
    } 
//  补全长度
	content = "您的验证码是："+code+"。请不要把验证码泄露给其他人。";
	account = "C71135067";
	password = "c5f438acbf2efc05896cdb3981d12185";


 
		console.log(tel + "  code" + code);
//		$.ajax({
//			type: 'get',
//			url: 'http://106.ihuyi.com/webservice/sms.php?method=Submit&account=' + account + '&password=' + password + "&mobile=" + tel + "&content=" + content,
//			dataType: 'jsonp',
//			error:function(data){
//				console.log(data);
//			}
//		});
//链接API发送验证码

		time(document.getElementById("send_code"));
		swal("Great!", "Code sending,If you don't get the Code,Try Again 1 Min Later~~~", "success")

	} else {
		swal("Oh....", "Please Enter the Right Phone!!!", "error");
	}
}

function phone_varify_code() {
	var code_usr = document.getElementById("code").value;
	if(code_usr.length ==4) {
		console.log("code" + code_usr);
		if(code == code_usr) {
			swal("Great!", "Code is correct!!! Login Success!", "success");
			localStorage.user=tel;
//			成功登陆
		setTimeout(function(){
			var index = parent.layer.getFrameIndex(window.name);
			parent.layer.msg("Login Success~");
		parent.layer.close(index);
		parent.nav.account=tel;
		},2000);

		} else {
			swal("Opps...", "Wrong Varification Code!!!", "error");
		}

	}else{
		swal("Oh", "Please Fill The Blank!", "error");
	}
	return false;
}
function showPass(){
	console.log("change showing~");
	var pass_notshow=document.getElementById("password");
	if(show_flag==0){
		pass_notshow.type='text';
		show_flag = 1;
		document.getElementById("show_pass").src="img/openeye.jpg";
		}
		else {
			pass_notshow.type='password';
			show_flag = 0;
			document.getElementById("show_pass").src="img/closeeye.jpg";
		}
		}

