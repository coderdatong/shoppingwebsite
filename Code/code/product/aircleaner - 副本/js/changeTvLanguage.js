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
    toptitle:'Super Air Cleaner <span>4</span>',
    topdesc:'High-end Air Cleaner'
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
        preloadcontent.preloadtitle="Clean each breath of air";
        toptitle.toptitle='Super Air Cleaner <span>4</span>';
        topdesc.topdesc='High-end Air Cleaner';


    }else if (type=='zh-Cn'){
        preloadcontent.preloadtitle="超级嘿嘿嘿科技";
        toptitle.toptitle='第<span>4</span>代 超级瓜皮空气净化器';
        topdesc.topdesc='坐着皮皮虾和我肩并肩';
    }
}