/**
 * Created by 10446 on 2017/6/6.
 */
var preloaddata={
    preloadtitle:'A wonderful experience of taste buds'


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
        toptitle.toptitle='Intelligent refrigerator<span>5</span> ';
        topdesc.topdesc='Intelligent butler system';


    }else if (type=='zh-Cn'){
        preloadcontent.preloadtitle="一次味蕾的精彩体验";
        toptitle.toptitle='第<span>5</span>代  智能制冷冰箱';
        topdesc.topdesc='智能管家系统';
    }
}




//此页面该文字内容