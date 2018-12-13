/**
 * Created by 10446 on 2017/5/28.
 */
var nav=new Vue({
			el:'.header',
			data:{
				homepage: "Home Page",
				television: "Television",
				refrigerator: "Refrigerator",
				washingmachine: "Washing Machine",
				aircleaner: "Air Cleaner",
				vaccumcleaner: "Vaccum Cleaner",
				language: "Language Select",
				contactus: "Contact Us",
				airconditioner:"Air Conditioner",
				account:" Log in",
				cart:"Cart"
			}
			
		});
		var lan =localStorage.language;
		changeLanguage(lan);
		changetabLanguage(lan);
changecontentLanguage(lan);
function changeLanguage(type){
	if(type=='en-En'){
		console.log("changetoEN");
		localStorage.language="en-En";
		nav.homepage="Home Page";
		nav.television="Televison";
		nav.refrigerator="Refrigerator";
		nav.washingmachine="Washing Machine";
		nav.aircleaner="Air Cleaner";
		nav.vaccumcleaner="Vaccum Cleaner";
		nav.language="Language Select";
		nav.contactus="Contact US";
		nav.airconditioner="Air Conditioner";
		nav.account=" Log in";
		nav.cart=" Cart";
		
	}else if(type=='zh-Cn'){
		localStorage.language="zh-Cn";
		console.log("changetoCh");
		nav.homepage="首页";
		nav.television="电视机";
		nav.refrigerator="冰箱";
		nav.washingmachine="洗衣机";
		nav.aircleaner="空气净化器";
		nav.vaccumcleaner="吸尘器";
		nav.language="语言选择";
		nav.contactus="联系我们";
		nav.airconditioner="空调";
		nav.account=" 登录";
		nav.cart=" 购物车";
		
	}
}

