/**
 * Created by 10446 on 2017/6/6.
 */
var preloaddata={
    preloadtitle:'A sudden revolution in washing machines'


};
var preloadcontent=new Vue( {
    el:'#preloadcontent',
    data:preloaddata

} );

var topdata={
    toptitle:'Reduce pollution washing machine<span>3</span> ',
    topdesc:'Clothes cleaner'
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
        preloadcontent.preloadtitle="A sudden revolution in washing machines";
        toptitle.toptitle='Reduce pollution TCL washing machine<span>3</span>';
        topdesc.topdesc='Clothes cleaner';


    }else if (type=='zh-Cn'){
        preloadcontent.preloadtitle="一场突如其来的洗衣机革命";
        toptitle.toptitle='第<span>3</span>代 TCL免污式洗衣机';
        topdesc.topdesc='衣物更清洁';
    }
}