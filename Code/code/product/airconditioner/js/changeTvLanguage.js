/**
 * Created by 10446 on 2017/6/6.
 */
var preloaddata={
    preloadtitle:'Enjoy your life at any time'


};
var preloadcontent=new Vue( {
    el:'#preloadcontent',
    data:preloaddata

} );

var topdata={
    toptitle:'Intelligent refrigerator<span>5</span> ',
    topdesc:'Intelligent butler system'
}

var toptitle=new Vue( {
    el:'#toptitle',
    data:topdata
    

} );
var topdesc=new Vue( {
    el:'#topdesc',
    data:topdata

} );

function changecontentLanguage(type) {
    console.log("changetvlanguage");
    if (type == 'en-En') {
        preloadcontent.preloadtitle="A wonderful experience of taste buds";
        toptitle.toptitle=' ';
        topdesc.topdesc='';


    }else if (type=='zh-Cn'){
        preloadcontent.preloadtitle="在任何时候都要享受你的生活";
        toptitle.toptitle='';
        topdesc.topdesc='';
    }
}




//此页面该文字内容