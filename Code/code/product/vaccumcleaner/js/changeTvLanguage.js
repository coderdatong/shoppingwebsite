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
        preloadcontent.preloadtitle="The Protection Of Enviroment";
        toptitle.toptitle='Low depltion<span>3</span> ';
        topdesc.topdesc='Micro-processing system';


    }else if (type=='zh-Cn'){
        preloadcontent.preloadtitle="环境的守护者";
        toptitle.toptitle='第<span>3</span>代  低消耗吸尘器';
        topdesc.topdesc='细微处理化系统';
    }
}




//此页面该文字内容