/**
 * Created by 10446 on 2017/5/28.
 */
var element;
layui.use('element', function(){
    element = layui.element();

//tab switch
    element.on('tab(fixed-tab)', function(data){
        // console.log(data);
        element.tabChange('normal-tab', data.index);
    });
    element.on('tab(normal-tab)', function(data){
        // console.log(data);
        element.tabChange('fixed-tab', data.index);
    });
    //…
});

