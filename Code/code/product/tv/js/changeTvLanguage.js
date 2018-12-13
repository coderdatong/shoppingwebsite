/**
 * Created by 10446 on 2017/6/6.
 */
var preloaddata={
    preloadtitle:'A major leap in screen technology'


};
var preloadcontent=new Vue( {
    el:'#preloadcontent',
    data:preloaddata

} );

var topdata={
    toptitle:'Super Televission<span>4</span> 55"',
    topdesc:'High-end flagship TV'
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
        preloadcontent.preloadtitle="A major leap in screen technology";
        toptitle.toptitle='Super Televission<span>4</span> 55"';
        topdesc.topdesc='High-end flagship TV';


    }else if (type=='zh-Cn'){
        preloadcontent.preloadtitle="一次屏幕技术的重大飞跃";
        toptitle.toptitle='第<span>4</span>代 55 寸超级瓜皮电视机';
        topdesc.topdesc='坐着皮皮虾和我肩并肩';
    }
}