window.onload = function(){
    var obtn = document.getElementById("gotopbtn");
    var timer = null;
    var isTop = true;

    //获取页面可视区高度
    var clientHeight = document.documentElement.clientHeight+200;

var fixedtab=document.getElementById("fiexedtab");
    //滚动条滚动时触发
    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(osTop >=clientHeight){
            obtn.style.display = "block";

        }else{
            obtn.style.display = "none";
        }
        
        
if(osTop >=55){
            fixedtab.style.display = "block";

        }else{
            fixedtab.style.display = "none";
        }





        if(!isTop){
            clearInterval(timer);

        }
        isTop = false;
    }

    obtn.onclick = function(){



        //设置定时器 set timer
        timer = setInterval(function(){
            //	获取滚动条距离顶部的高度 get the height of Scroll to the top.
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            // alert(osTop);

            //使滚动速度由快到慢
            var ispeed = Math.floor(-osTop /6); //向下取整
            document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;

            isTop = true;
            if(osTop == 0){
                //防止网页疯掉
                clearInterval(timer)

            }


        },30);

    }

}
