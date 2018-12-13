// JavaScript Document
var vm = new Vue({

	el:"#app",
	data :{
		productList:[],
		totalMoney:0
		
		},
		filters:{
		
			},
		mounted: function() {
			this.createtView();
			},
		methods: {
			createView: function () {

				this.$http.get("data/cartData.json",{"id" :123}).then(function(res=>{
					var _this=this;
					this.productList = res.data.result.list;
					this.totalMoney = res.data.result.totalMoney;

				});
			}
		}
});