/**
 * Created by 10446 on 2017/5/28.
 */
function showQRcode(dom){
	
//layer.msg('Scan The WeChat QR Code!');
//setTimeout(function(){
//	layer.open({
//type: 1,
//title: false,
//closeBtn: 0,
//area: '516px',
//skin: 'layui-layer-nobg', //没有背景色
//shadeClose: true,
//content: '<img src="img/wechat.jpg" />'
//});
//},1500);




layer.open({
  type: 4,
  tips: [3, "#555555"],
  content: ['<img src="img/wechat.png" width="150px" height="150px" />',dom] //数组第二项即吸附元素选择器或者DOM
});    
layer.msg('Scan The WeChat QR Code!');
}

function login(){
	console.log("login");
	if(localStorage.user==null){
		layer.open({
  type: 2,
  title: 'Please Login~',
  shadeClose: true,
  shade: 0.5,
  area: ['380px', '580px'],
  content: './login/' //iframe的url
}); 
	}else{
		layer.msg('You Already Login!');
		nav.account=localStorage.user;
		layer.confirm('You Already Login ,Are u want to Log out?', {
		  btn: ['Yes','No'] //按钮
		}, function(){
		  layer.msg('Loging Out', {icon: 1});
		  localStorage.removeItem('user');
		  if(localStorage.language='zh-Cn'){
		  	nav.account=" 登录";
		  }else if(localStorage.language='en-En'){
		  	nav.account=' Log in';
		  }
		}, function(){
		  
		});
	}
}
