/**
 * Created by guodatong on 2017/6/6.
 */
var vm = new Vue({

    el:"#app",
    data :{
        productList:[],
        totalMoney:0

    },
    filters:{

    },
    mounted: function() {
        this.cartView();
    },
    methods: {
        cartView: function () {
            var _this = this;
            this.$http.get("data/cartData.json",{"id" :123}).then(function(res){
                _this.productList = res.data.result.list;
                _this.totalMoney = res.data.result.totalMoney;

            });
        }
    }
});