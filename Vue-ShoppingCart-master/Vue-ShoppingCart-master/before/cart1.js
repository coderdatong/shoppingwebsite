// JavaScript Document

var vm= new Vue({

	el:'#app ',
	data :{
		productList:[],
		totalMoney:0,
		delflag:false,
		curproduct:''
		
		},
		filters:{
			formatMoney :function(value){
			return "$"+value.toFixed(2);
			}
			},
		mounted: function() {
			this.$nextTick(function(){
				this.createView();
			})
		},
		methods: {
			createView: function () {
				this.$http.get("data/cartData.json", {'id': 123}).then(function (res) {
					console.log(res);
					this.productList = res.data.result.list;
					console.log(res.data.result.list)


				});
			},
			changeMoney: function(product,way){

				if(way>0){
					product.productQuantity++;
				}else{
					product.productQuantity=product.productQuantity-1;
					if(product.productQuantity<1){
						product.productQuantity=1;
					}
				}
			},
			caltotalMoney:function(){
				this.totalMoney = 0;
				this.productList.forEach((item,index)=>{
					this.totalMoney += item.productPrice*item.productQuantity;
			})
			},
			delconfirm:function(item){
				this.delflag=true;
				this.curproduct=item;

			},
			delProduct:function(){

				var index=this.productList.indexOf(this.curproduct);
				this.productList.splice(index,1);
				this.delflag=false;

			}


		}

});